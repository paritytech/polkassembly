"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Text = _interopRequireDefault(require("../primitive/Text"));

var _U = _interopRequireDefault(require("../primitive/U32"));

var _Struct = _interopRequireDefault(require("./Struct"));

var _HashMap = _interopRequireDefault(require("./HashMap"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _create.TypeRegistry();
describe('HashMap', () => {
  it('generates sane toRawTypes', () => {
    expect(new (_HashMap.default.with(_Text.default, _U.default))(registry).toRawType()).toBe('HashMap<Text,u32>');
    expect(new (_HashMap.default.with(_Text.default, _Text.default))(registry).toRawType()).toBe('HashMap<Text,Text>');
    expect(new (_HashMap.default.with(_Text.default, _Struct.default.with({
      a: _U.default,
      b: _Text.default
    })))(registry).toRawType()).toBe('HashMap<Text,{"a":"u32","b":"Text"}>');
  });
});