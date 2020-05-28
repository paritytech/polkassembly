"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _ = _interopRequireDefault(require("./"));

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('on', () => {
  const registry = new _types.TypeRegistry();
  let mock;
  beforeEach(() => {
    mock = new _.default(registry);
  });
  it('it emits both connected and disconnected events', done => {
    const events = {
      connected: false,
      disconnected: false
    };

    const handler = type => {
      mock.on(type, () => {
        events[type] = true;

        if (Object.values(events).filter(value => value).length === 2) {
          done();
        }
      });
    };

    handler('connected');
    handler('disconnected');
  });
});