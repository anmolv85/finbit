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
