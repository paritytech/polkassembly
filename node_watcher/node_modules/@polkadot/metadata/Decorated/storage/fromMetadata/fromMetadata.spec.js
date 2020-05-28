"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _testingPairs = _interopRequireDefault(require("@polkadot/keyring/testingPairs"));

var _types = require("@polkadot/types");

var _util = require("@polkadot/util");

var _static = _interopRequireDefault(require("../../../Metadata/static"));

var _static2 = _interopRequireDefault(require("../../../Metadata/v8/static"));

var _Decorated = _interopRequireDefault(require("../../Decorated"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const keyring = (0, _testingPairs.default)({
  type: 'ed25519'
});
describe('fromMetadata', () => {
  describe('latest', () => {
    const registry = new _types.TypeRegistry();
    const decorated = new _Decorated.default(registry, _static.default);
    it('should throw if the storage function expects an argument', () => {
      expect(() => decorated.query.balances.account()).toThrowError(/requires one argument/);
    });
    it('should return a value if the storage function does not expect an argument', () => {
      expect(() => decorated.query.timestamp.now()).not.toThrow();
    });
    it('should return the correct length-prefixed storage key', () => {
      expect((0, _util.u8aToHex)(decorated.query.system.account(keyring.alice.address))).toEqual('0x410126aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9de1e86a9a8c739864cf3cc5ec2bea59fd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d');
    });
  });
  describe('V8', () => {
    const registry = new _types.TypeRegistry();
    const decorated = new _Decorated.default(registry, _static2.default);
    it('should return the correct length-prefixed storage key', () => {
      expect((0, _util.u8aToHex)(decorated.query.balances.freeBalance(keyring.alice.address))).toEqual( // old storage key format
      '0x807f864e18e3dd8b58386310d2fe0919eef27c6e558564b7f67f22d99d20f587bb');
    });
  });
});