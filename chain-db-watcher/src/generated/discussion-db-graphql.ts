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
  timestamptz: any;
  uuid: any;
  timestamp: any;
  bpchar: any;
  /** Raw JSON value */
  Json: any;
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type AddressLinkType = {
  __typename?: 'AddressLinkType';
  address_id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  sign_message?: Maybe<Scalars['String']>;
};

export type AddressLoginType = {
  __typename?: 'AddressLoginType';
  message?: Maybe<Scalars['String']>;
  signMessage?: Maybe<Scalars['String']>;
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
  index: Scalars['Int'];
  startFrom: Scalars['Int'];
};

/** A connection to a list of items. */
export type BlockIndexConnection = {
  __typename?: 'BlockIndexConnection';
  aggregate: AggregateBlockIndex;
  /** A list of edges. */
  edges: Array<Maybe<BlockIndexEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlockIndexCreateInput = {
  id?: Maybe<Scalars['ID']>;
  identifier: Scalars['String'];
  index: Scalars['Int'];
  startFrom: Scalars['Int'];
};

/** An edge in a connection. */
export type BlockIndexEdge = {
  __typename?: 'BlockIndexEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BlockIndex;
};

export enum BlockIndexOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  StartFromAsc = 'startFrom_ASC',
  StartFromDesc = 'startFrom_DESC'
}

export type BlockIndexPreviousValues = {
  __typename?: 'BlockIndexPreviousValues';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  index: Scalars['Int'];
  startFrom: Scalars['Int'];
};

export type BlockIndexSubscriptionPayload = {
  __typename?: 'BlockIndexSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BlockIndex>;
  previousValues?: Maybe<BlockIndexPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BlockIndexSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockIndexSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BlockIndexWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BlockIndexUpdateInput = {
  identifier?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  startFrom?: Maybe<Scalars['Int']>;
};

export type BlockIndexUpdateManyMutationInput = {
  identifier?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  startFrom?: Maybe<Scalars['Int']>;
};

export type BlockIndexWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockIndexWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockIndexWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockIndexWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  identifier_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  identifier_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  identifier_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  identifier_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  identifier_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  startFrom?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  startFrom_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  startFrom_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  startFrom_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  startFrom_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  startFrom_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  startFrom_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  startFrom_not_in?: Maybe<Array<Scalars['Int']>>;
};

export type BlockIndexWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
};

