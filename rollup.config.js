import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import url from '@rollup/plugin-url';

import svgr from '@svgr/rollup';

import packageJson from './package.json';

const config = {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss({
      extensions: ['.css'],
      extract: true,
      minimize: true,
      plugins: [postcssPresetEnv({ stage: 0 }), cssnano()],
    }),
    terser({
      output: {
        comments: false,
      },
    }),
    url({ exclude: ['**/*.svg'] }),
    svgr(),
  ],
};

export default config;
