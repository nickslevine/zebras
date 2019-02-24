"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Get unique values in a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Array}
 * @example
 *
 * const series = [7, 7, 2, 30, 30, 56, 75]
 * Z.unique(series)
 * // [7, 2, 30, 56, 75]
 */
var unique = (0, _ramda.curry)(function (arr) {
  return (0, _ramda.uniq)(arr);
});
var _default = unique;
exports.default = _default;