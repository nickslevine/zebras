"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cliTable = _interopRequireDefault(require("cli-table3"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Prints dataframe.
 *
 * Returns the entire dataframe as an ASCII table.
 * If working in a local Node environment, wrap this and other printing
 * functions in `console.log()` to display ASCII tables.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {df} dataframe to print
 * @return {String} Entire dataframe as an ASCII table
 * @example
 *
 * Z.print(df)
 *
 * // will output an ASCII table like this:
 * ┌────────────┬───────┬───────┬───────┬───────┬───────────┬─────────┐
 * │ Date       │ Open  │ High  │ Low   │ Close │ Adj Close │ Volume  │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-03 │ 16.66 │ 16.66 │ 16.66 │ 16.66 │ 16.66     │ 1260000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-04 │ 16.85 │ 16.85 │ 16.85 │ 16.85 │ 16.85     │ 1890000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-05 │ 16.93 │ 16.93 │ 16.93 │ 16.93 │ 16.93     │ 2550000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-06 │ 16.98 │ 16.98 │ 16.98 │ 16.98 │ 16.98     │ 2010000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-09 │ 17.08 │ 17.08 │ 17.08 │ 17.08 │ 17.08     │ 2520000 │
 * └────────────┴───────┴───────┴───────┴───────┴───────────┴─────────┘
 *
 */
var print = (0, _ramda.curry)(function (df) {
  var headers = (0, _ramda.keys)(df[0]);
  var rows = (0, _ramda.map)(_ramda.values, df);
  var printTable = new _cliTable.default({
    head: headers
  });
  printTable.push.apply(printTable, _toConsumableArray(rows));
  return "\n".concat(printTable.toString());
});
var _default = print;
exports.default = _default;