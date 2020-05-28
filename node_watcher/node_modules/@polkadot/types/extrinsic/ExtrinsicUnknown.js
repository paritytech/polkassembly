"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Struct = _interopRequireDefault(require("../codec/Struct"));

var _constants = require("./constants");

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name GenericExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */
class ExtrinsicUnknown extends _Struct.default {
  constructor(registry, value, {
    isSigned = false,
    version = 0
  } = {}) {
    super(registry, {});
    throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & _constants.UNMASK_VERSION}`);
  }

}

exports.default = ExtrinsicUnknown;