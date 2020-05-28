"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("./"));

var _mockWs = require("../../test/mockWs");

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
let provider;
let mock;

function createMock(requests) {
  mock = (0, _mockWs.mockWs)(requests);
}

function createWs(autoConnect = 1000) {
  provider = new _.default(_mockWs.TEST_WS_URL, autoConnect);
  return provider;
}

describe('send', () => {
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
  it('handles internal errors', () => {
    createMock([{
      id: 1,
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);
    return createWs().send('test_encoding', [{
      error: 'send error'
    }]).catch(error => {
      expect(error.message).toEqual('send error');
    });
  });
  it('passes the body through correctly', () => {
    createMock([{
      id: 1,
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);
    return createWs().send('test_body', ['param']).then(() => {
      expect( // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      mock.body.test_body).toEqual('{"id":1,"jsonrpc":"2.0","method":"test_body","params":["param"]}');
    });
  });
  it('throws error when !response.ok', () => {
    createMock([{
      error: {
        code: 666,
        message: 'error'
      },
      id: 1
    }]);
    return createWs().send('test_error', []).catch(error => {
      expect(error.message).toMatch(/666: error/);
    });
  });
  it('adds subscriptions', () => {
    createMock([{
      id: 1,
      method: 'test_sub',
      reply: {
        result: 1
      }
    }]);
    return createWs().send('test_sub', []).then(id => {
      expect(id).toEqual(1);
    });
  });
});