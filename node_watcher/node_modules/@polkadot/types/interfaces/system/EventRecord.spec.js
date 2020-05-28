"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Metadata = _interopRequireDefault(require("@polkadot/metadata/Metadata"));

var _static = _interopRequireDefault(require("@polkadot/metadata/Metadata/v1/static"));

var _static2 = _interopRequireDefault(require("@polkadot/metadata/Metadata/static"));

var _create = require("../../create");

var _EventRecord = _interopRequireDefault(require("../../json/EventRecord.001.json"));

var _EventRecord2 = _interopRequireDefault(require("../../json/EventRecord.003.json"));

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
describe('EventRecord', () => {
  const registry = new _create.TypeRegistry();
  describe('EventRecordTo76', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-new
      new _Metadata.default(registry, _static.default);
    });
    it('decodes correctly', () => {
      const records = registry.createType('Vec<EventRecord>', _EventRecord.default.params.result.changes[0][1]);
      const er = records[0];
      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
  });
  describe('EventRecord (current)', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-new
      new _Metadata.default(registry, _static2.default);
    });
    it('decodes older EventRecord correctly', () => {
      const records = registry.createType('Vec<EventRecord>', _EventRecord.default.params.result.changes[0][1], true);
      const er = records[0];
      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
    it('decodes EventRecord with topics correctly', () => {
      const hex = _EventRecord2.default.params.result.changes[0][1];
      const records = registry.createType('Vec<EventRecord>', hex, true);
      const er = records[0];
      expect(er.phase.type).toEqual('ApplyExtrinsic'); // additional payment info, weight u64 (vs u32)

      expect(records.toHex()).toEqual(`${hex}00000000000000000000`);
    });
  });
});