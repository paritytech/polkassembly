"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@polkadot/util");
var prisma_client_1 = require("../generated/prisma-client");
var filterEvents_1 = require("../util/filterEvents");
var statuses_1 = require("../util/statuses");
var l = util_1.logger('Task: Treasury');
/*
 *  ======= Table (Treasury) ======
 */
var createTreasury = {
    name: 'createTreasury',
    read: function (blockHash, cached, api) { return __awaiter(void 0, void 0, void 0, function () {
        var events, treasuryEvents, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    events = cached.events;
                    treasuryEvents = filterEvents_1.filterEvents(events, 'treasury', statuses_1.treasuryProposalStatus.PROPOSED);
                    results = [];
                    return [4 /*yield*/, Promise.all(treasuryEvents.map(function (_a) {
                            var _b = _a.event, data = _b.data, typeDef = _b.typeDef;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var treasuryRawEvent, treasuryProposalRaw, treasuryProposal, result;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            treasuryRawEvent = data.reduce(function (prev, curr, index) {
                                                var _a;
                                                var type = typeDef[index].type;
                                                return __assign(__assign({}, prev), (_a = {}, _a[type] = curr.toJSON(), _a));
                                            }, {});
                                            if (!treasuryRawEvent.ProposalIndex &&
                                                treasuryRawEvent.ProposalIndex !== 0) {
                                                l.error("Expected ProposalIndex missing in the event: " + treasuryRawEvent.ProposalIndex);
                                                return [2 /*return*/, null];
                                            }
                                            return [4 /*yield*/, api.query.treasury.proposals.at(blockHash, treasuryRawEvent.ProposalIndex)];
                                        case 1:
                                            treasuryProposalRaw = _c.sent();
                                            if (treasuryProposalRaw.isNone) {
                                                l.error('Expected data missing in treasuryProposalRaw');
                                                return [2 /*return*/, null];
                                            }
                                            treasuryProposal = treasuryProposalRaw.unwrap();
                                            result = {
                                                treasuryProposalId: treasuryRawEvent.ProposalIndex,
                                                proposer: treasuryProposal.proposer,
                                                beneficiary: treasuryProposal.beneficiary,
                                                value: treasuryProposal.value,
                                                bond: treasuryProposal.bond,
                                                status: statuses_1.treasuryProposalStatus.PROPOSED,
                                            };
                                            l.log("Nomidot Treasury: " + JSON.stringify(result));
                                            results.push(result);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, results];
            }
        });
    }); },
    write: function (blockNumber, value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(value.map(function (prop) { return __awaiter(void 0, void 0, void 0, function () {
                        var proposer, beneficiary, value, bond, treasuryProposalId, status;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    proposer = prop.proposer, beneficiary = prop.beneficiary, value = prop.value, bond = prop.bond, treasuryProposalId = prop.treasuryProposalId, status = prop.status;
                                    return [4 /*yield*/, prisma_client_1.prisma.createTreasurySpendProposal({
                                            proposer: proposer.toString(),
                                            treasuryProposalId: treasuryProposalId,
                                            beneficiary: beneficiary.toString(),
                                            value: value.toString(),
                                            bond: bond.toString(),
                                            treasuryStatus: {
                                                create: {
                                                    blockNumber: {
                                                        connect: {
                                                            number: blockNumber.toNumber(),
                                                        },
                                                    },
                                                    status: status,
                                                    uniqueStatus: treasuryProposalId + "_" + status,
                                                },
                                            },
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = createTreasury;
