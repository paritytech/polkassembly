"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _staticSubstrate = _interopRequireDefault(require("./static-substrate.json"));

var _static = _interopRequireDefault(require("./static"));

var _testUtil = require("../util/testUtil");

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('MetadataV8 (substrate)', () => {
  const registry = new _types.TypeRegistry();
  (0, _testUtil.decodeLatestSubstrate)(registry, 8, _static.default, _staticSubstrate.default);
  (0, _testUtil.toLatest)(registry, 8, _static.default);
  (0, _testUtil.defaultValues)(registry, _static.default);
});