"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Calculate max for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbStd, Z.gbMin, Z.gbCount, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbMax("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "max": 7}, {"group": "B", "max": 5}, {"group": "C", "max": 75}]
 */
var gbMax = function gbMax(col, groupByObj) {
  var groups = (0, _ramda.keys)(groupByObj);
  var result = groups.map(function (g) {
    return {
      group: g,
      max: (0, _ramda.reduce)(function (acc, value) {
        return (0, _ramda.max)(acc, value[col]);
      }, -Infinity, groupByObj[g])
    };
  });
  return result;
};

var _default = gbMax;
exports.default = _default;