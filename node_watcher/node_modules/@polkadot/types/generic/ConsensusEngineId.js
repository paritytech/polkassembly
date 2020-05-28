"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CID_GRPA = exports.CID_BABE = exports.CID_AURA = void 0;

var _bn = _interopRequireDefault(require("bn.js"));

var _util = require("@polkadot/util");

var _U = _interopRequireDefault(require("../primitive/U32"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const CID_AURA = 0x61727561; // 'aura'

exports.CID_AURA = CID_AURA;
const CID_BABE = 0x45424142; // 'BABE'

exports.CID_BABE = CID_BABE;
const CID_GRPA = 0x4b4e5246; // 'FRNK' (don't ask, used to be afg1)

exports.CID_GRPA = CID_GRPA;

/**
 * @name ConsensusEngineId
 * @description
 * A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']
 */
class ConsensusEngineId extends _U.default {
  static idToString(input) {
    return (0, _util.bnToBn)(input).toArray('le').map(code => String.fromCharCode(code)).join('');
  }

  static stringToId(input) {
    return input.split('').reverse().reduce((result, char) => result * 256 + char.charCodeAt(0), 0);
  }
  /**
   * @description `true` if the engine matches aura
   */


  get isAura() {
    return this.eq(CID_AURA);
  }
  /**
   * @description `true` is the engine matches babe
   */


  get isBabe() {
    return this.eq(CID_BABE);
  }
  /**
   * @description `true` is the engine matches grandpa
   */


  get isGrandpa() {
    return this.eq(CID_GRPA);
  }

  _getAuraAuthor(bytes, sessionValidators) {
    return sessionValidators[this.registry.createType('RawAuraPreDigest', bytes.toU8a(true)).slotNumber.mod(new _bn.default(sessionValidators.length)).toNumber()];
  }

  _getBabeAuthor(bytes, sessionValidators) {
    const digest = this.registry.createType('RawBabePreDigestCompat', bytes.toU8a(true));
    return sessionValidators[digest.value.toNumber()];
  }
  /**
   * @description From the input bytes, decode into an author
   */


  extractAuthor(bytes, sessionValidators) {
    if (sessionValidators === null || sessionValidators === void 0 ? void 0 : sessionValidators.length) {
      if (this.isAura) {
        return this._getAuraAuthor(bytes, sessionValidators);
      } else if (this.isBabe) {
        return this._getBabeAuthor(bytes, sessionValidators);
      }
    }

    return undefined;
  }
  /**
   * @description Override the default toString to return a 4-byte string
   */


  toString() {
    return ConsensusEngineId.idToString(this);
  }

}

exports.default = ConsensusEngineId;