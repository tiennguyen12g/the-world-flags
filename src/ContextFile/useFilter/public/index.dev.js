"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFilter = useFilter;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function useFilter(arrayKey, dataFilter, checkList) {
  var result = [];
  var a;
  arrayKey.map(function (region) {
    if (checkList.includes(region.id)) {
      a = dataFilter.filter(function (country) {
        return country.region === region.nameregion;
      });
      result.push.apply(result, _toConsumableArray(a));
    }

    return false;
  });
  return result;
}