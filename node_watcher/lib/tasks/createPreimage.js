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
var l = util_1.logger('Task: Preimage');
/*
 *  ======= Table (Preimage) ======
 */
var createPreimage = {
    name: 'createPreimage',
    read: function (blockHash, cached, api) { return __awaiter(void 0, void 0, void 0, function () {
        var events, preimageEvents, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    events = cached.events;
                    preimageEvents = filterEvents_1.filterEvents(events, 'democracy', statuses_1.preimageStatus.NOTED);
                    results = [];
                    return [4 /*yield*/, Promise.all(preimageEvents.map(function (_a) {
                            var event = _a.event;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var types, preimageArgumentsRaw, preimageArguments, preimageRaw, preimage, proposal, _b, meta, method, section, params, values, preImageArguments, result;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            types = event.typeDef;
                                            preimageArgumentsRaw = event.data.reduce(function (prev, curr, index) {
                                                var _a;
                                                var type = types[index].type;
                                                return __assign(__assign({}, prev), (_a = {}, _a[type] = curr.toString(), _a));
                                            }, {});
                                            if (!preimageArgumentsRaw.Hash ||
                                                !preimageArgumentsRaw.Balance ||
                                                !preimageArgumentsRaw.AccountId) {
                                                l.error("At least one of preimageArgumentsRaw: Hash, Balance or AccountId missing: " + preimageArgumentsRaw.Hash + ", " + preimageArgumentsRaw.Balance + ", " + preimageArgumentsRaw.AccountId);
                                                return [2 /*return*/, null];
                                            }
                                            preimageArguments = {
                                                hash: preimageArgumentsRaw.Hash,
                                                depositAmount: preimageArgumentsRaw.Balance,
                                                author: preimageArgumentsRaw.AccountId,
                                            };
                                            return [4 /*yield*/, api.query.democracy.preimages.at(blockHash, preimageArguments.hash)];
                                        case 1:
                                            preimageRaw = _c.sent();
                                            preimage = preimageRaw.unwrapOr(null);
                                            if (!preimage) {
                                                l.log("No pre-image found for the pre-image hash " + preimageArguments.hash);
                                                return [2 /*return*/, null];
                                            }
                                            proposal = api.createType('Proposal', preimage[0].toU8a(true));
                                            _b = api.registry.findMetaCall(proposal.callIndex), meta = _b.meta, method = _b.method, section = _b.section;
                                            params = types_1.GenericCall.filterOrigin(proposal.meta).map(function (_a) {
                                                var name = _a.name;
                                                return name.toString();
                                            });
                                            values = proposal.args;
                                            preImageArguments = proposal.args &&
                                                params &&
                                                params.map(function (name, index) {
                                                    return { name: name, value: values[index].toString() };
                                                });
                                            result = {
                                                author: preimageArguments.author,
                                                depositAmount: preimageArguments.depositAmount,
                                                hash: preimageArguments.hash,
                                                metaDescription: meta.documentation.toString(),
                                                method: method,
                                                preImageArguments: preImageArguments,
                                                section: section,
                                                status: statuses_1.preimageStatus.NOTED,
                                            };
                                            results.push(result);
                                            l.log("Nomidot Preimage: " + JSON.stringify(result));
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
                        var author, depositAmount, h, metaDescription, method, pA, section, status, motion, proposals, referenda, m, p, r;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    author = prop.author, depositAmount = prop.depositAmount, h = prop.hash, metaDescription = prop.metaDescription, method = prop.method, pA = prop.preImageArguments, section = prop.section, status = prop.status;
                                    return [4 /*yield*/, prisma_client_1.prisma.motions({
                                            where: { preimageHash: h.toString() },
                                            orderBy: 'motionProposalId_DESC',
                                        })];
                                case 1:
                                    motion = _a.sent();
                                    return [4 /*yield*/, prisma_client_1.prisma.proposals({
                                            where: { preimageHash: h.toString() },
                                            orderBy: 'proposalId_DESC',
                                        })];
                                case 2:
                                    proposals = _a.sent();
                                    return [4 /*yield*/, prisma_client_1.prisma.referendums({
                                            where: { preimageHash: h.toString() },
                                            orderBy: 'referendumId_DESC',
                                        })];
                                case 3:
                                    referenda = _a.sent();
                                    m = motion[0];
                                    p = proposals[0];
                                    r = referenda[0];
                                    return [4 /*yield*/, prisma_client_1.prisma.createPreimage({
                                            author: author.toString(),
                                            depositAmount: depositAmount.toString(),
                                            hash: h.toString(),
                                            metaDescription: metaDescription,
                                            method: method,
                                            motion: m
                                                ? {
                                                    connect: {
                                                        id: m.id,
                                                    },
                                                }
                                                : null,
                                            proposal: p
                                                ? {
                                                    connect: {
                                                        id: p.id,
                                                    },
                                                }
                                                : null,
                                            preimageArguments: {
                                                create: pA,
                                            },
                                            preimageStatus: {
                                                create: {
                                                    blockNumber: {
                                                        connect: {
                                                            number: blockNumber.toNumber(),
                                                        },
                                                    },
                                                    status: status,
                                                },
                                            },
                                            referendum: r
                                                ? {
                                                    connect: {
                                                        id: r.id,
                                                    },
                                                }
                                                : null,
                                            section: section,
                                        })];
                                case 4:
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
exports.default = createPreimage;
