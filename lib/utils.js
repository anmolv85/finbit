// File purpose: lib\utils.js
// This file contains shared utilities, server helpers, and integration code used across the app.
// It is written to help beginners understand how this file connects to the rest of the app.

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// cn: shared utility or helper used by application code on server or client.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
