import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
};

export type AggregateBlockIndex = {
  __typename?: 'AggregateBlockIndex';
  count: Scalars['Int'];
};

export type AggregateBlockNumber = {
  __typename?: 'AggregateBlockNumber';
  count: Scalars['Int'];
};

export type AggregateBounty = {
  __typename?: 'AggregateBounty';
  count: Scalars['Int'];
};

export type AggregateBountyStatus = {
  __typename?: 'AggregateBountyStatus';
  count: Scalars['Int'];
};

export type AggregateCouncil = {
  __typename?: 'AggregateCouncil';
  count: Scalars['Int'];
};

export type AggregateCouncilMember = {
  __typename?: 'AggregateCouncilMember';
  count: Scalars['Int'];
};

export type AggregateEra = {
  __typename?: 'AggregateEra';
  count: Scalars['Int'];
};

export type AggregateHeartBeat = {
  __typename?: 'AggregateHeartBeat';
  count: Scalars['Int'];
};

export type AggregateMotion = {
  __typename?: 'AggregateMotion';
  count: Scalars['Int'];
};

export type AggregateMotionProposalArgument = {
  __typename?: 'AggregateMotionProposalArgument';
  count: Scalars['Int'];
};

export type AggregateMotionStatus = {
  __typename?: 'AggregateMotionStatus';
  count: Scalars['Int'];
};

export type AggregateNomination = {
  __typename?: 'AggregateNomination';
  count: Scalars['Int'];
};

export type AggregateOfflineValidator = {
  __typename?: 'AggregateOfflineValidator';
  count: Scalars['Int'];
};

export type AggregatePreimage = {
  __typename?: 'AggregatePreimage';
  count: Scalars['Int'];
};

export type AggregatePreimageArgument = {
  __typename?: 'AggregatePreimageArgument';
  count: Scalars['Int'];
};

export type AggregatePreimageStatus = {
  __typename?: 'AggregatePreimageStatus';
  count: Scalars['Int'];
};

export type AggregateProposal = {
  __typename?: 'AggregateProposal';
  count: Scalars['Int'];
};

export type AggregateProposalStatus = {
  __typename?: 'AggregateProposalStatus';
  count: Scalars['Int'];
};

export type AggregateReferendum = {
  __typename?: 'AggregateReferendum';
  count: Scalars['Int'];
};

export type AggregateReferendumStatus = {
  __typename?: 'AggregateReferendumStatus';
  count: Scalars['Int'];
};

export type AggregateReward = {
  __typename?: 'AggregateReward';
  count: Scalars['Int'];
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  count: Scalars['Int'];
};

export type AggregateSlashing = {
  __typename?: 'AggregateSlashing';
  count: Scalars['Int'];
};

export type AggregateStake = {
  __typename?: 'AggregateStake';
  count: Scalars['Int'];
};

export type AggregateTip = {
  __typename?: 'AggregateTip';
  count: Scalars['Int'];
};

export type AggregateTipStatus = {
  __typename?: 'AggregateTipStatus';
  count: Scalars['Int'];
};

export type AggregateTotalIssuance = {
  __typename?: 'AggregateTotalIssuance';
  count: Scalars['Int'];
};

export type AggregateTreasurySpendProposal = {
  __typename?: 'AggregateTreasurySpendProposal';
  count: Scalars['Int'];
};

export type AggregateTreasuryStatus = {
  __typename?: 'AggregateTreasuryStatus';
  count: Scalars['Int'];
};

export type AggregateValidator = {
  __typename?: 'AggregateValidator';
  count: Scalars['Int'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type BlockIndex = Node & {
  __typename?: 'BlockIndex';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  startFrom: Scalars['Int'];
  index: Scalars['Int'];
};

/** A connection to a list of items. */
export type BlockIndexConnection = {
  __typename?: 'BlockIndexConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<BlockIndexEdge>>;
  aggregate: AggregateBlockIndex;
};

export type BlockIndexCreateInput = {
  id?: Maybe<Scalars['ID']>;
  identifier: Scalars['String'];
  startFrom: Scalars['Int'];
  index: Scalars['Int'];
};

/** An edge in a connection. */
export type BlockIndexEdge = {
  __typename?: 'BlockIndexEdge';
  /** The item at the end of the edge. */
  node: BlockIndex;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum BlockIndexOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  StartFromAsc = 'startFrom_ASC',
  StartFromDesc = 'startFrom_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type BlockIndexPreviousValues = {
  __typename?: 'BlockIndexPreviousValues';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  startFrom: Scalars['Int'];
  index: Scalars['Int'];
};

export type BlockIndexSubscriptionPayload = {
  __typename?: 'BlockIndexSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BlockIndex>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<BlockIndexPreviousValues>;
};

export type BlockIndexSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<BlockIndexWhereInput>;
};

export type BlockIndexUpdateInput = {
  identifier?: Maybe<Scalars['String']>;
  startFrom?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type BlockIndexUpdateManyMutationInput = {
  identifier?: Maybe<Scalars['String']>;
  startFrom?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type BlockIndexWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockIndexWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockIndexWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockIndexWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  identifier_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  identifier_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  identifier_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  identifier_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  identifier_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  startFrom?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  startFrom_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  startFrom_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  startFrom_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  startFrom_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  startFrom_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  startFrom_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  startFrom_gte?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
};

export type BlockIndexWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
};

export type BlockNumber = Node & {
  __typename?: 'BlockNumber';
  id: Scalars['ID'];
  number: Scalars['Int'];
  authoredBy: Scalars['String'];
  startDateTime: Scalars['DateTime'];
  hash: Scalars['String'];
};

/** A connection to a list of items. */
export type BlockNumberConnection = {
  __typename?: 'BlockNumberConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<BlockNumberEdge>>;
  aggregate: AggregateBlockNumber;
};

export type BlockNumberCreateInput = {
  id?: Maybe<Scalars['ID']>;
  number: Scalars['Int'];
  authoredBy: Scalars['String'];
  startDateTime: Scalars['DateTime'];
  hash: Scalars['String'];
};

export type BlockNumberCreateOneInput = {
  create?: Maybe<BlockNumberCreateInput>;
  connect?: Maybe<BlockNumberWhereUniqueInput>;
};

/** An edge in a connection. */
export type BlockNumberEdge = {
  __typename?: 'BlockNumberEdge';
  /** The item at the end of the edge. */
  node: BlockNumber;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum BlockNumberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  AuthoredByAsc = 'authoredBy_ASC',
  AuthoredByDesc = 'authoredBy_DESC',
  StartDateTimeAsc = 'startDateTime_ASC',
  StartDateTimeDesc = 'startDateTime_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC'
}

export type BlockNumberPreviousValues = {
  __typename?: 'BlockNumberPreviousValues';
  id: Scalars['ID'];
  number: Scalars['Int'];
  authoredBy: Scalars['String'];
  startDateTime: Scalars['DateTime'];
  hash: Scalars['String'];
};

export type BlockNumberSubscriptionPayload = {
  __typename?: 'BlockNumberSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BlockNumber>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<BlockNumberPreviousValues>;
};

export type BlockNumberSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<BlockNumberWhereInput>;
};

export type BlockNumberUpdateDataInput = {
  number?: Maybe<Scalars['Int']>;
  authoredBy?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
};

export type BlockNumberUpdateInput = {
  number?: Maybe<Scalars['Int']>;
  authoredBy?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
};

export type BlockNumberUpdateManyMutationInput = {
  number?: Maybe<Scalars['Int']>;
  authoredBy?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
};

export type BlockNumberUpdateOneRequiredInput = {
  create?: Maybe<BlockNumberCreateInput>;
  connect?: Maybe<BlockNumberWhereUniqueInput>;
  update?: Maybe<BlockNumberUpdateDataInput>;
  upsert?: Maybe<BlockNumberUpsertNestedInput>;
};

export type BlockNumberUpsertNestedInput = {
  update: BlockNumberUpdateDataInput;
  create: BlockNumberCreateInput;
};

export type BlockNumberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockNumberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockNumberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockNumberWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  number_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  number_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  number_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  number_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  number_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  number_gte?: Maybe<Scalars['Int']>;
  authoredBy?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authoredBy_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authoredBy_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  authoredBy_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  authoredBy_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  authoredBy_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  authoredBy_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  authoredBy_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authoredBy_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authoredBy_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  authoredBy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authoredBy_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  authoredBy_not_ends_with?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startDateTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startDateTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startDateTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startDateTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startDateTime_gte?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
};

export type BlockNumberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
};

export type Bounty = {
  __typename?: 'Bounty';
  id: Scalars['Int'];
  proposer: Scalars['String'];
  value: Scalars['String'];
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  bountyStatus?: Maybe<Array<BountyStatus>>;
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
};


export type BountyBountyStatusArgs = {
  where?: Maybe<BountyStatusWhereInput>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type BountyConnection = {
  __typename?: 'BountyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<BountyEdge>>;
  aggregate: AggregateBounty;
};

export type BountyCreateInput = {
  proposer: Scalars['String'];
  value: Scalars['String'];
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  bountyStatus?: Maybe<BountyStatusCreateManyWithoutBountyInput>;
};

export type BountyCreateOneWithoutBountyStatusInput = {
  create?: Maybe<BountyCreateWithoutBountyStatusInput>;
  connect?: Maybe<BountyWhereUniqueInput>;
};

export type BountyCreateWithoutBountyStatusInput = {
  proposer: Scalars['String'];
  value: Scalars['String'];
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type BountyEdge = {
  __typename?: 'BountyEdge';
  /** The item at the end of the edge. */
  node: Bounty;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum BountyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  FeeAsc = 'fee_ASC',
  FeeDesc = 'fee_DESC',
  CuratorDepositAsc = 'curatorDeposit_ASC',
  CuratorDepositDesc = 'curatorDeposit_DESC',
  BondAsc = 'bond_ASC',
  BondDesc = 'bond_DESC',
  BountyIdAsc = 'bountyId_ASC',
  BountyIdDesc = 'bountyId_DESC',
  CuratorAsc = 'curator_ASC',
  CuratorDesc = 'curator_DESC',
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC'
}

export type BountyPreviousValues = {
  __typename?: 'BountyPreviousValues';
  id: Scalars['Int'];
  proposer: Scalars['String'];
  value: Scalars['String'];
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
};

export type BountyStatus = Node & {
  __typename?: 'BountyStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  bounty: Bounty;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type BountyStatusConnection = {
  __typename?: 'BountyStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<BountyStatusEdge>>;
  aggregate: AggregateBountyStatus;
};

export type BountyStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  bounty: BountyCreateOneWithoutBountyStatusInput;
};

export type BountyStatusCreateManyWithoutBountyInput = {
  create?: Maybe<Array<BountyStatusCreateWithoutBountyInput>>;
  connect?: Maybe<Array<BountyStatusWhereUniqueInput>>;
};

export type BountyStatusCreateWithoutBountyInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type BountyStatusEdge = {
  __typename?: 'BountyStatusEdge';
  /** The item at the end of the edge. */
  node: BountyStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum BountyStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type BountyStatusPreviousValues = {
  __typename?: 'BountyStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type BountyStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
};

export type BountyStatusSubscriptionPayload = {
  __typename?: 'BountyStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BountyStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<BountyStatusPreviousValues>;
};

export type BountyStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<BountyStatusWhereInput>;
};

export type BountyStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  bounty?: Maybe<BountyUpdateOneRequiredWithoutBountyStatusInput>;
};

export type BountyStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type BountyStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type BountyStatusUpdateManyWithoutBountyInput = {
  create?: Maybe<Array<BountyStatusCreateWithoutBountyInput>>;
  connect?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  set?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  delete?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  update?: Maybe<Array<BountyStatusUpdateWithWhereUniqueWithoutBountyInput>>;
  updateMany?: Maybe<Array<BountyStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<BountyStatusScalarWhereInput>>;
  upsert?: Maybe<Array<BountyStatusUpsertWithWhereUniqueWithoutBountyInput>>;
};

export type BountyStatusUpdateManyWithWhereNestedInput = {
  where: BountyStatusScalarWhereInput;
  data: BountyStatusUpdateManyDataInput;
};

export type BountyStatusUpdateWithoutBountyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type BountyStatusUpdateWithWhereUniqueWithoutBountyInput = {
  where: BountyStatusWhereUniqueInput;
  data: BountyStatusUpdateWithoutBountyDataInput;
};

export type BountyStatusUpsertWithWhereUniqueWithoutBountyInput = {
  where: BountyStatusWhereUniqueInput;
  update: BountyStatusUpdateWithoutBountyDataInput;
  create: BountyStatusCreateWithoutBountyInput;
};

export type BountyStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  bounty?: Maybe<BountyWhereInput>;
};

export type BountyStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type BountySubscriptionPayload = {
  __typename?: 'BountySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Bounty>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<BountyPreviousValues>;
};

export type BountySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<BountyWhereInput>;
};

export type BountyUpdateInput = {
  proposer?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  bountyStatus?: Maybe<BountyStatusUpdateManyWithoutBountyInput>;
};

export type BountyUpdateManyMutationInput = {
  proposer?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
};

export type BountyUpdateOneRequiredWithoutBountyStatusInput = {
  create?: Maybe<BountyCreateWithoutBountyStatusInput>;
  connect?: Maybe<BountyWhereUniqueInput>;
  update?: Maybe<BountyUpdateWithoutBountyStatusDataInput>;
  upsert?: Maybe<BountyUpsertWithoutBountyStatusInput>;
};

export type BountyUpdateWithoutBountyStatusDataInput = {
  proposer?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  curator?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
};

export type BountyUpsertWithoutBountyStatusInput = {
  update: BountyUpdateWithoutBountyStatusDataInput;
  create: BountyCreateWithoutBountyStatusInput;
};

export type BountyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  proposer?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fee_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fee_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fee_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fee_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fee_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fee_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fee_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fee_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fee_not_ends_with?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curatorDeposit_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curatorDeposit_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  curatorDeposit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curatorDeposit_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curatorDeposit_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curatorDeposit_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curatorDeposit_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curatorDeposit_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curatorDeposit_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curatorDeposit_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  curatorDeposit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curatorDeposit_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curatorDeposit_not_ends_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  bountyId_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bountyId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  bountyId_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  bountyId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bountyId_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  bountyId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bountyId_gte?: Maybe<Scalars['Int']>;
  curator?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curator_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curator_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  curator_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curator_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curator_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curator_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curator_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curator_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curator_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curator_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  curator_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curator_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curator_not_ends_with?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  bountyStatus_every?: Maybe<BountyStatusWhereInput>;
  bountyStatus_some?: Maybe<BountyStatusWhereInput>;
  bountyStatus_none?: Maybe<BountyStatusWhereInput>;
};

export type BountyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  bountyId?: Maybe<Scalars['Int']>;
};

export type Council = Node & {
  __typename?: 'Council';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  members?: Maybe<Array<CouncilMember>>;
};


export type CouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CouncilConnection = {
  __typename?: 'CouncilConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CouncilEdge>>;
  aggregate: AggregateCouncil;
};

export type CouncilCreateInput = {
  id?: Maybe<Scalars['ID']>;
  blockNumber: BlockNumberCreateOneInput;
  members?: Maybe<CouncilMemberCreateManyWithoutCouncilsInput>;
};

export type CouncilCreateManyWithoutMembersInput = {
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>;
  connect?: Maybe<Array<CouncilWhereUniqueInput>>;
};

export type CouncilCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>;
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type CouncilEdge = {
  __typename?: 'CouncilEdge';
  /** The item at the end of the edge. */
  node: Council;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CouncilMember = Node & {
  __typename?: 'CouncilMember';
  id: Scalars['ID'];
  address: Scalars['String'];
  councils?: Maybe<Array<Council>>;
};


export type CouncilMemberCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CouncilMemberConnection = {
  __typename?: 'CouncilMemberConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CouncilMemberEdge>>;
  aggregate: AggregateCouncilMember;
};

export type CouncilMemberCreateInput = {
  id?: Maybe<Scalars['ID']>;
  address: Scalars['String'];
  councils?: Maybe<CouncilCreateManyWithoutMembersInput>;
};

export type CouncilMemberCreateManyWithoutCouncilsInput = {
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>;
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
};

export type CouncilMemberCreateWithoutCouncilsInput = {
  id?: Maybe<Scalars['ID']>;
  address: Scalars['String'];
};

/** An edge in a connection. */
export type CouncilMemberEdge = {
  __typename?: 'CouncilMemberEdge';
  /** The item at the end of the edge. */
  node: CouncilMember;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum CouncilMemberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC'
}

export type CouncilMemberPreviousValues = {
  __typename?: 'CouncilMemberPreviousValues';
  id: Scalars['ID'];
  address: Scalars['String'];
};

export type CouncilMemberScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
};

export type CouncilMemberSubscriptionPayload = {
  __typename?: 'CouncilMemberSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<CouncilMember>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CouncilMemberPreviousValues>;
};

