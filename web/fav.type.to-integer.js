(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.type||(g.type = {}));g.toInteger = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isFiniteNumber = require('@fav/type.is-finite-number');

function toInteger(value) {
  if (isString(value)) {
    value = parseFloat(value);
  }

  if (isFiniteNumber(value)) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toInteger;

},{"@fav/type.is-finite-number":2,"@fav/type.is-string":3}],2:[function(require,module,exports){
'use strict';

function isFiniteNumber(value) {
  if (typeof value === 'number') {
    return isFinite(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return isFinite(value);
  }
  return false;
}

module.exports = isFiniteNumber;

},{}],3:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

module.exports = isString;

},{}]},{},[1])(1)
});