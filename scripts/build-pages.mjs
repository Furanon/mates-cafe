#!/usr/bin/env node
/**
 * Build the static GitHub Pages site.
 *
 * The Astro app normally runs on Vercel and includes server endpoints under
 * `src/pages/api`. GitHub Pages can only serve static files, so those routes
 * are moved aside for this build and restored afterwards.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const apiDir = resolve(root, 'src/pages/api');
const hiddenApiDir = resolve(root, 'src/pages/_api');
let movedApi = false;
let status = 0;

if (existsSync(apiDir)) {
  if (existsSync(hiddenApiDir)) {
    console.error(
      `Refusing to build: both ${apiDir} and ${hiddenApiDir} exist.`
    );
    process.exit(1);
  }

  renameSync(apiDir, hiddenApiDir);
  movedApi = true;
}

try {
  const result = spawnSync('pnpm', ['exec', 'astro', 'build'], {
    env: {
      ...process.env,
      GITHUB_PAGES: 'true',
      PUBLIC_DEPLOY_TARGET: 'github-pages',
      SKIP_KEYSTATIC: '1',
    },
    stdio: 'inherit',
  });

  if (result.error) throw result.error;
  status = result.status ?? 1;
} finally {
  if (movedApi) renameSync(hiddenApiDir, apiDir);
}

process.exit(status);
