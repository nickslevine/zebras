"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Select a subset of columns.
 *
 * Accepts an array with the names of the columns to retain.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Array} cols Array of column names to pick
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.pickCols(["value"], df)
 * // [{"value": 7}, {"value": 2}, {"value": 75}]
 */
var pickCols = (0, _ramda.curry)(function (cols, df) {
  return (0, _ramda.map)((0, _ramda.pick)(cols), df);
});
var _default = pickCols;
exports.default = _default;