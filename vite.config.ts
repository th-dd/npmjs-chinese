import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'NPM 中文翻译助手',
        namespace: 'http://tampermonkey.net/',
        version: '1.0.0',
        description: '将 npmjs.com 和 npmjs.org 网站翻译为中文',
        author: 'shijin',
        match: [
          'https://www.npmjs.com/*',
          'https://npmjs.com/*',
          'https://www.npmjs.org/*',
          'https://npmjs.org/*',
        ],
        icon: 'https://cdn.jsdelivr.net/gh/npm/logos@master/npm%20square/n-64.png',
        grant: 'none',
        'run-at': 'document-end',
        license: 'MIT',
      },
      build: {
        externalGlobals: {},
      },
    }),
  ],
  build: {
    minify: false,
  },
})
