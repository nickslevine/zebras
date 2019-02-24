"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(require("./merge"));

var _gbMin = _interopRequireDefault(require("./gbMin"));

var _gbMax = _interopRequireDefault(require("./gbMax"));

var _gbCount = _interopRequireDefault(require("./gbCount"));

var _gbSum = _interopRequireDefault(require("./gbSum"));

var _gbMean = _interopRequireDefault(require("./gbMean"));

var _gbStd = _interopRequireDefault(require("./gbStd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Describe grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbStd, Z.gbMin, Z.gbCount, Z.gbSum, Z.gbMean, Z.max
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbDescribe("value", Z.groupBy(d => d.label, df))
 * // [
 * //   { count: 2, group: "A", max: 7, mean: 5, min: 3, std: 2.8284271247461903, sum: 10 },
 * //   { count: 2, group: "B", max: 5, mean: 3.5, min: 2, std: 2.1213203435596424, sum: 7 },
 * //   { count: 1, group: "C", max: 75, mean: 75, min: 75, std: NaN, sum: 75 },
 * // ]
 */
var gbDescribe = function gbDescribe(col, groupByObj) {
  var mins = (0, _gbMin.default)(col, groupByObj);
  var maxes = (0, _gbMax.default)(col, groupByObj);
  var counts = (0, _gbCount.default)(col, groupByObj);
  var sums = (0, _gbSum.default)(col, groupByObj);
  var means = (0, _gbMean.default)(col, groupByObj);
  var stds = (0, _gbStd.default)(col, groupByObj);
  var df1 = (0, _merge.default)(mins, maxes, "group", "group", "--", "--");
  var df2 = (0, _merge.default)(df1, counts, "group", "group", "--", "--");
  var df3 = (0, _merge.default)(df2, sums, "group", "group", "--", "--");
  var df4 = (0, _merge.default)(df3, means, "group", "group", "--", "--");
  var df5 = (0, _merge.default)(df4, stds, "group", "group", "--", "--");
  return df5;
};

var _default = gbDescribe;
exports.default = _default;