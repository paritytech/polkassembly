"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasEq = hasEq;

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function hasEq(o) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return (0, _util.isFunction)(o.eq);
}