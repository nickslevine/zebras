import resolve from "rollup-plugin-node-resolve"
import builtins from "rollup-plugin-node-builtins"
import globals from "rollup-plugin-node-globals"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import minify from "rollup-plugin-babel-minify"

export default [
  {
    input: "source/index.js",
    output: {
      file: "dist/index.umd.js",
      format: "umd",
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
      minify({ comments: false }),
    ],
  },
]
