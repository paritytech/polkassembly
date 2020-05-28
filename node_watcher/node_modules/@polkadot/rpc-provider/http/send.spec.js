"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("./"));

var _mockHttp = require("../../test/mockHttp");

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('send', () => {
  let http;
  let mock;
  beforeEach(() => {
    http = new _.default(_mockHttp.TEST_HTTP_URL);
  });
  afterEach(() => {
    if (mock) {
      mock.done();
    }
  });
  it('passes the body through correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mock = (0, _mockHttp.mockHttp)([{
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);
    return http.send('test_body', ['param']).then(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(mock.body.test_body).toEqual({
        id: 1,
        jsonrpc: '2.0',
        method: 'test_body',
        params: ['param']
      });
    });
  });
  it('throws error when !response.ok', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mock = (0, _mockHttp.mockHttp)([{
      code: 500,
      method: 'test_error'
    }]);
    return http.send('test_error', []).catch(error => {
      expect(error.message).toMatch(/\[500\]: Internal Server/);
    });
  });
});