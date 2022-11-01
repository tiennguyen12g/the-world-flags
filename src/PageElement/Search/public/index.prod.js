"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _bind=_interopRequireDefault(require("classnames/bind")),_SearchModule=_interopRequireDefault(require("./Search.module.scss")),_DataContext=require("../../ContextFile/DataContext"),_react=require("react"),_reactFontawesome=require("@fortawesome/react-fontawesome"),_freeSolidSvgIcons=require("@fortawesome/free-solid-svg-icons"),_useDelay=require("./useDelay"),_headless=_interopRequireDefault(require("@tippyjs/react/headless"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],a=!0,o=!1,n=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(t.push(u.value),!r||t.length!==r);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var cx=_bind.default.bind(_SearchModule.default);function Search(){var e=_slicedToArray((0,_react.useState)(""),2),r=e[0],t=(e[1],_slicedToArray((0,_react.useState)(!0),2)),a=(t[0],t[1],(0,_react.useRef)(),(0,_react.useContext)(_DataContext.DataContext)),o=(0,_useDelay.useDelay)(r,500),n=a.countrys;n.filter(function(e){return e.name.common.toLowerCase().includes(o.toLowerCase())});return console.count("search"),(0,_react.useMemo)(function(){},[n])}var _default=(0,_react.memo)(Search);exports.default=_default;