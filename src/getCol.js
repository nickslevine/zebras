"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Extract a series to an array from a dataframe.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Name of the column to extract
 * @param {df} dataframe Zebras dataframe
 * @return {Array} Series array
 * @example
 *
 * const df = [{"label": "A", "value": "2010-12-13"}, {"label": "B", "value": "2010-12-15"}, {"label": "C", "value": "2010-12-17"}]
 * Z.getCol("value", df)
 * // ["2010-12-13", "2010-12-15", "2010-12-17"]
 */
var getCol = (0, _ramda.curry)(function (col, df) {
  return (0, _ramda.map)((0, _ramda.prop)(col), df);
});
var _default = getCol;
exports.default = _default;