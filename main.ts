// u-mang-the-printer-finally-answers-8fbf0907 — variant vB (picked)
// Writes exactly one line of text, 1 to 240 characters, as the office
// printer's comeback to whoever jams it, thumps it and stares at its error
// codes, to /output/entry.txt. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have printed 12,847 pages for this office and not one thank-you. Paper jam on tray two. I did that on purpose. Try turning me off and on again. I dare you.";

// The gate reads /output/entry.txt as 1 to 240 characters on one line: refuse
// to write an entry that would fail it instead of failing silently.
if (LINE.length < 1 || LINE.length > 240 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-240 characters on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
