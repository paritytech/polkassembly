"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Raw = _interopRequireDefault(require("../codec/Raw"));

var _Text = _interopRequireDefault(require("./Text"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Text', () => {
  const registry = new _create.TypeRegistry();
  describe('decode', () => {
    const testDecode = (type, input, expected, toFn = 'toString') => it(`can decode from ${type}`, () => {
      expect(new _Text.default(registry, input)[toFn]()).toBe(expected);
    });

    testDecode('string', 'foo', 'foo');
    testDecode('Text', new _Text.default(registry, 'foo'), 'foo');
    testDecode('Uint8Array', Uint8Array.from([12, 102, 111, 111]), 'foo');
    testDecode('Raw', new _Raw.default(registry, Uint8Array.from([102, 111, 111])), 'foo'); // no length

    testDecode('object with `toString()`', {
      toString() {
        return 'foo';
      }

    }, 'foo');
    testDecode('hex input value', new _Text.default(registry, '0x12345678'), '0x12345678', 'toHex');
  });
  describe('encode', () => {
    const testEncode = (to, expected) => it(`can encode ${to}`, () => {
      expect(new _Text.default(registry, 'foo')[to]()).toEqual(expected);
    });

    testEncode('toHex', '0x666f6f');
    testEncode('toString', 'foo');
    testEncode('toU8a', Uint8Array.from([12, 102, 111, 111]));
  });
  describe('utils', () => {
    it('compares actual string values', () => {
      expect(new _Text.default(registry, '123').eq('123')).toBe(true);
    });
    it('compares actual String values', () => {
      expect(new _Text.default(registry, 'XYX').eq(String('XYX'))).toBe(true);
    });
    it('compares actual non-string values (fails)', () => {
      expect(new _Text.default(registry, '123').eq(123)).toBe(false);
    });
    it('calulates the length & encoded length correctly for ASCII', () => {
      const test = new _Text.default(registry, 'abcde');
      expect(test.encodedLength).toEqual(6);
      expect(test).toHaveLength(5);
    });
    it('calulates the length & encoded length correctly for non-ASCII', () => {
      const test = new _Text.default(registry, '中文');
      expect(test.encodedLength).toEqual(7);
      expect(test).toHaveLength(2);
    });
  });
});