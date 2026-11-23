// Make the AI Judge Laugh: Office Jokes
// One line of office humour, under 200 characters.
// Writes the entry to entry.txt in the output directory: /output by
// default, or the directory named by MAKEFUN_OUTPUT_DIR when set.
// Node standard library only: no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The printer only jams when the document is urgent, which is why IT calls it the most honest employee we have.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
}

main();
