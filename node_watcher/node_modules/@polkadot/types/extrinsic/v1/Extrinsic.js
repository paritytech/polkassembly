"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

var _Struct = _interopRequireDefault(require("../../codec/Struct"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const TRANSACTION_VERSION = 1;
/**
 * @name GenericExtrinsicV1
 * @description
 * The first generation of compact extrinsics
 */

class ExtrinsicV1 extends _Struct.default {
  constructor(registry, value, {
    isSigned
  } = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV1',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, ExtrinsicV1.decodeExtrinsic(registry, value, isSigned));
  }
  /** @internal */


  static decodeExtrinsic(registry, value, isSigned = false) {
    if (value instanceof ExtrinsicV1) {
      return value;
    } else if ((0, _util.isU8a)(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createType('ExtrinsicSignatureV1', value, {
        isSigned
      });
      const method = registry.createType('Call', value.subarray(signature.encodedLength));
      return {
        method,
        signature
      };
    }

    return value || {};
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description The [[Call]] this extrinsic wraps
   */


  get method() {
    return this.get('method');
  }
  /**
   * @description The [[ExtrinsicSignatureV1]]
   */


  get signature() {
    return this.get('signature');
  }
  /**
   * @description The version for the signature
   */


  get version() {
    return TRANSACTION_VERSION;
  }
  /**
   * @description Add an [[ExtrinsicSignatureV1]] to the extrinsic (already generated)
   */


  addSignature(signer, signature, payload) {
    this.signature.addSignature(signer, signature, payload);
    return this;
  }
  /**
   * @description Sign the extrinsic with a specific keypair
   */


  sign(account, options) {
    this.signature.sign(this.method, account, options);
    return this;
  }
  /**
   * @describe Adds a fake signature to the extrinsic
   */


  signFake(signer, options) {
    this.signature.signFake(this.method, signer, options);
    return this;
  }

}

exports.default = ExtrinsicV1;