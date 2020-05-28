"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _StorageChangeSet = _interopRequireDefault(require("../../json/StorageChangeSet.001.json"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
describe('StorageChangeSet', () => {
  const registry = new _types.TypeRegistry();
  describe('construction', () => {
    const set = registry.createType('StorageChangeSet', {
      block: '0x1234',
      changes: [['0xab', '0xcd']]
    });
    it('wraps blockHash', () => {
      expect(set.block.toHex()).toEqual('0x1234000000000000000000000000000000000000000000000000000000000000');
    });
    it('wraps key/value', () => {
      expect(set.changes[0][1].toString()).toEqual('0xcd');
    });
  });
  describe('json', () => {
    const set = registry.createType('StorageChangeSet', _StorageChangeSet.default.params.result);
    it('has the correct hash', () => {
      expect(set.block.toHex()).toEqual('0x2ad8077937e9a5ceb2e0d57c95b95a6a9edcedc4fb1f14e3bc13245e223a569d');
    });
    it('has the changes', () => {
      expect(set.changes).toHaveLength(1);
      expect(set.changes[0][0].toHex()).toEqual('0x54bdbdb5e438d574dd4da05ee6131cee');
    });
  });
});