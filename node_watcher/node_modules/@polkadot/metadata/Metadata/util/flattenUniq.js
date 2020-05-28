"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenUniq;

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function flattenUniq(list) {
  const flat = list.reduce((result, entry) => {
    return result.concat(Array.isArray(entry) ? flattenUniq(entry) : entry);
  }, []);
  return [...new Set(flat)].filter(value => value).sort();
}