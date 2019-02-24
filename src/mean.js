"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _isNumeric = _interopRequireDefault(require("./internal/isNumeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mean of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate mean for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.mean(series)
 * // 34
 */
var mean = (0, _ramda.curry)(function (arr) {
  var filteredArr = (0, _ramda.filter)(_isNumeric.default, arr);
  return (0, _ramda.mean)(filteredArr);
});
var _default = mean;
exports.default = _default;