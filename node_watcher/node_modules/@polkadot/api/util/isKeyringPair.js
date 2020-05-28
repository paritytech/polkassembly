"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isKeyringPair;

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function isKeyringPair(account) {
  return (0, _util.isFunction)(account.sign);
}