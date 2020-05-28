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
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@polkadot/util");
var prisma_client_1 = require("../generated/prisma-client");
var filterEvents_1 = require("../util/filterEvents");
var l = util_1.logger('Task: Nomination + Validators');
/*
 *  ======= Table (Nomination and Validators) ======
 */
var createNominationAndValidators = {
    name: 'createNominationAndValidators',
    read: function (blockHash, cached, api) { return __awaiter(void 0, void 0, void 0, function () {
        var result, events, sessionIndex, didNewSessionStart, validators;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = new Set();
                    events = cached.events, sessionIndex = cached.sessionIndex;
                    didNewSessionStart = filterEvents_1.filterEvents(events, 'session', 'NewSession').length > 0;
                    if (!didNewSessionStart) return [3 /*break*/, 3];
                    return [4 /*yield*/, api.query.session.validators.at(blockHash)];
                case 1:
                    validators = _a.sent();
                    return [4 /*yield*/, Promise.all(validators.map(function (validator) { return __awaiter(void 0, void 0, void 0, function () {
                            var bonded, ledger, result_1, validatorStash, validatorController, validatorPreferences, exposure, currentEra;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, api.query.staking.bonded.at(blockHash, validator)];
                                    case 1:
                                        bonded = _a.sent();
                                        return [4 /*yield*/, api.query.staking.ledger.at(blockHash, validator)];
                                    case 2:
                                        ledger = _a.sent();
                                        // n.b. In the history of Kusama, there was a point when the Validator set was hard coded in, so during this period, they were actually not properly bonded, i.e. bonded and ledger were actually null.
                                        if (bonded.isNone && ledger.isNone) {
                                            result_1 = {
                                                stakedAmount: null,
                                                session: sessionIndex,
                                                nominatorController: null,
                                                nominatorStash: null,
                                                validatorPreferences: null,
                                                validatorController: validator,
                                                validatorStash: validator,
                                            };
                                            return [2 /*return*/, result_1];
                                        }
                                        validatorStash = bonded.isNone
                                            ? ledger.unwrap().stash
                                            : validator;
                                        validatorController = ledger.isSome && ledger.unwrap().stash
                                            ? validator
                                            : bonded.unwrap();
                                        return [4 /*yield*/, api.query.staking.validators.at(blockHash, validatorStash)];
                                    case 3:
                                        validatorPreferences = _a.sent();
                                        if (!api.query.staking.stakers) return [3 /*break*/, 5];
                                        return [4 /*yield*/, api.query.staking.stakers.at(blockHash)];
                                    case 4:
                                        exposure = _a.sent();
                                        return [3 /*break*/, 8];
                                    case 5: return [4 /*yield*/, api.query.staking.currentEra.at(blockHash)];
                                    case 6:
                                        currentEra = _a.sent();
                                        return [4 /*yield*/, api.query.staking.erasStakers.at(blockHash, currentEra.unwrap(), validatorStash)];
                                    case 7:
                                        exposure = _a.sent();
                                        _a.label = 8;
                                    case 8: 
                                    // per validator in session, get nominator info
                                    return [4 /*yield*/, Promise.all(exposure.others.map(function (individualExposure) { return __awaiter(void 0, void 0, void 0, function () {
                                            var who, value, bonded, ledger, nominatorStash, nominatorController;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        who = individualExposure.who, value = individualExposure.value;
                                                        return [4 /*yield*/, api.query.staking.bonded.at(blockHash, who)];
                                                    case 1:
                                                        bonded = _a.sent();
                                                        return [4 /*yield*/, api.query.staking.ledger.at(blockHash, who)];
                                                    case 2:
                                                        ledger = _a.sent();
                                                        nominatorStash = bonded.isNone
                                                            ? ledger.unwrapOr({ stash: null }).stash
                                                            : who;
                                                        nominatorController = ledger.isSome && ledger.unwrapOr({ stash: null }).stash
                                                            ? who
                                                            : bonded.unwrapOr(null);
                                                        result.add({
                                                            nominatorStash: nominatorStash,
                                                            nominatorController: nominatorController,
                                                            session: sessionIndex,
                                                            stakedAmount: value,
                                                            validatorController: validatorController,
                                                            validatorStash: validatorStash,
                                                            validatorPreferences: validatorPreferences,
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }))];
                                    case 9:
                                        // per validator in session, get nominator info
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    l.log('Session did not change. Skipping....');
                    _a.label = 4;
                case 4: return [2 /*return*/, result];
            }
        });
    }); },
    write: function (blockNumber, values) { var values_1, values_1_1; return __awaiter(void 0, void 0, void 0, function () {
        var nominationsAndValidators, stakedAmount, session, nominatorController, nominatorStash, validatorController, validatorStash, validatorPreferences, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, 8, 13]);
                    values_1 = __asyncValues(values);
                    _b.label = 1;
                case 1: return [4 /*yield*/, values_1.next()];
                case 2:
                    if (!(values_1_1 = _b.sent(), !values_1_1.done)) return [3 /*break*/, 6];
                    nominationsAndValidators = values_1_1.value;
                    stakedAmount = nominationsAndValidators.stakedAmount, session = nominationsAndValidators.session, nominatorController = nominationsAndValidators.nominatorController, nominatorStash = nominationsAndValidators.nominatorStash, validatorController = nominationsAndValidators.validatorController, validatorStash = nominationsAndValidators.validatorStash, validatorPreferences = nominationsAndValidators.validatorPreferences;
                    return [4 /*yield*/, prisma_client_1.prisma.createValidator({
                            session: {
                                connect: {
                                    index: session.toNumber(),
                                },
                            },
                            controller: validatorController ? validatorController.toHex() : '0x00',
                            stash: validatorStash ? validatorStash.toHex() : '0x00',
                            preferences: validatorPreferences
                                ? validatorPreferences.toHex()
                                : '0x00',
                        })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.createNomination({
                            session: {
                                connect: {
                                    index: session.toNumber(),
                                },
                            },
                            validatorController: validatorController
                                ? validatorController.toHex()
                                : '0x00',
                            validatorStash: validatorStash ? validatorStash.toHex() : '0x00',
                            nominatorController: nominatorController
                                ? nominatorController.toHex()
                                : '0x00',
                            nominatorStash: nominatorStash ? nominatorStash.toHex() : '0x00',
                            stakedAmount: stakedAmount.toHex(),
                        })];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5: return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _b.trys.push([8, , 11, 12]);
                    if (!(values_1_1 && !values_1_1.done && (_a = values_1.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(values_1)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = createNominationAndValidators;
