"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("./"));

var _mockWs = require("../../test/mockWs");

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
let ws;
let mock;

function createWs(requests, autoConnect = 1000) {
  mock = (0, _mockWs.mockWs)(requests);
  ws = new _.default(_mockWs.TEST_WS_URL, autoConnect);
  return ws;
}

describe('onOpen', () => {
  afterEach(() => {
    if (mock) {
      mock.done();
    }
  });
  it('sends messages when connected', () => {
    const ws = createWs([{
      id: 1,
      method: 'test_queue',
      reply: {
        result: 'ok'
      }
    }], 0);
    const sendPromise = ws.send('test_queue', []); // eslint-disable-next-line @typescript-eslint/no-floating-promises

    ws.connect();
    return sendPromise.then(result => {
      expect(result).toEqual('ok');
    });
  });
});