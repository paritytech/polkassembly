"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Text = _interopRequireDefault(require("../primitive/Text"));

var _VecFixed = _interopRequireDefault(require("./VecFixed"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('VecFixed', () => {
  const registry = new _create.TypeRegistry();
  describe('construction', () => {
    it('constructs via empty', () => {
      expect(new _VecFixed.default(registry, _Text.default, 2).toHex()).toEqual('0x0000');
    });
    it('constructs via Uint8Array', () => {
      expect(new _VecFixed.default(registry, _Text.default, 2, new Uint8Array([0x00, 0x04, 0x31])).toHex()).toEqual('0x000431');
    });
    it('decodes reusing instance inputs', () => {
      const foo = new _Text.default(registry, 'bar');
      expect(new _VecFixed.default(registry, _Text.default, 1, [foo])[0]).toBe(foo);
    });
  });
  describe('utils', () => {
    let test;
    beforeEach(() => {
      test = new (_VecFixed.default.with(_Text.default, 5))(registry, ['1', '2', '3', undefined, '5']);
    });
    it('has a sane string types', () => {
      expect(test.toRawType()).toEqual('[Text;5]');
      expect(test.Type).toEqual('Text');
    });
    it('has a correct toHex', () => {
      // each entry length 1 << 2, char as hex (0x31 === `1`), one empty
      expect(test.toHex()).toEqual('0x043104320433000435');
    });
    it('has empty Uint8Array when length is 0', () => {
      const test = new (_VecFixed.default.with(_Text.default, 0))(registry);
      expect(test.encodedLength).toEqual(0);
      expect(test.toU8a()).toEqual(new Uint8Array([]));
    });
    it('has equivalent to 1 Uint8Array when length is 1', () => {
      const test = new (_VecFixed.default.with(_Text.default, 1))(registry, ['hello']);
      expect(test.encodedLength).toEqual(1 + 5);
      expect(test.toU8a()).toEqual(new Uint8Array([20, 104, 101, 108, 108, 111]));
    });
  });
});