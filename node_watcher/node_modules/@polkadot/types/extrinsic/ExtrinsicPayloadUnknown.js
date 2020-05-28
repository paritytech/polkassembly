"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Struct = _interopRequireDefault(require("../codec/Struct"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
class ExtrinsicPayloadUnknown extends _Struct.default {
  constructor(registry, value, {
    version = 0
  } = {}) {
    super(registry, {});
    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }

}

exports.default = ExtrinsicPayloadUnknown;