"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _countUnique = _interopRequireDefault(require("./countUnique"));

var _min = _interopRequireDefault(require("./min"));

var _max = _interopRequireDefault(require("./max"));

var _median = _interopRequireDefault(require("./median"));

var _mean = _interopRequireDefault(require("./mean"));

var _std = _interopRequireDefault(require("./std"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calculate summary statistics for a numerical series.
 *
 * Returns a single-row df with count, unique count, min, max, median, mean and
 * standard deviation of a numerical series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function to caclulate cumulative statistics
 * @param {Array} arr Series to calculate cumulative statistics for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.describe(series)
 * // [{"count": 6, "countUnique": 5, "max": "75.00000", "mean": "33.33333", "median": "30.00000", "min": "2.00000", "std": "28.09745"}]
 */
var describe = function describe(arr) {
  return [{
    count: arr.length,
    countUnique: (0, _countUnique.default)(arr),
    min: (0, _min.default)(arr).toFixed(5),
    max: (0, _max.default)(arr).toFixed(5),
    median: (0, _median.default)(arr).toFixed(5),
    mean: (0, _mean.default)(arr).toFixed(5),
    std: (0, _std.default)(arr).toFixed(5)
  }];
};

var _default = describe;
exports.default = _default;