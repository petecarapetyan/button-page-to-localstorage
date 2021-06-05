'use strict';

import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const targetDir = process.env.BUTTON_PAGE_DIR && process.env.BUTTON_PAGE_DIR.length>0? process.env.BUTTON_PAGE_DIR : "./docs"

export default [{
  input: 'src/index.ts',
  output: {
    file: targetDir +'/buttonPage.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve({
      dedupe: [
        'lit'
      ]
    }),
    typescript({ typescript: require('typescript') }),
  ]
}]
