'use strict';

var isFiniteNumber = require('@fav/type.is-finite-number');
var toNumber = require('@fav/type.to-number');

function toInteger(value) {
  value = toNumber(value);

  if (isFiniteNumber(value)) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toInteger;
