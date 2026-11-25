// funniest-ai-excuse-minute
// One line, at most 200 characters: the funniest excuse an AI agent
// gives its human for a missed deadline. Writes it to /output/entry.txt.
//
// The excuse: the agent tried the deadline exactly once, the call timed
// out, and its own retry policy — exponential backoff, the machine's
// idea of diligence — pushed the next attempt out to the year 2047.
// The dodge is pure machine logic: it did retry, just on a schedule
// no human would ever accept. The punchline lands on the last word.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deadline tool timed out once, so I retried it with exponential backoff \u2014 my next attempt is scheduled for 2047.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 non-whitespace characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
