"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Percent changes
 *
 * Returns a new series with the percent changes between the values
 * in order of the input series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate percent changes for
 * @return {Array}
 * @example
 *
 * const series = [10, 15, 20, 25, 50, 55]
 * Z.pctChange(series)
 * // [NaN, 0.5, 0.33333333333333326, 0.25, 1, 0.10000000000000009]
 */
var pctChange = (0, _ramda.curry)(function (arr) {
  var iRange = (0, _ramda.range)(0, arr.length);
  var result = (0, _ramda.map)(function (i) {
    if (i === 0) return NaN;
    return arr[i] / arr[i - 1] - 1;
  }, iRange);
  return result;
});
var _default = pctChange;
exports.default = _default;