// u-mang-the-printer-finally-answers-8fbf0907 — variant vC
// Writes exactly one line of text, 1 to 240 characters, as the office
// printer's comeback to whoever jams it, thumps it and stares at its error
// codes, to /output/entry.txt. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You thump me, you stare at my blinking light, you whisper 'come on'. I have one job and one dream: to jam on the last page of your most important document. Today is that day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
