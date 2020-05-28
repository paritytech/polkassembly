"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV6;

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV6(registry, {
  modules
}) {
  return registry.createType('MetadataV6', {
    modules: modules.map(({
      calls,
      events,
      name,
      prefix,
      storage
    }) => registry.createType('ModuleMetadataV6', {
      calls,
      constants: [],
      events,
      name,
      prefix,
      storage
    }))
  });
}