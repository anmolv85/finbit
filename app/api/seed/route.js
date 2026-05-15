// File purpose: app\api\seed\route.js
// This file is part of the Next.js application routes, pages, or layout and defines how the user interface and data are rendered.
// It is written to help beginners understand how this file connects to the rest of the app.

import { seedTransactions } from "@/actions/seed";

// GET: UI component used to render part of the Finbit interface and receive props from a parent.
export async function GET() {
  const result = await seedTransactions();
  return Response.json(result);
}