"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var renameCol = function renameCol(oldColName, suffix, _ref) {
  var old = _ref[oldColName],
      others = _objectWithoutProperties(_ref, [oldColName].map(_toPropertyKey));

  return _objectSpread(_defineProperty({}, oldColName + suffix, old), others);
};

var renameDuplicateColumns = function renameDuplicateColumns(cols, arr, suffix) {
  var renamed = arr;
  cols.forEach(function (c) {
    renamed = arr.map(function (r) {
      return renameCol(c, suffix, r);
    });
  });
  return renamed;
};

var fillRow = function fillRow(row, cols) {
  var rowCols = (0, _ramda.keys)(row);
  var filledRow = row;
  (0, _ramda.difference)(cols, rowCols).forEach(function (c) {
    filledRow[c] = undefined;
  });
  return row;
};
/**
 * Join two dataframes on a column.
 *
 * Performs a left join on two dataframes.
 * The 'On' arguments set which column in each df to join on.
 * The 'Suffix' arguments determine what the suffix should be when the two
 * dataframes have overlapping column names besides the one being joined on.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {df} dfLeft First dataframe
 * @param {df} dfRight Second dataframe
 * @param {String} leftOn Left column to join on
 * @param {String} rightOn Right column to join on
 * @param {String} leftSuffix Left suffix for overlapping column names
 * @param {String} rightSuffix Right suffix for overlapping column names
 * @return {df} Joined dataframe
 * @example
 *
 * const df1 = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * const df2 = [{"label": "A", "value": "2010-12-13"}, {"label": "B", "value": "2010-12-15"}, {"label": "C", "value": "2010-12-17"}]
 * Z.merge(df1, df2, "label", "label", "_df1", "_df2")
 * // [
 * //   { label: "A", value_df1: 7, value_df2: "2010-12-13" },
 * //   { label: "B", value_df1: 2, value_df2: "2010-12-15" },
 * //   { label: "C", value_df1: 75, value_df2: "2010-12-17" },
 * // ]
 */


var merge = function merge(dfLeft, dfRight, leftOn, rightOn, leftSuffix, rightSuffix) {
  var colsLeft = (0, _ramda.keys)(dfLeft[0]);
  var colsRight = (0, _ramda.keys)(dfRight[0]);
  var intersected = (0, _ramda.filter)(function (x) {
    return !(0, _ramda.includes)(x, [leftOn, rightOn]);
  }, (0, _ramda.intersection)(colsLeft, colsRight));
  var dfLeftUpdated = renameDuplicateColumns(intersected, dfLeft, leftSuffix);
  var dfRightUpdated = renameDuplicateColumns(intersected, dfRight, rightSuffix);
  var colsLeftUpdated = (0, _ramda.keys)(dfLeftUpdated[0]);
  var colsRightUpdated = (0, _ramda.keys)(dfRightUpdated[0]);
  var colsAll = Array.from(new Set([].concat(_toConsumableArray(colsLeftUpdated), _toConsumableArray(colsRightUpdated))));
  var dfLeftGrouped = (0, _ramda.groupBy)((0, _ramda.prop)(leftOn), dfLeftUpdated);
  var dfRightGrouped = (0, _ramda.groupBy)((0, _ramda.prop)(rightOn), dfRightUpdated);
  var index = (0, _ramda.keys)(dfLeftGrouped);
  return index.map(function (i) {
    try {
      return fillRow(_objectSpread({}, dfLeftGrouped[i]["0"], dfRightGrouped[i]["0"]), colsAll);
    } catch (err) {
      return fillRow(_objectSpread({}, dfLeftGrouped[i]["0"]), colsAll);
    }
  });
};

var _default = merge;
exports.default = _default;