export type CouncilMemberSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CouncilMemberWhereInput>;
};

export type CouncilMemberUpdateInput = {
  address?: Maybe<Scalars['String']>;
  councils?: Maybe<CouncilUpdateManyWithoutMembersInput>;
};

export type CouncilMemberUpdateManyDataInput = {
  address?: Maybe<Scalars['String']>;
};

export type CouncilMemberUpdateManyMutationInput = {
  address?: Maybe<Scalars['String']>;
};

export type CouncilMemberUpdateManyWithoutCouncilsInput = {
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>;
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  set?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  disconnect?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  delete?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  update?: Maybe<Array<CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput>>;
  updateMany?: Maybe<Array<CouncilMemberUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  upsert?: Maybe<Array<CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput>>;
};

export type CouncilMemberUpdateManyWithWhereNestedInput = {
  where: CouncilMemberScalarWhereInput;
  data: CouncilMemberUpdateManyDataInput;
};

export type CouncilMemberUpdateWithoutCouncilsDataInput = {
  address?: Maybe<Scalars['String']>;
};

export type CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput = {
  where: CouncilMemberWhereUniqueInput;
  data: CouncilMemberUpdateWithoutCouncilsDataInput;
};

export type CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput = {
  where: CouncilMemberWhereUniqueInput;
  update: CouncilMemberUpdateWithoutCouncilsDataInput;
  create: CouncilMemberCreateWithoutCouncilsInput;
};

export type CouncilMemberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  councils_every?: Maybe<CouncilWhereInput>;
  councils_some?: Maybe<CouncilWhereInput>;
  councils_none?: Maybe<CouncilWhereInput>;
};

export type CouncilMemberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
};

export enum CouncilOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilPreviousValues = {
  __typename?: 'CouncilPreviousValues';
  id: Scalars['ID'];
};

export type CouncilScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
};

export type CouncilSubscriptionPayload = {
  __typename?: 'CouncilSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Council>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CouncilPreviousValues>;
};

export type CouncilSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CouncilWhereInput>;
};

export type CouncilUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  members?: Maybe<CouncilMemberUpdateManyWithoutCouncilsInput>;
};

export type CouncilUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>;
  connect?: Maybe<Array<CouncilWhereUniqueInput>>;
  set?: Maybe<Array<CouncilWhereUniqueInput>>;
  disconnect?: Maybe<Array<CouncilWhereUniqueInput>>;
  delete?: Maybe<Array<CouncilWhereUniqueInput>>;
  update?: Maybe<Array<CouncilUpdateWithWhereUniqueWithoutMembersInput>>;
  deleteMany?: Maybe<Array<CouncilScalarWhereInput>>;
  upsert?: Maybe<Array<CouncilUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type CouncilUpdateWithoutMembersDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type CouncilUpdateWithWhereUniqueWithoutMembersInput = {
  where: CouncilWhereUniqueInput;
  data: CouncilUpdateWithoutMembersDataInput;
};

export type CouncilUpsertWithWhereUniqueWithoutMembersInput = {
  where: CouncilWhereUniqueInput;
  update: CouncilUpdateWithoutMembersDataInput;
  create: CouncilCreateWithoutMembersInput;
};

export type CouncilWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  members_every?: Maybe<CouncilMemberWhereInput>;
  members_some?: Maybe<CouncilMemberWhereInput>;
  members_none?: Maybe<CouncilMemberWhereInput>;
};

export type CouncilWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Era = Node & {
  __typename?: 'Era';
  id: Scalars['ID'];
  index: Scalars['Int'];
  eraStartSessionIndex: Session;
  totalPoints: Scalars['String'];
  individualPoints: Array<Scalars['String']>;
};

/** A connection to a list of items. */
export type EraConnection = {
  __typename?: 'EraConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<EraEdge>>;
  aggregate: AggregateEra;
};

export type EraCreateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type EraCreateInput = {
  id?: Maybe<Scalars['ID']>;
  index: Scalars['Int'];
  totalPoints: Scalars['String'];
  individualPoints?: Maybe<EraCreateindividualPointsInput>;
  eraStartSessionIndex: SessionCreateOneInput;
};

/** An edge in a connection. */
export type EraEdge = {
  __typename?: 'EraEdge';
  /** The item at the end of the edge. */
  node: Era;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum EraOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  TotalPointsAsc = 'totalPoints_ASC',
  TotalPointsDesc = 'totalPoints_DESC'
}

export type EraPreviousValues = {
  __typename?: 'EraPreviousValues';
  id: Scalars['ID'];
  index: Scalars['Int'];
  totalPoints: Scalars['String'];
  individualPoints: Array<Scalars['String']>;
};

export type EraSubscriptionPayload = {
  __typename?: 'EraSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Era>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<EraPreviousValues>;
};

export type EraSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<EraWhereInput>;
};

export type EraUpdateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type EraUpdateInput = {
  index?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['String']>;
  individualPoints?: Maybe<EraUpdateindividualPointsInput>;
  eraStartSessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
};

export type EraUpdateManyMutationInput = {
  index?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['String']>;
  individualPoints?: Maybe<EraUpdateindividualPointsInput>;
};

export type EraWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EraWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EraWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EraWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  totalPoints_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  totalPoints_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  totalPoints_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  totalPoints_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  totalPoints_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  totalPoints_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  totalPoints_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  totalPoints_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  totalPoints_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  totalPoints_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  totalPoints_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  totalPoints_not_ends_with?: Maybe<Scalars['String']>;
  eraStartSessionIndex?: Maybe<SessionWhereInput>;
};

export type EraWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
};

export type HeartBeat = Node & {
  __typename?: 'HeartBeat';
  id: Scalars['ID'];
  sessionIndex: Session;
  authorityId: Scalars['String'];
};

/** A connection to a list of items. */
export type HeartBeatConnection = {
  __typename?: 'HeartBeatConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<HeartBeatEdge>>;
  aggregate: AggregateHeartBeat;
};

export type HeartBeatCreateInput = {
  id?: Maybe<Scalars['ID']>;
  authorityId: Scalars['String'];
  sessionIndex: SessionCreateOneInput;
};

/** An edge in a connection. */
export type HeartBeatEdge = {
  __typename?: 'HeartBeatEdge';
  /** The item at the end of the edge. */
  node: HeartBeat;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum HeartBeatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC'
}

export type HeartBeatPreviousValues = {
  __typename?: 'HeartBeatPreviousValues';
  id: Scalars['ID'];
  authorityId: Scalars['String'];
};

export type HeartBeatSubscriptionPayload = {
  __typename?: 'HeartBeatSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<HeartBeat>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<HeartBeatPreviousValues>;
};

export type HeartBeatSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<HeartBeatWhereInput>;
};

export type HeartBeatUpdateInput = {
  authorityId?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
};

export type HeartBeatUpdateManyMutationInput = {
  authorityId?: Maybe<Scalars['String']>;
};

export type HeartBeatWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeartBeatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeartBeatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeartBeatWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  authorityId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authorityId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authorityId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  authorityId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  authorityId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  authorityId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  authorityId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  authorityId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  authorityId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authorityId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authorityId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  authorityId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authorityId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  authorityId_not_ends_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
};

export type HeartBeatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};



export type Motion = {
  __typename?: 'Motion';
  id: Scalars['Int'];
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<Array<MotionProposalArgument>>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<Array<MotionStatus>>;
  preimage?: Maybe<Preimage>;
  preimageHash?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
  section: Scalars['String'];
};


export type MotionMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MotionMotionStatusArgs = {
  where?: Maybe<MotionStatusWhereInput>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type MotionConnection = {
  __typename?: 'MotionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<MotionEdge>>;
  aggregate: AggregateMotion;
};

export type MotionCreateInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateOneWithoutMotionProposalArgumentsInput = {
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
};

export type MotionCreateOneWithoutMotionStatusInput = {
  create?: Maybe<MotionCreateWithoutMotionStatusInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
};

export type MotionCreateOneWithoutPreimageInput = {
  create?: Maybe<MotionCreateWithoutPreimageInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
};

export type MotionCreateOneWithoutTreasurySpendProposalInput = {
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
};

export type MotionCreateWithoutMotionProposalArgumentsInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateWithoutMotionStatusInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateWithoutPreimageInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateWithoutTreasurySpendProposalInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
};

/** An edge in a connection. */
export type MotionEdge = {
  __typename?: 'MotionEdge';
  /** The item at the end of the edge. */
  node: Motion;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum MotionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  MemberCountAsc = 'memberCount_ASC',
  MemberCountDesc = 'memberCount_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  MotionProposalHashAsc = 'motionProposalHash_ASC',
  MotionProposalHashDesc = 'motionProposalHash_DESC',
  MotionProposalIdAsc = 'motionProposalId_ASC',
  MotionProposalIdDesc = 'motionProposalId_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type MotionPreviousValues = {
  __typename?: 'MotionPreviousValues';
  id: Scalars['Int'];
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
};

export type MotionProposalArgument = Node & {
  __typename?: 'MotionProposalArgument';
  id: Scalars['ID'];
  name: Scalars['String'];
  motion: Motion;
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type MotionProposalArgumentConnection = {
  __typename?: 'MotionProposalArgumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<MotionProposalArgumentEdge>>;
  aggregate: AggregateMotionProposalArgument;
};

export type MotionProposalArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  value: Scalars['String'];
  motion: MotionCreateOneWithoutMotionProposalArgumentsInput;
};

export type MotionProposalArgumentCreateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>;
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
};

export type MotionProposalArgumentCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

/** An edge in a connection. */
export type MotionProposalArgumentEdge = {
  __typename?: 'MotionProposalArgumentEdge';
  /** The item at the end of the edge. */
  node: MotionProposalArgument;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum MotionProposalArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type MotionProposalArgumentPreviousValues = {
  __typename?: 'MotionProposalArgumentPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type MotionProposalArgumentScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentSubscriptionPayload = {
  __typename?: 'MotionProposalArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<MotionProposalArgument>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MotionProposalArgumentPreviousValues>;
};

export type MotionProposalArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MotionProposalArgumentWhereInput>;
};

export type MotionProposalArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput>;
};

export type MotionProposalArgumentUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentUpdateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>;
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  set?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  disconnect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  delete?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  update?: Maybe<Array<MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput>>;
  updateMany?: Maybe<Array<MotionProposalArgumentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  upsert?: Maybe<Array<MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput>>;
};

export type MotionProposalArgumentUpdateManyWithWhereNestedInput = {
  where: MotionProposalArgumentScalarWhereInput;
  data: MotionProposalArgumentUpdateManyDataInput;
};

export type MotionProposalArgumentUpdateWithoutMotionDataInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput = {
  where: MotionProposalArgumentWhereUniqueInput;
  data: MotionProposalArgumentUpdateWithoutMotionDataInput;
};

export type MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput = {
  where: MotionProposalArgumentWhereUniqueInput;
  update: MotionProposalArgumentUpdateWithoutMotionDataInput;
  create: MotionProposalArgumentCreateWithoutMotionInput;
};

export type MotionProposalArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionWhereInput>;
};

export type MotionProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MotionStatus = Node & {
  __typename?: 'MotionStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  motion: Motion;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type MotionStatusConnection = {
  __typename?: 'MotionStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<MotionStatusEdge>>;
  aggregate: AggregateMotionStatus;
};

export type MotionStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  motion: MotionCreateOneWithoutMotionStatusInput;
};

export type MotionStatusCreateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>;
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>;
};

export type MotionStatusCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type MotionStatusEdge = {
  __typename?: 'MotionStatusEdge';
  /** The item at the end of the edge. */
  node: MotionStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum MotionStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type MotionStatusPreviousValues = {
  __typename?: 'MotionStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type MotionStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
};

export type MotionStatusSubscriptionPayload = {
  __typename?: 'MotionStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<MotionStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MotionStatusPreviousValues>;
};

export type MotionStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MotionStatusWhereInput>;
};

export type MotionStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionStatusInput>;
};

export type MotionStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type MotionStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type MotionStatusUpdateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>;
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  set?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  delete?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  update?: Maybe<Array<MotionStatusUpdateWithWhereUniqueWithoutMotionInput>>;
  updateMany?: Maybe<Array<MotionStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MotionStatusScalarWhereInput>>;
  upsert?: Maybe<Array<MotionStatusUpsertWithWhereUniqueWithoutMotionInput>>;
};

export type MotionStatusUpdateManyWithWhereNestedInput = {
  where: MotionStatusScalarWhereInput;
  data: MotionStatusUpdateManyDataInput;
};

export type MotionStatusUpdateWithoutMotionDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type MotionStatusUpdateWithWhereUniqueWithoutMotionInput = {
  where: MotionStatusWhereUniqueInput;
  data: MotionStatusUpdateWithoutMotionDataInput;
};

export type MotionStatusUpsertWithWhereUniqueWithoutMotionInput = {
  where: MotionStatusWhereUniqueInput;
  update: MotionStatusUpdateWithoutMotionDataInput;
  create: MotionStatusCreateWithoutMotionInput;
};

export type MotionStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  motion?: Maybe<MotionWhereInput>;
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type MotionSubscriptionPayload = {
  __typename?: 'MotionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Motion>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MotionPreviousValues>;
};

export type MotionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MotionWhereInput>;
};

export type MotionUpdateInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

export type MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput = {
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
  update?: Maybe<MotionUpdateWithoutMotionProposalArgumentsDataInput>;
  upsert?: Maybe<MotionUpsertWithoutMotionProposalArgumentsInput>;
};

export type MotionUpdateOneRequiredWithoutMotionStatusInput = {
  create?: Maybe<MotionCreateWithoutMotionStatusInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
  update?: Maybe<MotionUpdateWithoutMotionStatusDataInput>;
  upsert?: Maybe<MotionUpsertWithoutMotionStatusInput>;
};

export type MotionUpdateOneWithoutPreimageInput = {
  create?: Maybe<MotionCreateWithoutPreimageInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MotionUpdateWithoutPreimageDataInput>;
  upsert?: Maybe<MotionUpsertWithoutPreimageInput>;
};

export type MotionUpdateOneWithoutTreasurySpendProposalInput = {
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>;
  connect?: Maybe<MotionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MotionUpdateWithoutTreasurySpendProposalDataInput>;
  upsert?: Maybe<MotionUpsertWithoutTreasurySpendProposalInput>;
};

export type MotionUpdateWithoutMotionProposalArgumentsDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateWithoutMotionStatusDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateWithoutPreimageDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateWithoutTreasurySpendProposalDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
};

export type MotionUpsertWithoutMotionProposalArgumentsInput = {
  update: MotionUpdateWithoutMotionProposalArgumentsDataInput;
  create: MotionCreateWithoutMotionProposalArgumentsInput;
};

export type MotionUpsertWithoutMotionStatusInput = {
  update: MotionUpdateWithoutMotionStatusDataInput;
  create: MotionCreateWithoutMotionStatusInput;
};

export type MotionUpsertWithoutPreimageInput = {
  update: MotionUpdateWithoutPreimageDataInput;
  create: MotionCreateWithoutPreimageInput;
};

export type MotionUpsertWithoutTreasurySpendProposalInput = {
  update: MotionUpdateWithoutTreasurySpendProposalDataInput;
  create: MotionCreateWithoutTreasurySpendProposalInput;
};

