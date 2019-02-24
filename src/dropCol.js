"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Delete a column.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {String} col Name of the column to delete
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.dropCol("label", df)
 * // [{"value": 7}, {"value": 2}, {"value": 75}]
 */
var dropCol = (0, _ramda.curry)(function (col, df) {
  return (0, _ramda.map)((0, _ramda.dissoc)(col), df);
});
var _default = dropCol;
exports.default = _default;