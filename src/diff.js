"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Returns a new series with the differences between the values in the order of
 * the input series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate differences for
 * @return {Array}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.diff(series)
 * // [NaN, -5, 28, 0, 26, 19]
 */
var diff = (0, _ramda.curry)(function (arr) {
  var iRange = (0, _ramda.range)(0, arr.length);
  var result = (0, _ramda.map)(function (i) {
    if (i === 0) return NaN;
    return arr[i] - arr[i - 1];
  }, iRange);
  return result;
});
var _default = diff;
exports.default = _default;