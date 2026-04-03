import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const email = user.emailAddresses?.[0]?.emailAddress;
  if (!email) {
    throw new Error("No email address found for current user");
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: name || null,
        imageUrl: user.imageUrl,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("checkUser error:", error);
    throw error;
  }
};