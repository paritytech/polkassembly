"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MAGIC_NUMBER = void 0;

var _util = require("@polkadot/util");

var _U = _interopRequireDefault(require("@polkadot/types/primitive/U32"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

exports.MAGIC_NUMBER = MAGIC_NUMBER;

class MagicNumber extends _U.default {
  constructor(registry, value) {
    super(registry, value);

    if (!this.isEmpty) {
      const magic = registry.createType('u32', MAGIC_NUMBER);
      (0, _util.assert)(this.eq(magic), `MagicNumber mismatch: expected ${magic.toHex()}, found ${this.toHex()}`);
    }
  }

}

exports.default = MagicNumber;