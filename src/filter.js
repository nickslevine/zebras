"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Filter dataframe rows by using a filtering function.
 *
 * Accepts a test function that determines which rows of the supplied
 * dataframe are returned.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Function} func A filtering function
 * @param {df} dataframe Zebras dataframe to filter
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 2}, {"label": "B", "value": 10}, {"label": "C", "value": 30}]
 * Z.filter(r => r.value >= 10, df)
 * // [{"label": "B", "value": 10}, {"label": "C", "value": 30}]
 */
var filter = (0, _ramda.curry)(function (func, df) {
  return (0, _ramda.filter)(func, df);
});
var _default = filter;
exports.default = _default;