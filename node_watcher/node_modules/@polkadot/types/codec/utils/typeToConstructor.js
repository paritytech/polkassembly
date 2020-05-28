"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typeToConstructor;

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function typeToConstructor(registry, type) {
  return (0, _util.isString)(type) ? registry.createClass(type) : type;
}