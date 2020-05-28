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
Object.defineProperty(exports, "__esModule", { value: true });
var blockNumber = {
    subscribe: function (parent, _a, context) {
        var blockNumberSubscriptionWhereInput = _a.blockNumberSubscriptionWhereInput;
        return context.prisma.$subscribe
            .blockNumber(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, blockNumberSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var heartBeat = {
    subscribe: function (parent, _a, context) {
        var heartbeatSubscriptionWhereInput = _a.heartbeatSubscriptionWhereInput;
        return context.prisma.$subscribe
            .heartBeat(__assign({ 
            // eslint-disable-next-line
            mutation_in: ['CREATED'] }, heartbeatSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var era = {
    subscribe: function (parent, _a, context) {
        var eraSubscriptionWhereInput = _a.eraSubscriptionWhereInput;
        return context.prisma.$subscribe
            .era(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, eraSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var offlineValidator = {
    subscribe: function (parent, _a, context) {
        var offlineValidatorsSubscriptionWhereInput = _a.offlineValidatorsSubscriptionWhereInput;
        return context.prisma.$subscribe
            .offlineValidator(__assign({ 
            // eslint-disable-next-line
            mutation_in: ['CREATED'] }, offlineValidatorsSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var nomination = {
    subscribe: function (parent, _a, context) {
        var nominationSubscriptionWhereInput = _a.nominationSubscriptionWhereInput;
        return context.prisma.$subscribe
            .nomination(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, nominationSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var reward = {
    subscribe: function (parent, _a, context) {
        var rewardSubscriptionWhereInput = _a.rewardSubscriptionWhereInput;
        return context.prisma.$subscribe
            .reward(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, rewardSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var session = {
    subscribe: function (parent, _a, context) {
        var sessionSubscriptionWhereInput = _a.sessionSubscriptionWhereInput;
        return context.prisma.$subscribe
            .session(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, sessionSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var slashing = {
    subscribe: function (parent, _a, context) {
        var slashingSubscriptionWhereInput = _a.slashingSubscriptionWhereInput;
        return context.prisma.$subscribe
            .slashing(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, slashingSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var stake = {
    subscribe: function (parent, _a, context) {
        var stakeSubscriptionWhereInput = _a.stakeSubscriptionWhereInput;
        return context.prisma.$subscribe
            .stake(__assign({ 
            // eslint-disable-next-line
            mutation_in: ['CREATED'] }, stakeSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var validator = {
    subscribe: function (parent, _a, context) {
        var validatorSubscriptionWhereInput = _a.validatorSubscriptionWhereInput;
        return context.prisma.$subscribe
            .validator(__assign({ 
            // eslint-disable-next-line @typescript-eslint/camelcase
            mutation_in: ['CREATED'] }, validatorSubscriptionWhereInput))
            .node();
    },
    resolve: function (payload) {
        return payload;
    },
};
var motion = {
    subscribe: function (parent, _a, context) {
        var where = _a.where;
        return context.prisma.$subscribe.motion(where);
    },
    resolve: function (payload) {
        return payload;
    },
};
var proposal = {
    subscribe: function (parent, _a, context) {
        var where = _a.where;
        return context.prisma.$subscribe.proposal(where);
    },
    resolve: function (payload) {
        return payload;
    },
};
var referendum = {
    subscribe: function (parent, _a, context) {
        var where = _a.where;
        return context.prisma.$subscribe.referendum(where);
    },
    resolve: function (payload) {
        return payload;
    },
};
var treasurySpendProposal = {
    subscribe: function (parent, _a, context) {
        var where = _a.where;
        return context.prisma.$subscribe.treasurySpendProposal(where);
    },
    resolve: function (payload) {
        return payload;
    },
};
exports.Subscription = {
    blockNumber: blockNumber,
    era: era,
    heartBeat: heartBeat,
    nomination: nomination,
    offlineValidator: offlineValidator,
    reward: reward,
    session: session,
    slashing: slashing,
    stake: stake,
    validator: validator,
    motion: motion,
    proposal: proposal,
    treasurySpendProposal: treasurySpendProposal,
    referendum: referendum,
};
