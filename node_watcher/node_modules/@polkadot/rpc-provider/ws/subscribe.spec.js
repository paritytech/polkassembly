"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("./"));

var _mockWs = require("../../test/mockWs");

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
let ws;
let mock;

function createMock(requests) {
  mock = (0, _mockWs.mockWs)(requests);
}

function createWs(autoConnect = 1000) {
  ws = new _.default(_mockWs.TEST_WS_URL, autoConnect);
  return ws;
}

describe('subscribe', () => {
  let globalWs;
  beforeEach(() => {
    globalWs = global.WebSocket;
  });
  afterEach(() => {
    global.WebSocket = globalWs;

    if (mock) {
      mock.done();
    }
  });
  it('adds subscriptions', () => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);
    return createWs().subscribe('type', 'test_sub', [], cb => {
      expect(cb).toEqual(expect.anything());
    }).then(id => {
      expect(id).toEqual(1);
    });
  });
});