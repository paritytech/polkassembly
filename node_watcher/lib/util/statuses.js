"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.preimageStatus = {
    INVALID: 'PreimageUsed',
    MISSING: 'PreimageMissing',
    NOTED: 'PreimageNoted',
    REAPED: 'PreimageReaped',
    USED: 'PreimageUsed',
};
exports.proposalStatus = {
    PROPOSED: 'Proposed',
    TABLED: 'Tabled',
};
exports.referendumStatus = {
    CANCELLED: 'Cancelled',
    EXECUTED: 'Executed',
    NOTPASSED: 'NotPassed',
    PASSED: 'Passed',
    STARTED: 'Started',
};
exports.motionStatus = {
    EXECUTED: 'Executed',
    APPROVED: 'Approved',
    DISAPPROVED: 'Disapproved',
    PROPOSED: 'Proposed',
    VOTED: 'Voted',
};
exports.treasuryProposalStatus = {
    PROPOSED: 'Proposed',
    TABLED: 'Awarded',
    REJECTED: 'Rejected',
};
