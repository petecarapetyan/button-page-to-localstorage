'use strict';

import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const targetDir = process.env.FIXME && process.env.FIXME.length>0? process.env.FIXME : "./docs"

export default [{
  input: 'src/index.ts',
  output: {
    file: targetDir +'/fixme.js',
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
