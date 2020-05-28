"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Null = _interopRequireDefault(require("./Null"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
class DoNotConstruct extends _Null.default {
  constructor(registry, typeName) {
    super(registry);
    throw new Error(`Cannot construct unknown type ${typeName}`);
  }

  static with(typeName = 'DoNotConstruct') {
    return class extends DoNotConstruct {
      constructor(registry) {
        super(registry, typeName);
      }

    };
  }

}

exports.default = DoNotConstruct;