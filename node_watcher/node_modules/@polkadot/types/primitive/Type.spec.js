"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _util = require("@polkadot/util");

var _create = require("../create");

var _Text = _interopRequireDefault(require("./Text"));

var _Type = _interopRequireDefault(require("./Type"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Type', () => {
  const registry = new _create.TypeRegistry();
  it('fails to cleanup invalid boxes', () => {
    expect(() => new _Type.default(registry, 'Box<Proposal')).toThrow(/find closing matching/);
  });
  it('cleans up tuples with a single value', () => {
    expect(new _Type.default(registry, '(AccountId)').toString()).toEqual('AccountId');
  });
  it('does not touch tuples with multiple values', () => {
    expect(new _Type.default(registry, '(AccountId, Balance)').toString()).toEqual('(AccountId,Balance)');
  });
  it('handles nested types', () => {
    expect(new _Type.default(registry, 'Box<Vec<AccountId>>').toString()).toEqual('Vec<AccountId>');
  });
  it('handles nested types (embedded)', () => {
    expect(new _Type.default(registry, '(u32, Box<Vec<AccountId>>)').toString()).toEqual('(u32,Vec<AccountId>)');
  });
  it('handles aliasses, multiples per line', () => {
    expect(new _Type.default(registry, '(Vec<u8>, AccountId, Vec<u8>)').toString()).toEqual('(Bytes,AccountId,Bytes)');
  });
  it('removes whitespaces', () => {
    expect(new _Type.default(registry, 'T :: AccountId').toString()).toEqual('AccountId');
  });
  it('changes PairOf<T> -> (T, T)', () => {
    expect(new _Type.default(registry, 'PairOf<T::Balance>').toString()).toEqual('(Balance,Balance)');
  });
  it('changes PairOf<T> (embedded) -> (T, T)', () => {
    expect(new _Type.default(registry, '(Vec<u8>, PairOf<T::Balance>, Vec<AccountId>)').toString()).toEqual('(Bytes,(Balance,Balance),Vec<AccountId>)');
  });
  it('changes () -> ()', () => {
    expect(new _Type.default(registry, '()').toString()).toEqual('()');
  });
  it('has the sanitized', () => {
    expect(new _Type.default(registry, new _Text.default(registry, ' Box<Proposal> ')).toString()).toEqual('Proposal'); // eslint-disable-line
  });
  it('unwraps compact', () => {
    expect(new _Type.default(registry, '<T::Balance as HasCompact>::Type').toString()).toEqual('Compact<Balance>');
  });
  it('handles InherentOfflineReport', () => {
    expect(new _Type.default(registry, '<T::InherentOfflineReport as InherentOfflineReport>::Inherent').toString()).toEqual('InherentOfflineReport');
  });
  it('encodes correctly via toU8a()', () => {
    const type = 'Compact<Balance>';
    expect(new _Text.default(registry, type).toU8a()).toEqual((0, _util.u8aConcat)(new Uint8Array([type.length << 2]), (0, _util.stringToU8a)(type)));
  });
  it('creates a decodable U8a for sanitized types', () => {
    const original = '<T::InherentOfflineReport as InherentOfflineReport>::Inherent';
    const expected = 'InherentOfflineReport';
    const u8a = new _Type.default(registry, original).toU8a();
    const decoded = new _Type.default(registry, u8a);
    expect(decoded.encodedLength).toEqual(original.length + 1); // extra byte for length

    expect(decoded.toString()).toEqual(expected);
  });
});