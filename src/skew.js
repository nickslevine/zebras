"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _isNumeric = _interopRequireDefault(require("./internal/isNumeric"));

var _std = _interopRequireDefault(require("./std"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Skew of a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate skew for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.skew(series)
 * // 0.17542841315728933
 */
var skew = (0, _ramda.curry)(function (arr) {
  var filteredArr = (0, _ramda.filter)(_isNumeric.default, arr);
  var sampleStd = (0, _std.default)(filteredArr);
  var stdCubed = Math.pow(sampleStd, 3);
  var sampleMean = (0, _ramda.mean)(filteredArr);
  var diffs = (0, _ramda.map)(function (x) {
    return x - sampleMean;
  }, filteredArr);
  var diffsCubed = (0, _ramda.map)(function (x) {
    return Math.pow(x, 3);
  }, diffs);
  var summed = (0, _ramda.sum)(diffsCubed);
  var n = filteredArr.length;
  return summed / n / stdCubed;
});
var _default = skew;
exports.default = _default;