"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _static = _interopRequireDefault(require("./static"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Metadata', () => {
  it('allows creation from hex with JSON equivalence', () => {
    const test = new _Metadata.default(new _types.TypeRegistry(), _static.default);
    expect(new _Metadata.default(new _types.TypeRegistry(), test.toHex()).toJSON()).toEqual(test.toJSON());
  });
});