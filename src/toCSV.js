"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Synchronously writes a dataframe to a CSV file.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {df} df Zebras dataframe to write
 * @param {String} filepath File path for the CSV file to write
 * @return {undefined}
 * @example
 *
 * Z.toCSV(filepath, df)
 */
var toCSV = (0, _ramda.curry)(function (filepath, df) {
  try {
    var headers = (0, _ramda.join)(",", (0, _ramda.keys)((0, _ramda.nth)(0, df)));
    var rows = (0, _ramda.map)(_ramda.values, df);
    var rowStrings = (0, _ramda.join)("\n", (0, _ramda.map)((0, _ramda.join)(","), rows));

    _fs.default.writeFileSync(filepath, "".concat(headers, "\n").concat(rowStrings));

    return df;
  } catch (error) {
    return error;
  }
});
var _default = toCSV;
exports.default = _default;