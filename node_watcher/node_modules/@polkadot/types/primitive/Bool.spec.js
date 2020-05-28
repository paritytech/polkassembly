"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Bool = _interopRequireDefault(require("./Bool"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Bool', () => {
  const registry = new _create.TypeRegistry();
  describe('decode', () => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const testDecode = (type, input, expected) => it(`can decode from ${type}`, () => {
      expect(new _Bool.default(registry, input).toJSON()).toBe(expected);
    });

    testDecode('Bool', new _Bool.default(registry, true), true);
    testDecode('Boolean', Boolean(true), true);
    testDecode('boolean', true, true);
    testDecode('number', 1, true);
    testDecode('Uint8Array', Uint8Array.from([1]), true);
  });
  describe('encode', () => {
    const testEncode = (to, expected, value) => it(`can encode ${to}`, () => {
      expect(new _Bool.default(registry, value)[to]()).toEqual(expected);
    });

    testEncode('toJSON', true, true);
    testEncode('toHex', '0x01', true);
    testEncode('toString', 'true', true);
    testEncode('toU8a', Uint8Array.from([1]), true);
    testEncode('toU8a', Uint8Array.from([0]), false);
  });
  it('correctly encodes length', () => {
    expect(new _Bool.default(registry, true).encodedLength).toEqual(1);
  });
  describe('utils', () => {
    it('compares against a boolean', () => {
      expect(new _Bool.default(registry, true).eq(true)).toBe(true);
    });
    it('compares against a Bool', () => {
      expect(new _Bool.default(registry, false).eq(new _Bool.default(registry, false))).toBe(true);
    });
    it('has isTrue', () => {
      expect(new _Bool.default(registry, true).isTrue).toBe(true);
    });
    it('has isFalse', () => {
      expect(new _Bool.default(registry, true).isFalse).toBe(false);
    });
    it('has sane isEmpty aligning with the rest', () => {
      expect(new _Bool.default(registry).isEmpty).toBe(true);
      expect(new _Bool.default(registry, false).isEmpty).toBe(true);
      expect(new _Bool.default(registry, true).isEmpty).toBe(false);
    });
  });
});