"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAsync = useAsync;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useAsync(linkApi) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataApi = _useState2[0],
      setDataApi = _useState2[1];

  (0, _react.useEffect)(function () {
    function callApi() {
      var res, data;
      return regeneratorRuntime.async(function callApi$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch(linkApi));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(res.json());

            case 5:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    callApi().then(function (data) {
      setDataApi(data);
    })["catch"](function (error) {
      return console.log(error);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkApi]);
  return dataApi;
}