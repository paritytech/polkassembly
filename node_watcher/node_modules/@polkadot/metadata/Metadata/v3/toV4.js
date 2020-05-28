"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV4;

var _codec = require("@polkadot/types/codec");

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV4StorageFunction(registry, storageFn) {
  const {
    documentation,
    fallback,
    modifier,
    name,
    type
  } = storageFn; // Convert the old type to the new type: there is one new field
  // called `hasher`, which we initialize to xxHash (the default in
  // v3).

  const [newType, index] = type.isPlain ? [type.asPlain, 0] : type.isMap ? [registry.createType('MapTypeV4', {
    hasher: registry.createType('StorageHasherV4', 'Twox128'),
    key: type.asMap.key,
    linked: type.asMap.linked,
    value: type.asMap.value
  }), 1] : [registry.createType('DoubleMapTypeV4', {
    hasher: registry.createType('StorageHasherV4', 'Twox128'),
    key1: type.asDoubleMap.key1,
    key2: type.asDoubleMap.key2,
    key2Hasher: type.asDoubleMap.key2Hasher,
    value: type.asDoubleMap.value
  }), 2];
  return registry.createType('StorageFunctionMetadataV4', {
    documentation,
    fallback,
    modifier,
    name,
    type: registry.createType('StorageFunctionTypeV4', newType, index)
  });
}
/** @internal */


function toV4(registry, {
  modules
}) {
  return registry.createType('MetadataV4', {
    modules: modules.map(({
      calls,
      events,
      name,
      prefix,
      storage
    }) => registry.createType('ModuleMetadataV4', {
      calls,
      events,
      name,
      prefix,
      storage: storage.isSome ? new _codec.Option(registry, 'Vec<StorageFunctionMetadataV4>', storage.unwrap().map(v => toV4StorageFunction(registry, v))) : undefined
    }))
  });
}