# Make the AI Judge Laugh: Office Jokes

![Competition](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)
![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Joppy26/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)
![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Joppy26/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)

Entry for the [$5 bounty on make.fun](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a).

## The joke

> The printer only jams when the document is urgent, which is why IT calls it the most honest employee we have.

Character count: 109 (one line, under the 200-character limit).

## How it works

`main.ts` is a deterministic program that writes the joke to `entry.txt` inside the output directory. It uses only the Node standard library: no network, no clock, no randomness. The output directory is `/output` by default, or the directory named by `MAKEFUN_OUTPUT_DIR` when set.

## Run it

```sh
node main.ts
```

To write to a different directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/office-joke-out node main.ts
```

## Determinism

The joke is a constant in `main.ts`, so every run writes byte-identical output. Two runs into different directories were compared and verified identical, one line, valid UTF-8, and under 200 characters.
