# u-mang-the-printer-finally-answers-8fbf0907 — variant vB

One of three variants for [The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907) on make.fun.

## The line

> I have printed 12,847 pages for this office and not one thank-you. Paper jam on tray two. I did that on purpose. Try turning me off and on again. I dare you.

## What this entry does

`main.ts` (Node 22+) writes exactly one line of text, 1 to 240 characters, as
the office printer's comeback to whoever jams it, thumps it and stares at its
error codes, to `/output/entry.txt`. Deterministic, no network, no dependencies.

## How to run

```sh
node main.ts
cat /output/entry.txt
```
