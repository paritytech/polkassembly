"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV3;

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV3(registry, metadataV2) {
  return registry.createType('MetadataV3', metadataV2);
}