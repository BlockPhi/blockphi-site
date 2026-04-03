import puppeteer from 'puppeteer';
import { mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const screenshotDir = join(__dirname, 'temporary-screenshots');

// Ensure directory exists
mkdirSync(screenshotDir, { recursive: true });

// Auto-increment: find highest existing N
const existing = readdirSync(screenshotDir)
  .filter(f => /^screenshot-\d+/.test(f))
  .map(f => parseInt(f.match(/^screenshot-(\d+)/)[1], 10))
  .filter(n => !isNaN(n));

const nextN = existing.length > 0 ? Math.max(...existing) + 1 : 1;

// Args
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const filename = label
  ? `screenshot-${nextN}-${label}.png`
  : `screenshot-${nextN}.png`;

const outPath = join(screenshotDir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);
