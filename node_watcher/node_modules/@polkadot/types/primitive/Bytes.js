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
function decodeBytesU8a(value) {
  if (!value.length) {
    return new Uint8Array();
  } // handle all other Uint8Array inputs, these do have a length prefix


  const [offset, length] = _Compact.default.decodeU8a(value);

  const total = offset + length.toNumber();
  (0, _util.assert)(total <= value.length, `Bytes: required length less than remainder, expected at least ${total}, found ${value.length}`);
  return value.subarray(offset, total);
}
/** @internal */


function decodeBytes(value) {
  if (Array.isArray(value) || (0, _util.isString)(value)) {
    return (0, _util.u8aToU8a)(value);
  } else if (!(value instanceof _Raw.default) && (0, _util.isU8a)(value)) {
    // We are ensuring we are not a Raw instance. In the case of a Raw we already have gotten
    // rid of the length, i.e. new Bytes(new Bytes(...)) will work as expected
    return decodeBytesU8a(value);
  }

  return value;
}
/**
 * @name Bytes
 * @description
 * A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
 * is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
 * as what is found in [[Text]] and [[Vec]])
 */


class Bytes extends _Raw.default {
  constructor(registry, value) {
    super(registry, decodeBytes(value));
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.length + _Compact.default.encodeU8a(this.length).length;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Bytes';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return isBare ? super.toU8a(isBare) : _Compact.default.addLengthPrefix(this);
  }

}

exports.default = Bytes;