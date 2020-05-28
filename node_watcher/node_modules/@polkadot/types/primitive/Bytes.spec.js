"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Bytes = _interopRequireDefault(require("./Bytes"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Bytes', () => {
  const registry = new _create.TypeRegistry();
  const NUM = [0x3a, 0x63, 0x6f, 0x64, 0x65];
  const U8A = new Uint8Array([0x14, ...NUM]);
  const HEX = '0x3a636f6465';
  describe('construction', () => {
    it('decodes when input is string', () => {
      expect(new _Bytes.default(registry, ':code').toU8a()).toEqual(U8A);
    });
    it('decodes when hex is not length prefixed', () => {
      expect(new _Bytes.default(registry, HEX).toU8a()).toEqual(U8A);
    });
    it('decodes from UInt8Array', () => {
      expect(new _Bytes.default(registry, U8A).toU8a()).toEqual(U8A);
    });
    it('decodes from number[]', () => {
      expect(new _Bytes.default(registry, NUM).toU8a()).toEqual(U8A);
    });
    it('creates via storagedata (no prefix)', () => {
      expect(new _Bytes.default(registry, registry.createType('StorageData', HEX)).toU8a()).toEqual(U8A);
    });
    it('encodes from itself', () => {
      expect(new _Bytes.default(registry, new _Bytes.default(registry, HEX)).toU8a()).toEqual(U8A);
    });
    it('strips length with toU8a(true)', () => {
      expect(new _Bytes.default(registry, HEX).toU8a(true)).toEqual(U8A.subarray(1));
    });
    it('strips length with toHex', () => {
      expect(new _Bytes.default(registry, HEX).toHex()).toEqual(HEX);
    });
  });
});