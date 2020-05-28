"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _types = require("@polkadot/types");

var _util = require("@polkadot/util");

var _createFunction = _interopRequireDefault(require("./createFunction"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('createFunction', () => {
  const registry = new _types.TypeRegistry();
  it('should create timestamp.now correctly', () => {
    expect((0, _createFunction.default)(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {}
      },
      method: 'Now',
      prefix: 'Timestamp',
      section: 'timestamp'
    }, {
      metaVersion: 8
    })()).toEqual(Uint8Array.from([64, 14, 73, 68, 207, 217, 141, 111, 76, 195, 116, 209, 111, 90, 78, 63, 156]) // Length-prefixed
    );
  });
  it('allows overrides on key (keeping name)', () => {
    expect((0, _createFunction.default)(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {}
      },
      method: 'authorityCount',
      prefix: 'Substrate',
      section: 'substrate'
    }, {
      key: ':auth:len',
      metaVersion: 8,
      skipHashing: true
    }).method).toEqual('authorityCount');
  });
  it('allows overrides on key (unhashed)', () => {
    const key = ':auth:len';
    expect((0, _createFunction.default)(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {}
      },
      method: 'authorityCount',
      prefix: 'Substrate',
      section: 'substrate'
    }, {
      key,
      metaVersion: 8,
      skipHashing: true
    })()).toEqual((0, _util.u8aConcat)(Uint8Array.from([key.length << 2]), (0, _util.stringToU8a)(':auth:len')));
  });
  describe('the created double map function', () => {
    let storageFn;
    beforeAll(() => {
      storageFn = (0, _createFunction.default)(registry, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        meta: {
          name: 'metaName',
          type: {
            asDoubleMap: {
              hasher: registry.createType('StorageHasher', 'Blake2_256'),
              key1: new _types.Text(registry, 'AccountId'),
              key2: new _types.Text(registry, 'AccountId'),
              key2Hasher: registry.createType('StorageHasher', 'Twox128'),
              value: new _types.Text(registry, 'Balance')
            },
            isDoubleMap: true
          }
        },
        method: 'FreeBalance',
        prefix: 'GenericAsset',
        section: 'genericAsset'
      }, {
        metaVersion: 8
      });
    });
    it('should return correct key', () => {
      const result = storageFn(['5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP', '5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP']);
      expect((0, _util.u8aToHex)(result)).toEqual('0xc000fa40e72d7173e69ee54b980345ea01cb81e64258502e0247af4303dee91ec0aec2ecd3a60ab080cff7b52a8f6d543b');
    });
    it('needs two arguments', () => {
      expect(() => storageFn(['5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP'])).toThrow(/requires two arguments/);
    });
    it('accepts an optional parameter for key construction', () => {
      const iterKey = storageFn.iterKey;
      (0, _util.assert)(iterKey, 'storageFn.iterKey is undefined');
      const result = iterKey('5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP');
      expect((0, _util.u8aToHex)(result)).toEqual('0x223416315e3dddca3b5a47fd0ac8e4916482b9ade7bc6657aaca787ba1add3b4c4303117deb55aad9858c8a873273280f78d172b398d5e77e43a2db5e42163e9');
      expect((0, _util.u8aToHex)(iterKey())).toEqual('0x223416315e3dddca3b5a47fd0ac8e4916482b9ade7bc6657aaca787ba1add3b4');
    });
  });
  it('allows creates double map function with a Null type key', () => {
    const storageFn = (0, _createFunction.default)(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asDoubleMap: {
            hasher: registry.createType('StorageHasher', 'Blake2_256'),
            key1: new _types.Text(registry, 'Null'),
            key2: new _types.Text(registry, 'Hash'),
            key2Hasher: registry.createType('StorageHasher', 'Blake2_256'),
            value: new _types.Text(registry, 'Vec<(BlockNumber,EventIndex)>')
          },
          isDoubleMap: true
        }
      },
      method: 'EventTopics',
      prefix: 'System',
      section: 'system'
    }, {
      metaVersion: 8
    }); // the value of the Null type key does not effect the result

    expect((0, _util.u8aToHex)(storageFn(['any', [1, 2, 3]]))).toEqual((0, _util.u8aToHex)(storageFn([[1, 2, 3], [1, 2, 3]]))); // the value of the not Null type key does effect the result

    expect((0, _util.u8aToHex)(storageFn(['any', [1, 2, 3]]))).not.toEqual((0, _util.u8aToHex)(storageFn(['any', [1, 2, 3, 4]])));
  });
  it('allows creating of known DoubleMap keys (with Bytes)', () => {
    const storageFn = (0, _createFunction.default)(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asDoubleMap: {
            hasher: registry.createType('StorageHasher', 'Twox64Concat'),
            key1: new _types.Text(registry, 'Bytes'),
            key2: new _types.Text(registry, 'AccountId'),
            key2Hasher: registry.createType('StorageHasher', 'Blake2_256'),
            value: new _types.Text(registry, 'SessionKeys5')
          },
          isDoubleMap: true
        }
      },
      method: 'NextKeys',
      prefix: 'Session',
      section: 'session'
    }, {
      metaVersion: 9
    });
    expect((0, _util.u8aToHex)(storageFn([// hex, without length prefix
    '0x3a73657373696f6e3a6b657973', // address
    'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4']))).toEqual('0x' + '5901' + // length
    'cec5070d609dd3497f72bde07fc96ba0' + // twox 128
    '4c014e6bf8b8c2c011e7290b85696bb3' + // twox 128
    '9fe6329cc0b39e09' + // twox 64
    '343a73657373696f6e3a6b657973' + // twox 64 (concat, with length)
    '5eb36b60f0fc4b9177116eba3e5cd57fea6289a57f5f5b9ffeb0475c66e7a521' // blake2
    );
  });
});