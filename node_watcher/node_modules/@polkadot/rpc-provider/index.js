"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HttpProvider", {
  enumerable: true,
  get: function () {
    return _http.default;
  }
});
Object.defineProperty(exports, "WsProvider", {
  enumerable: true,
  get: function () {
    return _ws.default;
  }
});

var _http = _interopRequireDefault(require("./http"));

var _ws = _interopRequireDefault(require("./ws"));