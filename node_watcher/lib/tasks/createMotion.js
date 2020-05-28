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
var types_1 = require("@polkadot/types");
var util_1 = require("@polkadot/util");
var prisma_client_1 = require("../generated/prisma-client");
var filterEvents_1 = require("../util/filterEvents");
var statuses_1 = require("../util/statuses");
var l = util_1.logger('Task: Motions');
/*
 *  ======= Table (Motion) ======
 */
var createMotion = {
    name: 'createMotion',
    read: function (blockHash, cached, api) { return __awaiter(void 0, void 0, void 0, function () {
        var events, motionEvents, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    events = cached.events;
                    motionEvents = filterEvents_1.filterEvents(events, 'council', statuses_1.motionStatus.PROPOSED);
                    results = [];
                    return [4 /*yield*/, Promise.all(motionEvents.map(function (_a) {
                            var _b = _a.event, data = _b.data, typeDef = _b.typeDef;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var motionRawEvent, motionProposalRaw, motionProposal, proposal, _c, meta, method, section, params, values, preimageHash, motionProposalArguments, result;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            motionRawEvent = data.reduce(function (prev, curr, index) {
                                                var _a;
                                                var type = typeDef[index].type;
                                                return __assign(__assign({}, prev), (_a = {}, _a[type] = curr.toJSON(), _a));
                                            }, {});
                                            if (!motionRawEvent.ProposalIndex &&
                                                motionRawEvent.ProposalIndex !== 0) {
                                                l.error("Expected ProposalIndex missing on the event: " + motionRawEvent.ProposalIndex);
                                                return [2 /*return*/];
                                            }
                                            if (!motionRawEvent.AccountId) {
                                                l.error("Expected AccountId missing on the event: " + motionRawEvent.AccountId);
                                                return [2 /*return*/];
                                            }
                                            if (!motionRawEvent.Hash) {
                                                l.error("Expected Hash missing on the event: " + motionRawEvent.Hash);
                                                return [2 /*return*/];
                                            }
                                            if (!motionRawEvent.MemberCount) {
                                                l.error("Expected MemberCount missing on the event: " + motionRawEvent.MemberCount);
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, api.query.council.proposalOf.at(blockHash, motionRawEvent.Hash)];
                                        case 1:
                                            motionProposalRaw = _d.sent();
                                            motionProposal = motionProposalRaw.unwrapOr(null);
                                            if (!motionProposal) {
                                                l.log("No motionProposal found for the hash " + motionRawEvent.Hash);
                                                return [2 /*return*/];
                                            }
                                            proposal = api.createType('Proposal', motionProposal);
                                            _c = api.registry.findMetaCall(proposal.callIndex), meta = _c.meta, method = _c.method, section = _c.section;
                                            params = types_1.GenericCall.filterOrigin(proposal.meta).map(function (_a) {
                                                var name = _a.name;
                                                return name.toString();
                                            });
                                            values = proposal.args;
                                            preimageHash = null;
                                            motionProposalArguments = [];
                                            proposal.args &&
                                                params &&
                                                params.forEach(function (name, index) {
                                                    motionProposalArguments.push({
                                                        name: name,
                                                        value: values[index].toString(),
                                                    });
                                                    if (name === 'proposal_hash') {
                                                        preimageHash = values[index].toString();
                                                    }
                                                });
                                            result = {
                                                author: motionRawEvent.AccountId,
                                                memberCount: motionRawEvent.MemberCount,
                                                metaDescription: meta.documentation.toString(),
                                                method: method,
                                                motionProposalHash: motionRawEvent.Hash,
                                                motionProposalId: motionRawEvent.ProposalIndex,
                                                motionProposalArguments: motionProposalArguments,
                                                preimageHash: preimageHash,
                                                section: section,
                                                status: statuses_1.motionStatus.PROPOSED,
                                            };
                                            l.log("Nomidot Motion: " + JSON.stringify(result));
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
                        var author, memberCount, metaDescription, method, mPA, motionProposalHash, motionProposalId, preimageHash, section, status, preimages, _a, notedPreimage, treasurySpendProposals, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    author = prop.author, memberCount = prop.memberCount, metaDescription = prop.metaDescription, method = prop.method, mPA = prop.motionProposalArguments, motionProposalHash = prop.motionProposalHash, motionProposalId = prop.motionProposalId, preimageHash = prop.preimageHash, section = prop.section, status = prop.status;
                                    if (!preimageHash) return [3 /*break*/, 2];
                                    return [4 /*yield*/, prisma_client_1.prisma.preimages({
                                            where: { hash: preimageHash.toString() },
                                        })];
                                case 1:
                                    _a = _c.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = null;
                                    _c.label = 3;
                                case 3:
                                    preimages = _a;
                                    notedPreimage = (preimages === null || preimages === void 0 ? void 0 : preimages.length) ? preimages.filter(function (preimage) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, prisma_client_1.prisma.preimageStatuses({
                                                        where: {
                                                            AND: [{ id: preimage.id }, { status: statuses_1.preimageStatus.NOTED }],
                                                        },
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })[0]
                                        : null;
                                    if (!(section === 'treasury' &&
                                        mPA.length > 0 &&
                                        mPA[0].name === 'proposal_id')) return [3 /*break*/, 5];
                                    return [4 /*yield*/, prisma_client_1.prisma.treasurySpendProposals({
                                            where: { treasuryProposalId: parseInt(mPA[0].value) },
                                        })];
                                case 4:
                                    _b = _c.sent();
                                    return [3 /*break*/, 6];
                                case 5:
                                    _b = [];
                                    _c.label = 6;
                                case 6:
                                    treasurySpendProposals = _b;
                                    return [4 /*yield*/, prisma_client_1.prisma.createMotion({
                                            author: author.toString(),
                                            memberCount: memberCount,
                                            metaDescription: metaDescription,
                                            method: method,
                                            motionProposalArguments: {
                                                create: mPA,
                                            },
                                            motionProposalHash: motionProposalHash.toString(),
                                            motionProposalId: motionProposalId,
                                            preimage: notedPreimage
                                                ? {
                                                    connect: {
                                                        id: notedPreimage.id,
                                                    },
                                                }
                                                : null,
                                            preimageHash: preimageHash,
                                            treasurySpendProposal: (treasurySpendProposals === null || treasurySpendProposals === void 0 ? void 0 : treasurySpendProposals.length) > 0
                                                ? {
                                                    connect: {
                                                        id: treasurySpendProposals[0].id,
                                                    },
                                                }
                                                : null,
                                            section: section,
                                            motionStatus: {
                                                create: {
                                                    blockNumber: {
                                                        connect: {
                                                            number: blockNumber.toNumber(),
                                                        },
                                                    },
                                                    status: status,
                                                    uniqueStatus: motionProposalId + "_" + status,
                                                },
                                            },
                                        })];
                                case 7:
                                    _c.sent();
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
exports.default = createMotion;
