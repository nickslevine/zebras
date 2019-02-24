"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if the input value is numeric, either is a number or can be parsed
 * as a number
 *
 * @func
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is numeric, otherwise `false`.
 * @example
 *
 * isNumeric(0); //=> true
 * isNumeric("1"); //=> true
 * isNumeric(null); //=> false
 * isNumeric(undefined); //=> false
 * isNumeric(""); //=> false
 * isNumeric("a"); //=> false
 */
var isNumeric = function isNumeric(x) {
  return !Number.isNaN(parseFloat(x));
};

var _default = isNumeric;
exports.default = _default;