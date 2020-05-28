"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _types = require("@polkadot/types");

var _MagicNumber = _interopRequireWildcard(require("./MagicNumber"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('MagicNumber', () => {
  const registry = new _types.TypeRegistry();
  it('succeeds when the magic number matches', () => {
    expect(() => new _MagicNumber.default(registry, _MagicNumber.MAGIC_NUMBER)).not.toThrow();
  });
  it('fails when the magic number mismatches', () => {
    expect(() => new _MagicNumber.default(registry, 0x12345)).toThrow(/MagicNumber/);
  });
});