export type MotionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  motionProposalHash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  motionProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type MotionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  motionProposalId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHeartBeat: HeartBeat;
  createOfflineValidator: OfflineValidator;
  createEra: Era;
  createSlashing: Slashing;
  createValidator: Validator;
  createTotalIssuance: TotalIssuance;
  createReward: Reward;
  createNomination: Nomination;
  createStake: Stake;
  createCouncil: Council;
  createCouncilMember: CouncilMember;
  createMotion: Motion;
  createMotionProposalArgument: MotionProposalArgument;
  createMotionStatus: MotionStatus;
  createProposal: Proposal;
  createProposalStatus: ProposalStatus;
  createPreimage: Preimage;
  createPreimageStatus: PreimageStatus;
  createPreimageArgument: PreimageArgument;
  createReferendum: Referendum;
  createReferendumStatus: ReferendumStatus;
  createBlockIndex: BlockIndex;
  createTreasurySpendProposal: TreasurySpendProposal;
  createTreasuryStatus: TreasuryStatus;
  createTip: Tip;
  createTipStatus: TipStatus;
  createBounty: Bounty;
  createBountyStatus: BountyStatus;
  createBlockNumber: BlockNumber;
  createSession: Session;
  updateHeartBeat?: Maybe<HeartBeat>;
  updateOfflineValidator?: Maybe<OfflineValidator>;
  updateEra?: Maybe<Era>;
  updateSlashing?: Maybe<Slashing>;
  updateValidator?: Maybe<Validator>;
  updateTotalIssuance?: Maybe<TotalIssuance>;
  updateReward?: Maybe<Reward>;
  updateNomination?: Maybe<Nomination>;
  updateStake?: Maybe<Stake>;
  updateCouncil?: Maybe<Council>;
  updateCouncilMember?: Maybe<CouncilMember>;
  updateMotion?: Maybe<Motion>;
  updateMotionProposalArgument?: Maybe<MotionProposalArgument>;
  updateMotionStatus?: Maybe<MotionStatus>;
  updateProposal?: Maybe<Proposal>;
  updateProposalStatus?: Maybe<ProposalStatus>;
  updatePreimage?: Maybe<Preimage>;
  updatePreimageStatus?: Maybe<PreimageStatus>;
  updatePreimageArgument?: Maybe<PreimageArgument>;
  updateReferendum?: Maybe<Referendum>;
  updateReferendumStatus?: Maybe<ReferendumStatus>;
  updateBlockIndex?: Maybe<BlockIndex>;
  updateTreasurySpendProposal?: Maybe<TreasurySpendProposal>;
  updateTreasuryStatus?: Maybe<TreasuryStatus>;
  updateTip?: Maybe<Tip>;
  updateTipStatus?: Maybe<TipStatus>;
  updateBounty?: Maybe<Bounty>;
  updateBountyStatus?: Maybe<BountyStatus>;
  updateBlockNumber?: Maybe<BlockNumber>;
  updateSession?: Maybe<Session>;
  deleteHeartBeat?: Maybe<HeartBeat>;
  deleteOfflineValidator?: Maybe<OfflineValidator>;
  deleteEra?: Maybe<Era>;
  deleteSlashing?: Maybe<Slashing>;
  deleteValidator?: Maybe<Validator>;
  deleteTotalIssuance?: Maybe<TotalIssuance>;
  deleteReward?: Maybe<Reward>;
  deleteNomination?: Maybe<Nomination>;
  deleteStake?: Maybe<Stake>;
  deleteCouncil?: Maybe<Council>;
  deleteCouncilMember?: Maybe<CouncilMember>;
  deleteMotion?: Maybe<Motion>;
  deleteMotionProposalArgument?: Maybe<MotionProposalArgument>;
  deleteMotionStatus?: Maybe<MotionStatus>;
  deleteProposal?: Maybe<Proposal>;
  deleteProposalStatus?: Maybe<ProposalStatus>;
  deletePreimage?: Maybe<Preimage>;
  deletePreimageStatus?: Maybe<PreimageStatus>;
  deletePreimageArgument?: Maybe<PreimageArgument>;
  deleteReferendum?: Maybe<Referendum>;
  deleteReferendumStatus?: Maybe<ReferendumStatus>;
  deleteBlockIndex?: Maybe<BlockIndex>;
  deleteTreasurySpendProposal?: Maybe<TreasurySpendProposal>;
  deleteTreasuryStatus?: Maybe<TreasuryStatus>;
  deleteTip?: Maybe<Tip>;
  deleteTipStatus?: Maybe<TipStatus>;
  deleteBounty?: Maybe<Bounty>;
  deleteBountyStatus?: Maybe<BountyStatus>;
  deleteBlockNumber?: Maybe<BlockNumber>;
  deleteSession?: Maybe<Session>;
  upsertHeartBeat: HeartBeat;
  upsertOfflineValidator: OfflineValidator;
  upsertEra: Era;
  upsertSlashing: Slashing;
  upsertValidator: Validator;
  upsertTotalIssuance: TotalIssuance;
  upsertReward: Reward;
  upsertNomination: Nomination;
  upsertStake: Stake;
  upsertCouncil: Council;
  upsertCouncilMember: CouncilMember;
  upsertMotion: Motion;
  upsertMotionProposalArgument: MotionProposalArgument;
  upsertMotionStatus: MotionStatus;
  upsertProposal: Proposal;
  upsertProposalStatus: ProposalStatus;
  upsertPreimage: Preimage;
  upsertPreimageStatus: PreimageStatus;
  upsertPreimageArgument: PreimageArgument;
  upsertReferendum: Referendum;
  upsertReferendumStatus: ReferendumStatus;
  upsertBlockIndex: BlockIndex;
  upsertTreasurySpendProposal: TreasurySpendProposal;
  upsertTreasuryStatus: TreasuryStatus;
  upsertTip: Tip;
  upsertTipStatus: TipStatus;
  upsertBounty: Bounty;
  upsertBountyStatus: BountyStatus;
  upsertBlockNumber: BlockNumber;
  upsertSession: Session;
  updateManyHeartBeats: BatchPayload;
  updateManyOfflineValidators: BatchPayload;
  updateManyEras: BatchPayload;
  updateManySlashings: BatchPayload;
  updateManyValidators: BatchPayload;
  updateManyTotalIssuances: BatchPayload;
  updateManyRewards: BatchPayload;
  updateManyNominations: BatchPayload;
  updateManyStakes: BatchPayload;
  updateManyCouncilMembers: BatchPayload;
  updateManyMotions: BatchPayload;
  updateManyMotionProposalArguments: BatchPayload;
  updateManyMotionStatuses: BatchPayload;
  updateManyProposals: BatchPayload;
  updateManyProposalStatuses: BatchPayload;
  updateManyPreimages: BatchPayload;
  updateManyPreimageStatuses: BatchPayload;
  updateManyPreimageArguments: BatchPayload;
  updateManyReferendums: BatchPayload;
  updateManyReferendumStatuses: BatchPayload;
  updateManyBlockIndexes: BatchPayload;
  updateManyTreasurySpendProposals: BatchPayload;
  updateManyTreasuryStatuses: BatchPayload;
  updateManyTips: BatchPayload;
  updateManyTipStatuses: BatchPayload;
  updateManyBounties: BatchPayload;
  updateManyBountyStatuses: BatchPayload;
  updateManyBlockNumbers: BatchPayload;
  updateManySessions: BatchPayload;
  deleteManyHeartBeats: BatchPayload;
  deleteManyOfflineValidators: BatchPayload;
  deleteManyEras: BatchPayload;
  deleteManySlashings: BatchPayload;
  deleteManyValidators: BatchPayload;
  deleteManyTotalIssuances: BatchPayload;
  deleteManyRewards: BatchPayload;
  deleteManyNominations: BatchPayload;
  deleteManyStakes: BatchPayload;
  deleteManyCouncils: BatchPayload;
  deleteManyCouncilMembers: BatchPayload;
  deleteManyMotions: BatchPayload;
  deleteManyMotionProposalArguments: BatchPayload;
  deleteManyMotionStatuses: BatchPayload;
  deleteManyProposals: BatchPayload;
  deleteManyProposalStatuses: BatchPayload;
  deleteManyPreimages: BatchPayload;
  deleteManyPreimageStatuses: BatchPayload;
  deleteManyPreimageArguments: BatchPayload;
  deleteManyReferendums: BatchPayload;
  deleteManyReferendumStatuses: BatchPayload;
  deleteManyBlockIndexes: BatchPayload;
  deleteManyTreasurySpendProposals: BatchPayload;
  deleteManyTreasuryStatuses: BatchPayload;
  deleteManyTips: BatchPayload;
  deleteManyTipStatuses: BatchPayload;
  deleteManyBounties: BatchPayload;
  deleteManyBountyStatuses: BatchPayload;
  deleteManyBlockNumbers: BatchPayload;
  deleteManySessions: BatchPayload;
  executeRaw: Scalars['Json'];
};


export type MutationCreateHeartBeatArgs = {
  data: HeartBeatCreateInput;
};


export type MutationCreateOfflineValidatorArgs = {
  data: OfflineValidatorCreateInput;
};


export type MutationCreateEraArgs = {
  data: EraCreateInput;
};


export type MutationCreateSlashingArgs = {
  data: SlashingCreateInput;
};


export type MutationCreateValidatorArgs = {
  data: ValidatorCreateInput;
};


export type MutationCreateTotalIssuanceArgs = {
  data: TotalIssuanceCreateInput;
};


export type MutationCreateRewardArgs = {
  data: RewardCreateInput;
};


export type MutationCreateNominationArgs = {
  data: NominationCreateInput;
};


export type MutationCreateStakeArgs = {
  data: StakeCreateInput;
};


export type MutationCreateCouncilArgs = {
  data: CouncilCreateInput;
};


export type MutationCreateCouncilMemberArgs = {
  data: CouncilMemberCreateInput;
};


export type MutationCreateMotionArgs = {
  data: MotionCreateInput;
};


export type MutationCreateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentCreateInput;
};


export type MutationCreateMotionStatusArgs = {
  data: MotionStatusCreateInput;
};


export type MutationCreateProposalArgs = {
  data: ProposalCreateInput;
};


export type MutationCreateProposalStatusArgs = {
  data: ProposalStatusCreateInput;
};


export type MutationCreatePreimageArgs = {
  data: PreimageCreateInput;
};


export type MutationCreatePreimageStatusArgs = {
  data: PreimageStatusCreateInput;
};


export type MutationCreatePreimageArgumentArgs = {
  data: PreimageArgumentCreateInput;
};


export type MutationCreateReferendumArgs = {
  data: ReferendumCreateInput;
};


export type MutationCreateReferendumStatusArgs = {
  data: ReferendumStatusCreateInput;
};


export type MutationCreateBlockIndexArgs = {
  data: BlockIndexCreateInput;
};


export type MutationCreateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalCreateInput;
};


export type MutationCreateTreasuryStatusArgs = {
  data: TreasuryStatusCreateInput;
};


export type MutationCreateTipArgs = {
  data: TipCreateInput;
};


export type MutationCreateTipStatusArgs = {
  data: TipStatusCreateInput;
};


export type MutationCreateBountyArgs = {
  data: BountyCreateInput;
};


export type MutationCreateBountyStatusArgs = {
  data: BountyStatusCreateInput;
};


export type MutationCreateBlockNumberArgs = {
  data: BlockNumberCreateInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationUpdateHeartBeatArgs = {
  data: HeartBeatUpdateInput;
  where: HeartBeatWhereUniqueInput;
};


export type MutationUpdateOfflineValidatorArgs = {
  data: OfflineValidatorUpdateInput;
  where: OfflineValidatorWhereUniqueInput;
};


export type MutationUpdateEraArgs = {
  data: EraUpdateInput;
  where: EraWhereUniqueInput;
};


export type MutationUpdateSlashingArgs = {
  data: SlashingUpdateInput;
  where: SlashingWhereUniqueInput;
};


export type MutationUpdateValidatorArgs = {
  data: ValidatorUpdateInput;
  where: ValidatorWhereUniqueInput;
};


export type MutationUpdateTotalIssuanceArgs = {
  data: TotalIssuanceUpdateInput;
  where: TotalIssuanceWhereUniqueInput;
};


export type MutationUpdateRewardArgs = {
  data: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};


export type MutationUpdateNominationArgs = {
  data: NominationUpdateInput;
  where: NominationWhereUniqueInput;
};


export type MutationUpdateStakeArgs = {
  data: StakeUpdateInput;
  where: StakeWhereUniqueInput;
};


export type MutationUpdateCouncilArgs = {
  data: CouncilUpdateInput;
  where: CouncilWhereUniqueInput;
};


export type MutationUpdateCouncilMemberArgs = {
  data: CouncilMemberUpdateInput;
  where: CouncilMemberWhereUniqueInput;
};


export type MutationUpdateMotionArgs = {
  data: MotionUpdateInput;
  where: MotionWhereUniqueInput;
};


export type MutationUpdateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentUpdateInput;
  where: MotionProposalArgumentWhereUniqueInput;
};


export type MutationUpdateMotionStatusArgs = {
  data: MotionStatusUpdateInput;
  where: MotionStatusWhereUniqueInput;
};


export type MutationUpdateProposalArgs = {
  data: ProposalUpdateInput;
  where: ProposalWhereUniqueInput;
};


export type MutationUpdateProposalStatusArgs = {
  data: ProposalStatusUpdateInput;
  where: ProposalStatusWhereUniqueInput;
};


export type MutationUpdatePreimageArgs = {
  data: PreimageUpdateInput;
  where: PreimageWhereUniqueInput;
};


export type MutationUpdatePreimageStatusArgs = {
  data: PreimageStatusUpdateInput;
  where: PreimageStatusWhereUniqueInput;
};


export type MutationUpdatePreimageArgumentArgs = {
  data: PreimageArgumentUpdateInput;
  where: PreimageArgumentWhereUniqueInput;
};


export type MutationUpdateReferendumArgs = {
  data: ReferendumUpdateInput;
  where: ReferendumWhereUniqueInput;
};


export type MutationUpdateReferendumStatusArgs = {
  data: ReferendumStatusUpdateInput;
  where: ReferendumStatusWhereUniqueInput;
};


export type MutationUpdateBlockIndexArgs = {
  data: BlockIndexUpdateInput;
  where: BlockIndexWhereUniqueInput;
};


export type MutationUpdateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalUpdateInput;
  where: TreasurySpendProposalWhereUniqueInput;
};


export type MutationUpdateTreasuryStatusArgs = {
  data: TreasuryStatusUpdateInput;
  where: TreasuryStatusWhereUniqueInput;
};


export type MutationUpdateTipArgs = {
  data: TipUpdateInput;
  where: TipWhereUniqueInput;
};


export type MutationUpdateTipStatusArgs = {
  data: TipStatusUpdateInput;
  where: TipStatusWhereUniqueInput;
};


export type MutationUpdateBountyArgs = {
  data: BountyUpdateInput;
  where: BountyWhereUniqueInput;
};


export type MutationUpdateBountyStatusArgs = {
  data: BountyStatusUpdateInput;
  where: BountyStatusWhereUniqueInput;
};


export type MutationUpdateBlockNumberArgs = {
  data: BlockNumberUpdateInput;
  where: BlockNumberWhereUniqueInput;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationDeleteHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput;
};


export type MutationDeleteOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput;
};


export type MutationDeleteEraArgs = {
  where: EraWhereUniqueInput;
};


export type MutationDeleteSlashingArgs = {
  where: SlashingWhereUniqueInput;
};


export type MutationDeleteValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


export type MutationDeleteTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


export type MutationDeleteRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type MutationDeleteNominationArgs = {
  where: NominationWhereUniqueInput;
};


export type MutationDeleteStakeArgs = {
  where: StakeWhereUniqueInput;
};


export type MutationDeleteCouncilArgs = {
  where: CouncilWhereUniqueInput;
};


export type MutationDeleteCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
};


export type MutationDeleteMotionArgs = {
  where: MotionWhereUniqueInput;
};


export type MutationDeleteMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
};


export type MutationDeleteMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
};


export type MutationDeleteProposalArgs = {
  where: ProposalWhereUniqueInput;
};


export type MutationDeleteProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
};


export type MutationDeletePreimageArgs = {
  where: PreimageWhereUniqueInput;
};


export type MutationDeletePreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
};


export type MutationDeletePreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
};


export type MutationDeleteReferendumArgs = {
  where: ReferendumWhereUniqueInput;
};


export type MutationDeleteReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
};


export type MutationDeleteBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput;
};


export type MutationDeleteTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
};


export type MutationDeleteTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
};


export type MutationDeleteTipArgs = {
  where: TipWhereUniqueInput;
};


export type MutationDeleteTipStatusArgs = {
  where: TipStatusWhereUniqueInput;
};


export type MutationDeleteBountyArgs = {
  where: BountyWhereUniqueInput;
};


export type MutationDeleteBountyStatusArgs = {
  where: BountyStatusWhereUniqueInput;
};


export type MutationDeleteBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationUpsertHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput;
  create: HeartBeatCreateInput;
  update: HeartBeatUpdateInput;
};


export type MutationUpsertOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput;
  create: OfflineValidatorCreateInput;
  update: OfflineValidatorUpdateInput;
};


export type MutationUpsertEraArgs = {
  where: EraWhereUniqueInput;
  create: EraCreateInput;
  update: EraUpdateInput;
};


export type MutationUpsertSlashingArgs = {
  where: SlashingWhereUniqueInput;
  create: SlashingCreateInput;
  update: SlashingUpdateInput;
};


export type MutationUpsertValidatorArgs = {
  where: ValidatorWhereUniqueInput;
  create: ValidatorCreateInput;
  update: ValidatorUpdateInput;
};


export type MutationUpsertTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
  create: TotalIssuanceCreateInput;
  update: TotalIssuanceUpdateInput;
};


export type MutationUpsertRewardArgs = {
  where: RewardWhereUniqueInput;
  create: RewardCreateInput;
  update: RewardUpdateInput;
};


export type MutationUpsertNominationArgs = {
  where: NominationWhereUniqueInput;
  create: NominationCreateInput;
  update: NominationUpdateInput;
};


export type MutationUpsertStakeArgs = {
  where: StakeWhereUniqueInput;
  create: StakeCreateInput;
  update: StakeUpdateInput;
};


export type MutationUpsertCouncilArgs = {
  where: CouncilWhereUniqueInput;
  create: CouncilCreateInput;
  update: CouncilUpdateInput;
};


