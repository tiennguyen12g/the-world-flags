"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bind = _interopRequireDefault(require("classnames/bind"));

var _SearchModule = _interopRequireDefault(require("./Search.module.scss"));

var _DataContext = require("../../ContextFile/DataContext");

var _react = require("react");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _useDelay = require("./useDelay");

var _headless = _interopRequireDefault(require("@tippyjs/react/headless"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cx = _bind["default"].bind(_SearchModule["default"]);

function Search() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showResult = _useState4[0],
      setShowResult = _useState4[1];

  var ref = (0, _react.useRef)();
  var datacontext = (0, _react.useContext)(_DataContext.DataContext); //change placeholder color

  var checkcolor = true; //get keyword for search

  var handleChange = function handleChange(value) {
    setInputValue(value);
  };

  var wordSearch = (0, _useDelay.useDelay)(inputValue, 500); //get results of search

  var arrayData = datacontext.countrys;
  var arrayOfResult = arrayData.filter(function (country) {
    var nameCountry = country.name.common.toLowerCase();
    return nameCountry.includes(wordSearch.toLowerCase());
  });

  var handleDelete = function handleDelete() {
    setInputValue('');
    ref.current.focus();
  };

  console.count("search");
  return (0, _react.useMemo)(function () {}, [arrayData]);
}

var _default = (0, _react.memo)(Search);

exports["default"] = _default;