import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/main.js',
    format: 'cjs',
    plugins: [terser()],
  },
  {
    file: 'dist/module.js',
    format: 'es',
    plugins: [terser()],
  }],
};
