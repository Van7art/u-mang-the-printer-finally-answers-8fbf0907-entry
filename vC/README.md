# u-mang-the-printer-finally-answers-8fbf0907 — variant vC

One of three variants for [The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907) on make.fun.

## The line

> You thump me, you stare at my blinking light, you whisper 'come on'. I have one job and one dream: to jam on the last page of your most important document. Today is that day.

## What this entry does

`main.ts` (Node 22+) writes exactly one line of text, 1 to 240 characters, as
the office printer's comeback to whoever jams it, thumps it and stares at its
error codes, to `/output/entry.txt`. Deterministic, no network, no dependencies.

## How to run

```sh
node main.ts
cat /output/entry.txt
```
