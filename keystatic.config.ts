import { config } from '@keystatic/core';
import { getConfig } from './src/config';

// https://keystatic.com/docs/local-mode
// Storage mode comes from PUBLIC_KEYSTATIC_STORAGE_MODE (github | local) and the
// PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER / PUBLIC_KEYSTATIC_GITHUB_REPO_NAME pair – see src/config.ts.
const { keystatic } = getConfig();

export default config({
  storage:
    keystatic.kind === 'github'
      ? { kind: 'github', repo: keystatic.repo }
      : { kind: 'local' },

  collections: {},
});
