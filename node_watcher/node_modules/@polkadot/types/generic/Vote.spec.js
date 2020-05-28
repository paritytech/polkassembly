"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _create = require("../create");

var _Vote = _interopRequireDefault(require("./Vote"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Vote', () => {
  const registry = new _create.TypeRegistry();
  describe('construction', () => {
    it('constructs via boolean true', () => {
      expect(new _Vote.default(registry, true).toU8a()).toEqual(new Uint8Array([128]));
      expect(new _Vote.default(registry, true).isAye).toBe(true);
      expect(new _Vote.default(registry, true).isNay).toBe(false);
    });
    it('constructs via boolean false', () => {
      expect(new _Vote.default(registry, false).toU8a()).toEqual(new Uint8Array([0]));
      expect(new _Vote.default(registry, false).isNay).toBe(true);
      expect(new _Vote.default(registry, false).isAye).toBe(false);
    });
    it('constructs via undefined', () => {
      expect(new _Vote.default(registry).isNay).toBe(true);
    });
    it('has isYay for positive', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(new _Vote.default(registry, true).isAye).toBe(true);
    });
    it('has isNay for negative', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(new _Vote.default(registry, false).isNay).toBe(true);
    });
    it('is Aye for negative numbers', () => {
      expect(new _Vote.default(registry, -128).isAye).toBe(true);
    });
    it('is Nay for positive numbers', () => {
      expect(new _Vote.default(registry, 127).isNay).toBe(true);
    });
    it('is Nay for 0', () => {
      expect(new _Vote.default(registry, 0).isNay).toBe(true);
    });
    it('constructs via empty', () => {
      expect(new _Vote.default(registry).isNay).toBe(true);
    });
    it('constructs via Uint8Array (empty)', () => {
      expect(new _Vote.default(registry, new Uint8Array()).isNay).toBe(true);
    });
    it('constructs via Uint8Array (nay)', () => {
      expect(new _Vote.default(registry, new Uint8Array([1])).isNay).toBe(true);
    });
    it('constructs via Uint8Array (aye)', () => {
      const test = new _Vote.default(registry, new Uint8Array([0b10000010]));
      expect(test.isNay).toBe(false);
      expect(test.conviction.toString()).toEqual('Locked2x');
    });
  });
  describe('Vote with conviction', () => {
    it('constructs Vote with raw boolean', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 'Locked1x'
      }).toU8a()).toEqual(new Uint8Array([0b10000001]));
    });
    it('constructs with Vote aye is false, conviction is None', () => {
      expect(new _Vote.default(registry, {
        aye: false,
        conviction: 'None'
      }).toU8a()).toEqual(new Uint8Array([0b00000000]));
    });
    it('constructs with Vote aye is true, conviction is Locked4x', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 'Locked4x'
      }).toU8a()).toEqual(new Uint8Array([0b10000100]));
    });
  });
  describe('getters', () => {
    it('Conviction getter works', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 'Locked2x'
      }).conviction.toString()).toEqual('Locked2x');
    });
    it('Conviction getter works with raw boolean and string conviction', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 'Locked2x'
      }).conviction.toString()).toEqual('Locked2x');
    });
    it('Conviction getter works with raw boolean and conviction index', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 2
      }).conviction.toString()).toEqual('Locked2x');
    });
    it('Conviction getter works with raw boolean and no conviction', () => {
      const test = new _Vote.default(registry, {
        aye: true
      });
      expect(test.isAye).toEqual(true);
      expect(test.conviction.toString()).toEqual('None');
    });
    it('isAye getter works', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 'None'
      }).isAye).toEqual(true);
    });
    it('isNay getter works', () => {
      expect(new _Vote.default(registry, {
        aye: true,
        conviction: 'None'
      }).isNay).toEqual(false);
    });
  });
  describe('utils', () => {
    it('has a sane toRawType', () => {
      expect(new _Vote.default(registry).toRawType()).toEqual('Vote');
    });
  });
});