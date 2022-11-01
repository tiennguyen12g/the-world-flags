"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bind = _interopRequireDefault(require("classnames/bind"));

var _PaginationModule = _interopRequireDefault(require("./Pagination.module.scss"));

var _react = require("react");

var _usePagination = require("../../ContextFile/usePagination/usePagination");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cx = _bind["default"].bind(_PaginationModule["default"]);

function Pagination(_ref) {
  var datacontext = _ref.datacontext;
  return (0, _react.useMemo)(function () {}, [datacontext]);
}

var _default = (0, _react.memo)(Pagination);

exports["default"] = _default;