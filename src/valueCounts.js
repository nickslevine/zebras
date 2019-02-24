"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Count number of occurences of each value in a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Object}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.valueCounts(series)
 * // {"2": 1, "30": 2, "56": 1, "7": 1, "75": 1}
 */
var valueCounts = (0, _ramda.curry)(function (arr) {
  return (0, _ramda.countBy)(_ramda.identity, arr);
});
var _default = valueCounts;
exports.default = _default;