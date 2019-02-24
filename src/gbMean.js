"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gbSum = _interopRequireDefault(require("./gbSum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calculate mean for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbCount, Z.gbSum, Z.gbStd, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbMean("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "mean": 5}, {"group": "B", "mean": 3.5}, {"group": "C", "mean": 75}]
 */
var gbMean = function gbMean(col, groupByObj) {
  var summed = (0, _gbSum.default)(col, groupByObj);
  var result = summed.map(function (i) {
    var count = groupByObj[i.group].length;
    return {
      group: i.group,
      mean: i.sum / count
    };
  });
  return result;
};

var _default = gbMean;
exports.default = _default;