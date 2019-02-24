"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Concatenate two dataframes.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {df} dataframe1 Zebras dataframe
 * @param {df} dataframe2 Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df1 = [{"label": "A", "value": 7}, {"label": "B", "value": 2}]
 * const df2 = [{"label": "C", "value": 17}, {"label": "D", "value": 2}]
 * Z.concat(df1, df2)
 * // [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 17}, {"label": "D", "value": 2}]
 */
var concat = (0, _ramda.curry)(function (df1, df2) {
  return (0, _ramda.concat)(df1, df2);
});
var _default = concat;
exports.default = _default;