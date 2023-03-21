/*!
 * yc-tools-clone 1.0.0
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

function clone(target) {
  if (type(target) === 'array') {
    var arr = [];
    target.forEach(function (ele) {
      arr.push(clone(ele));
    });
    return arr;
  } else if (type(target) === 'object') {
    var obj = {};
    for (var key in target) {
      obj[key] = clone(target[key]);
    }
  }
  return target;
}

exports.clone = clone;
