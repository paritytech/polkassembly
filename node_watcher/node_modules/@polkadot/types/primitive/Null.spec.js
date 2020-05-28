"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Null = _interopRequireDefault(require("./Null"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Null', () => {
  const registry = new _create.TypeRegistry();
  it('compares against null', () => {
    expect(new _Null.default(registry).eq(null)).toBe(true);
  });
  it('compares against Null', () => {
    expect(new _Null.default(registry).eq(new _Null.default(registry))).toBe(true);
  });
  it('compares against other (failed)', () => {
    expect(new _Null.default(registry).eq()).toBe(false);
  });
});