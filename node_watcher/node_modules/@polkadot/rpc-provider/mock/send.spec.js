"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _ = _interopRequireDefault(require("./"));

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('send', () => {
  const registry = new _types.TypeRegistry();
  let mock;
  beforeEach(() => {
    mock = new _.default(registry);
  });
  it('fails on non-supported methods', () => {
    return mock.send('something_invalid', []).catch(error => {
      expect(error.message).toMatch(/Invalid method/);
    });
  });
  it('returns values for mocked requests', () => {
    return mock.send('system_name', []).then(result => {
      expect(result).toBe('mockClient');
    });
  });
});