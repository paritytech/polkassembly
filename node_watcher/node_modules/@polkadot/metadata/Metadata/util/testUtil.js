"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeLatestSubstrate = decodeLatestSubstrate;
exports.toLatest = toLatest;
exports.defaultValues = defaultValues;

var _StorageKey = require("@polkadot/types/primitive/StorageKey");

var _getUniqTypes = _interopRequireDefault(require("./getUniqTypes"));

var _Metadata = _interopRequireDefault(require("../Metadata"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/** @internal */
function decodeLatestSubstrate(registry, version, rpcData, staticSubstrate) {
  it('decodes latest substrate properly', () => {
    const metadata = new _Metadata.default(registry, rpcData);

    try {
      expect(metadata.version).toBe(version);
      expect(metadata[`asV${version}`].modules.length).not.toBe(0);
      expect(metadata.toJSON()).toEqual(staticSubstrate);
    } catch (error) {
      console.error(JSON.stringify(metadata.toJSON()));
      throw error;
    }
  });
}
/** @internal */


function toLatest(registry, version, rpcData, withThrow = true) {
  it(`converts v${version} to latest`, () => {
    const metadata = new _Metadata.default(registry, rpcData)[`asV${version}`];
    const metadataLatest = new _Metadata.default(registry, rpcData).asLatest;
    expect((0, _getUniqTypes.default)(registry, metadata, withThrow)).toEqual((0, _getUniqTypes.default)(registry, metadataLatest, withThrow));
  });
}
/** @internal */


function defaultValues(registry, rpcData, withThrow = true) {
  describe('storage with default values', () => {
    const metadata = new _Metadata.default(registry, rpcData);
    metadata.asLatest.modules.filter(({
      storage
    }) => storage.isSome).forEach(mod => {
      mod.storage.unwrap().items.forEach(({
        fallback,
        name,
        type
      }) => {
        const inner = (0, _StorageKey.unwrapStorageType)(type);
        const location = `${mod.name.toString()}.${name.toString()}: ${inner}`;
        it(`creates default types for ${location}`, () => {
          expect(() => {
            try {
              registry.createType(inner, fallback);
            } catch (error) {
              const message = `${location}:: ${error.message}`;

              if (withThrow) {
                throw new Error(message);
              } else {
                console.warn(message);
              }
            }
          }).not.toThrow();
        });
      });
    });
  });
}