"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Bytes = _interopRequireDefault(require("../primitive/Bytes"));

var _U = _interopRequireDefault(require("../primitive/U32"));

var _Text = _interopRequireDefault(require("../primitive/Text"));

var _Option = _interopRequireDefault(require("./Option"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _create.TypeRegistry();

const testDecode = (type, input, expected) => it(`can decode from ${type}`, () => {
  const o = new _Option.default(registry, _Text.default, input);
  expect(o.toString()).toBe(expected);
  expect(o.isNone).toBe(!expected.length);
});

const testEncode = (to, expected) => it(`can encode ${to}`, () => {
  const e = new _Option.default(registry, _Text.default, 'foo');
  expect(e[to]()).toEqual(expected);
});

describe('Option', () => {
  it('converts undefined/null to empty', () => {
    expect(new _Option.default(registry, _Text.default, undefined).isNone).toBe(true);
    expect(new _Option.default(registry, _Text.default, null).isNone).toBe(true);
    expect(new _Option.default(registry, _Text.default, 'test').isNone).toBe(false);
  });
  it('converts an option to an option', () => {
    expect(new _Option.default(registry, _Text.default, new _Option.default(registry, _Text.default, 'hello')).toString()).toEqual('hello');
  });
  it('converts an option to an option (strings)', () => {
    expect(new _Option.default(registry, 'Text', new _Option.default(registry, 'Text', 'hello')).toString()).toEqual('hello');
  });
  it('converts correctly from hex with toHex (Bytes)', () => {
    // Option<Bytes> for a parachain head, however, this is effectively an
    // Option<Option<Bytes>> (hence the length, since it is from storage)
    const HEX = '0x210100000000000000000000000000000000000000000000000000000000000000000000000000000000011b4d03dd8c01f1049143cf9c4c817e4b167f1d1b83e5c6f0f10d89ba1e7bce'; // watch the hex prefix and length

    expect(new _Option.default(registry, _Bytes.default, HEX).toHex().substr(6)).toEqual(HEX.substr(2));
  });
  it('converts correctly from hex with toNumber (U64)', () => {
    const HEX = '0x12345678';
    expect(new _Option.default(registry, _U.default, HEX).unwrap().toNumber()).toEqual(0x12345678);
  });
  it('decodes reusing instanciated inputs', () => {
    const foo = new _Text.default(registry, 'bar');
    expect(new _Option.default(registry, _Text.default, foo).value).toBe(foo);
  });
  testDecode('string (with)', 'foo', 'foo');
  testDecode('string (without)', undefined, '');
  testDecode('Uint8Array (with)', Uint8Array.from([1, 12, 102, 111, 111]), 'foo');
  testDecode('Uint8Array (without)', Uint8Array.from([0]), '');
  testEncode('toHex', '0x0c666f6f');
  testEncode('toString', 'foo');
  testEncode('toU8a', Uint8Array.from([1, 12, 102, 111, 111]));
  it('has empty toString() (undefined)', () => {
    expect(new _Option.default(registry, _Text.default).toString()).toEqual('');
  });
  it('has value toString() (provided)', () => {
    expect(new _Option.default(registry, _Text.default, new Uint8Array([1, 4 << 2, 49, 50, 51, 52])).toString()).toEqual('1234');
  });
  it('converts toU8a() with', () => {
    expect(new _Option.default(registry, _Text.default, '1234').toU8a()).toEqual(new Uint8Array([1, 4 << 2, 49, 50, 51, 52]));
  });
  it('converts toU8a() without', () => {
    expect(new _Option.default(registry, _Text.default).toU8a()).toEqual(new Uint8Array([0]));
  });
  describe('utils', () => {
    const test = new _Option.default(registry, _Text.default, '1234');
    it('compares against other option', () => {
      expect(test.eq(new _Option.default(registry, _Text.default, '1234'))).toBe(true);
    });
    it('compares against raw value', () => {
      expect(test.eq('1234')).toBe(true);
    });
    it('unwrapOr to specified if empty', () => {
      expect(new _Option.default(registry, _Text.default).unwrapOr('6789').toString()).toEqual('6789');
    });
    it('unwrapOr to specified if non-empty', () => {
      var _Option$unwrapOr;

      expect((_Option$unwrapOr = new _Option.default(registry, _Text.default, '1234').unwrapOr(null)) === null || _Option$unwrapOr === void 0 ? void 0 : _Option$unwrapOr.toString()).toEqual('1234');
    });
    it('unwrapOrDefault to default if empty', () => {
      expect(new _Option.default(registry, _U.default).unwrapOrDefault().toNumber()).toEqual(0);
    });
    it('unwrapOrDefault to specified if non-empty', () => {
      expect(new _Option.default(registry, _U.default, '1234').unwrapOrDefault().toNumber()).toEqual(1234);
    });
  });
});