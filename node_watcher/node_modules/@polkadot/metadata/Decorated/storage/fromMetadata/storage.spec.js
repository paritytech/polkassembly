"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _storage = _interopRequireDefault(require("./storage"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('storage', () => {
  const registry = new _types.TypeRegistry();
  const storage = (0, _storage.default)(registry, 8);
  it('should return well known keys', () => {
    expect(typeof storage.substrate).toBe('object');
    expect(storage.substrate.changesTrieConfig).toBeTruthy();
    expect(storage.substrate.childStorageKeyPrefix).toBeTruthy();
    expect(storage.substrate.code).toBeTruthy();
    expect(storage.substrate.extrinsicIndex).toBeTruthy();
    expect(storage.substrate.heapPages).toBeTruthy();
  });
});