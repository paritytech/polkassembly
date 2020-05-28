"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Metadata = _interopRequireDefault(require("@polkadot/metadata/Metadata"));

var _static = _interopRequireDefault(require("@polkadot/metadata/Metadata/static"));

var _create = require("./create");

var exported = _interopRequireWildcard(require("./index.types"));

var definitions = _interopRequireWildcard(require("./interfaces/definitions"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// NOTE This is not a shortcut to implementing types incorrectly. This is here
// specifically for the types that _should_ throw in the constrtuctor, i.e
// `usize` is not allowed (runtime incompat) and `origin` is not passed through
// to any calls. All other types _must_ pass and allow for empty defaults
const UNCONSTRUCTABLE = ['ExtrinsicPayloadUnknown', 'GenericExtrinsicPayloadUnknown', 'ExtrinsicUnknown', 'GenericExtrinsicUnknown', 'DoNotConstruct', 'Origin', 'usize'].map(v => v.toLowerCase());
const registry = new _create.TypeRegistry(); // eslint-disable-next-line no-new

new _Metadata.default(registry, _static.default);

function testTypes(type, typeNames) {
  describe(type, () => {
    describe(`${type}:: default creation`, () => {
      typeNames.forEach(name => {
        it(`creates an empty ${name}`, () => {
          const constructFn = () => (0, _create.createTypeUnsafe)(registry, name);

          if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
            expect(constructFn).toThrow();
          } else {
            expect(constructFn).not.toThrow();
          }
        });
      });
    });
    describe(`${type}:: default creation (empty bytes)`, () => {
      typeNames.forEach(name => {
        it(`creates an empty ${name} (from empty bytes)`, () => {
          const constructFn = () => (0, _create.createTypeUnsafe)(registry, name, [(0, _create.createTypeUnsafe)(registry, 'Bytes')]);

          if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
            expect(constructFn).toThrow();
          } else {
            expect(constructFn).not.toThrow();
          }
        });
      });
    });
  });
}

describe('type creation', () => {
  testTypes('exported', Object.keys(exported));
  Object.entries(definitions).forEach(([name, {
    types
  }]) => testTypes(`${name} (injected)`, Object.keys(types)));
});