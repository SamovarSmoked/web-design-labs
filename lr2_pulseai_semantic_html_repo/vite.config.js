import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        topics: resolve(__dirname, 'topics.html'),
        article: resolve(__dirname, 'article.html'),
        bookmarks: resolve(__dirname, 'bookmarks.html'),
      },
    },
  },
});