export type BlockNumber = Node & {
  __typename?: 'BlockNumber';
  authoredBy: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  number: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type BlockNumberConnection = {
  __typename?: 'BlockNumberConnection';
  aggregate: AggregateBlockNumber;
  /** A list of edges. */
  edges: Array<Maybe<BlockNumberEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlockNumberCreateInput = {
  authoredBy: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  number: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
};

export type BlockNumberCreateOneInput = {
  connect?: Maybe<BlockNumberWhereUniqueInput>;
  create?: Maybe<BlockNumberCreateInput>;
};

/** An edge in a connection. */
export type BlockNumberEdge = {
  __typename?: 'BlockNumberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BlockNumber;
};

export enum BlockNumberOrderByInput {
  AuthoredByAsc = 'authoredBy_ASC',
  AuthoredByDesc = 'authoredBy_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  StartDateTimeAsc = 'startDateTime_ASC',
  StartDateTimeDesc = 'startDateTime_DESC'
}

export type BlockNumberPreviousValues = {
  __typename?: 'BlockNumberPreviousValues';
  authoredBy: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  number: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
};

export type BlockNumberSubscriptionPayload = {
  __typename?: 'BlockNumberSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BlockNumber>;
  previousValues?: Maybe<BlockNumberPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BlockNumberSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockNumberSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BlockNumberWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BlockNumberUpdateDataInput = {
  authoredBy?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
};

export type BlockNumberUpdateInput = {
  authoredBy?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
};

export type BlockNumberUpdateManyMutationInput = {
  authoredBy?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
};

export type BlockNumberUpdateOneRequiredInput = {
  connect?: Maybe<BlockNumberWhereUniqueInput>;
  create?: Maybe<BlockNumberCreateInput>;
  update?: Maybe<BlockNumberUpdateDataInput>;
  upsert?: Maybe<BlockNumberUpsertNestedInput>;
};

export type BlockNumberUpsertNestedInput = {
  create: BlockNumberCreateInput;
  update: BlockNumberUpdateDataInput;
};

export type BlockNumberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlockNumberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlockNumberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlockNumberWhereInput>>;
  authoredBy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  authoredBy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authoredBy_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  authoredBy_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  authoredBy_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authoredBy_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  authoredBy_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  authoredBy_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authoredBy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authoredBy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  authoredBy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  authoredBy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authoredBy_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  number_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  number_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  number_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  number_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  number_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  number_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startDateTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startDateTime_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startDateTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startDateTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startDateTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type BlockNumberWhereUniqueInput = {
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
};

export type Bounty = {
  __typename?: 'Bounty';
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  bountyStatus?: Maybe<Array<BountyStatus>>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  proposer: Scalars['String'];
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
};


export type BountyBountyStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyStatusWhereInput>;
};

/** A connection to a list of items. */
export type BountyConnection = {
  __typename?: 'BountyConnection';
  aggregate: AggregateBounty;
  /** A list of edges. */
  edges: Array<Maybe<BountyEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BountyCreateInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  bountyStatus?: Maybe<BountyStatusCreateManyWithoutBountyInput>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  proposer: Scalars['String'];
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
};

export type BountyCreateOneWithoutBountyStatusInput = {
  connect?: Maybe<BountyWhereUniqueInput>;
  create?: Maybe<BountyCreateWithoutBountyStatusInput>;
};

export type BountyCreateWithoutBountyStatusInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  proposer: Scalars['String'];
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
};

/** An edge in a connection. */
export type BountyEdge = {
  __typename?: 'BountyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Bounty;
};

export enum BountyOrderByInput {
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC',
  BondAsc = 'bond_ASC',
  BondDesc = 'bond_DESC',
  BountyIdAsc = 'bountyId_ASC',
  BountyIdDesc = 'bountyId_DESC',
  CuratorDepositAsc = 'curatorDeposit_ASC',
  CuratorDepositDesc = 'curatorDeposit_DESC',
  CuratorAsc = 'curator_ASC',
  CuratorDesc = 'curator_DESC',
  FeeAsc = 'fee_ASC',
  FeeDesc = 'fee_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  UnlockAtAsc = 'unlockAt_ASC',
  UnlockAtDesc = 'unlockAt_DESC',
  UpdateDueAsc = 'updateDue_ASC',
  UpdateDueDesc = 'updateDue_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type BountyPreviousValues = {
  __typename?: 'BountyPreviousValues';
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId: Scalars['Int'];
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  proposer: Scalars['String'];
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
};

export type BountyStatus = Node & {
  __typename?: 'BountyStatus';
  blockNumber: BlockNumber;
  bounty: Bounty;
  id: Scalars['ID'];
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type BountyStatusConnection = {
  __typename?: 'BountyStatusConnection';
  aggregate: AggregateBountyStatus;
  /** A list of edges. */
  edges: Array<Maybe<BountyStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BountyStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  bounty: BountyCreateOneWithoutBountyStatusInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type BountyStatusCreateManyWithoutBountyInput = {
  connect?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  create?: Maybe<Array<BountyStatusCreateWithoutBountyInput>>;
};

export type BountyStatusCreateWithoutBountyInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** An edge in a connection. */
export type BountyStatusEdge = {
  __typename?: 'BountyStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BountyStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type BountyStatusSubscriptionPayload = {
  __typename?: 'BountyStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<BountyStatus>;
  previousValues?: Maybe<BountyStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BountyStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BountyStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BountyStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  bounty?: Maybe<BountyUpdateOneRequiredWithoutBountyStatusInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  create?: Maybe<Array<BountyStatusCreateWithoutBountyInput>>;
  delete?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BountyStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  set?: Maybe<Array<BountyStatusWhereUniqueInput>>;
  update?: Maybe<Array<BountyStatusUpdateWithWhereUniqueWithoutBountyInput>>;
  updateMany?: Maybe<Array<BountyStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BountyStatusUpsertWithWhereUniqueWithoutBountyInput>>;
};

export type BountyStatusUpdateManyWithWhereNestedInput = {
  data: BountyStatusUpdateManyDataInput;
  where: BountyStatusScalarWhereInput;
};

export type BountyStatusUpdateWithoutBountyDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type BountyStatusUpdateWithWhereUniqueWithoutBountyInput = {
  data: BountyStatusUpdateWithoutBountyDataInput;
  where: BountyStatusWhereUniqueInput;
};

export type BountyStatusUpsertWithWhereUniqueWithoutBountyInput = {
  create: BountyStatusCreateWithoutBountyInput;
  update: BountyStatusUpdateWithoutBountyDataInput;
  where: BountyStatusWhereUniqueInput;
};

export type BountyStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  bounty?: Maybe<BountyWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type BountyStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type BountySubscriptionPayload = {
  __typename?: 'BountySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Bounty>;
  previousValues?: Maybe<BountyPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BountySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<BountyWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type BountyUpdateInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  bountyStatus?: Maybe<BountyStatusUpdateManyWithoutBountyInput>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type BountyUpdateManyMutationInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type BountyUpdateOneRequiredWithoutBountyStatusInput = {
  connect?: Maybe<BountyWhereUniqueInput>;
  create?: Maybe<BountyCreateWithoutBountyStatusInput>;
  update?: Maybe<BountyUpdateWithoutBountyStatusDataInput>;
  upsert?: Maybe<BountyUpsertWithoutBountyStatusInput>;
};

export type BountyUpdateWithoutBountyStatusDataInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['Int']>;
  updateDue?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type BountyUpsertWithoutBountyStatusInput = {
  create: BountyCreateWithoutBountyStatusInput;
  update: BountyUpdateWithoutBountyStatusDataInput;
};

export type BountyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  bountyId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  bountyId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bountyId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bountyId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  bountyId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bountyId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  bountyId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  bountyId_not_in?: Maybe<Array<Scalars['Int']>>;
  bountyStatus_every?: Maybe<BountyStatusWhereInput>;
  bountyStatus_none?: Maybe<BountyStatusWhereInput>;
  bountyStatus_some?: Maybe<BountyStatusWhereInput>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curatorDeposit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curatorDeposit_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curatorDeposit_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curatorDeposit_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curatorDeposit_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curatorDeposit_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curatorDeposit_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curatorDeposit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curatorDeposit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curatorDeposit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curatorDeposit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curatorDeposit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curatorDeposit_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curator_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curator_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curator_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curator_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curator_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curator_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curator_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curator_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curator_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curator_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curator_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curator_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curator_starts_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fee_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  unlockAt_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  unlockAt_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  unlockAt_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  unlockAt_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  unlockAt_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  unlockAt_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  unlockAt_not_in?: Maybe<Array<Scalars['Int']>>;
  updateDue?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  updateDue_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  updateDue_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  updateDue_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  updateDue_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  updateDue_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  updateDue_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  updateDue_not_in?: Maybe<Array<Scalars['Int']>>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type BountyWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Bounty = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BountyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BountyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BountyWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bountyId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bountyId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bountyId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  bountyId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bountyId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  bountyId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  bountyId_not_in?: Maybe<Array<Scalars['Int']>>;
  bountyStatus_every?: Maybe<BountyStatusWhereInput>;
  bountyStatus_none?: Maybe<BountyStatusWhereInput>;
  bountyStatus_some?: Maybe<BountyStatusWhereInput>;
  curator?: Maybe<Scalars['String']>;
  curatorDeposit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curatorDeposit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curatorDeposit_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curatorDeposit_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curatorDeposit_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curatorDeposit_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curatorDeposit_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curatorDeposit_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curatorDeposit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curatorDeposit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curatorDeposit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curatorDeposit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curatorDeposit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curatorDeposit_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  curator_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  curator_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  curator_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  curator_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  curator_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  curator_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  curator_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  curator_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  curator_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  curator_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  curator_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  curator_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  curator_starts_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fee_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  unlockAt_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  unlockAt_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  unlockAt_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  unlockAt_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  unlockAt_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  unlockAt_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  unlockAt_not_in?: Maybe<Array<Scalars['Int']>>;
  updateDue?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  updateDue_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  updateDue_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  updateDue_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  updateDue_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  updateDue_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  updateDue_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  updateDue_not_in?: Maybe<Array<Scalars['Int']>>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type BountyWhereUniqueInput = {
  bountyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};


/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChangeResponse = {
  __typename?: 'ChangeResponse';
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** columns and relationships of "comment_reactions" */
export type Comment_Reactions = {
  __typename?: 'comment_reactions';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** Remote relationship field */
  reacting_user?: Maybe<User>;
  reaction: Scalars['bpchar'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "comment_reactions" */
export type Comment_Reactions_Aggregate = {
  __typename?: 'comment_reactions_aggregate';
  aggregate?: Maybe<Comment_Reactions_Aggregate_Fields>;
  nodes: Array<Comment_Reactions>;
};

/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_Fields = {
  __typename?: 'comment_reactions_aggregate_fields';
  avg?: Maybe<Comment_Reactions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comment_Reactions_Max_Fields>;
  min?: Maybe<Comment_Reactions_Min_Fields>;
  stddev?: Maybe<Comment_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Reactions_Sum_Fields>;
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Comment_Reactions_Variance_Fields>;
};


/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment_reactions" */
export type Comment_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Comment_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Reactions_Max_Order_By>;
  min?: Maybe<Comment_Reactions_Min_Order_By>;
  stddev?: Maybe<Comment_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Comment_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Comment_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment_reactions" */
export type Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Reactions_Avg_Fields = {
  __typename?: 'comment_reactions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment_reactions" */
export type Comment_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment_reactions". All fields are combined with a logical 'AND'. */
export type Comment_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Reactions_Bool_Exp>>>;
  _not?: Maybe<Comment_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Reactions_Bool_Exp>>>;
  comment?: Maybe<Comments_Bool_Exp>;
  comment_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  reaction?: Maybe<Bpchar_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_reactions" */
export enum Comment_Reactions_Constraint {
  /** unique or primary key constraint */
  CommentReactionsCommentIdUserIdReactionKey = 'comment_reactions_comment_id_user_id_reaction_key',
  /** unique or primary key constraint */
  CommentReactionsPkey = 'comment_reactions_pkey'
}

/** input type for incrementing integer column in table "comment_reactions" */
export type Comment_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comment_reactions" */
export type Comment_Reactions_Insert_Input = {
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Comment_Reactions_Max_Fields = {
  __typename?: 'comment_reactions_max_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "comment_reactions" */
export type Comment_Reactions_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Reactions_Min_Fields = {
  __typename?: 'comment_reactions_min_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "comment_reactions" */
export type Comment_Reactions_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "comment_reactions" */
export type Comment_Reactions_Mutation_Response = {
  __typename?: 'comment_reactions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment_Reactions>;
};

/** input type for inserting object relation for remote table "comment_reactions" */
export type Comment_Reactions_Obj_Rel_Insert_Input = {
  data: Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};

/** on conflict condition type for table "comment_reactions" */
export type Comment_Reactions_On_Conflict = {
  constraint: Comment_Reactions_Constraint;
  update_columns: Array<Comment_Reactions_Update_Column>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};

/** ordering options when selecting data from "comment_reactions" */
export type Comment_Reactions_Order_By = {
  comment?: Maybe<Comments_Order_By>;
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "comment_reactions" */
export type Comment_Reactions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "comment_reactions" */
export enum Comment_Reactions_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comment_reactions" */
export type Comment_Reactions_Set_Input = {
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Comment_Reactions_Stddev_Fields = {
  __typename?: 'comment_reactions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Reactions_Stddev_Pop_Fields = {
  __typename?: 'comment_reactions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Reactions_Stddev_Samp_Fields = {
  __typename?: 'comment_reactions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Reactions_Sum_Fields = {
  __typename?: 'comment_reactions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comment_reactions" */
export type Comment_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "comment_reactions" */
export enum Comment_Reactions_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Comment_Reactions_Var_Pop_Fields = {
  __typename?: 'comment_reactions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment_reactions" */
export type Comment_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Reactions_Var_Samp_Fields = {
  __typename?: 'comment_reactions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment_reactions" */
export type Comment_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Reactions_Variance_Fields = {
  __typename?: 'comment_reactions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment_reactions" */
export type Comment_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** Remote relationship field */
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregated array relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "comments" */
export type CommentsComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
  stddev?: Maybe<Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Comments_Sum_Fields>;
  var_pop?: Maybe<Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Comments_Var_Samp_Fields>;
  variance?: Maybe<Comments_Variance_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: Maybe<Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
  stddev?: Maybe<Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Comments_Sum_Order_By>;
  var_pop?: Maybe<Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Comments_Var_Samp_Order_By>;
  variance?: Maybe<Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  comment_reactions?: Maybe<Comment_Reactions_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for incrementing integer column in table "comments" */
export type Comments_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comment_reactions?: Maybe<Comment_Reactions_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  author_id?: Maybe<Order_By>;
  comment_reactions_aggregate?: Maybe<Comment_Reactions_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Council = Node & {
  __typename?: 'Council';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  members?: Maybe<Array<CouncilMember>>;
};


export type CouncilMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};

/** A connection to a list of items. */
export type CouncilConnection = {
  __typename?: 'CouncilConnection';
  aggregate: AggregateCouncil;
  /** A list of edges. */
  edges: Array<Maybe<CouncilEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CouncilCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  members?: Maybe<CouncilMemberCreateManyWithoutCouncilsInput>;
};

export type CouncilCreateManyWithoutMembersInput = {
  connect?: Maybe<Array<CouncilWhereUniqueInput>>;
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>;
};

export type CouncilCreateWithoutMembersInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
};

/** An edge in a connection. */
export type CouncilEdge = {
  __typename?: 'CouncilEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Council;
};

export type CouncilMember = Node & {
  __typename?: 'CouncilMember';
  address: Scalars['String'];
  councils?: Maybe<Array<Council>>;
  id: Scalars['ID'];
};


export type CouncilMemberCouncilsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};

/** A connection to a list of items. */
export type CouncilMemberConnection = {
  __typename?: 'CouncilMemberConnection';
  aggregate: AggregateCouncilMember;
  /** A list of edges. */
  edges: Array<Maybe<CouncilMemberEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CouncilMemberCreateInput = {
  address: Scalars['String'];
  councils?: Maybe<CouncilCreateManyWithoutMembersInput>;
  id?: Maybe<Scalars['ID']>;
};

export type CouncilMemberCreateManyWithoutCouncilsInput = {
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>;
};

export type CouncilMemberCreateWithoutCouncilsInput = {
  address: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
};

/** An edge in a connection. */
export type CouncilMemberEdge = {
  __typename?: 'CouncilMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CouncilMember;
};

export enum CouncilMemberOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilMemberPreviousValues = {
  __typename?: 'CouncilMemberPreviousValues';
  address: Scalars['String'];
  id: Scalars['ID'];
};

export type CouncilMemberScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  address?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
};

export type CouncilMemberSubscriptionPayload = {
  __typename?: 'CouncilMemberSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<CouncilMember>;
  previousValues?: Maybe<CouncilMemberPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type CouncilMemberSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<CouncilMemberWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
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
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>;
  delete?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CouncilMemberScalarWhereInput>>;
  disconnect?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  set?: Maybe<Array<CouncilMemberWhereUniqueInput>>;
  update?: Maybe<Array<CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput>>;
  updateMany?: Maybe<Array<CouncilMemberUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput>>;
};

export type CouncilMemberUpdateManyWithWhereNestedInput = {
  data: CouncilMemberUpdateManyDataInput;
  where: CouncilMemberScalarWhereInput;
};

export type CouncilMemberUpdateWithoutCouncilsDataInput = {
  address?: Maybe<Scalars['String']>;
};

export type CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput = {
  data: CouncilMemberUpdateWithoutCouncilsDataInput;
  where: CouncilMemberWhereUniqueInput;
};

export type CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput = {
  create: CouncilMemberCreateWithoutCouncilsInput;
  update: CouncilMemberUpdateWithoutCouncilsDataInput;
  where: CouncilMemberWhereUniqueInput;
};

export type CouncilMemberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilMemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilMemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilMemberWhereInput>>;
  address?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  councils_every?: Maybe<CouncilWhereInput>;
  councils_none?: Maybe<CouncilWhereInput>;
  councils_some?: Maybe<CouncilWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
};

export type CouncilMemberWhereUniqueInput = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
};

export type CouncilSubscriptionPayload = {
  __typename?: 'CouncilSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Council>;
  previousValues?: Maybe<CouncilPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type CouncilSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<CouncilWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type CouncilUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  members?: Maybe<CouncilMemberUpdateManyWithoutCouncilsInput>;
};

export type CouncilUpdateManyWithoutMembersInput = {
  connect?: Maybe<Array<CouncilWhereUniqueInput>>;
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>;
  delete?: Maybe<Array<CouncilWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CouncilScalarWhereInput>>;
  disconnect?: Maybe<Array<CouncilWhereUniqueInput>>;
  set?: Maybe<Array<CouncilWhereUniqueInput>>;
  update?: Maybe<Array<CouncilUpdateWithWhereUniqueWithoutMembersInput>>;
  upsert?: Maybe<Array<CouncilUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type CouncilUpdateWithoutMembersDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
};

export type CouncilUpdateWithWhereUniqueWithoutMembersInput = {
  data: CouncilUpdateWithoutMembersDataInput;
  where: CouncilWhereUniqueInput;
};

export type CouncilUpsertWithWhereUniqueWithoutMembersInput = {
  create: CouncilCreateWithoutMembersInput;
  update: CouncilUpdateWithoutMembersDataInput;
  where: CouncilWhereUniqueInput;
};

export type CouncilWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CouncilWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CouncilWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CouncilWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  members_every?: Maybe<CouncilMemberWhereInput>;
  members_none?: Maybe<CouncilMemberWhereInput>;
  members_some?: Maybe<CouncilMemberWhereInput>;
};

export type CouncilWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Era = Node & {
  __typename?: 'Era';
  eraStartSessionIndex: Session;
  id: Scalars['ID'];
  index: Scalars['Int'];
  individualPoints: Array<Scalars['String']>;
  totalPoints: Scalars['String'];
};

/** A connection to a list of items. */
export type EraConnection = {
  __typename?: 'EraConnection';
  aggregate: AggregateEra;
  /** A list of edges. */
  edges: Array<Maybe<EraEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EraCreateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type EraCreateInput = {
  eraStartSessionIndex: SessionCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  index: Scalars['Int'];
  individualPoints?: Maybe<EraCreateindividualPointsInput>;
  totalPoints: Scalars['String'];
};

/** An edge in a connection. */
export type EraEdge = {
  __typename?: 'EraEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Era;
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
  individualPoints: Array<Scalars['String']>;
  totalPoints: Scalars['String'];
};

export type EraSubscriptionPayload = {
  __typename?: 'EraSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Era>;
  previousValues?: Maybe<EraPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type EraSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EraSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<EraWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type EraUpdateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type EraUpdateInput = {
  eraStartSessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
  index?: Maybe<Scalars['Int']>;
  individualPoints?: Maybe<EraUpdateindividualPointsInput>;
  totalPoints?: Maybe<Scalars['String']>;
};

export type EraUpdateManyMutationInput = {
  index?: Maybe<Scalars['Int']>;
  individualPoints?: Maybe<EraUpdateindividualPointsInput>;
  totalPoints?: Maybe<Scalars['String']>;
};

export type EraWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EraWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EraWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EraWhereInput>>;
  eraStartSessionIndex?: Maybe<SessionWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  totalPoints?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  totalPoints_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  totalPoints_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  totalPoints_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  totalPoints_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  totalPoints_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  totalPoints_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  totalPoints_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  totalPoints_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  totalPoints_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  totalPoints_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  totalPoints_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  totalPoints_starts_with?: Maybe<Scalars['String']>;
};

export type EraWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
};

export type HeartBeat = Node & {
  __typename?: 'HeartBeat';
  authorityId: Scalars['String'];
  id: Scalars['ID'];
  sessionIndex: Session;
};

/** A connection to a list of items. */
export type HeartBeatConnection = {
  __typename?: 'HeartBeatConnection';
  aggregate: AggregateHeartBeat;
  /** A list of edges. */
  edges: Array<Maybe<HeartBeatEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeartBeatCreateInput = {
  authorityId: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  sessionIndex: SessionCreateOneInput;
};

/** An edge in a connection. */
export type HeartBeatEdge = {
  __typename?: 'HeartBeatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HeartBeat;
};

export enum HeartBeatOrderByInput {
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeartBeatPreviousValues = {
  __typename?: 'HeartBeatPreviousValues';
  authorityId: Scalars['String'];
  id: Scalars['ID'];
};

export type HeartBeatSubscriptionPayload = {
  __typename?: 'HeartBeatSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<HeartBeat>;
  previousValues?: Maybe<HeartBeatPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type HeartBeatSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeartBeatSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<HeartBeatWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeartBeatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeartBeatWhereInput>>;
  authorityId?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  authorityId_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authorityId_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  authorityId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  authorityId_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authorityId_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  authorityId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  authorityId_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authorityId_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authorityId_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  authorityId_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  authorityId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  authorityId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authorityId_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  sessionIndex?: Maybe<SessionWhereInput>;
};

export type HeartBeatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
};


export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

export type Motion = {
  __typename?: 'Motion';
  author: Scalars['String'];
  id: Scalars['Int'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<Array<MotionProposalArgument>>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<Array<MotionStatus>>;
  preimage?: Maybe<Preimage>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
};


export type MotionMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


export type MotionMotionStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};

/** A connection to a list of items. */
export type MotionConnection = {
  __typename?: 'MotionConnection';
  aggregate: AggregateMotion;
  /** A list of edges. */
  edges: Array<Maybe<MotionEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MotionCreateInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateOneWithoutMotionProposalArgumentsInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>;
};

export type MotionCreateOneWithoutMotionStatusInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutMotionStatusInput>;
};

export type MotionCreateOneWithoutPreimageInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutPreimageInput>;
};

export type MotionCreateOneWithoutTreasurySpendProposalInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>;
};

export type MotionCreateWithoutMotionProposalArgumentsInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateWithoutMotionStatusInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateWithoutPreimageInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>;
};

export type MotionCreateWithoutTreasurySpendProposalInput = {
  author: Scalars['String'];
  memberCount: Scalars['Int'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>;
  motionProposalHash: Scalars['String'];
  motionProposalId: Scalars['Int'];
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section: Scalars['String'];
};

/** An edge in a connection. */
export type MotionEdge = {
  __typename?: 'MotionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Motion;
};

export enum MotionOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
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
  author: Scalars['String'];
  id: Scalars['Int'];
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
  motion: Motion;
  name: Scalars['String'];
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type MotionProposalArgumentConnection = {
  __typename?: 'MotionProposalArgumentConnection';
  aggregate: AggregateMotionProposalArgument;
  /** A list of edges. */
  edges: Array<Maybe<MotionProposalArgumentEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MotionProposalArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>;
  motion: MotionCreateOneWithoutMotionProposalArgumentsInput;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type MotionProposalArgumentCreateManyWithoutMotionInput = {
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>;
};

export type MotionProposalArgumentCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

/** An edge in a connection. */
export type MotionProposalArgumentEdge = {
  __typename?: 'MotionProposalArgumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MotionProposalArgument;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentSubscriptionPayload = {
  __typename?: 'MotionProposalArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<MotionProposalArgument>;
  previousValues?: Maybe<MotionProposalArgumentPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionProposalArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionProposalArgumentWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionProposalArgumentUpdateInput = {
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>;
  delete?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>;
  disconnect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  set?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>;
  update?: Maybe<Array<MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput>>;
  updateMany?: Maybe<Array<MotionProposalArgumentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput>>;
};

export type MotionProposalArgumentUpdateManyWithWhereNestedInput = {
  data: MotionProposalArgumentUpdateManyDataInput;
  where: MotionProposalArgumentScalarWhereInput;
};

export type MotionProposalArgumentUpdateWithoutMotionDataInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput = {
  data: MotionProposalArgumentUpdateWithoutMotionDataInput;
  where: MotionProposalArgumentWhereUniqueInput;
};

export type MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput = {
  create: MotionProposalArgumentCreateWithoutMotionInput;
  update: MotionProposalArgumentUpdateWithoutMotionDataInput;
  where: MotionProposalArgumentWhereUniqueInput;
};

export type MotionProposalArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  motion?: Maybe<MotionWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type MotionProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MotionStatus = Node & {
  __typename?: 'MotionStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  motion: Motion;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type MotionStatusConnection = {
  __typename?: 'MotionStatusConnection';
  aggregate: AggregateMotionStatus;
  /** A list of edges. */
  edges: Array<Maybe<MotionStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MotionStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  motion: MotionCreateOneWithoutMotionStatusInput;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type MotionStatusCreateManyWithoutMotionInput = {
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>;
};

export type MotionStatusCreateWithoutMotionInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** An edge in a connection. */
export type MotionStatusEdge = {
  __typename?: 'MotionStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MotionStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type MotionStatusSubscriptionPayload = {
  __typename?: 'MotionStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<MotionStatus>;
  previousValues?: Maybe<MotionStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionStatusInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>;
  delete?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MotionStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  set?: Maybe<Array<MotionStatusWhereUniqueInput>>;
  update?: Maybe<Array<MotionStatusUpdateWithWhereUniqueWithoutMotionInput>>;
  updateMany?: Maybe<Array<MotionStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MotionStatusUpsertWithWhereUniqueWithoutMotionInput>>;
};

export type MotionStatusUpdateManyWithWhereNestedInput = {
  data: MotionStatusUpdateManyDataInput;
  where: MotionStatusScalarWhereInput;
};

export type MotionStatusUpdateWithoutMotionDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type MotionStatusUpdateWithWhereUniqueWithoutMotionInput = {
  data: MotionStatusUpdateWithoutMotionDataInput;
  where: MotionStatusWhereUniqueInput;
};

export type MotionStatusUpsertWithWhereUniqueWithoutMotionInput = {
  create: MotionStatusCreateWithoutMotionInput;
  update: MotionStatusUpdateWithoutMotionDataInput;
  where: MotionStatusWhereUniqueInput;
};

export type MotionStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  motion?: Maybe<MotionWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type MotionSubscriptionPayload = {
  __typename?: 'MotionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Motion>;
  previousValues?: Maybe<MotionPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionUpdateInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
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
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>;
  update?: Maybe<MotionUpdateWithoutMotionProposalArgumentsDataInput>;
  upsert?: Maybe<MotionUpsertWithoutMotionProposalArgumentsInput>;
};

export type MotionUpdateOneRequiredWithoutMotionStatusInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutMotionStatusInput>;
  update?: Maybe<MotionUpdateWithoutMotionStatusDataInput>;
  upsert?: Maybe<MotionUpsertWithoutMotionStatusInput>;
};

export type MotionUpdateOneWithoutPreimageInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutPreimageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MotionUpdateWithoutPreimageDataInput>;
  upsert?: Maybe<MotionUpsertWithoutPreimageInput>;
};

export type MotionUpdateOneWithoutTreasurySpendProposalInput = {
  connect?: Maybe<MotionWhereUniqueInput>;
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
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
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateWithoutMotionStatusDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateWithoutPreimageDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>;
};

export type MotionUpdateWithoutTreasurySpendProposalDataInput = {
  author?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>;
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>;
  preimageHash?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

export type MotionUpsertWithoutMotionProposalArgumentsInput = {
  create: MotionCreateWithoutMotionProposalArgumentsInput;
  update: MotionUpdateWithoutMotionProposalArgumentsDataInput;
};

export type MotionUpsertWithoutMotionStatusInput = {
  create: MotionCreateWithoutMotionStatusInput;
  update: MotionUpdateWithoutMotionStatusDataInput;
};

export type MotionUpsertWithoutPreimageInput = {
  create: MotionCreateWithoutPreimageInput;
  update: MotionUpdateWithoutPreimageDataInput;
};

export type MotionUpsertWithoutTreasurySpendProposalInput = {
  create: MotionCreateWithoutTreasurySpendProposalInput;
  update: MotionUpdateWithoutTreasurySpendProposalDataInput;
};

export type MotionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  motionProposalHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  motionProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MotionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MotionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MotionWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  memberCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  memberCount_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  memberCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  memberCount_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  memberCount_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  motionProposalHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  motionProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type MotionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  motionProposalId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addressLinkConfirm?: Maybe<ChangeResponse>;
  addressLinkStart?: Maybe<AddressLinkType>;
  addressLogin?: Maybe<LoginResponse>;
  addressLoginStart?: Maybe<AddressLoginType>;
  addressSignupConfirm?: Maybe<LoginResponse>;
  addressSignupStart?: Maybe<AddressLoginType>;
  addressUnlink?: Maybe<ChangeResponse>;
  changeEmail?: Maybe<ChangeResponse>;
  changeNotificationPreference?: Maybe<ChangeResponse>;
  changePassword?: Maybe<Message>;
  changeUsername?: Maybe<ChangeResponse>;
  login?: Maybe<LoginResponse>;
  logout?: Maybe<Message>;
  postSubscribe?: Maybe<Message>;
  postUnsubscribe?: Maybe<Message>;
  reportContent?: Maybe<Message>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmailToken?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  setCredentialsConfirm?: Maybe<ChangeResponse>;
  setCredentialsStart?: Maybe<AddressLoginType>;
  setDefaultAddress?: Maybe<ChangeResponse>;
  signup?: Maybe<LoginResponse>;
  undoEmailChange?: Maybe<UndoEmailChangeResponse>;
  verifyEmail?: Maybe<ChangeResponse>;
};


export type MutationAddressLinkConfirmArgs = {
  address_id: Scalars['Int'];
  signature: Scalars['String'];
};


export type MutationAddressLinkStartArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


export type MutationAddressLoginArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationAddressLoginStartArgs = {
  address: Scalars['String'];
};


export type MutationAddressSignupConfirmArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationAddressSignupStartArgs = {
  address: Scalars['String'];
};


export type MutationAddressUnlinkArgs = {
  address: Scalars['String'];
};


export type MutationChangeEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationChangeUsernameArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationPostSubscribeArgs = {
  post_id: Scalars['Int'];
};


export type MutationPostUnsubscribeArgs = {
  post_id: Scalars['Int'];
};


export type MutationReportContentArgs = {
  comments?: Maybe<Scalars['String']>;
  content_id: Scalars['String'];
  network: Scalars['String'];
  reason: Scalars['String'];
  type: Scalars['String'];
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationSetCredentialsConfirmArgs = {
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  signature: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSetCredentialsStartArgs = {
  address: Scalars['String'];
};


export type MutationSetDefaultAddressArgs = {
  address: Scalars['String'];
};


export type MutationSignupArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUndoEmailChangeArgs = {
  token: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  addressLinkConfirm?: Maybe<ChangeResponse>;
  addressLinkStart?: Maybe<AddressLinkType>;
  addressLogin?: Maybe<LoginResponse>;
  addressLoginStart?: Maybe<AddressLoginType>;
  addressSignupConfirm?: Maybe<LoginResponse>;
  addressSignupStart?: Maybe<AddressLoginType>;
  addressUnlink?: Maybe<ChangeResponse>;
  changeEmail?: Maybe<ChangeResponse>;
  changeNotificationPreference?: Maybe<ChangeResponse>;
  changePassword?: Maybe<Message>;
  changeUsername?: Maybe<ChangeResponse>;
  createBlockIndex: BlockIndex;
  createBlockNumber: BlockNumber;
  createBounty: Bounty;
  createBountyStatus: BountyStatus;
  createCouncil: Council;
  createCouncilMember: CouncilMember;
  createEra: Era;
  createHeartBeat: HeartBeat;
  createMotion: Motion;
  createMotionProposalArgument: MotionProposalArgument;
  createMotionStatus: MotionStatus;
  createNomination: Nomination;
  createOfflineValidator: OfflineValidator;
  createPreimage: Preimage;
  createPreimageArgument: PreimageArgument;
  createPreimageStatus: PreimageStatus;
  createProposal: Proposal;
  createProposalStatus: ProposalStatus;
  createReferendum: Referendum;
  createReferendumStatus: ReferendumStatus;
  createReward: Reward;
  createSession: Session;
  createSlashing: Slashing;
  createStake: Stake;
  createTip: Tip;
  createTipStatus: TipStatus;
  createTotalIssuance: TotalIssuance;
  createTreasurySpendProposal: TreasurySpendProposal;
  createTreasuryStatus: TreasuryStatus;
  createValidator: Validator;
  deleteBlockIndex?: Maybe<BlockIndex>;
  deleteBlockNumber?: Maybe<BlockNumber>;
  deleteBounty?: Maybe<Bounty>;
  deleteBountyStatus?: Maybe<BountyStatus>;
  deleteCouncil?: Maybe<Council>;
  deleteCouncilMember?: Maybe<CouncilMember>;
  deleteEra?: Maybe<Era>;
  deleteHeartBeat?: Maybe<HeartBeat>;
  deleteManyBlockIndexes: BatchPayload;
  deleteManyBlockNumbers: BatchPayload;
  deleteManyBounties: BatchPayload;
  deleteManyBountyStatuses: BatchPayload;
  deleteManyCouncilMembers: BatchPayload;
  deleteManyCouncils: BatchPayload;
  deleteManyEras: BatchPayload;
  deleteManyHeartBeats: BatchPayload;
  deleteManyMotionProposalArguments: BatchPayload;
  deleteManyMotionStatuses: BatchPayload;
  deleteManyMotions: BatchPayload;
  deleteManyNominations: BatchPayload;
  deleteManyOfflineValidators: BatchPayload;
  deleteManyPreimageArguments: BatchPayload;
  deleteManyPreimageStatuses: BatchPayload;
  deleteManyPreimages: BatchPayload;
  deleteManyProposalStatuses: BatchPayload;
  deleteManyProposals: BatchPayload;
  deleteManyReferendumStatuses: BatchPayload;
  deleteManyReferendums: BatchPayload;
  deleteManyRewards: BatchPayload;
  deleteManySessions: BatchPayload;
  deleteManySlashings: BatchPayload;
  deleteManyStakes: BatchPayload;
  deleteManyTipStatuses: BatchPayload;
  deleteManyTips: BatchPayload;
  deleteManyTotalIssuances: BatchPayload;
  deleteManyTreasurySpendProposals: BatchPayload;
  deleteManyTreasuryStatuses: BatchPayload;
  deleteManyValidators: BatchPayload;
  deleteMotion?: Maybe<Motion>;
  deleteMotionProposalArgument?: Maybe<MotionProposalArgument>;
  deleteMotionStatus?: Maybe<MotionStatus>;
  deleteNomination?: Maybe<Nomination>;
  deleteOfflineValidator?: Maybe<OfflineValidator>;
  deletePreimage?: Maybe<Preimage>;
  deletePreimageArgument?: Maybe<PreimageArgument>;
  deletePreimageStatus?: Maybe<PreimageStatus>;
  deleteProposal?: Maybe<Proposal>;
  deleteProposalStatus?: Maybe<ProposalStatus>;
  deleteReferendum?: Maybe<Referendum>;
  deleteReferendumStatus?: Maybe<ReferendumStatus>;
  deleteReward?: Maybe<Reward>;
  deleteSession?: Maybe<Session>;
  deleteSlashing?: Maybe<Slashing>;
  deleteStake?: Maybe<Stake>;
  deleteTip?: Maybe<Tip>;
  deleteTipStatus?: Maybe<TipStatus>;
  deleteTotalIssuance?: Maybe<TotalIssuance>;
  deleteTreasurySpendProposal?: Maybe<TreasurySpendProposal>;
  deleteTreasuryStatus?: Maybe<TreasuryStatus>;
  deleteValidator?: Maybe<Validator>;
  /** delete data from the table: "comment_reactions" */
  delete_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "comment_reactions" */
  delete_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "onchain_links" */
  delete_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  /** delete single row from the table: "onchain_links" */
  delete_onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** delete data from the table: "poll" */
  delete_poll?: Maybe<Poll_Mutation_Response>;
  /** delete single row from the table: "poll" */
  delete_poll_by_pk?: Maybe<Poll>;
  /** delete data from the table: "poll_votes" */
  delete_poll_votes?: Maybe<Poll_Votes_Mutation_Response>;
  /** delete single row from the table: "poll_votes" */
  delete_poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** delete data from the table: "post_reactions" */
  delete_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** delete single row from the table: "post_reactions" */
  delete_post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** delete data from the table: "post_topics" */
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  /** delete single row from the table: "post_topics" */
  delete_post_topics_by_pk?: Maybe<Post_Topics>;
  /** delete data from the table: "post_types" */
  delete_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** delete single row from the table: "post_types" */
  delete_post_types_by_pk?: Maybe<Post_Types>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  executeRaw: Scalars['Json'];
  /** insert data into the table: "comment_reactions" */
  insert_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "comment_reactions" */
  insert_comment_reactions_one?: Maybe<Comment_Reactions>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "onchain_links" */
  insert_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  /** insert a single row into the table: "onchain_links" */
  insert_onchain_links_one?: Maybe<Onchain_Links>;
  /** insert data into the table: "poll" */
  insert_poll?: Maybe<Poll_Mutation_Response>;
  /** insert a single row into the table: "poll" */
  insert_poll_one?: Maybe<Poll>;
  /** insert data into the table: "poll_votes" */
  insert_poll_votes?: Maybe<Poll_Votes_Mutation_Response>;
  /** insert a single row into the table: "poll_votes" */
  insert_poll_votes_one?: Maybe<Poll_Votes>;
  /** insert data into the table: "post_reactions" */
  insert_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** insert a single row into the table: "post_reactions" */
  insert_post_reactions_one?: Maybe<Post_Reactions>;
  /** insert data into the table: "post_topics" */
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  /** insert a single row into the table: "post_topics" */
  insert_post_topics_one?: Maybe<Post_Topics>;
  /** insert data into the table: "post_types" */
  insert_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** insert a single row into the table: "post_types" */
  insert_post_types_one?: Maybe<Post_Types>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  login?: Maybe<LoginResponse>;
  logout?: Maybe<Message>;
  postSubscribe?: Maybe<Message>;
  postUnsubscribe?: Maybe<Message>;
  reportContent?: Maybe<Message>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmailToken?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  setCredentialsConfirm?: Maybe<ChangeResponse>;
  setCredentialsStart?: Maybe<AddressLoginType>;
  setDefaultAddress?: Maybe<ChangeResponse>;
  signup?: Maybe<LoginResponse>;
  undoEmailChange?: Maybe<UndoEmailChangeResponse>;
  updateBlockIndex?: Maybe<BlockIndex>;
  updateBlockNumber?: Maybe<BlockNumber>;
  updateBounty?: Maybe<Bounty>;
  updateBountyStatus?: Maybe<BountyStatus>;
  updateCouncil?: Maybe<Council>;
  updateCouncilMember?: Maybe<CouncilMember>;
  updateEra?: Maybe<Era>;
  updateHeartBeat?: Maybe<HeartBeat>;
  updateManyBlockIndexes: BatchPayload;
  updateManyBlockNumbers: BatchPayload;
  updateManyBounties: BatchPayload;
  updateManyBountyStatuses: BatchPayload;
  updateManyCouncilMembers: BatchPayload;
  updateManyEras: BatchPayload;
  updateManyHeartBeats: BatchPayload;
  updateManyMotionProposalArguments: BatchPayload;
  updateManyMotionStatuses: BatchPayload;
  updateManyMotions: BatchPayload;
  updateManyNominations: BatchPayload;
  updateManyOfflineValidators: BatchPayload;
  updateManyPreimageArguments: BatchPayload;
  updateManyPreimageStatuses: BatchPayload;
  updateManyPreimages: BatchPayload;
  updateManyProposalStatuses: BatchPayload;
  updateManyProposals: BatchPayload;
  updateManyReferendumStatuses: BatchPayload;
  updateManyReferendums: BatchPayload;
  updateManyRewards: BatchPayload;
  updateManySessions: BatchPayload;
  updateManySlashings: BatchPayload;
  updateManyStakes: BatchPayload;
  updateManyTipStatuses: BatchPayload;
  updateManyTips: BatchPayload;
  updateManyTotalIssuances: BatchPayload;
  updateManyTreasurySpendProposals: BatchPayload;
  updateManyTreasuryStatuses: BatchPayload;
  updateManyValidators: BatchPayload;
  updateMotion?: Maybe<Motion>;
  updateMotionProposalArgument?: Maybe<MotionProposalArgument>;
  updateMotionStatus?: Maybe<MotionStatus>;
  updateNomination?: Maybe<Nomination>;
  updateOfflineValidator?: Maybe<OfflineValidator>;
  updatePreimage?: Maybe<Preimage>;
  updatePreimageArgument?: Maybe<PreimageArgument>;
  updatePreimageStatus?: Maybe<PreimageStatus>;
  updateProposal?: Maybe<Proposal>;
  updateProposalStatus?: Maybe<ProposalStatus>;
  updateReferendum?: Maybe<Referendum>;
  updateReferendumStatus?: Maybe<ReferendumStatus>;
  updateReward?: Maybe<Reward>;
  updateSession?: Maybe<Session>;
  updateSlashing?: Maybe<Slashing>;
  updateStake?: Maybe<Stake>;
  updateTip?: Maybe<Tip>;
  updateTipStatus?: Maybe<TipStatus>;
  updateTotalIssuance?: Maybe<TotalIssuance>;
  updateTreasurySpendProposal?: Maybe<TreasurySpendProposal>;
  updateTreasuryStatus?: Maybe<TreasuryStatus>;
  updateValidator?: Maybe<Validator>;
  /** update data of the table: "comment_reactions" */
  update_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** update single row of the table: "comment_reactions" */
  update_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "onchain_links" */
  update_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  /** update single row of the table: "onchain_links" */
  update_onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** update data of the table: "poll" */
  update_poll?: Maybe<Poll_Mutation_Response>;
  /** update single row of the table: "poll" */
  update_poll_by_pk?: Maybe<Poll>;
  /** update data of the table: "poll_votes" */
  update_poll_votes?: Maybe<Poll_Votes_Mutation_Response>;
  /** update single row of the table: "poll_votes" */
  update_poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** update data of the table: "post_reactions" */
  update_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** update single row of the table: "post_reactions" */
  update_post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** update data of the table: "post_topics" */
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  /** update single row of the table: "post_topics" */
  update_post_topics_by_pk?: Maybe<Post_Topics>;
  /** update data of the table: "post_types" */
  update_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** update single row of the table: "post_types" */
  update_post_types_by_pk?: Maybe<Post_Types>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  upsertBlockIndex: BlockIndex;
  upsertBlockNumber: BlockNumber;
  upsertBounty: Bounty;
  upsertBountyStatus: BountyStatus;
  upsertCouncil: Council;
  upsertCouncilMember: CouncilMember;
  upsertEra: Era;
  upsertHeartBeat: HeartBeat;
  upsertMotion: Motion;
  upsertMotionProposalArgument: MotionProposalArgument;
  upsertMotionStatus: MotionStatus;
  upsertNomination: Nomination;
  upsertOfflineValidator: OfflineValidator;
  upsertPreimage: Preimage;
  upsertPreimageArgument: PreimageArgument;
  upsertPreimageStatus: PreimageStatus;
  upsertProposal: Proposal;
  upsertProposalStatus: ProposalStatus;
  upsertReferendum: Referendum;
  upsertReferendumStatus: ReferendumStatus;
  upsertReward: Reward;
  upsertSession: Session;
  upsertSlashing: Slashing;
  upsertStake: Stake;
  upsertTip: Tip;
  upsertTipStatus: TipStatus;
  upsertTotalIssuance: TotalIssuance;
  upsertTreasurySpendProposal: TreasurySpendProposal;
  upsertTreasuryStatus: TreasuryStatus;
  upsertValidator: Validator;
  verifyEmail?: Maybe<ChangeResponse>;
};


/** mutation root */
export type Mutation_RootAddressLinkConfirmArgs = {
  address_id: Scalars['Int'];
  signature: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressLinkStartArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressLoginArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressLoginStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressSignupConfirmArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
  signature: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressSignupStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddressUnlinkArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>;
};


/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChangeUsernameArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateBlockIndexArgs = {
  data: BlockIndexCreateInput;
};


/** mutation root */
export type Mutation_RootCreateBlockNumberArgs = {
  data: BlockNumberCreateInput;
};


/** mutation root */
export type Mutation_RootCreateBountyArgs = {
  data: BountyCreateInput;
};


/** mutation root */
export type Mutation_RootCreateBountyStatusArgs = {
  data: BountyStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateCouncilArgs = {
  data: CouncilCreateInput;
};


/** mutation root */
export type Mutation_RootCreateCouncilMemberArgs = {
  data: CouncilMemberCreateInput;
};


/** mutation root */
export type Mutation_RootCreateEraArgs = {
  data: EraCreateInput;
};


/** mutation root */
export type Mutation_RootCreateHeartBeatArgs = {
  data: HeartBeatCreateInput;
};


/** mutation root */
export type Mutation_RootCreateMotionArgs = {
  data: MotionCreateInput;
};


/** mutation root */
export type Mutation_RootCreateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentCreateInput;
};


/** mutation root */
export type Mutation_RootCreateMotionStatusArgs = {
  data: MotionStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateNominationArgs = {
  data: NominationCreateInput;
};


/** mutation root */
export type Mutation_RootCreateOfflineValidatorArgs = {
  data: OfflineValidatorCreateInput;
};


/** mutation root */
export type Mutation_RootCreatePreimageArgs = {
  data: PreimageCreateInput;
};


/** mutation root */
export type Mutation_RootCreatePreimageArgumentArgs = {
  data: PreimageArgumentCreateInput;
};


/** mutation root */
export type Mutation_RootCreatePreimageStatusArgs = {
  data: PreimageStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateProposalArgs = {
  data: ProposalCreateInput;
};


/** mutation root */
export type Mutation_RootCreateProposalStatusArgs = {
  data: ProposalStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateReferendumArgs = {
  data: ReferendumCreateInput;
};


/** mutation root */
export type Mutation_RootCreateReferendumStatusArgs = {
  data: ReferendumStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateRewardArgs = {
  data: RewardCreateInput;
};


/** mutation root */
export type Mutation_RootCreateSessionArgs = {
  data: SessionCreateInput;
};


/** mutation root */
export type Mutation_RootCreateSlashingArgs = {
  data: SlashingCreateInput;
};


/** mutation root */
export type Mutation_RootCreateStakeArgs = {
  data: StakeCreateInput;
};


/** mutation root */
export type Mutation_RootCreateTipArgs = {
  data: TipCreateInput;
};


/** mutation root */
export type Mutation_RootCreateTipStatusArgs = {
  data: TipStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateTotalIssuanceArgs = {
  data: TotalIssuanceCreateInput;
};


/** mutation root */
export type Mutation_RootCreateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalCreateInput;
};


/** mutation root */
export type Mutation_RootCreateTreasuryStatusArgs = {
  data: TreasuryStatusCreateInput;
};


/** mutation root */
export type Mutation_RootCreateValidatorArgs = {
  data: ValidatorCreateInput;
};


/** mutation root */
export type Mutation_RootDeleteBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteBountyArgs = {
  where: BountyWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteBountyStatusArgs = {
  where: BountyStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteCouncilArgs = {
  where: CouncilWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteEraArgs = {
  where: EraWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteManyBlockIndexesArgs = {
  where?: Maybe<BlockIndexWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyBountiesArgs = {
  where?: Maybe<BountyWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyBountyStatusesArgs = {
  where?: Maybe<BountyStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyCouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyErasArgs = {
  where?: Maybe<EraWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyHeartBeatsArgs = {
  where?: Maybe<HeartBeatWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyMotionStatusesArgs = {
  where?: Maybe<MotionStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyMotionsArgs = {
  where?: Maybe<MotionWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyNominationsArgs = {
  where?: Maybe<NominationWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyOfflineValidatorsArgs = {
  where?: Maybe<OfflineValidatorWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyPreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyPreimageStatusesArgs = {
  where?: Maybe<PreimageStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyPreimagesArgs = {
  where?: Maybe<PreimageWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyProposalStatusesArgs = {
  where?: Maybe<ProposalStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyProposalsArgs = {
  where?: Maybe<ProposalWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyReferendumStatusesArgs = {
  where?: Maybe<ReferendumStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyReferendumsArgs = {
  where?: Maybe<ReferendumWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyRewardsArgs = {
  where?: Maybe<RewardWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManySessionsArgs = {
  where?: Maybe<SessionWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyStakesArgs = {
  where?: Maybe<StakeWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyTipStatusesArgs = {
  where?: Maybe<TipStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyTipsArgs = {
  where?: Maybe<TipWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyTreasurySpendProposalsArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyTreasuryStatusesArgs = {
  where?: Maybe<TreasuryStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteManyValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>;
};


/** mutation root */
export type Mutation_RootDeleteMotionArgs = {
  where: MotionWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteNominationArgs = {
  where: NominationWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeletePreimageArgs = {
  where: PreimageWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeletePreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeletePreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteProposalArgs = {
  where: ProposalWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteReferendumArgs = {
  where: ReferendumWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteRewardArgs = {
  where: RewardWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteSlashingArgs = {
  where: SlashingWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteStakeArgs = {
  where: StakeWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteTipArgs = {
  where: TipWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteTipStatusArgs = {
  where: TipStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDeleteValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootDelete_Comment_ReactionsArgs = {
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Onchain_LinksArgs = {
  where: Onchain_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PollArgs = {
  where: Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Poll_VotesArgs = {
  where: Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_ReactionsArgs = {
  where: Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TopicsArgs = {
  where: Post_Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootExecuteRawArgs = {
  database?: Maybe<PrismaDatabase>;
  query: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Comment_ReactionsArgs = {
  objects: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Reactions_OneArgs = {
  object: Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onchain_LinksArgs = {
  objects: Array<Onchain_Links_Insert_Input>;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onchain_Links_OneArgs = {
  object: Onchain_Links_Insert_Input;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PollArgs = {
  objects: Array<Poll_Insert_Input>;
  on_conflict?: Maybe<Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_OneArgs = {
  object: Poll_Insert_Input;
  on_conflict?: Maybe<Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_VotesArgs = {
  objects: Array<Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poll_Votes_OneArgs = {
  object: Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_ReactionsArgs = {
  objects: Array<Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Reactions_OneArgs = {
  object: Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TopicsArgs = {
  objects: Array<Post_Topics_Insert_Input>;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Topics_OneArgs = {
  object: Post_Topics_Insert_Input;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TypesArgs = {
  objects: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Types_OneArgs = {
  object: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootPostSubscribeArgs = {
  post_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootPostUnsubscribeArgs = {
  post_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootReportContentArgs = {
  comments?: Maybe<Scalars['String']>;
  content_id: Scalars['String'];
  network: Scalars['String'];
  reason: Scalars['String'];
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRequestResetPasswordArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootSetCredentialsConfirmArgs = {
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  signature: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSetCredentialsStartArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSetDefaultAddressArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUndoEmailChangeArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateBlockIndexArgs = {
  data: BlockIndexUpdateInput;
  where: BlockIndexWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateBlockNumberArgs = {
  data: BlockNumberUpdateInput;
  where: BlockNumberWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateBountyArgs = {
  data: BountyUpdateInput;
  where: BountyWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateBountyStatusArgs = {
  data: BountyStatusUpdateInput;
  where: BountyStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateCouncilArgs = {
  data: CouncilUpdateInput;
  where: CouncilWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateCouncilMemberArgs = {
  data: CouncilMemberUpdateInput;
  where: CouncilMemberWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateEraArgs = {
  data: EraUpdateInput;
  where: EraWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateHeartBeatArgs = {
  data: HeartBeatUpdateInput;
  where: HeartBeatWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateManyBlockIndexesArgs = {
  data: BlockIndexUpdateManyMutationInput;
  where?: Maybe<BlockIndexWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyBlockNumbersArgs = {
  data: BlockNumberUpdateManyMutationInput;
  where?: Maybe<BlockNumberWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyBountiesArgs = {
  data: BountyUpdateManyMutationInput;
  where?: Maybe<BountyWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyBountyStatusesArgs = {
  data: BountyStatusUpdateManyMutationInput;
  where?: Maybe<BountyStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyCouncilMembersArgs = {
  data: CouncilMemberUpdateManyMutationInput;
  where?: Maybe<CouncilMemberWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyErasArgs = {
  data: EraUpdateManyMutationInput;
  where?: Maybe<EraWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyHeartBeatsArgs = {
  data: HeartBeatUpdateManyMutationInput;
  where?: Maybe<HeartBeatWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyMotionProposalArgumentsArgs = {
  data: MotionProposalArgumentUpdateManyMutationInput;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyMotionStatusesArgs = {
  data: MotionStatusUpdateManyMutationInput;
  where?: Maybe<MotionStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyMotionsArgs = {
  data: MotionUpdateManyMutationInput;
  where?: Maybe<MotionWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyNominationsArgs = {
  data: NominationUpdateManyMutationInput;
  where?: Maybe<NominationWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyOfflineValidatorsArgs = {
  data: OfflineValidatorUpdateManyMutationInput;
  where?: Maybe<OfflineValidatorWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyPreimageArgumentsArgs = {
  data: PreimageArgumentUpdateManyMutationInput;
  where?: Maybe<PreimageArgumentWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyPreimageStatusesArgs = {
  data: PreimageStatusUpdateManyMutationInput;
  where?: Maybe<PreimageStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyPreimagesArgs = {
  data: PreimageUpdateManyMutationInput;
  where?: Maybe<PreimageWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyProposalStatusesArgs = {
  data: ProposalStatusUpdateManyMutationInput;
  where?: Maybe<ProposalStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyProposalsArgs = {
  data: ProposalUpdateManyMutationInput;
  where?: Maybe<ProposalWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyReferendumStatusesArgs = {
  data: ReferendumStatusUpdateManyMutationInput;
  where?: Maybe<ReferendumStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyReferendumsArgs = {
  data: ReferendumUpdateManyMutationInput;
  where?: Maybe<ReferendumWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyRewardsArgs = {
  data: RewardUpdateManyMutationInput;
  where?: Maybe<RewardWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManySessionsArgs = {
  data: SessionUpdateManyMutationInput;
  where?: Maybe<SessionWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManySlashingsArgs = {
  data: SlashingUpdateManyMutationInput;
  where?: Maybe<SlashingWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyStakesArgs = {
  data: StakeUpdateManyMutationInput;
  where?: Maybe<StakeWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyTipStatusesArgs = {
  data: TipStatusUpdateManyMutationInput;
  where?: Maybe<TipStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyTipsArgs = {
  data: TipUpdateManyMutationInput;
  where?: Maybe<TipWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyTotalIssuancesArgs = {
  data: TotalIssuanceUpdateManyMutationInput;
  where?: Maybe<TotalIssuanceWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyTreasurySpendProposalsArgs = {
  data: TreasurySpendProposalUpdateManyMutationInput;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyTreasuryStatusesArgs = {
  data: TreasuryStatusUpdateManyMutationInput;
  where?: Maybe<TreasuryStatusWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyValidatorsArgs = {
  data: ValidatorUpdateManyMutationInput;
  where?: Maybe<ValidatorWhereInput>;
};


/** mutation root */
export type Mutation_RootUpdateMotionArgs = {
  data: MotionUpdateInput;
  where: MotionWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentUpdateInput;
  where: MotionProposalArgumentWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateMotionStatusArgs = {
  data: MotionStatusUpdateInput;
  where: MotionStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateNominationArgs = {
  data: NominationUpdateInput;
  where: NominationWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateOfflineValidatorArgs = {
  data: OfflineValidatorUpdateInput;
  where: OfflineValidatorWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdatePreimageArgs = {
  data: PreimageUpdateInput;
  where: PreimageWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdatePreimageArgumentArgs = {
  data: PreimageArgumentUpdateInput;
  where: PreimageArgumentWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdatePreimageStatusArgs = {
  data: PreimageStatusUpdateInput;
  where: PreimageStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateProposalArgs = {
  data: ProposalUpdateInput;
  where: ProposalWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateProposalStatusArgs = {
  data: ProposalStatusUpdateInput;
  where: ProposalStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateReferendumArgs = {
  data: ReferendumUpdateInput;
  where: ReferendumWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateReferendumStatusArgs = {
  data: ReferendumStatusUpdateInput;
  where: ReferendumStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateRewardArgs = {
  data: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateSlashingArgs = {
  data: SlashingUpdateInput;
  where: SlashingWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateStakeArgs = {
  data: StakeUpdateInput;
  where: StakeWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateTipArgs = {
  data: TipUpdateInput;
  where: TipWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateTipStatusArgs = {
  data: TipStatusUpdateInput;
  where: TipStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateTotalIssuanceArgs = {
  data: TotalIssuanceUpdateInput;
  where: TotalIssuanceWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalUpdateInput;
  where: TreasurySpendProposalWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateTreasuryStatusArgs = {
  data: TreasuryStatusUpdateInput;
  where: TreasuryStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdateValidatorArgs = {
  data: ValidatorUpdateInput;
  where: ValidatorWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_ReactionsArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>;
  _set?: Maybe<Comment_Reactions_Set_Input>;
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Reactions_By_PkArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>;
  _set?: Maybe<Comment_Reactions_Set_Input>;
  pk_columns: Comment_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onchain_LinksArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>;
  _set?: Maybe<Onchain_Links_Set_Input>;
  where: Onchain_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onchain_Links_By_PkArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>;
  _set?: Maybe<Onchain_Links_Set_Input>;
  pk_columns: Onchain_Links_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PollArgs = {
  _inc?: Maybe<Poll_Inc_Input>;
  _set?: Maybe<Poll_Set_Input>;
  where: Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_By_PkArgs = {
  _inc?: Maybe<Poll_Inc_Input>;
  _set?: Maybe<Poll_Set_Input>;
  pk_columns: Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_VotesArgs = {
  _inc?: Maybe<Poll_Votes_Inc_Input>;
  _set?: Maybe<Poll_Votes_Set_Input>;
  where: Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poll_Votes_By_PkArgs = {
  _inc?: Maybe<Poll_Votes_Inc_Input>;
  _set?: Maybe<Poll_Votes_Set_Input>;
  pk_columns: Poll_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ReactionsArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>;
  _set?: Maybe<Post_Reactions_Set_Input>;
  where: Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reactions_By_PkArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>;
  _set?: Maybe<Post_Reactions_Set_Input>;
  pk_columns: Post_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TopicsArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>;
  _set?: Maybe<Post_Topics_Set_Input>;
  where: Post_Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Topics_By_PkArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>;
  _set?: Maybe<Post_Topics_Set_Input>;
  pk_columns: Post_Topics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TypesArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>;
  _set?: Maybe<Post_Types_Set_Input>;
  where: Post_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Types_By_PkArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>;
  _set?: Maybe<Post_Types_Set_Input>;
  pk_columns: Post_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpsertBlockIndexArgs = {
  create: BlockIndexCreateInput;
  update: BlockIndexUpdateInput;
  where: BlockIndexWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertBlockNumberArgs = {
  create: BlockNumberCreateInput;
  update: BlockNumberUpdateInput;
  where: BlockNumberWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertBountyArgs = {
  create: BountyCreateInput;
  update: BountyUpdateInput;
  where: BountyWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertBountyStatusArgs = {
  create: BountyStatusCreateInput;
  update: BountyStatusUpdateInput;
  where: BountyStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertCouncilArgs = {
  create: CouncilCreateInput;
  update: CouncilUpdateInput;
  where: CouncilWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertCouncilMemberArgs = {
  create: CouncilMemberCreateInput;
  update: CouncilMemberUpdateInput;
  where: CouncilMemberWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertEraArgs = {
  create: EraCreateInput;
  update: EraUpdateInput;
  where: EraWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertHeartBeatArgs = {
  create: HeartBeatCreateInput;
  update: HeartBeatUpdateInput;
  where: HeartBeatWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertMotionArgs = {
  create: MotionCreateInput;
  update: MotionUpdateInput;
  where: MotionWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertMotionProposalArgumentArgs = {
  create: MotionProposalArgumentCreateInput;
  update: MotionProposalArgumentUpdateInput;
  where: MotionProposalArgumentWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertMotionStatusArgs = {
  create: MotionStatusCreateInput;
  update: MotionStatusUpdateInput;
  where: MotionStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertNominationArgs = {
  create: NominationCreateInput;
  update: NominationUpdateInput;
  where: NominationWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertOfflineValidatorArgs = {
  create: OfflineValidatorCreateInput;
  update: OfflineValidatorUpdateInput;
  where: OfflineValidatorWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertPreimageArgs = {
  create: PreimageCreateInput;
  update: PreimageUpdateInput;
  where: PreimageWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertPreimageArgumentArgs = {
  create: PreimageArgumentCreateInput;
  update: PreimageArgumentUpdateInput;
  where: PreimageArgumentWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertPreimageStatusArgs = {
  create: PreimageStatusCreateInput;
  update: PreimageStatusUpdateInput;
  where: PreimageStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertProposalArgs = {
  create: ProposalCreateInput;
  update: ProposalUpdateInput;
  where: ProposalWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertProposalStatusArgs = {
  create: ProposalStatusCreateInput;
  update: ProposalStatusUpdateInput;
  where: ProposalStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertReferendumArgs = {
  create: ReferendumCreateInput;
  update: ReferendumUpdateInput;
  where: ReferendumWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertReferendumStatusArgs = {
  create: ReferendumStatusCreateInput;
  update: ReferendumStatusUpdateInput;
  where: ReferendumStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertRewardArgs = {
  create: RewardCreateInput;
  update: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertSlashingArgs = {
  create: SlashingCreateInput;
  update: SlashingUpdateInput;
  where: SlashingWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertStakeArgs = {
  create: StakeCreateInput;
  update: StakeUpdateInput;
  where: StakeWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertTipArgs = {
  create: TipCreateInput;
  update: TipUpdateInput;
  where: TipWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertTipStatusArgs = {
  create: TipStatusCreateInput;
  update: TipStatusUpdateInput;
  where: TipStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertTotalIssuanceArgs = {
  create: TotalIssuanceCreateInput;
  update: TotalIssuanceUpdateInput;
  where: TotalIssuanceWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertTreasurySpendProposalArgs = {
  create: TreasurySpendProposalCreateInput;
  update: TreasurySpendProposalUpdateInput;
  where: TreasurySpendProposalWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertTreasuryStatusArgs = {
  create: TreasuryStatusCreateInput;
  update: TreasuryStatusUpdateInput;
  where: TreasuryStatusWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootUpsertValidatorArgs = {
  create: ValidatorCreateInput;
  update: ValidatorUpdateInput;
  where: ValidatorWhereUniqueInput;
};


/** mutation root */
export type Mutation_RootVerifyEmailArgs = {
  token: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Nomination = Node & {
  __typename?: 'Nomination';
  id: Scalars['ID'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  session: Session;
  stakedAmount: Scalars['String'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
};

/** A connection to a list of items. */
export type NominationConnection = {
  __typename?: 'NominationConnection';
  aggregate: AggregateNomination;
  /** A list of edges. */
  edges: Array<Maybe<NominationEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NominationCreateInput = {
  id?: Maybe<Scalars['ID']>;
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  session: SessionCreateOneInput;
  stakedAmount: Scalars['String'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
};

/** An edge in a connection. */
export type NominationEdge = {
  __typename?: 'NominationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Nomination;
};

export enum NominationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NominatorControllerAsc = 'nominatorController_ASC',
  NominatorControllerDesc = 'nominatorController_DESC',
  NominatorStashAsc = 'nominatorStash_ASC',
  NominatorStashDesc = 'nominatorStash_DESC',
  StakedAmountAsc = 'stakedAmount_ASC',
  StakedAmountDesc = 'stakedAmount_DESC',
  ValidatorControllerAsc = 'validatorController_ASC',
  ValidatorControllerDesc = 'validatorController_DESC',
  ValidatorStashAsc = 'validatorStash_ASC',
  ValidatorStashDesc = 'validatorStash_DESC'
}

export type NominationPreviousValues = {
  __typename?: 'NominationPreviousValues';
  id: Scalars['ID'];
  nominatorController: Scalars['String'];
  nominatorStash: Scalars['String'];
  stakedAmount: Scalars['String'];
  validatorController: Scalars['String'];
  validatorStash: Scalars['String'];
};

export type NominationSubscriptionPayload = {
  __typename?: 'NominationSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Nomination>;
  previousValues?: Maybe<NominationPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type NominationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NominationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<NominationWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type NominationUpdateInput = {
  nominatorController?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  session?: Maybe<SessionUpdateOneRequiredInput>;
  stakedAmount?: Maybe<Scalars['String']>;
  validatorController?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
};

export type NominationUpdateManyMutationInput = {
  nominatorController?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  stakedAmount?: Maybe<Scalars['String']>;
  validatorController?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
};

export type NominationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NominationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NominationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NominationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  nominatorController?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nominatorController_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nominatorController_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nominatorController_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nominatorController_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nominatorController_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nominatorController_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nominatorController_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nominatorController_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nominatorController_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nominatorController_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nominatorController_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nominatorController_starts_with?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nominatorStash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nominatorStash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nominatorStash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nominatorStash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nominatorStash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nominatorStash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nominatorStash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nominatorStash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nominatorStash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nominatorStash_starts_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
  stakedAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stakedAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stakedAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stakedAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stakedAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stakedAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stakedAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stakedAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stakedAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stakedAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stakedAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stakedAmount_starts_with?: Maybe<Scalars['String']>;
  validatorController?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorController_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorController_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorController_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorController_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorController_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorController_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorController_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorController_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorController_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorController_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorController_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorController_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorController_starts_with?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorStash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorStash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorStash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorStash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorStash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorStash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorStash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorStash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorStash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorStash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorStash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorStash_starts_with?: Maybe<Scalars['String']>;
};

export type NominationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type NotificationPreferences = {
  __typename?: 'NotificationPreferences';
  newProposal?: Maybe<Scalars['Boolean']>;
  ownProposal?: Maybe<Scalars['Boolean']>;
  postCreated?: Maybe<Scalars['Boolean']>;
  postParticipated?: Maybe<Scalars['Boolean']>;
};

export type NotificationPreferencesInput = {
  newProposal?: Maybe<Scalars['Boolean']>;
  ownProposal?: Maybe<Scalars['Boolean']>;
  postCreated?: Maybe<Scalars['Boolean']>;
  postParticipated?: Maybe<Scalars['Boolean']>;
};

export type OfflineValidator = Node & {
  __typename?: 'OfflineValidator';
  id: Scalars['ID'];
  others: Array<Scalars['Json']>;
  own: Scalars['String'];
  sessionIndex: Session;
  total: Scalars['String'];
  validatorId: Scalars['String'];
};

/** A connection to a list of items. */
export type OfflineValidatorConnection = {
  __typename?: 'OfflineValidatorConnection';
  aggregate: AggregateOfflineValidator;
  /** A list of edges. */
  edges: Array<Maybe<OfflineValidatorEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OfflineValidatorCreateInput = {
  id?: Maybe<Scalars['ID']>;
  others?: Maybe<OfflineValidatorCreateothersInput>;
  own: Scalars['String'];
  sessionIndex: SessionCreateOneInput;
  total: Scalars['String'];
  validatorId: Scalars['String'];
};

export type OfflineValidatorCreateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>;
};

/** An edge in a connection. */
export type OfflineValidatorEdge = {
  __typename?: 'OfflineValidatorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OfflineValidator;
};

export enum OfflineValidatorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OwnAsc = 'own_ASC',
  OwnDesc = 'own_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  ValidatorIdAsc = 'validatorId_ASC',
  ValidatorIdDesc = 'validatorId_DESC'
}

export type OfflineValidatorPreviousValues = {
  __typename?: 'OfflineValidatorPreviousValues';
  id: Scalars['ID'];
  others: Array<Scalars['Json']>;
  own: Scalars['String'];
  total: Scalars['String'];
  validatorId: Scalars['String'];
};

export type OfflineValidatorSubscriptionPayload = {
  __typename?: 'OfflineValidatorSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<OfflineValidator>;
  previousValues?: Maybe<OfflineValidatorPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type OfflineValidatorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<OfflineValidatorWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type OfflineValidatorUpdateInput = {
  others?: Maybe<OfflineValidatorUpdateothersInput>;
  own?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
  total?: Maybe<Scalars['String']>;
  validatorId?: Maybe<Scalars['String']>;
};

export type OfflineValidatorUpdateManyMutationInput = {
  others?: Maybe<OfflineValidatorUpdateothersInput>;
  own?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  validatorId?: Maybe<Scalars['String']>;
};

export type OfflineValidatorUpdateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>;
};

export type OfflineValidatorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OfflineValidatorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OfflineValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  own?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  own_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  own_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  own_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  own_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  own_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  own_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  own_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  own_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  own_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  own_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  own_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  own_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  own_starts_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
  total?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  total_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  total_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  total_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  total_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  total_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  total_starts_with?: Maybe<Scalars['String']>;
  validatorId?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorId_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorId_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorId_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorId_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorId_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorId_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorId_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorId_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorId_starts_with?: Maybe<Scalars['String']>;
};

export type OfflineValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_Links = {
  __typename?: 'onchain_links';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** Remote relationship field */
  onchain_bounty: Array<Maybe<Bounty>>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_motion: Array<Maybe<Motion>>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_proposal: Array<Maybe<Proposal>>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_referendum: Array<Maybe<Referendum>>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_tip: Array<Maybe<Tip>>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  onchain_treasury_spend_proposal: Array<Maybe<TreasurySpendProposal>>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  proposer_address: Scalars['String'];
};


/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_BountyArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Bounty>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_MotionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_ReferendumArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_TipArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Tip>;
};


/**
 * on chain proposal created automatically by chain-db-watcher
 * 
 * 
 * columns and relationships of "onchain_links"
 */
export type Onchain_LinksOnchain_Treasury_Spend_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal>;
};

/** aggregated selection of "onchain_links" */
export type Onchain_Links_Aggregate = {
  __typename?: 'onchain_links_aggregate';
  aggregate?: Maybe<Onchain_Links_Aggregate_Fields>;
  nodes: Array<Onchain_Links>;
};

/** aggregate fields of "onchain_links" */
export type Onchain_Links_Aggregate_Fields = {
  __typename?: 'onchain_links_aggregate_fields';
  avg?: Maybe<Onchain_Links_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Onchain_Links_Max_Fields>;
  min?: Maybe<Onchain_Links_Min_Fields>;
  stddev?: Maybe<Onchain_Links_Stddev_Fields>;
  stddev_pop?: Maybe<Onchain_Links_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onchain_Links_Stddev_Samp_Fields>;
  sum?: Maybe<Onchain_Links_Sum_Fields>;
  var_pop?: Maybe<Onchain_Links_Var_Pop_Fields>;
  var_samp?: Maybe<Onchain_Links_Var_Samp_Fields>;
  variance?: Maybe<Onchain_Links_Variance_Fields>;
};


/** aggregate fields of "onchain_links" */
export type Onchain_Links_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onchain_Links_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "onchain_links" */
export type Onchain_Links_Aggregate_Order_By = {
  avg?: Maybe<Onchain_Links_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Onchain_Links_Max_Order_By>;
  min?: Maybe<Onchain_Links_Min_Order_By>;
  stddev?: Maybe<Onchain_Links_Stddev_Order_By>;
  stddev_pop?: Maybe<Onchain_Links_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Onchain_Links_Stddev_Samp_Order_By>;
  sum?: Maybe<Onchain_Links_Sum_Order_By>;
  var_pop?: Maybe<Onchain_Links_Var_Pop_Order_By>;
  var_samp?: Maybe<Onchain_Links_Var_Samp_Order_By>;
  variance?: Maybe<Onchain_Links_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onchain_links" */
export type Onchain_Links_Arr_Rel_Insert_Input = {
  data: Array<Onchain_Links_Insert_Input>;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};

/** aggregate avg on columns */
export type Onchain_Links_Avg_Fields = {
  __typename?: 'onchain_links_avg_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "onchain_links" */
export type Onchain_Links_Avg_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onchain_links". All fields are combined with a logical 'AND'. */
export type Onchain_Links_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>;
  _not?: Maybe<Onchain_Links_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  onchain_bounty_id?: Maybe<Int_Comparison_Exp>;
  onchain_motion_id?: Maybe<Int_Comparison_Exp>;
  onchain_proposal_id?: Maybe<Int_Comparison_Exp>;
  onchain_referendum_id?: Maybe<Int_Comparison_Exp>;
  onchain_tip_id?: Maybe<String_Comparison_Exp>;
  onchain_treasury_proposal_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onchain_links" */
export enum Onchain_Links_Constraint {
  /** unique or primary key constraint */
  OnchainLinksOnchainBountyIdKey = 'onchain_links_onchain_bounty_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainMotionIdKey = 'onchain_links_onchain_motion_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainReferendumIdKey = 'onchain_links_onchain_referendum_id_key',
  /** unique or primary key constraint */
  OnchainLinksOnchainTipIdKey = 'onchain_links_onchain_tip_id_key',
  /** unique or primary key constraint */
  OnchainProposalsChainDbIdKey = 'onchain_proposals_chain_db_id_key',
  /** unique or primary key constraint */
  ProposalsPkey = 'proposals_pkey',
  /** unique or primary key constraint */
  ProposalsPostIdKey = 'proposals_post_id_key'
}

/** input type for incrementing integer column in table "onchain_links" */
export type Onchain_Links_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "onchain_links" */
export type Onchain_Links_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Onchain_Links_Max_Fields = {
  __typename?: 'onchain_links_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "onchain_links" */
export type Onchain_Links_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tip_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Onchain_Links_Min_Fields = {
  __typename?: 'onchain_links_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "onchain_links" */
export type Onchain_Links_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tip_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "onchain_links" */
export type Onchain_Links_Mutation_Response = {
  __typename?: 'onchain_links_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Onchain_Links>;
};

/** input type for inserting object relation for remote table "onchain_links" */
export type Onchain_Links_Obj_Rel_Insert_Input = {
  data: Onchain_Links_Insert_Input;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};

/** on conflict condition type for table "onchain_links" */
export type Onchain_Links_On_Conflict = {
  constraint: Onchain_Links_Constraint;
  update_columns: Array<Onchain_Links_Update_Column>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};

/** ordering options when selecting data from "onchain_links" */
export type Onchain_Links_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_tip_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

/** primary key columns input for table: "onchain_links" */
export type Onchain_Links_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "onchain_links" */
export enum Onchain_Links_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OnchainBountyId = 'onchain_bounty_id',
  /** column name */
  OnchainMotionId = 'onchain_motion_id',
  /** column name */
  OnchainProposalId = 'onchain_proposal_id',
  /** column name */
  OnchainReferendumId = 'onchain_referendum_id',
  /** column name */
  OnchainTipId = 'onchain_tip_id',
  /** column name */
  OnchainTreasuryProposalId = 'onchain_treasury_proposal_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProposerAddress = 'proposer_address'
}

/** input type for updating data in table "onchain_links" */
export type Onchain_Links_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_tip_id?: Maybe<Scalars['String']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Onchain_Links_Stddev_Fields = {
  __typename?: 'onchain_links_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "onchain_links" */
export type Onchain_Links_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onchain_Links_Stddev_Pop_Fields = {
  __typename?: 'onchain_links_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "onchain_links" */
export type Onchain_Links_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onchain_Links_Stddev_Samp_Fields = {
  __typename?: 'onchain_links_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "onchain_links" */
export type Onchain_Links_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Onchain_Links_Sum_Fields = {
  __typename?: 'onchain_links_sum_fields';
  id?: Maybe<Scalars['Int']>;
  onchain_bounty_id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "onchain_links" */
export type Onchain_Links_Sum_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "onchain_links" */
export enum Onchain_Links_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OnchainBountyId = 'onchain_bounty_id',
  /** column name */
  OnchainMotionId = 'onchain_motion_id',
  /** column name */
  OnchainProposalId = 'onchain_proposal_id',
  /** column name */
  OnchainReferendumId = 'onchain_referendum_id',
  /** column name */
  OnchainTipId = 'onchain_tip_id',
  /** column name */
  OnchainTreasuryProposalId = 'onchain_treasury_proposal_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProposerAddress = 'proposer_address'
}

/** aggregate var_pop on columns */
export type Onchain_Links_Var_Pop_Fields = {
  __typename?: 'onchain_links_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "onchain_links" */
export type Onchain_Links_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onchain_Links_Var_Samp_Fields = {
  __typename?: 'onchain_links_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "onchain_links" */
export type Onchain_Links_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Onchain_Links_Variance_Fields = {
  __typename?: 'onchain_links_variance_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_bounty_id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "onchain_links" */
export type Onchain_Links_Variance_Order_By = {
  id?: Maybe<Order_By>;
  onchain_bounty_id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** columns and relationships of "poll" */
export type Poll = {
  __typename?: 'poll';
  block_end: Scalars['Int'];
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An array relationship */
  poll_votes: Array<Poll_Votes>;
  /** An aggregated array relationship */
  poll_votes_aggregate: Poll_Votes_Aggregate;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "poll" */
export type PollPoll_VotesArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** columns and relationships of "poll" */
export type PollPoll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};

/** aggregated selection of "poll" */
export type Poll_Aggregate = {
  __typename?: 'poll_aggregate';
  aggregate?: Maybe<Poll_Aggregate_Fields>;
  nodes: Array<Poll>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_Fields = {
  __typename?: 'poll_aggregate_fields';
  avg?: Maybe<Poll_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Max_Fields>;
  min?: Maybe<Poll_Min_Fields>;
  stddev?: Maybe<Poll_Stddev_Fields>;
  stddev_pop?: Maybe<Poll_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poll_Stddev_Samp_Fields>;
  sum?: Maybe<Poll_Sum_Fields>;
  var_pop?: Maybe<Poll_Var_Pop_Fields>;
  var_samp?: Maybe<Poll_Var_Samp_Fields>;
  variance?: Maybe<Poll_Variance_Fields>;
};


/** aggregate fields of "poll" */
export type Poll_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll" */
export type Poll_Aggregate_Order_By = {
  avg?: Maybe<Poll_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Max_Order_By>;
  min?: Maybe<Poll_Min_Order_By>;
  stddev?: Maybe<Poll_Stddev_Order_By>;
  stddev_pop?: Maybe<Poll_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Poll_Stddev_Samp_Order_By>;
  sum?: Maybe<Poll_Sum_Order_By>;
  var_pop?: Maybe<Poll_Var_Pop_Order_By>;
  var_samp?: Maybe<Poll_Var_Samp_Order_By>;
  variance?: Maybe<Poll_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poll" */
export type Poll_Arr_Rel_Insert_Input = {
  data: Array<Poll_Insert_Input>;
  on_conflict?: Maybe<Poll_On_Conflict>;
};

/** aggregate avg on columns */
export type Poll_Avg_Fields = {
  __typename?: 'poll_avg_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "poll" */
export type Poll_Avg_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poll". All fields are combined with a logical 'AND'. */
export type Poll_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Bool_Exp>>>;
  _not?: Maybe<Poll_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Bool_Exp>>>;
  block_end?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  poll_votes?: Maybe<Poll_Votes_Bool_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll" */
export enum Poll_Constraint {
  /** unique or primary key constraint */
  PollPkey = 'poll_pkey'
}

/** input type for incrementing integer column in table "poll" */
export type Poll_Inc_Input = {
  block_end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "poll" */
export type Poll_Insert_Input = {
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_votes?: Maybe<Poll_Votes_Arr_Rel_Insert_Input>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Poll_Max_Fields = {
  __typename?: 'poll_max_fields';
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "poll" */
export type Poll_Max_Order_By = {
  block_end?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Min_Fields = {
  __typename?: 'poll_min_fields';
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "poll" */
export type Poll_Min_Order_By = {
  block_end?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll" */
export type Poll_Mutation_Response = {
  __typename?: 'poll_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll>;
};

/** input type for inserting object relation for remote table "poll" */
export type Poll_Obj_Rel_Insert_Input = {
  data: Poll_Insert_Input;
  on_conflict?: Maybe<Poll_On_Conflict>;
};

/** on conflict condition type for table "poll" */
export type Poll_On_Conflict = {
  constraint: Poll_Constraint;
  update_columns: Array<Poll_Update_Column>;
  where?: Maybe<Poll_Bool_Exp>;
};

/** ordering options when selecting data from "poll" */
export type Poll_Order_By = {
  block_end?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_votes_aggregate?: Maybe<Poll_Votes_Aggregate_Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "poll" */
export type Poll_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "poll" */
export enum Poll_Select_Column {
  /** column name */
  BlockEnd = 'block_end',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "poll" */
export type Poll_Set_Input = {
  block_end?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Poll_Stddev_Fields = {
  __typename?: 'poll_stddev_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "poll" */
export type Poll_Stddev_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poll_Stddev_Pop_Fields = {
  __typename?: 'poll_stddev_pop_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "poll" */
export type Poll_Stddev_Pop_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poll_Stddev_Samp_Fields = {
  __typename?: 'poll_stddev_samp_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "poll" */
export type Poll_Stddev_Samp_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Poll_Sum_Fields = {
  __typename?: 'poll_sum_fields';
  block_end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "poll" */
export type Poll_Sum_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "poll" */
export enum Poll_Update_Column {
  /** column name */
  BlockEnd = 'block_end',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Poll_Var_Pop_Fields = {
  __typename?: 'poll_var_pop_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "poll" */
export type Poll_Var_Pop_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poll_Var_Samp_Fields = {
  __typename?: 'poll_var_samp_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "poll" */
export type Poll_Var_Samp_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Poll_Variance_Fields = {
  __typename?: 'poll_variance_fields';
  block_end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "poll" */
export type Poll_Variance_Order_By = {
  block_end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "poll_votes" */
export type Poll_Votes = {
  __typename?: 'poll_votes';
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  poll: Poll;
  poll_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['Int'];
  vote: Scalars['bpchar'];
  /** Remote relationship field */
  voter?: Maybe<User>;
};

/** aggregated selection of "poll_votes" */
export type Poll_Votes_Aggregate = {
  __typename?: 'poll_votes_aggregate';
  aggregate?: Maybe<Poll_Votes_Aggregate_Fields>;
  nodes: Array<Poll_Votes>;
};

/** aggregate fields of "poll_votes" */
export type Poll_Votes_Aggregate_Fields = {
  __typename?: 'poll_votes_aggregate_fields';
  avg?: Maybe<Poll_Votes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Poll_Votes_Max_Fields>;
  min?: Maybe<Poll_Votes_Min_Fields>;
  stddev?: Maybe<Poll_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Poll_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poll_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Poll_Votes_Sum_Fields>;
  var_pop?: Maybe<Poll_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Poll_Votes_Var_Samp_Fields>;
  variance?: Maybe<Poll_Votes_Variance_Fields>;
};


/** aggregate fields of "poll_votes" */
export type Poll_Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll_votes" */
export type Poll_Votes_Aggregate_Order_By = {
  avg?: Maybe<Poll_Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Votes_Max_Order_By>;
  min?: Maybe<Poll_Votes_Min_Order_By>;
  stddev?: Maybe<Poll_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Poll_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Poll_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Poll_Votes_Sum_Order_By>;
  var_pop?: Maybe<Poll_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Poll_Votes_Var_Samp_Order_By>;
  variance?: Maybe<Poll_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poll_votes" */
export type Poll_Votes_Arr_Rel_Insert_Input = {
  data: Array<Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Poll_Votes_Avg_Fields = {
  __typename?: 'poll_votes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "poll_votes" */
export type Poll_Votes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poll_votes". All fields are combined with a logical 'AND'. */
export type Poll_Votes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Poll_Votes_Bool_Exp>>>;
  _not?: Maybe<Poll_Votes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Poll_Votes_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  vote?: Maybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll_votes" */
export enum Poll_Votes_Constraint {
  /** unique or primary key constraint */
  PollVotesPkey = 'poll_votes_pkey',
  /** unique or primary key constraint */
  PollVotesPollIdUserIdKey = 'poll_votes_poll_id_user_id_key'
}

/** input type for incrementing integer column in table "poll_votes" */
export type Poll_Votes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "poll_votes" */
export type Poll_Votes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll?: Maybe<Poll_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Poll_Votes_Max_Fields = {
  __typename?: 'poll_votes_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "poll_votes" */
export type Poll_Votes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Votes_Min_Fields = {
  __typename?: 'poll_votes_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "poll_votes" */
export type Poll_Votes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "poll_votes" */
export type Poll_Votes_Mutation_Response = {
  __typename?: 'poll_votes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Poll_Votes>;
};

/** input type for inserting object relation for remote table "poll_votes" */
export type Poll_Votes_Obj_Rel_Insert_Input = {
  data: Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Poll_Votes_On_Conflict>;
};

/** on conflict condition type for table "poll_votes" */
export type Poll_Votes_On_Conflict = {
  constraint: Poll_Votes_Constraint;
  update_columns: Array<Poll_Votes_Update_Column>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};

/** ordering options when selecting data from "poll_votes" */
export type Poll_Votes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  poll_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  vote?: Maybe<Order_By>;
};

/** primary key columns input for table: "poll_votes" */
export type Poll_Votes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "poll_votes" */
export enum Poll_Votes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "poll_votes" */
export type Poll_Votes_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Poll_Votes_Stddev_Fields = {
  __typename?: 'poll_votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "poll_votes" */
export type Poll_Votes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poll_Votes_Stddev_Pop_Fields = {
  __typename?: 'poll_votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "poll_votes" */
export type Poll_Votes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poll_Votes_Stddev_Samp_Fields = {
  __typename?: 'poll_votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "poll_votes" */
export type Poll_Votes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Poll_Votes_Sum_Fields = {
  __typename?: 'poll_votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "poll_votes" */
export type Poll_Votes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "poll_votes" */
export enum Poll_Votes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Vote = 'vote'
}

/** aggregate var_pop on columns */
export type Poll_Votes_Var_Pop_Fields = {
  __typename?: 'poll_votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "poll_votes" */
export type Poll_Votes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poll_Votes_Var_Samp_Fields = {
  __typename?: 'poll_votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "poll_votes" */
export type Poll_Votes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Poll_Votes_Variance_Fields = {
  __typename?: 'poll_votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "poll_votes" */
export type Poll_Votes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_last_update" */
export type Post_Last_Update = {
  __typename?: 'post_last_update';
  comment_id?: Maybe<Scalars['uuid']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "post_last_update" */
export type Post_Last_Update_Aggregate = {
  __typename?: 'post_last_update_aggregate';
  aggregate?: Maybe<Post_Last_Update_Aggregate_Fields>;
  nodes: Array<Post_Last_Update>;
};

/** aggregate fields of "post_last_update" */
export type Post_Last_Update_Aggregate_Fields = {
  __typename?: 'post_last_update_aggregate_fields';
  avg?: Maybe<Post_Last_Update_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Last_Update_Max_Fields>;
  min?: Maybe<Post_Last_Update_Min_Fields>;
  stddev?: Maybe<Post_Last_Update_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Last_Update_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Last_Update_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Last_Update_Sum_Fields>;
  var_pop?: Maybe<Post_Last_Update_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Last_Update_Var_Samp_Fields>;
  variance?: Maybe<Post_Last_Update_Variance_Fields>;
};


/** aggregate fields of "post_last_update" */
export type Post_Last_Update_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Last_Update_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_last_update" */
export type Post_Last_Update_Aggregate_Order_By = {
  avg?: Maybe<Post_Last_Update_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Last_Update_Max_Order_By>;
  min?: Maybe<Post_Last_Update_Min_Order_By>;
  stddev?: Maybe<Post_Last_Update_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Last_Update_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Last_Update_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Last_Update_Sum_Order_By>;
  var_pop?: Maybe<Post_Last_Update_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Last_Update_Var_Samp_Order_By>;
  variance?: Maybe<Post_Last_Update_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Last_Update_Avg_Fields = {
  __typename?: 'post_last_update_avg_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_last_update" */
export type Post_Last_Update_Avg_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_last_update". All fields are combined with a logical 'AND'. */
export type Post_Last_Update_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Last_Update_Bool_Exp>>>;
  _not?: Maybe<Post_Last_Update_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Last_Update_Bool_Exp>>>;
  comment_id?: Maybe<Uuid_Comparison_Exp>;
  last_update?: Maybe<Timestamptz_Comparison_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Last_Update_Max_Fields = {
  __typename?: 'post_last_update_max_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_last_update" */
export type Post_Last_Update_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Last_Update_Min_Fields = {
  __typename?: 'post_last_update_min_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_last_update" */
export type Post_Last_Update_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "post_last_update" */
export type Post_Last_Update_Order_By = {
  comment_id?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** select columns of table "post_last_update" */
export enum Post_Last_Update_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  PostId = 'post_id'
}

/** aggregate stddev on columns */
export type Post_Last_Update_Stddev_Fields = {
  __typename?: 'post_last_update_stddev_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_last_update" */
export type Post_Last_Update_Stddev_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Last_Update_Stddev_Pop_Fields = {
  __typename?: 'post_last_update_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_last_update" */
export type Post_Last_Update_Stddev_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Last_Update_Stddev_Samp_Fields = {
  __typename?: 'post_last_update_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_last_update" */
export type Post_Last_Update_Stddev_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Last_Update_Sum_Fields = {
  __typename?: 'post_last_update_sum_fields';
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_last_update" */
export type Post_Last_Update_Sum_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Last_Update_Var_Pop_Fields = {
  __typename?: 'post_last_update_var_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_last_update" */
export type Post_Last_Update_Var_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Last_Update_Var_Samp_Fields = {
  __typename?: 'post_last_update_var_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_last_update" */
export type Post_Last_Update_Var_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Last_Update_Variance_Fields = {
  __typename?: 'post_last_update_variance_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_last_update" */
export type Post_Last_Update_Variance_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_reactions" */
export type Post_Reactions = {
  __typename?: 'post_reactions';
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** Remote relationship field */
  reacting_user?: Maybe<User>;
  reaction: Scalars['bpchar'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "post_reactions" */
export type Post_Reactions_Aggregate = {
  __typename?: 'post_reactions_aggregate';
  aggregate?: Maybe<Post_Reactions_Aggregate_Fields>;
  nodes: Array<Post_Reactions>;
};

/** aggregate fields of "post_reactions" */
export type Post_Reactions_Aggregate_Fields = {
  __typename?: 'post_reactions_aggregate_fields';
  avg?: Maybe<Post_Reactions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Reactions_Max_Fields>;
  min?: Maybe<Post_Reactions_Min_Fields>;
  stddev?: Maybe<Post_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Reactions_Sum_Fields>;
  var_pop?: Maybe<Post_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Post_Reactions_Variance_Fields>;
};


/** aggregate fields of "post_reactions" */
export type Post_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_reactions" */
export type Post_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Post_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Reactions_Max_Order_By>;
  min?: Maybe<Post_Reactions_Min_Order_By>;
  stddev?: Maybe<Post_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Post_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Post_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_reactions" */
export type Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Reactions_Avg_Fields = {
  __typename?: 'post_reactions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_reactions" */
export type Post_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_reactions". All fields are combined with a logical 'AND'. */
export type Post_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Reactions_Bool_Exp>>>;
  _not?: Maybe<Post_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Reactions_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  reaction?: Maybe<Bpchar_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_reactions" */
export enum Post_Reactions_Constraint {
  /** unique or primary key constraint */
  PostReactionsPkey = 'post_reactions_pkey',
  /** unique or primary key constraint */
  PostReactionsPostIdUserIdReactionKey = 'post_reactions_post_id_user_id_reaction_key'
}

/** input type for incrementing integer column in table "post_reactions" */
export type Post_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_reactions" */
export type Post_Reactions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Post_Reactions_Max_Fields = {
  __typename?: 'post_reactions_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_reactions" */
export type Post_Reactions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Reactions_Min_Fields = {
  __typename?: 'post_reactions_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_reactions" */
export type Post_Reactions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_reactions" */
export type Post_Reactions_Mutation_Response = {
  __typename?: 'post_reactions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Reactions>;
};

/** input type for inserting object relation for remote table "post_reactions" */
export type Post_Reactions_Obj_Rel_Insert_Input = {
  data: Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};

/** on conflict condition type for table "post_reactions" */
export type Post_Reactions_On_Conflict = {
  constraint: Post_Reactions_Constraint;
  update_columns: Array<Post_Reactions_Update_Column>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};

/** ordering options when selecting data from "post_reactions" */
export type Post_Reactions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "post_reactions" */
export type Post_Reactions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_reactions" */
export enum Post_Reactions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "post_reactions" */
export type Post_Reactions_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Post_Reactions_Stddev_Fields = {
  __typename?: 'post_reactions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_reactions" */
export type Post_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Reactions_Stddev_Pop_Fields = {
  __typename?: 'post_reactions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_reactions" */
export type Post_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Reactions_Stddev_Samp_Fields = {
  __typename?: 'post_reactions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_reactions" */
export type Post_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Reactions_Sum_Fields = {
  __typename?: 'post_reactions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_reactions" */
export type Post_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "post_reactions" */
export enum Post_Reactions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Post_Reactions_Var_Pop_Fields = {
  __typename?: 'post_reactions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_reactions" */
export type Post_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Reactions_Var_Samp_Fields = {
  __typename?: 'post_reactions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_reactions" */
export type Post_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Reactions_Variance_Fields = {
  __typename?: 'post_reactions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_reactions" */
export type Post_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_topics" */
export type Post_Topics = {
  __typename?: 'post_topics';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate;
};


/** columns and relationships of "post_topics" */
export type Post_TopicsPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_topics" */
export type Post_TopicsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_topics" */
export type Post_Topics_Aggregate = {
  __typename?: 'post_topics_aggregate';
  aggregate?: Maybe<Post_Topics_Aggregate_Fields>;
  nodes: Array<Post_Topics>;
};

/** aggregate fields of "post_topics" */
export type Post_Topics_Aggregate_Fields = {
  __typename?: 'post_topics_aggregate_fields';
  avg?: Maybe<Post_Topics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Topics_Max_Fields>;
  min?: Maybe<Post_Topics_Min_Fields>;
  stddev?: Maybe<Post_Topics_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Topics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Topics_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Topics_Sum_Fields>;
  var_pop?: Maybe<Post_Topics_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Topics_Var_Samp_Fields>;
  variance?: Maybe<Post_Topics_Variance_Fields>;
};


/** aggregate fields of "post_topics" */
export type Post_Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Topics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_topics" */
export type Post_Topics_Aggregate_Order_By = {
  avg?: Maybe<Post_Topics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Topics_Max_Order_By>;
  min?: Maybe<Post_Topics_Min_Order_By>;
  stddev?: Maybe<Post_Topics_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Topics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Topics_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Topics_Sum_Order_By>;
  var_pop?: Maybe<Post_Topics_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Topics_Var_Samp_Order_By>;
  variance?: Maybe<Post_Topics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_topics" */
export type Post_Topics_Arr_Rel_Insert_Input = {
  data: Array<Post_Topics_Insert_Input>;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Topics_Avg_Fields = {
  __typename?: 'post_topics_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_topics" */
export type Post_Topics_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_topics". All fields are combined with a logical 'AND'. */
export type Post_Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>;
  _not?: Maybe<Post_Topics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
};

/** unique or primary key constraints on table "post_topics" */
export enum Post_Topics_Constraint {
  /** unique or primary key constraint */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer column in table "post_topics" */
export type Post_Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_topics" */
export type Post_Topics_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Topics_Max_Fields = {
  __typename?: 'post_topics_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_topics" */
export type Post_Topics_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Topics_Min_Fields = {
  __typename?: 'post_topics_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_topics" */
export type Post_Topics_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_topics" */
export type Post_Topics_Mutation_Response = {
  __typename?: 'post_topics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Topics>;
};

/** input type for inserting object relation for remote table "post_topics" */
export type Post_Topics_Obj_Rel_Insert_Input = {
  data: Post_Topics_Insert_Input;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};

/** on conflict condition type for table "post_topics" */
export type Post_Topics_On_Conflict = {
  constraint: Post_Topics_Constraint;
  update_columns: Array<Post_Topics_Update_Column>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};

/** ordering options when selecting data from "post_topics" */
export type Post_Topics_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: "post_topics" */
export type Post_Topics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_topics" */
export enum Post_Topics_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "post_topics" */
export type Post_Topics_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Topics_Stddev_Fields = {
  __typename?: 'post_topics_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_topics" */
export type Post_Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Topics_Stddev_Pop_Fields = {
  __typename?: 'post_topics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_topics" */
export type Post_Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Topics_Stddev_Samp_Fields = {
  __typename?: 'post_topics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_topics" */
export type Post_Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Topics_Sum_Fields = {
  __typename?: 'post_topics_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_topics" */
export type Post_Topics_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "post_topics" */
export enum Post_Topics_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Post_Topics_Var_Pop_Fields = {
  __typename?: 'post_topics_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_topics" */
export type Post_Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Topics_Var_Samp_Fields = {
  __typename?: 'post_topics_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_topics" */
export type Post_Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Topics_Variance_Fields = {
  __typename?: 'post_topics_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_topics" */
export type Post_Topics_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "post_types" */
export type Post_Types = {
  __typename?: 'post_types';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate;
};


/** columns and relationships of "post_types" */
export type Post_TypesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_types" */
export type Post_TypesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_types" */
export type Post_Types_Aggregate = {
  __typename?: 'post_types_aggregate';
  aggregate?: Maybe<Post_Types_Aggregate_Fields>;
  nodes: Array<Post_Types>;
};

/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_Fields = {
  __typename?: 'post_types_aggregate_fields';
  avg?: Maybe<Post_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Types_Max_Fields>;
  min?: Maybe<Post_Types_Min_Fields>;
  stddev?: Maybe<Post_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Types_Sum_Fields>;
  var_pop?: Maybe<Post_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Types_Var_Samp_Fields>;
  variance?: Maybe<Post_Types_Variance_Fields>;
};


/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_types" */
export type Post_Types_Aggregate_Order_By = {
  avg?: Maybe<Post_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Types_Max_Order_By>;
  min?: Maybe<Post_Types_Min_Order_By>;
  stddev?: Maybe<Post_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Types_Sum_Order_By>;
  var_pop?: Maybe<Post_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Types_Var_Samp_Order_By>;
  variance?: Maybe<Post_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_types" */
export type Post_Types_Arr_Rel_Insert_Input = {
  data: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Types_Avg_Fields = {
  __typename?: 'post_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_types" */
export type Post_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_types". All fields are combined with a logical 'AND'. */
export type Post_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>;
  _not?: Maybe<Post_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
};

/** unique or primary key constraints on table "post_types" */
export enum Post_Types_Constraint {
  /** unique or primary key constraint */
  PostTypesNameKey = 'post_types_name_key',
  /** unique or primary key constraint */
  PostTypesPkey = 'post_types_pkey'
}

/** input type for incrementing integer column in table "post_types" */
export type Post_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_types" */
export type Post_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Types_Max_Fields = {
  __typename?: 'post_types_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_types" */
export type Post_Types_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Types_Min_Fields = {
  __typename?: 'post_types_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_types" */
export type Post_Types_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_types" */
export type Post_Types_Mutation_Response = {
  __typename?: 'post_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Types>;
};

/** input type for inserting object relation for remote table "post_types" */
export type Post_Types_Obj_Rel_Insert_Input = {
  data: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

/** on conflict condition type for table "post_types" */
export type Post_Types_On_Conflict = {
  constraint: Post_Types_Constraint;
  update_columns: Array<Post_Types_Update_Column>;
  where?: Maybe<Post_Types_Bool_Exp>;
};

/** ordering options when selecting data from "post_types" */
export type Post_Types_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: "post_types" */
export type Post_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_types" */
export enum Post_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "post_types" */
export type Post_Types_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Types_Stddev_Fields = {
  __typename?: 'post_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_types" */
export type Post_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Types_Stddev_Pop_Fields = {
  __typename?: 'post_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_types" */
export type Post_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Types_Stddev_Samp_Fields = {
  __typename?: 'post_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_types" */
export type Post_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Types_Sum_Fields = {
  __typename?: 'post_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_types" */
export type Post_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "post_types" */
export enum Post_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Post_Types_Var_Pop_Fields = {
  __typename?: 'post_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_types" */
export type Post_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Types_Var_Samp_Fields = {
  __typename?: 'post_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_types" */
export type Post_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Types_Variance_Fields = {
  __typename?: 'post_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_types" */
export type Post_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  /** Remote relationship field */
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  last_update?: Maybe<Post_Last_Update>;
  /** An object relationship */
  onchain_link?: Maybe<Onchain_Links>;
  /** An array relationship */
  polls: Array<Poll>;
  /** An aggregated array relationship */
  polls_aggregate: Poll_Aggregate;
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregated array relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  title?: Maybe<Scalars['String']>;
  /** An object relationship */
  topic: Post_Topics;
  /** Define the main suject of the post */
  topic_id: Scalars['Int'];
  /** An object relationship */
  type: Post_Types;
  type_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPollsArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPolls_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
  stddev?: Maybe<Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Posts_Sum_Order_By>;
  var_pop?: Maybe<Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Posts_Var_Samp_Order_By>;
  variance?: Maybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_update?: Maybe<Post_Last_Update_Bool_Exp>;
  onchain_link?: Maybe<Onchain_Links_Bool_Exp>;
  polls?: Maybe<Poll_Bool_Exp>;
  post_reactions?: Maybe<Post_Reactions_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  topic?: Maybe<Post_Topics_Bool_Exp>;
  topic_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<Post_Types_Bool_Exp>;
  type_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing integer column in table "posts" */
export type Posts_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_link?: Maybe<Onchain_Links_Obj_Rel_Insert_Input>;
  polls?: Maybe<Poll_Arr_Rel_Insert_Input>;
  post_reactions?: Maybe<Post_Reactions_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Post_Topics_Obj_Rel_Insert_Input>;
  topic_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Post_Types_Obj_Rel_Insert_Input>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
  author_id?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_update?: Maybe<Post_Last_Update_Order_By>;
  onchain_link?: Maybe<Onchain_Links_Order_By>;
  polls_aggregate?: Maybe<Poll_Aggregate_Order_By>;
  post_reactions_aggregate?: Maybe<Post_Reactions_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  topic?: Maybe<Post_Topics_Order_By>;
  topic_id?: Maybe<Order_By>;
  type?: Maybe<Post_Types_Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Preimage = Node & {
  __typename?: 'Preimage';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<Motion>;
  preimageArguments?: Maybe<Array<PreimageArgument>>;
  preimageStatus?: Maybe<Array<PreimageStatus>>;
  proposal?: Maybe<Proposal>;
  referendum?: Maybe<Referendum>;
  section: Scalars['String'];
};


export type PreimagePreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


export type PreimagePreimageStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
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
  aggregate: AggregatePreimageArgument;
  /** A list of edges. */
  edges: Array<Maybe<PreimageArgumentEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PreimageArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  preimage: PreimageCreateOneWithoutPreimageArgumentsInput;
  value: Scalars['String'];
};

export type PreimageArgumentCreateManyWithoutPreimageInput = {
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>;
};

export type PreimageArgumentCreateWithoutPreimageInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

/** An edge in a connection. */
export type PreimageArgumentEdge = {
  __typename?: 'PreimageArgumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PreimageArgument;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageArgumentSubscriptionPayload = {
  __typename?: 'PreimageArgumentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PreimageArgument>;
  previousValues?: Maybe<PreimageArgumentPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type PreimageArgumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<PreimageArgumentWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type PreimageArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageArgumentsInput>;
  value?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>;
  delete?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PreimageArgumentScalarWhereInput>>;
  disconnect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  set?: Maybe<Array<PreimageArgumentWhereUniqueInput>>;
  update?: Maybe<Array<PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput>>;
  updateMany?: Maybe<Array<PreimageArgumentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput>>;
};

export type PreimageArgumentUpdateManyWithWhereNestedInput = {
  data: PreimageArgumentUpdateManyDataInput;
  where: PreimageArgumentScalarWhereInput;
};

export type PreimageArgumentUpdateWithoutPreimageDataInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput = {
  data: PreimageArgumentUpdateWithoutPreimageDataInput;
  where: PreimageArgumentWhereUniqueInput;
};

export type PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput = {
  create: PreimageArgumentCreateWithoutPreimageInput;
  update: PreimageArgumentUpdateWithoutPreimageDataInput;
  where: PreimageArgumentWhereUniqueInput;
};

export type PreimageArgumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageArgumentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type PreimageConnection = {
  __typename?: 'PreimageConnection';
  aggregate: AggregatePreimage;
  /** A list of edges. */
  edges: Array<Maybe<PreimageEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PreimageCreateInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
  section: Scalars['String'];
};

export type PreimageCreateOneWithoutMotionInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutMotionInput>;
};

export type PreimageCreateOneWithoutPreimageArgumentsInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>;
};

export type PreimageCreateOneWithoutPreimageStatusInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>;
};

export type PreimageCreateOneWithoutProposalInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutProposalInput>;
};

export type PreimageCreateOneWithoutReferendumInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutReferendumInput>;
};

export type PreimageCreateWithoutMotionInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
  section: Scalars['String'];
};

export type PreimageCreateWithoutPreimageArgumentsInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
  section: Scalars['String'];
};

export type PreimageCreateWithoutPreimageStatusInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
  section: Scalars['String'];
};

export type PreimageCreateWithoutProposalInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>;
  section: Scalars['String'];
};

export type PreimageCreateWithoutReferendumInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>;
  section: Scalars['String'];
};

/** An edge in a connection. */
export type PreimageEdge = {
  __typename?: 'PreimageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Preimage;
};

export enum PreimageOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type PreimagePreviousValues = {
  __typename?: 'PreimagePreviousValues';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
};

export type PreimageStatus = Node & {
  __typename?: 'PreimageStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  preimage: Preimage;
  status: Scalars['String'];
};

/** A connection to a list of items. */
export type PreimageStatusConnection = {
  __typename?: 'PreimageStatusConnection';
  aggregate: AggregatePreimageStatus;
  /** A list of edges. */
  edges: Array<Maybe<PreimageStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PreimageStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  preimage: PreimageCreateOneWithoutPreimageStatusInput;
  status: Scalars['String'];
};

export type PreimageStatusCreateManyWithoutPreimageInput = {
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>;
};

export type PreimageStatusCreateWithoutPreimageInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
};

/** An edge in a connection. */
export type PreimageStatusEdge = {
  __typename?: 'PreimageStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PreimageStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageStatusSubscriptionPayload = {
  __typename?: 'PreimageStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PreimageStatus>;
  previousValues?: Maybe<PreimageStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type PreimageStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<PreimageStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type PreimageStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageStatusInput>;
  status?: Maybe<Scalars['String']>;
};

export type PreimageStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>;
};

export type PreimageStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>;
};

export type PreimageStatusUpdateManyWithoutPreimageInput = {
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>;
  delete?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PreimageStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  set?: Maybe<Array<PreimageStatusWhereUniqueInput>>;
  update?: Maybe<Array<PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput>>;
  updateMany?: Maybe<Array<PreimageStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput>>;
};

export type PreimageStatusUpdateManyWithWhereNestedInput = {
  data: PreimageStatusUpdateManyDataInput;
  where: PreimageStatusScalarWhereInput;
};

export type PreimageStatusUpdateWithoutPreimageDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
};

export type PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput = {
  data: PreimageStatusUpdateWithoutPreimageDataInput;
  where: PreimageStatusWhereUniqueInput;
};

export type PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput = {
  create: PreimageStatusCreateWithoutPreimageInput;
  update: PreimageStatusUpdateWithoutPreimageDataInput;
  where: PreimageStatusWhereUniqueInput;
};

export type PreimageStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  preimage?: Maybe<PreimageWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PreimageSubscriptionPayload = {
  __typename?: 'PreimageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Preimage>;
  previousValues?: Maybe<PreimagePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type PreimageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<PreimageWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type PreimageUpdateInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
  section?: Maybe<Scalars['String']>;
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
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>;
  update?: Maybe<PreimageUpdateWithoutPreimageArgumentsDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutPreimageArgumentsInput>;
};

export type PreimageUpdateOneRequiredWithoutPreimageStatusInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>;
  update?: Maybe<PreimageUpdateWithoutPreimageStatusDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutPreimageStatusInput>;
};

export type PreimageUpdateOneWithoutMotionInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutMotionInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PreimageUpdateWithoutMotionDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutMotionInput>;
};

export type PreimageUpdateOneWithoutProposalInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutProposalInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PreimageUpdateWithoutProposalDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutProposalInput>;
};

export type PreimageUpdateOneWithoutReferendumInput = {
  connect?: Maybe<PreimageWhereUniqueInput>;
  create?: Maybe<PreimageCreateWithoutReferendumInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PreimageUpdateWithoutReferendumDataInput>;
  upsert?: Maybe<PreimageUpsertWithoutReferendumInput>;
};

export type PreimageUpdateWithoutMotionDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
  section?: Maybe<Scalars['String']>;
};

export type PreimageUpdateWithoutPreimageArgumentsDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
  section?: Maybe<Scalars['String']>;
};

export type PreimageUpdateWithoutPreimageStatusDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
  section?: Maybe<Scalars['String']>;
};

export type PreimageUpdateWithoutProposalDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>;
  section?: Maybe<Scalars['String']>;
};

export type PreimageUpdateWithoutReferendumDataInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>;
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>;
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>;
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>;
  section?: Maybe<Scalars['String']>;
};

export type PreimageUpsertWithoutMotionInput = {
  create: PreimageCreateWithoutMotionInput;
  update: PreimageUpdateWithoutMotionDataInput;
};

export type PreimageUpsertWithoutPreimageArgumentsInput = {
  create: PreimageCreateWithoutPreimageArgumentsInput;
  update: PreimageUpdateWithoutPreimageArgumentsDataInput;
};

export type PreimageUpsertWithoutPreimageStatusInput = {
  create: PreimageCreateWithoutPreimageStatusInput;
  update: PreimageUpdateWithoutPreimageStatusDataInput;
};

export type PreimageUpsertWithoutProposalInput = {
  create: PreimageCreateWithoutProposalInput;
  update: PreimageUpdateWithoutProposalDataInput;
};

export type PreimageUpsertWithoutReferendumInput = {
  create: PreimageCreateWithoutReferendumInput;
  update: PreimageUpdateWithoutReferendumDataInput;
};

export type PreimageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PreimageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PreimageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PreimageWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metaDescription_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metaDescription_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metaDescription_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metaDescription_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  method_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  method_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  method_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  method_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  method_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  method_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  method_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  method_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  method_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  method_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  method_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  method_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  method_starts_with?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionWhereInput>;
  preimageArguments_every?: Maybe<PreimageArgumentWhereInput>;
  preimageArguments_none?: Maybe<PreimageArgumentWhereInput>;
  preimageArguments_some?: Maybe<PreimageArgumentWhereInput>;
  preimageStatus_every?: Maybe<PreimageStatusWhereInput>;
  preimageStatus_none?: Maybe<PreimageStatusWhereInput>;
  preimageStatus_some?: Maybe<PreimageStatusWhereInput>;
  proposal?: Maybe<ProposalWhereInput>;
  referendum?: Maybe<ReferendumWhereInput>;
  section?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  section_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  section_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  section_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  section_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  section_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  section_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  section_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  section_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  section_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  section_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  section_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  section_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  section_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum PrismaDatabase {
  Default = 'default'
}

export type Proposal = {
  __typename?: 'Proposal';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  id: Scalars['Int'];
  preimage?: Maybe<Preimage>;
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  proposalStatus?: Maybe<Array<ProposalStatus>>;
};


export type ProposalProposalStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};

/** A connection to a list of items. */
export type ProposalConnection = {
  __typename?: 'ProposalConnection';
  aggregate: AggregateProposal;
  /** A list of edges. */
  edges: Array<Maybe<ProposalEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProposalCreateInput = {
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>;
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
  proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>;
};

export type ProposalCreateOneWithoutPreimageInput = {
  connect?: Maybe<ProposalWhereUniqueInput>;
  create?: Maybe<ProposalCreateWithoutPreimageInput>;
};

export type ProposalCreateOneWithoutProposalStatusInput = {
  connect?: Maybe<ProposalWhereUniqueInput>;
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>;
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
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>;
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
};

/** An edge in a connection. */
export type ProposalEdge = {
  __typename?: 'ProposalEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Proposal;
};

export enum ProposalOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ProposalIdAsc = 'proposalId_ASC',
  ProposalIdDesc = 'proposalId_DESC'
}

export type ProposalPreviousValues = {
  __typename?: 'ProposalPreviousValues';
  author: Scalars['String'];
  depositAmount: Scalars['String'];
  id: Scalars['Int'];
  preimageHash: Scalars['String'];
  proposalId: Scalars['Int'];
};

export type ProposalStatus = Node & {
  __typename?: 'ProposalStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  proposal: Proposal;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type ProposalStatusConnection = {
  __typename?: 'ProposalStatusConnection';
  aggregate: AggregateProposalStatus;
  /** A list of edges. */
  edges: Array<Maybe<ProposalStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProposalStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  proposal: ProposalCreateOneWithoutProposalStatusInput;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type ProposalStatusCreateManyWithoutProposalInput = {
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>;
};

export type ProposalStatusCreateWithoutProposalInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** An edge in a connection. */
export type ProposalStatusEdge = {
  __typename?: 'ProposalStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProposalStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type ProposalStatusSubscriptionPayload = {
  __typename?: 'ProposalStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ProposalStatus>;
  previousValues?: Maybe<ProposalStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ProposalStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ProposalStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ProposalStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  proposal?: Maybe<ProposalUpdateOneRequiredWithoutProposalStatusInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>;
  delete?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProposalStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  set?: Maybe<Array<ProposalStatusWhereUniqueInput>>;
  update?: Maybe<Array<ProposalStatusUpdateWithWhereUniqueWithoutProposalInput>>;
  updateMany?: Maybe<Array<ProposalStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ProposalStatusUpsertWithWhereUniqueWithoutProposalInput>>;
};

export type ProposalStatusUpdateManyWithWhereNestedInput = {
  data: ProposalStatusUpdateManyDataInput;
  where: ProposalStatusScalarWhereInput;
};

export type ProposalStatusUpdateWithoutProposalDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ProposalStatusUpdateWithWhereUniqueWithoutProposalInput = {
  data: ProposalStatusUpdateWithoutProposalDataInput;
  where: ProposalStatusWhereUniqueInput;
};

export type ProposalStatusUpsertWithWhereUniqueWithoutProposalInput = {
  create: ProposalStatusCreateWithoutProposalInput;
  update: ProposalStatusUpdateWithoutProposalDataInput;
  where: ProposalStatusWhereUniqueInput;
};

export type ProposalStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  proposal?: Maybe<ProposalWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ProposalSubscriptionPayload = {
  __typename?: 'ProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Proposal>;
  previousValues?: Maybe<ProposalPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ProposalWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ProposalUpdateInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>;
};

export type ProposalUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type ProposalUpdateOneRequiredWithoutProposalStatusInput = {
  connect?: Maybe<ProposalWhereUniqueInput>;
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>;
  update?: Maybe<ProposalUpdateWithoutProposalStatusDataInput>;
  upsert?: Maybe<ProposalUpsertWithoutProposalStatusInput>;
};

export type ProposalUpdateOneWithoutPreimageInput = {
  connect?: Maybe<ProposalWhereUniqueInput>;
  create?: Maybe<ProposalCreateWithoutPreimageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
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
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>;
  preimageHash?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type ProposalUpsertWithoutPreimageInput = {
  create: ProposalCreateWithoutPreimageInput;
  update: ProposalUpdateWithoutPreimageDataInput;
};

export type ProposalUpsertWithoutProposalStatusInput = {
  create: ProposalCreateWithoutProposalStatusInput;
  update: ProposalUpdateWithoutProposalStatusDataInput;
};

export type ProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  author_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  author_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  author_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  author_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  author_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  author_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  depositAmount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  depositAmount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  depositAmount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  depositAmount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  depositAmount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  depositAmount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  proposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  proposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  proposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  proposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  proposalId?: Maybe<Scalars['Int']>;
};

export type PublicUser = {
  __typename?: 'PublicUser';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<User>;
  subscription?: Maybe<Subscription>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
};


export type QueryProfileArgs = {
  username: Scalars['String'];
};


export type QuerySubscriptionArgs = {
  post_id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  blockIndex?: Maybe<BlockIndex>;
  blockIndexes: Array<Maybe<BlockIndex>>;
  blockIndexesConnection: BlockIndexConnection;
  blockNumber?: Maybe<BlockNumber>;
  blockNumbers: Array<Maybe<BlockNumber>>;
  blockNumbersConnection: BlockNumberConnection;
  bounties: Array<Maybe<Bounty>>;
  bountiesConnection: BountyConnection;
  bounty?: Maybe<Bounty>;
  bountyStatus?: Maybe<BountyStatus>;
  bountyStatuses: Array<Maybe<BountyStatus>>;
  bountyStatusesConnection: BountyStatusConnection;
  /** fetch data from the table: "comment_reactions" */
  comment_reactions: Array<Comment_Reactions>;
  /** fetch aggregated fields from the table: "comment_reactions" */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  council?: Maybe<Council>;
  councilMember?: Maybe<CouncilMember>;
  councilMembers: Array<Maybe<CouncilMember>>;
  councilMembersConnection: CouncilMemberConnection;
  councils: Array<Maybe<Council>>;
  councilsConnection: CouncilConnection;
  era?: Maybe<Era>;
  eras: Array<Maybe<Era>>;
  erasConnection: EraConnection;
  heartBeat?: Maybe<HeartBeat>;
  heartBeats: Array<Maybe<HeartBeat>>;
  heartBeatsConnection: HeartBeatConnection;
  motion?: Maybe<Motion>;
  motionProposalArgument?: Maybe<MotionProposalArgument>;
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>;
  motionProposalArgumentsConnection: MotionProposalArgumentConnection;
  motionStatus?: Maybe<MotionStatus>;
  motionStatuses: Array<Maybe<MotionStatus>>;
  motionStatusesConnection: MotionStatusConnection;
  motions: Array<Maybe<Motion>>;
  motionsConnection: MotionConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  nomination?: Maybe<Nomination>;
  nominations: Array<Maybe<Nomination>>;
  nominationsConnection: NominationConnection;
  offlineValidator?: Maybe<OfflineValidator>;
  offlineValidators: Array<Maybe<OfflineValidator>>;
  offlineValidatorsConnection: OfflineValidatorConnection;
  /** fetch data from the table: "onchain_links" */
  onchain_links: Array<Onchain_Links>;
  /** fetch aggregated fields from the table: "onchain_links" */
  onchain_links_aggregate: Onchain_Links_Aggregate;
  /** fetch data from the table: "onchain_links" using primary key columns */
  onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "poll_votes" */
  poll_votes: Array<Poll_Votes>;
  /** fetch aggregated fields from the table: "poll_votes" */
  poll_votes_aggregate: Poll_Votes_Aggregate;
  /** fetch data from the table: "poll_votes" using primary key columns */
  poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** fetch data from the table: "post_last_update" */
  post_last_update: Array<Post_Last_Update>;
  /** fetch aggregated fields from the table: "post_last_update" */
  post_last_update_aggregate: Post_Last_Update_Aggregate;
  /** fetch data from the table: "post_reactions" */
  post_reactions: Array<Post_Reactions>;
  /** fetch aggregated fields from the table: "post_reactions" */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** fetch data from the table: "post_topics" */
  post_topics: Array<Post_Topics>;
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: Post_Topics_Aggregate;
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<Post_Topics>;
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  preimage?: Maybe<Preimage>;
  preimageArgument?: Maybe<PreimageArgument>;
  preimageArguments: Array<Maybe<PreimageArgument>>;
  preimageArgumentsConnection: PreimageArgumentConnection;
  preimageStatus?: Maybe<PreimageStatus>;
  preimageStatuses: Array<Maybe<PreimageStatus>>;
  preimageStatusesConnection: PreimageStatusConnection;
  preimages: Array<Maybe<Preimage>>;
  preimagesConnection: PreimageConnection;
  profile?: Maybe<User>;
  proposal?: Maybe<Proposal>;
  proposalStatus?: Maybe<ProposalStatus>;
  proposalStatuses: Array<Maybe<ProposalStatus>>;
  proposalStatusesConnection: ProposalStatusConnection;
  proposals: Array<Maybe<Proposal>>;
  proposalsConnection: ProposalConnection;
  referendum?: Maybe<Referendum>;
  referendumStatus?: Maybe<ReferendumStatus>;
  referendumStatuses: Array<Maybe<ReferendumStatus>>;
  referendumStatusesConnection: ReferendumStatusConnection;
  referendums: Array<Maybe<Referendum>>;
  referendumsConnection: ReferendumConnection;
  reward?: Maybe<Reward>;
  rewards: Array<Maybe<Reward>>;
  rewardsConnection: RewardConnection;
  session?: Maybe<Session>;
  sessions: Array<Maybe<Session>>;
  sessionsConnection: SessionConnection;
  slashing?: Maybe<Slashing>;
  slashings: Array<Maybe<Slashing>>;
  slashingsConnection: SlashingConnection;
  stake?: Maybe<Stake>;
  stakes: Array<Maybe<Stake>>;
  stakesConnection: StakeConnection;
  subscription?: Maybe<Subscription>;
  tip?: Maybe<Tip>;
  tipStatus?: Maybe<TipStatus>;
  tipStatuses: Array<Maybe<TipStatus>>;
  tipStatusesConnection: TipStatusConnection;
  tips: Array<Maybe<Tip>>;
  tipsConnection: TipConnection;
  token?: Maybe<Token>;
  totalIssuance?: Maybe<TotalIssuance>;
  totalIssuances: Array<Maybe<TotalIssuance>>;
  totalIssuancesConnection: TotalIssuanceConnection;
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>;
  treasurySpendProposalsConnection: TreasurySpendProposalConnection;
  treasuryStatus?: Maybe<TreasuryStatus>;
  treasuryStatuses: Array<Maybe<TreasuryStatus>>;
  treasuryStatusesConnection: TreasuryStatusConnection;
  user?: Maybe<User>;
  validator?: Maybe<Validator>;
  validators: Array<Maybe<Validator>>;
  validatorsConnection: ValidatorConnection;
};


/** query root */
export type Query_RootBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput;
};


/** query root */
export type Query_RootBlockIndexesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockIndexWhereInput>;
};


/** query root */
export type Query_RootBlockIndexesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockIndexWhereInput>;
};


/** query root */
export type Query_RootBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


/** query root */
export type Query_RootBlockNumbersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockNumberWhereInput>;
};


/** query root */
export type Query_RootBlockNumbersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockNumberWhereInput>;
};


/** query root */
export type Query_RootBountiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyWhereInput>;
};


/** query root */
export type Query_RootBountiesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyWhereInput>;
};


/** query root */
export type Query_RootBountyArgs = {
  where: BountyWhereUniqueInput;
};


/** query root */
export type Query_RootBountyStatusArgs = {
  where: BountyStatusWhereUniqueInput;
};


/** query root */
export type Query_RootBountyStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyStatusWhereInput>;
};


/** query root */
export type Query_RootBountyStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BountyStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BountyStatusWhereInput>;
};


/** query root */
export type Query_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootCouncilArgs = {
  where: CouncilWhereUniqueInput;
};


/** query root */
export type Query_RootCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
};


/** query root */
export type Query_RootCouncilMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};


/** query root */
export type Query_RootCouncilMembersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};


/** query root */
export type Query_RootCouncilsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};


/** query root */
export type Query_RootCouncilsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};


/** query root */
export type Query_RootEraArgs = {
  where: EraWhereUniqueInput;
};


/** query root */
export type Query_RootErasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EraWhereInput>;
};


/** query root */
export type Query_RootErasConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EraWhereInput>;
};


/** query root */
export type Query_RootHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput;
};


/** query root */
export type Query_RootHeartBeatsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeartBeatWhereInput>;
};


/** query root */
export type Query_RootHeartBeatsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeartBeatWhereInput>;
};


/** query root */
export type Query_RootMotionArgs = {
  where: MotionWhereUniqueInput;
};


/** query root */
export type Query_RootMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
};


/** query root */
export type Query_RootMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


/** query root */
export type Query_RootMotionProposalArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


/** query root */
export type Query_RootMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
};


/** query root */
export type Query_RootMotionStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};


/** query root */
export type Query_RootMotionStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};


/** query root */
export type Query_RootMotionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput>;
};


/** query root */
export type Query_RootMotionsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput>;
};


/** query root */
export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};


/** query root */
export type Query_RootNominationArgs = {
  where: NominationWhereUniqueInput;
};


/** query root */
export type Query_RootNominationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NominationWhereInput>;
};


/** query root */
export type Query_RootNominationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NominationWhereInput>;
};


/** query root */
export type Query_RootOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput;
};


/** query root */
export type Query_RootOfflineValidatorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OfflineValidatorWhereInput>;
};


/** query root */
export type Query_RootOfflineValidatorsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OfflineValidatorWhereInput>;
};


/** query root */
export type Query_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** query root */
export type Query_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** query root */
export type Query_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPoll_VotesArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** query root */
export type Query_RootPoll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_Last_UpdateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Last_Update_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** query root */
export type Query_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPreimageArgs = {
  where: PreimageWhereUniqueInput;
};


/** query root */
export type Query_RootPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
};


/** query root */
export type Query_RootPreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


/** query root */
export type Query_RootPreimageArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


/** query root */
export type Query_RootPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
};


/** query root */
export type Query_RootPreimageStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
};


/** query root */
export type Query_RootPreimageStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
};


/** query root */
export type Query_RootPreimagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageWhereInput>;
};


/** query root */
export type Query_RootPreimagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageWhereInput>;
};


/** query root */
export type Query_RootProfileArgs = {
  username: Scalars['String'];
};


/** query root */
export type Query_RootProposalArgs = {
  where: ProposalWhereUniqueInput;
};


/** query root */
export type Query_RootProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
};


/** query root */
export type Query_RootProposalStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};


/** query root */
export type Query_RootProposalStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};


/** query root */
export type Query_RootProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput>;
};


/** query root */
export type Query_RootProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput>;
};


/** query root */
export type Query_RootReferendumArgs = {
  where: ReferendumWhereUniqueInput;
};


/** query root */
export type Query_RootReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
};


/** query root */
export type Query_RootReferendumStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};


/** query root */
export type Query_RootReferendumStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};


/** query root */
export type Query_RootReferendumsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput>;
};


/** query root */
export type Query_RootReferendumsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput>;
};


/** query root */
export type Query_RootRewardArgs = {
  where: RewardWhereUniqueInput;
};


/** query root */
export type Query_RootRewardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RewardWhereInput>;
};


/** query root */
export type Query_RootRewardsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RewardWhereInput>;
};


/** query root */
export type Query_RootSessionArgs = {
  where: SessionWhereUniqueInput;
};


/** query root */
export type Query_RootSessionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


/** query root */
export type Query_RootSessionsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


/** query root */
export type Query_RootSlashingArgs = {
  where: SlashingWhereUniqueInput;
};


/** query root */
export type Query_RootSlashingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SlashingWhereInput>;
};


/** query root */
export type Query_RootSlashingsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SlashingWhereInput>;
};


/** query root */
export type Query_RootStakeArgs = {
  where: StakeWhereUniqueInput;
};


/** query root */
export type Query_RootStakesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<StakeWhereInput>;
};


/** query root */
export type Query_RootStakesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<StakeWhereInput>;
};


/** query root */
export type Query_RootSubscriptionArgs = {
  post_id: Scalars['Int'];
};


/** query root */
export type Query_RootTipArgs = {
  where: TipWhereUniqueInput;
};


/** query root */
export type Query_RootTipStatusArgs = {
  where: TipStatusWhereUniqueInput;
};


/** query root */
export type Query_RootTipStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipStatusWhereInput>;
};


/** query root */
export type Query_RootTipStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipStatusWhereInput>;
};


/** query root */
export type Query_RootTipsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipWhereInput>;
};


/** query root */
export type Query_RootTipsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipWhereInput>;
};


/** query root */
export type Query_RootTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


/** query root */
export type Query_RootTotalIssuancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TotalIssuanceWhereInput>;
};


/** query root */
export type Query_RootTotalIssuancesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TotalIssuanceWhereInput>;
};


/** query root */
export type Query_RootTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
};


/** query root */
export type Query_RootTreasurySpendProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


/** query root */
export type Query_RootTreasurySpendProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


/** query root */
export type Query_RootTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
};


/** query root */
export type Query_RootTreasuryStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};


/** query root */
export type Query_RootTreasuryStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


/** query root */
export type Query_RootValidatorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ValidatorWhereInput>;
};


/** query root */
export type Query_RootValidatorsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ValidatorWhereInput>;
};

export type Referendum = {
  __typename?: 'Referendum';
  delay: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['Int'];
  preimage?: Maybe<Preimage>;
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  referendumStatus?: Maybe<Array<ReferendumStatus>>;
  voteThreshold: Scalars['String'];
};


export type ReferendumReferendumStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};

/** A connection to a list of items. */
export type ReferendumConnection = {
  __typename?: 'ReferendumConnection';
  aggregate: AggregateReferendum;
  /** A list of edges. */
  edges: Array<Maybe<ReferendumEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReferendumCreateInput = {
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>;
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>;
  voteThreshold: Scalars['String'];
};

export type ReferendumCreateOneWithoutPreimageInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>;
  create?: Maybe<ReferendumCreateWithoutPreimageInput>;
};

export type ReferendumCreateOneWithoutReferendumStatusInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>;
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>;
};

export type ReferendumCreateWithoutPreimageInput = {
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>;
  voteThreshold: Scalars['String'];
};

export type ReferendumCreateWithoutReferendumStatusInput = {
  delay: Scalars['Int'];
  end: Scalars['Int'];
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>;
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
};

/** An edge in a connection. */
export type ReferendumEdge = {
  __typename?: 'ReferendumEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Referendum;
};

export enum ReferendumOrderByInput {
  DelayAsc = 'delay_ASC',
  DelayDesc = 'delay_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PreimageHashAsc = 'preimageHash_ASC',
  PreimageHashDesc = 'preimageHash_DESC',
  ReferendumIdAsc = 'referendumId_ASC',
  ReferendumIdDesc = 'referendumId_DESC',
  VoteThresholdAsc = 'voteThreshold_ASC',
  VoteThresholdDesc = 'voteThreshold_DESC'
}

export type ReferendumPreviousValues = {
  __typename?: 'ReferendumPreviousValues';
  delay: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['Int'];
  preimageHash: Scalars['String'];
  referendumId: Scalars['Int'];
  voteThreshold: Scalars['String'];
};

export type ReferendumStatus = Node & {
  __typename?: 'ReferendumStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  referendum: Referendum;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type ReferendumStatusConnection = {
  __typename?: 'ReferendumStatusConnection';
  aggregate: AggregateReferendumStatus;
  /** A list of edges. */
  edges: Array<Maybe<ReferendumStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReferendumStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  referendum: ReferendumCreateOneWithoutReferendumStatusInput;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

export type ReferendumStatusCreateManyWithoutReferendumInput = {
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>;
};

export type ReferendumStatusCreateWithoutReferendumInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** An edge in a connection. */
export type ReferendumStatusEdge = {
  __typename?: 'ReferendumStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ReferendumStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumStatusSubscriptionPayload = {
  __typename?: 'ReferendumStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ReferendumStatus>;
  previousValues?: Maybe<ReferendumStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ReferendumStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  referendum?: Maybe<ReferendumUpdateOneRequiredWithoutReferendumStatusInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>;
  delete?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReferendumStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  set?: Maybe<Array<ReferendumStatusWhereUniqueInput>>;
  update?: Maybe<Array<ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput>>;
  updateMany?: Maybe<Array<ReferendumStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput>>;
};

export type ReferendumStatusUpdateManyWithWhereNestedInput = {
  data: ReferendumStatusUpdateManyDataInput;
  where: ReferendumStatusScalarWhereInput;
};

export type ReferendumStatusUpdateWithoutReferendumDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput = {
  data: ReferendumStatusUpdateWithoutReferendumDataInput;
  where: ReferendumStatusWhereUniqueInput;
};

export type ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput = {
  create: ReferendumStatusCreateWithoutReferendumInput;
  update: ReferendumStatusUpdateWithoutReferendumDataInput;
  where: ReferendumStatusWhereUniqueInput;
};

export type ReferendumStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  referendum?: Maybe<ReferendumWhereInput>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type ReferendumSubscriptionPayload = {
  __typename?: 'ReferendumSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Referendum>;
  previousValues?: Maybe<ReferendumPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ReferendumWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumUpdateInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>;
  voteThreshold?: Maybe<Scalars['String']>;
};

export type ReferendumUpdateManyMutationInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
};

export type ReferendumUpdateOneRequiredWithoutReferendumStatusInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>;
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>;
  update?: Maybe<ReferendumUpdateWithoutReferendumStatusDataInput>;
  upsert?: Maybe<ReferendumUpsertWithoutReferendumStatusInput>;
};

export type ReferendumUpdateOneWithoutPreimageInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>;
  create?: Maybe<ReferendumCreateWithoutPreimageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ReferendumUpdateWithoutPreimageDataInput>;
  upsert?: Maybe<ReferendumUpsertWithoutPreimageInput>;
};

export type ReferendumUpdateWithoutPreimageDataInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>;
  voteThreshold?: Maybe<Scalars['String']>;
};

export type ReferendumUpdateWithoutReferendumStatusDataInput = {
  delay?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>;
  preimageHash?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
};

export type ReferendumUpsertWithoutPreimageInput = {
  create: ReferendumCreateWithoutPreimageInput;
  update: ReferendumUpdateWithoutPreimageDataInput;
};

export type ReferendumUpsertWithoutReferendumStatusInput = {
  create: ReferendumCreateWithoutReferendumStatusInput;
  update: ReferendumUpdateWithoutReferendumStatusDataInput;
};

export type ReferendumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumWhereInput>>;
  delay?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  delay_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  delay_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  delay_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  delay_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  delay_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  delay_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  end?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  referendumId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  referendumId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  referendumId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  referendumId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  referendumId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  voteThreshold?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  voteThreshold_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  voteThreshold_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  voteThreshold_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  voteThreshold_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  voteThreshold_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  voteThreshold_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReferendumWhereInput>>;
  delay?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  delay_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  delay_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  delay_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  delay_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  delay_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  delay_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  end?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preimageHash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preimageHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preimageHash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preimageHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preimageHash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preimageHash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  referendumId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  referendumId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  referendumId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  referendumId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  referendumId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  voteThreshold?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  voteThreshold_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  voteThreshold_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  voteThreshold_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  voteThreshold_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  voteThreshold_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  voteThreshold_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

export type Reward = Node & {
  __typename?: 'Reward';
  authoredBlock: BlockNumber;
  id: Scalars['ID'];
  sessionIndex: Session;
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
};

/** A connection to a list of items. */
export type RewardConnection = {
  __typename?: 'RewardConnection';
  aggregate: AggregateReward;
  /** A list of edges. */
  edges: Array<Maybe<RewardEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RewardCreateInput = {
  authoredBlock: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  sessionIndex: SessionCreateOneInput;
  treasuryReward: Scalars['String'];
  validatorReward: Scalars['String'];
};

/** An edge in a connection. */
export type RewardEdge = {
  __typename?: 'RewardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Reward;
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
  previousValues?: Maybe<RewardPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type RewardSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RewardSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<RewardWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type RewardUpdateInput = {
  authoredBlock?: Maybe<BlockNumberUpdateOneRequiredInput>;
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>;
  treasuryReward?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
};

export type RewardUpdateManyMutationInput = {
  treasuryReward?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
};

export type RewardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RewardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RewardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RewardWhereInput>>;
  authoredBlock?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  sessionIndex?: Maybe<SessionWhereInput>;
  treasuryReward?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  treasuryReward_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  treasuryReward_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  treasuryReward_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  treasuryReward_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  treasuryReward_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  treasuryReward_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  treasuryReward_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  treasuryReward_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  treasuryReward_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  treasuryReward_starts_with?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  validatorReward_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  validatorReward_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  validatorReward_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  validatorReward_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  validatorReward_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  validatorReward_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  validatorReward_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  validatorReward_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  validatorReward_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  validatorReward_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  validatorReward_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  validatorReward_starts_with?: Maybe<Scalars['String']>;
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
  aggregate: AggregateSession;
  /** A list of edges. */
  edges: Array<Maybe<SessionEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SessionCreateInput = {
  id?: Maybe<Scalars['ID']>;
  index: Scalars['Int'];
  start: BlockNumberCreateOneInput;
};

export type SessionCreateOneInput = {
  connect?: Maybe<SessionWhereUniqueInput>;
  create?: Maybe<SessionCreateInput>;
};

/** An edge in a connection. */
export type SessionEdge = {
  __typename?: 'SessionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Session;
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
  previousValues?: Maybe<SessionPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type SessionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<SessionWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
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
  connect?: Maybe<SessionWhereUniqueInput>;
  create?: Maybe<SessionCreateInput>;
  update?: Maybe<SessionUpdateDataInput>;
  upsert?: Maybe<SessionUpsertNestedInput>;
};

export type SessionUpsertNestedInput = {
  create: SessionCreateInput;
  update: SessionUpdateDataInput;
};

export type SessionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SessionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  start?: Maybe<BlockNumberWhereInput>;
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
};

export type Slashing = Node & {
  __typename?: 'Slashing';
  amount: Scalars['String'];
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  who: Scalars['String'];
};

/** A connection to a list of items. */
export type SlashingConnection = {
  __typename?: 'SlashingConnection';
  aggregate: AggregateSlashing;
  /** A list of edges. */
  edges: Array<Maybe<SlashingEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SlashingCreateInput = {
  amount: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  who: Scalars['String'];
};

/** An edge in a connection. */
export type SlashingEdge = {
  __typename?: 'SlashingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Slashing;
};

export enum SlashingOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC'
}

export type SlashingPreviousValues = {
  __typename?: 'SlashingPreviousValues';
  amount: Scalars['String'];
  id: Scalars['ID'];
  who: Scalars['String'];
};

export type SlashingSubscriptionPayload = {
  __typename?: 'SlashingSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Slashing>;
  previousValues?: Maybe<SlashingPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type SlashingSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SlashingSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<SlashingWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type SlashingUpdateInput = {
  amount?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  who?: Maybe<Scalars['String']>;
};

export type SlashingUpdateManyMutationInput = {
  amount?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
};

export type SlashingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SlashingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SlashingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SlashingWhereInput>>;
  amount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  amount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  amount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  amount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  amount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  amount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  amount_starts_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
};

export type SlashingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
};

export type Stake = Node & {
  __typename?: 'Stake';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  totalStake: Scalars['String'];
};

/** A connection to a list of items. */
export type StakeConnection = {
  __typename?: 'StakeConnection';
  aggregate: AggregateStake;
  /** A list of edges. */
  edges: Array<Maybe<StakeEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StakeCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  totalStake: Scalars['String'];
};

/** An edge in a connection. */
export type StakeEdge = {
  __typename?: 'StakeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Stake;
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
  previousValues?: Maybe<StakePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type StakeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StakeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<StakeWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type StakeUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  totalStake?: Maybe<Scalars['String']>;
};

export type StakeUpdateManyMutationInput = {
  totalStake?: Maybe<Scalars['String']>;
};

export type StakeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StakeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StakeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StakeWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  totalStake?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  totalStake_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  totalStake_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  totalStake_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  totalStake_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  totalStake_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  totalStake_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  totalStake_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  totalStake_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  totalStake_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  totalStake_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  totalStake_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  totalStake_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  totalStake_starts_with?: Maybe<Scalars['String']>;
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribed?: Maybe<Scalars['Boolean']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  blockIndex?: Maybe<BlockIndexSubscriptionPayload>;
  blockNumber?: Maybe<BlockNumberSubscriptionPayload>;
  bounty?: Maybe<BountySubscriptionPayload>;
  bountyStatus?: Maybe<BountyStatusSubscriptionPayload>;
  /** fetch data from the table: "comment_reactions" */
  comment_reactions: Array<Comment_Reactions>;
  /** fetch aggregated fields from the table: "comment_reactions" */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  council?: Maybe<CouncilSubscriptionPayload>;
  councilMember?: Maybe<CouncilMemberSubscriptionPayload>;
  era?: Maybe<EraSubscriptionPayload>;
  heartBeat?: Maybe<HeartBeatSubscriptionPayload>;
  motion?: Maybe<MotionSubscriptionPayload>;
  motionProposalArgument?: Maybe<MotionProposalArgumentSubscriptionPayload>;
  motionStatus?: Maybe<MotionStatusSubscriptionPayload>;
  nomination?: Maybe<NominationSubscriptionPayload>;
  offlineValidator?: Maybe<OfflineValidatorSubscriptionPayload>;
  /** fetch data from the table: "onchain_links" */
  onchain_links: Array<Onchain_Links>;
  /** fetch aggregated fields from the table: "onchain_links" */
  onchain_links_aggregate: Onchain_Links_Aggregate;
  /** fetch data from the table: "onchain_links" using primary key columns */
  onchain_links_by_pk?: Maybe<Onchain_Links>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "poll_votes" */
  poll_votes: Array<Poll_Votes>;
  /** fetch aggregated fields from the table: "poll_votes" */
  poll_votes_aggregate: Poll_Votes_Aggregate;
  /** fetch data from the table: "poll_votes" using primary key columns */
  poll_votes_by_pk?: Maybe<Poll_Votes>;
  /** fetch data from the table: "post_last_update" */
  post_last_update: Array<Post_Last_Update>;
  /** fetch aggregated fields from the table: "post_last_update" */
  post_last_update_aggregate: Post_Last_Update_Aggregate;
  /** fetch data from the table: "post_reactions" */
  post_reactions: Array<Post_Reactions>;
  /** fetch aggregated fields from the table: "post_reactions" */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** fetch data from the table: "post_topics" */
  post_topics: Array<Post_Topics>;
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: Post_Topics_Aggregate;
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<Post_Topics>;
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  preimage?: Maybe<PreimageSubscriptionPayload>;
  preimageArgument?: Maybe<PreimageArgumentSubscriptionPayload>;
  preimageStatus?: Maybe<PreimageStatusSubscriptionPayload>;
  proposal?: Maybe<ProposalSubscriptionPayload>;
  proposalStatus?: Maybe<ProposalStatusSubscriptionPayload>;
  referendum?: Maybe<ReferendumSubscriptionPayload>;
  referendumStatus?: Maybe<ReferendumStatusSubscriptionPayload>;
  reward?: Maybe<RewardSubscriptionPayload>;
  session?: Maybe<SessionSubscriptionPayload>;
  slashing?: Maybe<SlashingSubscriptionPayload>;
  stake?: Maybe<StakeSubscriptionPayload>;
  subscribed?: Maybe<Scalars['Boolean']>;
  tip?: Maybe<TipSubscriptionPayload>;
  tipStatus?: Maybe<TipStatusSubscriptionPayload>;
  totalIssuance?: Maybe<TotalIssuanceSubscriptionPayload>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalSubscriptionPayload>;
  treasuryStatus?: Maybe<TreasuryStatusSubscriptionPayload>;
  validator?: Maybe<ValidatorSubscriptionPayload>;
};


/** subscription root */
export type Subscription_RootBlockIndexArgs = {
  where?: Maybe<BlockIndexSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootBlockNumberArgs = {
  where?: Maybe<BlockNumberSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootBountyArgs = {
  where?: Maybe<BountySubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootBountyStatusArgs = {
  where?: Maybe<BountyStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCouncilArgs = {
  where?: Maybe<CouncilSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootCouncilMemberArgs = {
  where?: Maybe<CouncilMemberSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootEraArgs = {
  where?: Maybe<EraSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootHeartBeatArgs = {
  where?: Maybe<HeartBeatSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootMotionArgs = {
  where?: Maybe<MotionSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootMotionProposalArgumentArgs = {
  where?: Maybe<MotionProposalArgumentSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootMotionStatusArgs = {
  where?: Maybe<MotionStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootNominationArgs = {
  where?: Maybe<NominationSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootOfflineValidatorArgs = {
  where?: Maybe<OfflineValidatorSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPoll_VotesArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Votes_Order_By>>;
  where?: Maybe<Poll_Votes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPoll_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_Last_UpdateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Last_Update_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Last_Update_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Last_Update_Order_By>>;
  where?: Maybe<Post_Last_Update_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPreimageArgs = {
  where?: Maybe<PreimageSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootPreimageArgumentArgs = {
  where?: Maybe<PreimageArgumentSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootPreimageStatusArgs = {
  where?: Maybe<PreimageStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootProposalArgs = {
  where?: Maybe<ProposalSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootProposalStatusArgs = {
  where?: Maybe<ProposalStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootReferendumArgs = {
  where?: Maybe<ReferendumSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootReferendumStatusArgs = {
  where?: Maybe<ReferendumStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootRewardArgs = {
  where?: Maybe<RewardSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootSessionArgs = {
  where?: Maybe<SessionSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootSlashingArgs = {
  where?: Maybe<SlashingSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootStakeArgs = {
  where?: Maybe<StakeSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTipArgs = {
  where?: Maybe<TipSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTipStatusArgs = {
  where?: Maybe<TipStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTotalIssuanceArgs = {
  where?: Maybe<TotalIssuanceSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTreasurySpendProposalArgs = {
  where?: Maybe<TreasurySpendProposalSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootTreasuryStatusArgs = {
  where?: Maybe<TreasuryStatusSubscriptionWhereInput>;
};


/** subscription root */
export type Subscription_RootValidatorArgs = {
  where?: Maybe<ValidatorSubscriptionWhereInput>;
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Tip = {
  __typename?: 'Tip';
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  reason: Scalars['String'];
  tipStatus?: Maybe<Array<TipStatus>>;
  who: Scalars['String'];
};


export type TipTipStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TipStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TipStatusWhereInput>;
};

/** A connection to a list of items. */
export type TipConnection = {
  __typename?: 'TipConnection';
  aggregate: AggregateTip;
  /** A list of edges. */
  edges: Array<Maybe<TipEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TipCreateInput = {
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  reason: Scalars['String'];
  tipStatus?: Maybe<TipStatusCreateManyWithoutTipInput>;
  who: Scalars['String'];
};

export type TipCreateOneWithoutTipStatusInput = {
  connect?: Maybe<TipWhereUniqueInput>;
  create?: Maybe<TipCreateWithoutTipStatusInput>;
};

export type TipCreateWithoutTipStatusInput = {
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  reason: Scalars['String'];
  who: Scalars['String'];
};

/** An edge in a connection. */
export type TipEdge = {
  __typename?: 'TipEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Tip;
};

export enum TipOrderByInput {
  ClosesAsc = 'closes_ASC',
  ClosesDesc = 'closes_DESC',
  FinderFeeAsc = 'finderFee_ASC',
  FinderFeeDesc = 'finderFee_DESC',
  FinderAsc = 'finder_ASC',
  FinderDesc = 'finder_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReasonAsc = 'reason_ASC',
  ReasonDesc = 'reason_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC'
}

export type TipPreviousValues = {
  __typename?: 'TipPreviousValues';
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  reason: Scalars['String'];
  who: Scalars['String'];
};

export type TipStatus = Node & {
  __typename?: 'TipStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  status: Scalars['String'];
  tip: Tip;
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TipStatusConnection = {
  __typename?: 'TipStatusConnection';
  aggregate: AggregateTipStatus;
  /** A list of edges. */
  edges: Array<Maybe<TipStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TipStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  tip: TipCreateOneWithoutTipStatusInput;
  uniqueStatus: Scalars['String'];
};

export type TipStatusCreateManyWithoutTipInput = {
  connect?: Maybe<Array<TipStatusWhereUniqueInput>>;
  create?: Maybe<Array<TipStatusCreateWithoutTipInput>>;
};

export type TipStatusCreateWithoutTipInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** An edge in a connection. */
export type TipStatusEdge = {
  __typename?: 'TipStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TipStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TipStatusSubscriptionPayload = {
  __typename?: 'TipStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TipStatus>;
  previousValues?: Maybe<TipStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TipStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TipStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TipStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  tip?: Maybe<TipUpdateOneRequiredWithoutTipStatusInput>;
  uniqueStatus?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<TipStatusWhereUniqueInput>>;
  create?: Maybe<Array<TipStatusCreateWithoutTipInput>>;
  delete?: Maybe<Array<TipStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TipStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<TipStatusWhereUniqueInput>>;
  set?: Maybe<Array<TipStatusWhereUniqueInput>>;
  update?: Maybe<Array<TipStatusUpdateWithWhereUniqueWithoutTipInput>>;
  updateMany?: Maybe<Array<TipStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TipStatusUpsertWithWhereUniqueWithoutTipInput>>;
};

export type TipStatusUpdateManyWithWhereNestedInput = {
  data: TipStatusUpdateManyDataInput;
  where: TipStatusScalarWhereInput;
};

export type TipStatusUpdateWithoutTipDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TipStatusUpdateWithWhereUniqueWithoutTipInput = {
  data: TipStatusUpdateWithoutTipDataInput;
  where: TipStatusWhereUniqueInput;
};

export type TipStatusUpsertWithWhereUniqueWithoutTipInput = {
  create: TipStatusCreateWithoutTipInput;
  update: TipStatusUpdateWithoutTipDataInput;
  where: TipStatusWhereUniqueInput;
};

export type TipStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  tip?: Maybe<TipWhereInput>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TipStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TipSubscriptionPayload = {
  __typename?: 'TipSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tip>;
  previousValues?: Maybe<TipPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TipSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TipWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TipUpdateInput = {
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  tipStatus?: Maybe<TipStatusUpdateManyWithoutTipInput>;
  who?: Maybe<Scalars['String']>;
};

export type TipUpdateManyMutationInput = {
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
};

export type TipUpdateOneRequiredWithoutTipStatusInput = {
  connect?: Maybe<TipWhereUniqueInput>;
  create?: Maybe<TipCreateWithoutTipStatusInput>;
  update?: Maybe<TipUpdateWithoutTipStatusDataInput>;
  upsert?: Maybe<TipUpsertWithoutTipStatusInput>;
};

export type TipUpdateWithoutTipStatusDataInput = {
  closes?: Maybe<Scalars['Int']>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
};

export type TipUpsertWithoutTipStatusInput = {
  create: TipCreateWithoutTipStatusInput;
  update: TipUpdateWithoutTipStatusDataInput;
};

export type TipWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipWhereInput>>;
  closes?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  closes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  closes_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  closes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  closes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  closes_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  closes_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  closes_not_in?: Maybe<Array<Scalars['Int']>>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finderFee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finderFee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finderFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finderFee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finderFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finderFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finderFee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finderFee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finderFee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finderFee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finderFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finderFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finderFee_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finder_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finder_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finder_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finder_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finder_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finder_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finder_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finder_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finder_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finder_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finder_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  reason?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  reason_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  reason_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  reason_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  reason_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  reason_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  reason_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  reason_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  reason_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  reason_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  reason_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  reason_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  reason_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  reason_starts_with?: Maybe<Scalars['String']>;
  tipStatus_every?: Maybe<TipStatusWhereInput>;
  tipStatus_none?: Maybe<TipStatusWhereInput>;
  tipStatus_some?: Maybe<TipStatusWhereInput>;
  who?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
};

export type TipWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Tip = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TipWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TipWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TipWhereInput>>;
  closes?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  closes_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  closes_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  closes_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  closes_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  closes_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  closes_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  closes_not_in?: Maybe<Array<Scalars['Int']>>;
  finder?: Maybe<Scalars['String']>;
  finderFee?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finderFee_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finderFee_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finderFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finderFee_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finderFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finderFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finderFee_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finderFee_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finderFee_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finderFee_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finderFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finderFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finderFee_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  finder_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  finder_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  finder_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  finder_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  finder_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  finder_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  finder_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  finder_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  finder_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  finder_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  finder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  finder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  finder_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  reason?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  reason_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  reason_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  reason_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  reason_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  reason_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  reason_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  reason_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  reason_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  reason_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  reason_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  reason_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  reason_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  reason_starts_with?: Maybe<Scalars['String']>;
  tipStatus_every?: Maybe<TipStatusWhereInput>;
  tipStatus_none?: Maybe<TipStatusWhereInput>;
  tipStatus_some?: Maybe<TipStatusWhereInput>;
  who?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  who_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  who_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  who_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  who_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  who_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  who_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  who_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  who_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  who_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  who_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  who_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  who_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  who_starts_with?: Maybe<Scalars['String']>;
};

export type TipWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export type TotalIssuance = Node & {
  __typename?: 'TotalIssuance';
  amount: Scalars['String'];
  blockNumber: BlockNumber;
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type TotalIssuanceConnection = {
  __typename?: 'TotalIssuanceConnection';
  aggregate: AggregateTotalIssuance;
  /** A list of edges. */
  edges: Array<Maybe<TotalIssuanceEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TotalIssuanceCreateInput = {
  amount: Scalars['String'];
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
};

/** An edge in a connection. */
export type TotalIssuanceEdge = {
  __typename?: 'TotalIssuanceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TotalIssuance;
};

export enum TotalIssuanceOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type TotalIssuancePreviousValues = {
  __typename?: 'TotalIssuancePreviousValues';
  amount: Scalars['String'];
  id: Scalars['ID'];
};

export type TotalIssuanceSubscriptionPayload = {
  __typename?: 'TotalIssuanceSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TotalIssuance>;
  previousValues?: Maybe<TotalIssuancePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TotalIssuanceSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TotalIssuanceWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TotalIssuanceWhereInput>>;
  amount?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  amount_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  amount_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  amount_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  amount_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  amount_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  amount_starts_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
};

export type TotalIssuanceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TreasurySpendProposal = {
  __typename?: 'TreasurySpendProposal';
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  id: Scalars['Int'];
  motion?: Maybe<Motion>;
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<Array<TreasuryStatus>>;
  value: Scalars['String'];
};


export type TreasurySpendProposalTreasuryStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};

/** A connection to a list of items. */
export type TreasurySpendProposalConnection = {
  __typename?: 'TreasurySpendProposalConnection';
  aggregate: AggregateTreasurySpendProposal;
  /** A list of edges. */
  edges: Array<Maybe<TreasurySpendProposalEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TreasurySpendProposalCreateInput = {
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>;
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>;
  value: Scalars['String'];
};

export type TreasurySpendProposalCreateOneWithoutMotionInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>;
};

export type TreasurySpendProposalCreateOneWithoutTreasuryStatusInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>;
};

export type TreasurySpendProposalCreateWithoutMotionInput = {
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>;
  value: Scalars['String'];
};

export type TreasurySpendProposalCreateWithoutTreasuryStatusInput = {
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>;
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  value: Scalars['String'];
};

/** An edge in a connection. */
export type TreasurySpendProposalEdge = {
  __typename?: 'TreasurySpendProposalEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TreasurySpendProposal;
};

export enum TreasurySpendProposalOrderByInput {
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC',
  BondAsc = 'bond_ASC',
  BondDesc = 'bond_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  TreasuryProposalIdAsc = 'treasuryProposalId_ASC',
  TreasuryProposalIdDesc = 'treasuryProposalId_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TreasurySpendProposalPreviousValues = {
  __typename?: 'TreasurySpendProposalPreviousValues';
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  id: Scalars['Int'];
  proposer: Scalars['String'];
  treasuryProposalId: Scalars['Int'];
  value: Scalars['String'];
};

export type TreasurySpendProposalSubscriptionPayload = {
  __typename?: 'TreasurySpendProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TreasurySpendProposal>;
  previousValues?: Maybe<TreasurySpendProposalPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TreasurySpendProposalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TreasurySpendProposalWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TreasurySpendProposalUpdateInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>;
  proposer?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>;
  value?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalUpdateManyMutationInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>;
  update?: Maybe<TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput>;
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutTreasuryStatusInput>;
};

export type TreasurySpendProposalUpdateOneWithoutMotionInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>;
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TreasurySpendProposalUpdateWithoutMotionDataInput>;
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutMotionInput>;
};

export type TreasurySpendProposalUpdateWithoutMotionDataInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>;
  value?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput = {
  beneficiary?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>;
  proposer?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalUpsertWithoutMotionInput = {
  create: TreasurySpendProposalCreateWithoutMotionInput;
  update: TreasurySpendProposalUpdateWithoutMotionDataInput;
};

export type TreasurySpendProposalUpsertWithoutTreasuryStatusInput = {
  create: TreasurySpendProposalCreateWithoutTreasuryStatusInput;
  update: TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput;
};

export type TreasurySpendProposalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  motion?: Maybe<MotionWhereInput>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  beneficiary_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  beneficiary_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  beneficiary_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  beneficiary_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  beneficiary_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  beneficiary_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bond_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bond_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bond_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bond_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bond_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bond_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bond_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bond_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bond_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bond_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bond_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bond_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  motion?: Maybe<MotionWhereInput>;
  proposer?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  proposer_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  proposer_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  proposer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  proposer_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  proposer_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  proposer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  proposer_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  proposer_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  proposer_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  proposer_starts_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
};

export type TreasuryStatus = Node & {
  __typename?: 'TreasuryStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
  status: Scalars['String'];
  treasurySpendProposal: TreasurySpendProposal;
  uniqueStatus: Scalars['String'];
};

/** A connection to a list of items. */
export type TreasuryStatusConnection = {
  __typename?: 'TreasuryStatusConnection';
  aggregate: AggregateTreasuryStatus;
  /** A list of edges. */
  edges: Array<Maybe<TreasuryStatusEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TreasuryStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  treasurySpendProposal: TreasurySpendProposalCreateOneWithoutTreasuryStatusInput;
  uniqueStatus: Scalars['String'];
};

export type TreasuryStatusCreateManyWithoutTreasurySpendProposalInput = {
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>;
};

export type TreasuryStatusCreateWithoutTreasurySpendProposalInput = {
  blockNumber: BlockNumberCreateOneInput;
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  uniqueStatus: Scalars['String'];
};

/** An edge in a connection. */
export type TreasuryStatusEdge = {
  __typename?: 'TreasuryStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TreasuryStatus;
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
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TreasuryStatusSubscriptionPayload = {
  __typename?: 'TreasuryStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TreasuryStatus>;
  previousValues?: Maybe<TreasuryStatusPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type TreasuryStatusSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TreasuryStatusWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TreasuryStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput>;
  uniqueStatus?: Maybe<Scalars['String']>;
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
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>;
  delete?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TreasuryStatusScalarWhereInput>>;
  disconnect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  set?: Maybe<Array<TreasuryStatusWhereUniqueInput>>;
  update?: Maybe<Array<TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput>>;
  updateMany?: Maybe<Array<TreasuryStatusUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput>>;
};

export type TreasuryStatusUpdateManyWithWhereNestedInput = {
  data: TreasuryStatusUpdateManyDataInput;
  where: TreasuryStatusScalarWhereInput;
};

export type TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>;
  status?: Maybe<Scalars['String']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput = {
  data: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput;
  where: TreasuryStatusWhereUniqueInput;
};

export type TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput = {
  create: TreasuryStatusCreateWithoutTreasurySpendProposalInput;
  update: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput;
  where: TreasuryStatusWhereUniqueInput;
};

export type TreasuryStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TreasuryStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TreasuryStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
  uniqueStatus?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uniqueStatus_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uniqueStatus_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uniqueStatus_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uniqueStatus_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uniqueStatus_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uniqueStatus_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uniqueStatus_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uniqueStatus_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uniqueStatus_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uniqueStatus_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  uniqueStatus_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  uniqueStatus_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uniqueStatus_starts_with?: Maybe<Scalars['String']>;
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uniqueStatus?: Maybe<Scalars['String']>;
};

export type UndoEmailChangeResponse = {
  __typename?: 'UndoEmailChangeResponse';
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  kusama_default_address?: Maybe<Scalars['String']>;
  polkadot_default_address?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  web3signup?: Maybe<Scalars['Boolean']>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type Validator = Node & {
  __typename?: 'Validator';
  controller: Scalars['String'];
  id: Scalars['ID'];
  preferences: Scalars['String'];
  session: Session;
  stash: Scalars['String'];
};

/** A connection to a list of items. */
export type ValidatorConnection = {
  __typename?: 'ValidatorConnection';
  aggregate: AggregateValidator;
  /** A list of edges. */
  edges: Array<Maybe<ValidatorEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ValidatorCreateInput = {
  controller: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  preferences: Scalars['String'];
  session: SessionCreateOneInput;
  stash: Scalars['String'];
};

/** An edge in a connection. */
export type ValidatorEdge = {
  __typename?: 'ValidatorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Validator;
};

export enum ValidatorOrderByInput {
  ControllerAsc = 'controller_ASC',
  ControllerDesc = 'controller_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PreferencesAsc = 'preferences_ASC',
  PreferencesDesc = 'preferences_DESC',
  StashAsc = 'stash_ASC',
  StashDesc = 'stash_DESC'
}

export type ValidatorPreviousValues = {
  __typename?: 'ValidatorPreviousValues';
  controller: Scalars['String'];
  id: Scalars['ID'];
  preferences: Scalars['String'];
  stash: Scalars['String'];
};

export type ValidatorSubscriptionPayload = {
  __typename?: 'ValidatorSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Validator>;
  previousValues?: Maybe<ValidatorPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ValidatorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ValidatorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ValidatorWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ValidatorUpdateInput = {
  controller?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['String']>;
  session?: Maybe<SessionUpdateOneRequiredInput>;
  stash?: Maybe<Scalars['String']>;
};

export type ValidatorUpdateManyMutationInput = {
  controller?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['String']>;
  stash?: Maybe<Scalars['String']>;
};

export type ValidatorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ValidatorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ValidatorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ValidatorWhereInput>>;
  controller?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  controller_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  controller_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  controller_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  controller_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  controller_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  controller_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  controller_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  controller_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  controller_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  controller_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  controller_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  controller_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  controller_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  preferences?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preferences_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preferences_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preferences_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preferences_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preferences_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preferences_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preferences_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preferences_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preferences_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preferences_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  preferences_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  preferences_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preferences_starts_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
  stash?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stash_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stash_ends_with?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stash_gte?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stash_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stash_lte?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stash_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stash_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stash_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  stash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stash_starts_with?: Maybe<Scalars['String']>;
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AddPostAndProposalMutationMutationVariables = {
  onchainProposalId: Scalars['Int'];
  authorId: Scalars['Int'];
  proposerAddress: Scalars['String'];
  content: Scalars['String'];
  topicId: Scalars['Int'];
  typeId: Scalars['Int'];
};


export type AddPostAndProposalMutationMutation = (
  { __typename: 'mutation_root' }
  & { insert_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & { returning: Array<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id'>
    )> }
  )> }
);

export type AddPostAndTreasurySpendProposalMutationMutationVariables = {
  onchainTreasuryProposalId: Scalars['Int'];
  authorId: Scalars['Int'];
  proposerAddress: Scalars['String'];
  content: Scalars['String'];
  topicId: Scalars['Int'];
  typeId: Scalars['Int'];
};


export type AddPostAndTreasurySpendProposalMutationMutation = (
  { __typename: 'mutation_root' }
  & { insert_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & { returning: Array<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id'>
    )> }
  )> }
);

export type AddPostAndBountyMutationMutationVariables = {
  onchainBountyId: Scalars['Int'];
  authorId: Scalars['Int'];
  proposerAddress: Scalars['String'];
  content: Scalars['String'];
  topicId: Scalars['Int'];
  typeId: Scalars['Int'];
};


export type AddPostAndBountyMutationMutation = (
  { __typename: 'mutation_root' }
  & { insert_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & { returning: Array<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id'>
    )> }
  )> }
);

export type AddPostAndTipMutationMutationVariables = {
  onchainTipId: Scalars['String'];
  authorId: Scalars['Int'];
  proposerAddress: Scalars['String'];
  content: Scalars['String'];
  topicId: Scalars['Int'];
  typeId: Scalars['Int'];
};


export type AddPostAndTipMutationMutation = (
  { __typename: 'mutation_root' }
  & { insert_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & { returning: Array<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id'>
    )> }
  )> }
);

export type AddPostAndMotionMutationMutationVariables = {
  onchainMotionProposalId: Scalars['Int'];
  authorId: Scalars['Int'];
  proposerAddress: Scalars['String'];
  content: Scalars['String'];
  topicId: Scalars['Int'];
  typeId: Scalars['Int'];
};


export type AddPostAndMotionMutationMutation = (
  { __typename: 'mutation_root' }
  & { insert_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & { returning: Array<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id'>
    )> }
  )> }
);

export type GetProposalWithNoAssociatedReferendumQueryQueryVariables = {
  onchainProposalId: Scalars['Int'];
};


export type GetProposalWithNoAssociatedReferendumQueryQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type GetMotionWithNoAssociatedReferendumQueryQueryVariables = {
  onchainMotionId: Scalars['Int'];
};


export type GetMotionWithNoAssociatedReferendumQueryQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type AddReferendumIdToProposalMutationMutationVariables = {
  proposalId: Scalars['Int'];
  referendumId: Scalars['Int'];
};


export type AddReferendumIdToProposalMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & Pick<Onchain_Links_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddMotionIdToTreasuryProposalMutationMutationVariables = {
  treasuryProposalId: Scalars['Int'];
  motionId: Scalars['Int'];
};


export type AddMotionIdToTreasuryProposalMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & Pick<Onchain_Links_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddReferendumIdToMotionMutationMutationVariables = {
  motionId: Scalars['Int'];
  referendumId: Scalars['Int'];
};


export type AddReferendumIdToMotionMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_onchain_links?: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & Pick<Onchain_Links_Mutation_Response, 'affected_rows'>
  )> }
);

export type LoginMutationMutationVariables = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type LoginMutationMutation = (
  { __typename?: 'mutation_root' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type GetDiscussionProposalByIdQueryVariables = {
  onchainProposalId: Scalars['Int'];
};


export type GetDiscussionProposalByIdQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type GetDiscussionMotionProposalByIdQueryVariables = {
  onchainMotionProposalId: Scalars['Int'];
};


export type GetDiscussionMotionProposalByIdQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type GetDiscussionTreasurySpendProposalByIdQueryVariables = {
  onchainTreasuryProposalId: Scalars['Int'];
};


export type GetDiscussionTreasurySpendProposalByIdQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type GetDiscussionBountyByIdQueryVariables = {
  onchainBountyId: Scalars['Int'];
};


export type GetDiscussionBountyByIdQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type GetDiscussionTipByIdQueryVariables = {
  onchainTipId: Scalars['String'];
};


export type GetDiscussionTipByIdQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & Pick<Onchain_Links, 'id'>
  )> }
);

export type GetDiscussionMotionsQueryVariables = {};


export type GetDiscussionMotionsQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & DiscussionMotionFragment
  )> }
);

export type DiscussionMotionFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
);

export type GetDiscussionProposalsQueryVariables = {};


export type GetDiscussionProposalsQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & DiscussionProposalFragment
  )> }
);

export type DiscussionProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'proposer_address'>
);

export type GetDiscussionReferendaQueryVariables = {};


export type GetDiscussionReferendaQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & DiscussionReferendumFragment
  )> }
);

export type DiscussionReferendumFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_referendum_id'>
);

export type GetDiscussionTreasuryProposalsQueryVariables = {};


export type GetDiscussionTreasuryProposalsQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & DiscussionTreasuryProposalFragment
  )> }
);

export type DiscussionTreasuryProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
);

export type GetDiscussionBountiesQueryVariables = {};


export type GetDiscussionBountiesQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & DiscussionBountyFragment
  )> }
);

export type DiscussionBountyFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_bounty_id' | 'proposer_address'>
);

export type GetDiscussionTipsQueryVariables = {};


export type GetDiscussionTipsQuery = (
  { __typename?: 'query_root' }
  & { onchain_links: Array<(
    { __typename?: 'onchain_links' }
    & DiscussionTipFragment
  )> }
);

export type DiscussionTipFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'onchain_tip_id' | 'proposer_address'>
);

export const DiscussionMotionFragmentDoc = gql`
    fragment discussionMotion on onchain_links {
  id
  onchain_motion_id
  proposer_address
}
    `;
export const DiscussionProposalFragmentDoc = gql`
    fragment discussionProposal on onchain_links {
  id
  onchain_proposal_id
  proposer_address
}
    `;
export const DiscussionReferendumFragmentDoc = gql`
    fragment discussionReferendum on onchain_links {
  id
  onchain_referendum_id
}
    `;
export const DiscussionTreasuryProposalFragmentDoc = gql`
    fragment discussionTreasuryProposal on onchain_links {
  id
  onchain_treasury_proposal_id
  proposer_address
}
    `;
export const DiscussionBountyFragmentDoc = gql`
    fragment discussionBounty on onchain_links {
  id
  onchain_bounty_id
  proposer_address
}
    `;
export const DiscussionTipFragmentDoc = gql`
    fragment discussionTip on onchain_links {
  id
  onchain_tip_id
  proposer_address
}
    `;
export const AddPostAndProposalMutationDocument = gql`
    mutation addPostAndProposalMutation($onchainProposalId: Int!, $authorId: Int!, $proposerAddress: String!, $content: String!, $topicId: Int!, $typeId: Int!) {
  __typename
  insert_onchain_links(objects: {onchain_proposal_id: $onchainProposalId, proposer_address: $proposerAddress, post: {data: {author_id: $authorId, content: $content, topic_id: $topicId, type_id: $typeId}}}) {
    returning {
      id
    }
  }
}
    `;
export const AddPostAndTreasurySpendProposalMutationDocument = gql`
    mutation addPostAndTreasurySpendProposalMutation($onchainTreasuryProposalId: Int!, $authorId: Int!, $proposerAddress: String!, $content: String!, $topicId: Int!, $typeId: Int!) {
  __typename
  insert_onchain_links(objects: {onchain_treasury_proposal_id: $onchainTreasuryProposalId, proposer_address: $proposerAddress, post: {data: {author_id: $authorId, content: $content, topic_id: $topicId, type_id: $typeId}}}) {
    returning {
      id
    }
  }
}
    `;
export const AddPostAndBountyMutationDocument = gql`
    mutation addPostAndBountyMutation($onchainBountyId: Int!, $authorId: Int!, $proposerAddress: String!, $content: String!, $topicId: Int!, $typeId: Int!) {
  __typename
  insert_onchain_links(objects: {onchain_bounty_id: $onchainBountyId, proposer_address: $proposerAddress, post: {data: {author_id: $authorId, content: $content, topic_id: $topicId, type_id: $typeId}}}) {
    returning {
      id
    }
  }
}
    `;
export const AddPostAndTipMutationDocument = gql`
    mutation addPostAndTipMutation($onchainTipId: String!, $authorId: Int!, $proposerAddress: String!, $content: String!, $topicId: Int!, $typeId: Int!) {
  __typename
  insert_onchain_links(objects: {onchain_tip_id: $onchainTipId, proposer_address: $proposerAddress, post: {data: {author_id: $authorId, content: $content, topic_id: $topicId, type_id: $typeId}}}) {
    returning {
      id
    }
  }
}
    `;
export const AddPostAndMotionMutationDocument = gql`
    mutation addPostAndMotionMutation($onchainMotionProposalId: Int!, $authorId: Int!, $proposerAddress: String!, $content: String!, $topicId: Int!, $typeId: Int!) {
  __typename
  insert_onchain_links(objects: {onchain_motion_id: $onchainMotionProposalId, proposer_address: $proposerAddress, post: {data: {author_id: $authorId, content: $content, topic_id: $topicId, type_id: $typeId}}}) {
    returning {
      id
    }
  }
}
    `;
export const GetProposalWithNoAssociatedReferendumQueryDocument = gql`
    query getProposalWithNoAssociatedReferendumQuery($onchainProposalId: Int!) {
  onchain_links(where: {_and: {onchain_proposal_id: {_eq: $onchainProposalId}, onchain_referendum_id: {_is_null: true}}}) {
    id
  }
}
    `;
export const GetMotionWithNoAssociatedReferendumQueryDocument = gql`
    query getMotionWithNoAssociatedReferendumQuery($onchainMotionId: Int!) {
  onchain_links(where: {_and: {onchain_motion_id: {_eq: $onchainMotionId}, onchain_referendum_id: {_is_null: true}}}) {
    id
  }
}
    `;
export const AddReferendumIdToProposalMutationDocument = gql`
    mutation addReferendumIdToProposalMutation($proposalId: Int!, $referendumId: Int!) {
  update_onchain_links(where: {onchain_proposal_id: {_eq: $proposalId}}, _set: {onchain_referendum_id: $referendumId}) {
    affected_rows
  }
}
    `;
export const AddMotionIdToTreasuryProposalMutationDocument = gql`
    mutation addMotionIdToTreasuryProposalMutation($treasuryProposalId: Int!, $motionId: Int!) {
  update_onchain_links(where: {onchain_treasury_proposal_id: {_eq: $treasuryProposalId}}, _set: {onchain_motion_id: $motionId}) {
    affected_rows
  }
}
    `;
export const AddReferendumIdToMotionMutationDocument = gql`
    mutation addReferendumIdToMotionMutation($motionId: Int!, $referendumId: Int!) {
  update_onchain_links(where: {onchain_motion_id: {_eq: $motionId}}, _set: {onchain_referendum_id: $referendumId}) {
    affected_rows
  }
}
    `;
export const LoginMutationDocument = gql`
    mutation loginMutation($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    token
  }
}
    `;
export const GetDiscussionProposalByIdDocument = gql`
    query getDiscussionProposalById($onchainProposalId: Int!) {
  onchain_links(where: {onchain_proposal_id: {_eq: $onchainProposalId}}) {
    id
  }
}
    `;
export const GetDiscussionMotionProposalByIdDocument = gql`
    query getDiscussionMotionProposalById($onchainMotionProposalId: Int!) {
  onchain_links(where: {onchain_motion_id: {_eq: $onchainMotionProposalId}}) {
    id
  }
}
    `;
export const GetDiscussionTreasurySpendProposalByIdDocument = gql`
    query getDiscussionTreasurySpendProposalById($onchainTreasuryProposalId: Int!) {
  onchain_links(where: {onchain_treasury_proposal_id: {_eq: $onchainTreasuryProposalId}}) {
    id
  }
}
    `;
export const GetDiscussionBountyByIdDocument = gql`
    query getDiscussionBountyById($onchainBountyId: Int!) {
  onchain_links(where: {onchain_bounty_id: {_eq: $onchainBountyId}}) {
    id
  }
}
    `;
export const GetDiscussionTipByIdDocument = gql`
    query getDiscussionTipById($onchainTipId: String!) {
  onchain_links(where: {onchain_tip_id: {_eq: $onchainTipId}}) {
    id
  }
}
    `;
export const GetDiscussionMotionsDocument = gql`
    query getDiscussionMotions {
  onchain_links(where: {onchain_motion_id: {_is_null: false}}) {
    ...discussionMotion
  }
}
    ${DiscussionMotionFragmentDoc}`;
export const GetDiscussionProposalsDocument = gql`
    query getDiscussionProposals {
  onchain_links(where: {onchain_proposal_id: {_is_null: false}}) {
    ...discussionProposal
  }
}
    ${DiscussionProposalFragmentDoc}`;
export const GetDiscussionReferendaDocument = gql`
    query getDiscussionReferenda {
  onchain_links(where: {onchain_referendum_id: {_is_null: false}}) {
    ...discussionReferendum
  }
}
    ${DiscussionReferendumFragmentDoc}`;
export const GetDiscussionTreasuryProposalsDocument = gql`
    query getDiscussionTreasuryProposals {
  onchain_links(where: {onchain_treasury_proposal_id: {_is_null: false}}) {
    ...discussionTreasuryProposal
  }
}
    ${DiscussionTreasuryProposalFragmentDoc}`;
export const GetDiscussionBountiesDocument = gql`
    query getDiscussionBounties {
  onchain_links(where: {onchain_bounty_id: {_is_null: false}}) {
    ...discussionBounty
  }
}
    ${DiscussionBountyFragmentDoc}`;
export const GetDiscussionTipsDocument = gql`
    query getDiscussionTips {
  onchain_links(where: {onchain_tip_id: {_is_null: false}}) {
    ...discussionTip
  }
}
    ${DiscussionTipFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addPostAndProposalMutation(variables: AddPostAndProposalMutationMutationVariables): Promise<AddPostAndProposalMutationMutation> {
      return withWrapper(() => client.request<AddPostAndProposalMutationMutation>(print(AddPostAndProposalMutationDocument), variables));
    },
    addPostAndTreasurySpendProposalMutation(variables: AddPostAndTreasurySpendProposalMutationMutationVariables): Promise<AddPostAndTreasurySpendProposalMutationMutation> {
      return withWrapper(() => client.request<AddPostAndTreasurySpendProposalMutationMutation>(print(AddPostAndTreasurySpendProposalMutationDocument), variables));
    },
    addPostAndBountyMutation(variables: AddPostAndBountyMutationMutationVariables): Promise<AddPostAndBountyMutationMutation> {
      return withWrapper(() => client.request<AddPostAndBountyMutationMutation>(print(AddPostAndBountyMutationDocument), variables));
    },
    addPostAndTipMutation(variables: AddPostAndTipMutationMutationVariables): Promise<AddPostAndTipMutationMutation> {
      return withWrapper(() => client.request<AddPostAndTipMutationMutation>(print(AddPostAndTipMutationDocument), variables));
    },
    addPostAndMotionMutation(variables: AddPostAndMotionMutationMutationVariables): Promise<AddPostAndMotionMutationMutation> {
      return withWrapper(() => client.request<AddPostAndMotionMutationMutation>(print(AddPostAndMotionMutationDocument), variables));
    },
    getProposalWithNoAssociatedReferendumQuery(variables: GetProposalWithNoAssociatedReferendumQueryQueryVariables): Promise<GetProposalWithNoAssociatedReferendumQueryQuery> {
      return withWrapper(() => client.request<GetProposalWithNoAssociatedReferendumQueryQuery>(print(GetProposalWithNoAssociatedReferendumQueryDocument), variables));
    },
    getMotionWithNoAssociatedReferendumQuery(variables: GetMotionWithNoAssociatedReferendumQueryQueryVariables): Promise<GetMotionWithNoAssociatedReferendumQueryQuery> {
      return withWrapper(() => client.request<GetMotionWithNoAssociatedReferendumQueryQuery>(print(GetMotionWithNoAssociatedReferendumQueryDocument), variables));
    },
    addReferendumIdToProposalMutation(variables: AddReferendumIdToProposalMutationMutationVariables): Promise<AddReferendumIdToProposalMutationMutation> {
      return withWrapper(() => client.request<AddReferendumIdToProposalMutationMutation>(print(AddReferendumIdToProposalMutationDocument), variables));
    },
    addMotionIdToTreasuryProposalMutation(variables: AddMotionIdToTreasuryProposalMutationMutationVariables): Promise<AddMotionIdToTreasuryProposalMutationMutation> {
      return withWrapper(() => client.request<AddMotionIdToTreasuryProposalMutationMutation>(print(AddMotionIdToTreasuryProposalMutationDocument), variables));
    },
    addReferendumIdToMotionMutation(variables: AddReferendumIdToMotionMutationMutationVariables): Promise<AddReferendumIdToMotionMutationMutation> {
      return withWrapper(() => client.request<AddReferendumIdToMotionMutationMutation>(print(AddReferendumIdToMotionMutationDocument), variables));
    },
    loginMutation(variables: LoginMutationMutationVariables): Promise<LoginMutationMutation> {
      return withWrapper(() => client.request<LoginMutationMutation>(print(LoginMutationDocument), variables));
    },
    getDiscussionProposalById(variables: GetDiscussionProposalByIdQueryVariables): Promise<GetDiscussionProposalByIdQuery> {
      return withWrapper(() => client.request<GetDiscussionProposalByIdQuery>(print(GetDiscussionProposalByIdDocument), variables));
    },
    getDiscussionMotionProposalById(variables: GetDiscussionMotionProposalByIdQueryVariables): Promise<GetDiscussionMotionProposalByIdQuery> {
      return withWrapper(() => client.request<GetDiscussionMotionProposalByIdQuery>(print(GetDiscussionMotionProposalByIdDocument), variables));
    },
    getDiscussionTreasurySpendProposalById(variables: GetDiscussionTreasurySpendProposalByIdQueryVariables): Promise<GetDiscussionTreasurySpendProposalByIdQuery> {
      return withWrapper(() => client.request<GetDiscussionTreasurySpendProposalByIdQuery>(print(GetDiscussionTreasurySpendProposalByIdDocument), variables));
    },
    getDiscussionBountyById(variables: GetDiscussionBountyByIdQueryVariables): Promise<GetDiscussionBountyByIdQuery> {
      return withWrapper(() => client.request<GetDiscussionBountyByIdQuery>(print(GetDiscussionBountyByIdDocument), variables));
    },
    getDiscussionTipById(variables: GetDiscussionTipByIdQueryVariables): Promise<GetDiscussionTipByIdQuery> {
      return withWrapper(() => client.request<GetDiscussionTipByIdQuery>(print(GetDiscussionTipByIdDocument), variables));
    },
    getDiscussionMotions(variables?: GetDiscussionMotionsQueryVariables): Promise<GetDiscussionMotionsQuery> {
      return withWrapper(() => client.request<GetDiscussionMotionsQuery>(print(GetDiscussionMotionsDocument), variables));
    },
    getDiscussionProposals(variables?: GetDiscussionProposalsQueryVariables): Promise<GetDiscussionProposalsQuery> {
      return withWrapper(() => client.request<GetDiscussionProposalsQuery>(print(GetDiscussionProposalsDocument), variables));
    },
    getDiscussionReferenda(variables?: GetDiscussionReferendaQueryVariables): Promise<GetDiscussionReferendaQuery> {
      return withWrapper(() => client.request<GetDiscussionReferendaQuery>(print(GetDiscussionReferendaDocument), variables));
    },
    getDiscussionTreasuryProposals(variables?: GetDiscussionTreasuryProposalsQueryVariables): Promise<GetDiscussionTreasuryProposalsQuery> {
      return withWrapper(() => client.request<GetDiscussionTreasuryProposalsQuery>(print(GetDiscussionTreasuryProposalsDocument), variables));
    },
    getDiscussionBounties(variables?: GetDiscussionBountiesQueryVariables): Promise<GetDiscussionBountiesQuery> {
      return withWrapper(() => client.request<GetDiscussionBountiesQuery>(print(GetDiscussionBountiesDocument), variables));
    },
    getDiscussionTips(variables?: GetDiscussionTipsQueryVariables): Promise<GetDiscussionTipsQuery> {
      return withWrapper(() => client.request<GetDiscussionTipsQuery>(print(GetDiscussionTipsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;