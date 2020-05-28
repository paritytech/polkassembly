"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV5;

var _codec = require("@polkadot/types/codec");

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const hasherMap = new Map([['blake2_128', 'Blake2_128'], ['blake2_256', 'Blake2_256'], ['twox_128', 'Twox128'], ['twox_256', 'Twox256'], ['twox_64_concat', 'Twox64Concat']]);
/** @internal */

function toStorageHasher(registry, text) {
  const mapped = hasherMap.get(text.toString());
  (0, _util.assert)(mapped, `Invalid Storage hasher: ${text.toString()}`);
  return registry.createType('StorageHasherV5', mapped);
}
/** @internal */


function toV5StorageFunction(registry, storageFn) {
  const {
    documentation,
    fallback,
    modifier,
    name,
    type
  } = storageFn;
  const [newType, index] = type.isPlain ? [type.asPlain, 0] : type.isMap ? [type.asMap, 1] : [registry.createType('DoubleMapTypeV5', {
    hasher: type.asDoubleMap.hasher,
    key1: type.asDoubleMap.key1,
    key2: type.asDoubleMap.key2,
    key2Hasher: toStorageHasher(registry, type.asDoubleMap.key2Hasher),
    value: type.asDoubleMap.value
  }), 2];
  return registry.createType('StorageFunctionMetadataV5', {
    documentation,
    fallback,
    modifier,
    name,
    type: registry.createType('StorageFunctionTypeV5', newType, index)
  });
}
/** @internal */


function toV5(registry, {
  modules
}) {
  return registry.createType('MetadataV5', {
    modules: modules.map(({
      calls,
      events,
      name,
      prefix,
      storage
    }) => registry.createType('ModuleMetadataV5', {
      calls,
      events,
      name,
      prefix,
      storage: storage.isSome ? new _codec.Option(registry, 'Vec<StorageFunctionMetadataV5>', storage.unwrap().map(v => toV5StorageFunction(registry, v))) : undefined
    }))
  });
}