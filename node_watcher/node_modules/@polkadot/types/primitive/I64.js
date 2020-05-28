"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Int = _interopRequireDefault(require("../codec/Int"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name I64
 * @description
 * A 64-bit signed integer
 */
class I64 extends _Int.default.with(64) {}

exports.default = I64;