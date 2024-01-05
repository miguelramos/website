import reactRefresh from '@vitejs/plugin-react-refresh';
import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = resolve(__dirname);
const { CI = false } = process.env;

// eslint-disable-next-line no-console
console.log('ROOT: ', root);
// eslint-disable-next-line no-console
console.log('IsCI: ', CI);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [reactRefresh()],
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
