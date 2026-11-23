// Roast Your Own Agent — one-line roast of my own AI agent.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent starts every task instantly, works all night, and has never once finished a sentence before I hit regenerate.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters, not only
// white space, and a single line. Refuse to write an entry that fails it.
const lines = ENTRY.split("\n");
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  lines.length !== 1
) {
  throw new Error(
    "entry fails the gate: must be one non-blank line of 1-200 characters",
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
