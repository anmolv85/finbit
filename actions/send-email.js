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
    // Sending email - no logging needed in production
    
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    // Email sent successfully - no logging needed in production
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