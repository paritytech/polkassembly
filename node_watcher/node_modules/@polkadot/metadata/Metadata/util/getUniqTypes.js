"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUniqTypes;

var _flattenUniq = _interopRequireDefault(require("./flattenUniq"));

var _validateTypes = _interopRequireDefault(require("./validateTypes"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function unwrapCalls(mod) {
  return mod.calls ? mod.calls.unwrapOr([]) // V0
  : mod.module ? mod.module.call.functions : [];
}
/** @internal */


function getCallNames({
  modules
}) {
  return modules.map(mod => unwrapCalls(mod).map(({
    args
  }) => args.map(arg => arg.type.toString())));
}
/** @internal */


function getConstantNames({
  modules
}) {
  return modules.map(({
    constants
  }) => constants ? constants.map(constant => constant.type.toString()) : []);
}
/** @internal */


function unwrapEvents(events) {
  if (!events) {
    return [];
  }

  return events.unwrapOr([]);
}
/** @internal */


function getEventNames({
  modules,
  outerEvent
}) {
  const mapArg = ({
    args
  }) => args.map(arg => arg.toString()); // V0


  if (outerEvent) {
    return outerEvent.events.map(([, events]) => events.map(mapArg));
  } // V1+


  return modules.map(({
    events
  }) => unwrapEvents(events).map(mapArg));
}
/** @internal */


function unwrapStorage(storage) {
  if (!storage) {
    return [];
  }

  const data = storage.unwrapOr([]);
  return Array.isArray(data) ? data : data.items || data.functions;
}
/** @internal */


function getStorageNames({
  modules
}) {
  return modules.map(({
    storage
  }) => unwrapStorage(storage).map(({
    type
  }) => {
    if (type.isDoubleMap && type.asDoubleMap) {
      return [type.asDoubleMap.key1.toString(), type.asDoubleMap.key2.toString(), type.asDoubleMap.value.toString()];
    } else if (type.isMap) {
      return [type.asMap.key.toString(), type.asMap.value.toString()];
    } else {
      return [type.asPlain.toString()];
    }
  }));
}
/** @internal */


function getUniqTypes(registry, meta, throwError) {
  const types = (0, _flattenUniq.default)([getCallNames(meta), getConstantNames(meta), getEventNames(meta), getStorageNames(meta)]);
  (0, _validateTypes.default)(registry, types, throwError);
  return types;
}