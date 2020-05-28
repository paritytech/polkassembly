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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("@polkadot/types");
var util_1 = require("@polkadot/util");
var bn_js_1 = __importDefault(require("bn.js"));
var prisma_client_1 = require("../generated/prisma-client");
var l = util_1.logger('Task: Stake');
/*
 *  ======= Table (Stake) ======
 */
var createStake = {
    name: 'createStake',
    read: function (blockHash, _cached, api) { return __awaiter(void 0, void 0, void 0, function () {
        var totalStaked, stakersInfoForEachCurrentElectedValidator, currentElected, queuedKeys, validators_1, currentElected, currentEra_1, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalStaked = new bn_js_1.default(0);
                    stakersInfoForEachCurrentElectedValidator = [];
                    if (!api.query.staking.currentElected) return [3 /*break*/, 3];
                    return [4 /*yield*/, api.query.staking.currentElected.at(blockHash)];
                case 1:
                    currentElected = _a.sent();
                    return [4 /*yield*/, Promise.all(currentElected.map(function (stashId) { return __awaiter(void 0, void 0, void 0, function () {
                            var exposure;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, api.query.staking.stakers.at(blockHash, stashId)];
                                    case 1:
                                        exposure = _a.sent();
                                        stakersInfoForEachCurrentElectedValidator.push(exposure);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, api.query.session.queuedKeys.at(blockHash)];
                case 4:
                    queuedKeys = _a.sent();
                    return [4 /*yield*/, api.query.session.validators.at(blockHash)];
                case 5:
                    validators_1 = _a.sent();
                    currentElected = queuedKeys
                        .map(function (key) { return key[0]; })
                        .filter(function (accountId) {
                        return validators_1.includes(accountId);
                    });
                    return [4 /*yield*/, api.query.staking.currentEra.at(blockHash)];
                case 6:
                    currentEra_1 = _a.sent();
                    return [4 /*yield*/, Promise.all(currentElected.map(function (stashId) { return __awaiter(void 0, void 0, void 0, function () {
                            var exposure;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, api.query.staking.erasStakers.at(blockHash, currentEra_1.unwrapOrDefault(), stashId)];
                                    case 1:
                                        exposure = _a.sent();
                                        stakersInfoForEachCurrentElectedValidator.push(exposure);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    stakersInfoForEachCurrentElectedValidator.map(function (exposure) {
                        if (exposure) {
                            var bondTotal = exposure.total.unwrap();
                            totalStaked = totalStaked.add(bondTotal);
                        }
                    });
                    result = {
                        totalStaked: types_1.createType(api.registry, 'Balance', totalStaked),
                    };
                    l.log("Nomidot Stake: " + JSON.stringify(result));
                    return [2 /*return*/, result];
            }
        });
    }); },
    write: function (blockNumber, value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.createStake({
                        blockNumber: {
                            connect: {
                                number: blockNumber.toNumber(),
                            },
                        },
                        totalStake: value.totalStaked.toHex(),
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = createStake;
