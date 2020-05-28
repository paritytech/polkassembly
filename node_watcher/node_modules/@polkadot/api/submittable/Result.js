"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class SubmittableResult {
  constructor({
    events,
    status
  }) {
    this.events = void 0;
    this.status = void 0;
    this.events = events || [];
    this.status = status;
  }

  get isCompleted() {
    return this.isError || this.status.isInBlock || this.status.isFinalized;
  }

  get isError() {
    return this.status.isDropped || this.status.isFinalityTimeout || this.status.isInvalid || this.status.isUsurped;
  }

  get isFinalized() {
    return this.status.isFinalized;
  }

  get isInBlock() {
    return this.status.isInBlock;
  }

  get isWarning() {
    return this.status.isRetracted;
  }
  /**
   * @description Filters EventRecords for the specified method & section (there could be multiple)
   */


  filterRecords(section, method) {
    return this.events.filter(({
      event
    }) => event.section === section && event.method === method);
  }
  /**
   * @description Finds an EventRecord for the specified method & section
   */


  findRecord(section, method) {
    return this.events.find(({
      event
    }) => event.section === section && event.method === method);
  }
  /**
   * @description Creates a human representation of the output
   */


  toHuman(isExtended) {
    return {
      events: this.events.map(event => event.toHuman(isExtended)),
      status: this.status.toHuman(isExtended)
    };
  }

}

exports.default = SubmittableResult;