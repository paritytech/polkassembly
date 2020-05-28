import { DocumentNode } from "graphql";
import { BaseClientOptions, Model } from "prisma-client-lib";
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export declare type Maybe<T> = T | undefined | null;
export interface Exists {
    blockIndex: (where?: BlockIndexWhereInput) => Promise<boolean>;
    blockNumber: (where?: BlockNumberWhereInput) => Promise<boolean>;
    council: (where?: CouncilWhereInput) => Promise<boolean>;
    councilMember: (where?: CouncilMemberWhereInput) => Promise<boolean>;
    era: (where?: EraWhereInput) => Promise<boolean>;
    heartBeat: (where?: HeartBeatWhereInput) => Promise<boolean>;
    motion: (where?: MotionWhereInput) => Promise<boolean>;
    motionProposalArgument: (where?: MotionProposalArgumentWhereInput) => Promise<boolean>;
    motionStatus: (where?: MotionStatusWhereInput) => Promise<boolean>;
    nomination: (where?: NominationWhereInput) => Promise<boolean>;
    offlineValidator: (where?: OfflineValidatorWhereInput) => Promise<boolean>;
    preimage: (where?: PreimageWhereInput) => Promise<boolean>;
    preimageArgument: (where?: PreimageArgumentWhereInput) => Promise<boolean>;
    preimageStatus: (where?: PreimageStatusWhereInput) => Promise<boolean>;
    proposal: (where?: ProposalWhereInput) => Promise<boolean>;
    proposalStatus: (where?: ProposalStatusWhereInput) => Promise<boolean>;
    referendum: (where?: ReferendumWhereInput) => Promise<boolean>;
    referendumStatus: (where?: ReferendumStatusWhereInput) => Promise<boolean>;
    reward: (where?: RewardWhereInput) => Promise<boolean>;
    session: (where?: SessionWhereInput) => Promise<boolean>;
    slashing: (where?: SlashingWhereInput) => Promise<boolean>;
    stake: (where?: StakeWhereInput) => Promise<boolean>;
    totalIssuance: (where?: TotalIssuanceWhereInput) => Promise<boolean>;
    treasurySpendProposal: (where?: TreasurySpendProposalWhereInput) => Promise<boolean>;
    treasuryStatus: (where?: TreasuryStatusWhereInput) => Promise<boolean>;
    validator: (where?: ValidatorWhereInput) => Promise<boolean>;
}
export interface Node {
}
export declare type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;
export interface Fragmentable {
    $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}
