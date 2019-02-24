"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _isNumeric = _interopRequireDefault(require("./internal/isNumeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Product of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.prod(series)
 * // 1764000
 */
var prod = (0, _ramda.curry)(function (arr) {
  var filteredArr = (0, _ramda.filter)(_isNumeric.default, arr);
  return (0, _ramda.product)(filteredArr);
});
var _default = prod;
exports.default = _default;