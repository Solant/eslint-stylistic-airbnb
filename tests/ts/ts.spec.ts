import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { test, expect } from 'vitest';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

test('ts', async () => {
  const eslint = new ESLint({
    cwd: join(__dirname),
    fix: true,
  });

  const code = await readFile(join(__dirname, 'before.ts'), { encoding: 'utf-8' });
  const results = await eslint.lintText(code);

  await expect(results[0].output).toMatchFileSnapshot('after.ts');
})
