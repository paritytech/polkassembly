"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Keyring: true,
  WsProvider: true,
  ApiPromise: true,
  ApiRx: true
};
Object.defineProperty(exports, "Keyring", {
  enumerable: true,
  get: function () {
    return _keyring.Keyring;
  }
});
Object.defineProperty(exports, "WsProvider", {
  enumerable: true,
  get: function () {
    return _rpcProvider.WsProvider;
  }
});
Object.defineProperty(exports, "ApiPromise", {
  enumerable: true,
  get: function () {
    return _promise.default;
  }
});
Object.defineProperty(exports, "ApiRx", {
  enumerable: true,
  get: function () {
    return _rx.default;
  }
});

var _util = require("@polkadot/util");

var _keyring = require("@polkadot/keyring");

var _rpcProvider = require("@polkadot/rpc-provider");

var _promise = _interopRequireDefault(require("./promise"));

var _rx = _interopRequireDefault(require("./rx"));

var _submittable = require("./submittable");

Object.keys(_submittable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _submittable[key];
    }
  });
});
// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// FIXME This really should be `import(...).then(...)`, but need to check rejections
// eslint-disable-next-line @typescript-eslint/no-var-requires
(0, _util.detectPackage)(require('./package.json'), typeof __dirname !== 'undefined' && __dirname);