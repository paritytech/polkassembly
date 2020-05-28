"use strict";

var _types = require("../types");

var _ = require(".");

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('createClass', () => {
  const registry = new _.TypeRegistry();
  it('should memoize from strings', () => {
    const a = (0, _.createClass)(registry, 'BabeWeight');
    const b = (0, _.createClass)(registry, 'BabeWeight');
    expect(a).toBe(b);
  });
  it('should return equivalents for Bytes & Vec<u8>', () => {
    const A = (0, _.createClass)(registry, 'Vec<u8>');
    const B = (0, _.createClass)(registry, 'Bytes');
    expect(new A(registry) instanceof B).toBe(true);
  });
});
describe('getTypeClass', () => {
  const registry = new _.TypeRegistry();
  it('warns on invalid types', () => {
    const spy = jest.spyOn(console, 'warn');
    const typeDef = {
      info: _types.TypeDefInfo.Plain,
      type: 'ABC'
    };
    (0, _.getTypeClass)(registry, typeDef);
    expect(spy).toHaveBeenCalledWith('Unable to resolve type ABC, it will fail on construction');
  });
});