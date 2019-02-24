"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Convert columns to datestamp.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Array} cols Array of column names to convert
 * @param {df} dataframe Zebras dataframe to parse
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": "2010-12-13"}, {"label": "B", "value": "2010-12-15"}, {"label": "C", "value": "2010-12-17"}]
 * Z.parseDates(["value"], df)
 * // [{"label": "A", "value": 1292198400000}, {"label": "B", "value": 1292371200000}, {"label": "C", "value": 1292544000000}]
 */
var parseDates = (0, _ramda.curry)(function (cols, df) {
  var convertRow = function convertRow(r) {
    var converter = function converter(value, key) {
      if ((0, _ramda.includes)(key, cols)) return Date.parse(value);
      return value;
    };

    return (0, _ramda.mapObjIndexed)(converter, r);
  };

  return (0, _ramda.map)(convertRow, df);
});
var _default = parseDates;
exports.default = _default;