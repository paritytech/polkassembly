"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createBlockNumber_1 = __importDefault(require("./createBlockNumber"));
var createCouncil_1 = __importDefault(require("./createCouncil"));
var createEra_1 = __importDefault(require("./createEra"));
var createMotion_1 = __importDefault(require("./createMotion"));
var createMotionStatus_1 = __importDefault(require("./createMotionStatus"));
var createNominationAndValidators_1 = __importDefault(require("./createNominationAndValidators"));
var createOfflineValidator_1 = __importDefault(require("./createOfflineValidator"));
var createPreimage_1 = __importDefault(require("./createPreimage"));
var createProposal_1 = __importDefault(require("./createProposal"));
var createProposalStatus_1 = __importDefault(require("./createProposalStatus"));
var createReferendum_1 = __importDefault(require("./createReferendum"));
var createReferendumStatus_1 = __importDefault(require("./createReferendumStatus"));
var createReward_1 = __importDefault(require("./createReward"));
var createSession_1 = __importDefault(require("./createSession"));
var createSlashing_1 = __importDefault(require("./createSlashing"));
var createStake_1 = __importDefault(require("./createStake"));
var createTotalIssuance_1 = __importDefault(require("./createTotalIssuance"));
var createTreasury_1 = __importDefault(require("./createTreasury"));
// N.B. Order of tasks matters here
exports.nomidotTasks = [
    createBlockNumber_1.default,
    createCouncil_1.default,
    createSession_1.default,
    createStake_1.default,
    createOfflineValidator_1.default,
    createReward_1.default,
    createEra_1.default,
    createSlashing_1.default,
    createTotalIssuance_1.default,
    createNominationAndValidators_1.default,
    createPreimage_1.default,
    createProposal_1.default,
    createProposalStatus_1.default,
    createReferendum_1.default,
    createReferendumStatus_1.default,
    createMotion_1.default,
    createMotionStatus_1.default,
    createTreasury_1.default,
];
