"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

var _U8aFixed = _interopRequireDefault(require("../codec/U8aFixed"));

var _Bool = _interopRequireDefault(require("../primitive/Bool"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// For votes, the topmost bit indicated aye/nay, the lower bits indicate the conviction
const AYE_BITS = 0b10000000;
const NAY_BITS = 0b00000000;
const CON_MASK = 0b01111111;
const DEF_CONV = 0b00000000; // the default conviction, None

/** @internal */

function decodeVoteBool(value) {
  return value ? new Uint8Array([AYE_BITS | DEF_CONV]) : new Uint8Array([NAY_BITS]);
}
/** @internal */


function decodeVoteU8a(value) {
  return value.length ? value.subarray(0, 1) : new Uint8Array([NAY_BITS]);
}
/** @internal */


function decodeVote(registry, value) {
  if ((0, _util.isUndefined)(value) || value instanceof Boolean || (0, _util.isBoolean)(value)) {
    return decodeVoteBool(new _Bool.default(registry, value).isTrue);
  } else if ((0, _util.isNumber)(value)) {
    return decodeVoteBool(value < 0);
  } else if ((0, _util.isU8a)(value)) {
    return decodeVoteU8a(value);
  }

  const vote = new _Bool.default(registry, value.aye).isTrue ? AYE_BITS : NAY_BITS;
  const conviction = registry.createType('Conviction', (0, _util.isUndefined)(value.conviction) ? DEF_CONV : value.conviction);
  return new Uint8Array([vote | conviction.index]);
}
/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */


class Vote extends _U8aFixed.default {
  constructor(registry, value) {
    // decoded is just 1 byte
    // Aye: Most Significant Bit
    // Conviction: 0000 - 0101
    const decoded = decodeVote(registry, value);
    super(registry, decoded, 8);
    this._aye = void 0;
    this._conviction = void 0;
    this._aye = (decoded[0] & AYE_BITS) === AYE_BITS;
    this._conviction = this.registry.createType('Conviction', decoded[0] & CON_MASK);
  }
  /**
   * @description returns a V2 conviction
   */


  get conviction() {
    return this._conviction;
  }
  /**
   * @description true if the wrapped value is a positive vote
   */


  get isAye() {
    return this._aye;
  }
  /**
   * @description true if the wrapped value is a negative vote
   */


  get isNay() {
    return !this.isAye;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExpanded) {
    return {
      conviction: this.conviction.toHuman(isExpanded),
      vote: this.isAye ? 'Aye' : 'Nay'
    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Vote';
  }

}

exports.default = Vote;