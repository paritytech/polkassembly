"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _static = _interopRequireDefault(require("../static"));

var _ = _interopRequireDefault(require(".."));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('toCallsOnly', () => {
  const registry = new _types.TypeRegistry();
  it('creates a calls-only version of the  metadata', () => {
    const stripped = new _.default(registry, _static.default).asCallsOnly;

    try {
      expect(stripped).toBeDefined();
    } catch (error) {
      console.error(JSON.stringify(stripped));
      throw error;
    }
  });
  it('can serialize from the input', () => {
    const s1 = new _.default(registry, _static.default).asCallsOnly.toU8a();
    const s2 = new _.default(registry, s1).asCallsOnly.toU8a();
    expect(s1).toEqual(s2);
  });
});