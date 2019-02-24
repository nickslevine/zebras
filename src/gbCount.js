"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Calculate count for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbStd, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbCount("value", Z.groupBy(d => d.label, df))
 * // [{"count": 2, "group": "A"}, {"count": 2, "group": "B"}, {"count": 1, "group": "C"}]
 */
var gbCount = function gbCount(col, groupByObj) {
  var groups = (0, _ramda.keys)(groupByObj);
  return groups.map(function (g) {
    return {
      group: g,
      count: groupByObj[g].length
    };
  });
};

var _default = gbCount;
exports.default = _default;