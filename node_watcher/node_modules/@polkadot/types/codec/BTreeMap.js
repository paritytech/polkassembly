"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Map = _interopRequireDefault(require("./Map"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class BTreeMap extends _Map.default {
  static with(keyType, valType) {
    return class extends BTreeMap {
      constructor(registry, value) {
        super(registry, 'BTreeMap', keyType, valType, value);
      }

    };
  }

}

exports.default = BTreeMap;