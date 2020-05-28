"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _U8aFixed = _interopRequireDefault(require("./U8aFixed"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('U8aFixed', () => {
  const registry = new _create.TypeRegistry();
  describe('construction', () => {
    it('allows empty values', () => {
      expect(new _U8aFixed.default(registry).toHex()).toEqual('0x0000000000000000000000000000000000000000000000000000000000000000');
    });
    it('allows construction via with', () => {
      expect(new (_U8aFixed.default.with(64))(registry).bitLength()).toEqual(64);
    });
    it('constructs from hex', () => {
      expect(new (_U8aFixed.default.with(32))(registry, '0x01020304').toU8a()).toEqual(new Uint8Array([0x01, 0x02, 0x03, 0x04]));
    });
    it('constructs from number[]', () => {
      expect(new (_U8aFixed.default.with(32))(registry, [0x02, 0x03]).toU8a()).toEqual(new Uint8Array([0x02, 0x03, 0x00, 0x00]));
    });
  });
  describe('utils', () => {
    let u8a;
    beforeEach(() => {
      u8a = new _U8aFixed.default(registry, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 32);
    });
    it('limits the length', () => {
      expect(u8a.length).toEqual(4);
    });
    it('exposes the correct bitLength', () => {
      expect(u8a.bitLength()).toEqual(32);
    });
    it('allows wrapping of a pre-existing instance', () => {
      expect(u8a.toU8a()).toEqual(new Uint8Array([1, 2, 3, 4]));
    });
    it('hash a sane toRawType', () => {
      expect(u8a.toRawType()).toEqual('[u8;4]');
    });
  });
  describe('static with', () => {
    it('allows default toRawType', () => {
      expect(new (_U8aFixed.default.with(64))(registry).toRawType()).toEqual('[u8;8]');
    });
    it('allows toRawType override', () => {
      expect(new (_U8aFixed.default.with(64, 'SomethingElse'))(registry).toRawType()).toEqual('SomethingElse');
    });
  });
});