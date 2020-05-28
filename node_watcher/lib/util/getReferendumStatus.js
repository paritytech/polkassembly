"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
function isOld(info) {
    return !!info.proposalHash;
}
// Copy-paste from https://github.com/polkadot-js/api/blob/master/packages/api-derive/src/democracy/util.ts#L19
function getReferendumStatus(info) {
    if (info.isNone) {
        return null;
    }
    var unwrapped = info.unwrap();
    if (isOld(unwrapped)) {
        return unwrapped;
    }
    else if (unwrapped.isOngoing) {
        return unwrapped.asOngoing;
    }
    // done, we don't include it here... only currently active
    return null;
}
exports.getReferendumStatus = getReferendumStatus;