export type MutationUpsertCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
  create: CouncilMemberCreateInput;
  update: CouncilMemberUpdateInput;
};


export type MutationUpsertMotionArgs = {
  where: MotionWhereUniqueInput;
  create: MotionCreateInput;
  update: MotionUpdateInput;
};


export type MutationUpsertMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
  create: MotionProposalArgumentCreateInput;
  update: MotionProposalArgumentUpdateInput;
};


export type MutationUpsertMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
  create: MotionStatusCreateInput;
  update: MotionStatusUpdateInput;
};


export type MutationUpsertProposalArgs = {
  where: ProposalWhereUniqueInput;
  create: ProposalCreateInput;
  update: ProposalUpdateInput;
};


export type MutationUpsertProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
  create: ProposalStatusCreateInput;
  update: ProposalStatusUpdateInput;
};


export type MutationUpsertPreimageArgs = {
  where: PreimageWhereUniqueInput;
  create: PreimageCreateInput;
  update: PreimageUpdateInput;
};


export type MutationUpsertPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
  create: PreimageStatusCreateInput;
  update: PreimageStatusUpdateInput;
};


export type MutationUpsertPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
  create: PreimageArgumentCreateInput;
  update: PreimageArgumentUpdateInput;
};


export type MutationUpsertReferendumArgs = {
  where: ReferendumWhereUniqueInput;
  create: ReferendumCreateInput;
  update: ReferendumUpdateInput;
};


export type MutationUpsertReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
  create: ReferendumStatusCreateInput;
  update: ReferendumStatusUpdateInput;
};


export type MutationUpsertBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput;
  create: BlockIndexCreateInput;
  update: BlockIndexUpdateInput;
};


export type MutationUpsertTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
  create: TreasurySpendProposalCreateInput;
  update: TreasurySpendProposalUpdateInput;
};


export type MutationUpsertTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
  create: TreasuryStatusCreateInput;
  update: TreasuryStatusUpdateInput;
};


export type MutationUpsertTipArgs = {
  where: TipWhereUniqueInput;
  create: TipCreateInput;
  update: TipUpdateInput;
};


export type MutationUpsertTipStatusArgs = {
  where: TipStatusWhereUniqueInput;
  create: TipStatusCreateInput;
  update: TipStatusUpdateInput;
};


export type MutationUpsertBountyArgs = {
  where: BountyWhereUniqueInput;
  create: BountyCreateInput;
  update: BountyUpdateInput;
};


export type MutationUpsertBountyStatusArgs = {
  where: BountyStatusWhereUniqueInput;
  create: BountyStatusCreateInput;
  update: BountyStatusUpdateInput;
};


export type MutationUpsertBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
  create: BlockNumberCreateInput;
  update: BlockNumberUpdateInput;
};


export type MutationUpsertSessionArgs = {
  where: SessionWhereUniqueInput;
  create: SessionCreateInput;
  update: SessionUpdateInput;
};


export type MutationUpdateManyHeartBeatsArgs = {
  data: HeartBeatUpdateManyMutationInput;
  where?: Maybe<HeartBeatWhereInput>;
};


export type MutationUpdateManyOfflineValidatorsArgs = {
  data: OfflineValidatorUpdateManyMutationInput;
  where?: Maybe<OfflineValidatorWhereInput>;
};


export type MutationUpdateManyErasArgs = {
  data: EraUpdateManyMutationInput;
  where?: Maybe<EraWhereInput>;
};


export type MutationUpdateManySlashingsArgs = {
  data: SlashingUpdateManyMutationInput;
  where?: Maybe<SlashingWhereInput>;
};


export type MutationUpdateManyValidatorsArgs = {
  data: ValidatorUpdateManyMutationInput;
  where?: Maybe<ValidatorWhereInput>;
};


export type MutationUpdateManyTotalIssuancesArgs = {
  data: TotalIssuanceUpdateManyMutationInput;
  where?: Maybe<TotalIssuanceWhereInput>;
};


export type MutationUpdateManyRewardsArgs = {
  data: RewardUpdateManyMutationInput;
  where?: Maybe<RewardWhereInput>;
};


export type MutationUpdateManyNominationsArgs = {
  data: NominationUpdateManyMutationInput;
  where?: Maybe<NominationWhereInput>;
};


export type MutationUpdateManyStakesArgs = {
  data: StakeUpdateManyMutationInput;
  where?: Maybe<StakeWhereInput>;
};


export type MutationUpdateManyCouncilMembersArgs = {
  data: CouncilMemberUpdateManyMutationInput;
  where?: Maybe<CouncilMemberWhereInput>;
};


export type MutationUpdateManyMotionsArgs = {
  data: MotionUpdateManyMutationInput;
  where?: Maybe<MotionWhereInput>;
};


export type MutationUpdateManyMotionProposalArgumentsArgs = {
  data: MotionProposalArgumentUpdateManyMutationInput;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


export type MutationUpdateManyMotionStatusesArgs = {
  data: MotionStatusUpdateManyMutationInput;
  where?: Maybe<MotionStatusWhereInput>;
};


export type MutationUpdateManyProposalsArgs = {
  data: ProposalUpdateManyMutationInput;
  where?: Maybe<ProposalWhereInput>;
};


export type MutationUpdateManyProposalStatusesArgs = {
  data: ProposalStatusUpdateManyMutationInput;
  where?: Maybe<ProposalStatusWhereInput>;
};


export type MutationUpdateManyPreimagesArgs = {
  data: PreimageUpdateManyMutationInput;
  where?: Maybe<PreimageWhereInput>;
};


export type MutationUpdateManyPreimageStatusesArgs = {
  data: PreimageStatusUpdateManyMutationInput;
  where?: Maybe<PreimageStatusWhereInput>;
};


export type MutationUpdateManyPreimageArgumentsArgs = {
  data: PreimageArgumentUpdateManyMutationInput;
  where?: Maybe<PreimageArgumentWhereInput>;
};


export type MutationUpdateManyReferendumsArgs = {
  data: ReferendumUpdateManyMutationInput;
  where?: Maybe<ReferendumWhereInput>;
};


export type MutationUpdateManyReferendumStatusesArgs = {
  data: ReferendumStatusUpdateManyMutationInput;
  where?: Maybe<ReferendumStatusWhereInput>;
};


export type MutationUpdateManyBlockIndexesArgs = {
  data: BlockIndexUpdateManyMutationInput;
  where?: Maybe<BlockIndexWhereInput>;
};


export type MutationUpdateManyTreasurySpendProposalsArgs = {
  data: TreasurySpendProposalUpdateManyMutationInput;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


export type MutationUpdateManyTreasuryStatusesArgs = {
  data: TreasuryStatusUpdateManyMutationInput;
  where?: Maybe<TreasuryStatusWhereInput>;
};


export type MutationUpdateManyTipsArgs = {
  data: TipUpdateManyMutationInput;
  where?: Maybe<TipWhereInput>;
};


export type MutationUpdateManyTipStatusesArgs = {
  data: TipStatusUpdateManyMutationInput;
  where?: Maybe<TipStatusWhereInput>;
};


export type MutationUpdateManyBountiesArgs = {
  data: BountyUpdateManyMutationInput;
  where?: Maybe<BountyWhereInput>;
};


export type MutationUpdateManyBountyStatusesArgs = {
  data: BountyStatusUpdateManyMutationInput;
  where?: Maybe<BountyStatusWhereInput>;
};


export type MutationUpdateManyBlockNumbersArgs = {
  data: BlockNumberUpdateManyMutationInput;
  where?: Maybe<BlockNumberWhereInput>;
};


export type MutationUpdateManySessionsArgs = {
  data: SessionUpdateManyMutationInput;
  where?: Maybe<SessionWhereInput>;
};


export type MutationDeleteManyHeartBeatsArgs = {
  where?: Maybe<HeartBeatWhereInput>;
};


export type MutationDeleteManyOfflineValidatorsArgs = {
  where?: Maybe<OfflineValidatorWhereInput>;
};


export type MutationDeleteManyErasArgs = {
  where?: Maybe<EraWhereInput>;
};


export type MutationDeleteManySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>;
};


export type MutationDeleteManyValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>;
};


export type MutationDeleteManyTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>;
};


export type MutationDeleteManyRewardsArgs = {
  where?: Maybe<RewardWhereInput>;
};


export type MutationDeleteManyNominationsArgs = {
  where?: Maybe<NominationWhereInput>;
};


export type MutationDeleteManyStakesArgs = {
  where?: Maybe<StakeWhereInput>;
};


export type MutationDeleteManyCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>;
};


export type MutationDeleteManyCouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>;
};


export type MutationDeleteManyMotionsArgs = {
  where?: Maybe<MotionWhereInput>;
};


export type MutationDeleteManyMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


export type MutationDeleteManyMotionStatusesArgs = {
  where?: Maybe<MotionStatusWhereInput>;
};


export type MutationDeleteManyProposalsArgs = {
  where?: Maybe<ProposalWhereInput>;
};


export type MutationDeleteManyProposalStatusesArgs = {
  where?: Maybe<ProposalStatusWhereInput>;
};


export type MutationDeleteManyPreimagesArgs = {
  where?: Maybe<PreimageWhereInput>;
};


export type MutationDeleteManyPreimageStatusesArgs = {
  where?: Maybe<PreimageStatusWhereInput>;
};


export type MutationDeleteManyPreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>;
};


export type MutationDeleteManyReferendumsArgs = {
  where?: Maybe<ReferendumWhereInput>;
};


export type MutationDeleteManyReferendumStatusesArgs = {
  where?: Maybe<ReferendumStatusWhereInput>;
};


export type MutationDeleteManyBlockIndexesArgs = {
  where?: Maybe<BlockIndexWhereInput>;
};


export type MutationDeleteManyTreasurySpendProposalsArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


export type MutationDeleteManyTreasuryStatusesArgs = {
  where?: Maybe<TreasuryStatusWhereInput>;
};


export type MutationDeleteManyTipsArgs = {
  where?: Maybe<TipWhereInput>;
};


export type MutationDeleteManyTipStatusesArgs = {
  where?: Maybe<TipStatusWhereInput>;
};


export type MutationDeleteManyBountiesArgs = {
  where?: Maybe<BountyWhereInput>;
};


export type MutationDeleteManyBountyStatusesArgs = {
  where?: Maybe<BountyStatusWhereInput>;
};


export type MutationDeleteManyBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>;
};


export type MutationDeleteManySessionsArgs = {
  where?: Maybe<SessionWhereInput>;
};


export type MutationExecuteRawArgs = {
  database?: Maybe<PrismaDatabase>;
  query: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Nomination = Node & {
  __typename?: 'Nomination';
  id: Scalars['ID'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  session: Session;
  stakedAmount: Scalars['String'];
};

/** A connection to a list of items. */
export type NominationConnection = {
  __typename?: 'NominationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<NominationEdge>>;
  aggregate: AggregateNomination;
};

export type NominationCreateInput = {
  id?: Maybe<Scalars['ID']>;
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  stakedAmount: Scalars['String'];
  session: SessionCreateOneInput;
};

/** An edge in a connection. */
export type NominationEdge = {
  __typename?: 'NominationEdge';
  /** The item at the end of the edge. */
  node: Nomination;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum NominationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ValidatorControllerAsc = 'validatorController_ASC',
  ValidatorControllerDesc = 'validatorController_DESC',
  ValidatorStashAsc = 'validatorStash_ASC',
  ValidatorStashDesc = 'validatorStash_DESC',
  NominatorControllerAsc = 'nominatorController_ASC',
  NominatorControllerDesc = 'nominatorController_DESC',
  NominatorStashAsc = 'nominatorStash_ASC',
  NominatorStashDesc = 'nominatorStash_DESC',
  StakedAmountAsc = 'stakedAmount_ASC',
  StakedAmountDesc = 'stakedAmount_DESC'
}

export type NominationPreviousValues = {
  __typename?: 'NominationPreviousValues';
  id: Scalars['ID'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  stakedAmount: Scalars['String'];
};

export type NominationSubscriptionPayload = {
  __typename?: 'NominationSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Nomination>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<NominationPreviousValues>;
};

export type NominationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<NominationWhereInput>;
};

export type NominationUpdateInput = {
  validatorController?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  nominatorController?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  stakedAmount?: Maybe<Scalars['String']>;
  session?: Maybe<SessionUpdateOneRequiredInput>;
};

export type NominationUpdateManyMutationInput = {
  validatorController?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  nominatorController?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  stakedAmount?: Maybe<Scalars['String']>;
};

export type NominationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NominationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NominationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NominationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  validatorController?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorController_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorController_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  validatorController_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorController_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorController_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorController_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorController_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorController_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorController_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorController_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  validatorController_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorController_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorController_not_ends_with?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorStash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorStash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorStash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorStash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorStash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorStash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorStash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorStash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorStash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  validatorStash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorStash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorStash_not_ends_with?: Maybe<Scalars['String']>;
  nominatorController?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nominatorController_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nominatorController_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nominatorController_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nominatorController_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nominatorController_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nominatorController_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nominatorController_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nominatorController_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nominatorController_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nominatorController_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nominatorController_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nominatorController_not_ends_with?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nominatorStash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nominatorStash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nominatorStash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nominatorStash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nominatorStash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nominatorStash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nominatorStash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nominatorStash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nominatorStash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nominatorStash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>;
  stakedAmount?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stakedAmount_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stakedAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stakedAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stakedAmount_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stakedAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stakedAmount_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stakedAmount_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stakedAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stakedAmount_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stakedAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stakedAmount_not_ends_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
};

export type NominationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type OfflineValidator = Node & {
  __typename?: 'OfflineValidator';
  id: Scalars['ID'];
  sessionIndex: Session;
  validatorId: Scalars['String'];
  total: Scalars['String'];
  own: Scalars['String'];
  others: Array<Scalars['Json']>;
};

/** A connection to a list of items. */
export type OfflineValidatorConnection = {
  __typename?: 'OfflineValidatorConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<OfflineValidatorEdge>>;
  aggregate: AggregateOfflineValidator;
};

export type OfflineValidatorCreateInput = {
  id?: Maybe<Scalars['ID']>;
  validatorId: Scalars['String'];
  total: Scalars['String'];
  own: Scalars['String'];
  others?: Maybe<OfflineValidatorCreateothersInput>;
  sessionIndex: SessionCreateOneInput;
};

export type OfflineValidatorCreateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>;
};

/** An edge in a connection. */
export type OfflineValidatorEdge = {
  __typename?: 'OfflineValidatorEdge';
  /** The item at the end of the edge. */
  node: OfflineValidator;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum OfflineValidatorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ValidatorIdAsc = 'validatorId_ASC',
  ValidatorIdDesc = 'validatorId_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  OwnAsc = 'own_ASC',
  OwnDesc = 'own_DESC'
}

export type OfflineValidatorPreviousValues = {
  __typename?: 'OfflineValidatorPreviousValues';
  id: Scalars['ID'];
  validatorId: Scalars['String'];
  total: Scalars['String'];
  own: Scalars['String'];
  others: Array<Scalars['Json']>;
};

export type OfflineValidatorSubscriptionPayload = {
  __typename?: 'OfflineValidatorSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<OfflineValidator>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<OfflineValidatorPreviousValues>;
};

export type OfflineValidatorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<OfflineValidatorWhereInput>;
};

export type OfflineValidatorUpdateInput = {
  validatorId?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  own?: Maybe<Scalars['String']>;
  others?: Maybe<OfflineValidatorUpdateothersInput>;
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
};

export type OfflineValidatorUpdateManyMutationInput = {
  validatorId?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  own?: Maybe<Scalars['String']>;
  others?: Maybe<OfflineValidatorUpdateothersInput>;
};

export type OfflineValidatorUpdateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>;
};

export type OfflineValidatorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OfflineValidatorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OfflineValidatorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  validatorId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  validatorId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  validatorId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorId_not_ends_with?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  total_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  total_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  total_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  total_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  total_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  total_not_ends_with?: Maybe<Scalars['String']>;
  own?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  own_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  own_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  own_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  own_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  own_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  own_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  own_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  own_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  own_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  own_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  own_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  own_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  own_not_ends_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
};

export type OfflineValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Preimage = Node & {
  __typename?: 'Preimage';
  id: Scalars['ID'];
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<Motion>;
  proposal?: Maybe<Proposal>;
  preimageArguments?: Maybe<Array<PreimageArgument>>;
  preimageStatus?: Maybe<Array<PreimageStatus>>;
  referendum?: Maybe<Referendum>;
  section: Scalars['String'];
};


