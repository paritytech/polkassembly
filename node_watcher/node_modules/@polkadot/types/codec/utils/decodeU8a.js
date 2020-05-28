"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeU8a;

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param types - The array of Constructor to decode the U8a against.
 */
function decodeU8a(registry, u8a, _types) {
  const types = Array.isArray(_types) ? _types : Object.values(_types);

  if (!types.length) {
    return [];
  }

  const Type = types[0];
  const value = new Type(registry, u8a);
  return [value].concat(decodeU8a(registry, u8a.subarray(value.encodedLength), types.slice(1)));
}