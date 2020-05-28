"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("./"));

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('state', () => {
  it('requires an ws:// prefixed endpoint', () => {
    expect(() => new _.default('http://', 0)).toThrow(/with 'ws/);
  });
  it('allows wss:// endpoints', () => {
    expect(() => new _.default('wss://', 0)).not.toThrow();
  });
});