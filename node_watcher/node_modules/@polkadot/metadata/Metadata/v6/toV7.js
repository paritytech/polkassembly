"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV7;

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV7(registry, {
  modules
}) {
  return registry.createType('MetadataV7', {
    modules: modules.map(({
      calls,
      constants,
      events,
      name,
      prefix,
      storage
    }) => registry.createType('ModuleMetadataV7', {
      calls,
      constants,
      events,
      name,
      storage: storage.isSome ? registry.createType('StorageMetadataV7', {
        items: storage.unwrap(),
        prefix
      }) : null
    }))
  });
}