"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fromMetadata;

var _create = require("@polkadot/types/create");

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function fromMetadata(registry, metadata) {
  return metadata.asLatest.modules.reduce((result, moduleMetadata) => {
    if (moduleMetadata.constants.isEmpty) {
      return result;
    }

    const {
      name
    } = moduleMetadata; // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod

    result[(0, _util.stringCamelCase)(name.toString())] = moduleMetadata.constants.reduce((newModule, meta) => {
      // convert to the natural type as received
      const type = meta.type.toString();
      const codec = (0, _create.createTypeUnsafe)(registry, type, [(0, _util.hexToU8a)(meta.value.toHex())]);
      codec.meta = meta;
      newModule[(0, _util.stringCamelCase)(meta.name.toString())] = codec;
      return newModule;
    }, {});
    return result;
  }, {});
}