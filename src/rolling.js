"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Calculate rolling statistics
 *
 * Calculate statistics over a moving window.
 * Works with Z.min, Z.max, Z.mean, Z.std, Z.sum, Z.prod, or any other function
 * that takes an array as a single argument.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function to caclulate rolling statistics
 * @param {Number} n Range (?)
 * @param {Array} arr Series to calculate rolling statistics for
 * @return {Array}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.rolling(Z.mean, 2, series)
 * // ["NotANumber", 4.5, 16, 30, 43, 65.5]
 */
var rolling = function rolling(func, n, arr) {
  var iRange = (0, _ramda.range)(0, arr.length);
  var result = (0, _ramda.map)(function (i) {
    if (i + 1 < n) return "NotANumber";
    var truncated = (0, _ramda.slice)(i - n + 1, i + 1, arr);
    return func(truncated);
  }, iRange);
  return result;
};

var _default = rolling;
exports.default = _default;