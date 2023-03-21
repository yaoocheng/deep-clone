/*!
 * yc-tools-clone 1.0.0
 * Licensed under MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.clone = {})));
}(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
