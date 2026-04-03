import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finbit", // Unique app ID
  name: "Finbit", // App name
  // Ensure local dev connects to the local Inngest dev server (needs `npx inngest dev` running)
  isDev: process.env.NODE_ENV !== "production",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});