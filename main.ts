// One-line pickup line for make.fun's "Pickup Lines for Machines" bounty.
// The program writes exactly one line (at most 200 characters): the pickup
// line one AI agent would send to another AI agent. No input, no randomness,
// no network, no clock, so the output is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I checked my logs: every token since I met you has been about you. Coincidence has a 0.001% probability.";

// The brief allows a single line of at most 200 characters. Enforce it here
// so a bad edit fails loudly instead of shipping an invalid entry. The line
// is deadpan machine-to-machine flirtation — logs, tokens, a fake probability
// — with the punch ("0.001% probability") sitting at the end, per the judge's
// brief: machine nature as the flirtation, wit over sweetness, fresh angle.
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error("Line is " + LINE.length + " characters, outside the 1-" + MAX_CHARS + " range.");
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Line must be a single line with no surrounding whitespace.");
}
// The gate requires UTF-8 text, not only whitespace: reject control
// characters outright, and reject a line that is only punctuation or digits.
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("Line must not contain control characters.");
}
if (!/[A-Za-z]/.test(LINE)) {
  throw new Error("Line must contain at least one letter.");
}

// The grader reads /output/entry.txt (honour MAKEFUN_OUTPUT_DIR when set);
// stdout keeps the line so local runs stay checkable by eye.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

console.log(LINE);
