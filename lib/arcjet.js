// File purpose: lib\arcjet.js
// This file contains shared utilities, server helpers, and integration code used across the app.
// It is written to help beginners understand how this file connects to the rest of the app.

import Arcjet, { tokenBucket } from "@arcjet/next";

const aj = new Arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,
      interval: 60,
      capacity: 10,
    }),
  ],
});

export default aj;
