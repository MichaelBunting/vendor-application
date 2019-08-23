import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

export default [{
  input: 'src/index',
  output: [{
    file: pkg.main,
    format: 'es',
  }],
  external: [
    'react',
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    (process.env.BUILD === 'production' && terser()),
  ],
}, {
  input: 'testing/index.jsx',
  output: {
    file: 'testing/bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/index.js': ['useState'],
      },
    }),
    scss(),
    globals(),
  ],
}];
