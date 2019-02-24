"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Return dataframe with first n rows of input dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Number} n Number of rows to select from start of df
 * @param {df} dataframe
 * @return {df} Zebras dataframe
 * @see Z.slice, Z.tail
 * @example
 *
 * Z.head(3, df)
 * // returns a new dataframe with the first 3 lines of `df`
 *
 */
var head = function head(n, df) {
  var truncated = (0, _ramda.take)(n, df);
  return truncated;
};

var _default = head;
exports.default = _default;