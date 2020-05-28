"use strict";

// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('http/polyfill', () => {
  let origFetch;
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    origFetch = global.fetch;
  });
  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    global.fetch = origFetch;
  });
  it('polyfills with no exceptions (without fetch)', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    global.fetch = undefined;

    require('./polyfill');

    expect(global.fetch).toBeDefined();
  });
  it('polyfills with no exceptions (with fetch)', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    global.fetch = () => true;

    require('./polyfill');

    expect(global.fetch).toBeDefined();
  });
});