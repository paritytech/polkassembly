"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../../create");

var _U = _interopRequireDefault(require("../../primitive/U32"));

var _compareMap = _interopRequireDefault(require("./compareMap"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('compareMap', () => {
  const registry = new _create.TypeRegistry();
  const a = new Map([['decimals', new _U.default(registry, 15)], ['missing', new _U.default(registry, 10)], ['foobar', new _U.default(registry, 5)]]);
  const b = new Map([['decimals', 15], ['missing', 10], ['foobar', 5]]);
  const c = new Map([['decimals', new _U.default(registry, 15)], ['missing', new _U.default(registry, 10)], ['foobar', new _U.default(registry, 5)]]);
  it('compares Map<string, Codec> against Object', () => {
    expect((0, _compareMap.default)(a, {
      decimals: 15,
      foobar: 5,
      missing: 10
    })).toBe(true);
  });
  it('compares Map<string, any> against entries array', () => {
    expect((0, _compareMap.default)(b, [['missing', 10], ['decimals', 15], ['foobar', 5]])).toBe(true);
  });
  it('compares between 2 maps', () => {
    expect((0, _compareMap.default)(a, b)).toBe(true);
  });
  it('compares between 2 maps (both codec)', () => {
    expect((0, _compareMap.default)(a, c)).toBe(true);
  });
  it('returns false when second param is a non-map, non-array, non-object', () => {
    expect((0, _compareMap.default)(a, 123)).toBe(false);
  });
  it('returns false when second param is a array with non-entries', () => {
    expect((0, _compareMap.default)(a, [123, 456, 789])).toBe(false);
  });
  it('returns false when second param is a array with non-entries (only key)', () => {
    expect((0, _compareMap.default)(a, [[123], [456], [789]])).toBe(false);
  });
  it('returns false when properties are missing', () => {
    expect((0, _compareMap.default)(a, [['decimals', 15], ['wrong', 10], ['foobar', 5]])).toBe(false);
  });
  it('returns false when lengths do not match', () => {
    expect((0, _compareMap.default)(a, [['decimals', 15]])).toBe(false);
  });
});