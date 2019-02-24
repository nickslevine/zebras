"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _isNumeric = _interopRequireDefault(require("./internal/isNumeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Standard deviation of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate standard deviation for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.std(series)
 * // 31.36080356113344
 */
var std = (0, _ramda.curry)(function (arr) {
  var filteredArr = (0, _ramda.filter)(_isNumeric.default, arr);
  var sampleMean = (0, _ramda.mean)(filteredArr);
  var n = filteredArr.length;
  var diffs = (0, _ramda.map)(function (x) {
    return x - sampleMean;
  }, filteredArr);
  var diffsSquared = (0, _ramda.map)(function (x) {
    return Math.pow(x, 2);
  }, diffs);
  var summed = (0, _ramda.sum)(diffsSquared);
  return Math.sqrt((0, _ramda.divide)(summed, (0, _ramda.subtract)(n, 1)));
});
var _default = std;
exports.default = _default;