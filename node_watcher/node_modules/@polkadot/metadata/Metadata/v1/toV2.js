"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV2;

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV2(registry, metadataV1) {
  return registry.createType('MetadataV2', metadataV1);
}