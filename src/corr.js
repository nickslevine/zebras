"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _std = _interopRequireDefault(require("./std"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Correlation between two series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} series1 First series
 * @param {Array} series2 Second series
 * @return {Number}
 * @example
 *
 * const series1 = [10, 15, 20, 25, 50, 55]
 * const series2 = [12, 18, 34, 52, 71, 86]
 * Z.corr(series1, series2)
 * // 0.969035563335365
 */
var corr = (0, _ramda.curry)(function (arr1, arr2) {
  if (arr1.length !== arr2.length) return "Arrays are not the same length";
  var sampleMean1 = (0, _ramda.mean)(arr1);
  var sampleMean2 = (0, _ramda.mean)(arr2);
  var std1 = (0, _std.default)(arr1);
  var std2 = (0, _std.default)(arr2);
  var nMinusOne = (0, _ramda.subtract)(arr1.length, 1);
  var rangeArray = (0, _ramda.range)(0, arr1.length);
  var products = (0, _ramda.map)(function (x) {
    return (arr1[x] - sampleMean1) * (arr2[x] - sampleMean2);
  }, rangeArray);
  var summedProducts = (0, _ramda.sum)(products);
  return summedProducts / (nMinusOne * std1 * std2);
});
var _default = corr;
exports.default = _default;