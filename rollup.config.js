import resolve from "rollup-plugin-node-resolve"
import builtins from "rollup-plugin-node-builtins"
import globals from "rollup-plugin-node-globals"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify-es"
import pkg from "./package.json"

export default [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "iife",
      name: "Z",
      exports: "named",
    },
    plugins: [
      resolve({
        preferBuiltins: false,
        jsnext: true,
        main: true,
        browser: true,
      }),
      builtins(),
      commonjs(),
      globals(),
      babel(),
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    external: [Object.keys(pkg.dependencies || {})],
    plugins: [
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
]
