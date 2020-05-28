"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _rxjs = require("rxjs");

var _Api = _interopRequireDefault(require("@polkadot/api/rx/Api"));

var _mock = _interopRequireDefault(require("@polkadot/rpc-provider/mock"));

var _types = require("@polkadot/types");

// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/restrict-template-expressions */
const testFunction = api => {
  return (section, method, inputs) => {
    describe(`derive.${section}.${method}`, () => {
      it('should be a function', () => {
        expect(typeof api.derive[section][method]).toBe('function');
      });
      it('should return an Observable', () => {
        expect(api.derive[section][method](...inputs)).toBeInstanceOf(_rxjs.Observable);
      });
    });
  };
};

describe('derive', () => {
  const registry = new _types.TypeRegistry();
  describe('builtin', () => {
    const api = new _Api.default({
      provider: new _mock.default(registry),
      registry
    });
    beforeAll(done => {
      api.isReady.subscribe(() => done());
    });
    testFunction(api)('accounts', 'idAndIndex', []);
    testFunction(api)('accounts', 'idToIndex', []);
    testFunction(api)('accounts', 'indexes', []);
    testFunction(api)('accounts', 'indexToId', []);
    testFunction(api)('balances', 'all', []);
    testFunction(api)('balances', 'fees', []);
    testFunction(api)('balances', 'votingBalance', []);
    testFunction(api)('balances', 'votingBalances', []);
    testFunction(api)('chain', 'bestNumber', []);
    testFunction(api)('chain', 'bestNumberFinalized', []);
    testFunction(api)('democracy', 'proposals', []);
    testFunction(api)('democracy', 'referendums', []);
    testFunction(api)('elections', 'info', []);
    testFunction(api)('session', 'eraLength', []);
    testFunction(api)('session', 'eraProgress', []);
    testFunction(api)('session', 'sessionProgress', []);
    testFunction(api)('staking', 'account', []);
    testFunction(api)('staking', 'stashes', []);
  });
  describe('custom', () => {
    const api = new _Api.default({
      derives: {
        balances: {
          fees: () => () => (0, _rxjs.from)(['a', 'b'])
        },
        custom: {
          test: () => () => (0, _rxjs.from)([1, 2, 3])
        }
      },
      provider: new _mock.default(registry),
      registry
    });
    beforeAll(done => {
      api.isReady.subscribe(() => done());
    }); // override

    testFunction(api)('balances', 'fees', ['a', 'b']); // new

    testFunction(api)('custom', 'test', [1, 2, 3]); // existing

    testFunction(api)('chain', 'bestNumber', []);
  });
});