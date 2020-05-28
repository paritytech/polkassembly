"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require("./"));

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('encodeJson', () => {
  let coder;
  beforeEach(() => {
    coder = new _.default();
  });
  it('encodes a valid JsonRPC JSON string', () => {
    expect(coder.encodeJson('method', 'params')).toEqual('{"id":1,"jsonrpc":"2.0","method":"method","params":"params"}');
  });
});