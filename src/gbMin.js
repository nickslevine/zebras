"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Calculate min for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbStd, Z.gbMax, Z.gbCount, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbMin("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "min": 3}, {"group": "B", "min": 2}, {"group": "C", "min": 75}]
 */
var gbMin = function gbMin(col, groupByObj) {
  var groups = (0, _ramda.keys)(groupByObj);
  var result = groups.map(function (g) {
    return {
      group: g,
      min: (0, _ramda.reduce)(function (acc, value) {
        return (0, _ramda.min)(acc, value[col]);
      }, Infinity, groupByObj[g])
    };
  });
  return result;
};

var _default = gbMin;
exports.default = _default;