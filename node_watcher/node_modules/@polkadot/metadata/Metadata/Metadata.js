"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

var _MetadataVersioned = _interopRequireDefault(require("./MetadataVersioned"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const VERSION_IDX = 4; // magic u32 preceding
// first we try and parse using the versioned structure, if this does fail,
// we adjust with the magic number and a manual version and re-try. As soon as
// we remove support for V0, we will just do a new here

function decodeMetadata(registry, _value = new Uint8Array()) {
  const value = (0, _util.isHex)(_value) ? (0, _util.hexToU8a)(_value) : _value;
  const version = value[VERSION_IDX];

  try {
    return new _MetadataVersioned.default(registry, value);
  } catch (error) {
    // This is an f-ing hack as a follow-up to another ugly hack
    // https://github.com/polkadot-js/api/commit/a9211690be6b68ad6c6dad7852f1665cadcfa5b2
    // when we fail on V9, try to re-parse it as v10... yes... HACK
    if (version === 9) {
      value[VERSION_IDX] = 10;
      return decodeMetadata(registry, value);
    }

    throw error;
  }
}
/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */


class Metadata extends _MetadataVersioned.default {
  constructor(registry, value) {
    super(registry, decodeMetadata(registry, value));
  }

}

exports.default = Metadata;