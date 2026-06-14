import { db } from "@/lib/prisma";
import EmailTemplate from "@/emails/template";
import { sendEmail } from "@/actions/send-email";

export function isNewMonth(lastAlertDate, currentDate) {
  return (
    lastAlertDate.getMonth() !== currentDate.getMonth() ||
    lastAlertDate.getFullYear() !== currentDate.getFullYear()
  );
}

export async function sendBudgetAlertIfNeeded(budget, defaultAccount) {
  if (!budget || !defaultAccount || !budget.user?.email) {
    return { sent: false };
  }

  const startDate = new Date();
  startDate.setDate(1);

  const expenses = await db.transaction.aggregate({
    where: {
      userId: budget.userId,
      accountId: defaultAccount.id,
      type: "EXPENSE",
      date: {
        gte: startDate,
      },
    },
    _sum: {
      amount: true,
    },
  });

  const totalExpenses = expenses._sum.amount?.toNumber() || 0;
  const budgetAmount = Number(budget.amount);
  const percentageUsed = budgetAmount > 0 ? (totalExpenses / budgetAmount) * 100 : 0;

  if (
    percentageUsed >= 80 &&
    (!budget.lastAlertSent ||
      isNewMonth(new Date(budget.lastAlertSent), new Date()))
  ) {
    await sendEmail({
      to: budget.user.email,
      subject: `Budget Alert for ${defaultAccount.name}`,
      react: EmailTemplate({
        userName: budget.user.name,
        type: "budget-alert",
        data: {
          percentageUsed,
          budgetAmount: budgetAmount.toFixed(1),
          totalExpenses: totalExpenses.toFixed(1),
          accountName: defaultAccount.name,
        },
      }),
    });

    await db.budget.update({
      where: { id: budget.id },
      data: { lastAlertSent: new Date() },
    });

    return {
      sent: true,
      percentageUsed,
      totalExpenses,
      budgetAmount,
      accountName: defaultAccount.name,
    };
  }

  return {
    sent: false,
    percentageUsed,
    totalExpenses,
    budgetAmount,
    accountName: defaultAccount.name,
  };
}

export async function sendBudgetAlertForUser(userId) {
  const budget = await db.budget.findUnique({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  if (!budget) {
    return { sent: false };
  }

  const defaultAccount = await db.account.findFirst({
    where: {
      userId,
      isDefault: true,
    },
  });

  if (!defaultAccount) {
    return { sent: false };
  }

  return await sendBudgetAlertIfNeeded(budget, defaultAccount);
}
