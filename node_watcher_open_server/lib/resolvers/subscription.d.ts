import { BlockNumberSubscription, EraSubscription, HeartBeatSubscription, MotionSubscriptionPayloadSubscription, MotionSubscriptionWhereInput, NominationSubscription, OfflineValidatorSubscription, ProposalSubscriptionPayloadSubscription, ProposalSubscriptionWhereInput, ReferendumSubscriptionPayloadSubscription, ReferendumSubscriptionWhereInput, RewardSubscription, SessionSubscription, SlashingSubscription, StakeSubscription, TreasurySpendProposalSubscriptionPayloadSubscription, TreasurySpendProposalSubscriptionWhereInput, ValidatorSubscription } from '../generated/prisma-client';
import { Context } from '../types';
export declare const Subscription: {
    blockNumber: {
        subscribe: (parent: any, { blockNumberSubscriptionWhereInput }: Record<string, any>, context: Context) => <T = BlockNumberSubscription>() => T;
        resolve: (payload: any) => any;
    };
    era: {
        subscribe: (parent: any, { eraSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_1 = EraSubscription>() => T_1;
        resolve: (payload: any) => any;
    };
    heartBeat: {
        subscribe: (parent: any, { heartbeatSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_2 = HeartBeatSubscription>() => T_2;
        resolve: (payload: any) => any;
    };
    nomination: {
        subscribe: (parent: any, { nominationSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_3 = NominationSubscription>() => T_3;
        resolve: (payload: any) => any;
    };
    offlineValidator: {
        subscribe: (parent: any, { offlineValidatorsSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_4 = OfflineValidatorSubscription>() => T_4;
        resolve: (payload: any) => any;
    };
    reward: {
        subscribe: (parent: any, { rewardSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_5 = RewardSubscription>() => T_5;
        resolve: (payload: any) => any;
    };
    session: {
        subscribe: (parent: any, { sessionSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_6 = SessionSubscription>() => T_6;
        resolve: (payload: any) => any;
    };
    slashing: {
        subscribe: (parent: any, { slashingSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_7 = SlashingSubscription>() => T_7;
        resolve: (payload: any) => any;
    };
    stake: {
        subscribe: (parent: any, { stakeSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_8 = StakeSubscription>() => T_8;
        resolve: (payload: any) => any;
    };
    validator: {
        subscribe: (parent: any, { validatorSubscriptionWhereInput }: Record<string, any>, context: Context) => <T_9 = ValidatorSubscription>() => T_9;
        resolve: (payload: any) => any;
    };
    motion: {
        subscribe: (parent: any, { where }: {
            where: MotionSubscriptionWhereInput;
        }, context: Context) => MotionSubscriptionPayloadSubscription;
        resolve: (payload: any) => any;
    };
    proposal: {
        subscribe: (parent: any, { where }: {
            where: ProposalSubscriptionWhereInput;
        }, context: Context) => ProposalSubscriptionPayloadSubscription;
        resolve: (payload: any) => any;
    };
    treasurySpendProposal: {
        subscribe: (parent: any, { where }: {
            where: TreasurySpendProposalSubscriptionWhereInput;
        }, context: Context) => TreasurySpendProposalSubscriptionPayloadSubscription;
        resolve: (payload: any) => any;
    };
    referendum: {
        subscribe: (parent: any, { where }: {
            where: ReferendumSubscriptionWhereInput;
        }, context: Context) => ReferendumSubscriptionPayloadSubscription;
        resolve: (payload: any) => any;
    };
};
