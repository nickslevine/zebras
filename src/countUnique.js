"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Count number of unique values in a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.countUnique(series)
 * // 5
 */
var countUnique = (0, _ramda.curry)(function (arr) {
  return (0, _ramda.length)((0, _ramda.uniq)(arr));
});
var _default = countUnique;
exports.default = _default;