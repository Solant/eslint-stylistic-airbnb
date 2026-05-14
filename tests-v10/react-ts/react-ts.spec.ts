import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { test, expect } from 'vitest';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

test.skip('react-ts', async () => {
  const eslint = new ESLint({
    cwd: join(__dirname),
    fix: true,
  });

  const results = await eslint.lintFiles(['before.tsx']);

  await expect(results[0].output).toMatchFileSnapshot('after.tsx');
})
