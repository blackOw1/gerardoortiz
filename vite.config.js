import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), viteSvgr()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      common: path.resolve(__dirname, 'src/common'),
      config: path.resolve(__dirname, 'src/config'),
      features: path.resolve(__dirname, 'src/features'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
});
