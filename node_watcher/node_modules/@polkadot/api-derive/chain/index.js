"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bestNumber = require("./bestNumber");

Object.keys(_bestNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bestNumber[key];
    }
  });
});

var _bestNumberFinalized = require("./bestNumberFinalized");

Object.keys(_bestNumberFinalized).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bestNumberFinalized[key];
    }
  });
});

var _bestNumberLag = require("./bestNumberLag");

Object.keys(_bestNumberLag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bestNumberLag[key];
    }
  });
});

var _getHeader = require("./getHeader");

Object.keys(_getHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getHeader[key];
    }
  });
});

var _subscribeNewHeads = require("./subscribeNewHeads");

Object.keys(_subscribeNewHeads).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subscribeNewHeads[key];
    }
  });
});