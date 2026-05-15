// File purpose: lib\prisma.js
// This file contains shared utilities, server helpers, and integration code used across the app.
// It is written to help beginners understand how this file connects to the rest of the app.

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db =
  globalThis.prisma ||
  new PrismaClient({
    adapter: new PrismaPg(pool),
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}