export type PreimagePreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PreimagePreimageStatusArgs = {
  where?: Maybe<PreimageStatusWhereInput>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PreimageArgument = Node & {
  __typename?: 'PreimageArgument';
  id: Scalars['ID'];
  name: Scalars['String'];
  preimage: Preimage;
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type PreimageArgumentConnection = {
  __typename?: 'PreimageArgumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PreimageArgumentEdge>>;
  aggregate: AggregatePreimageArgument;
};

export type PreimageArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  value: Scalars['String'];
  preimage: PreimageCreateOneWithoutPreimageArgumentsInput;
};

export type PreimageArgumentCreateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>;
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
};

export type PreimageArgumentCreateWithoutPreimageInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

/** An edge in a connection. */
export type PreimageArgumentEdge = {
  __typename?: 'PreimageArgumentEdge';
  /** The item at the end of the edge. */
  node: PreimageArgument;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum PreimageArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type PreimageArgumentPreviousValues = {
  __typename?: 'PreimageArgumentPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PreimageArgumentScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
};

export type PreimageArgumentSubscriptionPayload = {
  __typename?: 'PreimageArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PreimageArgument>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PreimageArgumentPreviousValues>;
};

export type PreimageArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PreimageArgumentWhereInput>;
};

export type PreimageArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageArgumentsInput>;
};

export type PreimageArgumentUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PreimageArgumentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PreimageArgumentUpdateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>;
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  set?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  delete?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  update?: Maybe<Array<PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput>>;
  updateMany?: Maybe<Array<PreimageArgumentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  upsert?: Maybe<Array<PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput>>;
};

export type PreimageArgumentUpdateManyWithWhereNestedInput = {
  where: PreimageArgumentScalarWhereInput;
  data: PreimageArgumentUpdateManyDataInput;
};

export type PreimageArgumentUpdateWithoutPreimageDataInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput = {
  where: PreimageArgumentWhereUniqueInput;
  data: PreimageArgumentUpdateWithoutPreimageDataInput;
};

export type PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput = {
  where: PreimageArgumentWhereUniqueInput;
  update: PreimageArgumentUpdateWithoutPreimageDataInput;
  create: PreimageArgumentCreateWithoutPreimageInput;
};

export type PreimageArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type PreimageConnection = {
  __typename?: 'PreimageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PreimageEdge>>;
  aggregate: AggregatePreimage;
};

export type PreimageCreateInput = {
  id?: Maybe<Scalars['ID']>;
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
};

export type PreimageCreateOneWithoutMotionInput = {
  create?: Maybe<PreimageCreateWithoutMotionInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
};

export type PreimageCreateOneWithoutPreimageArgumentsInput = {
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
};

export type PreimageCreateOneWithoutPreimageStatusInput = {
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
};

export type PreimageCreateOneWithoutProposalInput = {
  create?: Maybe<PreimageCreateWithoutProposalInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
};

export type PreimageCreateOneWithoutReferendumInput = {
  create?: Maybe<PreimageCreateWithoutReferendumInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
};

export type PreimageCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>;
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
};

export type PreimageCreateWithoutPreimageArgumentsInput = {
  id?: Maybe<Scalars['ID']>;
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
};

export type PreimageCreateWithoutPreimageStatusInput = {
  id?: Maybe<Scalars['ID']>;
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
};

export type PreimageCreateWithoutProposalInput = {
  id?: Maybe<Scalars['ID']>;
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
};

export type PreimageCreateWithoutReferendumInput = {
  id?: Maybe<Scalars['ID']>;
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
};

/** An edge in a connection. */
export type PreimageEdge = {
  __typename?: 'PreimageEdge';
  /** The item at the end of the edge. */
  node: Preimage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum PreimageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type PreimagePreviousValues = {
  __typename?: 'PreimagePreviousValues';
  id: Scalars['ID'];
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
};

export type PreimageStatus = Node & {
  __typename?: 'PreimageStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  preimage: Preimage;
  status: Scalars['String'];
};

/** A connection to a list of items. */
export type PreimageStatusConnection = {
  __typename?: 'PreimageStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PreimageStatusEdge>>;
  aggregate: AggregatePreimageStatus;
};

export type PreimageStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  preimage: PreimageCreateOneWithoutPreimageStatusInput;
};

export type PreimageStatusCreateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>;
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
};

export type PreimageStatusCreateWithoutPreimageInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type PreimageStatusEdge = {
  __typename?: 'PreimageStatusEdge';
  /** The item at the end of the edge. */
  node: PreimageStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum PreimageStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type PreimageStatusPreviousValues = {
  __typename?: 'PreimageStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type PreimageStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
};

export type PreimageStatusSubscriptionPayload = {
  __typename?: 'PreimageStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PreimageStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PreimageStatusPreviousValues>;
};

export type PreimageStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PreimageStatusWhereInput>;
};

export type PreimageStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageStatusInput>;
};

export type PreimageStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
};

export type PreimageStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
};

export type PreimageStatusUpdateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>;
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  set?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  delete?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  update?: Maybe<Array<PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput>>;
  updateMany?: Maybe<Array<PreimageStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  upsert?: Maybe<Array<PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput>>;
};

export type PreimageStatusUpdateManyWithWhereNestedInput = {
  where: PreimageStatusScalarWhereInput;
  data: PreimageStatusUpdateManyDataInput;
};

export type PreimageStatusUpdateWithoutPreimageDataInput = {
  status?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput = {
  where: PreimageStatusWhereUniqueInput;
  data: PreimageStatusUpdateWithoutPreimageDataInput;
};

export type PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput = {
  where: PreimageStatusWhereUniqueInput;
  update: PreimageStatusUpdateWithoutPreimageDataInput;
  create: PreimageStatusCreateWithoutPreimageInput;
};

export type PreimageStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PreimageSubscriptionPayload = {
  __typename?: 'PreimageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Preimage>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PreimagePreviousValues>;
};

export type PreimageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PreimageWhereInput>;
};

export type PreimageUpdateInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
};

export type PreimageUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

export type PreimageUpdateOneRequiredWithoutPreimageArgumentsInput = {
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
  update?: Maybe<PreimageUpdateWithoutPreimageArgumentsDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutPreimageArgumentsInput>;
};

export type PreimageUpdateOneRequiredWithoutPreimageStatusInput = {
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
  update?: Maybe<PreimageUpdateWithoutPreimageStatusDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutPreimageStatusInput>;
};

export type PreimageUpdateOneWithoutMotionInput = {
  create?: Maybe<PreimageCreateWithoutMotionInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PreimageUpdateWithoutMotionDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutMotionInput>;
};

export type PreimageUpdateOneWithoutProposalInput = {
  create?: Maybe<PreimageCreateWithoutProposalInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PreimageUpdateWithoutProposalDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutProposalInput>;
};

export type PreimageUpdateOneWithoutReferendumInput = {
  create?: Maybe<PreimageCreateWithoutReferendumInput>;
  connect?: Maybe<PreimageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PreimageUpdateWithoutReferendumDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutReferendumInput>;
};

export type PreimageUpdateWithoutMotionDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
};

export type PreimageUpdateWithoutPreimageArgumentsDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
};

export type PreimageUpdateWithoutPreimageStatusDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
};

export type PreimageUpdateWithoutProposalDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
};

export type PreimageUpdateWithoutReferendumDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
};

export type PreimageUpsertWithoutMotionInput = {
  update: PreimageUpdateWithoutMotionDataInput;
  create: PreimageCreateWithoutMotionInput;
};

export type PreimageUpsertWithoutPreimageArgumentsInput = {
  update: PreimageUpdateWithoutPreimageArgumentsDataInput;
  create: PreimageCreateWithoutPreimageArgumentsInput;
};

export type PreimageUpsertWithoutPreimageStatusInput = {
  update: PreimageUpdateWithoutPreimageStatusDataInput;
  create: PreimageCreateWithoutPreimageStatusInput;
};

export type PreimageUpsertWithoutProposalInput = {
  update: PreimageUpdateWithoutProposalDataInput;
  create: PreimageCreateWithoutProposalInput;
};

export type PreimageUpsertWithoutReferendumInput = {
  update: PreimageUpdateWithoutReferendumDataInput;
  create: PreimageCreateWithoutReferendumInput;
};

export type PreimageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionWhereInput>;
  proposal?: Maybe<ProposalWhereInput>;
  preimageArguments_every?: Maybe<PreimageArgumentWhereInput>;
  preimageArguments_some?: Maybe<PreimageArgumentWhereInput>;
  preimageArguments_none?: Maybe<PreimageArgumentWhereInput>;
  preimageStatus_every?: Maybe<PreimageStatusWhereInput>;
  preimageStatus_some?: Maybe<PreimageStatusWhereInput>;
  preimageStatus_none?: Maybe<PreimageStatusWhereInput>;
  referendum?: Maybe<ReferendumWhereInput>;
};

export type PreimageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum PrismaDatabase {
  Default = 'default'
}

export type Proposal = {
  __typename?: 'Proposal';
  id: Scalars['Int'];
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  preimage?: Maybe<Preimage>;
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  proposalStatus?: Maybe<Array<ProposalStatus>>;
};


export type ProposalProposalStatusArgs = {
  where?: Maybe<ProposalStatusWhereInput>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type ProposalConnection = {
  __typename?: 'ProposalConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ProposalEdge>>;
  aggregate: AggregateProposal;
};

export type ProposalCreateInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>;
  proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>;
};

export type ProposalCreateOneWithoutPreimageInput = {
  create?: Maybe<ProposalCreateWithoutPreimageInput>;
  connect?: Maybe<ProposalWhereUniqueInput>;
};

export type ProposalCreateOneWithoutProposalStatusInput = {
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>;
  connect?: Maybe<ProposalWhereUniqueInput>;
};

export type ProposalCreateWithoutPreimageInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>;
};

export type ProposalCreateWithoutProposalStatusInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>;
};

/** An edge in a connection. */
export type ProposalEdge = {
  __typename?: 'ProposalEdge';
  /** The item at the end of the edge. */
  node: Proposal;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ProposalOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ProposalIdAsc = 'proposalId_ASC',
  ProposalIdDesc = 'proposalId_DESC'
}

export type ProposalPreviousValues = {
  __typename?: 'ProposalPreviousValues';
  id: Scalars['Int'];
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
};

export type ProposalStatus = Node & {
  __typename?: 'ProposalStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  proposal: Proposal;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type ProposalStatusConnection = {
  __typename?: 'ProposalStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ProposalStatusEdge>>;
  aggregate: AggregateProposalStatus;
};

export type ProposalStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  proposal: ProposalCreateOneWithoutProposalStatusInput;
};

export type ProposalStatusCreateManyWithoutProposalInput = {
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>;
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
};

export type ProposalStatusCreateWithoutProposalInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type ProposalStatusEdge = {
  __typename?: 'ProposalStatusEdge';
  /** The item at the end of the edge. */
  node: ProposalStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ProposalStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type ProposalStatusPreviousValues = {
  __typename?: 'ProposalStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type ProposalStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
};

export type ProposalStatusSubscriptionPayload = {
  __typename?: 'ProposalStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ProposalStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ProposalStatusPreviousValues>;
};

export type ProposalStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  proposal?: Maybe<ProposalUpdateOneRequiredWithoutProposalStatusInput>;
};

export type ProposalStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ProposalStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ProposalStatusUpdateManyWithoutProposalInput = {
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>;
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  set?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  delete?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  update?: Maybe<Array<ProposalStatusUpdateWithWhereUniqueWithoutProposalInput>>;
  updateMany?: Maybe<Array<ProposalStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  upsert?: Maybe<Array<ProposalStatusUpsertWithWhereUniqueWithoutProposalInput>>;
};

export type ProposalStatusUpdateManyWithWhereNestedInput = {
  where: ProposalStatusScalarWhereInput;
  data: ProposalStatusUpdateManyDataInput;
};

export type ProposalStatusUpdateWithoutProposalDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type ProposalStatusUpdateWithWhereUniqueWithoutProposalInput = {
  where: ProposalStatusWhereUniqueInput;
  data: ProposalStatusUpdateWithoutProposalDataInput;
};

export type ProposalStatusUpsertWithWhereUniqueWithoutProposalInput = {
  where: ProposalStatusWhereUniqueInput;
  update: ProposalStatusUpdateWithoutProposalDataInput;
  create: ProposalStatusCreateWithoutProposalInput;
};

export type ProposalStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  proposal?: Maybe<ProposalWhereInput>;
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ProposalSubscriptionPayload = {
  __typename?: 'ProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Proposal>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ProposalPreviousValues>;
};

export type ProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ProposalWhereInput>;
};

export type ProposalUpdateInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>;
  proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>;
};

export type ProposalUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type ProposalUpdateOneRequiredWithoutProposalStatusInput = {
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>;
  connect?: Maybe<ProposalWhereUniqueInput>;
  update?: Maybe<ProposalUpdateWithoutProposalStatusDataInput>;
  upsert?: Maybe<ProposalUpsertWithoutProposalStatusInput>;
};

export type ProposalUpdateOneWithoutPreimageInput = {
  create?: Maybe<ProposalCreateWithoutPreimageInput>;
  connect?: Maybe<ProposalWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProposalUpdateWithoutPreimageDataInput>;
  upsert?: Maybe<ProposalUpsertWithoutPreimageInput>;
};

export type ProposalUpdateWithoutPreimageDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>;
};

export type ProposalUpdateWithoutProposalStatusDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>;
};

export type ProposalUpsertWithoutPreimageInput = {
  update: ProposalUpdateWithoutPreimageDataInput;
  create: ProposalCreateWithoutPreimageInput;
};

export type ProposalUpsertWithoutProposalStatusInput = {
  update: ProposalUpdateWithoutProposalStatusDataInput;
  create: ProposalCreateWithoutProposalStatusInput;
};

