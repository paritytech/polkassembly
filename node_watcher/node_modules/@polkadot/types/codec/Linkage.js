"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkageResult = exports.default = void 0;

var _Option = _interopRequireDefault(require("./Option"));

var _Struct = _interopRequireDefault(require("./Struct"));

var _Tuple = _interopRequireDefault(require("./Tuple"));

var _Vec = _interopRequireDefault(require("./Vec"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const EMPTY = new Uint8Array();
/**
 * @name Linkage
 * @description The wrapper for the result from a LinkedMap
 */

class Linkage extends _Struct.default {
  constructor(registry, Type, value) {
    super(registry, {
      previous: _Option.default.with(Type),
      // eslint-disable-next-line sort-keys
      next: _Option.default.with(Type)
    }, value);
    console.error([...this.entries()]);
  }

  static withKey(Type) {
    return class extends Linkage {
      constructor(registry, value) {
        super(registry, Type, value);
      }

    };
  }

  get previous() {
    return this.get('previous');
  }

  get next() {
    return this.get('next');
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `Linkage<${this.next.toRawType(true)}>`;
  }
  /**
   * @description Custom toU8a which with bare mode does not return the linkage if empty
   */


  toU8a() {
    // As part of a storage query (where these appear), in the case of empty, the values
    // are NOT populated by the node - follow the same logic, leaving it empty
    return this.isEmpty ? EMPTY : super.toU8a();
  }

}
/**
 * @name LinkageResult
 * @description A Linkage keys/Values tuple
 */


exports.default = Linkage;

class LinkageResult extends _Tuple.default {
  constructor(registry, [TypeKey, keys], [TypeValue, values]) {
    super(registry, {
      Keys: _Vec.default.with(TypeKey),
      Values: _Vec.default.with(TypeValue)
    }, [keys, values]);
  }

}

exports.LinkageResult = LinkageResult;