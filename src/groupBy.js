"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Create an object grouped by according to the supplied function.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function returning string key
 * @param {df} dataframe Zebras dataframe
 * @return {Object}
 * @example
 *
 * const df = [{"Day": "Monday", "value": 10}, {"Day": "Tuesday", "value": 5}, {"Day": "Monday", "value": 7}]
 * Z.groupBy(x => x.Day, df)
 * // {"Monday": [{"Day": "Monday", "value": 10}, {"Day": "Monday", "value": 7}], "Tuesday": [{"Day": "Tuesday", "value": 5}]}
 */
var groupBy = (0, _ramda.curry)(function (func, df) {
  return (0, _ramda.groupBy)(func, df);
});
var _default = groupBy;
exports.default = _default;