"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
var Query = {
    blockNumbers: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.blockNumbers({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    eras: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.eras({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    heartBeats: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.heartBeats({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    nominations: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.nominations({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    offlineValidators: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.offlineValidators({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    rewards: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.rewards({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    stakes: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.stakes({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    sessions: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.sessions({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    slashings: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.slashings({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    totalIssuances: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.totalIssuances({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    validators: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.validators({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    blockNumber: function (_parent, _a, _b) {
        var blockNumberWhereUniqueInput = _a.blockNumberWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.blockNumber(blockNumberWhereUniqueInput);
    },
    era: function (_parent, _a, _b) {
        var eraWhereUniqueInput = _a.eraWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.era(eraWhereUniqueInput);
    },
    nomination: function (_parent, _a, _b) {
        var nominationWhereUniqueInput = _a.nominationWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.nomination(nominationWhereUniqueInput);
    },
    reward: function (_parent, _a, _b) {
        var rewardWhereUniqueInput = _a.rewardWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.reward(rewardWhereUniqueInput);
    },
    session: function (_parent, _a, _b) {
        var sessionWhereUniqueInput = _a.sessionWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.session(sessionWhereUniqueInput);
    },
    slashing: function (_parent, _a, _b) {
        var slashingWhereUniqueInput = _a.slashingWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.slashing(slashingWhereUniqueInput);
    },
    stake: function (_parent, _a, _b) {
        var stakeWhereUniqueInput = _a.stakeWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.stake(stakeWhereUniqueInput);
    },
    totalIssuance: function (_parent, _a, _b) {
        var totalIssuanceWhereUniqueInput = _a.totalIssuanceWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.totalIssuance(totalIssuanceWhereUniqueInput);
    },
    validator: function (_parent, _a, _b) {
        var validatorWhereUniqueInput = _a.validatorWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.validator(validatorWhereUniqueInput);
    },
    councils: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.councils({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    council: function (_parent, _a, _b) {
        var councilWhereUniqueInput = _a.councilWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.council(councilWhereUniqueInput);
    },
    councilMembers: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.councilMembers({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    councilMember: function (_parent, _a, _b) {
        var councilMemberWhereUniqueInput = _a.councilMemberWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.councilMember(councilMemberWhereUniqueInput);
    },
    motionStatus: function (_parent, _a, _b) {
        var MotionStatusWhereUniqueInput = _a.MotionStatusWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.motionStatus(MotionStatusWhereUniqueInput);
    },
    motionStatuses: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.motionStatuses({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    motionProposalArgument: function (_parent, _a, _b) {
        var MotionProposalArgumentWhereUniqueInput = _a.MotionProposalArgumentWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.motionProposalArgument(MotionProposalArgumentWhereUniqueInput);
    },
    motionProposalArguments: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.motionProposalArguments({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    motion: function (_parent, _a, _b) {
        var MotionWhereUniqueInput = _a.MotionWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.motion(MotionWhereUniqueInput);
    },
    motions: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.motions({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    preimages: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.preimages({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    preimage: function (_parent, _a, _b) {
        var PreimageWhereUniqueInput = _a.PreimageWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.preimage(PreimageWhereUniqueInput);
    },
    preimageStatuses: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.preimageStatuses({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    preimageStatus: function (_parent, _a, _b) {
        var PreimageStatusWhereUniqueInput = _a.PreimageStatusWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.preimageStatus(PreimageStatusWhereUniqueInput);
    },
    proposals: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.proposals({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    proposal: function (_parent, _a, _b) {
        var ProposalWhereUniqueInput = _a.ProposalWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.proposal(ProposalWhereUniqueInput);
    },
    proposalStatuses: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.proposalStatuses({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    proposalStatus: function (_parent, _a, _b) {
        var ProposalStatusWhereUniqueInput = _a.ProposalStatusWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.proposalStatus(ProposalStatusWhereUniqueInput);
    },
    preimageArguments: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.preimageArguments({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    preimageArgument: function (_parent, _a, _b) {
        var PreimageArgumentWhereUniqueInput = _a.PreimageArgumentWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.preimageArgument(PreimageArgumentWhereUniqueInput);
    },
    treasurySpendProposals: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.treasurySpendProposals({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    treasurySpendProposal: function (_parent, _a, _b) {
        var TreasurySpendProposalWhereUniqueInput = _a.TreasurySpendProposalWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.treasurySpendProposal(TreasurySpendProposalWhereUniqueInput);
    },
    treasuryStatuses: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.treasuryStatuses({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    treasuryStatus: function (_parent, _a, _b) {
        var TreasuryStatusWhereUniqueInput = _a.TreasuryStatusWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.treasuryStatus(TreasuryStatusWhereUniqueInput);
    },
    referendums: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.referendums({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    referendum: function (_parent, _a, _b) {
        var referendumWhereUniqueInput = _a.referendumWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.referendum(referendumWhereUniqueInput);
    },
    referendumStatuses: function (_parent, _a, _b) {
        var where = _a.where, orderBy = _a.orderBy, skip = _a.skip, after = _a.after, before = _a.before, first = _a.first, last = _a.last;
        var prisma = _b.prisma;
        return prisma.referendumStatuses({
            where: where,
            orderBy: orderBy,
            skip: skip,
            after: after,
            before: before,
            first: first,
            last: last,
        });
    },
    referendumStatus: function (_parent, _a, _b) {
        var referendumStatusWhereUniqueInput = _a.referendumStatusWhereUniqueInput;
        var prisma = _b.prisma;
        return prisma.referendumStatus(referendumStatusWhereUniqueInput);
    },
};
exports.Query = Query;
