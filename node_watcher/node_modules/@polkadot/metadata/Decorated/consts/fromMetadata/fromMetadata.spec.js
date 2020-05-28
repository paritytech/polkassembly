"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _static = _interopRequireDefault(require("../../../Metadata/static"));

var _static2 = _interopRequireDefault(require("../../../Metadata/v10/static"));

var _fromMetadata = _interopRequireDefault(require("../fromMetadata"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function init(meta) {
  const registry = new _types.TypeRegistry();
  const metadata = new _types.Metadata(registry, meta);
  return [(0, _fromMetadata.default)(registry, metadata), registry];
}

describe('fromMetadata', () => {
  it('should return constants with the correct type and value', () => {
    const [consts, registry] = init(_static.default);
    expect(consts.democracy.cooloffPeriod).toBeInstanceOf(registry.createClass('BlockNumber')); // 3 second blocks, 28 days

    expect(consts.democracy.cooloffPeriod.toNumber()).toEqual(28 * 24 * 60 * (60 / 3));
  }); // removed from session

  it('correctly handles bytes', () => {
    const [consts] = init(_static2.default); // 0x34 removes as the length prefix removed

    expect(consts.session.dedupKeyPrefix.toHex()).toEqual('0x3a73657373696f6e3a6b657973');
  });
});