"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _ConsensusEngineId = _interopRequireWildcard(require("./ConsensusEngineId"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('ConsensusEngineId', () => {
  it('creates a valid id for aura', () => {
    expect(_ConsensusEngineId.default.stringToId('FRNK')).toEqual(_ConsensusEngineId.CID_GRPA);
    expect(_ConsensusEngineId.default.stringToId('aura')).toEqual(_ConsensusEngineId.CID_AURA);
  });
  it('reverses an id to string for babe', () => {
    expect(_ConsensusEngineId.default.idToString(_ConsensusEngineId.CID_BABE)).toEqual('BABE');
  });
});