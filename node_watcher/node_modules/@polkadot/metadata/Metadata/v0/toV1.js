"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toV1;

var _codec = require("@polkadot/types/codec");

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function toV1Calls(registry, {
  module: {
    call: {
      functions
    }
  }
}) {
  return functions.length ? new _codec.Option(registry, 'Vec<FunctionMetadataV1>', functions) : new _codec.Option(registry, 'Vec<FunctionMetadataV1>');
}
/** @internal */


function toV1Events(registry, metadataV0, prefix) {
  const events = metadataV0.outerEvent.events.find(event => event[0].eq(prefix));
  return events ? new _codec.Option(registry, 'Vec<EventMetadataV1>', events[1]) : new _codec.Option(registry, 'Vec<EventMetadataV1>');
}
/** @internal */


function toV1Storage(registry, {
  storage
}) {
  var _storage$unwrapOr;

  return new _codec.Option(registry, 'Vec<StorageFunctionMetadataV1>', (_storage$unwrapOr = storage.unwrapOr(undefined)) === null || _storage$unwrapOr === void 0 ? void 0 : _storage$unwrapOr.functions);
}
/** @internal */


function toV1(registry, metadataV0) {
  return registry.createType('MetadataV1', {
    modules: metadataV0.modules.map(mod => {
      // The prefix of this module (capitalized)
      const prefix = mod.storage.isSome ? mod.storage.unwrap().prefix.toString() : (0, _util.stringUpperFirst)(mod.prefix.toString()); // If this module doesn't have storage, we just assume the prefix is the name capitalized

      return registry.createType('ModuleMetadataV1', {
        calls: toV1Calls(registry, mod),
        events: toV1Events(registry, metadataV0, mod.prefix),
        name: mod.prefix,
        // Not capitalized
        prefix,
        // Capitalized
        storage: toV1Storage(registry, mod)
      });
    })
  });
}