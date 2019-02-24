"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

/**
 * Create a new array based on columns from existing dataframe.
 *
 * Use to create new columns derived from existing columns in a dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Function} func Function to create the new column
 * @param {df} dataframe Zebras dataframe to add the new column to
 * @return {Array}
 * @example
 *
 * const temps = [{"date": "1990-05-06", "tempCelsius": 0}, {"date": "1990-05-07", "tempCelsius": 4}]
 * const fahrenheit = Z.deriveCol((r) => r.tempCelsius * 1.8 + 32, temps)
 * Z.deriveCol("tempFahrenheit", fahrenheit, temps)
 * // [{"date": "1990-05-06", "tempCelsius": 0, "tempFahrenheit": 32}, {"date": "1990-05-07", "tempCelsius": 4, "tempFahrenheit": 39.2}]
 */
var deriveCol = (0, _ramda.curry)(function (func, df) {
  return (0, _ramda.map)(func, df);
});
var _default = deriveCol;
exports.default = _default;