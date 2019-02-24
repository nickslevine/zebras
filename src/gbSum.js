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
 * Calculate sums for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbCount, Z.gbMean, Z.gbStd, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbSum("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "sum": 10}, {"group": "B", "sum": 7}, {"group": "C", "sum": 75}]
 */
var gbSum = function gbSum(col, groupByObj) {
  var groups = (0, _ramda.keys)(groupByObj);
  var result = groups.map(function (i) {
    var df = groupByObj[i];
    var arr = (0, _getCol.default)(col, df);
    var arrFiltered = (0, _ramda.filter)(_isNumeric.default, arr);
    return {
      group: i,
      sum: (0, _ramda.sum)(arrFiltered)
    };
  });
  return result;
};

var _default = gbSum;
exports.default = _default;