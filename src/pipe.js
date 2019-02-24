"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Pipe functions together by performing left-to-right function composition.
 *
 * @func
 * @memberOf Z
 * @category Composition
 * @param {Array} functions Array of functions to compose
 * @param {df} dataframe Zebras dataframe
 * @return {any} Result of the composed functions applied to dataframe
 * @example
 *
 * const data = [
 *   {"Date": "1997-01-01", "Value": "12"},
 *   {"Date": "1997-01-02", "Value": "14"},
 *   {"Date": "1997-01-03", "Value": "7"},
 *   {"Date": "1997-01-04", "Value": "112"}
 * ]
 * Z.pipe([
 *   Z.parseNums(["Value"]), // converts "Value" column to floats
 *   Z.getCol("Value"), // extracts "Value" column to array
 *   Z.mean() // calculates mean of "Value" array
 * ])(data)
 * // 36.25
 */
var pipe = (0, _ramda.curry)(function (funcs, df) {
  return _ramda.pipe.apply(void 0, _toConsumableArray(funcs))(df);
});
var _default = pipe;
exports.default = _default;