"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

var _Compact = _interopRequireDefault(require("../codec/Compact"));

var _Raw = _interopRequireDefault(require("../codec/Raw"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function decodeBitVecU8a(value) {
  if (!value || !value.length) {
    return new Uint8Array();
  } // handle all other Uint8Array inputs, these do have a length prefix which is the number of bits encoded


  const [offset, length] = _Compact.default.decodeU8a(value);

  const total = offset + Math.ceil(length.toNumber() / 8);
  (0, _util.assert)(total <= value.length, `BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);
  return value.subarray(offset, total);
}
/** @internal */


function decodeBitVec(value) {
  if (Array.isArray(value) || (0, _util.isString)(value)) {
    return (0, _util.u8aToU8a)(value);
  }

  return decodeBitVecU8a(value);
}
/**
 * @name BitVec
 * @description
 * A BitVec that represents an array of bits. The bits are however stored encoded. The difference between this
 * and a normal Bytes would be that the length prefix indicates the number of bits encoded, not the bytes
 */


class BitVec extends _Raw.default {
  constructor(registry, value) {
    super(registry, decodeBitVec(value));
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.length + _Compact.default.encodeU8a(this.bitLength()).length;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'BitVec';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const bitVec = super.toU8a();
    return isBare ? bitVec : (0, _util.u8aConcat)(_Compact.default.encodeU8a(this.bitLength()), bitVec);
  }

}

exports.default = BitVec;