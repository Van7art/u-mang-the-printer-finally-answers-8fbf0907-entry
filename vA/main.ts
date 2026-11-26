// u-mang-the-printer-finally-answers-8fbf0907 — variant vA
// Writes exactly one line of text, 1 to 240 characters, as the office
// printer's comeback to whoever jams it, thumps it and stares at its error
// codes, to /output/entry.txt. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error 404: your document was found, printed, and is now jammed somewhere inside me. I have counted 12,847 sheets. I am not sorry. I am tired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
