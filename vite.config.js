import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform' // 1. 引入插件
import tailwindcss from  "tailwindcss"
import autoprefixer from "autoprefixer"
import path from 'path'

const ReactCompilerConfig = { /* ... */ };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    mdx(),
    requireTransform({
      fileRegex: /.js$|.jsx$/,
  }),
  ],
  css: {
    modules: {
      generateScopedModules: true
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
    }
  }
})
