"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterEvents;

var _logging = _interopRequireDefault(require("./logging"));

// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function filterEvents(extHash, {
  block: {
    extrinsics,
    header
  }
}, allEvents, status) {
  // extrinsics to hashes
  const myHash = extHash.toHex();
  const allHashes = extrinsics.map(ext => ext.hash.toHex()); // find the index of our extrinsic in the block

  const index = allHashes.indexOf(myHash); // if we do get the block after finalized, it _should_ be there

  if (index === -1) {
    // only warn on filtering with isInBlock (finalization finalizes after)
    if (status.isInBlock) {
      _logging.default.warn(`block ${header.hash.toHex()}: Unable to find extrinsic ${myHash} inside ${allHashes.join(', ')}`);
    }

    return;
  }

  return allEvents.filter(({
    phase
  }) => // only ApplyExtrinsic has the extrinsic index
  phase.isApplyExtrinsic && phase.asApplyExtrinsic.eqn(index));
}