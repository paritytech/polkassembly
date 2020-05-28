"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

var _Struct = _interopRequireDefault(require("../codec/Struct"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// We explicitly cast the type here to get the actual TypeScript exports right
// We can ignore the properties, added via Struct.with
const _Payload = _Struct.default.with({
  address: 'Address',
  blockHash: 'Hash',
  blockNumber: 'BlockNumber',
  era: 'ExtrinsicEra',
  genesisHash: 'Hash',
  method: 'Call',
  nonce: 'Compact<Index>',
  runtimeVersion: 'RuntimeVersion',
  signedExtensions: 'Vec<Text>',
  tip: 'Compact<Balance>',
  version: 'u8'
});
/**
 * @name SignerPayload
 * @description
 * A generic signer payload that can be used for serialization between API and signer
 */


class SignerPayload extends _Payload {
  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  toPayload() {
    const {
      address,
      blockHash,
      blockNumber,
      era,
      genesisHash,
      method,
      nonce,
      runtimeVersion: {
        specVersion,
        transactionVersion
      },
      signedExtensions,
      tip,
      version
    } = this;
    return {
      address: address.toString(),
      blockHash: blockHash.toHex(),
      blockNumber: blockNumber.toHex(),
      era: era.toHex(),
      genesisHash: genesisHash.toHex(),
      method: method.toHex(),
      nonce: nonce.toHex(),
      signedExtensions: signedExtensions.map(e => e.toString()),
      specVersion: specVersion.toHex(),
      tip: tip.toHex(),
      transactionVersion: transactionVersion.toHex(),
      version: version.toNumber()
    };
  }
  /**
   * @description Creates a representation of the payload in raw Exrinsic form
   */


  toRaw() {
    const payload = this.toPayload(); // NOTE Explicitly pass the bare flag so the method is encoded un-prefixed (non-decodable, for signing only)

    const data = (0, _util.u8aToHex)(this.registry.createType('ExtrinsicPayload', payload, {
      version: payload.version
    }).toU8a({
      method: true
    }));
    return {
      address: payload.address,
      data,
      type: 'payload'
    };
  }

}

exports.default = SignerPayload;