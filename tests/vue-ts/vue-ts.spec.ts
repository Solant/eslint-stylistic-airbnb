import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { test, expect } from 'vitest';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

test('vue-ts', async () => {
  const eslint = new ESLint({
    cwd: join(__dirname),
    fix: true,
  });

  const results = await eslint.lintFiles(['before.vue']);

  console.log(results[0]);

  await expect(results[0].output).toMatchFileSnapshot('after.vue');
})
