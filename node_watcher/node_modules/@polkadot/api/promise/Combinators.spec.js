"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Combinator = _interopRequireDefault(require("./Combinator"));

// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('Combinator', () => {
  let fns = []; // eslint-disable-next-line @typescript-eslint/require-await

  const storeFn = async cb => {
    fns.push(cb);
    return () => undefined;
  };

  beforeEach(() => {
    fns = [];
  });
  it('it triggers on all values', done => {
    let count = 0;
    const combinator = new _Combinator.default([storeFn], value => {
      expect(value[0]).toEqual(`test${count}`);
      count++;

      if (count === 3) {
        done();
      }
    });
    fns[0]('test0');
    fns[0]('test1');
    fns[0]('test2');
    expect(combinator).toBeDefined();
  });
  it('combines values from 2 sources, firing when it has all results', done => {
    const combinator = new _Combinator.default([storeFn, storeFn], value => {
      expect(value).toEqual(['test0', 'test1']);
      done();
    });
    fns[0]('test0');
    fns[1]('test1');
    expect(combinator).toBeDefined();
  });
  it('combines values from 2 sources, allowing multiple updates', done => {
    let count = 0;
    const combinator = new _Combinator.default([storeFn, storeFn], value => {
      expect(value).toEqual(count === 0 ? ['test0', 'test1'] : ['test2', 'test1']);
      count++;

      if (count === 2) {
        done();
      }
    });
    fns[0]('test0');
    fns[1]('test1');
    fns[0]('test2');
    expect(combinator).toBeDefined();
  });
  it('unsubscribes as required', done => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const mocker = async () => done;

    const combinator = new _Combinator.default([mocker, // eslint-disable-next-line @typescript-eslint/require-await
    async () => () => undefined // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ], value => {// ignore
    });
    combinator.unsubscribe();
  });
});