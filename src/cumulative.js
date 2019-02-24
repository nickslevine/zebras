"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Calculate cumulative statistics.
 *
 * Calculate statistics over a cumulative window from the start of the array.
 * Works wtih z.min, z.max, z.mean, z.std, z.sum, z.prod, etc., or any other
 * function that takes an array as a single argument.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function to caclulate cumulative statistics
 * @param {Array} arr Series to calculate cumulative statistics for
 * @return {Array}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.cumulative(Z.mean, series)
 * // [7, 4.5, 13, 17.25, 25, 33.333333333333336]
 */
var cumulative = function cumulative(func, arr) {
  var iRange = (0, _ramda.range)(0, arr.length);
  var result = (0, _ramda.map)(function (i) {
    var truncated = (0, _ramda.slice)(0, i + 1, arr);
    return func(truncated);
  }, iRange);
  return result;
};

var _default = cumulative;
exports.default = _default;