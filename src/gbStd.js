"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _isNumeric = _interopRequireDefault(require("./internal/isNumeric"));

var _getCol = _interopRequireDefault(require("./getCol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calculate std for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbCount, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbStd("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "std": 2.8284271247461903}, {"group": "B", "std": 2.1213203435596424}, {"group": "C", "std": NaN}]
 */
var gbStd = function gbStd(col, groupByObj) {
  var groups = (0, _ramda.keys)(groupByObj);
  var result = groups.map(function (g) {
    var arr = (0, _ramda.filter)(_isNumeric.default, (0, _getCol.default)(col, groupByObj[g]));
    var avg = (0, _ramda.mean)(arr);
    var arrSquaredDiffs = (0, _ramda.map)(function (x) {
      return Math.pow(x - avg, 2);
    }, arr);
    var sumSquaredDiffs = (0, _ramda.sum)(arrSquaredDiffs);
    return {
      group: g,
      std: Math.sqrt(sumSquaredDiffs / (arr.length - 1))
    };
  });
  return result;
};

var _default = gbStd;
exports.default = _default;