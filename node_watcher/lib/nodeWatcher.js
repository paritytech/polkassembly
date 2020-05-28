"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("@polkadot/api");
var types_known_1 = require("@polkadot/types-known");
var util_1 = require("@polkadot/util");
var prisma_client_1 = require("./generated/prisma-client");
var tasks_1 = require("./tasks");
var ARCHIVE_NODE_ENDPOINT = process.env.ARCHIVE_NODE_ENDPOINT || 'wss://kusama-rpc.polkadot.io/';
var MAX_LAG = process.env.MAX_LAG || 0;
var l = util_1.logger('node-watcher');
function waitFinalized(api, lastKnownBestFinalized) {
    return new Promise(function (resolve) {
        function wait() {
            return __awaiter(this, void 0, void 0, function () {
                var unsub;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.derive.chain.bestNumberFinalized(function (best) {
                                if (best.toNumber() > lastKnownBestFinalized) {
                                    resolve({ unsub: unsub, bestFinalizedBlock: best.toNumber() });
                                }
                            })];
                        case 1:
                            unsub = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        wait();
    });
}
function reachedLimitLag(blockIndex, lastKnownBestBlock) {
    return MAX_LAG ? lastKnownBestBlock - blockIndex > parseInt(MAX_LAG) : false;
}
function waitLagLimit(api, blockIndex) {
    return new Promise(function (resolve) {
        function wait() {
            return __awaiter(this, void 0, void 0, function () {
                var unsub;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.derive.chain.bestNumber(function (bestBlock) {
                                if (reachedLimitLag(blockIndex, bestBlock.toNumber())) {
                                    resolve({ unsub: unsub, bestBlock: bestBlock.toNumber() });
                                }
                            })];
                        case 1:
                            unsub = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        wait();
    });
}
function nodeWatcher() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (_, reject) {
                    var keepLooping = true;
                    var provider = new api_1.WsProvider(ARCHIVE_NODE_ENDPOINT);
                    api_1.ApiPromise.create({ provider: provider })
                        .then(function (api) { return __awaiter(_this, void 0, void 0, function () {
                        var blockIdentifier, blockIndexId, blockIndex, currentSpecVersion, lastKnownBestFinalized, lastKnownBestBlock, existingBlockIndex, result, _a, unsub, bestBlock, _b, unsub, bestFinalizedBlock, blockNumber, blockHash, runtimeVersion, newSpecVersion, rpcMeta, chain, _c, events, sessionIndex, _d, _e, _f, cached, nomidotTasks_1, nomidotTasks_1_1, task, result, e_1, e_2_1;
                        var e_2, _g;
                        return __generator(this, function (_h) {
                            switch (_h.label) {
                                case 0:
                                    api.once('error', function (e) {
                                        keepLooping = false;
                                        api.disconnect();
                                        reject(new Error("Api error: " + e));
                                    });
                                    api.once('disconnected', function (e) {
                                        keepLooping = false;
                                        api.disconnect();
                                        reject(new Error("Api disconnected: " + e));
                                    });
                                    blockIdentifier = process.env.BLOCK_IDENTIFIER || 'IDENTIFIER';
                                    blockIndexId = '';
                                    blockIndex = parseInt(process.env.START_FROM || '0');
                                    currentSpecVersion = api.createType('u32', -1);
                                    return [4 /*yield*/, api.derive.chain.bestNumberFinalized()];
                                case 1:
                                    lastKnownBestFinalized = (_h.sent()).toNumber();
                                    return [4 /*yield*/, api.derive.chain.bestNumber()];
                                case 2:
                                    lastKnownBestBlock = (_h.sent()).toNumber();
                                    return [4 /*yield*/, prisma_client_1.prisma.blockIndexes({
                                            where: {
                                                identifier: blockIdentifier,
                                            },
                                        })];
                                case 3:
                                    existingBlockIndex = _h.sent();
                                    if (!(existingBlockIndex.length === 0)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, prisma_client_1.prisma.createBlockIndex({
                                            identifier: blockIdentifier,
                                            startFrom: blockIndex,
                                            index: blockIndex,
                                        })];
                                case 4:
                                    result = _h.sent();
                                    blockIndexId = result.id;
                                    return [3 /*break*/, 6];
                                case 5:
                                    blockIndexId = existingBlockIndex[0].id;
                                    blockIndex = existingBlockIndex[0].index;
                                    _h.label = 6;
                                case 6:
                                    if (!keepLooping) return [3 /*break*/, 37];
                                    if (!MAX_LAG) return [3 /*break*/, 9];
                                    if (!(blockIndex > lastKnownBestFinalized &&
                                        !reachedLimitLag(blockIndex, lastKnownBestBlock))) return [3 /*break*/, 8];
                                    l.warn("Waiting for finalization or a max lag of " + MAX_LAG + " blocks.");
                                    return [4 /*yield*/, waitLagLimit(api, blockIndex)];
                                case 7:
                                    _a = _h.sent(), unsub = _a.unsub, bestBlock = _a.bestBlock;
                                    unsub && unsub();
                                    lastKnownBestBlock = bestBlock;
                                    return [3 /*break*/, 6];
                                case 8: return [3 /*break*/, 11];
                                case 9:
                                    if (!(blockIndex > lastKnownBestFinalized)) return [3 /*break*/, 11];
                                    l.warn('Waiting for finalization.');
                                    return [4 /*yield*/, waitFinalized(api, lastKnownBestFinalized)];
                                case 10:
                                    _b = _h.sent(), unsub = _b.unsub, bestFinalizedBlock = _b.bestFinalizedBlock;
                                    unsub && unsub();
                                    lastKnownBestBlock = bestFinalizedBlock;
                                    return [3 /*break*/, 6];
                                case 11:
                                    l.warn("blockIndex: " + blockIndex);
                                    l.warn("lastKnownBestBlock: " + lastKnownBestBlock);
                                    l.warn("lastKnownBestFinalized: " + lastKnownBestFinalized);
                                    blockNumber = api.createType('BlockNumber', blockIndex);
                                    l.warn("block: " + blockNumber);
                                    return [4 /*yield*/, api.rpc.chain.getBlockHash(blockNumber)];
                                case 12:
                                    blockHash = _h.sent();
                                    l.warn("hash: " + blockHash);
                                    return [4 /*yield*/, api.rpc.state.getRuntimeVersion(blockHash)];
                                case 13:
                                    runtimeVersion = _h.sent();
                                    newSpecVersion = runtimeVersion.specVersion;
                                    if (!newSpecVersion.gt(currentSpecVersion)) return [3 /*break*/, 16];
                                    l.warn("bumped spec version to " + newSpecVersion + ", fetching new metadata");
                                    return [4 /*yield*/, api.rpc.state.getMetadata(blockHash)];
                                case 14:
                                    rpcMeta = _h.sent();
                                    currentSpecVersion = newSpecVersion;
                                    return [4 /*yield*/, api.rpc.system.chain()];
                                case 15:
                                    chain = _h.sent();
                                    api.registry.register(types_known_1.getSpecTypes(api.registry, chain, runtimeVersion.specName, runtimeVersion.specVersion));
                                    api.registry.setMetadata(rpcMeta);
                                    _h.label = 16;
                                case 16:
                                    _e = (_d = Promise).all;
                                    return [4 /*yield*/, api.query.system.events.at(blockHash)];
                                case 17:
                                    _f = [
                                        _h.sent()
                                    ];
                                    return [4 /*yield*/, api.query.session.currentIndex.at(blockHash)];
                                case 18: return [4 /*yield*/, _e.apply(_d, [_f.concat([
                                            _h.sent()
                                        ])])];
                                case 19:
                                    _c = __read.apply(void 0, [_h.sent(), 2]), events = _c[0], sessionIndex = _c[1];
                                    cached = {
                                        events: events,
                                        sessionIndex: sessionIndex,
                                    };
                                    _h.label = 20;
                                case 20:
                                    _h.trys.push([20, 29, 30, 35]);
                                    nomidotTasks_1 = __asyncValues(tasks_1.nomidotTasks);
                                    _h.label = 21;
                                case 21: return [4 /*yield*/, nomidotTasks_1.next()];
                                case 22:
                                    if (!(nomidotTasks_1_1 = _h.sent(), !nomidotTasks_1_1.done)) return [3 /*break*/, 28];
                                    task = nomidotTasks_1_1.value;
                                    l.warn("Task --- " + task.name);
                                    return [4 /*yield*/, task.read(blockHash, cached, api)];
                                case 23:
                                    result = _h.sent();
                                    _h.label = 24;
                                case 24:
                                    _h.trys.push([24, 26, , 27]);
                                    l.warn("Writing: " + JSON.stringify(result));
                                    return [4 /*yield*/, task.write(blockNumber, result)];
                                case 25:
                                    _h.sent();
                                    return [3 /*break*/, 27];
                                case 26:
                                    e_1 = _h.sent();
                                    // Write task might throw errors such as unique constraints violated,
                                    // we ignore those.
                                    l.error(e_1);
                                    return [3 /*break*/, 27];
                                case 27: return [3 /*break*/, 21];
                                case 28: return [3 /*break*/, 35];
                                case 29:
                                    e_2_1 = _h.sent();
                                    e_2 = { error: e_2_1 };
                                    return [3 /*break*/, 35];
                                case 30:
                                    _h.trys.push([30, , 33, 34]);
                                    if (!(nomidotTasks_1_1 && !nomidotTasks_1_1.done && (_g = nomidotTasks_1.return))) return [3 /*break*/, 32];
                                    return [4 /*yield*/, _g.call(nomidotTasks_1)];
                                case 31:
                                    _h.sent();
                                    _h.label = 32;
                                case 32: return [3 /*break*/, 34];
                                case 33:
                                    if (e_2) throw e_2.error;
                                    return [7 /*endfinally*/];
                                case 34: return [7 /*endfinally*/];
                                case 35:
                                    blockIndex += 1;
                                    return [4 /*yield*/, prisma_client_1.prisma.updateBlockIndex({
                                            data: {
                                                index: blockIndex,
                                            },
                                            where: {
                                                id: blockIndexId,
                                            },
                                        })];
                                case 36:
                                    _h.sent();
                                    return [3 /*break*/, 6];
                                case 37: return [2 /*return*/];
                            }
                        });
                    }); })
                        .catch(function (e) {
                        keepLooping = false;
                        reject(new Error("Connection error: " + e));
                    });
                })];
        });
    });
}
exports.nodeWatcher = nodeWatcher;
