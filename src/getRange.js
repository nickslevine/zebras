"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _min = _interopRequireDefault(require("./min"));

var _max = _interopRequireDefault(require("./max"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Range of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Array} Array with min and max
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.getRange(series)
 * // [2, 75]
 */
var getRange = (0, _ramda.curry)(function (arr) {
  return [(0, _min.default)(arr), (0, _max.default)(arr)];
});
var _default = getRange;
exports.default = _default;