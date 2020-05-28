"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _ = _interopRequireDefault(require("./"));

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('unsubscribe', () => {
  const registry = new _types.TypeRegistry();
  let mock;
  let id;
  beforeEach(() => {
    mock = new _.default(registry);
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', () => undefined).then(_id => {
      id = _id;
    });
  });
  it('fails on unknown ids', () => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', 5).catch(error => {
      expect(error.message).toMatch(/Unable to find/);
      return false;
    });
  });
  it('unsubscribes successfully', () => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id);
  });
  it('fails on double unsubscribe', () => {
    return mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id).then(() => mock.unsubscribe('chain_newHead', 'chain_subscribeNewHead', id)).catch(error => {
      expect(error.message).toMatch(/Unable to find/);
      return false;
    });
  });
});