export type ProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  preimage?: Maybe<PreimageWhereInput>;
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  heartBeats: Array<Maybe<HeartBeat>>;
  offlineValidators: Array<Maybe<OfflineValidator>>;
  eras: Array<Maybe<Era>>;
  slashings: Array<Maybe<Slashing>>;
  validators: Array<Maybe<Validator>>;
  totalIssuances: Array<Maybe<TotalIssuance>>;
  rewards: Array<Maybe<Reward>>;
  nominations: Array<Maybe<Nomination>>;
  stakes: Array<Maybe<Stake>>;
  councils: Array<Maybe<Council>>;
  councilMembers: Array<Maybe<CouncilMember>>;
  motions: Array<Maybe<Motion>>;
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>;
  motionStatuses: Array<Maybe<MotionStatus>>;
  proposals: Array<Maybe<Proposal>>;
  proposalStatuses: Array<Maybe<ProposalStatus>>;
  preimages: Array<Maybe<Preimage>>;
  preimageStatuses: Array<Maybe<PreimageStatus>>;
  preimageArguments: Array<Maybe<PreimageArgument>>;
  referendums: Array<Maybe<Referendum>>;
  referendumStatuses: Array<Maybe<ReferendumStatus>>;
  blockIndexes: Array<Maybe<BlockIndex>>;
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>;
  treasuryStatuses: Array<Maybe<TreasuryStatus>>;
  tips: Array<Maybe<Tip>>;
  tipStatuses: Array<Maybe<TipStatus>>;
  bounties: Array<Maybe<Bounty>>;
  bountyStatuses: Array<Maybe<BountyStatus>>;
  blockNumbers: Array<Maybe<BlockNumber>>;
  sessions: Array<Maybe<Session>>;
  heartBeat?: Maybe<HeartBeat>;
  offlineValidator?: Maybe<OfflineValidator>;
  era?: Maybe<Era>;
  slashing?: Maybe<Slashing>;
  validator?: Maybe<Validator>;
  totalIssuance?: Maybe<TotalIssuance>;
  reward?: Maybe<Reward>;
  nomination?: Maybe<Nomination>;
  stake?: Maybe<Stake>;
  council?: Maybe<Council>;
  councilMember?: Maybe<CouncilMember>;
  motion?: Maybe<Motion>;
  motionProposalArgument?: Maybe<MotionProposalArgument>;
  motionStatus?: Maybe<MotionStatus>;
  proposal?: Maybe<Proposal>;
  proposalStatus?: Maybe<ProposalStatus>;
  preimage?: Maybe<Preimage>;
  preimageStatus?: Maybe<PreimageStatus>;
  preimageArgument?: Maybe<PreimageArgument>;
  referendum?: Maybe<Referendum>;
  referendumStatus?: Maybe<ReferendumStatus>;
  blockIndex?: Maybe<BlockIndex>;
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
  treasuryStatus?: Maybe<TreasuryStatus>;
  tip?: Maybe<Tip>;
  tipStatus?: Maybe<TipStatus>;
  bounty?: Maybe<Bounty>;
  bountyStatus?: Maybe<BountyStatus>;
  blockNumber?: Maybe<BlockNumber>;
  session?: Maybe<Session>;
  heartBeatsConnection: HeartBeatConnection;
  offlineValidatorsConnection: OfflineValidatorConnection;
  erasConnection: EraConnection;
  slashingsConnection: SlashingConnection;
  validatorsConnection: ValidatorConnection;
  totalIssuancesConnection: TotalIssuanceConnection;
  rewardsConnection: RewardConnection;
  nominationsConnection: NominationConnection;
  stakesConnection: StakeConnection;
  councilsConnection: CouncilConnection;
  councilMembersConnection: CouncilMemberConnection;
  motionsConnection: MotionConnection;
  motionProposalArgumentsConnection: MotionProposalArgumentConnection;
  motionStatusesConnection: MotionStatusConnection;
  proposalsConnection: ProposalConnection;
  proposalStatusesConnection: ProposalStatusConnection;
  preimagesConnection: PreimageConnection;
  preimageStatusesConnection: PreimageStatusConnection;
  preimageArgumentsConnection: PreimageArgumentConnection;
  referendumsConnection: ReferendumConnection;
  referendumStatusesConnection: ReferendumStatusConnection;
  blockIndexesConnection: BlockIndexConnection;
  treasurySpendProposalsConnection: TreasurySpendProposalConnection;
  treasuryStatusesConnection: TreasuryStatusConnection;
  tipsConnection: TipConnection;
  tipStatusesConnection: TipStatusConnection;
  bountiesConnection: BountyConnection;
  bountyStatusesConnection: BountyStatusConnection;
  blockNumbersConnection: BlockNumberConnection;
  sessionsConnection: SessionConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type QueryHeartBeatsArgs = {
  where?: Maybe<HeartBeatWhereInput>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOfflineValidatorsArgs = {
  where?: Maybe<OfflineValidatorWhereInput>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryErasArgs = {
  where?: Maybe<EraWhereInput>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>;
  orderBy?: Maybe<ValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRewardsArgs = {
  where?: Maybe<RewardWhereInput>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNominationsArgs = {
  where?: Maybe<NominationWhereInput>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStakesArgs = {
  where?: Maybe<StakeWhereInput>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMotionsArgs = {
  where?: Maybe<MotionWhereInput>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMotionStatusesArgs = {
  where?: Maybe<MotionStatusWhereInput>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProposalsArgs = {
  where?: Maybe<ProposalWhereInput>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProposalStatusesArgs = {
  where?: Maybe<ProposalStatusWhereInput>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreimagesArgs = {
  where?: Maybe<PreimageWhereInput>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreimageStatusesArgs = {
  where?: Maybe<PreimageStatusWhereInput>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReferendumsArgs = {
  where?: Maybe<ReferendumWhereInput>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReferendumStatusesArgs = {
  where?: Maybe<ReferendumStatusWhereInput>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBlockIndexesArgs = {
  where?: Maybe<BlockIndexWhereInput>;
  orderBy?: Maybe<BlockIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTreasurySpendProposalsArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTreasuryStatusesArgs = {
  where?: Maybe<TreasuryStatusWhereInput>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTipsArgs = {
  where?: Maybe<TipWhereInput>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTipStatusesArgs = {
  where?: Maybe<TipStatusWhereInput>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBountiesArgs = {
  where?: Maybe<BountyWhereInput>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBountyStatusesArgs = {
  where?: Maybe<BountyStatusWhereInput>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySessionsArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput;
};


export type QueryOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput;
};


export type QueryEraArgs = {
  where: EraWhereUniqueInput;
};


export type QuerySlashingArgs = {
  where: SlashingWhereUniqueInput;
};


export type QueryValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


export type QueryTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


export type QueryRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type QueryNominationArgs = {
  where: NominationWhereUniqueInput;
};


export type QueryStakeArgs = {
  where: StakeWhereUniqueInput;
};


export type QueryCouncilArgs = {
  where: CouncilWhereUniqueInput;
};


export type QueryCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
};


export type QueryMotionArgs = {
  where: MotionWhereUniqueInput;
};


export type QueryMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
};


export type QueryMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
};


export type QueryProposalArgs = {
  where: ProposalWhereUniqueInput;
};


export type QueryProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
};


export type QueryPreimageArgs = {
  where: PreimageWhereUniqueInput;
};


export type QueryPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
};


export type QueryPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
};


export type QueryReferendumArgs = {
  where: ReferendumWhereUniqueInput;
};


export type QueryReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
};


export type QueryBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput;
};


export type QueryTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
};


export type QueryTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
};


export type QueryTipArgs = {
  where: TipWhereUniqueInput;
};


export type QueryTipStatusArgs = {
  where: TipStatusWhereUniqueInput;
};


export type QueryBountyArgs = {
  where: BountyWhereUniqueInput;
};


export type QueryBountyStatusArgs = {
  where: BountyStatusWhereUniqueInput;
};


export type QueryBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryHeartBeatsConnectionArgs = {
  where?: Maybe<HeartBeatWhereInput>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOfflineValidatorsConnectionArgs = {
  where?: Maybe<OfflineValidatorWhereInput>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryErasConnectionArgs = {
  where?: Maybe<EraWhereInput>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySlashingsConnectionArgs = {
  where?: Maybe<SlashingWhereInput>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValidatorsConnectionArgs = {
  where?: Maybe<ValidatorWhereInput>;
  orderBy?: Maybe<ValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTotalIssuancesConnectionArgs = {
  where?: Maybe<TotalIssuanceWhereInput>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRewardsConnectionArgs = {
  where?: Maybe<RewardWhereInput>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNominationsConnectionArgs = {
  where?: Maybe<NominationWhereInput>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStakesConnectionArgs = {
  where?: Maybe<StakeWhereInput>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCouncilsConnectionArgs = {
  where?: Maybe<CouncilWhereInput>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCouncilMembersConnectionArgs = {
  where?: Maybe<CouncilMemberWhereInput>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMotionsConnectionArgs = {
  where?: Maybe<MotionWhereInput>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMotionProposalArgumentsConnectionArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMotionStatusesConnectionArgs = {
  where?: Maybe<MotionStatusWhereInput>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProposalsConnectionArgs = {
  where?: Maybe<ProposalWhereInput>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProposalStatusesConnectionArgs = {
  where?: Maybe<ProposalStatusWhereInput>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreimagesConnectionArgs = {
  where?: Maybe<PreimageWhereInput>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreimageStatusesConnectionArgs = {
  where?: Maybe<PreimageStatusWhereInput>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreimageArgumentsConnectionArgs = {
  where?: Maybe<PreimageArgumentWhereInput>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReferendumsConnectionArgs = {
  where?: Maybe<ReferendumWhereInput>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReferendumStatusesConnectionArgs = {
  where?: Maybe<ReferendumStatusWhereInput>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBlockIndexesConnectionArgs = {
  where?: Maybe<BlockIndexWhereInput>;
  orderBy?: Maybe<BlockIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTreasurySpendProposalsConnectionArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTreasuryStatusesConnectionArgs = {
  where?: Maybe<TreasuryStatusWhereInput>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTipsConnectionArgs = {
  where?: Maybe<TipWhereInput>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTipStatusesConnectionArgs = {
  where?: Maybe<TipStatusWhereInput>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBountiesConnectionArgs = {
  where?: Maybe<BountyWhereInput>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBountyStatusesConnectionArgs = {
  where?: Maybe<BountyStatusWhereInput>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBlockNumbersConnectionArgs = {
  where?: Maybe<BlockNumberWhereInput>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySessionsConnectionArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Referendum = {
  __typename?: 'Referendum';
  id: Scalars['Int'];
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimage?: Maybe<Preimage>;
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  referendumStatus?: Maybe<Array<ReferendumStatus>>;
  voteThreshold: Scalars['String'];
};


export type ReferendumReferendumStatusArgs = {
  where?: Maybe<ReferendumStatusWhereInput>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type ReferendumConnection = {
  __typename?: 'ReferendumConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ReferendumEdge>>;
  aggregate: AggregateReferendum;
};

export type ReferendumCreateInput = {
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>;
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>;
};

export type ReferendumCreateOneWithoutPreimageInput = {
  create?: Maybe<ReferendumCreateWithoutPreimageInput>;
  connect?: Maybe<ReferendumWhereUniqueInput>;
};

export type ReferendumCreateOneWithoutReferendumStatusInput = {
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>;
  connect?: Maybe<ReferendumWhereUniqueInput>;
};

export type ReferendumCreateWithoutPreimageInput = {
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>;
};

export type ReferendumCreateWithoutReferendumStatusInput = {
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>;
};

/** An edge in a connection. */
export type ReferendumEdge = {
  __typename?: 'ReferendumEdge';
  /** The item at the end of the edge. */
  node: Referendum;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ReferendumOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DelayAsc = 'delay_ASC',
  DelayDesc = 'delay_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ReferendumIdAsc = 'referendumId_ASC',
  ReferendumIdDesc = 'referendumId_DESC',
  VoteThresholdAsc = 'voteThreshold_ASC',
  VoteThresholdDesc = 'voteThreshold_DESC'
}

export type ReferendumPreviousValues = {
  __typename?: 'ReferendumPreviousValues';
  id: Scalars['Int'];
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
};

export type ReferendumStatus = Node & {
  __typename?: 'ReferendumStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  referendum: Referendum;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type ReferendumStatusConnection = {
  __typename?: 'ReferendumStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ReferendumStatusEdge>>;
  aggregate: AggregateReferendumStatus;
};

export type ReferendumStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  referendum: ReferendumCreateOneWithoutReferendumStatusInput;
};

export type ReferendumStatusCreateManyWithoutReferendumInput = {
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>;
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
};

export type ReferendumStatusCreateWithoutReferendumInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type ReferendumStatusEdge = {
  __typename?: 'ReferendumStatusEdge';
  /** The item at the end of the edge. */
  node: ReferendumStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ReferendumStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type ReferendumStatusPreviousValues = {
  __typename?: 'ReferendumStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type ReferendumStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
};

export type ReferendumStatusSubscriptionPayload = {
  __typename?: 'ReferendumStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ReferendumStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ReferendumStatusPreviousValues>;
};

export type ReferendumStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ReferendumStatusWhereInput>;
};

export type ReferendumStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  referendum?: Maybe<ReferendumUpdateOneRequiredWithoutReferendumStatusInput>;
};

export type ReferendumStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ReferendumStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ReferendumStatusUpdateManyWithoutReferendumInput = {
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>;
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  set?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  delete?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  update?: Maybe<Array<ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput>>;
  updateMany?: Maybe<Array<ReferendumStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  upsert?: Maybe<Array<ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput>>;
};

export type ReferendumStatusUpdateManyWithWhereNestedInput = {
  where: ReferendumStatusScalarWhereInput;
  data: ReferendumStatusUpdateManyDataInput;
};

export type ReferendumStatusUpdateWithoutReferendumDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput = {
  where: ReferendumStatusWhereUniqueInput;
  data: ReferendumStatusUpdateWithoutReferendumDataInput;
};

export type ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput = {
  where: ReferendumStatusWhereUniqueInput;
  update: ReferendumStatusUpdateWithoutReferendumDataInput;
  create: ReferendumStatusCreateWithoutReferendumInput;
};

export type ReferendumStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  referendum?: Maybe<ReferendumWhereInput>;
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ReferendumSubscriptionPayload = {
  __typename?: 'ReferendumSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Referendum>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ReferendumPreviousValues>;
};

export type ReferendumSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ReferendumWhereInput>;
};

export type ReferendumUpdateInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>;
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>;
};

export type ReferendumUpdateManyMutationInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
};

export type ReferendumUpdateOneRequiredWithoutReferendumStatusInput = {
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>;
  connect?: Maybe<ReferendumWhereUniqueInput>;
  update?: Maybe<ReferendumUpdateWithoutReferendumStatusDataInput>;
  upsert?: Maybe<ReferendumUpsertWithoutReferendumStatusInput>;
};

export type ReferendumUpdateOneWithoutPreimageInput = {
  create?: Maybe<ReferendumCreateWithoutPreimageInput>;
  connect?: Maybe<ReferendumWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ReferendumUpdateWithoutPreimageDataInput>;
  upsert?: Maybe<ReferendumUpsertWithoutPreimageInput>;
};

export type ReferendumUpdateWithoutPreimageDataInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>;
};

export type ReferendumUpdateWithoutReferendumStatusDataInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>;
};

export type ReferendumUpsertWithoutPreimageInput = {
  update: ReferendumUpdateWithoutPreimageDataInput;
  create: ReferendumCreateWithoutPreimageInput;
};

export type ReferendumUpsertWithoutReferendumStatusInput = {
  update: ReferendumUpdateWithoutReferendumStatusDataInput;
  create: ReferendumCreateWithoutReferendumStatusInput;
};

export type ReferendumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  delay?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  delay_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  delay_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  delay_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  delay_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  delay_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  delay_gte?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  referendumId_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  referendumId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  referendumId_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  referendumId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  referendumId_gte?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  voteThreshold_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  voteThreshold_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  voteThreshold_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  voteThreshold_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  voteThreshold_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  voteThreshold_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
};

export type ReferendumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

export type Reward = Node & {
  __typename?: 'Reward';
  id: Scalars['ID'];
  authoredBlock: BlockNumber;
  sessionIndex: Session;
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
};

/** A connection to a list of items. */
export type RewardConnection = {
  __typename?: 'RewardConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<RewardEdge>>;
  aggregate: AggregateReward;
};

export type RewardCreateInput = {
  id?: Maybe<Scalars['ID']>;
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
  authoredBlock: BlockNumberCreateOneInput;
  sessionIndex: SessionCreateOneInput;
};

/** An edge in a connection. */
export type RewardEdge = {
  __typename?: 'RewardEdge';
  /** The item at the end of the edge. */
  node: Reward;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum RewardOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TreasuryRewardAsc = 'treasuryReward_ASC',
  TreasuryRewardDesc = 'treasuryReward_DESC',
  ValidatorRewardAsc = 'validatorReward_ASC',
  ValidatorRewardDesc = 'validatorReward_DESC'
}

export type RewardPreviousValues = {
  __typename?: 'RewardPreviousValues';
  id: Scalars['ID'];
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
};

export type RewardSubscriptionPayload = {
  __typename?: 'RewardSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Reward>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<RewardPreviousValues>;
};

export type RewardSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<RewardWhereInput>;
};

export type RewardUpdateInput = {
  treasuryReward?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
  authoredBlock?: Maybe<BlockNumberUpdateOneRequiredInput>;
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
};

export type RewardUpdateManyMutationInput = {
  treasuryReward?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
};

export type RewardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RewardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RewardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RewardWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  treasuryReward?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  treasuryReward_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  treasuryReward_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  treasuryReward_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  treasuryReward_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  treasuryReward_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  treasuryReward_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  treasuryReward_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  treasuryReward_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  treasuryReward_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  treasuryReward_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorReward_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorReward_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorReward_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorReward_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorReward_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorReward_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorReward_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorReward_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorReward_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  validatorReward_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorReward_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorReward_not_ends_with?: Maybe<Scalars['String']>;
  authoredBlock?: Maybe<BlockNumberWhereInput>;
  sessionIndex?: Maybe<SessionWhereInput>;
};

export type RewardWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Session = Node & {
  __typename?: 'Session';
  id: Scalars['ID'];
  index: Scalars['Int'];
  start: BlockNumber;
};

/** A connection to a list of items. */
export type SessionConnection = {
  __typename?: 'SessionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<SessionEdge>>;
  aggregate: AggregateSession;
};

export type SessionCreateInput = {
  id?: Maybe<Scalars['ID']>;
  index: Scalars['Int'];
  start: BlockNumberCreateOneInput;
};

export type SessionCreateOneInput = {
  create?: Maybe<SessionCreateInput>;
  connect?: Maybe<SessionWhereUniqueInput>;
};

/** An edge in a connection. */
export type SessionEdge = {
  __typename?: 'SessionEdge';
  /** The item at the end of the edge. */
  node: Session;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum SessionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type SessionPreviousValues = {
  __typename?: 'SessionPreviousValues';
  id: Scalars['ID'];
  index: Scalars['Int'];
};

export type SessionSubscriptionPayload = {
  __typename?: 'SessionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Session>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<SessionPreviousValues>;
};

export type SessionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<SessionWhereInput>;
};

export type SessionUpdateDataInput = {
  index?: Maybe<Scalars['Int']>;
  start?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type SessionUpdateInput = {
  index?: Maybe<Scalars['Int']>;
  start?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type SessionUpdateManyMutationInput = {
  index?: Maybe<Scalars['Int']>;
};

export type SessionUpdateOneRequiredInput = {
  create?: Maybe<SessionCreateInput>;
  connect?: Maybe<SessionWhereUniqueInput>;
  update?: Maybe<SessionUpdateDataInput>;
  upsert?: Maybe<SessionUpsertNestedInput>;
};

export type SessionUpsertNestedInput = {
  update: SessionUpdateDataInput;
  create: SessionCreateInput;
};

export type SessionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  start?: Maybe<BlockNumberWhereInput>;
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
};

export type Slashing = Node & {
  __typename?: 'Slashing';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  who: Scalars['String'];
  amount: Scalars['String'];
};

/** A connection to a list of items. */
export type SlashingConnection = {
  __typename?: 'SlashingConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<SlashingEdge>>;
  aggregate: AggregateSlashing;
};

export type SlashingCreateInput = {
  id?: Maybe<Scalars['ID']>;
  who: Scalars['String'];
  amount: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type SlashingEdge = {
  __typename?: 'SlashingEdge';
  /** The item at the end of the edge. */
  node: Slashing;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum SlashingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type SlashingPreviousValues = {
  __typename?: 'SlashingPreviousValues';
  id: Scalars['ID'];
  who: Scalars['String'];
  amount: Scalars['String'];
};

export type SlashingSubscriptionPayload = {
  __typename?: 'SlashingSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Slashing>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<SlashingPreviousValues>;
};

export type SlashingSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<SlashingWhereInput>;
};

export type SlashingUpdateInput = {
  who?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type SlashingUpdateManyMutationInput = {
  who?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
};

export type SlashingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SlashingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SlashingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SlashingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  amount_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  amount_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  amount_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  amount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  amount_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  amount_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
};

export type SlashingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
};

export type Stake = Node & {
  __typename?: 'Stake';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  totalStake: Scalars['String'];
};

/** A connection to a list of items. */
export type StakeConnection = {
  __typename?: 'StakeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<StakeEdge>>;
  aggregate: AggregateStake;
};

export type StakeCreateInput = {
  id?: Maybe<Scalars['ID']>;
  totalStake: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type StakeEdge = {
  __typename?: 'StakeEdge';
  /** The item at the end of the edge. */
  node: Stake;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum StakeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalStakeAsc = 'totalStake_ASC',
  TotalStakeDesc = 'totalStake_DESC'
}

export type StakePreviousValues = {
  __typename?: 'StakePreviousValues';
  id: Scalars['ID'];
  totalStake: Scalars['String'];
};

export type StakeSubscriptionPayload = {
  __typename?: 'StakeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Stake>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<StakePreviousValues>;
};

export type StakeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<StakeWhereInput>;
};

export type StakeUpdateInput = {
  totalStake?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type StakeUpdateManyMutationInput = {
  totalStake?: Maybe<Scalars['String']>;
};

export type StakeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StakeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StakeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StakeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  totalStake?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  totalStake_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  totalStake_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  totalStake_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  totalStake_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  totalStake_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  totalStake_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  totalStake_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  totalStake_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  totalStake_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  totalStake_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  totalStake_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  totalStake_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  totalStake_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  heartBeat?: Maybe<HeartBeatSubscriptionPayload>;
  offlineValidator?: Maybe<OfflineValidatorSubscriptionPayload>;
  era?: Maybe<EraSubscriptionPayload>;
  slashing?: Maybe<SlashingSubscriptionPayload>;
  validator?: Maybe<ValidatorSubscriptionPayload>;
  totalIssuance?: Maybe<TotalIssuanceSubscriptionPayload>;
  reward?: Maybe<RewardSubscriptionPayload>;
  nomination?: Maybe<NominationSubscriptionPayload>;
  stake?: Maybe<StakeSubscriptionPayload>;
  council?: Maybe<CouncilSubscriptionPayload>;
  councilMember?: Maybe<CouncilMemberSubscriptionPayload>;
  motion?: Maybe<MotionSubscriptionPayload>;
  motionProposalArgument?: Maybe<MotionProposalArgumentSubscriptionPayload>;
  motionStatus?: Maybe<MotionStatusSubscriptionPayload>;
  proposal?: Maybe<ProposalSubscriptionPayload>;
  proposalStatus?: Maybe<ProposalStatusSubscriptionPayload>;
  preimage?: Maybe<PreimageSubscriptionPayload>;
  preimageStatus?: Maybe<PreimageStatusSubscriptionPayload>;
  preimageArgument?: Maybe<PreimageArgumentSubscriptionPayload>;
  referendum?: Maybe<ReferendumSubscriptionPayload>;
  referendumStatus?: Maybe<ReferendumStatusSubscriptionPayload>;
  blockIndex?: Maybe<BlockIndexSubscriptionPayload>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalSubscriptionPayload>;
  treasuryStatus?: Maybe<TreasuryStatusSubscriptionPayload>;
  tip?: Maybe<TipSubscriptionPayload>;
  tipStatus?: Maybe<TipStatusSubscriptionPayload>;
  bounty?: Maybe<BountySubscriptionPayload>;
  bountyStatus?: Maybe<BountyStatusSubscriptionPayload>;
  blockNumber?: Maybe<BlockNumberSubscriptionPayload>;
  session?: Maybe<SessionSubscriptionPayload>;
};


export type SubscriptionHeartBeatArgs = {
  where?: Maybe<HeartBeatSubscriptionWhereInput>;
};


export type SubscriptionOfflineValidatorArgs = {
  where?: Maybe<OfflineValidatorSubscriptionWhereInput>;
};


export type SubscriptionEraArgs = {
  where?: Maybe<EraSubscriptionWhereInput>;
};


export type SubscriptionSlashingArgs = {
  where?: Maybe<SlashingSubscriptionWhereInput>;
};


export type SubscriptionValidatorArgs = {
  where?: Maybe<ValidatorSubscriptionWhereInput>;
};


export type SubscriptionTotalIssuanceArgs = {
  where?: Maybe<TotalIssuanceSubscriptionWhereInput>;
};


export type SubscriptionRewardArgs = {
  where?: Maybe<RewardSubscriptionWhereInput>;
};


export type SubscriptionNominationArgs = {
  where?: Maybe<NominationSubscriptionWhereInput>;
};


export type SubscriptionStakeArgs = {
  where?: Maybe<StakeSubscriptionWhereInput>;
};


export type SubscriptionCouncilArgs = {
  where?: Maybe<CouncilSubscriptionWhereInput>;
};


export type SubscriptionCouncilMemberArgs = {
  where?: Maybe<CouncilMemberSubscriptionWhereInput>;
};


export type SubscriptionMotionArgs = {
  where?: Maybe<MotionSubscriptionWhereInput>;
};


export type SubscriptionMotionProposalArgumentArgs = {
  where?: Maybe<MotionProposalArgumentSubscriptionWhereInput>;
};


export type SubscriptionMotionStatusArgs = {
  where?: Maybe<MotionStatusSubscriptionWhereInput>;
};


export type SubscriptionProposalArgs = {
  where?: Maybe<ProposalSubscriptionWhereInput>;
};


export type SubscriptionProposalStatusArgs = {
  where?: Maybe<ProposalStatusSubscriptionWhereInput>;
};


export type SubscriptionPreimageArgs = {
  where?: Maybe<PreimageSubscriptionWhereInput>;
};


export type SubscriptionPreimageStatusArgs = {
  where?: Maybe<PreimageStatusSubscriptionWhereInput>;
};


export type SubscriptionPreimageArgumentArgs = {
  where?: Maybe<PreimageArgumentSubscriptionWhereInput>;
};


export type SubscriptionReferendumArgs = {
  where?: Maybe<ReferendumSubscriptionWhereInput>;
};


export type SubscriptionReferendumStatusArgs = {
  where?: Maybe<ReferendumStatusSubscriptionWhereInput>;
};


export type SubscriptionBlockIndexArgs = {
  where?: Maybe<BlockIndexSubscriptionWhereInput>;
};


export type SubscriptionTreasurySpendProposalArgs = {
  where?: Maybe<TreasurySpendProposalSubscriptionWhereInput>;
};


export type SubscriptionTreasuryStatusArgs = {
  where?: Maybe<TreasuryStatusSubscriptionWhereInput>;
};


export type SubscriptionTipArgs = {
  where?: Maybe<TipSubscriptionWhereInput>;
};


export type SubscriptionTipStatusArgs = {
  where?: Maybe<TipStatusSubscriptionWhereInput>;
};


export type SubscriptionBountyArgs = {
  where?: Maybe<BountySubscriptionWhereInput>;
};


export type SubscriptionBountyStatusArgs = {
  where?: Maybe<BountyStatusSubscriptionWhereInput>;
};


export type SubscriptionBlockNumberArgs = {
  where?: Maybe<BlockNumberSubscriptionWhereInput>;
};


export type SubscriptionSessionArgs = {
  where?: Maybe<SessionSubscriptionWhereInput>;
};

export type Tip = {
  __typename?: 'Tip';
  id: Scalars['Int'];
  hash: Scalars['String'];
  reason: Scalars['String'];
  who: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
  tipStatus?: Maybe<Array<TipStatus>>;
};


export type TipTipStatusArgs = {
  where?: Maybe<TipStatusWhereInput>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TipConnection = {
  __typename?: 'TipConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TipEdge>>;
  aggregate: AggregateTip;
};

export type TipCreateInput = {
  hash: Scalars['String'];
  reason: Scalars['String'];
  who: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
  tipStatus?: Maybe<TipStatusCreateManyWithoutTipInput>;
};

export type TipCreateOneWithoutTipStatusInput = {
  create?: Maybe<TipCreateWithoutTipStatusInput>;
  connect?: Maybe<TipWhereUniqueInput>;
};

export type TipCreateWithoutTipStatusInput = {
  hash: Scalars['String'];
  reason: Scalars['String'];
  who: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type TipEdge = {
  __typename?: 'TipEdge';
  /** The item at the end of the edge. */
  node: Tip;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum TipOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  ReasonAsc = 'reason_ASC',
  ReasonDesc = 'reason_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC',
  FinderAsc = 'finder_ASC',
  FinderDesc = 'finder_DESC',
  FinderFeeAsc = 'finderFee_ASC',
  FinderFeeDesc = 'finderFee_DESC',
  ClosesAsc = 'closes_ASC',
  ClosesDesc = 'closes_DESC'
}

export type TipPreviousValues = {
  __typename?: 'TipPreviousValues';
  id: Scalars['Int'];
  hash: Scalars['String'];
  reason: Scalars['String'];
  who: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
};

export type TipStatus = Node & {
  __typename?: 'TipStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  tip: Tip;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TipStatusConnection = {
  __typename?: 'TipStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TipStatusEdge>>;
  aggregate: AggregateTipStatus;
};

export type TipStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  tip: TipCreateOneWithoutTipStatusInput;
};

export type TipStatusCreateManyWithoutTipInput = {
  create?: Maybe<Array<TipStatusCreateWithoutTipInput>>;
  connect?: Maybe<Array<TipStatusWhereUniqueInput>>;
};

export type TipStatusCreateWithoutTipInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type TipStatusEdge = {
  __typename?: 'TipStatusEdge';
  /** The item at the end of the edge. */
  node: TipStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum TipStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type TipStatusPreviousValues = {
  __typename?: 'TipStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type TipStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
};

export type TipStatusSubscriptionPayload = {
  __typename?: 'TipStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TipStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TipStatusPreviousValues>;
};

export type TipStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TipStatusWhereInput>;
};

export type TipStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  tip?: Maybe<TipUpdateOneRequiredWithoutTipStatusInput>;
};

export type TipStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TipStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TipStatusUpdateManyWithoutTipInput = {
  create?: Maybe<Array<TipStatusCreateWithoutTipInput>>;
  connect?: Maybe<Array<TipStatusWhereUniqueInput>>;
  set?: Maybe<Array<TipStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<TipStatusWhereUniqueInput>>;
  delete?: Maybe<Array<TipStatusWhereUniqueInput>>;
  update?: Maybe<Array<TipStatusUpdateWithWhereUniqueWithoutTipInput>>;
  updateMany?: Maybe<Array<TipStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TipStatusScalarWhereInput>>;
  upsert?: Maybe<Array<TipStatusUpsertWithWhereUniqueWithoutTipInput>>;
};

export type TipStatusUpdateManyWithWhereNestedInput = {
  where: TipStatusScalarWhereInput;
  data: TipStatusUpdateManyDataInput;
};

export type TipStatusUpdateWithoutTipDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type TipStatusUpdateWithWhereUniqueWithoutTipInput = {
  where: TipStatusWhereUniqueInput;
  data: TipStatusUpdateWithoutTipDataInput;
};

export type TipStatusUpsertWithWhereUniqueWithoutTipInput = {
  where: TipStatusWhereUniqueInput;
  update: TipStatusUpdateWithoutTipDataInput;
  create: TipStatusCreateWithoutTipInput;
};

export type TipStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  tip?: Maybe<TipWhereInput>;
};

export type TipStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TipSubscriptionPayload = {
  __typename?: 'TipSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tip>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TipPreviousValues>;
};

export type TipSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TipWhereInput>;
};

export type TipUpdateInput = {
  hash?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
  tipStatus?: Maybe<TipStatusUpdateManyWithoutTipInput>;
};

export type TipUpdateManyMutationInput = {
  hash?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
};

export type TipUpdateOneRequiredWithoutTipStatusInput = {
  create?: Maybe<TipCreateWithoutTipStatusInput>;
  connect?: Maybe<TipWhereUniqueInput>;
  update?: Maybe<TipUpdateWithoutTipStatusDataInput>;
  upsert?: Maybe<TipUpsertWithoutTipStatusInput>;
};

export type TipUpdateWithoutTipStatusDataInput = {
  hash?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
};

export type TipUpsertWithoutTipStatusInput = {
  update: TipUpdateWithoutTipStatusDataInput;
  create: TipCreateWithoutTipStatusInput;
};

export type TipWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  reason_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  reason_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  reason_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  reason_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  reason_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  reason_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  reason_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  reason_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  reason_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  reason_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  reason_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  reason_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  reason_not_ends_with?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  finder?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finder_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finder_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  finder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finder_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finder_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finder_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finder_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finder_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finder_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finder_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  finder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finder_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finder_not_ends_with?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finderFee_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finderFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  finderFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finderFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finderFee_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finderFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finderFee_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finderFee_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finderFee_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finderFee_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  finderFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finderFee_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finderFee_not_ends_with?: Maybe<Scalars['String']>;
  closes?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  closes_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  closes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  closes_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  closes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  closes_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  closes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  closes_gte?: Maybe<Scalars['Int']>;
  tipStatus_every?: Maybe<TipStatusWhereInput>;
  tipStatus_some?: Maybe<TipStatusWhereInput>;
  tipStatus_none?: Maybe<TipStatusWhereInput>;
};

export type TipWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TotalIssuance = Node & {
  __typename?: 'TotalIssuance';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  amount: Scalars['String'];
};

/** A connection to a list of items. */
export type TotalIssuanceConnection = {
  __typename?: 'TotalIssuanceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TotalIssuanceEdge>>;
  aggregate: AggregateTotalIssuance;
};

export type TotalIssuanceCreateInput = {
  id?: Maybe<Scalars['ID']>;
  amount: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type TotalIssuanceEdge = {
  __typename?: 'TotalIssuanceEdge';
  /** The item at the end of the edge. */
  node: TotalIssuance;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum TotalIssuanceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type TotalIssuancePreviousValues = {
  __typename?: 'TotalIssuancePreviousValues';
  id: Scalars['ID'];
  amount: Scalars['String'];
};

export type TotalIssuanceSubscriptionPayload = {
  __typename?: 'TotalIssuanceSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TotalIssuance>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TotalIssuancePreviousValues>;
};

export type TotalIssuanceSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TotalIssuanceWhereInput>;
};

export type TotalIssuanceUpdateInput = {
  amount?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type TotalIssuanceUpdateManyMutationInput = {
  amount?: Maybe<Scalars['String']>;
};

export type TotalIssuanceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TotalIssuanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TotalIssuanceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  amount_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  amount_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  amount_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  amount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  amount_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  amount_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
};

export type TotalIssuanceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TreasurySpendProposal = {
  __typename?: 'TreasurySpendProposal';
  id: Scalars['Int'];
  proposer: Scalars['String'];
  beneficiary: Scalars['String'];
  value: Scalars['String'];
  bond: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<Array<TreasuryStatus>>;
  motion?: Maybe<Motion>;
};


export type TreasurySpendProposalTreasuryStatusArgs = {
  where?: Maybe<TreasuryStatusWhereInput>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TreasurySpendProposalConnection = {
  __typename?: 'TreasurySpendProposalConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TreasurySpendProposalEdge>>;
  aggregate: AggregateTreasurySpendProposal;
};

export type TreasurySpendProposalCreateInput = {
  proposer: Scalars['String'];
  beneficiary: Scalars['String'];
  value: Scalars['String'];
  bond: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>;
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>;
};

export type TreasurySpendProposalCreateOneWithoutMotionInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>;
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
};

export type TreasurySpendProposalCreateOneWithoutTreasuryStatusInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>;
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
};

export type TreasurySpendProposalCreateWithoutMotionInput = {
  proposer: Scalars['String'];
  beneficiary: Scalars['String'];
  value: Scalars['String'];
  bond: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>;
};

export type TreasurySpendProposalCreateWithoutTreasuryStatusInput = {
  proposer: Scalars['String'];
  beneficiary: Scalars['String'];
  value: Scalars['String'];
  bond: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>;
};

/** An edge in a connection. */
export type TreasurySpendProposalEdge = {
  __typename?: 'TreasurySpendProposalEdge';
  /** The item at the end of the edge. */
  node: TreasurySpendProposal;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum TreasurySpendProposalOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  BondAsc = 'bond_ASC',
  BondDesc = 'bond_DESC',
  TreasuryProposalIdAsc = 'treasuryProposalId_ASC',
  TreasuryProposalIdDesc = 'treasuryProposalId_DESC'
}

export type TreasurySpendProposalPreviousValues = {
  __typename?: 'TreasurySpendProposalPreviousValues';
  id: Scalars['Int'];
  proposer: Scalars['String'];
  beneficiary: Scalars['String'];
  value: Scalars['String'];
  bond: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
};

export type TreasurySpendProposalSubscriptionPayload = {
  __typename?: 'TreasurySpendProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TreasurySpendProposal>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TreasurySpendProposalPreviousValues>;
};

export type TreasurySpendProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TreasurySpendProposalWhereInput>;
};

export type TreasurySpendProposalUpdateInput = {
  proposer?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>;
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>;
};

export type TreasurySpendProposalUpdateManyMutationInput = {
  proposer?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
};

export type TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>;
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
  update?: Maybe<TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput>;
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutTreasuryStatusInput>;
};

export type TreasurySpendProposalUpdateOneWithoutMotionInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>;
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TreasurySpendProposalUpdateWithoutMotionDataInput>;
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutMotionInput>;
};

export type TreasurySpendProposalUpdateWithoutMotionDataInput = {
  proposer?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>;
};

export type TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput = {
  proposer?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>;
};

export type TreasurySpendProposalUpsertWithoutMotionInput = {
  update: TreasurySpendProposalUpdateWithoutMotionDataInput;
  create: TreasurySpendProposalCreateWithoutMotionInput;
};

export type TreasurySpendProposalUpsertWithoutTreasuryStatusInput = {
  update: TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput;
  create: TreasurySpendProposalCreateWithoutTreasuryStatusInput;
};

export type TreasurySpendProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  proposer?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  motion?: Maybe<MotionWhereInput>;
};

export type TreasurySpendProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
};

export type TreasuryStatus = Node & {
  __typename?: 'TreasuryStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  treasurySpendProposal: TreasurySpendProposal;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TreasuryStatusConnection = {
  __typename?: 'TreasuryStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TreasuryStatusEdge>>;
  aggregate: AggregateTreasuryStatus;
};

export type TreasuryStatusCreateInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  treasurySpendProposal: TreasurySpendProposalCreateOneWithoutTreasuryStatusInput;
};

export type TreasuryStatusCreateManyWithoutTreasurySpendProposalInput = {
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>;
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
};

export type TreasuryStatusCreateWithoutTreasurySpendProposalInput = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
};

/** An edge in a connection. */
export type TreasuryStatusEdge = {
  __typename?: 'TreasuryStatusEdge';
  /** The item at the end of the edge. */
  node: TreasuryStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum TreasuryStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UniqueStatusAsc = 'uniqueStatus_ASC',
  UniqueStatusDesc = 'uniqueStatus_DESC'
}

export type TreasuryStatusPreviousValues = {
  __typename?: 'TreasuryStatusPreviousValues';
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type TreasuryStatusScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
};

export type TreasuryStatusSubscriptionPayload = {
  __typename?: 'TreasuryStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TreasuryStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TreasuryStatusPreviousValues>;
};

export type TreasuryStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TreasuryStatusWhereInput>;
};

export type TreasuryStatusUpdateInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput>;
};

export type TreasuryStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TreasuryStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput = {
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>;
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  set?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  delete?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  update?: Maybe<Array<TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput>>;
  updateMany?: Maybe<Array<TreasuryStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  upsert?: Maybe<Array<TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput>>;
};

export type TreasuryStatusUpdateManyWithWhereNestedInput = {
  where: TreasuryStatusScalarWhereInput;
  data: TreasuryStatusUpdateManyDataInput;
};

export type TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput = {
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput = {
  where: TreasuryStatusWhereUniqueInput;
  data: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput;
};

export type TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput = {
  where: TreasuryStatusWhereUniqueInput;
  update: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput;
  create: TreasuryStatusCreateWithoutTreasurySpendProposalInput;
};

export type TreasuryStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type Validator = Node & {
  __typename?: 'Validator';
  id: Scalars['ID'];
  session: Session;
  controller: Scalars['String'];
  stash: Scalars['String'];
  preferences: Scalars['String'];
};

/** A connection to a list of items. */
export type ValidatorConnection = {
  __typename?: 'ValidatorConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ValidatorEdge>>;
  aggregate: AggregateValidator;
};

export type ValidatorCreateInput = {
  id?: Maybe<Scalars['ID']>;
  controller: Scalars['String'];
  stash: Scalars['String'];
  preferences: Scalars['String'];
  session: SessionCreateOneInput;
};

/** An edge in a connection. */
export type ValidatorEdge = {
  __typename?: 'ValidatorEdge';
  /** The item at the end of the edge. */
  node: Validator;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ValidatorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ControllerAsc = 'controller_ASC',
  ControllerDesc = 'controller_DESC',
  StashAsc = 'stash_ASC',
  StashDesc = 'stash_DESC',
  PreferencesAsc = 'preferences_ASC',
  PreferencesDesc = 'preferences_DESC'
}

export type ValidatorPreviousValues = {
  __typename?: 'ValidatorPreviousValues';
  id: Scalars['ID'];
  controller: Scalars['String'];
  stash: Scalars['String'];
  preferences: Scalars['String'];
};

export type ValidatorSubscriptionPayload = {
  __typename?: 'ValidatorSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Validator>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ValidatorPreviousValues>;
};

export type ValidatorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ValidatorWhereInput>;
};

export type ValidatorUpdateInput = {
  controller?: Maybe<Scalars['String']>;
  stash?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['String']>;
  session?: Maybe<SessionUpdateOneRequiredInput>;
};

export type ValidatorUpdateManyMutationInput = {
  controller?: Maybe<Scalars['String']>;
  stash?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['String']>;
};

export type ValidatorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ValidatorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ValidatorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  controller?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  controller_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  controller_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  controller_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  controller_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  controller_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  controller_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  controller_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  controller_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  controller_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  controller_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  controller_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  controller_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  controller_not_ends_with?: Maybe<Scalars['String']>;
  stash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  stash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  stash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stash_not_ends_with?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preferences_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preferences_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  preferences_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preferences_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preferences_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preferences_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preferences_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preferences_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preferences_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preferences_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  preferences_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preferences_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preferences_not_ends_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GetExecutedMotionsWithPreimageHashQueryVariables = {
  preimageHash: Scalars['String'];
  blockNumber: Scalars['Int'];
};


export type GetExecutedMotionsWithPreimageHashQuery = (
  { __typename?: 'Query' }
  & { motions: Array<Maybe<(
    { __typename?: 'Motion' }
    & Pick<Motion, 'motionProposalId'>
  )>> }
);

export type GetTabledProposalAtBlockQueryVariables = {
  blockNumber: Scalars['Int'];
};


export type GetTabledProposalAtBlockQuery = (
  { __typename?: 'Query' }
  & { proposals: Array<Maybe<(
    { __typename?: 'Proposal' }
    & Pick<Proposal, 'proposalId'>
    & { preimage?: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash'>
    )> }
  )>> }
);

export type GetOnchainReferendaQueryVariables = {
  startBlock: Scalars['Int'];
};


export type GetOnchainReferendaQuery = (
  { __typename?: 'Query' }
  & { referendums: Array<Maybe<(
    { __typename?: 'Referendum' }
    & OnchainReferendumFragment
  )>> }
);

export type OnchainReferendumFragment = (
  { __typename?: 'Referendum' }
  & Pick<Referendum, 'preimageHash' | 'id' | 'referendumId'>
  & { referendumStatus?: Maybe<Array<(
    { __typename?: 'ReferendumStatus' }
    & Pick<ReferendumStatus, 'id' | 'status'>
    & { blockNumber: (
      { __typename?: 'BlockNumber' }
      & Pick<BlockNumber, 'id' | 'number'>
    ) }
  )>> }
);

export type GetOnchainProposalsQueryVariables = {
  startBlock: Scalars['Int'];
};


export type GetOnchainProposalsQuery = (
  { __typename?: 'Query' }
  & { proposals: Array<Maybe<(
    { __typename?: 'Proposal' }
    & OnchainProposalFragment
  )>> }
);

export type OnchainProposalFragment = (
  { __typename?: 'Proposal' }
  & Pick<Proposal, 'author' | 'id' | 'proposalId'>
);

export type GetOnchainMotionsQueryVariables = {
  startBlock: Scalars['Int'];
};


export type GetOnchainMotionsQuery = (
  { __typename?: 'Query' }
  & { motions: Array<Maybe<(
    { __typename?: 'Motion' }
    & OnchainMotionFragment
  )>> }
);

export type OnchainMotionFragment = (
  { __typename?: 'Motion' }
  & Pick<Motion, 'author' | 'id' | 'motionProposalId' | 'section'>
  & { motionProposalArguments?: Maybe<Array<(
    { __typename?: 'MotionProposalArgument' }
    & Pick<MotionProposalArgument, 'name' | 'value'>
  )>> }
);

export type GetOnchainTreasuryProposalsQueryVariables = {
  startBlock: Scalars['Int'];
};


export type GetOnchainTreasuryProposalsQuery = (
  { __typename?: 'Query' }
  & { treasurySpendProposals: Array<Maybe<(
    { __typename?: 'TreasurySpendProposal' }
    & OnchainTreasuryProposalFragment
  )>> }
);

export type OnchainTreasuryProposalFragment = (
  { __typename?: 'TreasurySpendProposal' }
  & Pick<TreasurySpendProposal, 'proposer' | 'id' | 'treasuryProposalId'>
);

export type GetOnchainBountiesQueryVariables = {
  startBlock: Scalars['Int'];
};


export type GetOnchainBountiesQuery = (
  { __typename?: 'Query' }
  & { bounties: Array<Maybe<(
    { __typename?: 'Bounty' }
    & OnchainBountyFragment
  )>> }
);

export type OnchainBountyFragment = (
  { __typename?: 'Bounty' }
  & Pick<Bounty, 'proposer' | 'id' | 'bountyId'>
);

export type GetOnchainTipsQueryVariables = {
  startBlock: Scalars['Int'];
};


export type GetOnchainTipsQuery = (
  { __typename?: 'Query' }
  & { tips: Array<Maybe<(
    { __typename?: 'Tip' }
    & OnchainTipFragment
  )>> }
);

export type OnchainTipFragment = (
  { __typename?: 'Tip' }
  & Pick<Tip, 'finder' | 'id' | 'hash'>
);

export const OnchainReferendumFragmentDoc = gql`
    fragment onchainReferendum on Referendum {
  preimageHash
  id
  referendumId
  referendumStatus(where: {status: "Started"}) {
    id
    status
    blockNumber {
      id
      number
    }
  }
}
    `;
export const OnchainProposalFragmentDoc = gql`
    fragment onchainProposal on Proposal {
  author
  id
  proposalId
}
    `;
export const OnchainMotionFragmentDoc = gql`
    fragment onchainMotion on Motion {
  author
  id
  motionProposalId
  section
  motionProposalArguments {
    name
    value
  }
}
    `;
export const OnchainTreasuryProposalFragmentDoc = gql`
    fragment onchainTreasuryProposal on TreasurySpendProposal {
  proposer
  id
  treasuryProposalId
}
    `;
export const OnchainBountyFragmentDoc = gql`
    fragment onchainBounty on Bounty {
  proposer
  id
  bountyId
}
    `;
export const OnchainTipFragmentDoc = gql`
    fragment onchainTip on Tip {
  finder
  id
  hash
}
    `;
export const GetExecutedMotionsWithPreimageHashDocument = gql`
    query getExecutedMotionsWithPreimageHash($preimageHash: String!, $blockNumber: Int!) {
  motions(where: {AND: [{motionStatus_some: {blockNumber: {number_lt: $blockNumber}}}, {motionStatus_some: {status: "Executed"}}, {preimageHash: $preimageHash}]}, orderBy: id_DESC) {
    motionProposalId
  }
}
    `;
export const GetTabledProposalAtBlockDocument = gql`
    query getTabledProposalAtBlock($blockNumber: Int!) {
  proposals(where: {proposalStatus_some: {AND: [{blockNumber: {number: $blockNumber}}, {status: "Tabled"}]}}) {
    proposalId
    preimage {
      hash
    }
  }
}
    `;
export const GetOnchainReferendaDocument = gql`
    query getOnchainReferenda($startBlock: Int!) {
  referendums(where: {referendumStatus_some: {AND: [{status: "Started"}, {blockNumber: {number_gte: $startBlock}}]}}) {
    ...onchainReferendum
  }
}
    ${OnchainReferendumFragmentDoc}`;
export const GetOnchainProposalsDocument = gql`
    query getOnchainProposals($startBlock: Int!) {
  proposals(where: {proposalStatus_some: {AND: [{status: "Proposed"}, {blockNumber: {number_gte: $startBlock}}]}}) {
    ...onchainProposal
  }
}
    ${OnchainProposalFragmentDoc}`;
export const GetOnchainMotionsDocument = gql`
    query getOnchainMotions($startBlock: Int!) {
  motions(where: {motionStatus_some: {AND: [{status: "Proposed"}, {blockNumber: {number_gte: $startBlock}}]}}) {
    ...onchainMotion
  }
}
    ${OnchainMotionFragmentDoc}`;
export const GetOnchainTreasuryProposalsDocument = gql`
    query getOnchainTreasuryProposals($startBlock: Int!) {
  treasurySpendProposals(where: {treasuryStatus_some: {AND: [{status: "Proposed"}, {blockNumber: {number_gte: $startBlock}}]}}) {
    ...onchainTreasuryProposal
  }
}
    ${OnchainTreasuryProposalFragmentDoc}`;
export const GetOnchainBountiesDocument = gql`
    query getOnchainBounties($startBlock: Int!) {
  bounties(where: {bountyStatus_some: {AND: [{blockNumber: {number_gte: $startBlock}}]}}) {
    ...onchainBounty
  }
}
    ${OnchainBountyFragmentDoc}`;
export const GetOnchainTipsDocument = gql`
    query getOnchainTips($startBlock: Int!) {
  tips(where: {tipStatus_some: {AND: [{status: "TipOpened"}, {blockNumber: {number_gte: $startBlock}}]}}) {
    ...onchainTip
  }
}
    ${OnchainTipFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getExecutedMotionsWithPreimageHash(variables: GetExecutedMotionsWithPreimageHashQueryVariables): Promise<GetExecutedMotionsWithPreimageHashQuery> {
      return withWrapper(() => client.request<GetExecutedMotionsWithPreimageHashQuery>(print(GetExecutedMotionsWithPreimageHashDocument), variables));
    },
    getTabledProposalAtBlock(variables: GetTabledProposalAtBlockQueryVariables): Promise<GetTabledProposalAtBlockQuery> {
      return withWrapper(() => client.request<GetTabledProposalAtBlockQuery>(print(GetTabledProposalAtBlockDocument), variables));
    },
    getOnchainReferenda(variables: GetOnchainReferendaQueryVariables): Promise<GetOnchainReferendaQuery> {
      return withWrapper(() => client.request<GetOnchainReferendaQuery>(print(GetOnchainReferendaDocument), variables));
    },
    getOnchainProposals(variables: GetOnchainProposalsQueryVariables): Promise<GetOnchainProposalsQuery> {
      return withWrapper(() => client.request<GetOnchainProposalsQuery>(print(GetOnchainProposalsDocument), variables));
    },
    getOnchainMotions(variables: GetOnchainMotionsQueryVariables): Promise<GetOnchainMotionsQuery> {
      return withWrapper(() => client.request<GetOnchainMotionsQuery>(print(GetOnchainMotionsDocument), variables));
    },
    getOnchainTreasuryProposals(variables: GetOnchainTreasuryProposalsQueryVariables): Promise<GetOnchainTreasuryProposalsQuery> {
      return withWrapper(() => client.request<GetOnchainTreasuryProposalsQuery>(print(GetOnchainTreasuryProposalsDocument), variables));
    },
    getOnchainBounties(variables: GetOnchainBountiesQueryVariables): Promise<GetOnchainBountiesQuery> {
      return withWrapper(() => client.request<GetOnchainBountiesQuery>(print(GetOnchainBountiesDocument), variables));
    },
    getOnchainTips(variables: GetOnchainTipsQueryVariables): Promise<GetOnchainTipsQuery> {
      return withWrapper(() => client.request<GetOnchainTipsQuery>(print(GetOnchainTipsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;