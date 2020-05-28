"use strict";

var _ = require(".");

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('typeSplit', () => {
  it('splits simple types into an array', () => {
    expect((0, _.typeSplit)('Text, u32, u64')).toEqual(['Text', 'u32', 'u64']);
  });
  it('splits nested combinations', () => {
    expect((0, _.typeSplit)('Text, (u32), Vec<u64>')).toEqual(['Text', '(u32)', 'Vec<u64>']);
  });
  it('keeps nested tuples together', () => {
    expect((0, _.typeSplit)('Text, (u32, u128), Vec<u64>')).toEqual(['Text', '(u32, u128)', 'Vec<u64>']);
  });
  it('keeps nested vector tuples together', () => {
    expect((0, _.typeSplit)('Text, (u32, u128), Vec<(u64, u32)>')).toEqual(['Text', '(u32, u128)', 'Vec<(u64, u32)>']);
  });
  it('allows for deep nesting', () => {
    expect((0, _.typeSplit)('Text, (u32, (u128, u8)), Vec<(u64, (u32, u32))>')).toEqual(['Text', '(u32, (u128, u8))', 'Vec<(u64, (u32, u32))>']);
  });
  it('checks for unclosed vec', () => {
    expect(() => (0, _.typeSplit)('Text, Vec<u64')).toThrow(/Invalid defintion/);
  });
  it('checks for unclosed tuple', () => {
    expect(() => (0, _.typeSplit)('Text, (u64, u32')).toThrow(/Invalid defintion/);
  });
});