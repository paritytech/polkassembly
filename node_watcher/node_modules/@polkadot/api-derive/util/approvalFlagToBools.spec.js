"use strict";

var _types = require("@polkadot/types");

var _approvalFlagsToBools = require("./approvalFlagsToBools");

// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('approvalFlagsToBools', () => {
  const registry = new _types.TypeRegistry();
  it('translates and empty array to empty', () => {
    expect((0, _approvalFlagsToBools.approvalFlagsToBools)([])).toEqual([]);
  });
  it('translates a single input', () => {
    expect((0, _approvalFlagsToBools.approvalFlagsToBools)([registry.createType('ApprovalFlag', 0b1010)])).toEqual([false, true, false, true]);
  });
  it('translates multiple inputs', () => {
    expect((0, _approvalFlagsToBools.approvalFlagsToBools)([registry.createType('ApprovalFlag', 0b0000), registry.createType('ApprovalFlag', 0b1100)])).toEqual([false, false, false, true, true]);
  });
});