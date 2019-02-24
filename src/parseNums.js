"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Convert columns to numerical type (floats).
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Array} columnNames Array of column names to convert
 * @param {df} dataframe Zebras dataframe to parse
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": "7"}, {"label": "B", "value": "2"}, {"label": "C", "value": "75"}]
 * Z.parseNums(["value"], df)
 * // [{"label": "B", "value": 2}, {"label": "A", "value": 7}, {"label": "C", "value": 75}]
 */
var parseNums = (0, _ramda.curry)(function (cols, df) {
  var convertRow = function convertRow(r) {
    var converter = function converter(value, key) {
      if ((0, _ramda.includes)(key, cols)) return parseFloat(value);
      return value;
    };

    return (0, _ramda.mapObjIndexed)(converter, r);
  };

  return (0, _ramda.map)(convertRow, df);
});
var _default = parseNums;
exports.default = _default;