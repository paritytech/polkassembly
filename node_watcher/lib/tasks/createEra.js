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
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@polkadot/util");
var prisma_client_1 = require("../generated/prisma-client");
var l = util_1.logger('Task: Era');
/*
 *  ======= Table (Era) ======
 */
var createEra = {
    name: 'createEra',
    read: function (blockHash, _cached, api) { return __awaiter(void 0, void 0, void 0, function () {
        var idx, points, currentEraStartSessionIndex, result, eraIndexAlreadyExists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.query.staking.currentEra.at(blockHash)];
                case 1:
                    idx = _a.sent();
                    result = {};
                    if (!api.query.staking.currentEraStartSessionIndex) return [3 /*break*/, 4];
                    return [4 /*yield*/, api.query.staking.currentEraPointsEarned.at(blockHash)];
                case 2:
                    points = _a.sent();
                    return [4 /*yield*/, api.query.staking.currentEraStartSessionIndex.at(blockHash)];
                case 3:
                    currentEraStartSessionIndex = _a.sent();
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, api.query.staking.erasRewardPoints.at(blockHash, idx.unwrapOrDefault())];
                case 5:
                    points = _a.sent();
                    return [4 /*yield*/, api.query.staking.erasStartSessionIndex.at(blockHash, idx.unwrapOrDefault())];
                case 6:
                    currentEraStartSessionIndex = _a.sent();
                    result = {
                        idx: idx,
                        points: points,
                        startSessionIndex: currentEraStartSessionIndex.unwrapOrDefault(),
                    };
                    _a.label = 7;
                case 7: return [4 /*yield*/, prisma_client_1.prisma.$exists.era({
                        index: idx.unwrapOrDefault().toNumber(),
                    })];
                case 8:
                    eraIndexAlreadyExists = _a.sent();
                    if (!eraIndexAlreadyExists) {
                        l.log("NomidotEra: " + JSON.stringify(result));
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
    write: function (blockNumber, value) { return __awaiter(void 0, void 0, void 0, function () {
        var idx, points, startSessionIndex, eraIndexAlreadyExists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (value.idx.isNone) {
                        return [2 /*return*/];
                    }
                    idx = value.idx, points = value.points, startSessionIndex = value.startSessionIndex;
                    return [4 /*yield*/, prisma_client_1.prisma.$exists.era({
                            index: idx.unwrapOrDefault().toNumber(),
                        })];
                case 1:
                    eraIndexAlreadyExists = _a.sent();
                    if (!eraIndexAlreadyExists) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma_client_1.prisma.updateEra({
                            data: {
                                individualPoints: {
                                    set: points.individual.toHex(),
                                },
                                totalPoints: points.total.toHex(),
                            },
                            where: {
                                index: idx.unwrapOrDefault().toNumber(),
                            },
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    if (!(startSessionIndex.toNumber() > 0)) return [3 /*break*/, 5];
                    // only start writing after there's actually been a session.
                    return [4 /*yield*/, prisma_client_1.prisma.createEra({
                            index: idx.unwrapOrDefault().toNumber(),
                            totalPoints: points.total.toHex(),
                            individualPoints: {
                                set: points.individual.toHex(),
                            },
                            eraStartSessionIndex: {
                                connect: {
                                    index: startSessionIndex.toNumber(),
                                },
                            },
                        })];
                case 4:
                    // only start writing after there's actually been a session.
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = createEra;
