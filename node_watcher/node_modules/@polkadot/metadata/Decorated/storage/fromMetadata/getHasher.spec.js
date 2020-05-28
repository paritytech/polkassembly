"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _util = require("@polkadot/util");

var _utilCrypto = require("@polkadot/util-crypto");

var _getHasher = _interopRequireDefault(require("./getHasher"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('getHasher', () => {
  const registry = new _types.TypeRegistry();
  describe('Twox64Concat', () => {
    it('matches the foo test from Rust', () => {
      const hasher = (0, _getHasher.default)(registry.createType('StorageHasher', 'Twox64Concat'));
      const hash = hasher('foo');
      const xxhash = (0, _utilCrypto.xxhashAsU8a)('foo', 128);
      expect([hash.subarray(0, 8), hash.subarray(8)]).toEqual([xxhash.subarray(0, 8), (0, _util.stringToU8a)('foo')]);
    });
  });
});