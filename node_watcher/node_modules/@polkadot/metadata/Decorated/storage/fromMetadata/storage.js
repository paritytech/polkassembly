"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStorage;

var substrate = _interopRequireWildcard(require("./substrate"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function getStorage(registry, metaVersion) {
  return {
    substrate: Object.entries(substrate).reduce((storage, [key, fn]) => {
      storage[key] = fn(registry, metaVersion);
      return storage;
    }, {})
  };
}