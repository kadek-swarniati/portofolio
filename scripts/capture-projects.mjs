import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
const projects = [
  {
    name: 'sociality',
    url: 'https://sociality-social-media-app.vercel.app/',
  },
  {
    name: 'statrelease',
    url: 'https://statrelease.vercel.app/',
  },
  {
    name: 'statistical-digital-twin',
    url: 'https://statistical-digital-twin.vercel.app/',
  },
  {
    name: 'codecue',
    url: 'https://codecue-kappa.vercel.app/',
  },
];
const outputDirectory = path.join(process.cwd(), 'public', 'projects');
fs.mkdirSync(outputDirectory, { recursive: true });
const browser = await chromium.launch({
  headless: true,
});
try {
  for (const project of projects) {
    const page = await browser.newPage({
      viewport: {
        width: 1440,
        height: 900,
      },
      deviceScaleFactor: 1,
    });
    try {
      console.log(`Capturing ${project.name}...`);
      await page.goto(project.url, {
        waitUntil: 'domcontentloaded',
        timeout: 45000,
      });
      await page.waitForTimeout(3000);
      await page.screenshot({
        path: path.join(outputDirectory, `${project.name}.png`),
        fullPage: false,
        animations: 'disabled',
      });
      console.log(`Saved ${project.name}.png`);
    } catch (error) {
      console.error(`Failed to capture ${project.name}:`, error.message);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
