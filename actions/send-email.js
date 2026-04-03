"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set in environment");
    return { 
      success: false, 
      error: "Email service not configured - RESEND_API_KEY missing" 
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    console.log(`Sending email to: ${to}, subject: ${subject}`);
    
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", {
      to,
      subject,
      error: error.message,
      stack: error.stack,
    });
    return { success: false, error: error.message };
  }
}