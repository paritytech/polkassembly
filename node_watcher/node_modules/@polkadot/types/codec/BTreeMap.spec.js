"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Text = _interopRequireDefault(require("../primitive/Text"));

var _U = _interopRequireDefault(require("../primitive/U32"));

var _Struct = _interopRequireDefault(require("./Struct"));

var _BTreeMap = _interopRequireDefault(require("./BTreeMap"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _create.TypeRegistry();
const mockU32TextMap = new Map();
mockU32TextMap.set(new _Text.default(registry, 'bazzing'), new _U.default(registry, 69));
describe('BTreeMap', () => {
  it('decodes null', () => {
    expect(new (_BTreeMap.default.with(_Text.default, _U.default))(registry, null).toString()).toEqual('{}');
  });
  it('decodes reusing instantiated inputs', () => {
    const key = new _Text.default(registry, 'foo');
    const val = new _Text.default(registry, 'bar');
    expect(new (_BTreeMap.default.with(_Text.default, _Text.default))(registry, new Map([[key, val]])).eq(new Map([[key, val]]))).toBe(true);
  });
  it('decodes within more complicated types', () => {
    const s = new _Struct.default(registry, {
      placeholder: _U.default,
      value: 'BTreeMap<Text, U32>'
    });
    s.set('value', new (_BTreeMap.default.with(_Text.default, _U.default))(registry, mockU32TextMap));
    expect(s.toString()).toBe('{"placeholder":0,"value":{"bazzing":69}}');
  });
  it('throws when it cannot decode', () => {
    expect(() => new (_BTreeMap.default.with(_Text.default, _U.default))(registry, 'ABC')).toThrowError(/Map: cannot decode type/);
  });
  it('correctly encodes length', () => {
    expect(new (_BTreeMap.default.with(_Text.default, _U.default))(registry, mockU32TextMap).encodedLength).toEqual(13);
  });
  it('generates sane toRawTypes', () => {
    expect(new (_BTreeMap.default.with(_Text.default, _U.default))(registry).toRawType()).toBe('BTreeMap<Text,u32>');
    expect(new (_BTreeMap.default.with(_Text.default, _Text.default))(registry).toRawType()).toBe('BTreeMap<Text,Text>');
    expect(new (_BTreeMap.default.with(_Text.default, _Struct.default.with({
      a: _U.default,
      b: _Text.default
    })))(registry).toRawType()).toBe('BTreeMap<Text,{"a":"u32","b":"Text"}>');
  });
});