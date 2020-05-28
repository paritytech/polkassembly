"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV8;

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV8(registry, {
  modules
}) {
  return registry.createType('MetadataV8', {
    modules: modules.map(({
      calls,
      constants,
      events,
      name,
      storage
    }) => registry.createType('ModuleMetadataV8', {
      calls,
      constants,
      errors: [],
      events,
      name,
      storage
    }))
  });
}