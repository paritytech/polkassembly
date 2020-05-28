"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDescriptor;

var _util = require("@polkadot/util");

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function createDescriptor(registry, section, sectionIndex, methodIndex, callMetadata) {
  const callIndex = new Uint8Array([sectionIndex, methodIndex]);
  const expectedArgs = callMetadata.args;
  const funcName = (0, _util.stringCamelCase)(callMetadata.name.toString());

  const extrinsicFn = (...args) => {
    (0, _util.assert)(expectedArgs.length.valueOf() === args.length, `Extrinsic ${section}.${funcName} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);
    return registry.createType('Call', {
      args,
      callIndex
    }, callMetadata);
  };

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = callMetadata;
  extrinsicFn.method = funcName;
  extrinsicFn.section = section;

  extrinsicFn.toJSON = () => callMetadata.toJSON();

  return extrinsicFn;
}