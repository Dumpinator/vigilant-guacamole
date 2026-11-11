import { defineConfig } from '@playwright/test';
import { fileURLToPath } from 'node:url';

const appDirectory = fileURLToPath(new URL('../../myBook2023/', import.meta.url));
// Local verification preserves the historical dist/ tracked in Git.
const buildDirectory = process.env.CI_BUILD_DIR === '.local-build/ci' ? '.local-build/ci' : 'dist';

export default defineConfig({
  testDir: '.',
  testMatch: 'portfolio.spec.mjs',
  timeout: 30_000,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: 1,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    browserName: 'chromium',
    viewport: { width: 1440, height: 1000 },
    trace: 'retain-on-failure',
  },
  webServer: {
    cwd: appDirectory,
    command: `node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort --outDir ${buildDirectory}`,
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
