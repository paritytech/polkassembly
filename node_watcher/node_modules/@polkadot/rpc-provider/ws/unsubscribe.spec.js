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
  it('removes subscriptions', () => {
    createMock([{
      id: 1,
      method: 'subscribe_test',
      reply: {
        result: 1
      }
    }, {
      id: 2,
      method: 'unsubscribe_test',
      reply: {
        result: true
      }
    }]);
    const ws = createWs();
    return ws.subscribe('test', 'subscribe_test', [], cb => {
      expect(cb).toEqual(expect.anything());
    }).then(id => {
      return ws.unsubscribe('test', 'subscribe_test', id);
    });
  });
  it('fails when sub not found', () => {
    createMock([{
      id: 1,
      method: 'subscribe_test',
      reply: {
        result: 1
      }
    }]);
    const ws = createWs();
    return ws.subscribe('test', 'subscribe_test', [], cb => {
      expect(cb).toEqual(expect.anything());
    }).then(() => {
      return ws.unsubscribe('test', 'subscribe_test', 111);
    }).then(result => {
      expect(result).toBe(false);
    });
  });
});