"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _2 = _interopRequireDefault(require("./"));

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('subscribe', () => {
  const registry = new _types.TypeRegistry();
  let mock;
  beforeEach(() => {
    mock = new _2.default(registry);
  });
  it('fails on unknown methods', () => {
    return mock.subscribe('test', 'test_notFound').catch(error => {
      expect(error.message).toMatch(/Invalid method 'test_notFound'/);
    });
  });
  it('returns a subscription id', () => {
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', () => undefined).then(id => {
      expect(id).toEqual(1);
    });
  });
  it('calls back with the last known value', done => {
    mock.isUpdating = false;
    mock.subscriptions.chain_subscribeNewHead.lastValue = 'testValue';
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_, value) => {
      expect(value).toEqual('testValue');
      done();
    });
  });
  it('calls back with new headers', done => {
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_, header) => {
      if (header.number === 4) {
        done();
      }
    });
  });
  it('handles errors withing callbacks gracefully', done => {
    let hasThrown = false;
    return mock.subscribe('chain_newHead', 'chain_subscribeNewHead', (_, header) => {
      if (!hasThrown) {
        hasThrown = true;
        throw new Error('testing');
      }

      if (header.number === 3) {
        done();
      }
    });
  });
});