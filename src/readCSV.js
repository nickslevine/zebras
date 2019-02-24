"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Synchronously reads a CSV file.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {String} filepath File path for the CSV file to read
 * @return {df} Zebras dataframe
 * @example
 *
 * Z.readCSV(filepath)
 */
var readCSV = (0, _ramda.curry)(function (filepath) {
  try {
    var data = _fs.default.readFileSync(filepath).toString("utf8");

    var dataSplit = data.split("\n");
    var headers = dataSplit[0].split(",");
    var df = [];

    for (var r = 1; r < dataSplit.length; r += 1) {
      var rowSplit = dataSplit[r].trim().split(",");
      var rowObject = {};

      if (headers.length === rowSplit.length) {
        for (var i = 0; i < rowSplit.length; i += 1) {
          rowObject[headers[i]] = rowSplit[i];
        }

        df.push(rowObject);
      }
    }

    return df;
  } catch (error) {
    return error;
  }
});
var _default = readCSV;
exports.default = _default;