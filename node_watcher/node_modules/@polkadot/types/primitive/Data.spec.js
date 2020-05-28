"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Data = _interopRequireDefault(require("./Data"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _create.TypeRegistry();
describe('Data', () => {
  it('encodes a normal None', () => {
    expect(new _Data.default(registry).toHex()).toEqual('0x00');
  });
  it('encodes a hashed value correctly', () => {
    expect(new _Data.default(registry, {
      Keccak256: '0x0102030405060708091011121314151617181920212223242526272829303132'
    }).toHex()).toEqual('0x240102030405060708091011121314151617181920212223242526272829303132');
  });
  it('encodes a Raw value correctly', () => {
    expect(new _Data.default(registry, {
      Raw: '0x0102030405060708'
    }).toHex()).toEqual('0x090102030405060708');
  });
});