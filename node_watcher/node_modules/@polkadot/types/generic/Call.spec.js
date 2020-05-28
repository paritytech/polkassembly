"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Metadata = _interopRequireDefault(require("@polkadot/metadata/Metadata"));

var _static = _interopRequireDefault(require("@polkadot/metadata/Metadata/static"));

var _create = require("../create");

var _Call = _interopRequireDefault(require("./Call"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _create.TypeRegistry(); // eslint-disable-next-line no-new

new _Metadata.default(registry, _static.default);
describe('Call', () => {
  it('handles decoding correctly (bare)', () => {
    expect(new _Call.default(registry, {
      args: [],
      callIndex: [6, 1] // balances.setBalance

    }).toU8a()).toEqual(new Uint8Array([6, 1, 0, 0, 0]));
  });
  it('handles creation from a hex value properly', () => {
    expect(new _Call.default(registry, '0x0601').toU8a()).toEqual(new Uint8Array([6, 1, 0, 0, 0])); // balances.setBalance
  });
  describe('hasOrigin', () => {
    const test = {
      args: [],
      callIndex: [2, 2] // timestamp

    };
    it('is false with no arguments', () => {
      expect(new _Call.default(registry, test, {
        args: []
      }).hasOrigin).toEqual(false);
    });
    it('is false with first argument as non-Origin', () => {
      expect(new _Call.default(registry, test, {
        args: [{
          name: 'a',
          type: 'u32'
        }]
      }).hasOrigin).toEqual(false);
    });
    it('is false with first argument as non-Origin', () => {
      expect(new _Call.default(registry, test, {
        args: [{
          name: 'a',
          type: 'Origin'
        }]
      }).hasOrigin).toEqual(true);
    });
  });
});