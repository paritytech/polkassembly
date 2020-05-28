"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _registry = require("../create/registry");

var _Linkage = _interopRequireDefault(require("./Linkage"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const registry = new _registry.TypeRegistry();
describe('Linkage', () => {
  it('decodes with ValidatorPrefs', () => {
    const LINKA = {
      next: '5GznmRvdi5htUJKnMSWJgJUzSJJXSvWuHRSEdyUbHJZDNcwU',
      previous: null
    };
    const PREFS = {
      commission: '10.00%'
    }; // prefs sanity check

    expect(registry.createType('ValidatorPrefs', '0x0284d717').toHuman()).toEqual(PREFS); // linkage sanity checks

    expect(new _Linkage.default(registry, 'AccountId', '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36').toHuman()).toEqual(LINKA);
    expect(registry.createType('Linkage<AccountId>', '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36').toHuman()).toEqual(LINKA); // actual check

    expect(registry.createType('(ValidatorPrefs, Linkage<AccountId>)', '0x0284d7170001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36').toHuman()).toEqual([PREFS, LINKA]);
  });
});