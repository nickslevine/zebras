"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Return a dataframe with the last n rows of input dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Number} n Number of rows to select from bottom of df
 * @param {df} dataframe
 * @return {df} Zebras dataframe
 * @see Z.slice, z.head
 * @example
 *
 * Z.tail(3, df)
 * // returns a new dataframe with the last 3 lines of `df`
 *
 */
var tail = function tail(n, df) {
  var truncated = (0, _ramda.takeLast)(n, df);
  return truncated;
};

var _default = tail;
exports.default = _default;