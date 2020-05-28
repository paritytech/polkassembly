"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapToTypeMap;

var _typeToConstructor = _interopRequireDefault(require("./typeToConstructor"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
 */
function mapToTypeMap(registry, input) {
  return Object.entries(input).reduce((output, [key, type]) => {
    output[key] = (0, _typeToConstructor.default)(registry, type);
    return output;
  }, {});
}