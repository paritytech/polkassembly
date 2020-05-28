"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var prisma_client_1 = require("./generated/prisma-client");
var query_1 = require("./resolvers/query");
var subscription_1 = require("./resolvers/subscription");
var resolvers = {
    Subscription: subscription_1.Subscription,
    Query: query_1.Query,
    BlockNumber: {
        authoredBy: function (parent) {
            return prisma_client_1.prisma.blockNumber({ id: parent.id }).authoredBy();
        },
        hash: function (parent) {
            return prisma_client_1.prisma.blockNumber({ id: parent.id }).hash();
        },
        id: function (parent) {
            return prisma_client_1.prisma.blockNumber({ id: parent.id }).id();
        },
        number: function (parent) {
            return prisma_client_1.prisma.blockNumber({ id: parent.id }).number();
        },
        startDateTime: function (parent) {
            return prisma_client_1.prisma.blockNumber({ id: parent.id }).startDateTime();
        },
    },
    Era: {
        eraStartSessionIndex: function (parent) {
            return prisma_client_1.prisma.era({ id: parent.id }).eraStartSessionIndex();
        },
    },
    HeartBeat: {
        sessionIndex: function (parent) {
            return prisma_client_1.prisma.heartBeat({ id: parent.id }).sessionIndex();
        },
    },
    Nomination: {
        session: function (parent) {
            return prisma_client_1.prisma.nomination({ id: parent.id }).session();
        },
    },
    OfflineValidator: {
        sessionIndex: function (parent) {
            return prisma_client_1.prisma.offlineValidator({ id: parent.id }).sessionIndex();
        },
    },
    Reward: {
        authoredBlock: function (parent) {
            return prisma_client_1.prisma.reward({ id: parent.id }).authoredBlock();
        },
        sessionIndex: function (parent) {
            return prisma_client_1.prisma.reward({ id: parent.id }).sessionIndex();
        },
    },
    Session: {
        id: function (parent) {
            return prisma_client_1.prisma.session({ id: parent.id }).id();
        },
        index: function (parent) {
            return prisma_client_1.prisma.session({ id: parent.id }).index();
        },
        start: function (parent) {
            return prisma_client_1.prisma.session({ id: parent.id }).start();
        },
    },
    Stake: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.stake({ id: parent.id }).blockNumber();
        },
    },
    TotalIssuance: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.totalIssuance({ id: parent.id }).blockNumber();
        },
    },
    Validator: {
        session: function (parent) {
            return prisma_client_1.prisma.validator({ id: parent.id }).session();
        },
    },
    Council: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.council({ id: parent.id }).blockNumber();
        },
        members: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .council({ id: parent.id })
                .members({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
    },
    CouncilMember: {
        councils: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .councilMember({ id: parent.id })
                .councils({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
    },
    Motion: {
        motionProposalArguments: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma.motion({ id: parent.id }).motionProposalArguments({
                where: where,
                orderBy: orderBy,
                skip: skip,
                after: after,
                before: before,
                first: first,
                last: last,
            });
        },
        motionStatus: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .motion({ id: parent.id })
                .motionStatus({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
        preimage: function (parent) {
            return prisma_client_1.prisma.motion({ id: parent.id }).preimage();
        },
        treasurySpendProposal: function (parent) {
            return prisma_client_1.prisma.motion({ id: parent.id }).treasurySpendProposal();
        },
    },
    MotionStatus: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.motionStatus({ id: parent.id }).blockNumber();
        },
    },
    Proposal: {
        preimage: function (parent) {
            return prisma_client_1.prisma.proposal({ id: parent.id }).preimage();
        },
        proposalStatus: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .proposal({ id: parent.id })
                .proposalStatus({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
    },
    Preimage: {
        preimageArguments: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma.preimage({ id: parent.id }).preimageArguments({
                where: where,
                orderBy: orderBy,
                skip: skip,
                after: after,
                before: before,
                first: first,
                last: last,
            });
        },
        preimageStatus: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .preimage({ id: parent.id })
                .preimageStatus({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
    },
    PreimageStatus: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.preimageStatus({ id: parent.id }).blockNumber();
        },
    },
    ProposalStatus: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.proposalStatus({ id: parent.id }).blockNumber();
        },
    },
    TreasurySpendProposal: {
        treasuryStatus: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .treasurySpendProposal({ id: parent.id })
                .treasuryStatus({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
        motion: function (parent) {
            return prisma_client_1.prisma.treasurySpendProposal({ id: parent.id }).motion();
        },
    },
    TreasuryStatus: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.treasuryStatus({ id: parent.id }).blockNumber();
        },
    },
    Referendum: {
        preimage: function (parent) {
            return prisma_client_1.prisma.referendum({ id: parent.id }).preimage();
        },
        referendumStatus: function (parent, _a) {
            var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
            return prisma_client_1.prisma
                .referendum({ id: parent.id })
                .referendumStatus({ where: where, orderBy: orderBy, skip: skip, after: after, before: before, first: first, last: last });
        },
    },
    ReferendumStatus: {
        blockNumber: function (parent) {
            return prisma_client_1.prisma.referendumStatus({ id: parent.id }).blockNumber();
        },
    },
};
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers,
    context: { prisma: prisma_client_1.prisma },
});
server.start(function () { return console.log('Server is running on http://localhost:4000'); });