export interface Prisma {
    $exists: Exists;
    $graphql: <T = any>(query: string, variables?: {
        [key: string]: any;
    }) => Promise<T>;
    /**
     * Queries
     */
    blockIndex: (where: BlockIndexWhereUniqueInput) => BlockIndexNullablePromise;
    blockIndexes: (args?: {
        where?: BlockIndexWhereInput;
        orderBy?: BlockIndexOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<BlockIndex>;
    blockIndexesConnection: (args?: {
        where?: BlockIndexWhereInput;
        orderBy?: BlockIndexOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => BlockIndexConnectionPromise;
    blockNumber: (where: BlockNumberWhereUniqueInput) => BlockNumberNullablePromise;
    blockNumbers: (args?: {
        where?: BlockNumberWhereInput;
        orderBy?: BlockNumberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<BlockNumber>;
    blockNumbersConnection: (args?: {
        where?: BlockNumberWhereInput;
        orderBy?: BlockNumberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => BlockNumberConnectionPromise;
    council: (where: CouncilWhereUniqueInput) => CouncilNullablePromise;
    councils: (args?: {
        where?: CouncilWhereInput;
        orderBy?: CouncilOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Council>;
    councilsConnection: (args?: {
        where?: CouncilWhereInput;
        orderBy?: CouncilOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => CouncilConnectionPromise;
    councilMember: (where: CouncilMemberWhereUniqueInput) => CouncilMemberNullablePromise;
    councilMembers: (args?: {
        where?: CouncilMemberWhereInput;
        orderBy?: CouncilMemberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<CouncilMember>;
    councilMembersConnection: (args?: {
        where?: CouncilMemberWhereInput;
        orderBy?: CouncilMemberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => CouncilMemberConnectionPromise;
    era: (where: EraWhereUniqueInput) => EraNullablePromise;
    eras: (args?: {
        where?: EraWhereInput;
        orderBy?: EraOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Era>;
    erasConnection: (args?: {
        where?: EraWhereInput;
        orderBy?: EraOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => EraConnectionPromise;
    heartBeat: (where: HeartBeatWhereUniqueInput) => HeartBeatNullablePromise;
    heartBeats: (args?: {
        where?: HeartBeatWhereInput;
        orderBy?: HeartBeatOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<HeartBeat>;
    heartBeatsConnection: (args?: {
        where?: HeartBeatWhereInput;
        orderBy?: HeartBeatOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => HeartBeatConnectionPromise;
    motion: (where: MotionWhereUniqueInput) => MotionNullablePromise;
    motions: (args?: {
        where?: MotionWhereInput;
        orderBy?: MotionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Motion>;
    motionsConnection: (args?: {
        where?: MotionWhereInput;
        orderBy?: MotionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => MotionConnectionPromise;
    motionProposalArgument: (where: MotionProposalArgumentWhereUniqueInput) => MotionProposalArgumentNullablePromise;
    motionProposalArguments: (args?: {
        where?: MotionProposalArgumentWhereInput;
        orderBy?: MotionProposalArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<MotionProposalArgument>;
    motionProposalArgumentsConnection: (args?: {
        where?: MotionProposalArgumentWhereInput;
        orderBy?: MotionProposalArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => MotionProposalArgumentConnectionPromise;
    motionStatus: (where: MotionStatusWhereUniqueInput) => MotionStatusNullablePromise;
    motionStatuses: (args?: {
        where?: MotionStatusWhereInput;
        orderBy?: MotionStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<MotionStatus>;
    motionStatusesConnection: (args?: {
        where?: MotionStatusWhereInput;
        orderBy?: MotionStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => MotionStatusConnectionPromise;
    nomination: (where: NominationWhereUniqueInput) => NominationNullablePromise;
    nominations: (args?: {
        where?: NominationWhereInput;
        orderBy?: NominationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Nomination>;
    nominationsConnection: (args?: {
        where?: NominationWhereInput;
        orderBy?: NominationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => NominationConnectionPromise;
    offlineValidator: (where: OfflineValidatorWhereUniqueInput) => OfflineValidatorNullablePromise;
    offlineValidators: (args?: {
        where?: OfflineValidatorWhereInput;
        orderBy?: OfflineValidatorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<OfflineValidator>;
    offlineValidatorsConnection: (args?: {
        where?: OfflineValidatorWhereInput;
        orderBy?: OfflineValidatorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => OfflineValidatorConnectionPromise;
    preimage: (where: PreimageWhereUniqueInput) => PreimageNullablePromise;
    preimages: (args?: {
        where?: PreimageWhereInput;
        orderBy?: PreimageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Preimage>;
    preimagesConnection: (args?: {
        where?: PreimageWhereInput;
        orderBy?: PreimageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => PreimageConnectionPromise;
    preimageArgument: (where: PreimageArgumentWhereUniqueInput) => PreimageArgumentNullablePromise;
    preimageArguments: (args?: {
        where?: PreimageArgumentWhereInput;
        orderBy?: PreimageArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<PreimageArgument>;
    preimageArgumentsConnection: (args?: {
        where?: PreimageArgumentWhereInput;
        orderBy?: PreimageArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => PreimageArgumentConnectionPromise;
    preimageStatus: (where: PreimageStatusWhereUniqueInput) => PreimageStatusNullablePromise;
    preimageStatuses: (args?: {
        where?: PreimageStatusWhereInput;
        orderBy?: PreimageStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<PreimageStatus>;
    preimageStatusesConnection: (args?: {
        where?: PreimageStatusWhereInput;
        orderBy?: PreimageStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => PreimageStatusConnectionPromise;
    proposal: (where: ProposalWhereUniqueInput) => ProposalNullablePromise;
    proposals: (args?: {
        where?: ProposalWhereInput;
        orderBy?: ProposalOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Proposal>;
    proposalsConnection: (args?: {
        where?: ProposalWhereInput;
        orderBy?: ProposalOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ProposalConnectionPromise;
    proposalStatus: (where: ProposalStatusWhereUniqueInput) => ProposalStatusNullablePromise;
    proposalStatuses: (args?: {
        where?: ProposalStatusWhereInput;
        orderBy?: ProposalStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<ProposalStatus>;
    proposalStatusesConnection: (args?: {
        where?: ProposalStatusWhereInput;
        orderBy?: ProposalStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ProposalStatusConnectionPromise;
    referendum: (where: ReferendumWhereUniqueInput) => ReferendumNullablePromise;
    referendums: (args?: {
        where?: ReferendumWhereInput;
        orderBy?: ReferendumOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Referendum>;
    referendumsConnection: (args?: {
        where?: ReferendumWhereInput;
        orderBy?: ReferendumOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ReferendumConnectionPromise;
    referendumStatus: (where: ReferendumStatusWhereUniqueInput) => ReferendumStatusNullablePromise;
    referendumStatuses: (args?: {
        where?: ReferendumStatusWhereInput;
        orderBy?: ReferendumStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<ReferendumStatus>;
    referendumStatusesConnection: (args?: {
        where?: ReferendumStatusWhereInput;
        orderBy?: ReferendumStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ReferendumStatusConnectionPromise;
    reward: (where: RewardWhereUniqueInput) => RewardNullablePromise;
    rewards: (args?: {
        where?: RewardWhereInput;
        orderBy?: RewardOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Reward>;
    rewardsConnection: (args?: {
        where?: RewardWhereInput;
        orderBy?: RewardOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => RewardConnectionPromise;
    session: (where: SessionWhereUniqueInput) => SessionNullablePromise;
    sessions: (args?: {
        where?: SessionWhereInput;
        orderBy?: SessionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Session>;
    sessionsConnection: (args?: {
        where?: SessionWhereInput;
        orderBy?: SessionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => SessionConnectionPromise;
    slashing: (where: SlashingWhereUniqueInput) => SlashingNullablePromise;
    slashings: (args?: {
        where?: SlashingWhereInput;
        orderBy?: SlashingOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Slashing>;
    slashingsConnection: (args?: {
        where?: SlashingWhereInput;
        orderBy?: SlashingOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => SlashingConnectionPromise;
    stake: (where: StakeWhereUniqueInput) => StakeNullablePromise;
    stakes: (args?: {
        where?: StakeWhereInput;
        orderBy?: StakeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Stake>;
    stakesConnection: (args?: {
        where?: StakeWhereInput;
        orderBy?: StakeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => StakeConnectionPromise;
    totalIssuance: (where: TotalIssuanceWhereUniqueInput) => TotalIssuanceNullablePromise;
    totalIssuances: (args?: {
        where?: TotalIssuanceWhereInput;
        orderBy?: TotalIssuanceOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<TotalIssuance>;
    totalIssuancesConnection: (args?: {
        where?: TotalIssuanceWhereInput;
        orderBy?: TotalIssuanceOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => TotalIssuanceConnectionPromise;
    treasurySpendProposal: (where: TreasurySpendProposalWhereUniqueInput) => TreasurySpendProposalNullablePromise;
    treasurySpendProposals: (args?: {
        where?: TreasurySpendProposalWhereInput;
        orderBy?: TreasurySpendProposalOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<TreasurySpendProposal>;
    treasurySpendProposalsConnection: (args?: {
        where?: TreasurySpendProposalWhereInput;
        orderBy?: TreasurySpendProposalOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => TreasurySpendProposalConnectionPromise;
    treasuryStatus: (where: TreasuryStatusWhereUniqueInput) => TreasuryStatusNullablePromise;
    treasuryStatuses: (args?: {
        where?: TreasuryStatusWhereInput;
        orderBy?: TreasuryStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<TreasuryStatus>;
    treasuryStatusesConnection: (args?: {
        where?: TreasuryStatusWhereInput;
        orderBy?: TreasuryStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => TreasuryStatusConnectionPromise;
    validator: (where: ValidatorWhereUniqueInput) => ValidatorNullablePromise;
    validators: (args?: {
        where?: ValidatorWhereInput;
        orderBy?: ValidatorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Validator>;
    validatorsConnection: (args?: {
        where?: ValidatorWhereInput;
        orderBy?: ValidatorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ValidatorConnectionPromise;
    node: (args: {
        id: ID_Output;
    }) => Node;
    /**
     * Mutations
     */
    createBlockIndex: (data: BlockIndexCreateInput) => BlockIndexPromise;
    updateBlockIndex: (args: {
        data: BlockIndexUpdateInput;
        where: BlockIndexWhereUniqueInput;
    }) => BlockIndexPromise;
    updateManyBlockIndexes: (args: {
        data: BlockIndexUpdateManyMutationInput;
        where?: BlockIndexWhereInput;
    }) => BatchPayloadPromise;
    upsertBlockIndex: (args: {
        where: BlockIndexWhereUniqueInput;
        create: BlockIndexCreateInput;
        update: BlockIndexUpdateInput;
    }) => BlockIndexPromise;
    deleteBlockIndex: (where: BlockIndexWhereUniqueInput) => BlockIndexPromise;
    deleteManyBlockIndexes: (where?: BlockIndexWhereInput) => BatchPayloadPromise;
    createBlockNumber: (data: BlockNumberCreateInput) => BlockNumberPromise;
    updateBlockNumber: (args: {
        data: BlockNumberUpdateInput;
        where: BlockNumberWhereUniqueInput;
    }) => BlockNumberPromise;
    updateManyBlockNumbers: (args: {
        data: BlockNumberUpdateManyMutationInput;
        where?: BlockNumberWhereInput;
    }) => BatchPayloadPromise;
    upsertBlockNumber: (args: {
        where: BlockNumberWhereUniqueInput;
        create: BlockNumberCreateInput;
        update: BlockNumberUpdateInput;
    }) => BlockNumberPromise;
    deleteBlockNumber: (where: BlockNumberWhereUniqueInput) => BlockNumberPromise;
    deleteManyBlockNumbers: (where?: BlockNumberWhereInput) => BatchPayloadPromise;
    createCouncil: (data: CouncilCreateInput) => CouncilPromise;
    updateCouncil: (args: {
        data: CouncilUpdateInput;
        where: CouncilWhereUniqueInput;
    }) => CouncilPromise;
    upsertCouncil: (args: {
        where: CouncilWhereUniqueInput;
        create: CouncilCreateInput;
        update: CouncilUpdateInput;
    }) => CouncilPromise;
    deleteCouncil: (where: CouncilWhereUniqueInput) => CouncilPromise;
    deleteManyCouncils: (where?: CouncilWhereInput) => BatchPayloadPromise;
    createCouncilMember: (data: CouncilMemberCreateInput) => CouncilMemberPromise;
    updateCouncilMember: (args: {
        data: CouncilMemberUpdateInput;
        where: CouncilMemberWhereUniqueInput;
    }) => CouncilMemberPromise;
    updateManyCouncilMembers: (args: {
        data: CouncilMemberUpdateManyMutationInput;
        where?: CouncilMemberWhereInput;
    }) => BatchPayloadPromise;
    upsertCouncilMember: (args: {
        where: CouncilMemberWhereUniqueInput;
        create: CouncilMemberCreateInput;
        update: CouncilMemberUpdateInput;
    }) => CouncilMemberPromise;
    deleteCouncilMember: (where: CouncilMemberWhereUniqueInput) => CouncilMemberPromise;
    deleteManyCouncilMembers: (where?: CouncilMemberWhereInput) => BatchPayloadPromise;
    createEra: (data: EraCreateInput) => EraPromise;
    updateEra: (args: {
        data: EraUpdateInput;
        where: EraWhereUniqueInput;
    }) => EraPromise;
    updateManyEras: (args: {
        data: EraUpdateManyMutationInput;
        where?: EraWhereInput;
    }) => BatchPayloadPromise;
    upsertEra: (args: {
        where: EraWhereUniqueInput;
        create: EraCreateInput;
        update: EraUpdateInput;
    }) => EraPromise;
    deleteEra: (where: EraWhereUniqueInput) => EraPromise;
    deleteManyEras: (where?: EraWhereInput) => BatchPayloadPromise;
    createHeartBeat: (data: HeartBeatCreateInput) => HeartBeatPromise;
    updateHeartBeat: (args: {
        data: HeartBeatUpdateInput;
        where: HeartBeatWhereUniqueInput;
    }) => HeartBeatPromise;
    updateManyHeartBeats: (args: {
        data: HeartBeatUpdateManyMutationInput;
        where?: HeartBeatWhereInput;
    }) => BatchPayloadPromise;
    upsertHeartBeat: (args: {
        where: HeartBeatWhereUniqueInput;
        create: HeartBeatCreateInput;
        update: HeartBeatUpdateInput;
    }) => HeartBeatPromise;
    deleteHeartBeat: (where: HeartBeatWhereUniqueInput) => HeartBeatPromise;
    deleteManyHeartBeats: (where?: HeartBeatWhereInput) => BatchPayloadPromise;
    createMotion: (data: MotionCreateInput) => MotionPromise;
    updateMotion: (args: {
        data: MotionUpdateInput;
        where: MotionWhereUniqueInput;
    }) => MotionPromise;
    updateManyMotions: (args: {
        data: MotionUpdateManyMutationInput;
        where?: MotionWhereInput;
    }) => BatchPayloadPromise;
    upsertMotion: (args: {
        where: MotionWhereUniqueInput;
        create: MotionCreateInput;
        update: MotionUpdateInput;
    }) => MotionPromise;
    deleteMotion: (where: MotionWhereUniqueInput) => MotionPromise;
    deleteManyMotions: (where?: MotionWhereInput) => BatchPayloadPromise;
    createMotionProposalArgument: (data: MotionProposalArgumentCreateInput) => MotionProposalArgumentPromise;
    updateMotionProposalArgument: (args: {
        data: MotionProposalArgumentUpdateInput;
        where: MotionProposalArgumentWhereUniqueInput;
    }) => MotionProposalArgumentPromise;
    updateManyMotionProposalArguments: (args: {
        data: MotionProposalArgumentUpdateManyMutationInput;
        where?: MotionProposalArgumentWhereInput;
    }) => BatchPayloadPromise;
    upsertMotionProposalArgument: (args: {
        where: MotionProposalArgumentWhereUniqueInput;
        create: MotionProposalArgumentCreateInput;
        update: MotionProposalArgumentUpdateInput;
    }) => MotionProposalArgumentPromise;
    deleteMotionProposalArgument: (where: MotionProposalArgumentWhereUniqueInput) => MotionProposalArgumentPromise;
    deleteManyMotionProposalArguments: (where?: MotionProposalArgumentWhereInput) => BatchPayloadPromise;
    createMotionStatus: (data: MotionStatusCreateInput) => MotionStatusPromise;
    updateMotionStatus: (args: {
        data: MotionStatusUpdateInput;
        where: MotionStatusWhereUniqueInput;
    }) => MotionStatusPromise;
    updateManyMotionStatuses: (args: {
        data: MotionStatusUpdateManyMutationInput;
        where?: MotionStatusWhereInput;
    }) => BatchPayloadPromise;
    upsertMotionStatus: (args: {
        where: MotionStatusWhereUniqueInput;
        create: MotionStatusCreateInput;
        update: MotionStatusUpdateInput;
    }) => MotionStatusPromise;
    deleteMotionStatus: (where: MotionStatusWhereUniqueInput) => MotionStatusPromise;
    deleteManyMotionStatuses: (where?: MotionStatusWhereInput) => BatchPayloadPromise;
    createNomination: (data: NominationCreateInput) => NominationPromise;
    updateNomination: (args: {
        data: NominationUpdateInput;
        where: NominationWhereUniqueInput;
    }) => NominationPromise;
    updateManyNominations: (args: {
        data: NominationUpdateManyMutationInput;
        where?: NominationWhereInput;
    }) => BatchPayloadPromise;
    upsertNomination: (args: {
        where: NominationWhereUniqueInput;
        create: NominationCreateInput;
        update: NominationUpdateInput;
    }) => NominationPromise;
    deleteNomination: (where: NominationWhereUniqueInput) => NominationPromise;
    deleteManyNominations: (where?: NominationWhereInput) => BatchPayloadPromise;
    createOfflineValidator: (data: OfflineValidatorCreateInput) => OfflineValidatorPromise;
    updateOfflineValidator: (args: {
        data: OfflineValidatorUpdateInput;
        where: OfflineValidatorWhereUniqueInput;
    }) => OfflineValidatorPromise;
    updateManyOfflineValidators: (args: {
        data: OfflineValidatorUpdateManyMutationInput;
        where?: OfflineValidatorWhereInput;
    }) => BatchPayloadPromise;
    upsertOfflineValidator: (args: {
        where: OfflineValidatorWhereUniqueInput;
        create: OfflineValidatorCreateInput;
        update: OfflineValidatorUpdateInput;
    }) => OfflineValidatorPromise;
    deleteOfflineValidator: (where: OfflineValidatorWhereUniqueInput) => OfflineValidatorPromise;
    deleteManyOfflineValidators: (where?: OfflineValidatorWhereInput) => BatchPayloadPromise;
    createPreimage: (data: PreimageCreateInput) => PreimagePromise;
    updatePreimage: (args: {
        data: PreimageUpdateInput;
        where: PreimageWhereUniqueInput;
    }) => PreimagePromise;
    updateManyPreimages: (args: {
        data: PreimageUpdateManyMutationInput;
        where?: PreimageWhereInput;
    }) => BatchPayloadPromise;
    upsertPreimage: (args: {
        where: PreimageWhereUniqueInput;
        create: PreimageCreateInput;
        update: PreimageUpdateInput;
    }) => PreimagePromise;
    deletePreimage: (where: PreimageWhereUniqueInput) => PreimagePromise;
    deleteManyPreimages: (where?: PreimageWhereInput) => BatchPayloadPromise;
    createPreimageArgument: (data: PreimageArgumentCreateInput) => PreimageArgumentPromise;
    updatePreimageArgument: (args: {
        data: PreimageArgumentUpdateInput;
        where: PreimageArgumentWhereUniqueInput;
    }) => PreimageArgumentPromise;
    updateManyPreimageArguments: (args: {
        data: PreimageArgumentUpdateManyMutationInput;
        where?: PreimageArgumentWhereInput;
    }) => BatchPayloadPromise;
    upsertPreimageArgument: (args: {
        where: PreimageArgumentWhereUniqueInput;
        create: PreimageArgumentCreateInput;
        update: PreimageArgumentUpdateInput;
    }) => PreimageArgumentPromise;
    deletePreimageArgument: (where: PreimageArgumentWhereUniqueInput) => PreimageArgumentPromise;
    deleteManyPreimageArguments: (where?: PreimageArgumentWhereInput) => BatchPayloadPromise;
    createPreimageStatus: (data: PreimageStatusCreateInput) => PreimageStatusPromise;
    updatePreimageStatus: (args: {
        data: PreimageStatusUpdateInput;
        where: PreimageStatusWhereUniqueInput;
    }) => PreimageStatusPromise;
    updateManyPreimageStatuses: (args: {
        data: PreimageStatusUpdateManyMutationInput;
        where?: PreimageStatusWhereInput;
    }) => BatchPayloadPromise;
    upsertPreimageStatus: (args: {
        where: PreimageStatusWhereUniqueInput;
        create: PreimageStatusCreateInput;
        update: PreimageStatusUpdateInput;
    }) => PreimageStatusPromise;
    deletePreimageStatus: (where: PreimageStatusWhereUniqueInput) => PreimageStatusPromise;
    deleteManyPreimageStatuses: (where?: PreimageStatusWhereInput) => BatchPayloadPromise;
    createProposal: (data: ProposalCreateInput) => ProposalPromise;
    updateProposal: (args: {
        data: ProposalUpdateInput;
        where: ProposalWhereUniqueInput;
    }) => ProposalPromise;
    updateManyProposals: (args: {
        data: ProposalUpdateManyMutationInput;
        where?: ProposalWhereInput;
    }) => BatchPayloadPromise;
    upsertProposal: (args: {
        where: ProposalWhereUniqueInput;
        create: ProposalCreateInput;
        update: ProposalUpdateInput;
    }) => ProposalPromise;
    deleteProposal: (where: ProposalWhereUniqueInput) => ProposalPromise;
    deleteManyProposals: (where?: ProposalWhereInput) => BatchPayloadPromise;
    createProposalStatus: (data: ProposalStatusCreateInput) => ProposalStatusPromise;
    updateProposalStatus: (args: {
        data: ProposalStatusUpdateInput;
        where: ProposalStatusWhereUniqueInput;
    }) => ProposalStatusPromise;
    updateManyProposalStatuses: (args: {
        data: ProposalStatusUpdateManyMutationInput;
        where?: ProposalStatusWhereInput;
    }) => BatchPayloadPromise;
    upsertProposalStatus: (args: {
        where: ProposalStatusWhereUniqueInput;
        create: ProposalStatusCreateInput;
        update: ProposalStatusUpdateInput;
    }) => ProposalStatusPromise;
    deleteProposalStatus: (where: ProposalStatusWhereUniqueInput) => ProposalStatusPromise;
    deleteManyProposalStatuses: (where?: ProposalStatusWhereInput) => BatchPayloadPromise;
    createReferendum: (data: ReferendumCreateInput) => ReferendumPromise;
    updateReferendum: (args: {
        data: ReferendumUpdateInput;
        where: ReferendumWhereUniqueInput;
    }) => ReferendumPromise;
    updateManyReferendums: (args: {
        data: ReferendumUpdateManyMutationInput;
        where?: ReferendumWhereInput;
    }) => BatchPayloadPromise;
    upsertReferendum: (args: {
        where: ReferendumWhereUniqueInput;
        create: ReferendumCreateInput;
        update: ReferendumUpdateInput;
    }) => ReferendumPromise;
    deleteReferendum: (where: ReferendumWhereUniqueInput) => ReferendumPromise;
    deleteManyReferendums: (where?: ReferendumWhereInput) => BatchPayloadPromise;
    createReferendumStatus: (data: ReferendumStatusCreateInput) => ReferendumStatusPromise;
    updateReferendumStatus: (args: {
        data: ReferendumStatusUpdateInput;
        where: ReferendumStatusWhereUniqueInput;
    }) => ReferendumStatusPromise;
    updateManyReferendumStatuses: (args: {
        data: ReferendumStatusUpdateManyMutationInput;
        where?: ReferendumStatusWhereInput;
    }) => BatchPayloadPromise;
    upsertReferendumStatus: (args: {
        where: ReferendumStatusWhereUniqueInput;
        create: ReferendumStatusCreateInput;
        update: ReferendumStatusUpdateInput;
    }) => ReferendumStatusPromise;
    deleteReferendumStatus: (where: ReferendumStatusWhereUniqueInput) => ReferendumStatusPromise;
    deleteManyReferendumStatuses: (where?: ReferendumStatusWhereInput) => BatchPayloadPromise;
    createReward: (data: RewardCreateInput) => RewardPromise;
    updateReward: (args: {
        data: RewardUpdateInput;
        where: RewardWhereUniqueInput;
    }) => RewardPromise;
    updateManyRewards: (args: {
        data: RewardUpdateManyMutationInput;
        where?: RewardWhereInput;
    }) => BatchPayloadPromise;
    upsertReward: (args: {
        where: RewardWhereUniqueInput;
        create: RewardCreateInput;
        update: RewardUpdateInput;
    }) => RewardPromise;
    deleteReward: (where: RewardWhereUniqueInput) => RewardPromise;
    deleteManyRewards: (where?: RewardWhereInput) => BatchPayloadPromise;
    createSession: (data: SessionCreateInput) => SessionPromise;
    updateSession: (args: {
        data: SessionUpdateInput;
        where: SessionWhereUniqueInput;
    }) => SessionPromise;
    updateManySessions: (args: {
        data: SessionUpdateManyMutationInput;
        where?: SessionWhereInput;
    }) => BatchPayloadPromise;
    upsertSession: (args: {
        where: SessionWhereUniqueInput;
        create: SessionCreateInput;
        update: SessionUpdateInput;
    }) => SessionPromise;
    deleteSession: (where: SessionWhereUniqueInput) => SessionPromise;
    deleteManySessions: (where?: SessionWhereInput) => BatchPayloadPromise;
    createSlashing: (data: SlashingCreateInput) => SlashingPromise;
    updateSlashing: (args: {
        data: SlashingUpdateInput;
        where: SlashingWhereUniqueInput;
    }) => SlashingPromise;
    updateManySlashings: (args: {
        data: SlashingUpdateManyMutationInput;
        where?: SlashingWhereInput;
    }) => BatchPayloadPromise;
    upsertSlashing: (args: {
        where: SlashingWhereUniqueInput;
        create: SlashingCreateInput;
        update: SlashingUpdateInput;
    }) => SlashingPromise;
    deleteSlashing: (where: SlashingWhereUniqueInput) => SlashingPromise;
    deleteManySlashings: (where?: SlashingWhereInput) => BatchPayloadPromise;
    createStake: (data: StakeCreateInput) => StakePromise;
    updateStake: (args: {
        data: StakeUpdateInput;
        where: StakeWhereUniqueInput;
    }) => StakePromise;
    updateManyStakes: (args: {
        data: StakeUpdateManyMutationInput;
        where?: StakeWhereInput;
    }) => BatchPayloadPromise;
    upsertStake: (args: {
        where: StakeWhereUniqueInput;
        create: StakeCreateInput;
        update: StakeUpdateInput;
    }) => StakePromise;
    deleteStake: (where: StakeWhereUniqueInput) => StakePromise;
    deleteManyStakes: (where?: StakeWhereInput) => BatchPayloadPromise;
    createTotalIssuance: (data: TotalIssuanceCreateInput) => TotalIssuancePromise;
    updateTotalIssuance: (args: {
        data: TotalIssuanceUpdateInput;
        where: TotalIssuanceWhereUniqueInput;
    }) => TotalIssuancePromise;
    updateManyTotalIssuances: (args: {
        data: TotalIssuanceUpdateManyMutationInput;
        where?: TotalIssuanceWhereInput;
    }) => BatchPayloadPromise;
    upsertTotalIssuance: (args: {
        where: TotalIssuanceWhereUniqueInput;
        create: TotalIssuanceCreateInput;
        update: TotalIssuanceUpdateInput;
    }) => TotalIssuancePromise;
    deleteTotalIssuance: (where: TotalIssuanceWhereUniqueInput) => TotalIssuancePromise;
    deleteManyTotalIssuances: (where?: TotalIssuanceWhereInput) => BatchPayloadPromise;
    createTreasurySpendProposal: (data: TreasurySpendProposalCreateInput) => TreasurySpendProposalPromise;
    updateTreasurySpendProposal: (args: {
        data: TreasurySpendProposalUpdateInput;
        where: TreasurySpendProposalWhereUniqueInput;
    }) => TreasurySpendProposalPromise;
    updateManyTreasurySpendProposals: (args: {
        data: TreasurySpendProposalUpdateManyMutationInput;
        where?: TreasurySpendProposalWhereInput;
    }) => BatchPayloadPromise;
    upsertTreasurySpendProposal: (args: {
        where: TreasurySpendProposalWhereUniqueInput;
        create: TreasurySpendProposalCreateInput;
        update: TreasurySpendProposalUpdateInput;
    }) => TreasurySpendProposalPromise;
    deleteTreasurySpendProposal: (where: TreasurySpendProposalWhereUniqueInput) => TreasurySpendProposalPromise;
    deleteManyTreasurySpendProposals: (where?: TreasurySpendProposalWhereInput) => BatchPayloadPromise;
    createTreasuryStatus: (data: TreasuryStatusCreateInput) => TreasuryStatusPromise;
    updateTreasuryStatus: (args: {
        data: TreasuryStatusUpdateInput;
        where: TreasuryStatusWhereUniqueInput;
    }) => TreasuryStatusPromise;
    updateManyTreasuryStatuses: (args: {
        data: TreasuryStatusUpdateManyMutationInput;
        where?: TreasuryStatusWhereInput;
    }) => BatchPayloadPromise;
    upsertTreasuryStatus: (args: {
        where: TreasuryStatusWhereUniqueInput;
        create: TreasuryStatusCreateInput;
        update: TreasuryStatusUpdateInput;
    }) => TreasuryStatusPromise;
    deleteTreasuryStatus: (where: TreasuryStatusWhereUniqueInput) => TreasuryStatusPromise;
    deleteManyTreasuryStatuses: (where?: TreasuryStatusWhereInput) => BatchPayloadPromise;
    createValidator: (data: ValidatorCreateInput) => ValidatorPromise;
    updateValidator: (args: {
        data: ValidatorUpdateInput;
        where: ValidatorWhereUniqueInput;
    }) => ValidatorPromise;
    updateManyValidators: (args: {
        data: ValidatorUpdateManyMutationInput;
        where?: ValidatorWhereInput;
    }) => BatchPayloadPromise;
    upsertValidator: (args: {
        where: ValidatorWhereUniqueInput;
        create: ValidatorCreateInput;
        update: ValidatorUpdateInput;
    }) => ValidatorPromise;
    deleteValidator: (where: ValidatorWhereUniqueInput) => ValidatorPromise;
    deleteManyValidators: (where?: ValidatorWhereInput) => BatchPayloadPromise;
    /**
     * Subscriptions
     */
    $subscribe: Subscription;
}
export interface Subscription {
    blockIndex: (where?: BlockIndexSubscriptionWhereInput) => BlockIndexSubscriptionPayloadSubscription;
    blockNumber: (where?: BlockNumberSubscriptionWhereInput) => BlockNumberSubscriptionPayloadSubscription;
    council: (where?: CouncilSubscriptionWhereInput) => CouncilSubscriptionPayloadSubscription;
    councilMember: (where?: CouncilMemberSubscriptionWhereInput) => CouncilMemberSubscriptionPayloadSubscription;
    era: (where?: EraSubscriptionWhereInput) => EraSubscriptionPayloadSubscription;
    heartBeat: (where?: HeartBeatSubscriptionWhereInput) => HeartBeatSubscriptionPayloadSubscription;
    motion: (where?: MotionSubscriptionWhereInput) => MotionSubscriptionPayloadSubscription;
    motionProposalArgument: (where?: MotionProposalArgumentSubscriptionWhereInput) => MotionProposalArgumentSubscriptionPayloadSubscription;
    motionStatus: (where?: MotionStatusSubscriptionWhereInput) => MotionStatusSubscriptionPayloadSubscription;
    nomination: (where?: NominationSubscriptionWhereInput) => NominationSubscriptionPayloadSubscription;
    offlineValidator: (where?: OfflineValidatorSubscriptionWhereInput) => OfflineValidatorSubscriptionPayloadSubscription;
    preimage: (where?: PreimageSubscriptionWhereInput) => PreimageSubscriptionPayloadSubscription;
    preimageArgument: (where?: PreimageArgumentSubscriptionWhereInput) => PreimageArgumentSubscriptionPayloadSubscription;
    preimageStatus: (where?: PreimageStatusSubscriptionWhereInput) => PreimageStatusSubscriptionPayloadSubscription;
    proposal: (where?: ProposalSubscriptionWhereInput) => ProposalSubscriptionPayloadSubscription;
    proposalStatus: (where?: ProposalStatusSubscriptionWhereInput) => ProposalStatusSubscriptionPayloadSubscription;
    referendum: (where?: ReferendumSubscriptionWhereInput) => ReferendumSubscriptionPayloadSubscription;
    referendumStatus: (where?: ReferendumStatusSubscriptionWhereInput) => ReferendumStatusSubscriptionPayloadSubscription;
    reward: (where?: RewardSubscriptionWhereInput) => RewardSubscriptionPayloadSubscription;
    session: (where?: SessionSubscriptionWhereInput) => SessionSubscriptionPayloadSubscription;
    slashing: (where?: SlashingSubscriptionWhereInput) => SlashingSubscriptionPayloadSubscription;
    stake: (where?: StakeSubscriptionWhereInput) => StakeSubscriptionPayloadSubscription;
    totalIssuance: (where?: TotalIssuanceSubscriptionWhereInput) => TotalIssuanceSubscriptionPayloadSubscription;
    treasurySpendProposal: (where?: TreasurySpendProposalSubscriptionWhereInput) => TreasurySpendProposalSubscriptionPayloadSubscription;
    treasuryStatus: (where?: TreasuryStatusSubscriptionWhereInput) => TreasuryStatusSubscriptionPayloadSubscription;
    validator: (where?: ValidatorSubscriptionWhereInput) => ValidatorSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
/**
 * Types
 */
export declare type BlockIndexOrderByInput = "id_ASC" | "id_DESC" | "identifier_ASC" | "identifier_DESC" | "startFrom_ASC" | "startFrom_DESC" | "index_ASC" | "index_DESC";
export declare type BlockNumberOrderByInput = "id_ASC" | "id_DESC" | "number_ASC" | "number_DESC" | "authoredBy_ASC" | "authoredBy_DESC" | "startDateTime_ASC" | "startDateTime_DESC" | "hash_ASC" | "hash_DESC";
export declare type CouncilMemberOrderByInput = "id_ASC" | "id_DESC" | "address_ASC" | "address_DESC";
export declare type CouncilOrderByInput = "id_ASC" | "id_DESC";
export declare type EraOrderByInput = "id_ASC" | "id_DESC" | "index_ASC" | "index_DESC" | "totalPoints_ASC" | "totalPoints_DESC";
export declare type HeartBeatOrderByInput = "id_ASC" | "id_DESC" | "authorityId_ASC" | "authorityId_DESC";
export declare type MotionProposalArgumentOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "value_ASC" | "value_DESC";
export declare type MotionStatusOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "uniqueStatus_ASC" | "uniqueStatus_DESC";
export declare type ProposalStatusOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "uniqueStatus_ASC" | "uniqueStatus_DESC";
export declare type PreimageArgumentOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "value_ASC" | "value_DESC";
export declare type PreimageStatusOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC";
export declare type ReferendumStatusOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "uniqueStatus_ASC" | "uniqueStatus_DESC";
export declare type TreasuryStatusOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "uniqueStatus_ASC" | "uniqueStatus_DESC";
export declare type MotionOrderByInput = "id_ASC" | "id_DESC" | "author_ASC" | "author_DESC" | "memberCount_ASC" | "memberCount_DESC" | "metaDescription_ASC" | "metaDescription_DESC" | "method_ASC" | "method_DESC" | "motionProposalHash_ASC" | "motionProposalHash_DESC" | "motionProposalId_ASC" | "motionProposalId_DESC" | "preimageHash_ASC" | "preimageHash_DESC" | "section_ASC" | "section_DESC";
export declare type NominationOrderByInput = "id_ASC" | "id_DESC" | "validatorController_ASC" | "validatorController_DESC" | "validatorStash_ASC" | "validatorStash_DESC" | "nominatorController_ASC" | "nominatorController_DESC" | "nominatorStash_ASC" | "nominatorStash_DESC" | "stakedAmount_ASC" | "stakedAmount_DESC";
export declare type OfflineValidatorOrderByInput = "id_ASC" | "id_DESC" | "validatorId_ASC" | "validatorId_DESC" | "total_ASC" | "total_DESC" | "own_ASC" | "own_DESC";
export declare type PreimageOrderByInput = "id_ASC" | "id_DESC" | "author_ASC" | "author_DESC" | "depositAmount_ASC" | "depositAmount_DESC" | "hash_ASC" | "hash_DESC" | "metaDescription_ASC" | "metaDescription_DESC" | "method_ASC" | "method_DESC" | "section_ASC" | "section_DESC";
export declare type ProposalOrderByInput = "id_ASC" | "id_DESC" | "author_ASC" | "author_DESC" | "depositAmount_ASC" | "depositAmount_DESC" | "preimageHash_ASC" | "preimageHash_DESC" | "proposalId_ASC" | "proposalId_DESC";
export declare type ReferendumOrderByInput = "id_ASC" | "id_DESC" | "delay_ASC" | "delay_DESC" | "end_ASC" | "end_DESC" | "preimageHash_ASC" | "preimageHash_DESC" | "referendumId_ASC" | "referendumId_DESC" | "voteThreshold_ASC" | "voteThreshold_DESC";
export declare type RewardOrderByInput = "id_ASC" | "id_DESC" | "treasuryReward_ASC" | "treasuryReward_DESC" | "validatorReward_ASC" | "validatorReward_DESC";
export declare type SessionOrderByInput = "id_ASC" | "id_DESC" | "index_ASC" | "index_DESC";
export declare type SlashingOrderByInput = "id_ASC" | "id_DESC" | "who_ASC" | "who_DESC" | "amount_ASC" | "amount_DESC";
export declare type StakeOrderByInput = "id_ASC" | "id_DESC" | "totalStake_ASC" | "totalStake_DESC";
export declare type TotalIssuanceOrderByInput = "id_ASC" | "id_DESC" | "amount_ASC" | "amount_DESC";
export declare type TreasurySpendProposalOrderByInput = "id_ASC" | "id_DESC" | "proposer_ASC" | "proposer_DESC" | "beneficiary_ASC" | "beneficiary_DESC" | "value_ASC" | "value_DESC" | "bond_ASC" | "bond_DESC" | "treasuryProposalId_ASC" | "treasuryProposalId_DESC";
export declare type ValidatorOrderByInput = "id_ASC" | "id_DESC" | "controller_ASC" | "controller_DESC" | "stash_ASC" | "stash_DESC" | "preferences_ASC" | "preferences_DESC";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export declare type BlockIndexWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    identifier?: Maybe<String>;
}>;
export interface BlockIndexWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    identifier?: Maybe<String>;
    identifier_not?: Maybe<String>;
    identifier_in?: Maybe<String[] | String>;
    identifier_not_in?: Maybe<String[] | String>;
    identifier_lt?: Maybe<String>;
    identifier_lte?: Maybe<String>;
    identifier_gt?: Maybe<String>;
    identifier_gte?: Maybe<String>;
    identifier_contains?: Maybe<String>;
    identifier_not_contains?: Maybe<String>;
    identifier_starts_with?: Maybe<String>;
    identifier_not_starts_with?: Maybe<String>;
    identifier_ends_with?: Maybe<String>;
    identifier_not_ends_with?: Maybe<String>;
    startFrom?: Maybe<Int>;
    startFrom_not?: Maybe<Int>;
    startFrom_in?: Maybe<Int[] | Int>;
    startFrom_not_in?: Maybe<Int[] | Int>;
    startFrom_lt?: Maybe<Int>;
    startFrom_lte?: Maybe<Int>;
    startFrom_gt?: Maybe<Int>;
    startFrom_gte?: Maybe<Int>;
    index?: Maybe<Int>;
    index_not?: Maybe<Int>;
    index_in?: Maybe<Int[] | Int>;
    index_not_in?: Maybe<Int[] | Int>;
    index_lt?: Maybe<Int>;
    index_lte?: Maybe<Int>;
    index_gt?: Maybe<Int>;
    index_gte?: Maybe<Int>;
    AND?: Maybe<BlockIndexWhereInput[] | BlockIndexWhereInput>;
    OR?: Maybe<BlockIndexWhereInput[] | BlockIndexWhereInput>;
    NOT?: Maybe<BlockIndexWhereInput[] | BlockIndexWhereInput>;
}
export declare type BlockNumberWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    number?: Maybe<Int>;
    hash?: Maybe<String>;
}>;
export interface BlockNumberWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    number?: Maybe<Int>;
    number_not?: Maybe<Int>;
    number_in?: Maybe<Int[] | Int>;
    number_not_in?: Maybe<Int[] | Int>;
    number_lt?: Maybe<Int>;
    number_lte?: Maybe<Int>;
    number_gt?: Maybe<Int>;
    number_gte?: Maybe<Int>;
    authoredBy?: Maybe<String>;
    authoredBy_not?: Maybe<String>;
    authoredBy_in?: Maybe<String[] | String>;
    authoredBy_not_in?: Maybe<String[] | String>;
    authoredBy_lt?: Maybe<String>;
    authoredBy_lte?: Maybe<String>;
    authoredBy_gt?: Maybe<String>;
    authoredBy_gte?: Maybe<String>;
    authoredBy_contains?: Maybe<String>;
    authoredBy_not_contains?: Maybe<String>;
    authoredBy_starts_with?: Maybe<String>;
    authoredBy_not_starts_with?: Maybe<String>;
    authoredBy_ends_with?: Maybe<String>;
    authoredBy_not_ends_with?: Maybe<String>;
    startDateTime?: Maybe<DateTimeInput>;
    startDateTime_not?: Maybe<DateTimeInput>;
    startDateTime_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    startDateTime_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    startDateTime_lt?: Maybe<DateTimeInput>;
    startDateTime_lte?: Maybe<DateTimeInput>;
    startDateTime_gt?: Maybe<DateTimeInput>;
    startDateTime_gte?: Maybe<DateTimeInput>;
    hash?: Maybe<String>;
    hash_not?: Maybe<String>;
    hash_in?: Maybe<String[] | String>;
    hash_not_in?: Maybe<String[] | String>;
    hash_lt?: Maybe<String>;
    hash_lte?: Maybe<String>;
    hash_gt?: Maybe<String>;
    hash_gte?: Maybe<String>;
    hash_contains?: Maybe<String>;
    hash_not_contains?: Maybe<String>;
    hash_starts_with?: Maybe<String>;
    hash_not_starts_with?: Maybe<String>;
    hash_ends_with?: Maybe<String>;
    hash_not_ends_with?: Maybe<String>;
    AND?: Maybe<BlockNumberWhereInput[] | BlockNumberWhereInput>;
    OR?: Maybe<BlockNumberWhereInput[] | BlockNumberWhereInput>;
    NOT?: Maybe<BlockNumberWhereInput[] | BlockNumberWhereInput>;
}
export declare type CouncilWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface CouncilMemberWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    address?: Maybe<String>;
    address_not?: Maybe<String>;
    address_in?: Maybe<String[] | String>;
    address_not_in?: Maybe<String[] | String>;
    address_lt?: Maybe<String>;
    address_lte?: Maybe<String>;
    address_gt?: Maybe<String>;
    address_gte?: Maybe<String>;
    address_contains?: Maybe<String>;
    address_not_contains?: Maybe<String>;
    address_starts_with?: Maybe<String>;
    address_not_starts_with?: Maybe<String>;
    address_ends_with?: Maybe<String>;
    address_not_ends_with?: Maybe<String>;
    councils_every?: Maybe<CouncilWhereInput>;
    councils_some?: Maybe<CouncilWhereInput>;
    councils_none?: Maybe<CouncilWhereInput>;
    AND?: Maybe<CouncilMemberWhereInput[] | CouncilMemberWhereInput>;
    OR?: Maybe<CouncilMemberWhereInput[] | CouncilMemberWhereInput>;
    NOT?: Maybe<CouncilMemberWhereInput[] | CouncilMemberWhereInput>;
}
export interface CouncilWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    members_every?: Maybe<CouncilMemberWhereInput>;
    members_some?: Maybe<CouncilMemberWhereInput>;
    members_none?: Maybe<CouncilMemberWhereInput>;
    AND?: Maybe<CouncilWhereInput[] | CouncilWhereInput>;
    OR?: Maybe<CouncilWhereInput[] | CouncilWhereInput>;
    NOT?: Maybe<CouncilWhereInput[] | CouncilWhereInput>;
}
export declare type CouncilMemberWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    address?: Maybe<String>;
}>;
export declare type EraWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    index?: Maybe<Int>;
}>;
export interface EraWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    index?: Maybe<Int>;
    index_not?: Maybe<Int>;
    index_in?: Maybe<Int[] | Int>;
    index_not_in?: Maybe<Int[] | Int>;
    index_lt?: Maybe<Int>;
    index_lte?: Maybe<Int>;
    index_gt?: Maybe<Int>;
    index_gte?: Maybe<Int>;
    eraStartSessionIndex?: Maybe<SessionWhereInput>;
    totalPoints?: Maybe<String>;
    totalPoints_not?: Maybe<String>;
    totalPoints_in?: Maybe<String[] | String>;
    totalPoints_not_in?: Maybe<String[] | String>;
    totalPoints_lt?: Maybe<String>;
    totalPoints_lte?: Maybe<String>;
    totalPoints_gt?: Maybe<String>;
    totalPoints_gte?: Maybe<String>;
    totalPoints_contains?: Maybe<String>;
    totalPoints_not_contains?: Maybe<String>;
    totalPoints_starts_with?: Maybe<String>;
    totalPoints_not_starts_with?: Maybe<String>;
    totalPoints_ends_with?: Maybe<String>;
    totalPoints_not_ends_with?: Maybe<String>;
    AND?: Maybe<EraWhereInput[] | EraWhereInput>;
    OR?: Maybe<EraWhereInput[] | EraWhereInput>;
    NOT?: Maybe<EraWhereInput[] | EraWhereInput>;
}
export interface SessionWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    index?: Maybe<Int>;
    index_not?: Maybe<Int>;
    index_in?: Maybe<Int[] | Int>;
    index_not_in?: Maybe<Int[] | Int>;
    index_lt?: Maybe<Int>;
    index_lte?: Maybe<Int>;
    index_gt?: Maybe<Int>;
    index_gte?: Maybe<Int>;
    start?: Maybe<BlockNumberWhereInput>;
    AND?: Maybe<SessionWhereInput[] | SessionWhereInput>;
    OR?: Maybe<SessionWhereInput[] | SessionWhereInput>;
    NOT?: Maybe<SessionWhereInput[] | SessionWhereInput>;
}
export declare type HeartBeatWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface HeartBeatWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    sessionIndex?: Maybe<SessionWhereInput>;
    authorityId?: Maybe<String>;
    authorityId_not?: Maybe<String>;
    authorityId_in?: Maybe<String[] | String>;
    authorityId_not_in?: Maybe<String[] | String>;
    authorityId_lt?: Maybe<String>;
    authorityId_lte?: Maybe<String>;
    authorityId_gt?: Maybe<String>;
    authorityId_gte?: Maybe<String>;
    authorityId_contains?: Maybe<String>;
    authorityId_not_contains?: Maybe<String>;
    authorityId_starts_with?: Maybe<String>;
    authorityId_not_starts_with?: Maybe<String>;
    authorityId_ends_with?: Maybe<String>;
    authorityId_not_ends_with?: Maybe<String>;
    AND?: Maybe<HeartBeatWhereInput[] | HeartBeatWhereInput>;
    OR?: Maybe<HeartBeatWhereInput[] | HeartBeatWhereInput>;
    NOT?: Maybe<HeartBeatWhereInput[] | HeartBeatWhereInput>;
}
export declare type MotionWhereUniqueInput = AtLeastOne<{
    id: Maybe<Int>;
    motionProposalId?: Maybe<Int>;
}>;
export interface MotionProposalArgumentWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    motion?: Maybe<MotionWhereInput>;
    value?: Maybe<String>;
    value_not?: Maybe<String>;
    value_in?: Maybe<String[] | String>;
    value_not_in?: Maybe<String[] | String>;
    value_lt?: Maybe<String>;
    value_lte?: Maybe<String>;
    value_gt?: Maybe<String>;
    value_gte?: Maybe<String>;
    value_contains?: Maybe<String>;
    value_not_contains?: Maybe<String>;
    value_starts_with?: Maybe<String>;
    value_not_starts_with?: Maybe<String>;
    value_ends_with?: Maybe<String>;
    value_not_ends_with?: Maybe<String>;
    AND?: Maybe<MotionProposalArgumentWhereInput[] | MotionProposalArgumentWhereInput>;
    OR?: Maybe<MotionProposalArgumentWhereInput[] | MotionProposalArgumentWhereInput>;
    NOT?: Maybe<MotionProposalArgumentWhereInput[] | MotionProposalArgumentWhereInput>;
}
export interface MotionWhereInput {
    id?: Maybe<Int>;
    id_not?: Maybe<Int>;
    id_in?: Maybe<Int[] | Int>;
    id_not_in?: Maybe<Int[] | Int>;
    id_lt?: Maybe<Int>;
    id_lte?: Maybe<Int>;
    id_gt?: Maybe<Int>;
    id_gte?: Maybe<Int>;
    author?: Maybe<String>;
    author_not?: Maybe<String>;
    author_in?: Maybe<String[] | String>;
    author_not_in?: Maybe<String[] | String>;
    author_lt?: Maybe<String>;
    author_lte?: Maybe<String>;
    author_gt?: Maybe<String>;
    author_gte?: Maybe<String>;
    author_contains?: Maybe<String>;
    author_not_contains?: Maybe<String>;
    author_starts_with?: Maybe<String>;
    author_not_starts_with?: Maybe<String>;
    author_ends_with?: Maybe<String>;
    author_not_ends_with?: Maybe<String>;
    memberCount?: Maybe<Int>;
    memberCount_not?: Maybe<Int>;
    memberCount_in?: Maybe<Int[] | Int>;
    memberCount_not_in?: Maybe<Int[] | Int>;
    memberCount_lt?: Maybe<Int>;
    memberCount_lte?: Maybe<Int>;
    memberCount_gt?: Maybe<Int>;
    memberCount_gte?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    metaDescription_not?: Maybe<String>;
    metaDescription_in?: Maybe<String[] | String>;
    metaDescription_not_in?: Maybe<String[] | String>;
    metaDescription_lt?: Maybe<String>;
    metaDescription_lte?: Maybe<String>;
    metaDescription_gt?: Maybe<String>;
    metaDescription_gte?: Maybe<String>;
    metaDescription_contains?: Maybe<String>;
    metaDescription_not_contains?: Maybe<String>;
    metaDescription_starts_with?: Maybe<String>;
    metaDescription_not_starts_with?: Maybe<String>;
    metaDescription_ends_with?: Maybe<String>;
    metaDescription_not_ends_with?: Maybe<String>;
    method?: Maybe<String>;
    method_not?: Maybe<String>;
    method_in?: Maybe<String[] | String>;
    method_not_in?: Maybe<String[] | String>;
    method_lt?: Maybe<String>;
    method_lte?: Maybe<String>;
    method_gt?: Maybe<String>;
    method_gte?: Maybe<String>;
    method_contains?: Maybe<String>;
    method_not_contains?: Maybe<String>;
    method_starts_with?: Maybe<String>;
    method_not_starts_with?: Maybe<String>;
    method_ends_with?: Maybe<String>;
    method_not_ends_with?: Maybe<String>;
    motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
    motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
    motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
    motionProposalHash?: Maybe<String>;
    motionProposalHash_not?: Maybe<String>;
    motionProposalHash_in?: Maybe<String[] | String>;
    motionProposalHash_not_in?: Maybe<String[] | String>;
    motionProposalHash_lt?: Maybe<String>;
    motionProposalHash_lte?: Maybe<String>;
    motionProposalHash_gt?: Maybe<String>;
    motionProposalHash_gte?: Maybe<String>;
    motionProposalHash_contains?: Maybe<String>;
    motionProposalHash_not_contains?: Maybe<String>;
    motionProposalHash_starts_with?: Maybe<String>;
    motionProposalHash_not_starts_with?: Maybe<String>;
    motionProposalHash_ends_with?: Maybe<String>;
    motionProposalHash_not_ends_with?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    motionProposalId_not?: Maybe<Int>;
    motionProposalId_in?: Maybe<Int[] | Int>;
    motionProposalId_not_in?: Maybe<Int[] | Int>;
    motionProposalId_lt?: Maybe<Int>;
    motionProposalId_lte?: Maybe<Int>;
    motionProposalId_gt?: Maybe<Int>;
    motionProposalId_gte?: Maybe<Int>;
    motionStatus_every?: Maybe<MotionStatusWhereInput>;
    motionStatus_some?: Maybe<MotionStatusWhereInput>;
    motionStatus_none?: Maybe<MotionStatusWhereInput>;
    preimage?: Maybe<PreimageWhereInput>;
    preimageHash?: Maybe<String>;
    preimageHash_not?: Maybe<String>;
    preimageHash_in?: Maybe<String[] | String>;
    preimageHash_not_in?: Maybe<String[] | String>;
    preimageHash_lt?: Maybe<String>;
    preimageHash_lte?: Maybe<String>;
    preimageHash_gt?: Maybe<String>;
    preimageHash_gte?: Maybe<String>;
    preimageHash_contains?: Maybe<String>;
    preimageHash_not_contains?: Maybe<String>;
    preimageHash_starts_with?: Maybe<String>;
    preimageHash_not_starts_with?: Maybe<String>;
    preimageHash_ends_with?: Maybe<String>;
    preimageHash_not_ends_with?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
    section?: Maybe<String>;
    section_not?: Maybe<String>;
    section_in?: Maybe<String[] | String>;
    section_not_in?: Maybe<String[] | String>;
    section_lt?: Maybe<String>;
    section_lte?: Maybe<String>;
    section_gt?: Maybe<String>;
    section_gte?: Maybe<String>;
    section_contains?: Maybe<String>;
    section_not_contains?: Maybe<String>;
    section_starts_with?: Maybe<String>;
    section_not_starts_with?: Maybe<String>;
    section_ends_with?: Maybe<String>;
    section_not_ends_with?: Maybe<String>;
    AND?: Maybe<MotionWhereInput[] | MotionWhereInput>;
    OR?: Maybe<MotionWhereInput[] | MotionWhereInput>;
    NOT?: Maybe<MotionWhereInput[] | MotionWhereInput>;
}
export interface MotionStatusWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    motion?: Maybe<MotionWhereInput>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<MotionStatusWhereInput[] | MotionStatusWhereInput>;
    OR?: Maybe<MotionStatusWhereInput[] | MotionStatusWhereInput>;
    NOT?: Maybe<MotionStatusWhereInput[] | MotionStatusWhereInput>;
}
export interface PreimageWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    author?: Maybe<String>;
    author_not?: Maybe<String>;
    author_in?: Maybe<String[] | String>;
    author_not_in?: Maybe<String[] | String>;
    author_lt?: Maybe<String>;
    author_lte?: Maybe<String>;
    author_gt?: Maybe<String>;
    author_gte?: Maybe<String>;
    author_contains?: Maybe<String>;
    author_not_contains?: Maybe<String>;
    author_starts_with?: Maybe<String>;
    author_not_starts_with?: Maybe<String>;
    author_ends_with?: Maybe<String>;
    author_not_ends_with?: Maybe<String>;
    depositAmount?: Maybe<String>;
    depositAmount_not?: Maybe<String>;
    depositAmount_in?: Maybe<String[] | String>;
    depositAmount_not_in?: Maybe<String[] | String>;
    depositAmount_lt?: Maybe<String>;
    depositAmount_lte?: Maybe<String>;
    depositAmount_gt?: Maybe<String>;
    depositAmount_gte?: Maybe<String>;
    depositAmount_contains?: Maybe<String>;
    depositAmount_not_contains?: Maybe<String>;
    depositAmount_starts_with?: Maybe<String>;
    depositAmount_not_starts_with?: Maybe<String>;
    depositAmount_ends_with?: Maybe<String>;
    depositAmount_not_ends_with?: Maybe<String>;
    hash?: Maybe<String>;
    hash_not?: Maybe<String>;
    hash_in?: Maybe<String[] | String>;
    hash_not_in?: Maybe<String[] | String>;
    hash_lt?: Maybe<String>;
    hash_lte?: Maybe<String>;
    hash_gt?: Maybe<String>;
    hash_gte?: Maybe<String>;
    hash_contains?: Maybe<String>;
    hash_not_contains?: Maybe<String>;
    hash_starts_with?: Maybe<String>;
    hash_not_starts_with?: Maybe<String>;
    hash_ends_with?: Maybe<String>;
    hash_not_ends_with?: Maybe<String>;
    metaDescription?: Maybe<String>;
    metaDescription_not?: Maybe<String>;
    metaDescription_in?: Maybe<String[] | String>;
    metaDescription_not_in?: Maybe<String[] | String>;
    metaDescription_lt?: Maybe<String>;
    metaDescription_lte?: Maybe<String>;
    metaDescription_gt?: Maybe<String>;
    metaDescription_gte?: Maybe<String>;
    metaDescription_contains?: Maybe<String>;
    metaDescription_not_contains?: Maybe<String>;
    metaDescription_starts_with?: Maybe<String>;
    metaDescription_not_starts_with?: Maybe<String>;
    metaDescription_ends_with?: Maybe<String>;
    metaDescription_not_ends_with?: Maybe<String>;
    method?: Maybe<String>;
    method_not?: Maybe<String>;
    method_in?: Maybe<String[] | String>;
    method_not_in?: Maybe<String[] | String>;
    method_lt?: Maybe<String>;
    method_lte?: Maybe<String>;
    method_gt?: Maybe<String>;
    method_gte?: Maybe<String>;
    method_contains?: Maybe<String>;
    method_not_contains?: Maybe<String>;
    method_starts_with?: Maybe<String>;
    method_not_starts_with?: Maybe<String>;
    method_ends_with?: Maybe<String>;
    method_not_ends_with?: Maybe<String>;
    motion?: Maybe<MotionWhereInput>;
    proposal?: Maybe<ProposalWhereInput>;
    preimageArguments_every?: Maybe<PreimageArgumentWhereInput>;
    preimageArguments_some?: Maybe<PreimageArgumentWhereInput>;
    preimageArguments_none?: Maybe<PreimageArgumentWhereInput>;
    preimageStatus_every?: Maybe<PreimageStatusWhereInput>;
    preimageStatus_some?: Maybe<PreimageStatusWhereInput>;
    preimageStatus_none?: Maybe<PreimageStatusWhereInput>;
    referendum?: Maybe<ReferendumWhereInput>;
    section?: Maybe<String>;
    section_not?: Maybe<String>;
    section_in?: Maybe<String[] | String>;
    section_not_in?: Maybe<String[] | String>;
    section_lt?: Maybe<String>;
    section_lte?: Maybe<String>;
    section_gt?: Maybe<String>;
    section_gte?: Maybe<String>;
    section_contains?: Maybe<String>;
    section_not_contains?: Maybe<String>;
    section_starts_with?: Maybe<String>;
    section_not_starts_with?: Maybe<String>;
    section_ends_with?: Maybe<String>;
    section_not_ends_with?: Maybe<String>;
    AND?: Maybe<PreimageWhereInput[] | PreimageWhereInput>;
    OR?: Maybe<PreimageWhereInput[] | PreimageWhereInput>;
    NOT?: Maybe<PreimageWhereInput[] | PreimageWhereInput>;
}
export interface ProposalWhereInput {
    id?: Maybe<Int>;
    id_not?: Maybe<Int>;
    id_in?: Maybe<Int[] | Int>;
    id_not_in?: Maybe<Int[] | Int>;
    id_lt?: Maybe<Int>;
    id_lte?: Maybe<Int>;
    id_gt?: Maybe<Int>;
    id_gte?: Maybe<Int>;
    author?: Maybe<String>;
    author_not?: Maybe<String>;
    author_in?: Maybe<String[] | String>;
    author_not_in?: Maybe<String[] | String>;
    author_lt?: Maybe<String>;
    author_lte?: Maybe<String>;
    author_gt?: Maybe<String>;
    author_gte?: Maybe<String>;
    author_contains?: Maybe<String>;
    author_not_contains?: Maybe<String>;
    author_starts_with?: Maybe<String>;
    author_not_starts_with?: Maybe<String>;
    author_ends_with?: Maybe<String>;
    author_not_ends_with?: Maybe<String>;
    depositAmount?: Maybe<String>;
    depositAmount_not?: Maybe<String>;
    depositAmount_in?: Maybe<String[] | String>;
    depositAmount_not_in?: Maybe<String[] | String>;
    depositAmount_lt?: Maybe<String>;
    depositAmount_lte?: Maybe<String>;
    depositAmount_gt?: Maybe<String>;
    depositAmount_gte?: Maybe<String>;
    depositAmount_contains?: Maybe<String>;
    depositAmount_not_contains?: Maybe<String>;
    depositAmount_starts_with?: Maybe<String>;
    depositAmount_not_starts_with?: Maybe<String>;
    depositAmount_ends_with?: Maybe<String>;
    depositAmount_not_ends_with?: Maybe<String>;
    preimage?: Maybe<PreimageWhereInput>;
    preimageHash?: Maybe<String>;
    preimageHash_not?: Maybe<String>;
    preimageHash_in?: Maybe<String[] | String>;
    preimageHash_not_in?: Maybe<String[] | String>;
    preimageHash_lt?: Maybe<String>;
    preimageHash_lte?: Maybe<String>;
    preimageHash_gt?: Maybe<String>;
    preimageHash_gte?: Maybe<String>;
    preimageHash_contains?: Maybe<String>;
    preimageHash_not_contains?: Maybe<String>;
    preimageHash_starts_with?: Maybe<String>;
    preimageHash_not_starts_with?: Maybe<String>;
    preimageHash_ends_with?: Maybe<String>;
    preimageHash_not_ends_with?: Maybe<String>;
    proposalId?: Maybe<Int>;
    proposalId_not?: Maybe<Int>;
    proposalId_in?: Maybe<Int[] | Int>;
    proposalId_not_in?: Maybe<Int[] | Int>;
    proposalId_lt?: Maybe<Int>;
    proposalId_lte?: Maybe<Int>;
    proposalId_gt?: Maybe<Int>;
    proposalId_gte?: Maybe<Int>;
    proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
    proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
    proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
    AND?: Maybe<ProposalWhereInput[] | ProposalWhereInput>;
    OR?: Maybe<ProposalWhereInput[] | ProposalWhereInput>;
    NOT?: Maybe<ProposalWhereInput[] | ProposalWhereInput>;
}
export interface ProposalStatusWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    proposal?: Maybe<ProposalWhereInput>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<ProposalStatusWhereInput[] | ProposalStatusWhereInput>;
    OR?: Maybe<ProposalStatusWhereInput[] | ProposalStatusWhereInput>;
    NOT?: Maybe<ProposalStatusWhereInput[] | ProposalStatusWhereInput>;
}
export interface PreimageArgumentWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    preimage?: Maybe<PreimageWhereInput>;
    value?: Maybe<String>;
    value_not?: Maybe<String>;
    value_in?: Maybe<String[] | String>;
    value_not_in?: Maybe<String[] | String>;
    value_lt?: Maybe<String>;
    value_lte?: Maybe<String>;
    value_gt?: Maybe<String>;
    value_gte?: Maybe<String>;
    value_contains?: Maybe<String>;
    value_not_contains?: Maybe<String>;
    value_starts_with?: Maybe<String>;
    value_not_starts_with?: Maybe<String>;
    value_ends_with?: Maybe<String>;
    value_not_ends_with?: Maybe<String>;
    AND?: Maybe<PreimageArgumentWhereInput[] | PreimageArgumentWhereInput>;
    OR?: Maybe<PreimageArgumentWhereInput[] | PreimageArgumentWhereInput>;
    NOT?: Maybe<PreimageArgumentWhereInput[] | PreimageArgumentWhereInput>;
}
export interface PreimageStatusWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    preimage?: Maybe<PreimageWhereInput>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    AND?: Maybe<PreimageStatusWhereInput[] | PreimageStatusWhereInput>;
    OR?: Maybe<PreimageStatusWhereInput[] | PreimageStatusWhereInput>;
    NOT?: Maybe<PreimageStatusWhereInput[] | PreimageStatusWhereInput>;
}
export interface ReferendumWhereInput {
    id?: Maybe<Int>;
    id_not?: Maybe<Int>;
    id_in?: Maybe<Int[] | Int>;
    id_not_in?: Maybe<Int[] | Int>;
    id_lt?: Maybe<Int>;
    id_lte?: Maybe<Int>;
    id_gt?: Maybe<Int>;
    id_gte?: Maybe<Int>;
    delay?: Maybe<Int>;
    delay_not?: Maybe<Int>;
    delay_in?: Maybe<Int[] | Int>;
    delay_not_in?: Maybe<Int[] | Int>;
    delay_lt?: Maybe<Int>;
    delay_lte?: Maybe<Int>;
    delay_gt?: Maybe<Int>;
    delay_gte?: Maybe<Int>;
    end?: Maybe<Int>;
    end_not?: Maybe<Int>;
    end_in?: Maybe<Int[] | Int>;
    end_not_in?: Maybe<Int[] | Int>;
    end_lt?: Maybe<Int>;
    end_lte?: Maybe<Int>;
    end_gt?: Maybe<Int>;
    end_gte?: Maybe<Int>;
    preimage?: Maybe<PreimageWhereInput>;
    preimageHash?: Maybe<String>;
    preimageHash_not?: Maybe<String>;
    preimageHash_in?: Maybe<String[] | String>;
    preimageHash_not_in?: Maybe<String[] | String>;
    preimageHash_lt?: Maybe<String>;
    preimageHash_lte?: Maybe<String>;
    preimageHash_gt?: Maybe<String>;
    preimageHash_gte?: Maybe<String>;
    preimageHash_contains?: Maybe<String>;
    preimageHash_not_contains?: Maybe<String>;
    preimageHash_starts_with?: Maybe<String>;
    preimageHash_not_starts_with?: Maybe<String>;
    preimageHash_ends_with?: Maybe<String>;
    preimageHash_not_ends_with?: Maybe<String>;
    referendumId?: Maybe<Int>;
    referendumId_not?: Maybe<Int>;
    referendumId_in?: Maybe<Int[] | Int>;
    referendumId_not_in?: Maybe<Int[] | Int>;
    referendumId_lt?: Maybe<Int>;
    referendumId_lte?: Maybe<Int>;
    referendumId_gt?: Maybe<Int>;
    referendumId_gte?: Maybe<Int>;
    referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
    referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
    referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
    voteThreshold?: Maybe<String>;
    voteThreshold_not?: Maybe<String>;
    voteThreshold_in?: Maybe<String[] | String>;
    voteThreshold_not_in?: Maybe<String[] | String>;
    voteThreshold_lt?: Maybe<String>;
    voteThreshold_lte?: Maybe<String>;
    voteThreshold_gt?: Maybe<String>;
    voteThreshold_gte?: Maybe<String>;
    voteThreshold_contains?: Maybe<String>;
    voteThreshold_not_contains?: Maybe<String>;
    voteThreshold_starts_with?: Maybe<String>;
    voteThreshold_not_starts_with?: Maybe<String>;
    voteThreshold_ends_with?: Maybe<String>;
    voteThreshold_not_ends_with?: Maybe<String>;
    AND?: Maybe<ReferendumWhereInput[] | ReferendumWhereInput>;
    OR?: Maybe<ReferendumWhereInput[] | ReferendumWhereInput>;
    NOT?: Maybe<ReferendumWhereInput[] | ReferendumWhereInput>;
}
export interface ReferendumStatusWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    referendum?: Maybe<ReferendumWhereInput>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<ReferendumStatusWhereInput[] | ReferendumStatusWhereInput>;
    OR?: Maybe<ReferendumStatusWhereInput[] | ReferendumStatusWhereInput>;
    NOT?: Maybe<ReferendumStatusWhereInput[] | ReferendumStatusWhereInput>;
}
export interface TreasurySpendProposalWhereInput {
    id?: Maybe<Int>;
    id_not?: Maybe<Int>;
    id_in?: Maybe<Int[] | Int>;
    id_not_in?: Maybe<Int[] | Int>;
    id_lt?: Maybe<Int>;
    id_lte?: Maybe<Int>;
    id_gt?: Maybe<Int>;
    id_gte?: Maybe<Int>;
    proposer?: Maybe<String>;
    proposer_not?: Maybe<String>;
    proposer_in?: Maybe<String[] | String>;
    proposer_not_in?: Maybe<String[] | String>;
    proposer_lt?: Maybe<String>;
    proposer_lte?: Maybe<String>;
    proposer_gt?: Maybe<String>;
    proposer_gte?: Maybe<String>;
    proposer_contains?: Maybe<String>;
    proposer_not_contains?: Maybe<String>;
    proposer_starts_with?: Maybe<String>;
    proposer_not_starts_with?: Maybe<String>;
    proposer_ends_with?: Maybe<String>;
    proposer_not_ends_with?: Maybe<String>;
    beneficiary?: Maybe<String>;
    beneficiary_not?: Maybe<String>;
    beneficiary_in?: Maybe<String[] | String>;
    beneficiary_not_in?: Maybe<String[] | String>;
    beneficiary_lt?: Maybe<String>;
    beneficiary_lte?: Maybe<String>;
    beneficiary_gt?: Maybe<String>;
    beneficiary_gte?: Maybe<String>;
    beneficiary_contains?: Maybe<String>;
    beneficiary_not_contains?: Maybe<String>;
    beneficiary_starts_with?: Maybe<String>;
    beneficiary_not_starts_with?: Maybe<String>;
    beneficiary_ends_with?: Maybe<String>;
    beneficiary_not_ends_with?: Maybe<String>;
    value?: Maybe<String>;
    value_not?: Maybe<String>;
    value_in?: Maybe<String[] | String>;
    value_not_in?: Maybe<String[] | String>;
    value_lt?: Maybe<String>;
    value_lte?: Maybe<String>;
    value_gt?: Maybe<String>;
    value_gte?: Maybe<String>;
    value_contains?: Maybe<String>;
    value_not_contains?: Maybe<String>;
    value_starts_with?: Maybe<String>;
    value_not_starts_with?: Maybe<String>;
    value_ends_with?: Maybe<String>;
    value_not_ends_with?: Maybe<String>;
    bond?: Maybe<String>;
    bond_not?: Maybe<String>;
    bond_in?: Maybe<String[] | String>;
    bond_not_in?: Maybe<String[] | String>;
    bond_lt?: Maybe<String>;
    bond_lte?: Maybe<String>;
    bond_gt?: Maybe<String>;
    bond_gte?: Maybe<String>;
    bond_contains?: Maybe<String>;
    bond_not_contains?: Maybe<String>;
    bond_starts_with?: Maybe<String>;
    bond_not_starts_with?: Maybe<String>;
    bond_ends_with?: Maybe<String>;
    bond_not_ends_with?: Maybe<String>;
    treasuryProposalId?: Maybe<Int>;
    treasuryProposalId_not?: Maybe<Int>;
    treasuryProposalId_in?: Maybe<Int[] | Int>;
    treasuryProposalId_not_in?: Maybe<Int[] | Int>;
    treasuryProposalId_lt?: Maybe<Int>;
    treasuryProposalId_lte?: Maybe<Int>;
    treasuryProposalId_gt?: Maybe<Int>;
    treasuryProposalId_gte?: Maybe<Int>;
    treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
    treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
    treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
    motion?: Maybe<MotionWhereInput>;
    AND?: Maybe<TreasurySpendProposalWhereInput[] | TreasurySpendProposalWhereInput>;
    OR?: Maybe<TreasurySpendProposalWhereInput[] | TreasurySpendProposalWhereInput>;
    NOT?: Maybe<TreasurySpendProposalWhereInput[] | TreasurySpendProposalWhereInput>;
}
export interface TreasuryStatusWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<TreasuryStatusWhereInput[] | TreasuryStatusWhereInput>;
    OR?: Maybe<TreasuryStatusWhereInput[] | TreasuryStatusWhereInput>;
    NOT?: Maybe<TreasuryStatusWhereInput[] | TreasuryStatusWhereInput>;
}
export declare type MotionProposalArgumentWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export declare type MotionStatusWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    uniqueStatus?: Maybe<String>;
}>;
export declare type NominationWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface NominationWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    validatorController?: Maybe<String>;
    validatorController_not?: Maybe<String>;
    validatorController_in?: Maybe<String[] | String>;
    validatorController_not_in?: Maybe<String[] | String>;
    validatorController_lt?: Maybe<String>;
    validatorController_lte?: Maybe<String>;
    validatorController_gt?: Maybe<String>;
    validatorController_gte?: Maybe<String>;
    validatorController_contains?: Maybe<String>;
    validatorController_not_contains?: Maybe<String>;
    validatorController_starts_with?: Maybe<String>;
    validatorController_not_starts_with?: Maybe<String>;
    validatorController_ends_with?: Maybe<String>;
    validatorController_not_ends_with?: Maybe<String>;
    validatorStash?: Maybe<String>;
    validatorStash_not?: Maybe<String>;
    validatorStash_in?: Maybe<String[] | String>;
    validatorStash_not_in?: Maybe<String[] | String>;
    validatorStash_lt?: Maybe<String>;
    validatorStash_lte?: Maybe<String>;
    validatorStash_gt?: Maybe<String>;
    validatorStash_gte?: Maybe<String>;
    validatorStash_contains?: Maybe<String>;
    validatorStash_not_contains?: Maybe<String>;
    validatorStash_starts_with?: Maybe<String>;
    validatorStash_not_starts_with?: Maybe<String>;
    validatorStash_ends_with?: Maybe<String>;
    validatorStash_not_ends_with?: Maybe<String>;
    nominatorController?: Maybe<String>;
    nominatorController_not?: Maybe<String>;
    nominatorController_in?: Maybe<String[] | String>;
    nominatorController_not_in?: Maybe<String[] | String>;
    nominatorController_lt?: Maybe<String>;
    nominatorController_lte?: Maybe<String>;
    nominatorController_gt?: Maybe<String>;
    nominatorController_gte?: Maybe<String>;
    nominatorController_contains?: Maybe<String>;
    nominatorController_not_contains?: Maybe<String>;
    nominatorController_starts_with?: Maybe<String>;
    nominatorController_not_starts_with?: Maybe<String>;
    nominatorController_ends_with?: Maybe<String>;
    nominatorController_not_ends_with?: Maybe<String>;
    nominatorStash?: Maybe<String>;
    nominatorStash_not?: Maybe<String>;
    nominatorStash_in?: Maybe<String[] | String>;
    nominatorStash_not_in?: Maybe<String[] | String>;
    nominatorStash_lt?: Maybe<String>;
    nominatorStash_lte?: Maybe<String>;
    nominatorStash_gt?: Maybe<String>;
    nominatorStash_gte?: Maybe<String>;
    nominatorStash_contains?: Maybe<String>;
    nominatorStash_not_contains?: Maybe<String>;
    nominatorStash_starts_with?: Maybe<String>;
    nominatorStash_not_starts_with?: Maybe<String>;
    nominatorStash_ends_with?: Maybe<String>;
    nominatorStash_not_ends_with?: Maybe<String>;
    session?: Maybe<SessionWhereInput>;
    stakedAmount?: Maybe<String>;
    stakedAmount_not?: Maybe<String>;
    stakedAmount_in?: Maybe<String[] | String>;
    stakedAmount_not_in?: Maybe<String[] | String>;
    stakedAmount_lt?: Maybe<String>;
    stakedAmount_lte?: Maybe<String>;
    stakedAmount_gt?: Maybe<String>;
    stakedAmount_gte?: Maybe<String>;
    stakedAmount_contains?: Maybe<String>;
    stakedAmount_not_contains?: Maybe<String>;
    stakedAmount_starts_with?: Maybe<String>;
    stakedAmount_not_starts_with?: Maybe<String>;
    stakedAmount_ends_with?: Maybe<String>;
    stakedAmount_not_ends_with?: Maybe<String>;
    AND?: Maybe<NominationWhereInput[] | NominationWhereInput>;
    OR?: Maybe<NominationWhereInput[] | NominationWhereInput>;
    NOT?: Maybe<NominationWhereInput[] | NominationWhereInput>;
}
export declare type OfflineValidatorWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface OfflineValidatorWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    sessionIndex?: Maybe<SessionWhereInput>;
    validatorId?: Maybe<String>;
    validatorId_not?: Maybe<String>;
    validatorId_in?: Maybe<String[] | String>;
    validatorId_not_in?: Maybe<String[] | String>;
    validatorId_lt?: Maybe<String>;
    validatorId_lte?: Maybe<String>;
    validatorId_gt?: Maybe<String>;
    validatorId_gte?: Maybe<String>;
    validatorId_contains?: Maybe<String>;
    validatorId_not_contains?: Maybe<String>;
    validatorId_starts_with?: Maybe<String>;
    validatorId_not_starts_with?: Maybe<String>;
    validatorId_ends_with?: Maybe<String>;
    validatorId_not_ends_with?: Maybe<String>;
    total?: Maybe<String>;
    total_not?: Maybe<String>;
    total_in?: Maybe<String[] | String>;
    total_not_in?: Maybe<String[] | String>;
    total_lt?: Maybe<String>;
    total_lte?: Maybe<String>;
    total_gt?: Maybe<String>;
    total_gte?: Maybe<String>;
    total_contains?: Maybe<String>;
    total_not_contains?: Maybe<String>;
    total_starts_with?: Maybe<String>;
    total_not_starts_with?: Maybe<String>;
    total_ends_with?: Maybe<String>;
    total_not_ends_with?: Maybe<String>;
    own?: Maybe<String>;
    own_not?: Maybe<String>;
    own_in?: Maybe<String[] | String>;
    own_not_in?: Maybe<String[] | String>;
    own_lt?: Maybe<String>;
    own_lte?: Maybe<String>;
    own_gt?: Maybe<String>;
    own_gte?: Maybe<String>;
    own_contains?: Maybe<String>;
    own_not_contains?: Maybe<String>;
    own_starts_with?: Maybe<String>;
    own_not_starts_with?: Maybe<String>;
    own_ends_with?: Maybe<String>;
    own_not_ends_with?: Maybe<String>;
    AND?: Maybe<OfflineValidatorWhereInput[] | OfflineValidatorWhereInput>;
    OR?: Maybe<OfflineValidatorWhereInput[] | OfflineValidatorWhereInput>;
    NOT?: Maybe<OfflineValidatorWhereInput[] | OfflineValidatorWhereInput>;
}
export declare type PreimageWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export declare type PreimageArgumentWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export declare type PreimageStatusWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export declare type ProposalWhereUniqueInput = AtLeastOne<{
    id: Maybe<Int>;
    proposalId?: Maybe<Int>;
}>;
export declare type ProposalStatusWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    uniqueStatus?: Maybe<String>;
}>;
export declare type ReferendumWhereUniqueInput = AtLeastOne<{
    id: Maybe<Int>;
    referendumId?: Maybe<Int>;
}>;
export declare type ReferendumStatusWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    uniqueStatus?: Maybe<String>;
}>;
export declare type RewardWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface RewardWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    authoredBlock?: Maybe<BlockNumberWhereInput>;
    sessionIndex?: Maybe<SessionWhereInput>;
    treasuryReward?: Maybe<String>;
    treasuryReward_not?: Maybe<String>;
    treasuryReward_in?: Maybe<String[] | String>;
    treasuryReward_not_in?: Maybe<String[] | String>;
    treasuryReward_lt?: Maybe<String>;
    treasuryReward_lte?: Maybe<String>;
    treasuryReward_gt?: Maybe<String>;
    treasuryReward_gte?: Maybe<String>;
    treasuryReward_contains?: Maybe<String>;
    treasuryReward_not_contains?: Maybe<String>;
    treasuryReward_starts_with?: Maybe<String>;
    treasuryReward_not_starts_with?: Maybe<String>;
    treasuryReward_ends_with?: Maybe<String>;
    treasuryReward_not_ends_with?: Maybe<String>;
    validatorReward?: Maybe<String>;
    validatorReward_not?: Maybe<String>;
    validatorReward_in?: Maybe<String[] | String>;
    validatorReward_not_in?: Maybe<String[] | String>;
    validatorReward_lt?: Maybe<String>;
    validatorReward_lte?: Maybe<String>;
    validatorReward_gt?: Maybe<String>;
    validatorReward_gte?: Maybe<String>;
    validatorReward_contains?: Maybe<String>;
    validatorReward_not_contains?: Maybe<String>;
    validatorReward_starts_with?: Maybe<String>;
    validatorReward_not_starts_with?: Maybe<String>;
    validatorReward_ends_with?: Maybe<String>;
    validatorReward_not_ends_with?: Maybe<String>;
    AND?: Maybe<RewardWhereInput[] | RewardWhereInput>;
    OR?: Maybe<RewardWhereInput[] | RewardWhereInput>;
    NOT?: Maybe<RewardWhereInput[] | RewardWhereInput>;
}
export declare type SessionWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    index?: Maybe<Int>;
}>;
export declare type SlashingWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    who?: Maybe<String>;
}>;
export interface SlashingWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    who?: Maybe<String>;
    who_not?: Maybe<String>;
    who_in?: Maybe<String[] | String>;
    who_not_in?: Maybe<String[] | String>;
    who_lt?: Maybe<String>;
    who_lte?: Maybe<String>;
    who_gt?: Maybe<String>;
    who_gte?: Maybe<String>;
    who_contains?: Maybe<String>;
    who_not_contains?: Maybe<String>;
    who_starts_with?: Maybe<String>;
    who_not_starts_with?: Maybe<String>;
    who_ends_with?: Maybe<String>;
    who_not_ends_with?: Maybe<String>;
    amount?: Maybe<String>;
    amount_not?: Maybe<String>;
    amount_in?: Maybe<String[] | String>;
    amount_not_in?: Maybe<String[] | String>;
    amount_lt?: Maybe<String>;
    amount_lte?: Maybe<String>;
    amount_gt?: Maybe<String>;
    amount_gte?: Maybe<String>;
    amount_contains?: Maybe<String>;
    amount_not_contains?: Maybe<String>;
    amount_starts_with?: Maybe<String>;
    amount_not_starts_with?: Maybe<String>;
    amount_ends_with?: Maybe<String>;
    amount_not_ends_with?: Maybe<String>;
    AND?: Maybe<SlashingWhereInput[] | SlashingWhereInput>;
    OR?: Maybe<SlashingWhereInput[] | SlashingWhereInput>;
    NOT?: Maybe<SlashingWhereInput[] | SlashingWhereInput>;
}
export declare type StakeWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface StakeWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    totalStake?: Maybe<String>;
    totalStake_not?: Maybe<String>;
    totalStake_in?: Maybe<String[] | String>;
    totalStake_not_in?: Maybe<String[] | String>;
    totalStake_lt?: Maybe<String>;
    totalStake_lte?: Maybe<String>;
    totalStake_gt?: Maybe<String>;
    totalStake_gte?: Maybe<String>;
    totalStake_contains?: Maybe<String>;
    totalStake_not_contains?: Maybe<String>;
    totalStake_starts_with?: Maybe<String>;
    totalStake_not_starts_with?: Maybe<String>;
    totalStake_ends_with?: Maybe<String>;
    totalStake_not_ends_with?: Maybe<String>;
    AND?: Maybe<StakeWhereInput[] | StakeWhereInput>;
    OR?: Maybe<StakeWhereInput[] | StakeWhereInput>;
    NOT?: Maybe<StakeWhereInput[] | StakeWhereInput>;
}
export declare type TotalIssuanceWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface TotalIssuanceWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    blockNumber?: Maybe<BlockNumberWhereInput>;
    amount?: Maybe<String>;
    amount_not?: Maybe<String>;
    amount_in?: Maybe<String[] | String>;
    amount_not_in?: Maybe<String[] | String>;
    amount_lt?: Maybe<String>;
    amount_lte?: Maybe<String>;
    amount_gt?: Maybe<String>;
    amount_gte?: Maybe<String>;
    amount_contains?: Maybe<String>;
    amount_not_contains?: Maybe<String>;
    amount_starts_with?: Maybe<String>;
    amount_not_starts_with?: Maybe<String>;
    amount_ends_with?: Maybe<String>;
    amount_not_ends_with?: Maybe<String>;
    AND?: Maybe<TotalIssuanceWhereInput[] | TotalIssuanceWhereInput>;
    OR?: Maybe<TotalIssuanceWhereInput[] | TotalIssuanceWhereInput>;
    NOT?: Maybe<TotalIssuanceWhereInput[] | TotalIssuanceWhereInput>;
}
export declare type TreasurySpendProposalWhereUniqueInput = AtLeastOne<{
    id: Maybe<Int>;
    treasuryProposalId?: Maybe<Int>;
}>;
export declare type TreasuryStatusWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    uniqueStatus?: Maybe<String>;
}>;
export declare type ValidatorWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface ValidatorWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    session?: Maybe<SessionWhereInput>;
    controller?: Maybe<String>;
    controller_not?: Maybe<String>;
    controller_in?: Maybe<String[] | String>;
    controller_not_in?: Maybe<String[] | String>;
    controller_lt?: Maybe<String>;
    controller_lte?: Maybe<String>;
    controller_gt?: Maybe<String>;
    controller_gte?: Maybe<String>;
    controller_contains?: Maybe<String>;
    controller_not_contains?: Maybe<String>;
    controller_starts_with?: Maybe<String>;
    controller_not_starts_with?: Maybe<String>;
    controller_ends_with?: Maybe<String>;
    controller_not_ends_with?: Maybe<String>;
    stash?: Maybe<String>;
    stash_not?: Maybe<String>;
    stash_in?: Maybe<String[] | String>;
    stash_not_in?: Maybe<String[] | String>;
    stash_lt?: Maybe<String>;
    stash_lte?: Maybe<String>;
    stash_gt?: Maybe<String>;
    stash_gte?: Maybe<String>;
    stash_contains?: Maybe<String>;
    stash_not_contains?: Maybe<String>;
    stash_starts_with?: Maybe<String>;
    stash_not_starts_with?: Maybe<String>;
    stash_ends_with?: Maybe<String>;
    stash_not_ends_with?: Maybe<String>;
    preferences?: Maybe<String>;
    preferences_not?: Maybe<String>;
    preferences_in?: Maybe<String[] | String>;
    preferences_not_in?: Maybe<String[] | String>;
    preferences_lt?: Maybe<String>;
    preferences_lte?: Maybe<String>;
    preferences_gt?: Maybe<String>;
    preferences_gte?: Maybe<String>;
    preferences_contains?: Maybe<String>;
    preferences_not_contains?: Maybe<String>;
    preferences_starts_with?: Maybe<String>;
    preferences_not_starts_with?: Maybe<String>;
    preferences_ends_with?: Maybe<String>;
    preferences_not_ends_with?: Maybe<String>;
    AND?: Maybe<ValidatorWhereInput[] | ValidatorWhereInput>;
    OR?: Maybe<ValidatorWhereInput[] | ValidatorWhereInput>;
    NOT?: Maybe<ValidatorWhereInput[] | ValidatorWhereInput>;
}
export interface BlockIndexCreateInput {
    id?: Maybe<ID_Input>;
    identifier: String;
    startFrom: Int;
    index: Int;
}
export interface BlockIndexUpdateInput {
    identifier?: Maybe<String>;
    startFrom?: Maybe<Int>;
    index?: Maybe<Int>;
}
export interface BlockIndexUpdateManyMutationInput {
    identifier?: Maybe<String>;
    startFrom?: Maybe<Int>;
    index?: Maybe<Int>;
}
export interface BlockNumberCreateInput {
    id?: Maybe<ID_Input>;
    number: Int;
    authoredBy: String;
    startDateTime: DateTimeInput;
    hash: String;
}
export interface BlockNumberUpdateInput {
    number?: Maybe<Int>;
    authoredBy?: Maybe<String>;
    startDateTime?: Maybe<DateTimeInput>;
    hash?: Maybe<String>;
}
export interface BlockNumberUpdateManyMutationInput {
    number?: Maybe<Int>;
    authoredBy?: Maybe<String>;
    startDateTime?: Maybe<DateTimeInput>;
    hash?: Maybe<String>;
}
export interface CouncilCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    members?: Maybe<CouncilMemberCreateManyWithoutCouncilsInput>;
}
export interface BlockNumberCreateOneInput {
    create?: Maybe<BlockNumberCreateInput>;
    connect?: Maybe<BlockNumberWhereUniqueInput>;
}
export interface CouncilMemberCreateManyWithoutCouncilsInput {
    create?: Maybe<CouncilMemberCreateWithoutCouncilsInput[] | CouncilMemberCreateWithoutCouncilsInput>;
    connect?: Maybe<CouncilMemberWhereUniqueInput[] | CouncilMemberWhereUniqueInput>;
}
export interface CouncilMemberCreateWithoutCouncilsInput {
    id?: Maybe<ID_Input>;
    address: String;
}
export interface CouncilUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    members?: Maybe<CouncilMemberUpdateManyWithoutCouncilsInput>;
}
export interface BlockNumberUpdateOneRequiredInput {
    create?: Maybe<BlockNumberCreateInput>;
    update?: Maybe<BlockNumberUpdateDataInput>;
    upsert?: Maybe<BlockNumberUpsertNestedInput>;
    connect?: Maybe<BlockNumberWhereUniqueInput>;
}
export interface BlockNumberUpdateDataInput {
    number?: Maybe<Int>;
    authoredBy?: Maybe<String>;
    startDateTime?: Maybe<DateTimeInput>;
    hash?: Maybe<String>;
}
export interface BlockNumberUpsertNestedInput {
    update: BlockNumberUpdateDataInput;
    create: BlockNumberCreateInput;
}
export interface CouncilMemberUpdateManyWithoutCouncilsInput {
    create?: Maybe<CouncilMemberCreateWithoutCouncilsInput[] | CouncilMemberCreateWithoutCouncilsInput>;
    delete?: Maybe<CouncilMemberWhereUniqueInput[] | CouncilMemberWhereUniqueInput>;
    connect?: Maybe<CouncilMemberWhereUniqueInput[] | CouncilMemberWhereUniqueInput>;
    set?: Maybe<CouncilMemberWhereUniqueInput[] | CouncilMemberWhereUniqueInput>;
    disconnect?: Maybe<CouncilMemberWhereUniqueInput[] | CouncilMemberWhereUniqueInput>;
    update?: Maybe<CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput[] | CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput>;
    upsert?: Maybe<CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput[] | CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput>;
    deleteMany?: Maybe<CouncilMemberScalarWhereInput[] | CouncilMemberScalarWhereInput>;
    updateMany?: Maybe<CouncilMemberUpdateManyWithWhereNestedInput[] | CouncilMemberUpdateManyWithWhereNestedInput>;
}
export interface CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput {
    where: CouncilMemberWhereUniqueInput;
    data: CouncilMemberUpdateWithoutCouncilsDataInput;
}
export interface CouncilMemberUpdateWithoutCouncilsDataInput {
    address?: Maybe<String>;
}
export interface CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput {
    where: CouncilMemberWhereUniqueInput;
    update: CouncilMemberUpdateWithoutCouncilsDataInput;
    create: CouncilMemberCreateWithoutCouncilsInput;
}
export interface CouncilMemberScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    address?: Maybe<String>;
    address_not?: Maybe<String>;
    address_in?: Maybe<String[] | String>;
    address_not_in?: Maybe<String[] | String>;
    address_lt?: Maybe<String>;
    address_lte?: Maybe<String>;
    address_gt?: Maybe<String>;
    address_gte?: Maybe<String>;
    address_contains?: Maybe<String>;
    address_not_contains?: Maybe<String>;
    address_starts_with?: Maybe<String>;
    address_not_starts_with?: Maybe<String>;
    address_ends_with?: Maybe<String>;
    address_not_ends_with?: Maybe<String>;
    AND?: Maybe<CouncilMemberScalarWhereInput[] | CouncilMemberScalarWhereInput>;
    OR?: Maybe<CouncilMemberScalarWhereInput[] | CouncilMemberScalarWhereInput>;
    NOT?: Maybe<CouncilMemberScalarWhereInput[] | CouncilMemberScalarWhereInput>;
}
export interface CouncilMemberUpdateManyWithWhereNestedInput {
    where: CouncilMemberScalarWhereInput;
    data: CouncilMemberUpdateManyDataInput;
}
export interface CouncilMemberUpdateManyDataInput {
    address?: Maybe<String>;
}
export interface CouncilMemberCreateInput {
    id?: Maybe<ID_Input>;
    address: String;
    councils?: Maybe<CouncilCreateManyWithoutMembersInput>;
}
export interface CouncilCreateManyWithoutMembersInput {
    create?: Maybe<CouncilCreateWithoutMembersInput[] | CouncilCreateWithoutMembersInput>;
    connect?: Maybe<CouncilWhereUniqueInput[] | CouncilWhereUniqueInput>;
}
export interface CouncilCreateWithoutMembersInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
}
export interface CouncilMemberUpdateInput {
    address?: Maybe<String>;
    councils?: Maybe<CouncilUpdateManyWithoutMembersInput>;
}
export interface CouncilUpdateManyWithoutMembersInput {
    create?: Maybe<CouncilCreateWithoutMembersInput[] | CouncilCreateWithoutMembersInput>;
    delete?: Maybe<CouncilWhereUniqueInput[] | CouncilWhereUniqueInput>;
    connect?: Maybe<CouncilWhereUniqueInput[] | CouncilWhereUniqueInput>;
    set?: Maybe<CouncilWhereUniqueInput[] | CouncilWhereUniqueInput>;
    disconnect?: Maybe<CouncilWhereUniqueInput[] | CouncilWhereUniqueInput>;
    update?: Maybe<CouncilUpdateWithWhereUniqueWithoutMembersInput[] | CouncilUpdateWithWhereUniqueWithoutMembersInput>;
    upsert?: Maybe<CouncilUpsertWithWhereUniqueWithoutMembersInput[] | CouncilUpsertWithWhereUniqueWithoutMembersInput>;
    deleteMany?: Maybe<CouncilScalarWhereInput[] | CouncilScalarWhereInput>;
}
export interface CouncilUpdateWithWhereUniqueWithoutMembersInput {
    where: CouncilWhereUniqueInput;
    data: CouncilUpdateWithoutMembersDataInput;
}
export interface CouncilUpdateWithoutMembersDataInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
}
export interface CouncilUpsertWithWhereUniqueWithoutMembersInput {
    where: CouncilWhereUniqueInput;
    update: CouncilUpdateWithoutMembersDataInput;
    create: CouncilCreateWithoutMembersInput;
}
export interface CouncilScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    AND?: Maybe<CouncilScalarWhereInput[] | CouncilScalarWhereInput>;
    OR?: Maybe<CouncilScalarWhereInput[] | CouncilScalarWhereInput>;
    NOT?: Maybe<CouncilScalarWhereInput[] | CouncilScalarWhereInput>;
}
export interface CouncilMemberUpdateManyMutationInput {
    address?: Maybe<String>;
}
export interface EraCreateInput {
    id?: Maybe<ID_Input>;
    index: Int;
    eraStartSessionIndex: SessionCreateOneInput;
    totalPoints: String;
    individualPoints?: Maybe<EraCreateindividualPointsInput>;
}
export interface SessionCreateOneInput {
    create?: Maybe<SessionCreateInput>;
    connect?: Maybe<SessionWhereUniqueInput>;
}
export interface SessionCreateInput {
    id?: Maybe<ID_Input>;
    index: Int;
    start: BlockNumberCreateOneInput;
}
export interface EraCreateindividualPointsInput {
    set?: Maybe<String[] | String>;
}
export interface EraUpdateInput {
    index?: Maybe<Int>;
    eraStartSessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
    totalPoints?: Maybe<String>;
    individualPoints?: Maybe<EraUpdateindividualPointsInput>;
}
export interface SessionUpdateOneRequiredInput {
    create?: Maybe<SessionCreateInput>;
    update?: Maybe<SessionUpdateDataInput>;
    upsert?: Maybe<SessionUpsertNestedInput>;
    connect?: Maybe<SessionWhereUniqueInput>;
}
export interface SessionUpdateDataInput {
    index?: Maybe<Int>;
    start?: Maybe<BlockNumberUpdateOneRequiredInput>;
}
export interface SessionUpsertNestedInput {
    update: SessionUpdateDataInput;
    create: SessionCreateInput;
}
export interface EraUpdateindividualPointsInput {
    set?: Maybe<String[] | String>;
}
export interface EraUpdateManyMutationInput {
    index?: Maybe<Int>;
    totalPoints?: Maybe<String>;
    individualPoints?: Maybe<EraUpdateindividualPointsInput>;
}
export interface HeartBeatCreateInput {
    id?: Maybe<ID_Input>;
    sessionIndex: SessionCreateOneInput;
    authorityId: String;
}
export interface HeartBeatUpdateInput {
    sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
    authorityId?: Maybe<String>;
}
export interface HeartBeatUpdateManyMutationInput {
    authorityId?: Maybe<String>;
}
export interface MotionCreateInput {
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
    motionProposalHash: String;
    motionProposalId: Int;
    motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
    preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
    section: String;
}
export interface MotionProposalArgumentCreateManyWithoutMotionInput {
    create?: Maybe<MotionProposalArgumentCreateWithoutMotionInput[] | MotionProposalArgumentCreateWithoutMotionInput>;
    connect?: Maybe<MotionProposalArgumentWhereUniqueInput[] | MotionProposalArgumentWhereUniqueInput>;
}
export interface MotionProposalArgumentCreateWithoutMotionInput {
    id?: Maybe<ID_Input>;
    name: String;
    value: String;
}
export interface MotionStatusCreateManyWithoutMotionInput {
    create?: Maybe<MotionStatusCreateWithoutMotionInput[] | MotionStatusCreateWithoutMotionInput>;
    connect?: Maybe<MotionStatusWhereUniqueInput[] | MotionStatusWhereUniqueInput>;
}
export interface MotionStatusCreateWithoutMotionInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    status: String;
    uniqueStatus: String;
}
export interface PreimageCreateOneWithoutMotionInput {
    create?: Maybe<PreimageCreateWithoutMotionInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageCreateWithoutMotionInput {
    id?: Maybe<ID_Input>;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
    section: String;
}
export interface ProposalCreateOneWithoutPreimageInput {
    create?: Maybe<ProposalCreateWithoutPreimageInput>;
    connect?: Maybe<ProposalWhereUniqueInput>;
}
export interface ProposalCreateWithoutPreimageInput {
    author: String;
    depositAmount: String;
    preimageHash: String;
    proposalId: Int;
    proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>;
}
export interface ProposalStatusCreateManyWithoutProposalInput {
    create?: Maybe<ProposalStatusCreateWithoutProposalInput[] | ProposalStatusCreateWithoutProposalInput>;
    connect?: Maybe<ProposalStatusWhereUniqueInput[] | ProposalStatusWhereUniqueInput>;
}
export interface ProposalStatusCreateWithoutProposalInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    status: String;
    uniqueStatus: String;
}
export interface PreimageArgumentCreateManyWithoutPreimageInput {
    create?: Maybe<PreimageArgumentCreateWithoutPreimageInput[] | PreimageArgumentCreateWithoutPreimageInput>;
    connect?: Maybe<PreimageArgumentWhereUniqueInput[] | PreimageArgumentWhereUniqueInput>;
}
export interface PreimageArgumentCreateWithoutPreimageInput {
    id?: Maybe<ID_Input>;
    name: String;
    value: String;
}
export interface PreimageStatusCreateManyWithoutPreimageInput {
    create?: Maybe<PreimageStatusCreateWithoutPreimageInput[] | PreimageStatusCreateWithoutPreimageInput>;
    connect?: Maybe<PreimageStatusWhereUniqueInput[] | PreimageStatusWhereUniqueInput>;
}
export interface PreimageStatusCreateWithoutPreimageInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    status: String;
}
export interface ReferendumCreateOneWithoutPreimageInput {
    create?: Maybe<ReferendumCreateWithoutPreimageInput>;
    connect?: Maybe<ReferendumWhereUniqueInput>;
}
export interface ReferendumCreateWithoutPreimageInput {
    delay: Int;
    end: Int;
    preimageHash: String;
    referendumId: Int;
    referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>;
    voteThreshold: String;
}
export interface ReferendumStatusCreateManyWithoutReferendumInput {
    create?: Maybe<ReferendumStatusCreateWithoutReferendumInput[] | ReferendumStatusCreateWithoutReferendumInput>;
    connect?: Maybe<ReferendumStatusWhereUniqueInput[] | ReferendumStatusWhereUniqueInput>;
}
export interface ReferendumStatusCreateWithoutReferendumInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    status: String;
    uniqueStatus: String;
}
export interface TreasurySpendProposalCreateOneWithoutMotionInput {
    create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>;
    connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
}
export interface TreasurySpendProposalCreateWithoutMotionInput {
    proposer: String;
    beneficiary: String;
    value: String;
    bond: String;
    treasuryProposalId: Int;
    treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>;
}
export interface TreasuryStatusCreateManyWithoutTreasurySpendProposalInput {
    create?: Maybe<TreasuryStatusCreateWithoutTreasurySpendProposalInput[] | TreasuryStatusCreateWithoutTreasurySpendProposalInput>;
    connect?: Maybe<TreasuryStatusWhereUniqueInput[] | TreasuryStatusWhereUniqueInput>;
}
export interface TreasuryStatusCreateWithoutTreasurySpendProposalInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    status: String;
    uniqueStatus: String;
}
export interface MotionUpdateInput {
    author?: Maybe<String>;
    memberCount?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
    motionProposalHash?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
    preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
    section?: Maybe<String>;
}
export interface MotionProposalArgumentUpdateManyWithoutMotionInput {
    create?: Maybe<MotionProposalArgumentCreateWithoutMotionInput[] | MotionProposalArgumentCreateWithoutMotionInput>;
    delete?: Maybe<MotionProposalArgumentWhereUniqueInput[] | MotionProposalArgumentWhereUniqueInput>;
    connect?: Maybe<MotionProposalArgumentWhereUniqueInput[] | MotionProposalArgumentWhereUniqueInput>;
    set?: Maybe<MotionProposalArgumentWhereUniqueInput[] | MotionProposalArgumentWhereUniqueInput>;
    disconnect?: Maybe<MotionProposalArgumentWhereUniqueInput[] | MotionProposalArgumentWhereUniqueInput>;
    update?: Maybe<MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput[] | MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput>;
    upsert?: Maybe<MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput[] | MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput>;
    deleteMany?: Maybe<MotionProposalArgumentScalarWhereInput[] | MotionProposalArgumentScalarWhereInput>;
    updateMany?: Maybe<MotionProposalArgumentUpdateManyWithWhereNestedInput[] | MotionProposalArgumentUpdateManyWithWhereNestedInput>;
}
export interface MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput {
    where: MotionProposalArgumentWhereUniqueInput;
    data: MotionProposalArgumentUpdateWithoutMotionDataInput;
}
export interface MotionProposalArgumentUpdateWithoutMotionDataInput {
    name?: Maybe<String>;
    value?: Maybe<String>;
}
export interface MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput {
    where: MotionProposalArgumentWhereUniqueInput;
    update: MotionProposalArgumentUpdateWithoutMotionDataInput;
    create: MotionProposalArgumentCreateWithoutMotionInput;
}
export interface MotionProposalArgumentScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    value?: Maybe<String>;
    value_not?: Maybe<String>;
    value_in?: Maybe<String[] | String>;
    value_not_in?: Maybe<String[] | String>;
    value_lt?: Maybe<String>;
    value_lte?: Maybe<String>;
    value_gt?: Maybe<String>;
    value_gte?: Maybe<String>;
    value_contains?: Maybe<String>;
    value_not_contains?: Maybe<String>;
    value_starts_with?: Maybe<String>;
    value_not_starts_with?: Maybe<String>;
    value_ends_with?: Maybe<String>;
    value_not_ends_with?: Maybe<String>;
    AND?: Maybe<MotionProposalArgumentScalarWhereInput[] | MotionProposalArgumentScalarWhereInput>;
    OR?: Maybe<MotionProposalArgumentScalarWhereInput[] | MotionProposalArgumentScalarWhereInput>;
    NOT?: Maybe<MotionProposalArgumentScalarWhereInput[] | MotionProposalArgumentScalarWhereInput>;
}
export interface MotionProposalArgumentUpdateManyWithWhereNestedInput {
    where: MotionProposalArgumentScalarWhereInput;
    data: MotionProposalArgumentUpdateManyDataInput;
}
export interface MotionProposalArgumentUpdateManyDataInput {
    name?: Maybe<String>;
    value?: Maybe<String>;
}
export interface MotionStatusUpdateManyWithoutMotionInput {
    create?: Maybe<MotionStatusCreateWithoutMotionInput[] | MotionStatusCreateWithoutMotionInput>;
    delete?: Maybe<MotionStatusWhereUniqueInput[] | MotionStatusWhereUniqueInput>;
    connect?: Maybe<MotionStatusWhereUniqueInput[] | MotionStatusWhereUniqueInput>;
    set?: Maybe<MotionStatusWhereUniqueInput[] | MotionStatusWhereUniqueInput>;
    disconnect?: Maybe<MotionStatusWhereUniqueInput[] | MotionStatusWhereUniqueInput>;
    update?: Maybe<MotionStatusUpdateWithWhereUniqueWithoutMotionInput[] | MotionStatusUpdateWithWhereUniqueWithoutMotionInput>;
    upsert?: Maybe<MotionStatusUpsertWithWhereUniqueWithoutMotionInput[] | MotionStatusUpsertWithWhereUniqueWithoutMotionInput>;
    deleteMany?: Maybe<MotionStatusScalarWhereInput[] | MotionStatusScalarWhereInput>;
    updateMany?: Maybe<MotionStatusUpdateManyWithWhereNestedInput[] | MotionStatusUpdateManyWithWhereNestedInput>;
}
export interface MotionStatusUpdateWithWhereUniqueWithoutMotionInput {
    where: MotionStatusWhereUniqueInput;
    data: MotionStatusUpdateWithoutMotionDataInput;
}
export interface MotionStatusUpdateWithoutMotionDataInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface MotionStatusUpsertWithWhereUniqueWithoutMotionInput {
    where: MotionStatusWhereUniqueInput;
    update: MotionStatusUpdateWithoutMotionDataInput;
    create: MotionStatusCreateWithoutMotionInput;
}
export interface MotionStatusScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<MotionStatusScalarWhereInput[] | MotionStatusScalarWhereInput>;
    OR?: Maybe<MotionStatusScalarWhereInput[] | MotionStatusScalarWhereInput>;
    NOT?: Maybe<MotionStatusScalarWhereInput[] | MotionStatusScalarWhereInput>;
}
export interface MotionStatusUpdateManyWithWhereNestedInput {
    where: MotionStatusScalarWhereInput;
    data: MotionStatusUpdateManyDataInput;
}
export interface MotionStatusUpdateManyDataInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface PreimageUpdateOneWithoutMotionInput {
    create?: Maybe<PreimageCreateWithoutMotionInput>;
    update?: Maybe<PreimageUpdateWithoutMotionDataInput>;
    upsert?: Maybe<PreimageUpsertWithoutMotionInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageUpdateWithoutMotionDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
    section?: Maybe<String>;
}
export interface ProposalUpdateOneWithoutPreimageInput {
    create?: Maybe<ProposalCreateWithoutPreimageInput>;
    update?: Maybe<ProposalUpdateWithoutPreimageDataInput>;
    upsert?: Maybe<ProposalUpsertWithoutPreimageInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<ProposalWhereUniqueInput>;
}
export interface ProposalUpdateWithoutPreimageDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    preimageHash?: Maybe<String>;
    proposalId?: Maybe<Int>;
    proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>;
}
export interface ProposalStatusUpdateManyWithoutProposalInput {
    create?: Maybe<ProposalStatusCreateWithoutProposalInput[] | ProposalStatusCreateWithoutProposalInput>;
    delete?: Maybe<ProposalStatusWhereUniqueInput[] | ProposalStatusWhereUniqueInput>;
    connect?: Maybe<ProposalStatusWhereUniqueInput[] | ProposalStatusWhereUniqueInput>;
    set?: Maybe<ProposalStatusWhereUniqueInput[] | ProposalStatusWhereUniqueInput>;
    disconnect?: Maybe<ProposalStatusWhereUniqueInput[] | ProposalStatusWhereUniqueInput>;
    update?: Maybe<ProposalStatusUpdateWithWhereUniqueWithoutProposalInput[] | ProposalStatusUpdateWithWhereUniqueWithoutProposalInput>;
    upsert?: Maybe<ProposalStatusUpsertWithWhereUniqueWithoutProposalInput[] | ProposalStatusUpsertWithWhereUniqueWithoutProposalInput>;
    deleteMany?: Maybe<ProposalStatusScalarWhereInput[] | ProposalStatusScalarWhereInput>;
    updateMany?: Maybe<ProposalStatusUpdateManyWithWhereNestedInput[] | ProposalStatusUpdateManyWithWhereNestedInput>;
}
export interface ProposalStatusUpdateWithWhereUniqueWithoutProposalInput {
    where: ProposalStatusWhereUniqueInput;
    data: ProposalStatusUpdateWithoutProposalDataInput;
}
export interface ProposalStatusUpdateWithoutProposalDataInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ProposalStatusUpsertWithWhereUniqueWithoutProposalInput {
    where: ProposalStatusWhereUniqueInput;
    update: ProposalStatusUpdateWithoutProposalDataInput;
    create: ProposalStatusCreateWithoutProposalInput;
}
export interface ProposalStatusScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<ProposalStatusScalarWhereInput[] | ProposalStatusScalarWhereInput>;
    OR?: Maybe<ProposalStatusScalarWhereInput[] | ProposalStatusScalarWhereInput>;
    NOT?: Maybe<ProposalStatusScalarWhereInput[] | ProposalStatusScalarWhereInput>;
}
export interface ProposalStatusUpdateManyWithWhereNestedInput {
    where: ProposalStatusScalarWhereInput;
    data: ProposalStatusUpdateManyDataInput;
}
export interface ProposalStatusUpdateManyDataInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ProposalUpsertWithoutPreimageInput {
    update: ProposalUpdateWithoutPreimageDataInput;
    create: ProposalCreateWithoutPreimageInput;
}
export interface PreimageArgumentUpdateManyWithoutPreimageInput {
    create?: Maybe<PreimageArgumentCreateWithoutPreimageInput[] | PreimageArgumentCreateWithoutPreimageInput>;
    delete?: Maybe<PreimageArgumentWhereUniqueInput[] | PreimageArgumentWhereUniqueInput>;
    connect?: Maybe<PreimageArgumentWhereUniqueInput[] | PreimageArgumentWhereUniqueInput>;
    set?: Maybe<PreimageArgumentWhereUniqueInput[] | PreimageArgumentWhereUniqueInput>;
    disconnect?: Maybe<PreimageArgumentWhereUniqueInput[] | PreimageArgumentWhereUniqueInput>;
    update?: Maybe<PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput[] | PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput>;
    upsert?: Maybe<PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput[] | PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput>;
    deleteMany?: Maybe<PreimageArgumentScalarWhereInput[] | PreimageArgumentScalarWhereInput>;
    updateMany?: Maybe<PreimageArgumentUpdateManyWithWhereNestedInput[] | PreimageArgumentUpdateManyWithWhereNestedInput>;
}
export interface PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput {
    where: PreimageArgumentWhereUniqueInput;
    data: PreimageArgumentUpdateWithoutPreimageDataInput;
}
export interface PreimageArgumentUpdateWithoutPreimageDataInput {
    name?: Maybe<String>;
    value?: Maybe<String>;
}
export interface PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput {
    where: PreimageArgumentWhereUniqueInput;
    update: PreimageArgumentUpdateWithoutPreimageDataInput;
    create: PreimageArgumentCreateWithoutPreimageInput;
}
export interface PreimageArgumentScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    value?: Maybe<String>;
    value_not?: Maybe<String>;
    value_in?: Maybe<String[] | String>;
    value_not_in?: Maybe<String[] | String>;
    value_lt?: Maybe<String>;
    value_lte?: Maybe<String>;
    value_gt?: Maybe<String>;
    value_gte?: Maybe<String>;
    value_contains?: Maybe<String>;
    value_not_contains?: Maybe<String>;
    value_starts_with?: Maybe<String>;
    value_not_starts_with?: Maybe<String>;
    value_ends_with?: Maybe<String>;
    value_not_ends_with?: Maybe<String>;
    AND?: Maybe<PreimageArgumentScalarWhereInput[] | PreimageArgumentScalarWhereInput>;
    OR?: Maybe<PreimageArgumentScalarWhereInput[] | PreimageArgumentScalarWhereInput>;
    NOT?: Maybe<PreimageArgumentScalarWhereInput[] | PreimageArgumentScalarWhereInput>;
}
export interface PreimageArgumentUpdateManyWithWhereNestedInput {
    where: PreimageArgumentScalarWhereInput;
    data: PreimageArgumentUpdateManyDataInput;
}
export interface PreimageArgumentUpdateManyDataInput {
    name?: Maybe<String>;
    value?: Maybe<String>;
}
export interface PreimageStatusUpdateManyWithoutPreimageInput {
    create?: Maybe<PreimageStatusCreateWithoutPreimageInput[] | PreimageStatusCreateWithoutPreimageInput>;
    delete?: Maybe<PreimageStatusWhereUniqueInput[] | PreimageStatusWhereUniqueInput>;
    connect?: Maybe<PreimageStatusWhereUniqueInput[] | PreimageStatusWhereUniqueInput>;
    set?: Maybe<PreimageStatusWhereUniqueInput[] | PreimageStatusWhereUniqueInput>;
    disconnect?: Maybe<PreimageStatusWhereUniqueInput[] | PreimageStatusWhereUniqueInput>;
    update?: Maybe<PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput[] | PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput>;
    upsert?: Maybe<PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput[] | PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput>;
    deleteMany?: Maybe<PreimageStatusScalarWhereInput[] | PreimageStatusScalarWhereInput>;
    updateMany?: Maybe<PreimageStatusUpdateManyWithWhereNestedInput[] | PreimageStatusUpdateManyWithWhereNestedInput>;
}
export interface PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput {
    where: PreimageStatusWhereUniqueInput;
    data: PreimageStatusUpdateWithoutPreimageDataInput;
}
export interface PreimageStatusUpdateWithoutPreimageDataInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    status?: Maybe<String>;
}
export interface PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput {
    where: PreimageStatusWhereUniqueInput;
    update: PreimageStatusUpdateWithoutPreimageDataInput;
    create: PreimageStatusCreateWithoutPreimageInput;
}
export interface PreimageStatusScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    AND?: Maybe<PreimageStatusScalarWhereInput[] | PreimageStatusScalarWhereInput>;
    OR?: Maybe<PreimageStatusScalarWhereInput[] | PreimageStatusScalarWhereInput>;
    NOT?: Maybe<PreimageStatusScalarWhereInput[] | PreimageStatusScalarWhereInput>;
}
export interface PreimageStatusUpdateManyWithWhereNestedInput {
    where: PreimageStatusScalarWhereInput;
    data: PreimageStatusUpdateManyDataInput;
}
export interface PreimageStatusUpdateManyDataInput {
    status?: Maybe<String>;
}
export interface ReferendumUpdateOneWithoutPreimageInput {
    create?: Maybe<ReferendumCreateWithoutPreimageInput>;
    update?: Maybe<ReferendumUpdateWithoutPreimageDataInput>;
    upsert?: Maybe<ReferendumUpsertWithoutPreimageInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<ReferendumWhereUniqueInput>;
}
export interface ReferendumUpdateWithoutPreimageDataInput {
    delay?: Maybe<Int>;
    end?: Maybe<Int>;
    preimageHash?: Maybe<String>;
    referendumId?: Maybe<Int>;
    referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>;
    voteThreshold?: Maybe<String>;
}
export interface ReferendumStatusUpdateManyWithoutReferendumInput {
    create?: Maybe<ReferendumStatusCreateWithoutReferendumInput[] | ReferendumStatusCreateWithoutReferendumInput>;
    delete?: Maybe<ReferendumStatusWhereUniqueInput[] | ReferendumStatusWhereUniqueInput>;
    connect?: Maybe<ReferendumStatusWhereUniqueInput[] | ReferendumStatusWhereUniqueInput>;
    set?: Maybe<ReferendumStatusWhereUniqueInput[] | ReferendumStatusWhereUniqueInput>;
    disconnect?: Maybe<ReferendumStatusWhereUniqueInput[] | ReferendumStatusWhereUniqueInput>;
    update?: Maybe<ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput[] | ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput>;
    upsert?: Maybe<ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput[] | ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput>;
    deleteMany?: Maybe<ReferendumStatusScalarWhereInput[] | ReferendumStatusScalarWhereInput>;
    updateMany?: Maybe<ReferendumStatusUpdateManyWithWhereNestedInput[] | ReferendumStatusUpdateManyWithWhereNestedInput>;
}
export interface ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput {
    where: ReferendumStatusWhereUniqueInput;
    data: ReferendumStatusUpdateWithoutReferendumDataInput;
}
export interface ReferendumStatusUpdateWithoutReferendumDataInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput {
    where: ReferendumStatusWhereUniqueInput;
    update: ReferendumStatusUpdateWithoutReferendumDataInput;
    create: ReferendumStatusCreateWithoutReferendumInput;
}
export interface ReferendumStatusScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<ReferendumStatusScalarWhereInput[] | ReferendumStatusScalarWhereInput>;
    OR?: Maybe<ReferendumStatusScalarWhereInput[] | ReferendumStatusScalarWhereInput>;
    NOT?: Maybe<ReferendumStatusScalarWhereInput[] | ReferendumStatusScalarWhereInput>;
}
export interface ReferendumStatusUpdateManyWithWhereNestedInput {
    where: ReferendumStatusScalarWhereInput;
    data: ReferendumStatusUpdateManyDataInput;
}
export interface ReferendumStatusUpdateManyDataInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ReferendumUpsertWithoutPreimageInput {
    update: ReferendumUpdateWithoutPreimageDataInput;
    create: ReferendumCreateWithoutPreimageInput;
}
export interface PreimageUpsertWithoutMotionInput {
    update: PreimageUpdateWithoutMotionDataInput;
    create: PreimageCreateWithoutMotionInput;
}
export interface TreasurySpendProposalUpdateOneWithoutMotionInput {
    create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>;
    update?: Maybe<TreasurySpendProposalUpdateWithoutMotionDataInput>;
    upsert?: Maybe<TreasurySpendProposalUpsertWithoutMotionInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
}
export interface TreasurySpendProposalUpdateWithoutMotionDataInput {
    proposer?: Maybe<String>;
    beneficiary?: Maybe<String>;
    value?: Maybe<String>;
    bond?: Maybe<String>;
    treasuryProposalId?: Maybe<Int>;
    treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>;
}
export interface TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput {
    create?: Maybe<TreasuryStatusCreateWithoutTreasurySpendProposalInput[] | TreasuryStatusCreateWithoutTreasurySpendProposalInput>;
    delete?: Maybe<TreasuryStatusWhereUniqueInput[] | TreasuryStatusWhereUniqueInput>;
    connect?: Maybe<TreasuryStatusWhereUniqueInput[] | TreasuryStatusWhereUniqueInput>;
    set?: Maybe<TreasuryStatusWhereUniqueInput[] | TreasuryStatusWhereUniqueInput>;
    disconnect?: Maybe<TreasuryStatusWhereUniqueInput[] | TreasuryStatusWhereUniqueInput>;
    update?: Maybe<TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput[] | TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput>;
    upsert?: Maybe<TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput[] | TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput>;
    deleteMany?: Maybe<TreasuryStatusScalarWhereInput[] | TreasuryStatusScalarWhereInput>;
    updateMany?: Maybe<TreasuryStatusUpdateManyWithWhereNestedInput[] | TreasuryStatusUpdateManyWithWhereNestedInput>;
}
export interface TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput {
    where: TreasuryStatusWhereUniqueInput;
    data: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput;
}
export interface TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput {
    where: TreasuryStatusWhereUniqueInput;
    update: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput;
    create: TreasuryStatusCreateWithoutTreasurySpendProposalInput;
}
export interface TreasuryStatusScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    status?: Maybe<String>;
    status_not?: Maybe<String>;
    status_in?: Maybe<String[] | String>;
    status_not_in?: Maybe<String[] | String>;
    status_lt?: Maybe<String>;
    status_lte?: Maybe<String>;
    status_gt?: Maybe<String>;
    status_gte?: Maybe<String>;
    status_contains?: Maybe<String>;
    status_not_contains?: Maybe<String>;
    status_starts_with?: Maybe<String>;
    status_not_starts_with?: Maybe<String>;
    status_ends_with?: Maybe<String>;
    status_not_ends_with?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
    uniqueStatus_not?: Maybe<String>;
    uniqueStatus_in?: Maybe<String[] | String>;
    uniqueStatus_not_in?: Maybe<String[] | String>;
    uniqueStatus_lt?: Maybe<String>;
    uniqueStatus_lte?: Maybe<String>;
    uniqueStatus_gt?: Maybe<String>;
    uniqueStatus_gte?: Maybe<String>;
    uniqueStatus_contains?: Maybe<String>;
    uniqueStatus_not_contains?: Maybe<String>;
    uniqueStatus_starts_with?: Maybe<String>;
    uniqueStatus_not_starts_with?: Maybe<String>;
    uniqueStatus_ends_with?: Maybe<String>;
    uniqueStatus_not_ends_with?: Maybe<String>;
    AND?: Maybe<TreasuryStatusScalarWhereInput[] | TreasuryStatusScalarWhereInput>;
    OR?: Maybe<TreasuryStatusScalarWhereInput[] | TreasuryStatusScalarWhereInput>;
    NOT?: Maybe<TreasuryStatusScalarWhereInput[] | TreasuryStatusScalarWhereInput>;
}
export interface TreasuryStatusUpdateManyWithWhereNestedInput {
    where: TreasuryStatusScalarWhereInput;
    data: TreasuryStatusUpdateManyDataInput;
}
export interface TreasuryStatusUpdateManyDataInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface TreasurySpendProposalUpsertWithoutMotionInput {
    update: TreasurySpendProposalUpdateWithoutMotionDataInput;
    create: TreasurySpendProposalCreateWithoutMotionInput;
}
export interface MotionUpdateManyMutationInput {
    author?: Maybe<String>;
    memberCount?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motionProposalHash?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    preimageHash?: Maybe<String>;
    section?: Maybe<String>;
}
export interface MotionProposalArgumentCreateInput {
    id?: Maybe<ID_Input>;
    name: String;
    motion: MotionCreateOneWithoutMotionProposalArgumentsInput;
    value: String;
}
export interface MotionCreateOneWithoutMotionProposalArgumentsInput {
    create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionCreateWithoutMotionProposalArgumentsInput {
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalHash: String;
    motionProposalId: Int;
    motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
    preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
    section: String;
}
export interface MotionProposalArgumentUpdateInput {
    name?: Maybe<String>;
    motion?: Maybe<MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput>;
    value?: Maybe<String>;
}
export interface MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput {
    create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>;
    update?: Maybe<MotionUpdateWithoutMotionProposalArgumentsDataInput>;
    upsert?: Maybe<MotionUpsertWithoutMotionProposalArgumentsInput>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionUpdateWithoutMotionProposalArgumentsDataInput {
    author?: Maybe<String>;
    memberCount?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motionProposalHash?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
    preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
    section?: Maybe<String>;
}
export interface MotionUpsertWithoutMotionProposalArgumentsInput {
    update: MotionUpdateWithoutMotionProposalArgumentsDataInput;
    create: MotionCreateWithoutMotionProposalArgumentsInput;
}
export interface MotionProposalArgumentUpdateManyMutationInput {
    name?: Maybe<String>;
    value?: Maybe<String>;
}
export interface MotionStatusCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    motion: MotionCreateOneWithoutMotionStatusInput;
    status: String;
    uniqueStatus: String;
}
export interface MotionCreateOneWithoutMotionStatusInput {
    create?: Maybe<MotionCreateWithoutMotionStatusInput>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionCreateWithoutMotionStatusInput {
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
    motionProposalHash: String;
    motionProposalId: Int;
    preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
    section: String;
}
export interface MotionStatusUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    motion?: Maybe<MotionUpdateOneRequiredWithoutMotionStatusInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface MotionUpdateOneRequiredWithoutMotionStatusInput {
    create?: Maybe<MotionCreateWithoutMotionStatusInput>;
    update?: Maybe<MotionUpdateWithoutMotionStatusDataInput>;
    upsert?: Maybe<MotionUpsertWithoutMotionStatusInput>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionUpdateWithoutMotionStatusDataInput {
    author?: Maybe<String>;
    memberCount?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
    motionProposalHash?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
    section?: Maybe<String>;
}
export interface MotionUpsertWithoutMotionStatusInput {
    update: MotionUpdateWithoutMotionStatusDataInput;
    create: MotionCreateWithoutMotionStatusInput;
}
export interface MotionStatusUpdateManyMutationInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface NominationCreateInput {
    id?: Maybe<ID_Input>;
    validatorController: String;
    validatorStash: String;
    nominatorController: String;
    nominatorStash: String;
    session: SessionCreateOneInput;
    stakedAmount: String;
}
export interface NominationUpdateInput {
    validatorController?: Maybe<String>;
    validatorStash?: Maybe<String>;
    nominatorController?: Maybe<String>;
    nominatorStash?: Maybe<String>;
    session?: Maybe<SessionUpdateOneRequiredInput>;
    stakedAmount?: Maybe<String>;
}
export interface NominationUpdateManyMutationInput {
    validatorController?: Maybe<String>;
    validatorStash?: Maybe<String>;
    nominatorController?: Maybe<String>;
    nominatorStash?: Maybe<String>;
    stakedAmount?: Maybe<String>;
}
export interface OfflineValidatorCreateInput {
    id?: Maybe<ID_Input>;
    sessionIndex: SessionCreateOneInput;
    validatorId: String;
    total: String;
    own: String;
    others?: Maybe<OfflineValidatorCreateothersInput>;
}
export interface OfflineValidatorCreateothersInput {
    set?: Maybe<Json[] | Json>;
}
export interface OfflineValidatorUpdateInput {
    sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
    validatorId?: Maybe<String>;
    total?: Maybe<String>;
    own?: Maybe<String>;
    others?: Maybe<OfflineValidatorUpdateothersInput>;
}
export interface OfflineValidatorUpdateothersInput {
    set?: Maybe<Json[] | Json>;
}
export interface OfflineValidatorUpdateManyMutationInput {
    validatorId?: Maybe<String>;
    total?: Maybe<String>;
    own?: Maybe<String>;
    others?: Maybe<OfflineValidatorUpdateothersInput>;
}
export interface PreimageCreateInput {
    id?: Maybe<ID_Input>;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
    section: String;
}
export interface MotionCreateOneWithoutPreimageInput {
    create?: Maybe<MotionCreateWithoutPreimageInput>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionCreateWithoutPreimageInput {
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
    motionProposalHash: String;
    motionProposalId: Int;
    motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
    section: String;
}
export interface PreimageUpdateInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
    section?: Maybe<String>;
}
export interface MotionUpdateOneWithoutPreimageInput {
    create?: Maybe<MotionCreateWithoutPreimageInput>;
    update?: Maybe<MotionUpdateWithoutPreimageDataInput>;
    upsert?: Maybe<MotionUpsertWithoutPreimageInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionUpdateWithoutPreimageDataInput {
    author?: Maybe<String>;
    memberCount?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
    motionProposalHash?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
    section?: Maybe<String>;
}
export interface MotionUpsertWithoutPreimageInput {
    update: MotionUpdateWithoutPreimageDataInput;
    create: MotionCreateWithoutPreimageInput;
}
export interface PreimageUpdateManyMutationInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    section?: Maybe<String>;
}
export interface PreimageArgumentCreateInput {
    id?: Maybe<ID_Input>;
    name: String;
    preimage: PreimageCreateOneWithoutPreimageArgumentsInput;
    value: String;
}
export interface PreimageCreateOneWithoutPreimageArgumentsInput {
    create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageCreateWithoutPreimageArgumentsInput {
    id?: Maybe<ID_Input>;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
    section: String;
}
export interface PreimageArgumentUpdateInput {
    name?: Maybe<String>;
    preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageArgumentsInput>;
    value?: Maybe<String>;
}
export interface PreimageUpdateOneRequiredWithoutPreimageArgumentsInput {
    create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>;
    update?: Maybe<PreimageUpdateWithoutPreimageArgumentsDataInput>;
    upsert?: Maybe<PreimageUpsertWithoutPreimageArgumentsInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageUpdateWithoutPreimageArgumentsDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
    section?: Maybe<String>;
}
export interface PreimageUpsertWithoutPreimageArgumentsInput {
    update: PreimageUpdateWithoutPreimageArgumentsDataInput;
    create: PreimageCreateWithoutPreimageArgumentsInput;
}
export interface PreimageArgumentUpdateManyMutationInput {
    name?: Maybe<String>;
    value?: Maybe<String>;
}
export interface PreimageStatusCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    preimage: PreimageCreateOneWithoutPreimageStatusInput;
    status: String;
}
export interface PreimageCreateOneWithoutPreimageStatusInput {
    create?: Maybe<PreimageCreateWithoutPreimageStatusInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageCreateWithoutPreimageStatusInput {
    id?: Maybe<ID_Input>;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
    section: String;
}
export interface PreimageStatusUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageStatusInput>;
    status?: Maybe<String>;
}
export interface PreimageUpdateOneRequiredWithoutPreimageStatusInput {
    create?: Maybe<PreimageCreateWithoutPreimageStatusInput>;
    update?: Maybe<PreimageUpdateWithoutPreimageStatusDataInput>;
    upsert?: Maybe<PreimageUpsertWithoutPreimageStatusInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageUpdateWithoutPreimageStatusDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
    section?: Maybe<String>;
}
export interface PreimageUpsertWithoutPreimageStatusInput {
    update: PreimageUpdateWithoutPreimageStatusDataInput;
    create: PreimageCreateWithoutPreimageStatusInput;
}
export interface PreimageStatusUpdateManyMutationInput {
    status?: Maybe<String>;
}
export interface ProposalCreateInput {
    author: String;
    depositAmount: String;
    preimage?: Maybe<PreimageCreateOneWithoutProposalInput>;
    preimageHash: String;
    proposalId: Int;
    proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>;
}
export interface PreimageCreateOneWithoutProposalInput {
    create?: Maybe<PreimageCreateWithoutProposalInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageCreateWithoutProposalInput {
    id?: Maybe<ID_Input>;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
    section: String;
}
export interface ProposalUpdateInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>;
    preimageHash?: Maybe<String>;
    proposalId?: Maybe<Int>;
    proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>;
}
export interface PreimageUpdateOneWithoutProposalInput {
    create?: Maybe<PreimageCreateWithoutProposalInput>;
    update?: Maybe<PreimageUpdateWithoutProposalDataInput>;
    upsert?: Maybe<PreimageUpsertWithoutProposalInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageUpdateWithoutProposalDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
    referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
    section?: Maybe<String>;
}
export interface PreimageUpsertWithoutProposalInput {
    update: PreimageUpdateWithoutProposalDataInput;
    create: PreimageCreateWithoutProposalInput;
}
export interface ProposalUpdateManyMutationInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    preimageHash?: Maybe<String>;
    proposalId?: Maybe<Int>;
}
export interface ProposalStatusCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    proposal: ProposalCreateOneWithoutProposalStatusInput;
    status: String;
    uniqueStatus: String;
}
export interface ProposalCreateOneWithoutProposalStatusInput {
    create?: Maybe<ProposalCreateWithoutProposalStatusInput>;
    connect?: Maybe<ProposalWhereUniqueInput>;
}
export interface ProposalCreateWithoutProposalStatusInput {
    author: String;
    depositAmount: String;
    preimage?: Maybe<PreimageCreateOneWithoutProposalInput>;
    preimageHash: String;
    proposalId: Int;
}
export interface ProposalStatusUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    proposal?: Maybe<ProposalUpdateOneRequiredWithoutProposalStatusInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ProposalUpdateOneRequiredWithoutProposalStatusInput {
    create?: Maybe<ProposalCreateWithoutProposalStatusInput>;
    update?: Maybe<ProposalUpdateWithoutProposalStatusDataInput>;
    upsert?: Maybe<ProposalUpsertWithoutProposalStatusInput>;
    connect?: Maybe<ProposalWhereUniqueInput>;
}
export interface ProposalUpdateWithoutProposalStatusDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>;
    preimageHash?: Maybe<String>;
    proposalId?: Maybe<Int>;
}
export interface ProposalUpsertWithoutProposalStatusInput {
    update: ProposalUpdateWithoutProposalStatusDataInput;
    create: ProposalCreateWithoutProposalStatusInput;
}
export interface ProposalStatusUpdateManyMutationInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ReferendumCreateInput {
    delay: Int;
    end: Int;
    preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>;
    preimageHash: String;
    referendumId: Int;
    referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>;
    voteThreshold: String;
}
export interface PreimageCreateOneWithoutReferendumInput {
    create?: Maybe<PreimageCreateWithoutReferendumInput>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageCreateWithoutReferendumInput {
    id?: Maybe<ID_Input>;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
    section: String;
}
export interface ReferendumUpdateInput {
    delay?: Maybe<Int>;
    end?: Maybe<Int>;
    preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>;
    preimageHash?: Maybe<String>;
    referendumId?: Maybe<Int>;
    referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>;
    voteThreshold?: Maybe<String>;
}
export interface PreimageUpdateOneWithoutReferendumInput {
    create?: Maybe<PreimageCreateWithoutReferendumInput>;
    update?: Maybe<PreimageUpdateWithoutReferendumDataInput>;
    upsert?: Maybe<PreimageUpsertWithoutReferendumInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<PreimageWhereUniqueInput>;
}
export interface PreimageUpdateWithoutReferendumDataInput {
    author?: Maybe<String>;
    depositAmount?: Maybe<String>;
    hash?: Maybe<String>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
    proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
    preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
    preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
    section?: Maybe<String>;
}
export interface PreimageUpsertWithoutReferendumInput {
    update: PreimageUpdateWithoutReferendumDataInput;
    create: PreimageCreateWithoutReferendumInput;
}
export interface ReferendumUpdateManyMutationInput {
    delay?: Maybe<Int>;
    end?: Maybe<Int>;
    preimageHash?: Maybe<String>;
    referendumId?: Maybe<Int>;
    voteThreshold?: Maybe<String>;
}
export interface ReferendumStatusCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    referendum: ReferendumCreateOneWithoutReferendumStatusInput;
    status: String;
    uniqueStatus: String;
}
export interface ReferendumCreateOneWithoutReferendumStatusInput {
    create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>;
    connect?: Maybe<ReferendumWhereUniqueInput>;
}
export interface ReferendumCreateWithoutReferendumStatusInput {
    delay: Int;
    end: Int;
    preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>;
    preimageHash: String;
    referendumId: Int;
    voteThreshold: String;
}
export interface ReferendumStatusUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    referendum?: Maybe<ReferendumUpdateOneRequiredWithoutReferendumStatusInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ReferendumUpdateOneRequiredWithoutReferendumStatusInput {
    create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>;
    update?: Maybe<ReferendumUpdateWithoutReferendumStatusDataInput>;
    upsert?: Maybe<ReferendumUpsertWithoutReferendumStatusInput>;
    connect?: Maybe<ReferendumWhereUniqueInput>;
}
export interface ReferendumUpdateWithoutReferendumStatusDataInput {
    delay?: Maybe<Int>;
    end?: Maybe<Int>;
    preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>;
    preimageHash?: Maybe<String>;
    referendumId?: Maybe<Int>;
    voteThreshold?: Maybe<String>;
}
export interface ReferendumUpsertWithoutReferendumStatusInput {
    update: ReferendumUpdateWithoutReferendumStatusDataInput;
    create: ReferendumCreateWithoutReferendumStatusInput;
}
export interface ReferendumStatusUpdateManyMutationInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface RewardCreateInput {
    id?: Maybe<ID_Input>;
    authoredBlock: BlockNumberCreateOneInput;
    sessionIndex: SessionCreateOneInput;
    treasuryReward: String;
    validatorReward: String;
}
export interface RewardUpdateInput {
    authoredBlock?: Maybe<BlockNumberUpdateOneRequiredInput>;
    sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
    treasuryReward?: Maybe<String>;
    validatorReward?: Maybe<String>;
}
export interface RewardUpdateManyMutationInput {
    treasuryReward?: Maybe<String>;
    validatorReward?: Maybe<String>;
}
export interface SessionUpdateInput {
    index?: Maybe<Int>;
    start?: Maybe<BlockNumberUpdateOneRequiredInput>;
}
export interface SessionUpdateManyMutationInput {
    index?: Maybe<Int>;
}
export interface SlashingCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    who: String;
    amount: String;
}
export interface SlashingUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    who?: Maybe<String>;
    amount?: Maybe<String>;
}
export interface SlashingUpdateManyMutationInput {
    who?: Maybe<String>;
    amount?: Maybe<String>;
}
export interface StakeCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    totalStake: String;
}
export interface StakeUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    totalStake?: Maybe<String>;
}
export interface StakeUpdateManyMutationInput {
    totalStake?: Maybe<String>;
}
export interface TotalIssuanceCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    amount: String;
}
export interface TotalIssuanceUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    amount?: Maybe<String>;
}
export interface TotalIssuanceUpdateManyMutationInput {
    amount?: Maybe<String>;
}
export interface TreasurySpendProposalCreateInput {
    proposer: String;
    beneficiary: String;
    value: String;
    bond: String;
    treasuryProposalId: Int;
    treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>;
    motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>;
}
export interface MotionCreateOneWithoutTreasurySpendProposalInput {
    create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionCreateWithoutTreasurySpendProposalInput {
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
    motionProposalHash: String;
    motionProposalId: Int;
    motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
    preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    section: String;
}
export interface TreasurySpendProposalUpdateInput {
    proposer?: Maybe<String>;
    beneficiary?: Maybe<String>;
    value?: Maybe<String>;
    bond?: Maybe<String>;
    treasuryProposalId?: Maybe<Int>;
    treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>;
    motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>;
}
export interface MotionUpdateOneWithoutTreasurySpendProposalInput {
    create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>;
    update?: Maybe<MotionUpdateWithoutTreasurySpendProposalDataInput>;
    upsert?: Maybe<MotionUpsertWithoutTreasurySpendProposalInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<MotionWhereUniqueInput>;
}
export interface MotionUpdateWithoutTreasurySpendProposalDataInput {
    author?: Maybe<String>;
    memberCount?: Maybe<Int>;
    metaDescription?: Maybe<String>;
    method?: Maybe<String>;
    motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
    motionProposalHash?: Maybe<String>;
    motionProposalId?: Maybe<Int>;
    motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
    preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
    preimageHash?: Maybe<String>;
    section?: Maybe<String>;
}
export interface MotionUpsertWithoutTreasurySpendProposalInput {
    update: MotionUpdateWithoutTreasurySpendProposalDataInput;
    create: MotionCreateWithoutTreasurySpendProposalInput;
}
export interface TreasurySpendProposalUpdateManyMutationInput {
    proposer?: Maybe<String>;
    beneficiary?: Maybe<String>;
    value?: Maybe<String>;
    bond?: Maybe<String>;
    treasuryProposalId?: Maybe<Int>;
}
export interface TreasuryStatusCreateInput {
    id?: Maybe<ID_Input>;
    blockNumber: BlockNumberCreateOneInput;
    treasurySpendProposal: TreasurySpendProposalCreateOneWithoutTreasuryStatusInput;
    status: String;
    uniqueStatus: String;
}
export interface TreasurySpendProposalCreateOneWithoutTreasuryStatusInput {
    create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>;
    connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
}
export interface TreasurySpendProposalCreateWithoutTreasuryStatusInput {
    proposer: String;
    beneficiary: String;
    value: String;
    bond: String;
    treasuryProposalId: Int;
    motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>;
}
export interface TreasuryStatusUpdateInput {
    blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
    treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput>;
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput {
    create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>;
    update?: Maybe<TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput>;
    upsert?: Maybe<TreasurySpendProposalUpsertWithoutTreasuryStatusInput>;
    connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
}
export interface TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput {
    proposer?: Maybe<String>;
    beneficiary?: Maybe<String>;
    value?: Maybe<String>;
    bond?: Maybe<String>;
    treasuryProposalId?: Maybe<Int>;
    motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>;
}
export interface TreasurySpendProposalUpsertWithoutTreasuryStatusInput {
    update: TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput;
    create: TreasurySpendProposalCreateWithoutTreasuryStatusInput;
}
export interface TreasuryStatusUpdateManyMutationInput {
    status?: Maybe<String>;
    uniqueStatus?: Maybe<String>;
}
export interface ValidatorCreateInput {
    id?: Maybe<ID_Input>;
    session: SessionCreateOneInput;
    controller: String;
    stash: String;
    preferences: String;
}
export interface ValidatorUpdateInput {
    session?: Maybe<SessionUpdateOneRequiredInput>;
    controller?: Maybe<String>;
    stash?: Maybe<String>;
    preferences?: Maybe<String>;
}
export interface ValidatorUpdateManyMutationInput {
    controller?: Maybe<String>;
    stash?: Maybe<String>;
    preferences?: Maybe<String>;
}
export interface BlockIndexSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<BlockIndexWhereInput>;
    AND?: Maybe<BlockIndexSubscriptionWhereInput[] | BlockIndexSubscriptionWhereInput>;
    OR?: Maybe<BlockIndexSubscriptionWhereInput[] | BlockIndexSubscriptionWhereInput>;
    NOT?: Maybe<BlockIndexSubscriptionWhereInput[] | BlockIndexSubscriptionWhereInput>;
}
export interface BlockNumberSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<BlockNumberWhereInput>;
    AND?: Maybe<BlockNumberSubscriptionWhereInput[] | BlockNumberSubscriptionWhereInput>;
    OR?: Maybe<BlockNumberSubscriptionWhereInput[] | BlockNumberSubscriptionWhereInput>;
    NOT?: Maybe<BlockNumberSubscriptionWhereInput[] | BlockNumberSubscriptionWhereInput>;
}
export interface CouncilSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<CouncilWhereInput>;
    AND?: Maybe<CouncilSubscriptionWhereInput[] | CouncilSubscriptionWhereInput>;
    OR?: Maybe<CouncilSubscriptionWhereInput[] | CouncilSubscriptionWhereInput>;
    NOT?: Maybe<CouncilSubscriptionWhereInput[] | CouncilSubscriptionWhereInput>;
}
export interface CouncilMemberSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<CouncilMemberWhereInput>;
    AND?: Maybe<CouncilMemberSubscriptionWhereInput[] | CouncilMemberSubscriptionWhereInput>;
    OR?: Maybe<CouncilMemberSubscriptionWhereInput[] | CouncilMemberSubscriptionWhereInput>;
    NOT?: Maybe<CouncilMemberSubscriptionWhereInput[] | CouncilMemberSubscriptionWhereInput>;
}
export interface EraSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<EraWhereInput>;
    AND?: Maybe<EraSubscriptionWhereInput[] | EraSubscriptionWhereInput>;
    OR?: Maybe<EraSubscriptionWhereInput[] | EraSubscriptionWhereInput>;
    NOT?: Maybe<EraSubscriptionWhereInput[] | EraSubscriptionWhereInput>;
}
export interface HeartBeatSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<HeartBeatWhereInput>;
    AND?: Maybe<HeartBeatSubscriptionWhereInput[] | HeartBeatSubscriptionWhereInput>;
    OR?: Maybe<HeartBeatSubscriptionWhereInput[] | HeartBeatSubscriptionWhereInput>;
    NOT?: Maybe<HeartBeatSubscriptionWhereInput[] | HeartBeatSubscriptionWhereInput>;
}
export interface MotionSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<MotionWhereInput>;
    AND?: Maybe<MotionSubscriptionWhereInput[] | MotionSubscriptionWhereInput>;
    OR?: Maybe<MotionSubscriptionWhereInput[] | MotionSubscriptionWhereInput>;
    NOT?: Maybe<MotionSubscriptionWhereInput[] | MotionSubscriptionWhereInput>;
}
export interface MotionProposalArgumentSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<MotionProposalArgumentWhereInput>;
    AND?: Maybe<MotionProposalArgumentSubscriptionWhereInput[] | MotionProposalArgumentSubscriptionWhereInput>;
    OR?: Maybe<MotionProposalArgumentSubscriptionWhereInput[] | MotionProposalArgumentSubscriptionWhereInput>;
    NOT?: Maybe<MotionProposalArgumentSubscriptionWhereInput[] | MotionProposalArgumentSubscriptionWhereInput>;
}
export interface MotionStatusSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<MotionStatusWhereInput>;
    AND?: Maybe<MotionStatusSubscriptionWhereInput[] | MotionStatusSubscriptionWhereInput>;
    OR?: Maybe<MotionStatusSubscriptionWhereInput[] | MotionStatusSubscriptionWhereInput>;
    NOT?: Maybe<MotionStatusSubscriptionWhereInput[] | MotionStatusSubscriptionWhereInput>;
}
export interface NominationSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<NominationWhereInput>;
    AND?: Maybe<NominationSubscriptionWhereInput[] | NominationSubscriptionWhereInput>;
    OR?: Maybe<NominationSubscriptionWhereInput[] | NominationSubscriptionWhereInput>;
    NOT?: Maybe<NominationSubscriptionWhereInput[] | NominationSubscriptionWhereInput>;
}
export interface OfflineValidatorSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<OfflineValidatorWhereInput>;
    AND?: Maybe<OfflineValidatorSubscriptionWhereInput[] | OfflineValidatorSubscriptionWhereInput>;
    OR?: Maybe<OfflineValidatorSubscriptionWhereInput[] | OfflineValidatorSubscriptionWhereInput>;
    NOT?: Maybe<OfflineValidatorSubscriptionWhereInput[] | OfflineValidatorSubscriptionWhereInput>;
}
export interface PreimageSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<PreimageWhereInput>;
    AND?: Maybe<PreimageSubscriptionWhereInput[] | PreimageSubscriptionWhereInput>;
    OR?: Maybe<PreimageSubscriptionWhereInput[] | PreimageSubscriptionWhereInput>;
    NOT?: Maybe<PreimageSubscriptionWhereInput[] | PreimageSubscriptionWhereInput>;
}
export interface PreimageArgumentSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<PreimageArgumentWhereInput>;
    AND?: Maybe<PreimageArgumentSubscriptionWhereInput[] | PreimageArgumentSubscriptionWhereInput>;
    OR?: Maybe<PreimageArgumentSubscriptionWhereInput[] | PreimageArgumentSubscriptionWhereInput>;
    NOT?: Maybe<PreimageArgumentSubscriptionWhereInput[] | PreimageArgumentSubscriptionWhereInput>;
}
export interface PreimageStatusSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<PreimageStatusWhereInput>;
    AND?: Maybe<PreimageStatusSubscriptionWhereInput[] | PreimageStatusSubscriptionWhereInput>;
    OR?: Maybe<PreimageStatusSubscriptionWhereInput[] | PreimageStatusSubscriptionWhereInput>;
    NOT?: Maybe<PreimageStatusSubscriptionWhereInput[] | PreimageStatusSubscriptionWhereInput>;
}
export interface ProposalSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<ProposalWhereInput>;
    AND?: Maybe<ProposalSubscriptionWhereInput[] | ProposalSubscriptionWhereInput>;
    OR?: Maybe<ProposalSubscriptionWhereInput[] | ProposalSubscriptionWhereInput>;
    NOT?: Maybe<ProposalSubscriptionWhereInput[] | ProposalSubscriptionWhereInput>;
}
export interface ProposalStatusSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<ProposalStatusWhereInput>;
    AND?: Maybe<ProposalStatusSubscriptionWhereInput[] | ProposalStatusSubscriptionWhereInput>;
    OR?: Maybe<ProposalStatusSubscriptionWhereInput[] | ProposalStatusSubscriptionWhereInput>;
    NOT?: Maybe<ProposalStatusSubscriptionWhereInput[] | ProposalStatusSubscriptionWhereInput>;
}
export interface ReferendumSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<ReferendumWhereInput>;
    AND?: Maybe<ReferendumSubscriptionWhereInput[] | ReferendumSubscriptionWhereInput>;
    OR?: Maybe<ReferendumSubscriptionWhereInput[] | ReferendumSubscriptionWhereInput>;
    NOT?: Maybe<ReferendumSubscriptionWhereInput[] | ReferendumSubscriptionWhereInput>;
}
export interface ReferendumStatusSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<ReferendumStatusWhereInput>;
    AND?: Maybe<ReferendumStatusSubscriptionWhereInput[] | ReferendumStatusSubscriptionWhereInput>;
    OR?: Maybe<ReferendumStatusSubscriptionWhereInput[] | ReferendumStatusSubscriptionWhereInput>;
    NOT?: Maybe<ReferendumStatusSubscriptionWhereInput[] | ReferendumStatusSubscriptionWhereInput>;
}
export interface RewardSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<RewardWhereInput>;
    AND?: Maybe<RewardSubscriptionWhereInput[] | RewardSubscriptionWhereInput>;
    OR?: Maybe<RewardSubscriptionWhereInput[] | RewardSubscriptionWhereInput>;
    NOT?: Maybe<RewardSubscriptionWhereInput[] | RewardSubscriptionWhereInput>;
}
export interface SessionSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<SessionWhereInput>;
    AND?: Maybe<SessionSubscriptionWhereInput[] | SessionSubscriptionWhereInput>;
    OR?: Maybe<SessionSubscriptionWhereInput[] | SessionSubscriptionWhereInput>;
    NOT?: Maybe<SessionSubscriptionWhereInput[] | SessionSubscriptionWhereInput>;
}
export interface SlashingSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<SlashingWhereInput>;
    AND?: Maybe<SlashingSubscriptionWhereInput[] | SlashingSubscriptionWhereInput>;
    OR?: Maybe<SlashingSubscriptionWhereInput[] | SlashingSubscriptionWhereInput>;
    NOT?: Maybe<SlashingSubscriptionWhereInput[] | SlashingSubscriptionWhereInput>;
}
export interface StakeSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<StakeWhereInput>;
    AND?: Maybe<StakeSubscriptionWhereInput[] | StakeSubscriptionWhereInput>;
    OR?: Maybe<StakeSubscriptionWhereInput[] | StakeSubscriptionWhereInput>;
    NOT?: Maybe<StakeSubscriptionWhereInput[] | StakeSubscriptionWhereInput>;
}
export interface TotalIssuanceSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<TotalIssuanceWhereInput>;
    AND?: Maybe<TotalIssuanceSubscriptionWhereInput[] | TotalIssuanceSubscriptionWhereInput>;
    OR?: Maybe<TotalIssuanceSubscriptionWhereInput[] | TotalIssuanceSubscriptionWhereInput>;
    NOT?: Maybe<TotalIssuanceSubscriptionWhereInput[] | TotalIssuanceSubscriptionWhereInput>;
}
export interface TreasurySpendProposalSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<TreasurySpendProposalWhereInput>;
    AND?: Maybe<TreasurySpendProposalSubscriptionWhereInput[] | TreasurySpendProposalSubscriptionWhereInput>;
    OR?: Maybe<TreasurySpendProposalSubscriptionWhereInput[] | TreasurySpendProposalSubscriptionWhereInput>;
    NOT?: Maybe<TreasurySpendProposalSubscriptionWhereInput[] | TreasurySpendProposalSubscriptionWhereInput>;
}
export interface TreasuryStatusSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<TreasuryStatusWhereInput>;
    AND?: Maybe<TreasuryStatusSubscriptionWhereInput[] | TreasuryStatusSubscriptionWhereInput>;
    OR?: Maybe<TreasuryStatusSubscriptionWhereInput[] | TreasuryStatusSubscriptionWhereInput>;
    NOT?: Maybe<TreasuryStatusSubscriptionWhereInput[] | TreasuryStatusSubscriptionWhereInput>;
}
export interface ValidatorSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<ValidatorWhereInput>;
    AND?: Maybe<ValidatorSubscriptionWhereInput[] | ValidatorSubscriptionWhereInput>;
    OR?: Maybe<ValidatorSubscriptionWhereInput[] | ValidatorSubscriptionWhereInput>;
    NOT?: Maybe<ValidatorSubscriptionWhereInput[] | ValidatorSubscriptionWhereInput>;
}
export interface NodeNode {
    id: ID_Output;
}
export interface BlockIndex {
    id: ID_Output;
    identifier: String;
    startFrom: Int;
    index: Int;
}
export interface BlockIndexPromise extends Promise<BlockIndex>, Fragmentable {
    id: () => Promise<ID_Output>;
    identifier: () => Promise<String>;
    startFrom: () => Promise<Int>;
    index: () => Promise<Int>;
}
export interface BlockIndexSubscription extends Promise<AsyncIterator<BlockIndex>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    identifier: () => Promise<AsyncIterator<String>>;
    startFrom: () => Promise<AsyncIterator<Int>>;
    index: () => Promise<AsyncIterator<Int>>;
}
export interface BlockIndexNullablePromise extends Promise<BlockIndex | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    identifier: () => Promise<String>;
    startFrom: () => Promise<Int>;
    index: () => Promise<Int>;
}
export interface BlockIndexConnection {
    pageInfo: PageInfo;
    edges: BlockIndexEdge[];
}
export interface BlockIndexConnectionPromise extends Promise<BlockIndexConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<BlockIndexEdge>>() => T;
    aggregate: <T = AggregateBlockIndexPromise>() => T;
}
export interface BlockIndexConnectionSubscription extends Promise<AsyncIterator<BlockIndexConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<BlockIndexEdgeSubscription>>>() => T;
    aggregate: <T = AggregateBlockIndexSubscription>() => T;
}
export interface PageInfo {
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor?: String;
    endCursor?: String;
}
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
    hasNextPage: () => Promise<Boolean>;
    hasPreviousPage: () => Promise<Boolean>;
    startCursor: () => Promise<String>;
    endCursor: () => Promise<String>;
}
export interface PageInfoSubscription extends Promise<AsyncIterator<PageInfo>>, Fragmentable {
    hasNextPage: () => Promise<AsyncIterator<Boolean>>;
    hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
    startCursor: () => Promise<AsyncIterator<String>>;
    endCursor: () => Promise<AsyncIterator<String>>;
}
export interface BlockIndexEdge {
    node: BlockIndex;
    cursor: String;
}
export interface BlockIndexEdgePromise extends Promise<BlockIndexEdge>, Fragmentable {
    node: <T = BlockIndexPromise>() => T;
    cursor: () => Promise<String>;
}
export interface BlockIndexEdgeSubscription extends Promise<AsyncIterator<BlockIndexEdge>>, Fragmentable {
    node: <T = BlockIndexSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateBlockIndex {
    count: Int;
}
export interface AggregateBlockIndexPromise extends Promise<AggregateBlockIndex>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateBlockIndexSubscription extends Promise<AsyncIterator<AggregateBlockIndex>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface BlockNumber {
    id: ID_Output;
    number: Int;
    authoredBy: String;
    startDateTime: DateTimeOutput;
    hash: String;
}
export interface BlockNumberPromise extends Promise<BlockNumber>, Fragmentable {
    id: () => Promise<ID_Output>;
    number: () => Promise<Int>;
    authoredBy: () => Promise<String>;
    startDateTime: () => Promise<DateTimeOutput>;
    hash: () => Promise<String>;
}
export interface BlockNumberSubscription extends Promise<AsyncIterator<BlockNumber>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    number: () => Promise<AsyncIterator<Int>>;
    authoredBy: () => Promise<AsyncIterator<String>>;
    startDateTime: () => Promise<AsyncIterator<DateTimeOutput>>;
    hash: () => Promise<AsyncIterator<String>>;
}
export interface BlockNumberNullablePromise extends Promise<BlockNumber | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    number: () => Promise<Int>;
    authoredBy: () => Promise<String>;
    startDateTime: () => Promise<DateTimeOutput>;
    hash: () => Promise<String>;
}
export interface BlockNumberConnection {
    pageInfo: PageInfo;
    edges: BlockNumberEdge[];
}
export interface BlockNumberConnectionPromise extends Promise<BlockNumberConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<BlockNumberEdge>>() => T;
    aggregate: <T = AggregateBlockNumberPromise>() => T;
}
export interface BlockNumberConnectionSubscription extends Promise<AsyncIterator<BlockNumberConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<BlockNumberEdgeSubscription>>>() => T;
    aggregate: <T = AggregateBlockNumberSubscription>() => T;
}
export interface BlockNumberEdge {
    node: BlockNumber;
    cursor: String;
}
export interface BlockNumberEdgePromise extends Promise<BlockNumberEdge>, Fragmentable {
    node: <T = BlockNumberPromise>() => T;
    cursor: () => Promise<String>;
}
export interface BlockNumberEdgeSubscription extends Promise<AsyncIterator<BlockNumberEdge>>, Fragmentable {
    node: <T = BlockNumberSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateBlockNumber {
    count: Int;
}
export interface AggregateBlockNumberPromise extends Promise<AggregateBlockNumber>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateBlockNumberSubscription extends Promise<AsyncIterator<AggregateBlockNumber>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Council {
    id: ID_Output;
}
export interface CouncilPromise extends Promise<Council>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    members: <T = FragmentableArray<CouncilMember>>(args?: {
        where?: CouncilMemberWhereInput;
        orderBy?: CouncilMemberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CouncilSubscription extends Promise<AsyncIterator<Council>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    members: <T = Promise<AsyncIterator<CouncilMemberSubscription>>>(args?: {
        where?: CouncilMemberWhereInput;
        orderBy?: CouncilMemberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CouncilNullablePromise extends Promise<Council | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    members: <T = FragmentableArray<CouncilMember>>(args?: {
        where?: CouncilMemberWhereInput;
        orderBy?: CouncilMemberOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CouncilMember {
    id: ID_Output;
    address: String;
}
export interface CouncilMemberPromise extends Promise<CouncilMember>, Fragmentable {
    id: () => Promise<ID_Output>;
    address: () => Promise<String>;
    councils: <T = FragmentableArray<Council>>(args?: {
        where?: CouncilWhereInput;
        orderBy?: CouncilOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CouncilMemberSubscription extends Promise<AsyncIterator<CouncilMember>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    address: () => Promise<AsyncIterator<String>>;
    councils: <T = Promise<AsyncIterator<CouncilSubscription>>>(args?: {
        where?: CouncilWhereInput;
        orderBy?: CouncilOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CouncilMemberNullablePromise extends Promise<CouncilMember | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    address: () => Promise<String>;
    councils: <T = FragmentableArray<Council>>(args?: {
        where?: CouncilWhereInput;
        orderBy?: CouncilOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CouncilConnection {
    pageInfo: PageInfo;
    edges: CouncilEdge[];
}
export interface CouncilConnectionPromise extends Promise<CouncilConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<CouncilEdge>>() => T;
    aggregate: <T = AggregateCouncilPromise>() => T;
}
export interface CouncilConnectionSubscription extends Promise<AsyncIterator<CouncilConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<CouncilEdgeSubscription>>>() => T;
    aggregate: <T = AggregateCouncilSubscription>() => T;
}
export interface CouncilEdge {
    node: Council;
    cursor: String;
}
export interface CouncilEdgePromise extends Promise<CouncilEdge>, Fragmentable {
    node: <T = CouncilPromise>() => T;
    cursor: () => Promise<String>;
}
export interface CouncilEdgeSubscription extends Promise<AsyncIterator<CouncilEdge>>, Fragmentable {
    node: <T = CouncilSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateCouncil {
    count: Int;
}
export interface AggregateCouncilPromise extends Promise<AggregateCouncil>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateCouncilSubscription extends Promise<AsyncIterator<AggregateCouncil>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface CouncilMemberConnection {
    pageInfo: PageInfo;
    edges: CouncilMemberEdge[];
}
export interface CouncilMemberConnectionPromise extends Promise<CouncilMemberConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<CouncilMemberEdge>>() => T;
    aggregate: <T = AggregateCouncilMemberPromise>() => T;
}
export interface CouncilMemberConnectionSubscription extends Promise<AsyncIterator<CouncilMemberConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<CouncilMemberEdgeSubscription>>>() => T;
    aggregate: <T = AggregateCouncilMemberSubscription>() => T;
}
export interface CouncilMemberEdge {
    node: CouncilMember;
    cursor: String;
}
export interface CouncilMemberEdgePromise extends Promise<CouncilMemberEdge>, Fragmentable {
    node: <T = CouncilMemberPromise>() => T;
    cursor: () => Promise<String>;
}
export interface CouncilMemberEdgeSubscription extends Promise<AsyncIterator<CouncilMemberEdge>>, Fragmentable {
    node: <T = CouncilMemberSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateCouncilMember {
    count: Int;
}
export interface AggregateCouncilMemberPromise extends Promise<AggregateCouncilMember>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateCouncilMemberSubscription extends Promise<AsyncIterator<AggregateCouncilMember>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Era {
    id: ID_Output;
    index: Int;
    totalPoints: String;
    individualPoints: String[];
}
export interface EraPromise extends Promise<Era>, Fragmentable {
    id: () => Promise<ID_Output>;
    index: () => Promise<Int>;
    eraStartSessionIndex: <T = SessionPromise>() => T;
    totalPoints: () => Promise<String>;
    individualPoints: () => Promise<String[]>;
}
export interface EraSubscription extends Promise<AsyncIterator<Era>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    index: () => Promise<AsyncIterator<Int>>;
    eraStartSessionIndex: <T = SessionSubscription>() => T;
    totalPoints: () => Promise<AsyncIterator<String>>;
    individualPoints: () => Promise<AsyncIterator<String[]>>;
}
export interface EraNullablePromise extends Promise<Era | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    index: () => Promise<Int>;
    eraStartSessionIndex: <T = SessionPromise>() => T;
    totalPoints: () => Promise<String>;
    individualPoints: () => Promise<String[]>;
}
export interface Session {
    id: ID_Output;
    index: Int;
}
export interface SessionPromise extends Promise<Session>, Fragmentable {
    id: () => Promise<ID_Output>;
    index: () => Promise<Int>;
    start: <T = BlockNumberPromise>() => T;
}
export interface SessionSubscription extends Promise<AsyncIterator<Session>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    index: () => Promise<AsyncIterator<Int>>;
    start: <T = BlockNumberSubscription>() => T;
}
export interface SessionNullablePromise extends Promise<Session | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    index: () => Promise<Int>;
    start: <T = BlockNumberPromise>() => T;
}
export interface EraConnection {
    pageInfo: PageInfo;
    edges: EraEdge[];
}
export interface EraConnectionPromise extends Promise<EraConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<EraEdge>>() => T;
    aggregate: <T = AggregateEraPromise>() => T;
}
export interface EraConnectionSubscription extends Promise<AsyncIterator<EraConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<EraEdgeSubscription>>>() => T;
    aggregate: <T = AggregateEraSubscription>() => T;
}
export interface EraEdge {
    node: Era;
    cursor: String;
}
export interface EraEdgePromise extends Promise<EraEdge>, Fragmentable {
    node: <T = EraPromise>() => T;
    cursor: () => Promise<String>;
}
export interface EraEdgeSubscription extends Promise<AsyncIterator<EraEdge>>, Fragmentable {
    node: <T = EraSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateEra {
    count: Int;
}
export interface AggregateEraPromise extends Promise<AggregateEra>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateEraSubscription extends Promise<AsyncIterator<AggregateEra>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface HeartBeat {
    id: ID_Output;
    authorityId: String;
}
export interface HeartBeatPromise extends Promise<HeartBeat>, Fragmentable {
    id: () => Promise<ID_Output>;
    sessionIndex: <T = SessionPromise>() => T;
    authorityId: () => Promise<String>;
}
export interface HeartBeatSubscription extends Promise<AsyncIterator<HeartBeat>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    sessionIndex: <T = SessionSubscription>() => T;
    authorityId: () => Promise<AsyncIterator<String>>;
}
export interface HeartBeatNullablePromise extends Promise<HeartBeat | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    sessionIndex: <T = SessionPromise>() => T;
    authorityId: () => Promise<String>;
}
export interface HeartBeatConnection {
    pageInfo: PageInfo;
    edges: HeartBeatEdge[];
}
export interface HeartBeatConnectionPromise extends Promise<HeartBeatConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<HeartBeatEdge>>() => T;
    aggregate: <T = AggregateHeartBeatPromise>() => T;
}
export interface HeartBeatConnectionSubscription extends Promise<AsyncIterator<HeartBeatConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<HeartBeatEdgeSubscription>>>() => T;
    aggregate: <T = AggregateHeartBeatSubscription>() => T;
}
export interface HeartBeatEdge {
    node: HeartBeat;
    cursor: String;
}
export interface HeartBeatEdgePromise extends Promise<HeartBeatEdge>, Fragmentable {
    node: <T = HeartBeatPromise>() => T;
    cursor: () => Promise<String>;
}
export interface HeartBeatEdgeSubscription extends Promise<AsyncIterator<HeartBeatEdge>>, Fragmentable {
    node: <T = HeartBeatSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateHeartBeat {
    count: Int;
}
export interface AggregateHeartBeatPromise extends Promise<AggregateHeartBeat>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateHeartBeatSubscription extends Promise<AsyncIterator<AggregateHeartBeat>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Motion {
    id: Int;
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalHash: String;
    motionProposalId: Int;
    preimageHash?: String;
    section: String;
}
export interface MotionPromise extends Promise<Motion>, Fragmentable {
    id: () => Promise<Int>;
    author: () => Promise<String>;
    memberCount: () => Promise<Int>;
    metaDescription: () => Promise<String>;
    method: () => Promise<String>;
    motionProposalArguments: <T = FragmentableArray<MotionProposalArgument>>(args?: {
        where?: MotionProposalArgumentWhereInput;
        orderBy?: MotionProposalArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    motionProposalHash: () => Promise<String>;
    motionProposalId: () => Promise<Int>;
    motionStatus: <T = FragmentableArray<MotionStatus>>(args?: {
        where?: MotionStatusWhereInput;
        orderBy?: MotionStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    preimage: <T = PreimagePromise>() => T;
    preimageHash: () => Promise<String>;
    treasurySpendProposal: <T = TreasurySpendProposalPromise>() => T;
    section: () => Promise<String>;
}
export interface MotionSubscription extends Promise<AsyncIterator<Motion>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    author: () => Promise<AsyncIterator<String>>;
    memberCount: () => Promise<AsyncIterator<Int>>;
    metaDescription: () => Promise<AsyncIterator<String>>;
    method: () => Promise<AsyncIterator<String>>;
    motionProposalArguments: <T = Promise<AsyncIterator<MotionProposalArgumentSubscription>>>(args?: {
        where?: MotionProposalArgumentWhereInput;
        orderBy?: MotionProposalArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    motionProposalHash: () => Promise<AsyncIterator<String>>;
    motionProposalId: () => Promise<AsyncIterator<Int>>;
    motionStatus: <T = Promise<AsyncIterator<MotionStatusSubscription>>>(args?: {
        where?: MotionStatusWhereInput;
        orderBy?: MotionStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    preimage: <T = PreimageSubscription>() => T;
    preimageHash: () => Promise<AsyncIterator<String>>;
    treasurySpendProposal: <T = TreasurySpendProposalSubscription>() => T;
    section: () => Promise<AsyncIterator<String>>;
}
export interface MotionNullablePromise extends Promise<Motion | null>, Fragmentable {
    id: () => Promise<Int>;
    author: () => Promise<String>;
    memberCount: () => Promise<Int>;
    metaDescription: () => Promise<String>;
    method: () => Promise<String>;
    motionProposalArguments: <T = FragmentableArray<MotionProposalArgument>>(args?: {
        where?: MotionProposalArgumentWhereInput;
        orderBy?: MotionProposalArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    motionProposalHash: () => Promise<String>;
    motionProposalId: () => Promise<Int>;
    motionStatus: <T = FragmentableArray<MotionStatus>>(args?: {
        where?: MotionStatusWhereInput;
        orderBy?: MotionStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    preimage: <T = PreimagePromise>() => T;
    preimageHash: () => Promise<String>;
    treasurySpendProposal: <T = TreasurySpendProposalPromise>() => T;
    section: () => Promise<String>;
}
export interface MotionProposalArgument {
    id: ID_Output;
    name: String;
    value: String;
}
export interface MotionProposalArgumentPromise extends Promise<MotionProposalArgument>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    motion: <T = MotionPromise>() => T;
    value: () => Promise<String>;
}
export interface MotionProposalArgumentSubscription extends Promise<AsyncIterator<MotionProposalArgument>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    motion: <T = MotionSubscription>() => T;
    value: () => Promise<AsyncIterator<String>>;
}
export interface MotionProposalArgumentNullablePromise extends Promise<MotionProposalArgument | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    motion: <T = MotionPromise>() => T;
    value: () => Promise<String>;
}
export interface MotionStatus {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface MotionStatusPromise extends Promise<MotionStatus>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    motion: <T = MotionPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface MotionStatusSubscription extends Promise<AsyncIterator<MotionStatus>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    motion: <T = MotionSubscription>() => T;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface MotionStatusNullablePromise extends Promise<MotionStatus | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    motion: <T = MotionPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface Preimage {
    id: ID_Output;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    section: String;
}
export interface PreimagePromise extends Promise<Preimage>, Fragmentable {
    id: () => Promise<ID_Output>;
    author: () => Promise<String>;
    depositAmount: () => Promise<String>;
    hash: () => Promise<String>;
    metaDescription: () => Promise<String>;
    method: () => Promise<String>;
    motion: <T = MotionPromise>() => T;
    proposal: <T = ProposalPromise>() => T;
    preimageArguments: <T = FragmentableArray<PreimageArgument>>(args?: {
        where?: PreimageArgumentWhereInput;
        orderBy?: PreimageArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    preimageStatus: <T = FragmentableArray<PreimageStatus>>(args?: {
        where?: PreimageStatusWhereInput;
        orderBy?: PreimageStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    referendum: <T = ReferendumPromise>() => T;
    section: () => Promise<String>;
}
export interface PreimageSubscription extends Promise<AsyncIterator<Preimage>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    author: () => Promise<AsyncIterator<String>>;
    depositAmount: () => Promise<AsyncIterator<String>>;
    hash: () => Promise<AsyncIterator<String>>;
    metaDescription: () => Promise<AsyncIterator<String>>;
    method: () => Promise<AsyncIterator<String>>;
    motion: <T = MotionSubscription>() => T;
    proposal: <T = ProposalSubscription>() => T;
    preimageArguments: <T = Promise<AsyncIterator<PreimageArgumentSubscription>>>(args?: {
        where?: PreimageArgumentWhereInput;
        orderBy?: PreimageArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    preimageStatus: <T = Promise<AsyncIterator<PreimageStatusSubscription>>>(args?: {
        where?: PreimageStatusWhereInput;
        orderBy?: PreimageStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    referendum: <T = ReferendumSubscription>() => T;
    section: () => Promise<AsyncIterator<String>>;
}
export interface PreimageNullablePromise extends Promise<Preimage | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    author: () => Promise<String>;
    depositAmount: () => Promise<String>;
    hash: () => Promise<String>;
    metaDescription: () => Promise<String>;
    method: () => Promise<String>;
    motion: <T = MotionPromise>() => T;
    proposal: <T = ProposalPromise>() => T;
    preimageArguments: <T = FragmentableArray<PreimageArgument>>(args?: {
        where?: PreimageArgumentWhereInput;
        orderBy?: PreimageArgumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    preimageStatus: <T = FragmentableArray<PreimageStatus>>(args?: {
        where?: PreimageStatusWhereInput;
        orderBy?: PreimageStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    referendum: <T = ReferendumPromise>() => T;
    section: () => Promise<String>;
}
export interface Proposal {
    id: Int;
    author: String;
    depositAmount: String;
    preimageHash: String;
    proposalId: Int;
}
export interface ProposalPromise extends Promise<Proposal>, Fragmentable {
    id: () => Promise<Int>;
    author: () => Promise<String>;
    depositAmount: () => Promise<String>;
    preimage: <T = PreimagePromise>() => T;
    preimageHash: () => Promise<String>;
    proposalId: () => Promise<Int>;
    proposalStatus: <T = FragmentableArray<ProposalStatus>>(args?: {
        where?: ProposalStatusWhereInput;
        orderBy?: ProposalStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface ProposalSubscription extends Promise<AsyncIterator<Proposal>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    author: () => Promise<AsyncIterator<String>>;
    depositAmount: () => Promise<AsyncIterator<String>>;
    preimage: <T = PreimageSubscription>() => T;
    preimageHash: () => Promise<AsyncIterator<String>>;
    proposalId: () => Promise<AsyncIterator<Int>>;
    proposalStatus: <T = Promise<AsyncIterator<ProposalStatusSubscription>>>(args?: {
        where?: ProposalStatusWhereInput;
        orderBy?: ProposalStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface ProposalNullablePromise extends Promise<Proposal | null>, Fragmentable {
    id: () => Promise<Int>;
    author: () => Promise<String>;
    depositAmount: () => Promise<String>;
    preimage: <T = PreimagePromise>() => T;
    preimageHash: () => Promise<String>;
    proposalId: () => Promise<Int>;
    proposalStatus: <T = FragmentableArray<ProposalStatus>>(args?: {
        where?: ProposalStatusWhereInput;
        orderBy?: ProposalStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface ProposalStatus {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface ProposalStatusPromise extends Promise<ProposalStatus>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    proposal: <T = ProposalPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface ProposalStatusSubscription extends Promise<AsyncIterator<ProposalStatus>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    proposal: <T = ProposalSubscription>() => T;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface ProposalStatusNullablePromise extends Promise<ProposalStatus | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    proposal: <T = ProposalPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface PreimageArgument {
    id: ID_Output;
    name: String;
    value: String;
}
export interface PreimageArgumentPromise extends Promise<PreimageArgument>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    preimage: <T = PreimagePromise>() => T;
    value: () => Promise<String>;
}
export interface PreimageArgumentSubscription extends Promise<AsyncIterator<PreimageArgument>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    preimage: <T = PreimageSubscription>() => T;
    value: () => Promise<AsyncIterator<String>>;
}
export interface PreimageArgumentNullablePromise extends Promise<PreimageArgument | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    preimage: <T = PreimagePromise>() => T;
    value: () => Promise<String>;
}
export interface PreimageStatus {
    id: ID_Output;
    status: String;
}
export interface PreimageStatusPromise extends Promise<PreimageStatus>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    preimage: <T = PreimagePromise>() => T;
    status: () => Promise<String>;
}
export interface PreimageStatusSubscription extends Promise<AsyncIterator<PreimageStatus>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    preimage: <T = PreimageSubscription>() => T;
    status: () => Promise<AsyncIterator<String>>;
}
export interface PreimageStatusNullablePromise extends Promise<PreimageStatus | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    preimage: <T = PreimagePromise>() => T;
    status: () => Promise<String>;
}
export interface Referendum {
    id: Int;
    delay: Int;
    end: Int;
    preimageHash: String;
    referendumId: Int;
    voteThreshold: String;
}
export interface ReferendumPromise extends Promise<Referendum>, Fragmentable {
    id: () => Promise<Int>;
    delay: () => Promise<Int>;
    end: () => Promise<Int>;
    preimage: <T = PreimagePromise>() => T;
    preimageHash: () => Promise<String>;
    referendumId: () => Promise<Int>;
    referendumStatus: <T = FragmentableArray<ReferendumStatus>>(args?: {
        where?: ReferendumStatusWhereInput;
        orderBy?: ReferendumStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    voteThreshold: () => Promise<String>;
}
export interface ReferendumSubscription extends Promise<AsyncIterator<Referendum>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    delay: () => Promise<AsyncIterator<Int>>;
    end: () => Promise<AsyncIterator<Int>>;
    preimage: <T = PreimageSubscription>() => T;
    preimageHash: () => Promise<AsyncIterator<String>>;
    referendumId: () => Promise<AsyncIterator<Int>>;
    referendumStatus: <T = Promise<AsyncIterator<ReferendumStatusSubscription>>>(args?: {
        where?: ReferendumStatusWhereInput;
        orderBy?: ReferendumStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    voteThreshold: () => Promise<AsyncIterator<String>>;
}
export interface ReferendumNullablePromise extends Promise<Referendum | null>, Fragmentable {
    id: () => Promise<Int>;
    delay: () => Promise<Int>;
    end: () => Promise<Int>;
    preimage: <T = PreimagePromise>() => T;
    preimageHash: () => Promise<String>;
    referendumId: () => Promise<Int>;
    referendumStatus: <T = FragmentableArray<ReferendumStatus>>(args?: {
        where?: ReferendumStatusWhereInput;
        orderBy?: ReferendumStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    voteThreshold: () => Promise<String>;
}
export interface ReferendumStatus {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface ReferendumStatusPromise extends Promise<ReferendumStatus>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    referendum: <T = ReferendumPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface ReferendumStatusSubscription extends Promise<AsyncIterator<ReferendumStatus>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    referendum: <T = ReferendumSubscription>() => T;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface ReferendumStatusNullablePromise extends Promise<ReferendumStatus | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    referendum: <T = ReferendumPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface TreasurySpendProposal {
    id: Int;
    proposer: String;
    beneficiary: String;
    value: String;
    bond: String;
    treasuryProposalId: Int;
}
export interface TreasurySpendProposalPromise extends Promise<TreasurySpendProposal>, Fragmentable {
    id: () => Promise<Int>;
    proposer: () => Promise<String>;
    beneficiary: () => Promise<String>;
    value: () => Promise<String>;
    bond: () => Promise<String>;
    treasuryProposalId: () => Promise<Int>;
    treasuryStatus: <T = FragmentableArray<TreasuryStatus>>(args?: {
        where?: TreasuryStatusWhereInput;
        orderBy?: TreasuryStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    motion: <T = MotionPromise>() => T;
}
export interface TreasurySpendProposalSubscription extends Promise<AsyncIterator<TreasurySpendProposal>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    proposer: () => Promise<AsyncIterator<String>>;
    beneficiary: () => Promise<AsyncIterator<String>>;
    value: () => Promise<AsyncIterator<String>>;
    bond: () => Promise<AsyncIterator<String>>;
    treasuryProposalId: () => Promise<AsyncIterator<Int>>;
    treasuryStatus: <T = Promise<AsyncIterator<TreasuryStatusSubscription>>>(args?: {
        where?: TreasuryStatusWhereInput;
        orderBy?: TreasuryStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    motion: <T = MotionSubscription>() => T;
}
export interface TreasurySpendProposalNullablePromise extends Promise<TreasurySpendProposal | null>, Fragmentable {
    id: () => Promise<Int>;
    proposer: () => Promise<String>;
    beneficiary: () => Promise<String>;
    value: () => Promise<String>;
    bond: () => Promise<String>;
    treasuryProposalId: () => Promise<Int>;
    treasuryStatus: <T = FragmentableArray<TreasuryStatus>>(args?: {
        where?: TreasuryStatusWhereInput;
        orderBy?: TreasuryStatusOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    motion: <T = MotionPromise>() => T;
}
export interface TreasuryStatus {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface TreasuryStatusPromise extends Promise<TreasuryStatus>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    treasurySpendProposal: <T = TreasurySpendProposalPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface TreasuryStatusSubscription extends Promise<AsyncIterator<TreasuryStatus>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    treasurySpendProposal: <T = TreasurySpendProposalSubscription>() => T;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface TreasuryStatusNullablePromise extends Promise<TreasuryStatus | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    treasurySpendProposal: <T = TreasurySpendProposalPromise>() => T;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface MotionConnection {
    pageInfo: PageInfo;
    edges: MotionEdge[];
}
export interface MotionConnectionPromise extends Promise<MotionConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<MotionEdge>>() => T;
    aggregate: <T = AggregateMotionPromise>() => T;
}
export interface MotionConnectionSubscription extends Promise<AsyncIterator<MotionConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<MotionEdgeSubscription>>>() => T;
    aggregate: <T = AggregateMotionSubscription>() => T;
}
export interface MotionEdge {
    node: Motion;
    cursor: String;
}
export interface MotionEdgePromise extends Promise<MotionEdge>, Fragmentable {
    node: <T = MotionPromise>() => T;
    cursor: () => Promise<String>;
}
export interface MotionEdgeSubscription extends Promise<AsyncIterator<MotionEdge>>, Fragmentable {
    node: <T = MotionSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateMotion {
    count: Int;
}
export interface AggregateMotionPromise extends Promise<AggregateMotion>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateMotionSubscription extends Promise<AsyncIterator<AggregateMotion>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface MotionProposalArgumentConnection {
    pageInfo: PageInfo;
    edges: MotionProposalArgumentEdge[];
}
export interface MotionProposalArgumentConnectionPromise extends Promise<MotionProposalArgumentConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<MotionProposalArgumentEdge>>() => T;
    aggregate: <T = AggregateMotionProposalArgumentPromise>() => T;
}
export interface MotionProposalArgumentConnectionSubscription extends Promise<AsyncIterator<MotionProposalArgumentConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<MotionProposalArgumentEdgeSubscription>>>() => T;
    aggregate: <T = AggregateMotionProposalArgumentSubscription>() => T;
}
export interface MotionProposalArgumentEdge {
    node: MotionProposalArgument;
    cursor: String;
}
export interface MotionProposalArgumentEdgePromise extends Promise<MotionProposalArgumentEdge>, Fragmentable {
    node: <T = MotionProposalArgumentPromise>() => T;
    cursor: () => Promise<String>;
}
export interface MotionProposalArgumentEdgeSubscription extends Promise<AsyncIterator<MotionProposalArgumentEdge>>, Fragmentable {
    node: <T = MotionProposalArgumentSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateMotionProposalArgument {
    count: Int;
}
export interface AggregateMotionProposalArgumentPromise extends Promise<AggregateMotionProposalArgument>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateMotionProposalArgumentSubscription extends Promise<AsyncIterator<AggregateMotionProposalArgument>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface MotionStatusConnection {
    pageInfo: PageInfo;
    edges: MotionStatusEdge[];
}
export interface MotionStatusConnectionPromise extends Promise<MotionStatusConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<MotionStatusEdge>>() => T;
    aggregate: <T = AggregateMotionStatusPromise>() => T;
}
export interface MotionStatusConnectionSubscription extends Promise<AsyncIterator<MotionStatusConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<MotionStatusEdgeSubscription>>>() => T;
    aggregate: <T = AggregateMotionStatusSubscription>() => T;
}
export interface MotionStatusEdge {
    node: MotionStatus;
    cursor: String;
}
export interface MotionStatusEdgePromise extends Promise<MotionStatusEdge>, Fragmentable {
    node: <T = MotionStatusPromise>() => T;
    cursor: () => Promise<String>;
}
export interface MotionStatusEdgeSubscription extends Promise<AsyncIterator<MotionStatusEdge>>, Fragmentable {
    node: <T = MotionStatusSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateMotionStatus {
    count: Int;
}
export interface AggregateMotionStatusPromise extends Promise<AggregateMotionStatus>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateMotionStatusSubscription extends Promise<AsyncIterator<AggregateMotionStatus>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Nomination {
    id: ID_Output;
    validatorController: String;
    validatorStash: String;
    nominatorController: String;
    nominatorStash: String;
    stakedAmount: String;
}
export interface NominationPromise extends Promise<Nomination>, Fragmentable {
    id: () => Promise<ID_Output>;
    validatorController: () => Promise<String>;
    validatorStash: () => Promise<String>;
    nominatorController: () => Promise<String>;
    nominatorStash: () => Promise<String>;
    session: <T = SessionPromise>() => T;
    stakedAmount: () => Promise<String>;
}
export interface NominationSubscription extends Promise<AsyncIterator<Nomination>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    validatorController: () => Promise<AsyncIterator<String>>;
    validatorStash: () => Promise<AsyncIterator<String>>;
    nominatorController: () => Promise<AsyncIterator<String>>;
    nominatorStash: () => Promise<AsyncIterator<String>>;
    session: <T = SessionSubscription>() => T;
    stakedAmount: () => Promise<AsyncIterator<String>>;
}
export interface NominationNullablePromise extends Promise<Nomination | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    validatorController: () => Promise<String>;
    validatorStash: () => Promise<String>;
    nominatorController: () => Promise<String>;
    nominatorStash: () => Promise<String>;
    session: <T = SessionPromise>() => T;
    stakedAmount: () => Promise<String>;
}
export interface NominationConnection {
    pageInfo: PageInfo;
    edges: NominationEdge[];
}
export interface NominationConnectionPromise extends Promise<NominationConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<NominationEdge>>() => T;
    aggregate: <T = AggregateNominationPromise>() => T;
}
export interface NominationConnectionSubscription extends Promise<AsyncIterator<NominationConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<NominationEdgeSubscription>>>() => T;
    aggregate: <T = AggregateNominationSubscription>() => T;
}
export interface NominationEdge {
    node: Nomination;
    cursor: String;
}
export interface NominationEdgePromise extends Promise<NominationEdge>, Fragmentable {
    node: <T = NominationPromise>() => T;
    cursor: () => Promise<String>;
}
export interface NominationEdgeSubscription extends Promise<AsyncIterator<NominationEdge>>, Fragmentable {
    node: <T = NominationSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateNomination {
    count: Int;
}
export interface AggregateNominationPromise extends Promise<AggregateNomination>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateNominationSubscription extends Promise<AsyncIterator<AggregateNomination>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface OfflineValidator {
    id: ID_Output;
    validatorId: String;
    total: String;
    own: String;
    others: Json[];
}
export interface OfflineValidatorPromise extends Promise<OfflineValidator>, Fragmentable {
    id: () => Promise<ID_Output>;
    sessionIndex: <T = SessionPromise>() => T;
    validatorId: () => Promise<String>;
    total: () => Promise<String>;
    own: () => Promise<String>;
    others: () => Promise<Json[]>;
}
export interface OfflineValidatorSubscription extends Promise<AsyncIterator<OfflineValidator>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    sessionIndex: <T = SessionSubscription>() => T;
    validatorId: () => Promise<AsyncIterator<String>>;
    total: () => Promise<AsyncIterator<String>>;
    own: () => Promise<AsyncIterator<String>>;
    others: () => Promise<AsyncIterator<Json[]>>;
}
export interface OfflineValidatorNullablePromise extends Promise<OfflineValidator | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    sessionIndex: <T = SessionPromise>() => T;
    validatorId: () => Promise<String>;
    total: () => Promise<String>;
    own: () => Promise<String>;
    others: () => Promise<Json[]>;
}
export interface OfflineValidatorConnection {
    pageInfo: PageInfo;
    edges: OfflineValidatorEdge[];
}
export interface OfflineValidatorConnectionPromise extends Promise<OfflineValidatorConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<OfflineValidatorEdge>>() => T;
    aggregate: <T = AggregateOfflineValidatorPromise>() => T;
}
export interface OfflineValidatorConnectionSubscription extends Promise<AsyncIterator<OfflineValidatorConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<OfflineValidatorEdgeSubscription>>>() => T;
    aggregate: <T = AggregateOfflineValidatorSubscription>() => T;
}
export interface OfflineValidatorEdge {
    node: OfflineValidator;
    cursor: String;
}
export interface OfflineValidatorEdgePromise extends Promise<OfflineValidatorEdge>, Fragmentable {
    node: <T = OfflineValidatorPromise>() => T;
    cursor: () => Promise<String>;
}
export interface OfflineValidatorEdgeSubscription extends Promise<AsyncIterator<OfflineValidatorEdge>>, Fragmentable {
    node: <T = OfflineValidatorSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateOfflineValidator {
    count: Int;
}
export interface AggregateOfflineValidatorPromise extends Promise<AggregateOfflineValidator>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateOfflineValidatorSubscription extends Promise<AsyncIterator<AggregateOfflineValidator>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PreimageConnection {
    pageInfo: PageInfo;
    edges: PreimageEdge[];
}
export interface PreimageConnectionPromise extends Promise<PreimageConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<PreimageEdge>>() => T;
    aggregate: <T = AggregatePreimagePromise>() => T;
}
export interface PreimageConnectionSubscription extends Promise<AsyncIterator<PreimageConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<PreimageEdgeSubscription>>>() => T;
    aggregate: <T = AggregatePreimageSubscription>() => T;
}
export interface PreimageEdge {
    node: Preimage;
    cursor: String;
}
export interface PreimageEdgePromise extends Promise<PreimageEdge>, Fragmentable {
    node: <T = PreimagePromise>() => T;
    cursor: () => Promise<String>;
}
export interface PreimageEdgeSubscription extends Promise<AsyncIterator<PreimageEdge>>, Fragmentable {
    node: <T = PreimageSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregatePreimage {
    count: Int;
}
export interface AggregatePreimagePromise extends Promise<AggregatePreimage>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePreimageSubscription extends Promise<AsyncIterator<AggregatePreimage>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PreimageArgumentConnection {
    pageInfo: PageInfo;
    edges: PreimageArgumentEdge[];
}
export interface PreimageArgumentConnectionPromise extends Promise<PreimageArgumentConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<PreimageArgumentEdge>>() => T;
    aggregate: <T = AggregatePreimageArgumentPromise>() => T;
}
export interface PreimageArgumentConnectionSubscription extends Promise<AsyncIterator<PreimageArgumentConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<PreimageArgumentEdgeSubscription>>>() => T;
    aggregate: <T = AggregatePreimageArgumentSubscription>() => T;
}
export interface PreimageArgumentEdge {
    node: PreimageArgument;
    cursor: String;
}
export interface PreimageArgumentEdgePromise extends Promise<PreimageArgumentEdge>, Fragmentable {
    node: <T = PreimageArgumentPromise>() => T;
    cursor: () => Promise<String>;
}
export interface PreimageArgumentEdgeSubscription extends Promise<AsyncIterator<PreimageArgumentEdge>>, Fragmentable {
    node: <T = PreimageArgumentSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregatePreimageArgument {
    count: Int;
}
export interface AggregatePreimageArgumentPromise extends Promise<AggregatePreimageArgument>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePreimageArgumentSubscription extends Promise<AsyncIterator<AggregatePreimageArgument>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PreimageStatusConnection {
    pageInfo: PageInfo;
    edges: PreimageStatusEdge[];
}
export interface PreimageStatusConnectionPromise extends Promise<PreimageStatusConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<PreimageStatusEdge>>() => T;
    aggregate: <T = AggregatePreimageStatusPromise>() => T;
}
export interface PreimageStatusConnectionSubscription extends Promise<AsyncIterator<PreimageStatusConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<PreimageStatusEdgeSubscription>>>() => T;
    aggregate: <T = AggregatePreimageStatusSubscription>() => T;
}
export interface PreimageStatusEdge {
    node: PreimageStatus;
    cursor: String;
}
export interface PreimageStatusEdgePromise extends Promise<PreimageStatusEdge>, Fragmentable {
    node: <T = PreimageStatusPromise>() => T;
    cursor: () => Promise<String>;
}
export interface PreimageStatusEdgeSubscription extends Promise<AsyncIterator<PreimageStatusEdge>>, Fragmentable {
    node: <T = PreimageStatusSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregatePreimageStatus {
    count: Int;
}
export interface AggregatePreimageStatusPromise extends Promise<AggregatePreimageStatus>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePreimageStatusSubscription extends Promise<AsyncIterator<AggregatePreimageStatus>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface ProposalConnection {
    pageInfo: PageInfo;
    edges: ProposalEdge[];
}
export interface ProposalConnectionPromise extends Promise<ProposalConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ProposalEdge>>() => T;
    aggregate: <T = AggregateProposalPromise>() => T;
}
export interface ProposalConnectionSubscription extends Promise<AsyncIterator<ProposalConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ProposalEdgeSubscription>>>() => T;
    aggregate: <T = AggregateProposalSubscription>() => T;
}
export interface ProposalEdge {
    node: Proposal;
    cursor: String;
}
export interface ProposalEdgePromise extends Promise<ProposalEdge>, Fragmentable {
    node: <T = ProposalPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ProposalEdgeSubscription extends Promise<AsyncIterator<ProposalEdge>>, Fragmentable {
    node: <T = ProposalSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateProposal {
    count: Int;
}
export interface AggregateProposalPromise extends Promise<AggregateProposal>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateProposalSubscription extends Promise<AsyncIterator<AggregateProposal>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface ProposalStatusConnection {
    pageInfo: PageInfo;
    edges: ProposalStatusEdge[];
}
export interface ProposalStatusConnectionPromise extends Promise<ProposalStatusConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ProposalStatusEdge>>() => T;
    aggregate: <T = AggregateProposalStatusPromise>() => T;
}
export interface ProposalStatusConnectionSubscription extends Promise<AsyncIterator<ProposalStatusConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ProposalStatusEdgeSubscription>>>() => T;
    aggregate: <T = AggregateProposalStatusSubscription>() => T;
}
export interface ProposalStatusEdge {
    node: ProposalStatus;
    cursor: String;
}
export interface ProposalStatusEdgePromise extends Promise<ProposalStatusEdge>, Fragmentable {
    node: <T = ProposalStatusPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ProposalStatusEdgeSubscription extends Promise<AsyncIterator<ProposalStatusEdge>>, Fragmentable {
    node: <T = ProposalStatusSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateProposalStatus {
    count: Int;
}
export interface AggregateProposalStatusPromise extends Promise<AggregateProposalStatus>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateProposalStatusSubscription extends Promise<AsyncIterator<AggregateProposalStatus>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface ReferendumConnection {
    pageInfo: PageInfo;
    edges: ReferendumEdge[];
}
export interface ReferendumConnectionPromise extends Promise<ReferendumConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ReferendumEdge>>() => T;
    aggregate: <T = AggregateReferendumPromise>() => T;
}
export interface ReferendumConnectionSubscription extends Promise<AsyncIterator<ReferendumConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ReferendumEdgeSubscription>>>() => T;
    aggregate: <T = AggregateReferendumSubscription>() => T;
}
export interface ReferendumEdge {
    node: Referendum;
    cursor: String;
}
export interface ReferendumEdgePromise extends Promise<ReferendumEdge>, Fragmentable {
    node: <T = ReferendumPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ReferendumEdgeSubscription extends Promise<AsyncIterator<ReferendumEdge>>, Fragmentable {
    node: <T = ReferendumSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateReferendum {
    count: Int;
}
export interface AggregateReferendumPromise extends Promise<AggregateReferendum>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateReferendumSubscription extends Promise<AsyncIterator<AggregateReferendum>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface ReferendumStatusConnection {
    pageInfo: PageInfo;
    edges: ReferendumStatusEdge[];
}
export interface ReferendumStatusConnectionPromise extends Promise<ReferendumStatusConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ReferendumStatusEdge>>() => T;
    aggregate: <T = AggregateReferendumStatusPromise>() => T;
}
export interface ReferendumStatusConnectionSubscription extends Promise<AsyncIterator<ReferendumStatusConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ReferendumStatusEdgeSubscription>>>() => T;
    aggregate: <T = AggregateReferendumStatusSubscription>() => T;
}
export interface ReferendumStatusEdge {
    node: ReferendumStatus;
    cursor: String;
}
export interface ReferendumStatusEdgePromise extends Promise<ReferendumStatusEdge>, Fragmentable {
    node: <T = ReferendumStatusPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ReferendumStatusEdgeSubscription extends Promise<AsyncIterator<ReferendumStatusEdge>>, Fragmentable {
    node: <T = ReferendumStatusSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateReferendumStatus {
    count: Int;
}
export interface AggregateReferendumStatusPromise extends Promise<AggregateReferendumStatus>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateReferendumStatusSubscription extends Promise<AsyncIterator<AggregateReferendumStatus>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Reward {
    id: ID_Output;
    treasuryReward: String;
    validatorReward: String;
}
export interface RewardPromise extends Promise<Reward>, Fragmentable {
    id: () => Promise<ID_Output>;
    authoredBlock: <T = BlockNumberPromise>() => T;
    sessionIndex: <T = SessionPromise>() => T;
    treasuryReward: () => Promise<String>;
    validatorReward: () => Promise<String>;
}
export interface RewardSubscription extends Promise<AsyncIterator<Reward>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    authoredBlock: <T = BlockNumberSubscription>() => T;
    sessionIndex: <T = SessionSubscription>() => T;
    treasuryReward: () => Promise<AsyncIterator<String>>;
    validatorReward: () => Promise<AsyncIterator<String>>;
}
export interface RewardNullablePromise extends Promise<Reward | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    authoredBlock: <T = BlockNumberPromise>() => T;
    sessionIndex: <T = SessionPromise>() => T;
    treasuryReward: () => Promise<String>;
    validatorReward: () => Promise<String>;
}
export interface RewardConnection {
    pageInfo: PageInfo;
    edges: RewardEdge[];
}
export interface RewardConnectionPromise extends Promise<RewardConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<RewardEdge>>() => T;
    aggregate: <T = AggregateRewardPromise>() => T;
}
export interface RewardConnectionSubscription extends Promise<AsyncIterator<RewardConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<RewardEdgeSubscription>>>() => T;
    aggregate: <T = AggregateRewardSubscription>() => T;
}
export interface RewardEdge {
    node: Reward;
    cursor: String;
}
export interface RewardEdgePromise extends Promise<RewardEdge>, Fragmentable {
    node: <T = RewardPromise>() => T;
    cursor: () => Promise<String>;
}
export interface RewardEdgeSubscription extends Promise<AsyncIterator<RewardEdge>>, Fragmentable {
    node: <T = RewardSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateReward {
    count: Int;
}
export interface AggregateRewardPromise extends Promise<AggregateReward>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateRewardSubscription extends Promise<AsyncIterator<AggregateReward>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface SessionConnection {
    pageInfo: PageInfo;
    edges: SessionEdge[];
}
export interface SessionConnectionPromise extends Promise<SessionConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<SessionEdge>>() => T;
    aggregate: <T = AggregateSessionPromise>() => T;
}
export interface SessionConnectionSubscription extends Promise<AsyncIterator<SessionConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<SessionEdgeSubscription>>>() => T;
    aggregate: <T = AggregateSessionSubscription>() => T;
}
export interface SessionEdge {
    node: Session;
    cursor: String;
}
export interface SessionEdgePromise extends Promise<SessionEdge>, Fragmentable {
    node: <T = SessionPromise>() => T;
    cursor: () => Promise<String>;
}
export interface SessionEdgeSubscription extends Promise<AsyncIterator<SessionEdge>>, Fragmentable {
    node: <T = SessionSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateSession {
    count: Int;
}
export interface AggregateSessionPromise extends Promise<AggregateSession>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSessionSubscription extends Promise<AsyncIterator<AggregateSession>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Slashing {
    id: ID_Output;
    who: String;
    amount: String;
}
export interface SlashingPromise extends Promise<Slashing>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    who: () => Promise<String>;
    amount: () => Promise<String>;
}
export interface SlashingSubscription extends Promise<AsyncIterator<Slashing>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    who: () => Promise<AsyncIterator<String>>;
    amount: () => Promise<AsyncIterator<String>>;
}
export interface SlashingNullablePromise extends Promise<Slashing | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    who: () => Promise<String>;
    amount: () => Promise<String>;
}
export interface SlashingConnection {
    pageInfo: PageInfo;
    edges: SlashingEdge[];
}
export interface SlashingConnectionPromise extends Promise<SlashingConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<SlashingEdge>>() => T;
    aggregate: <T = AggregateSlashingPromise>() => T;
}
export interface SlashingConnectionSubscription extends Promise<AsyncIterator<SlashingConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<SlashingEdgeSubscription>>>() => T;
    aggregate: <T = AggregateSlashingSubscription>() => T;
}
export interface SlashingEdge {
    node: Slashing;
    cursor: String;
}
export interface SlashingEdgePromise extends Promise<SlashingEdge>, Fragmentable {
    node: <T = SlashingPromise>() => T;
    cursor: () => Promise<String>;
}
export interface SlashingEdgeSubscription extends Promise<AsyncIterator<SlashingEdge>>, Fragmentable {
    node: <T = SlashingSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateSlashing {
    count: Int;
}
export interface AggregateSlashingPromise extends Promise<AggregateSlashing>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSlashingSubscription extends Promise<AsyncIterator<AggregateSlashing>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Stake {
    id: ID_Output;
    totalStake: String;
}
export interface StakePromise extends Promise<Stake>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    totalStake: () => Promise<String>;
}
export interface StakeSubscription extends Promise<AsyncIterator<Stake>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    totalStake: () => Promise<AsyncIterator<String>>;
}
export interface StakeNullablePromise extends Promise<Stake | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    totalStake: () => Promise<String>;
}
export interface StakeConnection {
    pageInfo: PageInfo;
    edges: StakeEdge[];
}
export interface StakeConnectionPromise extends Promise<StakeConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<StakeEdge>>() => T;
    aggregate: <T = AggregateStakePromise>() => T;
}
export interface StakeConnectionSubscription extends Promise<AsyncIterator<StakeConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<StakeEdgeSubscription>>>() => T;
    aggregate: <T = AggregateStakeSubscription>() => T;
}
export interface StakeEdge {
    node: Stake;
    cursor: String;
}
export interface StakeEdgePromise extends Promise<StakeEdge>, Fragmentable {
    node: <T = StakePromise>() => T;
    cursor: () => Promise<String>;
}
export interface StakeEdgeSubscription extends Promise<AsyncIterator<StakeEdge>>, Fragmentable {
    node: <T = StakeSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateStake {
    count: Int;
}
export interface AggregateStakePromise extends Promise<AggregateStake>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateStakeSubscription extends Promise<AsyncIterator<AggregateStake>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface TotalIssuance {
    id: ID_Output;
    amount: String;
}
export interface TotalIssuancePromise extends Promise<TotalIssuance>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    amount: () => Promise<String>;
}
export interface TotalIssuanceSubscription extends Promise<AsyncIterator<TotalIssuance>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    blockNumber: <T = BlockNumberSubscription>() => T;
    amount: () => Promise<AsyncIterator<String>>;
}
export interface TotalIssuanceNullablePromise extends Promise<TotalIssuance | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    blockNumber: <T = BlockNumberPromise>() => T;
    amount: () => Promise<String>;
}
export interface TotalIssuanceConnection {
    pageInfo: PageInfo;
    edges: TotalIssuanceEdge[];
}
export interface TotalIssuanceConnectionPromise extends Promise<TotalIssuanceConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<TotalIssuanceEdge>>() => T;
    aggregate: <T = AggregateTotalIssuancePromise>() => T;
}
export interface TotalIssuanceConnectionSubscription extends Promise<AsyncIterator<TotalIssuanceConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<TotalIssuanceEdgeSubscription>>>() => T;
    aggregate: <T = AggregateTotalIssuanceSubscription>() => T;
}
export interface TotalIssuanceEdge {
    node: TotalIssuance;
    cursor: String;
}
export interface TotalIssuanceEdgePromise extends Promise<TotalIssuanceEdge>, Fragmentable {
    node: <T = TotalIssuancePromise>() => T;
    cursor: () => Promise<String>;
}
export interface TotalIssuanceEdgeSubscription extends Promise<AsyncIterator<TotalIssuanceEdge>>, Fragmentable {
    node: <T = TotalIssuanceSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateTotalIssuance {
    count: Int;
}
export interface AggregateTotalIssuancePromise extends Promise<AggregateTotalIssuance>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateTotalIssuanceSubscription extends Promise<AsyncIterator<AggregateTotalIssuance>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface TreasurySpendProposalConnection {
    pageInfo: PageInfo;
    edges: TreasurySpendProposalEdge[];
}
export interface TreasurySpendProposalConnectionPromise extends Promise<TreasurySpendProposalConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<TreasurySpendProposalEdge>>() => T;
    aggregate: <T = AggregateTreasurySpendProposalPromise>() => T;
}
export interface TreasurySpendProposalConnectionSubscription extends Promise<AsyncIterator<TreasurySpendProposalConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<TreasurySpendProposalEdgeSubscription>>>() => T;
    aggregate: <T = AggregateTreasurySpendProposalSubscription>() => T;
}
export interface TreasurySpendProposalEdge {
    node: TreasurySpendProposal;
    cursor: String;
}
export interface TreasurySpendProposalEdgePromise extends Promise<TreasurySpendProposalEdge>, Fragmentable {
    node: <T = TreasurySpendProposalPromise>() => T;
    cursor: () => Promise<String>;
}
export interface TreasurySpendProposalEdgeSubscription extends Promise<AsyncIterator<TreasurySpendProposalEdge>>, Fragmentable {
    node: <T = TreasurySpendProposalSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateTreasurySpendProposal {
    count: Int;
}
export interface AggregateTreasurySpendProposalPromise extends Promise<AggregateTreasurySpendProposal>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateTreasurySpendProposalSubscription extends Promise<AsyncIterator<AggregateTreasurySpendProposal>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface TreasuryStatusConnection {
    pageInfo: PageInfo;
    edges: TreasuryStatusEdge[];
}
export interface TreasuryStatusConnectionPromise extends Promise<TreasuryStatusConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<TreasuryStatusEdge>>() => T;
    aggregate: <T = AggregateTreasuryStatusPromise>() => T;
}
export interface TreasuryStatusConnectionSubscription extends Promise<AsyncIterator<TreasuryStatusConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<TreasuryStatusEdgeSubscription>>>() => T;
    aggregate: <T = AggregateTreasuryStatusSubscription>() => T;
}
export interface TreasuryStatusEdge {
    node: TreasuryStatus;
    cursor: String;
}
export interface TreasuryStatusEdgePromise extends Promise<TreasuryStatusEdge>, Fragmentable {
    node: <T = TreasuryStatusPromise>() => T;
    cursor: () => Promise<String>;
}
export interface TreasuryStatusEdgeSubscription extends Promise<AsyncIterator<TreasuryStatusEdge>>, Fragmentable {
    node: <T = TreasuryStatusSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateTreasuryStatus {
    count: Int;
}
export interface AggregateTreasuryStatusPromise extends Promise<AggregateTreasuryStatus>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateTreasuryStatusSubscription extends Promise<AsyncIterator<AggregateTreasuryStatus>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Validator {
    id: ID_Output;
    controller: String;
    stash: String;
    preferences: String;
}
export interface ValidatorPromise extends Promise<Validator>, Fragmentable {
    id: () => Promise<ID_Output>;
    session: <T = SessionPromise>() => T;
    controller: () => Promise<String>;
    stash: () => Promise<String>;
    preferences: () => Promise<String>;
}
export interface ValidatorSubscription extends Promise<AsyncIterator<Validator>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    session: <T = SessionSubscription>() => T;
    controller: () => Promise<AsyncIterator<String>>;
    stash: () => Promise<AsyncIterator<String>>;
    preferences: () => Promise<AsyncIterator<String>>;
}
export interface ValidatorNullablePromise extends Promise<Validator | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    session: <T = SessionPromise>() => T;
    controller: () => Promise<String>;
    stash: () => Promise<String>;
    preferences: () => Promise<String>;
}
export interface ValidatorConnection {
    pageInfo: PageInfo;
    edges: ValidatorEdge[];
}
export interface ValidatorConnectionPromise extends Promise<ValidatorConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ValidatorEdge>>() => T;
    aggregate: <T = AggregateValidatorPromise>() => T;
}
export interface ValidatorConnectionSubscription extends Promise<AsyncIterator<ValidatorConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ValidatorEdgeSubscription>>>() => T;
    aggregate: <T = AggregateValidatorSubscription>() => T;
}
export interface ValidatorEdge {
    node: Validator;
    cursor: String;
}
export interface ValidatorEdgePromise extends Promise<ValidatorEdge>, Fragmentable {
    node: <T = ValidatorPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ValidatorEdgeSubscription extends Promise<AsyncIterator<ValidatorEdge>>, Fragmentable {
    node: <T = ValidatorSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateValidator {
    count: Int;
}
export interface AggregateValidatorPromise extends Promise<AggregateValidator>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateValidatorSubscription extends Promise<AsyncIterator<AggregateValidator>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
}
export interface BlockIndexSubscriptionPayload {
    mutation: MutationType;
    node: BlockIndex;
    updatedFields: String[];
    previousValues: BlockIndexPreviousValues;
}
export interface BlockIndexSubscriptionPayloadPromise extends Promise<BlockIndexSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = BlockIndexPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = BlockIndexPreviousValuesPromise>() => T;
}
export interface BlockIndexSubscriptionPayloadSubscription extends Promise<AsyncIterator<BlockIndexSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = BlockIndexSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = BlockIndexPreviousValuesSubscription>() => T;
}
export interface BlockIndexPreviousValues {
    id: ID_Output;
    identifier: String;
    startFrom: Int;
    index: Int;
}
export interface BlockIndexPreviousValuesPromise extends Promise<BlockIndexPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    identifier: () => Promise<String>;
    startFrom: () => Promise<Int>;
    index: () => Promise<Int>;
}
export interface BlockIndexPreviousValuesSubscription extends Promise<AsyncIterator<BlockIndexPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    identifier: () => Promise<AsyncIterator<String>>;
    startFrom: () => Promise<AsyncIterator<Int>>;
    index: () => Promise<AsyncIterator<Int>>;
}
export interface BlockNumberSubscriptionPayload {
    mutation: MutationType;
    node: BlockNumber;
    updatedFields: String[];
    previousValues: BlockNumberPreviousValues;
}
export interface BlockNumberSubscriptionPayloadPromise extends Promise<BlockNumberSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = BlockNumberPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = BlockNumberPreviousValuesPromise>() => T;
}
export interface BlockNumberSubscriptionPayloadSubscription extends Promise<AsyncIterator<BlockNumberSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = BlockNumberSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = BlockNumberPreviousValuesSubscription>() => T;
}
export interface BlockNumberPreviousValues {
    id: ID_Output;
    number: Int;
    authoredBy: String;
    startDateTime: DateTimeOutput;
    hash: String;
}
export interface BlockNumberPreviousValuesPromise extends Promise<BlockNumberPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    number: () => Promise<Int>;
    authoredBy: () => Promise<String>;
    startDateTime: () => Promise<DateTimeOutput>;
    hash: () => Promise<String>;
}
export interface BlockNumberPreviousValuesSubscription extends Promise<AsyncIterator<BlockNumberPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    number: () => Promise<AsyncIterator<Int>>;
    authoredBy: () => Promise<AsyncIterator<String>>;
    startDateTime: () => Promise<AsyncIterator<DateTimeOutput>>;
    hash: () => Promise<AsyncIterator<String>>;
}
export interface CouncilSubscriptionPayload {
    mutation: MutationType;
    node: Council;
    updatedFields: String[];
    previousValues: CouncilPreviousValues;
}
export interface CouncilSubscriptionPayloadPromise extends Promise<CouncilSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = CouncilPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = CouncilPreviousValuesPromise>() => T;
}
export interface CouncilSubscriptionPayloadSubscription extends Promise<AsyncIterator<CouncilSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = CouncilSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = CouncilPreviousValuesSubscription>() => T;
}
export interface CouncilPreviousValues {
    id: ID_Output;
}
export interface CouncilPreviousValuesPromise extends Promise<CouncilPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
}
export interface CouncilPreviousValuesSubscription extends Promise<AsyncIterator<CouncilPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
}
export interface CouncilMemberSubscriptionPayload {
    mutation: MutationType;
    node: CouncilMember;
    updatedFields: String[];
    previousValues: CouncilMemberPreviousValues;
}
export interface CouncilMemberSubscriptionPayloadPromise extends Promise<CouncilMemberSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = CouncilMemberPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = CouncilMemberPreviousValuesPromise>() => T;
}
export interface CouncilMemberSubscriptionPayloadSubscription extends Promise<AsyncIterator<CouncilMemberSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = CouncilMemberSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = CouncilMemberPreviousValuesSubscription>() => T;
}
export interface CouncilMemberPreviousValues {
    id: ID_Output;
    address: String;
}
export interface CouncilMemberPreviousValuesPromise extends Promise<CouncilMemberPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    address: () => Promise<String>;
}
export interface CouncilMemberPreviousValuesSubscription extends Promise<AsyncIterator<CouncilMemberPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    address: () => Promise<AsyncIterator<String>>;
}
export interface EraSubscriptionPayload {
    mutation: MutationType;
    node: Era;
    updatedFields: String[];
    previousValues: EraPreviousValues;
}
export interface EraSubscriptionPayloadPromise extends Promise<EraSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = EraPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = EraPreviousValuesPromise>() => T;
}
export interface EraSubscriptionPayloadSubscription extends Promise<AsyncIterator<EraSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = EraSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = EraPreviousValuesSubscription>() => T;
}
export interface EraPreviousValues {
    id: ID_Output;
    index: Int;
    totalPoints: String;
    individualPoints: String[];
}
export interface EraPreviousValuesPromise extends Promise<EraPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    index: () => Promise<Int>;
    totalPoints: () => Promise<String>;
    individualPoints: () => Promise<String[]>;
}
export interface EraPreviousValuesSubscription extends Promise<AsyncIterator<EraPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    index: () => Promise<AsyncIterator<Int>>;
    totalPoints: () => Promise<AsyncIterator<String>>;
    individualPoints: () => Promise<AsyncIterator<String[]>>;
}
export interface HeartBeatSubscriptionPayload {
    mutation: MutationType;
    node: HeartBeat;
    updatedFields: String[];
    previousValues: HeartBeatPreviousValues;
}
export interface HeartBeatSubscriptionPayloadPromise extends Promise<HeartBeatSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = HeartBeatPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = HeartBeatPreviousValuesPromise>() => T;
}
export interface HeartBeatSubscriptionPayloadSubscription extends Promise<AsyncIterator<HeartBeatSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = HeartBeatSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = HeartBeatPreviousValuesSubscription>() => T;
}
export interface HeartBeatPreviousValues {
    id: ID_Output;
    authorityId: String;
}
export interface HeartBeatPreviousValuesPromise extends Promise<HeartBeatPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    authorityId: () => Promise<String>;
}
export interface HeartBeatPreviousValuesSubscription extends Promise<AsyncIterator<HeartBeatPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    authorityId: () => Promise<AsyncIterator<String>>;
}
export interface MotionSubscriptionPayload {
    mutation: MutationType;
    node: Motion;
    updatedFields: String[];
    previousValues: MotionPreviousValues;
}
export interface MotionSubscriptionPayloadPromise extends Promise<MotionSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = MotionPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = MotionPreviousValuesPromise>() => T;
}
export interface MotionSubscriptionPayloadSubscription extends Promise<AsyncIterator<MotionSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = MotionSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = MotionPreviousValuesSubscription>() => T;
}
export interface MotionPreviousValues {
    id: Int;
    author: String;
    memberCount: Int;
    metaDescription: String;
    method: String;
    motionProposalHash: String;
    motionProposalId: Int;
    preimageHash?: String;
    section: String;
}
export interface MotionPreviousValuesPromise extends Promise<MotionPreviousValues>, Fragmentable {
    id: () => Promise<Int>;
    author: () => Promise<String>;
    memberCount: () => Promise<Int>;
    metaDescription: () => Promise<String>;
    method: () => Promise<String>;
    motionProposalHash: () => Promise<String>;
    motionProposalId: () => Promise<Int>;
    preimageHash: () => Promise<String>;
    section: () => Promise<String>;
}
export interface MotionPreviousValuesSubscription extends Promise<AsyncIterator<MotionPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    author: () => Promise<AsyncIterator<String>>;
    memberCount: () => Promise<AsyncIterator<Int>>;
    metaDescription: () => Promise<AsyncIterator<String>>;
    method: () => Promise<AsyncIterator<String>>;
    motionProposalHash: () => Promise<AsyncIterator<String>>;
    motionProposalId: () => Promise<AsyncIterator<Int>>;
    preimageHash: () => Promise<AsyncIterator<String>>;
    section: () => Promise<AsyncIterator<String>>;
}
export interface MotionProposalArgumentSubscriptionPayload {
    mutation: MutationType;
    node: MotionProposalArgument;
    updatedFields: String[];
    previousValues: MotionProposalArgumentPreviousValues;
}
export interface MotionProposalArgumentSubscriptionPayloadPromise extends Promise<MotionProposalArgumentSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = MotionProposalArgumentPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = MotionProposalArgumentPreviousValuesPromise>() => T;
}
export interface MotionProposalArgumentSubscriptionPayloadSubscription extends Promise<AsyncIterator<MotionProposalArgumentSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = MotionProposalArgumentSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = MotionProposalArgumentPreviousValuesSubscription>() => T;
}
export interface MotionProposalArgumentPreviousValues {
    id: ID_Output;
    name: String;
    value: String;
}
export interface MotionProposalArgumentPreviousValuesPromise extends Promise<MotionProposalArgumentPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    value: () => Promise<String>;
}
export interface MotionProposalArgumentPreviousValuesSubscription extends Promise<AsyncIterator<MotionProposalArgumentPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    value: () => Promise<AsyncIterator<String>>;
}
export interface MotionStatusSubscriptionPayload {
    mutation: MutationType;
    node: MotionStatus;
    updatedFields: String[];
    previousValues: MotionStatusPreviousValues;
}
export interface MotionStatusSubscriptionPayloadPromise extends Promise<MotionStatusSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = MotionStatusPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = MotionStatusPreviousValuesPromise>() => T;
}
export interface MotionStatusSubscriptionPayloadSubscription extends Promise<AsyncIterator<MotionStatusSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = MotionStatusSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = MotionStatusPreviousValuesSubscription>() => T;
}
export interface MotionStatusPreviousValues {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface MotionStatusPreviousValuesPromise extends Promise<MotionStatusPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface MotionStatusPreviousValuesSubscription extends Promise<AsyncIterator<MotionStatusPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface NominationSubscriptionPayload {
    mutation: MutationType;
    node: Nomination;
    updatedFields: String[];
    previousValues: NominationPreviousValues;
}
export interface NominationSubscriptionPayloadPromise extends Promise<NominationSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = NominationPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = NominationPreviousValuesPromise>() => T;
}
export interface NominationSubscriptionPayloadSubscription extends Promise<AsyncIterator<NominationSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = NominationSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = NominationPreviousValuesSubscription>() => T;
}
export interface NominationPreviousValues {
    id: ID_Output;
    validatorController: String;
    validatorStash: String;
    nominatorController: String;
    nominatorStash: String;
    stakedAmount: String;
}
export interface NominationPreviousValuesPromise extends Promise<NominationPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    validatorController: () => Promise<String>;
    validatorStash: () => Promise<String>;
    nominatorController: () => Promise<String>;
    nominatorStash: () => Promise<String>;
    stakedAmount: () => Promise<String>;
}
export interface NominationPreviousValuesSubscription extends Promise<AsyncIterator<NominationPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    validatorController: () => Promise<AsyncIterator<String>>;
    validatorStash: () => Promise<AsyncIterator<String>>;
    nominatorController: () => Promise<AsyncIterator<String>>;
    nominatorStash: () => Promise<AsyncIterator<String>>;
    stakedAmount: () => Promise<AsyncIterator<String>>;
}
export interface OfflineValidatorSubscriptionPayload {
    mutation: MutationType;
    node: OfflineValidator;
    updatedFields: String[];
    previousValues: OfflineValidatorPreviousValues;
}
export interface OfflineValidatorSubscriptionPayloadPromise extends Promise<OfflineValidatorSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = OfflineValidatorPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = OfflineValidatorPreviousValuesPromise>() => T;
}
export interface OfflineValidatorSubscriptionPayloadSubscription extends Promise<AsyncIterator<OfflineValidatorSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = OfflineValidatorSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = OfflineValidatorPreviousValuesSubscription>() => T;
}
export interface OfflineValidatorPreviousValues {
    id: ID_Output;
    validatorId: String;
    total: String;
    own: String;
    others: Json[];
}
export interface OfflineValidatorPreviousValuesPromise extends Promise<OfflineValidatorPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    validatorId: () => Promise<String>;
    total: () => Promise<String>;
    own: () => Promise<String>;
    others: () => Promise<Json[]>;
}
export interface OfflineValidatorPreviousValuesSubscription extends Promise<AsyncIterator<OfflineValidatorPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    validatorId: () => Promise<AsyncIterator<String>>;
    total: () => Promise<AsyncIterator<String>>;
    own: () => Promise<AsyncIterator<String>>;
    others: () => Promise<AsyncIterator<Json[]>>;
}
export interface PreimageSubscriptionPayload {
    mutation: MutationType;
    node: Preimage;
    updatedFields: String[];
    previousValues: PreimagePreviousValues;
}
export interface PreimageSubscriptionPayloadPromise extends Promise<PreimageSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = PreimagePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = PreimagePreviousValuesPromise>() => T;
}
export interface PreimageSubscriptionPayloadSubscription extends Promise<AsyncIterator<PreimageSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = PreimageSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = PreimagePreviousValuesSubscription>() => T;
}
export interface PreimagePreviousValues {
    id: ID_Output;
    author: String;
    depositAmount: String;
    hash: String;
    metaDescription: String;
    method: String;
    section: String;
}
export interface PreimagePreviousValuesPromise extends Promise<PreimagePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    author: () => Promise<String>;
    depositAmount: () => Promise<String>;
    hash: () => Promise<String>;
    metaDescription: () => Promise<String>;
    method: () => Promise<String>;
    section: () => Promise<String>;
}
export interface PreimagePreviousValuesSubscription extends Promise<AsyncIterator<PreimagePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    author: () => Promise<AsyncIterator<String>>;
    depositAmount: () => Promise<AsyncIterator<String>>;
    hash: () => Promise<AsyncIterator<String>>;
    metaDescription: () => Promise<AsyncIterator<String>>;
    method: () => Promise<AsyncIterator<String>>;
    section: () => Promise<AsyncIterator<String>>;
}
export interface PreimageArgumentSubscriptionPayload {
    mutation: MutationType;
    node: PreimageArgument;
    updatedFields: String[];
    previousValues: PreimageArgumentPreviousValues;
}
export interface PreimageArgumentSubscriptionPayloadPromise extends Promise<PreimageArgumentSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = PreimageArgumentPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = PreimageArgumentPreviousValuesPromise>() => T;
}
export interface PreimageArgumentSubscriptionPayloadSubscription extends Promise<AsyncIterator<PreimageArgumentSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = PreimageArgumentSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = PreimageArgumentPreviousValuesSubscription>() => T;
}
export interface PreimageArgumentPreviousValues {
    id: ID_Output;
    name: String;
    value: String;
}
export interface PreimageArgumentPreviousValuesPromise extends Promise<PreimageArgumentPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    value: () => Promise<String>;
}
export interface PreimageArgumentPreviousValuesSubscription extends Promise<AsyncIterator<PreimageArgumentPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    value: () => Promise<AsyncIterator<String>>;
}
export interface PreimageStatusSubscriptionPayload {
    mutation: MutationType;
    node: PreimageStatus;
    updatedFields: String[];
    previousValues: PreimageStatusPreviousValues;
}
export interface PreimageStatusSubscriptionPayloadPromise extends Promise<PreimageStatusSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = PreimageStatusPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = PreimageStatusPreviousValuesPromise>() => T;
}
export interface PreimageStatusSubscriptionPayloadSubscription extends Promise<AsyncIterator<PreimageStatusSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = PreimageStatusSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = PreimageStatusPreviousValuesSubscription>() => T;
}
export interface PreimageStatusPreviousValues {
    id: ID_Output;
    status: String;
}
export interface PreimageStatusPreviousValuesPromise extends Promise<PreimageStatusPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<String>;
}
export interface PreimageStatusPreviousValuesSubscription extends Promise<AsyncIterator<PreimageStatusPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<String>>;
}
export interface ProposalSubscriptionPayload {
    mutation: MutationType;
    node: Proposal;
    updatedFields: String[];
    previousValues: ProposalPreviousValues;
}
export interface ProposalSubscriptionPayloadPromise extends Promise<ProposalSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ProposalPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ProposalPreviousValuesPromise>() => T;
}
export interface ProposalSubscriptionPayloadSubscription extends Promise<AsyncIterator<ProposalSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ProposalSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ProposalPreviousValuesSubscription>() => T;
}
export interface ProposalPreviousValues {
    id: Int;
    author: String;
    depositAmount: String;
    preimageHash: String;
    proposalId: Int;
}
export interface ProposalPreviousValuesPromise extends Promise<ProposalPreviousValues>, Fragmentable {
    id: () => Promise<Int>;
    author: () => Promise<String>;
    depositAmount: () => Promise<String>;
    preimageHash: () => Promise<String>;
    proposalId: () => Promise<Int>;
}
export interface ProposalPreviousValuesSubscription extends Promise<AsyncIterator<ProposalPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    author: () => Promise<AsyncIterator<String>>;
    depositAmount: () => Promise<AsyncIterator<String>>;
    preimageHash: () => Promise<AsyncIterator<String>>;
    proposalId: () => Promise<AsyncIterator<Int>>;
}
export interface ProposalStatusSubscriptionPayload {
    mutation: MutationType;
    node: ProposalStatus;
    updatedFields: String[];
    previousValues: ProposalStatusPreviousValues;
}
export interface ProposalStatusSubscriptionPayloadPromise extends Promise<ProposalStatusSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ProposalStatusPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ProposalStatusPreviousValuesPromise>() => T;
}
export interface ProposalStatusSubscriptionPayloadSubscription extends Promise<AsyncIterator<ProposalStatusSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ProposalStatusSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ProposalStatusPreviousValuesSubscription>() => T;
}
export interface ProposalStatusPreviousValues {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface ProposalStatusPreviousValuesPromise extends Promise<ProposalStatusPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface ProposalStatusPreviousValuesSubscription extends Promise<AsyncIterator<ProposalStatusPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface ReferendumSubscriptionPayload {
    mutation: MutationType;
    node: Referendum;
    updatedFields: String[];
    previousValues: ReferendumPreviousValues;
}
export interface ReferendumSubscriptionPayloadPromise extends Promise<ReferendumSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ReferendumPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ReferendumPreviousValuesPromise>() => T;
}
export interface ReferendumSubscriptionPayloadSubscription extends Promise<AsyncIterator<ReferendumSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ReferendumSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ReferendumPreviousValuesSubscription>() => T;
}
export interface ReferendumPreviousValues {
    id: Int;
    delay: Int;
    end: Int;
    preimageHash: String;
    referendumId: Int;
    voteThreshold: String;
}
export interface ReferendumPreviousValuesPromise extends Promise<ReferendumPreviousValues>, Fragmentable {
    id: () => Promise<Int>;
    delay: () => Promise<Int>;
    end: () => Promise<Int>;
    preimageHash: () => Promise<String>;
    referendumId: () => Promise<Int>;
    voteThreshold: () => Promise<String>;
}
export interface ReferendumPreviousValuesSubscription extends Promise<AsyncIterator<ReferendumPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    delay: () => Promise<AsyncIterator<Int>>;
    end: () => Promise<AsyncIterator<Int>>;
    preimageHash: () => Promise<AsyncIterator<String>>;
    referendumId: () => Promise<AsyncIterator<Int>>;
    voteThreshold: () => Promise<AsyncIterator<String>>;
}
export interface ReferendumStatusSubscriptionPayload {
    mutation: MutationType;
    node: ReferendumStatus;
    updatedFields: String[];
    previousValues: ReferendumStatusPreviousValues;
}
export interface ReferendumStatusSubscriptionPayloadPromise extends Promise<ReferendumStatusSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ReferendumStatusPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ReferendumStatusPreviousValuesPromise>() => T;
}
export interface ReferendumStatusSubscriptionPayloadSubscription extends Promise<AsyncIterator<ReferendumStatusSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ReferendumStatusSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ReferendumStatusPreviousValuesSubscription>() => T;
}
export interface ReferendumStatusPreviousValues {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface ReferendumStatusPreviousValuesPromise extends Promise<ReferendumStatusPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface ReferendumStatusPreviousValuesSubscription extends Promise<AsyncIterator<ReferendumStatusPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface RewardSubscriptionPayload {
    mutation: MutationType;
    node: Reward;
    updatedFields: String[];
    previousValues: RewardPreviousValues;
}
export interface RewardSubscriptionPayloadPromise extends Promise<RewardSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = RewardPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = RewardPreviousValuesPromise>() => T;
}
export interface RewardSubscriptionPayloadSubscription extends Promise<AsyncIterator<RewardSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = RewardSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = RewardPreviousValuesSubscription>() => T;
}
export interface RewardPreviousValues {
    id: ID_Output;
    treasuryReward: String;
    validatorReward: String;
}
export interface RewardPreviousValuesPromise extends Promise<RewardPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    treasuryReward: () => Promise<String>;
    validatorReward: () => Promise<String>;
}
export interface RewardPreviousValuesSubscription extends Promise<AsyncIterator<RewardPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    treasuryReward: () => Promise<AsyncIterator<String>>;
    validatorReward: () => Promise<AsyncIterator<String>>;
}
export interface SessionSubscriptionPayload {
    mutation: MutationType;
    node: Session;
    updatedFields: String[];
    previousValues: SessionPreviousValues;
}
export interface SessionSubscriptionPayloadPromise extends Promise<SessionSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = SessionPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = SessionPreviousValuesPromise>() => T;
}
export interface SessionSubscriptionPayloadSubscription extends Promise<AsyncIterator<SessionSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = SessionSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = SessionPreviousValuesSubscription>() => T;
}
export interface SessionPreviousValues {
    id: ID_Output;
    index: Int;
}
export interface SessionPreviousValuesPromise extends Promise<SessionPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    index: () => Promise<Int>;
}
export interface SessionPreviousValuesSubscription extends Promise<AsyncIterator<SessionPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    index: () => Promise<AsyncIterator<Int>>;
}
export interface SlashingSubscriptionPayload {
    mutation: MutationType;
    node: Slashing;
    updatedFields: String[];
    previousValues: SlashingPreviousValues;
}
export interface SlashingSubscriptionPayloadPromise extends Promise<SlashingSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = SlashingPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = SlashingPreviousValuesPromise>() => T;
}
export interface SlashingSubscriptionPayloadSubscription extends Promise<AsyncIterator<SlashingSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = SlashingSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = SlashingPreviousValuesSubscription>() => T;
}
export interface SlashingPreviousValues {
    id: ID_Output;
    who: String;
    amount: String;
}
export interface SlashingPreviousValuesPromise extends Promise<SlashingPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    who: () => Promise<String>;
    amount: () => Promise<String>;
}
export interface SlashingPreviousValuesSubscription extends Promise<AsyncIterator<SlashingPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    who: () => Promise<AsyncIterator<String>>;
    amount: () => Promise<AsyncIterator<String>>;
}
export interface StakeSubscriptionPayload {
    mutation: MutationType;
    node: Stake;
    updatedFields: String[];
    previousValues: StakePreviousValues;
}
export interface StakeSubscriptionPayloadPromise extends Promise<StakeSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = StakePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = StakePreviousValuesPromise>() => T;
}
export interface StakeSubscriptionPayloadSubscription extends Promise<AsyncIterator<StakeSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = StakeSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = StakePreviousValuesSubscription>() => T;
}
export interface StakePreviousValues {
    id: ID_Output;
    totalStake: String;
}
export interface StakePreviousValuesPromise extends Promise<StakePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    totalStake: () => Promise<String>;
}
export interface StakePreviousValuesSubscription extends Promise<AsyncIterator<StakePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    totalStake: () => Promise<AsyncIterator<String>>;
}
export interface TotalIssuanceSubscriptionPayload {
    mutation: MutationType;
    node: TotalIssuance;
    updatedFields: String[];
    previousValues: TotalIssuancePreviousValues;
}
export interface TotalIssuanceSubscriptionPayloadPromise extends Promise<TotalIssuanceSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = TotalIssuancePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = TotalIssuancePreviousValuesPromise>() => T;
}
export interface TotalIssuanceSubscriptionPayloadSubscription extends Promise<AsyncIterator<TotalIssuanceSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = TotalIssuanceSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = TotalIssuancePreviousValuesSubscription>() => T;
}
export interface TotalIssuancePreviousValues {
    id: ID_Output;
    amount: String;
}
export interface TotalIssuancePreviousValuesPromise extends Promise<TotalIssuancePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    amount: () => Promise<String>;
}
export interface TotalIssuancePreviousValuesSubscription extends Promise<AsyncIterator<TotalIssuancePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    amount: () => Promise<AsyncIterator<String>>;
}
export interface TreasurySpendProposalSubscriptionPayload {
    mutation: MutationType;
    node: TreasurySpendProposal;
    updatedFields: String[];
    previousValues: TreasurySpendProposalPreviousValues;
}
export interface TreasurySpendProposalSubscriptionPayloadPromise extends Promise<TreasurySpendProposalSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = TreasurySpendProposalPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = TreasurySpendProposalPreviousValuesPromise>() => T;
}
export interface TreasurySpendProposalSubscriptionPayloadSubscription extends Promise<AsyncIterator<TreasurySpendProposalSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = TreasurySpendProposalSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = TreasurySpendProposalPreviousValuesSubscription>() => T;
}
export interface TreasurySpendProposalPreviousValues {
    id: Int;
    proposer: String;
    beneficiary: String;
    value: String;
    bond: String;
    treasuryProposalId: Int;
}
export interface TreasurySpendProposalPreviousValuesPromise extends Promise<TreasurySpendProposalPreviousValues>, Fragmentable {
    id: () => Promise<Int>;
    proposer: () => Promise<String>;
    beneficiary: () => Promise<String>;
    value: () => Promise<String>;
    bond: () => Promise<String>;
    treasuryProposalId: () => Promise<Int>;
}
export interface TreasurySpendProposalPreviousValuesSubscription extends Promise<AsyncIterator<TreasurySpendProposalPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<Int>>;
    proposer: () => Promise<AsyncIterator<String>>;
    beneficiary: () => Promise<AsyncIterator<String>>;
    value: () => Promise<AsyncIterator<String>>;
    bond: () => Promise<AsyncIterator<String>>;
    treasuryProposalId: () => Promise<AsyncIterator<Int>>;
}
export interface TreasuryStatusSubscriptionPayload {
    mutation: MutationType;
    node: TreasuryStatus;
    updatedFields: String[];
    previousValues: TreasuryStatusPreviousValues;
}
export interface TreasuryStatusSubscriptionPayloadPromise extends Promise<TreasuryStatusSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = TreasuryStatusPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = TreasuryStatusPreviousValuesPromise>() => T;
}
export interface TreasuryStatusSubscriptionPayloadSubscription extends Promise<AsyncIterator<TreasuryStatusSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = TreasuryStatusSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = TreasuryStatusPreviousValuesSubscription>() => T;
}
export interface TreasuryStatusPreviousValues {
    id: ID_Output;
    status: String;
    uniqueStatus: String;
}
export interface TreasuryStatusPreviousValuesPromise extends Promise<TreasuryStatusPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<String>;
    uniqueStatus: () => Promise<String>;
}
export interface TreasuryStatusPreviousValuesSubscription extends Promise<AsyncIterator<TreasuryStatusPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<String>>;
    uniqueStatus: () => Promise<AsyncIterator<String>>;
}
export interface ValidatorSubscriptionPayload {
    mutation: MutationType;
    node: Validator;
    updatedFields: String[];
    previousValues: ValidatorPreviousValues;
}
export interface ValidatorSubscriptionPayloadPromise extends Promise<ValidatorSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ValidatorPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ValidatorPreviousValuesPromise>() => T;
}
export interface ValidatorSubscriptionPayloadSubscription extends Promise<AsyncIterator<ValidatorSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ValidatorSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ValidatorPreviousValuesSubscription>() => T;
}
export interface ValidatorPreviousValues {
    id: ID_Output;
    controller: String;
    stash: String;
    preferences: String;
}
export interface ValidatorPreviousValuesPromise extends Promise<ValidatorPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    controller: () => Promise<String>;
    stash: () => Promise<String>;
    preferences: () => Promise<String>;
}
export interface ValidatorPreviousValuesSubscription extends Promise<AsyncIterator<ValidatorPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    controller: () => Promise<AsyncIterator<String>>;
    stash: () => Promise<AsyncIterator<String>>;
    preferences: () => Promise<AsyncIterator<String>>;
}
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type String = string;
export declare type Int = number;
export declare type Boolean = boolean;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare type Json = any;
export declare type Long = string;
/**
 * Model Metadata
 */
export declare const models: Model[];
/**
 * Type Defs
 */
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
