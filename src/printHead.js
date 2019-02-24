"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _print = _interopRequireDefault(require("./print"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Print first n rows of dataframe.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {Number} n Number of rows to print
 * @param {df} dataframe
 * @return {String} First `n` rows of dataframe as an ASCII table
 * @see Z.print, Z.printTail
 * @example
 *
 * Z.printHead(3, df)
 *
 * // will output an ASCII table like this:
 * ┌────────────┬───────┬───────┬───────┬───────┬───────────┬─────────┐
 * │ Date       │ Open  │ High  │ Low   │ Close │ Adj Close │ Volume  │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-05 │ 16.93 │ 16.93 │ 16.93 │ 16.93 │ 16.93     │ 2550000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-06 │ 16.98 │ 16.98 │ 16.98 │ 16.98 │ 16.98     │ 2010000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-09 │ 17.08 │ 17.08 │ 17.08 │ 17.08 │ 17.08     │ 2520000 │
 * └────────────┴───────┴───────┴───────┴───────┴───────────┴─────────┘
 *
 */
var printHead = function printHead(n, df) {
  var truncated = (0, _ramda.take)(n, df);
  return (0, _print.default)(truncated);
};

var _default = printHead;
exports.default = _default;