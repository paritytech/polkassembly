"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Text = _interopRequireDefault(require("../primitive/Text"));

var _U = _interopRequireDefault(require("../primitive/U32"));

var _Struct = _interopRequireDefault(require("./Struct"));

var _BTreeSet = _interopRequireDefault(require("./BTreeSet"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _create.TypeRegistry();
const mockU32Set = new Set();
mockU32Set.add(new _U.default(registry, 2));
mockU32Set.add(new _U.default(registry, 24));
mockU32Set.add(new _U.default(registry, 30));
mockU32Set.add(new _U.default(registry, 80));
const mockU32SetString = '[2,24,30,80]';
const mockU32SetObject = [2, 24, 30, 80];
const mockU32SetHexString = '0x1002000000180000001e00000050000000';
const mockU32SetUint8Array = Uint8Array.from([16, 2, 0, 0, 0, 24, 0, 0, 0, 30, 0, 0, 0, 80, 0, 0, 0]);
describe('BTreeSet', () => {
  describe('decoding', () => {
    const testDecode = (type, input, output) => it(`can decode from ${type}`, () => {
      const s = new _BTreeSet.default(registry, _U.default, input);
      expect(s.toString()).toBe(output);
    });

    testDecode('Set', mockU32Set, mockU32SetString);
    testDecode('hex', mockU32SetHexString, mockU32SetString);
    testDecode('Uint8Array', mockU32SetUint8Array, mockU32SetString);
    testDecode('Set', mockU32Set, mockU32SetString);
    testDecode('hex', mockU32SetHexString, mockU32SetString);
    testDecode('Uint8Array', mockU32SetUint8Array, mockU32SetString);
  });
  describe('encoding multiple values', () => {
    const testEncode = (to, expected) => it(`can encode ${to}`, () => {
      const s = new _BTreeSet.default(registry, _U.default, mockU32Set);
      expect(s[to]()).toEqual(expected);
    });

    testEncode('toHex', mockU32SetHexString);
    testEncode('toJSON', mockU32SetObject);
    testEncode('toU8a', mockU32SetUint8Array);
    testEncode('toString', mockU32SetString);
  });
  it('decodes null', () => {
    expect(new (_BTreeSet.default.with(_U.default))(registry, null).toString()).toEqual('[]');
  });
  it('decodes reusing instantiated inputs', () => {
    const foo = new _Text.default(registry, 'bar');
    expect(new _BTreeSet.default(registry, _Text.default, new Set([foo])).eq(new Set([foo]))).toBe(true);
  });
  it('decodes within more complicated types', () => {
    const s = new _Struct.default(registry, {
      placeholder: _U.default,
      value: _BTreeSet.default.with(_U.default)
    });
    s.set('value', new _BTreeSet.default(registry, _U.default, mockU32Set));
    expect(s.toString()).toBe('{"placeholder":0,"value":[2,24,30,80]}');
  });
  it('throws when it cannot decode', () => {
    expect(() => new (_BTreeSet.default.with(_U.default))(registry, 'ABC')).toThrowError(/BTreeSet: cannot decode type/);
  });
  it('correctly encodes length', () => {
    expect(new (_BTreeSet.default.with(_U.default))(registry, mockU32Set).encodedLength).toEqual(17);
  });
  it('generates sane toRawTypes', () => {
    expect(new (_BTreeSet.default.with(_U.default))(registry).toRawType()).toBe('BTreeSet<u32>');
    expect(new (_BTreeSet.default.with(_Text.default))(registry).toRawType()).toBe('BTreeSet<Text>');
    expect(new (_BTreeSet.default.with(_Struct.default.with({
      a: _U.default,
      b: _Text.default
    })))(registry).toRawType()).toBe('BTreeSet<{"a":"u32","b":"Text"}>');
  });
});