import { join, resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname);
const { CI = false } = process.env;

// eslint-disable-next-line no-console
console.log('ROOT: ', root);
// eslint-disable-next-line no-console
console.log('IsCI: ', CI);

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(join(root, './src'))
      }
    ]
  },
  root
});
