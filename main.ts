import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entryPath = join(__dirname, 'entry.txt');
const entryBytes = readFileSync(entryPath);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

const targetPath = join(outputDir, 'entry.txt');
writeFileSync(targetPath, entryBytes);
