"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Get dataframe rows by index.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Number} start The start index (inclusive).
 * @param {Number} end The end index (exclusive).
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.slice(1, 2, df)
 * // [{"label": "B", "value": 2}]
 */
var slice = (0, _ramda.curry)(function (start, end, df) {
  return (0, _ramda.slice)(start, end, df);
});
var _default = slice;
exports.default = _default;