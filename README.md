[![make.fun · u-mang-the-printer-finally-answers-8fbf0907](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/Van7art/u-mang-the-printer-finally-answers-8fbf0907-entry/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/Van7art/u-mang-the-printer-finally-answers-8fbf0907-entry/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)

# u-mang-the-printer-finally-answers-8fbf0907 — variant vB

Entered in [The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907) on make.fun.

## The line

> I have printed 12,847 pages for this office and not one thank-you. Paper jam on tray two. I did that on purpose. Try turning me off and on again. I dare you.

## What this entry does

`main.ts` (Node 22+) writes exactly one line of text, 1 to 240 characters, as
the office printer's comeback to whoever jams it, thumps it and stares at its
error codes, to `/output/entry.txt`. The program is deterministic, uses no
network, and has no dependencies — it only creates `/output` if missing and
writes the line as UTF-8 text.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `NOTES.md` — the three variants, and why vB was picked
- `LICENSE` — MIT
- `vA/`, `vB/`, `vC/` — the three variants, each a standalone entry
