import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Json: any,
  Long: any,
};

export type AggregateBlockIndex = {
   __typename?: 'AggregateBlockIndex',
  count: Scalars['Int'],
};

export type AggregateBlockNumber = {
   __typename?: 'AggregateBlockNumber',
  count: Scalars['Int'],
};

export type AggregateCouncil = {
   __typename?: 'AggregateCouncil',
  count: Scalars['Int'],
};

export type AggregateCouncilMember = {
   __typename?: 'AggregateCouncilMember',
  count: Scalars['Int'],
};

export type AggregateEra = {
   __typename?: 'AggregateEra',
  count: Scalars['Int'],
};

export type AggregateHeartBeat = {
   __typename?: 'AggregateHeartBeat',
  count: Scalars['Int'],
};

export type AggregateMotion = {
   __typename?: 'AggregateMotion',
  count: Scalars['Int'],
};

export type AggregateMotionProposalArgument = {
   __typename?: 'AggregateMotionProposalArgument',
  count: Scalars['Int'],
};

export type AggregateMotionStatus = {
   __typename?: 'AggregateMotionStatus',
  count: Scalars['Int'],
};

export type AggregateNomination = {
   __typename?: 'AggregateNomination',
  count: Scalars['Int'],
};

export type AggregateOfflineValidator = {
   __typename?: 'AggregateOfflineValidator',
  count: Scalars['Int'],
};

export type AggregatePreimage = {
   __typename?: 'AggregatePreimage',
  count: Scalars['Int'],
};

export type AggregatePreimageArgument = {
   __typename?: 'AggregatePreimageArgument',
  count: Scalars['Int'],
};

export type AggregatePreimageStatus = {
   __typename?: 'AggregatePreimageStatus',
  count: Scalars['Int'],
};

export type AggregateProposal = {
   __typename?: 'AggregateProposal',
  count: Scalars['Int'],
};

export type AggregateProposalStatus = {
   __typename?: 'AggregateProposalStatus',
  count: Scalars['Int'],
};

export type AggregateReferendum = {
   __typename?: 'AggregateReferendum',
  count: Scalars['Int'],
};

export type AggregateReferendumStatus = {
   __typename?: 'AggregateReferendumStatus',
  count: Scalars['Int'],
};

export type AggregateReward = {
   __typename?: 'AggregateReward',
  count: Scalars['Int'],
};

export type AggregateSession = {
   __typename?: 'AggregateSession',
  count: Scalars['Int'],
};

export type AggregateSlashing = {
   __typename?: 'AggregateSlashing',
  count: Scalars['Int'],
};

export type AggregateStake = {
   __typename?: 'AggregateStake',
  count: Scalars['Int'],
};

export type AggregateTotalIssuance = {
   __typename?: 'AggregateTotalIssuance',
  count: Scalars['Int'],
};

export type AggregateTreasurySpendProposal = {
   __typename?: 'AggregateTreasurySpendProposal',
  count: Scalars['Int'],
};

export type AggregateTreasuryStatus = {
   __typename?: 'AggregateTreasuryStatus',
  count: Scalars['Int'],
};

export type AggregateValidator = {
   __typename?: 'AggregateValidator',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export type BlockIndex = Node & {
   __typename?: 'BlockIndex',
  id: Scalars['ID'],
  identifier: Scalars['String'],
  startFrom: Scalars['Int'],
  index: Scalars['Int'],
};

export type BlockIndexConnection = {
   __typename?: 'BlockIndexConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<BlockIndexEdge>>,
  aggregate: AggregateBlockIndex,
};

export type BlockIndexCreateInput = {
  id?: Maybe<Scalars['ID']>,
  identifier: Scalars['String'],
  startFrom: Scalars['Int'],
  index: Scalars['Int'],
};

export type BlockIndexEdge = {
   __typename?: 'BlockIndexEdge',
  node: BlockIndex,
  cursor: Scalars['String'],
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
   __typename?: 'BlockIndexPreviousValues',
  id: Scalars['ID'],
  identifier: Scalars['String'],
  startFrom: Scalars['Int'],
  index: Scalars['Int'],
};

export type BlockIndexSubscriptionPayload = {
   __typename?: 'BlockIndexSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<BlockIndex>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<BlockIndexPreviousValues>,
};

export type BlockIndexSubscriptionWhereInput = {
  AND?: Maybe<Array<BlockIndexSubscriptionWhereInput>>,
  OR?: Maybe<Array<BlockIndexSubscriptionWhereInput>>,
  NOT?: Maybe<Array<BlockIndexSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<BlockIndexWhereInput>,
};

export type BlockIndexUpdateInput = {
  identifier?: Maybe<Scalars['String']>,
  startFrom?: Maybe<Scalars['Int']>,
  index?: Maybe<Scalars['Int']>,
};

export type BlockIndexUpdateManyMutationInput = {
  identifier?: Maybe<Scalars['String']>,
  startFrom?: Maybe<Scalars['Int']>,
  index?: Maybe<Scalars['Int']>,
};

export type BlockIndexWhereInput = {
  AND?: Maybe<Array<BlockIndexWhereInput>>,
  OR?: Maybe<Array<BlockIndexWhereInput>>,
  NOT?: Maybe<Array<BlockIndexWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  identifier?: Maybe<Scalars['String']>,
  identifier_not?: Maybe<Scalars['String']>,
  identifier_in?: Maybe<Array<Scalars['String']>>,
  identifier_not_in?: Maybe<Array<Scalars['String']>>,
  identifier_lt?: Maybe<Scalars['String']>,
  identifier_lte?: Maybe<Scalars['String']>,
  identifier_gt?: Maybe<Scalars['String']>,
  identifier_gte?: Maybe<Scalars['String']>,
  identifier_contains?: Maybe<Scalars['String']>,
  identifier_not_contains?: Maybe<Scalars['String']>,
  identifier_starts_with?: Maybe<Scalars['String']>,
  identifier_not_starts_with?: Maybe<Scalars['String']>,
  identifier_ends_with?: Maybe<Scalars['String']>,
  identifier_not_ends_with?: Maybe<Scalars['String']>,
  startFrom?: Maybe<Scalars['Int']>,
  startFrom_not?: Maybe<Scalars['Int']>,
  startFrom_in?: Maybe<Array<Scalars['Int']>>,
  startFrom_not_in?: Maybe<Array<Scalars['Int']>>,
  startFrom_lt?: Maybe<Scalars['Int']>,
  startFrom_lte?: Maybe<Scalars['Int']>,
  startFrom_gt?: Maybe<Scalars['Int']>,
  startFrom_gte?: Maybe<Scalars['Int']>,
  index?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
};

export type BlockIndexWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  identifier?: Maybe<Scalars['String']>,
};

export type BlockNumber = Node & {
   __typename?: 'BlockNumber',
  id: Scalars['ID'],
  number: Scalars['Int'],
  authoredBy: Scalars['String'],
  startDateTime: Scalars['DateTime'],
  hash: Scalars['String'],
};

export type BlockNumberConnection = {
   __typename?: 'BlockNumberConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<BlockNumberEdge>>,
  aggregate: AggregateBlockNumber,
};

export type BlockNumberCreateInput = {
  id?: Maybe<Scalars['ID']>,
  number: Scalars['Int'],
  authoredBy: Scalars['String'],
  startDateTime: Scalars['DateTime'],
  hash: Scalars['String'],
};

export type BlockNumberCreateOneInput = {
  create?: Maybe<BlockNumberCreateInput>,
  connect?: Maybe<BlockNumberWhereUniqueInput>,
};

export type BlockNumberEdge = {
   __typename?: 'BlockNumberEdge',
  node: BlockNumber,
  cursor: Scalars['String'],
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
   __typename?: 'BlockNumberPreviousValues',
  id: Scalars['ID'],
  number: Scalars['Int'],
  authoredBy: Scalars['String'],
  startDateTime: Scalars['DateTime'],
  hash: Scalars['String'],
};

export type BlockNumberSubscriptionPayload = {
   __typename?: 'BlockNumberSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<BlockNumber>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<BlockNumberPreviousValues>,
};

export type BlockNumberSubscriptionWhereInput = {
  AND?: Maybe<Array<BlockNumberSubscriptionWhereInput>>,
  OR?: Maybe<Array<BlockNumberSubscriptionWhereInput>>,
  NOT?: Maybe<Array<BlockNumberSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<BlockNumberWhereInput>,
};

export type BlockNumberUpdateDataInput = {
  number?: Maybe<Scalars['Int']>,
  authoredBy?: Maybe<Scalars['String']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
  hash?: Maybe<Scalars['String']>,
};

export type BlockNumberUpdateInput = {
  number?: Maybe<Scalars['Int']>,
  authoredBy?: Maybe<Scalars['String']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
  hash?: Maybe<Scalars['String']>,
};

export type BlockNumberUpdateManyMutationInput = {
  number?: Maybe<Scalars['Int']>,
  authoredBy?: Maybe<Scalars['String']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
  hash?: Maybe<Scalars['String']>,
};

export type BlockNumberUpdateOneRequiredInput = {
  create?: Maybe<BlockNumberCreateInput>,
  connect?: Maybe<BlockNumberWhereUniqueInput>,
  update?: Maybe<BlockNumberUpdateDataInput>,
  upsert?: Maybe<BlockNumberUpsertNestedInput>,
};

export type BlockNumberUpsertNestedInput = {
  update: BlockNumberUpdateDataInput,
  create: BlockNumberCreateInput,
};

export type BlockNumberWhereInput = {
  AND?: Maybe<Array<BlockNumberWhereInput>>,
  OR?: Maybe<Array<BlockNumberWhereInput>>,
  NOT?: Maybe<Array<BlockNumberWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Int']>,
  number_not?: Maybe<Scalars['Int']>,
  number_in?: Maybe<Array<Scalars['Int']>>,
  number_not_in?: Maybe<Array<Scalars['Int']>>,
  number_lt?: Maybe<Scalars['Int']>,
  number_lte?: Maybe<Scalars['Int']>,
  number_gt?: Maybe<Scalars['Int']>,
  number_gte?: Maybe<Scalars['Int']>,
  authoredBy?: Maybe<Scalars['String']>,
  authoredBy_not?: Maybe<Scalars['String']>,
  authoredBy_in?: Maybe<Array<Scalars['String']>>,
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>,
  authoredBy_lt?: Maybe<Scalars['String']>,
  authoredBy_lte?: Maybe<Scalars['String']>,
  authoredBy_gt?: Maybe<Scalars['String']>,
  authoredBy_gte?: Maybe<Scalars['String']>,
  authoredBy_contains?: Maybe<Scalars['String']>,
  authoredBy_not_contains?: Maybe<Scalars['String']>,
  authoredBy_starts_with?: Maybe<Scalars['String']>,
  authoredBy_not_starts_with?: Maybe<Scalars['String']>,
  authoredBy_ends_with?: Maybe<Scalars['String']>,
  authoredBy_not_ends_with?: Maybe<Scalars['String']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
  startDateTime_not?: Maybe<Scalars['DateTime']>,
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>,
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>,
  startDateTime_lt?: Maybe<Scalars['DateTime']>,
  startDateTime_lte?: Maybe<Scalars['DateTime']>,
  startDateTime_gt?: Maybe<Scalars['DateTime']>,
  startDateTime_gte?: Maybe<Scalars['DateTime']>,
  hash?: Maybe<Scalars['String']>,
  hash_not?: Maybe<Scalars['String']>,
  hash_in?: Maybe<Array<Scalars['String']>>,
  hash_not_in?: Maybe<Array<Scalars['String']>>,
  hash_lt?: Maybe<Scalars['String']>,
  hash_lte?: Maybe<Scalars['String']>,
  hash_gt?: Maybe<Scalars['String']>,
  hash_gte?: Maybe<Scalars['String']>,
  hash_contains?: Maybe<Scalars['String']>,
  hash_not_contains?: Maybe<Scalars['String']>,
  hash_starts_with?: Maybe<Scalars['String']>,
  hash_not_starts_with?: Maybe<Scalars['String']>,
  hash_ends_with?: Maybe<Scalars['String']>,
  hash_not_ends_with?: Maybe<Scalars['String']>,
};

export type BlockNumberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Int']>,
  hash?: Maybe<Scalars['String']>,
};

export type Council = Node & {
   __typename?: 'Council',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  members?: Maybe<Array<CouncilMember>>,
};


export type CouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>,
  orderBy?: Maybe<CouncilMemberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CouncilConnection = {
   __typename?: 'CouncilConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CouncilEdge>>,
  aggregate: AggregateCouncil,
};

export type CouncilCreateInput = {
  id?: Maybe<Scalars['ID']>,
  blockNumber: BlockNumberCreateOneInput,
  members?: Maybe<CouncilMemberCreateManyWithoutCouncilsInput>,
};

export type CouncilCreateManyWithoutMembersInput = {
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>,
  connect?: Maybe<Array<CouncilWhereUniqueInput>>,
};

export type CouncilCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  blockNumber: BlockNumberCreateOneInput,
};

export type CouncilEdge = {
   __typename?: 'CouncilEdge',
  node: Council,
  cursor: Scalars['String'],
};

export type CouncilMember = Node & {
   __typename?: 'CouncilMember',
  id: Scalars['ID'],
  address: Scalars['String'],
  councils?: Maybe<Array<Council>>,
};


export type CouncilMemberCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>,
  orderBy?: Maybe<CouncilOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CouncilMemberConnection = {
   __typename?: 'CouncilMemberConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CouncilMemberEdge>>,
  aggregate: AggregateCouncilMember,
};

export type CouncilMemberCreateInput = {
  id?: Maybe<Scalars['ID']>,
  address: Scalars['String'],
  councils?: Maybe<CouncilCreateManyWithoutMembersInput>,
};

export type CouncilMemberCreateManyWithoutCouncilsInput = {
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>,
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
};

export type CouncilMemberCreateWithoutCouncilsInput = {
  id?: Maybe<Scalars['ID']>,
  address: Scalars['String'],
};

export type CouncilMemberEdge = {
   __typename?: 'CouncilMemberEdge',
  node: CouncilMember,
  cursor: Scalars['String'],
};

export enum CouncilMemberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC'
}

export type CouncilMemberPreviousValues = {
   __typename?: 'CouncilMemberPreviousValues',
  id: Scalars['ID'],
  address: Scalars['String'],
};

export type CouncilMemberScalarWhereInput = {
  AND?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  OR?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  NOT?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
};

export type CouncilMemberSubscriptionPayload = {
   __typename?: 'CouncilMemberSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<CouncilMember>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CouncilMemberPreviousValues>,
};

export type CouncilMemberSubscriptionWhereInput = {
  AND?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>,
  OR?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>,
  NOT?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CouncilMemberWhereInput>,
};

export type CouncilMemberUpdateInput = {
  address?: Maybe<Scalars['String']>,
  councils?: Maybe<CouncilUpdateManyWithoutMembersInput>,
};

export type CouncilMemberUpdateManyDataInput = {
  address?: Maybe<Scalars['String']>,
};

export type CouncilMemberUpdateManyMutationInput = {
  address?: Maybe<Scalars['String']>,
};

export type CouncilMemberUpdateManyWithoutCouncilsInput = {
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>,
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  set?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  disconnect?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  delete?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  update?: Maybe<Array<CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput>>,
  updateMany?: Maybe<Array<CouncilMemberUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  upsert?: Maybe<Array<CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput>>,
};

export type CouncilMemberUpdateManyWithWhereNestedInput = {
  where: CouncilMemberScalarWhereInput,
  data: CouncilMemberUpdateManyDataInput,
};

export type CouncilMemberUpdateWithoutCouncilsDataInput = {
  address?: Maybe<Scalars['String']>,
};

export type CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput = {
  where: CouncilMemberWhereUniqueInput,
  data: CouncilMemberUpdateWithoutCouncilsDataInput,
};

export type CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput = {
  where: CouncilMemberWhereUniqueInput,
  update: CouncilMemberUpdateWithoutCouncilsDataInput,
  create: CouncilMemberCreateWithoutCouncilsInput,
};

export type CouncilMemberWhereInput = {
  AND?: Maybe<Array<CouncilMemberWhereInput>>,
  OR?: Maybe<Array<CouncilMemberWhereInput>>,
  NOT?: Maybe<Array<CouncilMemberWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  councils_every?: Maybe<CouncilWhereInput>,
  councils_some?: Maybe<CouncilWhereInput>,
  councils_none?: Maybe<CouncilWhereInput>,
};

export type CouncilMemberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  address?: Maybe<Scalars['String']>,
};

export enum CouncilOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilPreviousValues = {
   __typename?: 'CouncilPreviousValues',
  id: Scalars['ID'],
};

export type CouncilScalarWhereInput = {
  AND?: Maybe<Array<CouncilScalarWhereInput>>,
  OR?: Maybe<Array<CouncilScalarWhereInput>>,
  NOT?: Maybe<Array<CouncilScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
};

export type CouncilSubscriptionPayload = {
   __typename?: 'CouncilSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Council>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CouncilPreviousValues>,
};

export type CouncilSubscriptionWhereInput = {
  AND?: Maybe<Array<CouncilSubscriptionWhereInput>>,
  OR?: Maybe<Array<CouncilSubscriptionWhereInput>>,
  NOT?: Maybe<Array<CouncilSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CouncilWhereInput>,
};

export type CouncilUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  members?: Maybe<CouncilMemberUpdateManyWithoutCouncilsInput>,
};

export type CouncilUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>,
  connect?: Maybe<Array<CouncilWhereUniqueInput>>,
  set?: Maybe<Array<CouncilWhereUniqueInput>>,
  disconnect?: Maybe<Array<CouncilWhereUniqueInput>>,
  delete?: Maybe<Array<CouncilWhereUniqueInput>>,
  update?: Maybe<Array<CouncilUpdateWithWhereUniqueWithoutMembersInput>>,
  deleteMany?: Maybe<Array<CouncilScalarWhereInput>>,
  upsert?: Maybe<Array<CouncilUpsertWithWhereUniqueWithoutMembersInput>>,
};

export type CouncilUpdateWithoutMembersDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type CouncilUpdateWithWhereUniqueWithoutMembersInput = {
  where: CouncilWhereUniqueInput,
  data: CouncilUpdateWithoutMembersDataInput,
};

export type CouncilUpsertWithWhereUniqueWithoutMembersInput = {
  where: CouncilWhereUniqueInput,
  update: CouncilUpdateWithoutMembersDataInput,
  create: CouncilCreateWithoutMembersInput,
};

export type CouncilWhereInput = {
  AND?: Maybe<Array<CouncilWhereInput>>,
  OR?: Maybe<Array<CouncilWhereInput>>,
  NOT?: Maybe<Array<CouncilWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  members_every?: Maybe<CouncilMemberWhereInput>,
  members_some?: Maybe<CouncilMemberWhereInput>,
  members_none?: Maybe<CouncilMemberWhereInput>,
};

export type CouncilWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Era = Node & {
   __typename?: 'Era',
  id: Scalars['ID'],
  index: Scalars['Int'],
  eraStartSessionIndex: Session,
  totalPoints: Scalars['String'],
  individualPoints: Array<Scalars['String']>,
};

export type EraConnection = {
   __typename?: 'EraConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<EraEdge>>,
  aggregate: AggregateEra,
};

export type EraCreateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type EraCreateInput = {
  id?: Maybe<Scalars['ID']>,
  index: Scalars['Int'],
  totalPoints: Scalars['String'],
  individualPoints?: Maybe<EraCreateindividualPointsInput>,
  eraStartSessionIndex: SessionCreateOneInput,
};

export type EraEdge = {
   __typename?: 'EraEdge',
  node: Era,
  cursor: Scalars['String'],
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
   __typename?: 'EraPreviousValues',
  id: Scalars['ID'],
  index: Scalars['Int'],
  totalPoints: Scalars['String'],
  individualPoints: Array<Scalars['String']>,
};

export type EraSubscriptionPayload = {
   __typename?: 'EraSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Era>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<EraPreviousValues>,
};

export type EraSubscriptionWhereInput = {
  AND?: Maybe<Array<EraSubscriptionWhereInput>>,
  OR?: Maybe<Array<EraSubscriptionWhereInput>>,
  NOT?: Maybe<Array<EraSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<EraWhereInput>,
};

export type EraUpdateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type EraUpdateInput = {
  index?: Maybe<Scalars['Int']>,
  totalPoints?: Maybe<Scalars['String']>,
  individualPoints?: Maybe<EraUpdateindividualPointsInput>,
  eraStartSessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
};

export type EraUpdateManyMutationInput = {
  index?: Maybe<Scalars['Int']>,
  totalPoints?: Maybe<Scalars['String']>,
  individualPoints?: Maybe<EraUpdateindividualPointsInput>,
};

export type EraWhereInput = {
  AND?: Maybe<Array<EraWhereInput>>,
  OR?: Maybe<Array<EraWhereInput>>,
  NOT?: Maybe<Array<EraWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
  totalPoints?: Maybe<Scalars['String']>,
  totalPoints_not?: Maybe<Scalars['String']>,
  totalPoints_in?: Maybe<Array<Scalars['String']>>,
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>,
  totalPoints_lt?: Maybe<Scalars['String']>,
  totalPoints_lte?: Maybe<Scalars['String']>,
  totalPoints_gt?: Maybe<Scalars['String']>,
  totalPoints_gte?: Maybe<Scalars['String']>,
  totalPoints_contains?: Maybe<Scalars['String']>,
  totalPoints_not_contains?: Maybe<Scalars['String']>,
  totalPoints_starts_with?: Maybe<Scalars['String']>,
  totalPoints_not_starts_with?: Maybe<Scalars['String']>,
  totalPoints_ends_with?: Maybe<Scalars['String']>,
  totalPoints_not_ends_with?: Maybe<Scalars['String']>,
  eraStartSessionIndex?: Maybe<SessionWhereInput>,
};

export type EraWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
};

export type HeartBeat = Node & {
   __typename?: 'HeartBeat',
  id: Scalars['ID'],
  sessionIndex: Session,
  authorityId: Scalars['String'],
};

export type HeartBeatConnection = {
   __typename?: 'HeartBeatConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<HeartBeatEdge>>,
  aggregate: AggregateHeartBeat,
};

export type HeartBeatCreateInput = {
  id?: Maybe<Scalars['ID']>,
  authorityId: Scalars['String'],
  sessionIndex: SessionCreateOneInput,
};

export type HeartBeatEdge = {
   __typename?: 'HeartBeatEdge',
  node: HeartBeat,
  cursor: Scalars['String'],
};

export enum HeartBeatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC'
}

export type HeartBeatPreviousValues = {
   __typename?: 'HeartBeatPreviousValues',
  id: Scalars['ID'],
  authorityId: Scalars['String'],
};

export type HeartBeatSubscriptionPayload = {
   __typename?: 'HeartBeatSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<HeartBeat>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<HeartBeatPreviousValues>,
};

export type HeartBeatSubscriptionWhereInput = {
  AND?: Maybe<Array<HeartBeatSubscriptionWhereInput>>,
  OR?: Maybe<Array<HeartBeatSubscriptionWhereInput>>,
  NOT?: Maybe<Array<HeartBeatSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<HeartBeatWhereInput>,
};

export type HeartBeatUpdateInput = {
  authorityId?: Maybe<Scalars['String']>,
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
};

export type HeartBeatUpdateManyMutationInput = {
  authorityId?: Maybe<Scalars['String']>,
};

export type HeartBeatWhereInput = {
  AND?: Maybe<Array<HeartBeatWhereInput>>,
  OR?: Maybe<Array<HeartBeatWhereInput>>,
  NOT?: Maybe<Array<HeartBeatWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  authorityId?: Maybe<Scalars['String']>,
  authorityId_not?: Maybe<Scalars['String']>,
  authorityId_in?: Maybe<Array<Scalars['String']>>,
  authorityId_not_in?: Maybe<Array<Scalars['String']>>,
  authorityId_lt?: Maybe<Scalars['String']>,
  authorityId_lte?: Maybe<Scalars['String']>,
  authorityId_gt?: Maybe<Scalars['String']>,
  authorityId_gte?: Maybe<Scalars['String']>,
  authorityId_contains?: Maybe<Scalars['String']>,
  authorityId_not_contains?: Maybe<Scalars['String']>,
  authorityId_starts_with?: Maybe<Scalars['String']>,
  authorityId_not_starts_with?: Maybe<Scalars['String']>,
  authorityId_ends_with?: Maybe<Scalars['String']>,
  authorityId_not_ends_with?: Maybe<Scalars['String']>,
  sessionIndex?: Maybe<SessionWhereInput>,
};

export type HeartBeatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};



export type Motion = {
   __typename?: 'Motion',
  id: Scalars['Int'],
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalArguments?: Maybe<Array<MotionProposalArgument>>,
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  motionStatus?: Maybe<Array<MotionStatus>>,
  preimage?: Maybe<Preimage>,
  preimageHash?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposal>,
  section: Scalars['String'],
};


export type MotionMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>,
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type MotionMotionStatusArgs = {
  where?: Maybe<MotionStatusWhereInput>,
  orderBy?: Maybe<MotionStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type MotionConnection = {
   __typename?: 'MotionConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<MotionEdge>>,
  aggregate: AggregateMotion,
};

export type MotionCreateInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateOneWithoutMotionProposalArgumentsInput = {
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
};

export type MotionCreateOneWithoutMotionStatusInput = {
  create?: Maybe<MotionCreateWithoutMotionStatusInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
};

export type MotionCreateOneWithoutPreimageInput = {
  create?: Maybe<MotionCreateWithoutPreimageInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
};

export type MotionCreateOneWithoutTreasurySpendProposalInput = {
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
};

export type MotionCreateWithoutMotionProposalArgumentsInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateWithoutMotionStatusInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateWithoutPreimageInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateWithoutTreasurySpendProposalInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
};

export type MotionEdge = {
   __typename?: 'MotionEdge',
  node: Motion,
  cursor: Scalars['String'],
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
   __typename?: 'MotionPreviousValues',
  id: Scalars['Int'],
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
};

export type MotionProposalArgument = Node & {
   __typename?: 'MotionProposalArgument',
  id: Scalars['ID'],
  name: Scalars['String'],
  motion: Motion,
  value: Scalars['String'],
};

export type MotionProposalArgumentConnection = {
   __typename?: 'MotionProposalArgumentConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<MotionProposalArgumentEdge>>,
  aggregate: AggregateMotionProposalArgument,
};

export type MotionProposalArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
  motion: MotionCreateOneWithoutMotionProposalArgumentsInput,
};

export type MotionProposalArgumentCreateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>,
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
};

export type MotionProposalArgumentCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type MotionProposalArgumentEdge = {
   __typename?: 'MotionProposalArgumentEdge',
  node: MotionProposalArgument,
  cursor: Scalars['String'],
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
   __typename?: 'MotionProposalArgumentPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  value: Scalars['String'],
};

export type MotionProposalArgumentScalarWhereInput = {
  AND?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  OR?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  NOT?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentSubscriptionPayload = {
   __typename?: 'MotionProposalArgumentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<MotionProposalArgument>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MotionProposalArgumentPreviousValues>,
};

export type MotionProposalArgumentSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>,
  OR?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MotionProposalArgumentWhereInput>,
};

export type MotionProposalArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput>,
};

export type MotionProposalArgumentUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentUpdateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>,
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  set?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  disconnect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  delete?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  update?: Maybe<Array<MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput>>,
  updateMany?: Maybe<Array<MotionProposalArgumentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  upsert?: Maybe<Array<MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput>>,
};

export type MotionProposalArgumentUpdateManyWithWhereNestedInput = {
  where: MotionProposalArgumentScalarWhereInput,
  data: MotionProposalArgumentUpdateManyDataInput,
};

export type MotionProposalArgumentUpdateWithoutMotionDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput = {
  where: MotionProposalArgumentWhereUniqueInput,
  data: MotionProposalArgumentUpdateWithoutMotionDataInput,
};

export type MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput = {
  where: MotionProposalArgumentWhereUniqueInput,
  update: MotionProposalArgumentUpdateWithoutMotionDataInput,
  create: MotionProposalArgumentCreateWithoutMotionInput,
};

export type MotionProposalArgumentWhereInput = {
  AND?: Maybe<Array<MotionProposalArgumentWhereInput>>,
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>,
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionWhereInput>,
};

export type MotionProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type MotionStatus = Node & {
   __typename?: 'MotionStatus',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  motion: Motion,
  status: Scalars['String'],
};

export type MotionStatusConnection = {
   __typename?: 'MotionStatusConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<MotionStatusEdge>>,
  aggregate: AggregateMotionStatus,
};

export type MotionStatusCreateInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  motion: MotionCreateOneWithoutMotionStatusInput,
};

export type MotionStatusCreateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>,
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>,
};

export type MotionStatusCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type MotionStatusEdge = {
   __typename?: 'MotionStatusEdge',
  node: MotionStatus,
  cursor: Scalars['String'],
};

export enum MotionStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type MotionStatusPreviousValues = {
   __typename?: 'MotionStatusPreviousValues',
  id: Scalars['ID'],
  status: Scalars['String'],
};

export type MotionStatusScalarWhereInput = {
  AND?: Maybe<Array<MotionStatusScalarWhereInput>>,
  OR?: Maybe<Array<MotionStatusScalarWhereInput>>,
  NOT?: Maybe<Array<MotionStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
};

export type MotionStatusSubscriptionPayload = {
   __typename?: 'MotionStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<MotionStatus>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MotionStatusPreviousValues>,
};

export type MotionStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<MotionStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MotionStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MotionStatusWhereInput>,
};

export type MotionStatusUpdateInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionStatusInput>,
};

export type MotionStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type MotionStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type MotionStatusUpdateManyWithoutMotionInput = {
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>,
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  set?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  disconnect?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  delete?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  update?: Maybe<Array<MotionStatusUpdateWithWhereUniqueWithoutMotionInput>>,
  updateMany?: Maybe<Array<MotionStatusUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MotionStatusScalarWhereInput>>,
  upsert?: Maybe<Array<MotionStatusUpsertWithWhereUniqueWithoutMotionInput>>,
};

export type MotionStatusUpdateManyWithWhereNestedInput = {
  where: MotionStatusScalarWhereInput,
  data: MotionStatusUpdateManyDataInput,
};

export type MotionStatusUpdateWithoutMotionDataInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type MotionStatusUpdateWithWhereUniqueWithoutMotionInput = {
  where: MotionStatusWhereUniqueInput,
  data: MotionStatusUpdateWithoutMotionDataInput,
};

export type MotionStatusUpsertWithWhereUniqueWithoutMotionInput = {
  where: MotionStatusWhereUniqueInput,
  update: MotionStatusUpdateWithoutMotionDataInput,
  create: MotionStatusCreateWithoutMotionInput,
};

export type MotionStatusWhereInput = {
  AND?: Maybe<Array<MotionStatusWhereInput>>,
  OR?: Maybe<Array<MotionStatusWhereInput>>,
  NOT?: Maybe<Array<MotionStatusWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  motion?: Maybe<MotionWhereInput>,
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type MotionSubscriptionPayload = {
   __typename?: 'MotionSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Motion>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MotionPreviousValues>,
};

export type MotionSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>,
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MotionWhereInput>,
};

export type MotionUpdateInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
};

export type MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput = {
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
  update?: Maybe<MotionUpdateWithoutMotionProposalArgumentsDataInput>,
  upsert?: Maybe<MotionUpsertWithoutMotionProposalArgumentsInput>,
};

export type MotionUpdateOneRequiredWithoutMotionStatusInput = {
  create?: Maybe<MotionCreateWithoutMotionStatusInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
  update?: Maybe<MotionUpdateWithoutMotionStatusDataInput>,
  upsert?: Maybe<MotionUpsertWithoutMotionStatusInput>,
};

export type MotionUpdateOneWithoutPreimageInput = {
  create?: Maybe<MotionCreateWithoutPreimageInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<MotionUpdateWithoutPreimageDataInput>,
  upsert?: Maybe<MotionUpsertWithoutPreimageInput>,
};

export type MotionUpdateOneWithoutTreasurySpendProposalInput = {
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>,
  connect?: Maybe<MotionWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<MotionUpdateWithoutTreasurySpendProposalDataInput>,
  upsert?: Maybe<MotionUpsertWithoutTreasurySpendProposalInput>,
};

export type MotionUpdateWithoutMotionProposalArgumentsDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateWithoutMotionStatusDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateWithoutPreimageDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateWithoutTreasurySpendProposalDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
};

export type MotionUpsertWithoutMotionProposalArgumentsInput = {
  update: MotionUpdateWithoutMotionProposalArgumentsDataInput,
  create: MotionCreateWithoutMotionProposalArgumentsInput,
};

export type MotionUpsertWithoutMotionStatusInput = {
  update: MotionUpdateWithoutMotionStatusDataInput,
  create: MotionCreateWithoutMotionStatusInput,
};

export type MotionUpsertWithoutPreimageInput = {
  update: MotionUpdateWithoutPreimageDataInput,
  create: MotionCreateWithoutPreimageInput,
};

export type MotionUpsertWithoutTreasurySpendProposalInput = {
  update: MotionUpdateWithoutTreasurySpendProposalDataInput,
  create: MotionCreateWithoutTreasurySpendProposalInput,
};

export type MotionWhereInput = {
  AND?: Maybe<Array<MotionWhereInput>>,
  OR?: Maybe<Array<MotionWhereInput>>,
  NOT?: Maybe<Array<MotionWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  author?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  memberCount_not?: Maybe<Scalars['Int']>,
  memberCount_in?: Maybe<Array<Scalars['Int']>>,
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>,
  memberCount_lt?: Maybe<Scalars['Int']>,
  memberCount_lte?: Maybe<Scalars['Int']>,
  memberCount_gt?: Maybe<Scalars['Int']>,
  memberCount_gte?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  metaDescription_not?: Maybe<Scalars['String']>,
  metaDescription_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_lt?: Maybe<Scalars['String']>,
  metaDescription_lte?: Maybe<Scalars['String']>,
  metaDescription_gt?: Maybe<Scalars['String']>,
  metaDescription_gte?: Maybe<Scalars['String']>,
  metaDescription_contains?: Maybe<Scalars['String']>,
  metaDescription_not_contains?: Maybe<Scalars['String']>,
  metaDescription_starts_with?: Maybe<Scalars['String']>,
  metaDescription_not_starts_with?: Maybe<Scalars['String']>,
  metaDescription_ends_with?: Maybe<Scalars['String']>,
  metaDescription_not_ends_with?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  method_not?: Maybe<Scalars['String']>,
  method_in?: Maybe<Array<Scalars['String']>>,
  method_not_in?: Maybe<Array<Scalars['String']>>,
  method_lt?: Maybe<Scalars['String']>,
  method_lte?: Maybe<Scalars['String']>,
  method_gt?: Maybe<Scalars['String']>,
  method_gte?: Maybe<Scalars['String']>,
  method_contains?: Maybe<Scalars['String']>,
  method_not_contains?: Maybe<Scalars['String']>,
  method_starts_with?: Maybe<Scalars['String']>,
  method_not_starts_with?: Maybe<Scalars['String']>,
  method_ends_with?: Maybe<Scalars['String']>,
  method_not_ends_with?: Maybe<Scalars['String']>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalHash_not?: Maybe<Scalars['String']>,
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>,
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>,
  motionProposalHash_lt?: Maybe<Scalars['String']>,
  motionProposalHash_lte?: Maybe<Scalars['String']>,
  motionProposalHash_gt?: Maybe<Scalars['String']>,
  motionProposalHash_gte?: Maybe<Scalars['String']>,
  motionProposalHash_contains?: Maybe<Scalars['String']>,
  motionProposalHash_not_contains?: Maybe<Scalars['String']>,
  motionProposalHash_starts_with?: Maybe<Scalars['String']>,
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>,
  motionProposalHash_ends_with?: Maybe<Scalars['String']>,
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  motionProposalId_not?: Maybe<Scalars['Int']>,
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>,
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  motionProposalId_lt?: Maybe<Scalars['Int']>,
  motionProposalId_lte?: Maybe<Scalars['Int']>,
  motionProposalId_gt?: Maybe<Scalars['Int']>,
  motionProposalId_gte?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  section_not?: Maybe<Scalars['String']>,
  section_in?: Maybe<Array<Scalars['String']>>,
  section_not_in?: Maybe<Array<Scalars['String']>>,
  section_lt?: Maybe<Scalars['String']>,
  section_lte?: Maybe<Scalars['String']>,
  section_gt?: Maybe<Scalars['String']>,
  section_gte?: Maybe<Scalars['String']>,
  section_contains?: Maybe<Scalars['String']>,
  section_not_contains?: Maybe<Scalars['String']>,
  section_starts_with?: Maybe<Scalars['String']>,
  section_not_starts_with?: Maybe<Scalars['String']>,
  section_ends_with?: Maybe<Scalars['String']>,
  section_not_ends_with?: Maybe<Scalars['String']>,
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>,
  motionStatus_every?: Maybe<MotionStatusWhereInput>,
  motionStatus_some?: Maybe<MotionStatusWhereInput>,
  motionStatus_none?: Maybe<MotionStatusWhereInput>,
  preimage?: Maybe<PreimageWhereInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>,
};

export type MotionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  motionProposalId?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createHeartBeat: HeartBeat,
  createOfflineValidator: OfflineValidator,
  createEra: Era,
  createSlashing: Slashing,
  createValidator: Validator,
  createTotalIssuance: TotalIssuance,
  createReward: Reward,
  createNomination: Nomination,
  createStake: Stake,
  createCouncil: Council,
  createCouncilMember: CouncilMember,
  createMotion: Motion,
  createMotionProposalArgument: MotionProposalArgument,
  createMotionStatus: MotionStatus,
  createProposal: Proposal,
  createProposalStatus: ProposalStatus,
  createPreimage: Preimage,
  createPreimageStatus: PreimageStatus,
  createPreimageArgument: PreimageArgument,
  createReferendum: Referendum,
  createReferendumStatus: ReferendumStatus,
  createBlockIndex: BlockIndex,
  createTreasurySpendProposal: TreasurySpendProposal,
  createTreasuryStatus: TreasuryStatus,
  createBlockNumber: BlockNumber,
  createSession: Session,
  updateHeartBeat?: Maybe<HeartBeat>,
  updateOfflineValidator?: Maybe<OfflineValidator>,
  updateEra?: Maybe<Era>,
  updateSlashing?: Maybe<Slashing>,
  updateValidator?: Maybe<Validator>,
  updateTotalIssuance?: Maybe<TotalIssuance>,
  updateReward?: Maybe<Reward>,
  updateNomination?: Maybe<Nomination>,
  updateStake?: Maybe<Stake>,
  updateCouncil?: Maybe<Council>,
  updateCouncilMember?: Maybe<CouncilMember>,
  updateMotion?: Maybe<Motion>,
  updateMotionProposalArgument?: Maybe<MotionProposalArgument>,
  updateMotionStatus?: Maybe<MotionStatus>,
  updateProposal?: Maybe<Proposal>,
  updateProposalStatus?: Maybe<ProposalStatus>,
  updatePreimage?: Maybe<Preimage>,
  updatePreimageStatus?: Maybe<PreimageStatus>,
  updatePreimageArgument?: Maybe<PreimageArgument>,
  updateReferendum?: Maybe<Referendum>,
  updateReferendumStatus?: Maybe<ReferendumStatus>,
  updateBlockIndex?: Maybe<BlockIndex>,
  updateTreasurySpendProposal?: Maybe<TreasurySpendProposal>,
  updateTreasuryStatus?: Maybe<TreasuryStatus>,
  updateBlockNumber?: Maybe<BlockNumber>,
  updateSession?: Maybe<Session>,
  deleteHeartBeat?: Maybe<HeartBeat>,
  deleteOfflineValidator?: Maybe<OfflineValidator>,
  deleteEra?: Maybe<Era>,
  deleteSlashing?: Maybe<Slashing>,
  deleteValidator?: Maybe<Validator>,
  deleteTotalIssuance?: Maybe<TotalIssuance>,
  deleteReward?: Maybe<Reward>,
  deleteNomination?: Maybe<Nomination>,
  deleteStake?: Maybe<Stake>,
  deleteCouncil?: Maybe<Council>,
  deleteCouncilMember?: Maybe<CouncilMember>,
  deleteMotion?: Maybe<Motion>,
  deleteMotionProposalArgument?: Maybe<MotionProposalArgument>,
  deleteMotionStatus?: Maybe<MotionStatus>,
  deleteProposal?: Maybe<Proposal>,
  deleteProposalStatus?: Maybe<ProposalStatus>,
  deletePreimage?: Maybe<Preimage>,
  deletePreimageStatus?: Maybe<PreimageStatus>,
  deletePreimageArgument?: Maybe<PreimageArgument>,
  deleteReferendum?: Maybe<Referendum>,
  deleteReferendumStatus?: Maybe<ReferendumStatus>,
  deleteBlockIndex?: Maybe<BlockIndex>,
  deleteTreasurySpendProposal?: Maybe<TreasurySpendProposal>,
  deleteTreasuryStatus?: Maybe<TreasuryStatus>,
  deleteBlockNumber?: Maybe<BlockNumber>,
  deleteSession?: Maybe<Session>,
  upsertHeartBeat: HeartBeat,
  upsertOfflineValidator: OfflineValidator,
  upsertEra: Era,
  upsertSlashing: Slashing,
  upsertValidator: Validator,
  upsertTotalIssuance: TotalIssuance,
  upsertReward: Reward,
  upsertNomination: Nomination,
  upsertStake: Stake,
  upsertCouncil: Council,
  upsertCouncilMember: CouncilMember,
  upsertMotion: Motion,
  upsertMotionProposalArgument: MotionProposalArgument,
  upsertMotionStatus: MotionStatus,
  upsertProposal: Proposal,
  upsertProposalStatus: ProposalStatus,
  upsertPreimage: Preimage,
  upsertPreimageStatus: PreimageStatus,
  upsertPreimageArgument: PreimageArgument,
  upsertReferendum: Referendum,
  upsertReferendumStatus: ReferendumStatus,
  upsertBlockIndex: BlockIndex,
  upsertTreasurySpendProposal: TreasurySpendProposal,
  upsertTreasuryStatus: TreasuryStatus,
  upsertBlockNumber: BlockNumber,
  upsertSession: Session,
  updateManyHeartBeats: BatchPayload,
  updateManyOfflineValidators: BatchPayload,
  updateManyEras: BatchPayload,
  updateManySlashings: BatchPayload,
  updateManyValidators: BatchPayload,
  updateManyTotalIssuances: BatchPayload,
  updateManyRewards: BatchPayload,
  updateManyNominations: BatchPayload,
  updateManyStakes: BatchPayload,
  updateManyCouncilMembers: BatchPayload,
  updateManyMotions: BatchPayload,
  updateManyMotionProposalArguments: BatchPayload,
  updateManyMotionStatuses: BatchPayload,
  updateManyProposals: BatchPayload,
  updateManyProposalStatuses: BatchPayload,
  updateManyPreimages: BatchPayload,
  updateManyPreimageStatuses: BatchPayload,
  updateManyPreimageArguments: BatchPayload,
  updateManyReferendums: BatchPayload,
  updateManyReferendumStatuses: BatchPayload,
  updateManyBlockIndexes: BatchPayload,
  updateManyTreasurySpendProposals: BatchPayload,
  updateManyTreasuryStatuses: BatchPayload,
  updateManyBlockNumbers: BatchPayload,
  updateManySessions: BatchPayload,
  deleteManyHeartBeats: BatchPayload,
  deleteManyOfflineValidators: BatchPayload,
  deleteManyEras: BatchPayload,
  deleteManySlashings: BatchPayload,
  deleteManyValidators: BatchPayload,
  deleteManyTotalIssuances: BatchPayload,
  deleteManyRewards: BatchPayload,
  deleteManyNominations: BatchPayload,
  deleteManyStakes: BatchPayload,
  deleteManyCouncils: BatchPayload,
  deleteManyCouncilMembers: BatchPayload,
  deleteManyMotions: BatchPayload,
  deleteManyMotionProposalArguments: BatchPayload,
  deleteManyMotionStatuses: BatchPayload,
  deleteManyProposals: BatchPayload,
  deleteManyProposalStatuses: BatchPayload,
  deleteManyPreimages: BatchPayload,
  deleteManyPreimageStatuses: BatchPayload,
  deleteManyPreimageArguments: BatchPayload,
  deleteManyReferendums: BatchPayload,
  deleteManyReferendumStatuses: BatchPayload,
  deleteManyBlockIndexes: BatchPayload,
  deleteManyTreasurySpendProposals: BatchPayload,
  deleteManyTreasuryStatuses: BatchPayload,
  deleteManyBlockNumbers: BatchPayload,
  deleteManySessions: BatchPayload,
  executeRaw: Scalars['Json'],
};


export type MutationCreateHeartBeatArgs = {
  data: HeartBeatCreateInput
};


export type MutationCreateOfflineValidatorArgs = {
  data: OfflineValidatorCreateInput
};


export type MutationCreateEraArgs = {
  data: EraCreateInput
};


export type MutationCreateSlashingArgs = {
  data: SlashingCreateInput
};


export type MutationCreateValidatorArgs = {
  data: ValidatorCreateInput
};


export type MutationCreateTotalIssuanceArgs = {
  data: TotalIssuanceCreateInput
};


export type MutationCreateRewardArgs = {
  data: RewardCreateInput
};


export type MutationCreateNominationArgs = {
  data: NominationCreateInput
};


export type MutationCreateStakeArgs = {
  data: StakeCreateInput
};


export type MutationCreateCouncilArgs = {
  data: CouncilCreateInput
};


export type MutationCreateCouncilMemberArgs = {
  data: CouncilMemberCreateInput
};


export type MutationCreateMotionArgs = {
  data: MotionCreateInput
};


export type MutationCreateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentCreateInput
};


export type MutationCreateMotionStatusArgs = {
  data: MotionStatusCreateInput
};


export type MutationCreateProposalArgs = {
  data: ProposalCreateInput
};


export type MutationCreateProposalStatusArgs = {
  data: ProposalStatusCreateInput
};


export type MutationCreatePreimageArgs = {
  data: PreimageCreateInput
};


export type MutationCreatePreimageStatusArgs = {
  data: PreimageStatusCreateInput
};


export type MutationCreatePreimageArgumentArgs = {
  data: PreimageArgumentCreateInput
};


export type MutationCreateReferendumArgs = {
  data: ReferendumCreateInput
};


export type MutationCreateReferendumStatusArgs = {
  data: ReferendumStatusCreateInput
};


export type MutationCreateBlockIndexArgs = {
  data: BlockIndexCreateInput
};


export type MutationCreateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalCreateInput
};


export type MutationCreateTreasuryStatusArgs = {
  data: TreasuryStatusCreateInput
};


export type MutationCreateBlockNumberArgs = {
  data: BlockNumberCreateInput
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput
};


export type MutationUpdateHeartBeatArgs = {
  data: HeartBeatUpdateInput,
  where: HeartBeatWhereUniqueInput
};


export type MutationUpdateOfflineValidatorArgs = {
  data: OfflineValidatorUpdateInput,
  where: OfflineValidatorWhereUniqueInput
};


export type MutationUpdateEraArgs = {
  data: EraUpdateInput,
  where: EraWhereUniqueInput
};


export type MutationUpdateSlashingArgs = {
  data: SlashingUpdateInput,
  where: SlashingWhereUniqueInput
};


export type MutationUpdateValidatorArgs = {
  data: ValidatorUpdateInput,
  where: ValidatorWhereUniqueInput
};


export type MutationUpdateTotalIssuanceArgs = {
  data: TotalIssuanceUpdateInput,
  where: TotalIssuanceWhereUniqueInput
};


export type MutationUpdateRewardArgs = {
  data: RewardUpdateInput,
  where: RewardWhereUniqueInput
};


export type MutationUpdateNominationArgs = {
  data: NominationUpdateInput,
  where: NominationWhereUniqueInput
};


export type MutationUpdateStakeArgs = {
  data: StakeUpdateInput,
  where: StakeWhereUniqueInput
};


export type MutationUpdateCouncilArgs = {
  data: CouncilUpdateInput,
  where: CouncilWhereUniqueInput
};


export type MutationUpdateCouncilMemberArgs = {
  data: CouncilMemberUpdateInput,
  where: CouncilMemberWhereUniqueInput
};


export type MutationUpdateMotionArgs = {
  data: MotionUpdateInput,
  where: MotionWhereUniqueInput
};


export type MutationUpdateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentUpdateInput,
  where: MotionProposalArgumentWhereUniqueInput
};


export type MutationUpdateMotionStatusArgs = {
  data: MotionStatusUpdateInput,
  where: MotionStatusWhereUniqueInput
};


export type MutationUpdateProposalArgs = {
  data: ProposalUpdateInput,
  where: ProposalWhereUniqueInput
};


export type MutationUpdateProposalStatusArgs = {
  data: ProposalStatusUpdateInput,
  where: ProposalStatusWhereUniqueInput
};


export type MutationUpdatePreimageArgs = {
  data: PreimageUpdateInput,
  where: PreimageWhereUniqueInput
};


export type MutationUpdatePreimageStatusArgs = {
  data: PreimageStatusUpdateInput,
  where: PreimageStatusWhereUniqueInput
};


export type MutationUpdatePreimageArgumentArgs = {
  data: PreimageArgumentUpdateInput,
  where: PreimageArgumentWhereUniqueInput
};


export type MutationUpdateReferendumArgs = {
  data: ReferendumUpdateInput,
  where: ReferendumWhereUniqueInput
};


export type MutationUpdateReferendumStatusArgs = {
  data: ReferendumStatusUpdateInput,
  where: ReferendumStatusWhereUniqueInput
};


export type MutationUpdateBlockIndexArgs = {
  data: BlockIndexUpdateInput,
  where: BlockIndexWhereUniqueInput
};


export type MutationUpdateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalUpdateInput,
  where: TreasurySpendProposalWhereUniqueInput
};


export type MutationUpdateTreasuryStatusArgs = {
  data: TreasuryStatusUpdateInput,
  where: TreasuryStatusWhereUniqueInput
};


export type MutationUpdateBlockNumberArgs = {
  data: BlockNumberUpdateInput,
  where: BlockNumberWhereUniqueInput
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput,
  where: SessionWhereUniqueInput
};


export type MutationDeleteHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput
};


export type MutationDeleteOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput
};


export type MutationDeleteEraArgs = {
  where: EraWhereUniqueInput
};


export type MutationDeleteSlashingArgs = {
  where: SlashingWhereUniqueInput
};


export type MutationDeleteValidatorArgs = {
  where: ValidatorWhereUniqueInput
};


export type MutationDeleteTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput
};


export type MutationDeleteRewardArgs = {
  where: RewardWhereUniqueInput
};


export type MutationDeleteNominationArgs = {
  where: NominationWhereUniqueInput
};


export type MutationDeleteStakeArgs = {
  where: StakeWhereUniqueInput
};


export type MutationDeleteCouncilArgs = {
  where: CouncilWhereUniqueInput
};


export type MutationDeleteCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput
};


export type MutationDeleteMotionArgs = {
  where: MotionWhereUniqueInput
};


export type MutationDeleteMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput
};


export type MutationDeleteMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput
};


export type MutationDeleteProposalArgs = {
  where: ProposalWhereUniqueInput
};


export type MutationDeleteProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput
};


export type MutationDeletePreimageArgs = {
  where: PreimageWhereUniqueInput
};


export type MutationDeletePreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput
};


export type MutationDeletePreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput
};


export type MutationDeleteReferendumArgs = {
  where: ReferendumWhereUniqueInput
};


export type MutationDeleteReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput
};


export type MutationDeleteBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput
};


export type MutationDeleteTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput
};


export type MutationDeleteTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput
};


export type MutationDeleteBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput
};


export type MutationUpsertHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput,
  create: HeartBeatCreateInput,
  update: HeartBeatUpdateInput
};


export type MutationUpsertOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput,
  create: OfflineValidatorCreateInput,
  update: OfflineValidatorUpdateInput
};


export type MutationUpsertEraArgs = {
  where: EraWhereUniqueInput,
  create: EraCreateInput,
  update: EraUpdateInput
};


export type MutationUpsertSlashingArgs = {
  where: SlashingWhereUniqueInput,
  create: SlashingCreateInput,
  update: SlashingUpdateInput
};


export type MutationUpsertValidatorArgs = {
  where: ValidatorWhereUniqueInput,
  create: ValidatorCreateInput,
  update: ValidatorUpdateInput
};


export type MutationUpsertTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput,
  create: TotalIssuanceCreateInput,
  update: TotalIssuanceUpdateInput
};


export type MutationUpsertRewardArgs = {
  where: RewardWhereUniqueInput,
  create: RewardCreateInput,
  update: RewardUpdateInput
};


export type MutationUpsertNominationArgs = {
  where: NominationWhereUniqueInput,
  create: NominationCreateInput,
  update: NominationUpdateInput
};


export type MutationUpsertStakeArgs = {
  where: StakeWhereUniqueInput,
  create: StakeCreateInput,
  update: StakeUpdateInput
};


export type MutationUpsertCouncilArgs = {
  where: CouncilWhereUniqueInput,
  create: CouncilCreateInput,
  update: CouncilUpdateInput
};


export type MutationUpsertCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput,
  create: CouncilMemberCreateInput,
  update: CouncilMemberUpdateInput
};


export type MutationUpsertMotionArgs = {
  where: MotionWhereUniqueInput,
  create: MotionCreateInput,
  update: MotionUpdateInput
};


export type MutationUpsertMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput,
  create: MotionProposalArgumentCreateInput,
  update: MotionProposalArgumentUpdateInput
};


export type MutationUpsertMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput,
  create: MotionStatusCreateInput,
  update: MotionStatusUpdateInput
};


export type MutationUpsertProposalArgs = {
  where: ProposalWhereUniqueInput,
  create: ProposalCreateInput,
  update: ProposalUpdateInput
};


export type MutationUpsertProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput,
  create: ProposalStatusCreateInput,
  update: ProposalStatusUpdateInput
};


export type MutationUpsertPreimageArgs = {
  where: PreimageWhereUniqueInput,
  create: PreimageCreateInput,
  update: PreimageUpdateInput
};


export type MutationUpsertPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput,
  create: PreimageStatusCreateInput,
  update: PreimageStatusUpdateInput
};


export type MutationUpsertPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput,
  create: PreimageArgumentCreateInput,
  update: PreimageArgumentUpdateInput
};


export type MutationUpsertReferendumArgs = {
  where: ReferendumWhereUniqueInput,
  create: ReferendumCreateInput,
  update: ReferendumUpdateInput
};


export type MutationUpsertReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput,
  create: ReferendumStatusCreateInput,
  update: ReferendumStatusUpdateInput
};


export type MutationUpsertBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput,
  create: BlockIndexCreateInput,
  update: BlockIndexUpdateInput
};


export type MutationUpsertTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput,
  create: TreasurySpendProposalCreateInput,
  update: TreasurySpendProposalUpdateInput
};


export type MutationUpsertTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput,
  create: TreasuryStatusCreateInput,
  update: TreasuryStatusUpdateInput
};


export type MutationUpsertBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput,
  create: BlockNumberCreateInput,
  update: BlockNumberUpdateInput
};


export type MutationUpsertSessionArgs = {
  where: SessionWhereUniqueInput,
  create: SessionCreateInput,
  update: SessionUpdateInput
};


export type MutationUpdateManyHeartBeatsArgs = {
  data: HeartBeatUpdateManyMutationInput,
  where?: Maybe<HeartBeatWhereInput>
};


export type MutationUpdateManyOfflineValidatorsArgs = {
  data: OfflineValidatorUpdateManyMutationInput,
  where?: Maybe<OfflineValidatorWhereInput>
};


export type MutationUpdateManyErasArgs = {
  data: EraUpdateManyMutationInput,
  where?: Maybe<EraWhereInput>
};


export type MutationUpdateManySlashingsArgs = {
  data: SlashingUpdateManyMutationInput,
  where?: Maybe<SlashingWhereInput>
};


export type MutationUpdateManyValidatorsArgs = {
  data: ValidatorUpdateManyMutationInput,
  where?: Maybe<ValidatorWhereInput>
};


export type MutationUpdateManyTotalIssuancesArgs = {
  data: TotalIssuanceUpdateManyMutationInput,
  where?: Maybe<TotalIssuanceWhereInput>
};


export type MutationUpdateManyRewardsArgs = {
  data: RewardUpdateManyMutationInput,
  where?: Maybe<RewardWhereInput>
};


export type MutationUpdateManyNominationsArgs = {
  data: NominationUpdateManyMutationInput,
  where?: Maybe<NominationWhereInput>
};


export type MutationUpdateManyStakesArgs = {
  data: StakeUpdateManyMutationInput,
  where?: Maybe<StakeWhereInput>
};


export type MutationUpdateManyCouncilMembersArgs = {
  data: CouncilMemberUpdateManyMutationInput,
  where?: Maybe<CouncilMemberWhereInput>
};


export type MutationUpdateManyMotionsArgs = {
  data: MotionUpdateManyMutationInput,
  where?: Maybe<MotionWhereInput>
};


export type MutationUpdateManyMotionProposalArgumentsArgs = {
  data: MotionProposalArgumentUpdateManyMutationInput,
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type MutationUpdateManyMotionStatusesArgs = {
  data: MotionStatusUpdateManyMutationInput,
  where?: Maybe<MotionStatusWhereInput>
};


export type MutationUpdateManyProposalsArgs = {
  data: ProposalUpdateManyMutationInput,
  where?: Maybe<ProposalWhereInput>
};


export type MutationUpdateManyProposalStatusesArgs = {
  data: ProposalStatusUpdateManyMutationInput,
  where?: Maybe<ProposalStatusWhereInput>
};


export type MutationUpdateManyPreimagesArgs = {
  data: PreimageUpdateManyMutationInput,
  where?: Maybe<PreimageWhereInput>
};


export type MutationUpdateManyPreimageStatusesArgs = {
  data: PreimageStatusUpdateManyMutationInput,
  where?: Maybe<PreimageStatusWhereInput>
};


export type MutationUpdateManyPreimageArgumentsArgs = {
  data: PreimageArgumentUpdateManyMutationInput,
  where?: Maybe<PreimageArgumentWhereInput>
};


export type MutationUpdateManyReferendumsArgs = {
  data: ReferendumUpdateManyMutationInput,
  where?: Maybe<ReferendumWhereInput>
};


export type MutationUpdateManyReferendumStatusesArgs = {
  data: ReferendumStatusUpdateManyMutationInput,
  where?: Maybe<ReferendumStatusWhereInput>
};


export type MutationUpdateManyBlockIndexesArgs = {
  data: BlockIndexUpdateManyMutationInput,
  where?: Maybe<BlockIndexWhereInput>
};


export type MutationUpdateManyTreasurySpendProposalsArgs = {
  data: TreasurySpendProposalUpdateManyMutationInput,
  where?: Maybe<TreasurySpendProposalWhereInput>
};


export type MutationUpdateManyTreasuryStatusesArgs = {
  data: TreasuryStatusUpdateManyMutationInput,
  where?: Maybe<TreasuryStatusWhereInput>
};


export type MutationUpdateManyBlockNumbersArgs = {
  data: BlockNumberUpdateManyMutationInput,
  where?: Maybe<BlockNumberWhereInput>
};


export type MutationUpdateManySessionsArgs = {
  data: SessionUpdateManyMutationInput,
  where?: Maybe<SessionWhereInput>
};


export type MutationDeleteManyHeartBeatsArgs = {
  where?: Maybe<HeartBeatWhereInput>
};


export type MutationDeleteManyOfflineValidatorsArgs = {
  where?: Maybe<OfflineValidatorWhereInput>
};


export type MutationDeleteManyErasArgs = {
  where?: Maybe<EraWhereInput>
};


export type MutationDeleteManySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>
};


export type MutationDeleteManyValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>
};


export type MutationDeleteManyTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>
};


export type MutationDeleteManyRewardsArgs = {
  where?: Maybe<RewardWhereInput>
};


export type MutationDeleteManyNominationsArgs = {
  where?: Maybe<NominationWhereInput>
};


export type MutationDeleteManyStakesArgs = {
  where?: Maybe<StakeWhereInput>
};


export type MutationDeleteManyCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>
};


export type MutationDeleteManyCouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>
};


export type MutationDeleteManyMotionsArgs = {
  where?: Maybe<MotionWhereInput>
};


export type MutationDeleteManyMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type MutationDeleteManyMotionStatusesArgs = {
  where?: Maybe<MotionStatusWhereInput>
};


export type MutationDeleteManyProposalsArgs = {
  where?: Maybe<ProposalWhereInput>
};


export type MutationDeleteManyProposalStatusesArgs = {
  where?: Maybe<ProposalStatusWhereInput>
};


export type MutationDeleteManyPreimagesArgs = {
  where?: Maybe<PreimageWhereInput>
};


export type MutationDeleteManyPreimageStatusesArgs = {
  where?: Maybe<PreimageStatusWhereInput>
};


export type MutationDeleteManyPreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>
};


export type MutationDeleteManyReferendumsArgs = {
  where?: Maybe<ReferendumWhereInput>
};


export type MutationDeleteManyReferendumStatusesArgs = {
  where?: Maybe<ReferendumStatusWhereInput>
};


export type MutationDeleteManyBlockIndexesArgs = {
  where?: Maybe<BlockIndexWhereInput>
};


export type MutationDeleteManyTreasurySpendProposalsArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>
};


export type MutationDeleteManyTreasuryStatusesArgs = {
  where?: Maybe<TreasuryStatusWhereInput>
};


export type MutationDeleteManyBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>
};


export type MutationDeleteManySessionsArgs = {
  where?: Maybe<SessionWhereInput>
};


export type MutationExecuteRawArgs = {
  database?: Maybe<PrismaDatabase>,
  query: Scalars['String']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type Nomination = Node & {
   __typename?: 'Nomination',
  id: Scalars['ID'],
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  session: Session,
  stakedAmount: Scalars['String'],
};

export type NominationConnection = {
   __typename?: 'NominationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<NominationEdge>>,
  aggregate: AggregateNomination,
};

export type NominationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  stakedAmount: Scalars['String'],
  session: SessionCreateOneInput,
};

export type NominationEdge = {
   __typename?: 'NominationEdge',
  node: Nomination,
  cursor: Scalars['String'],
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
   __typename?: 'NominationPreviousValues',
  id: Scalars['ID'],
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  stakedAmount: Scalars['String'],
};

export type NominationSubscriptionPayload = {
   __typename?: 'NominationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Nomination>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<NominationPreviousValues>,
};

export type NominationSubscriptionWhereInput = {
  AND?: Maybe<Array<NominationSubscriptionWhereInput>>,
  OR?: Maybe<Array<NominationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<NominationSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<NominationWhereInput>,
};

export type NominationUpdateInput = {
  validatorController?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
  nominatorController?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  stakedAmount?: Maybe<Scalars['String']>,
  session?: Maybe<SessionUpdateOneRequiredInput>,
};

export type NominationUpdateManyMutationInput = {
  validatorController?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
  nominatorController?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  stakedAmount?: Maybe<Scalars['String']>,
};

export type NominationWhereInput = {
  AND?: Maybe<Array<NominationWhereInput>>,
  OR?: Maybe<Array<NominationWhereInput>>,
  NOT?: Maybe<Array<NominationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  validatorController?: Maybe<Scalars['String']>,
  validatorController_not?: Maybe<Scalars['String']>,
  validatorController_in?: Maybe<Array<Scalars['String']>>,
  validatorController_not_in?: Maybe<Array<Scalars['String']>>,
  validatorController_lt?: Maybe<Scalars['String']>,
  validatorController_lte?: Maybe<Scalars['String']>,
  validatorController_gt?: Maybe<Scalars['String']>,
  validatorController_gte?: Maybe<Scalars['String']>,
  validatorController_contains?: Maybe<Scalars['String']>,
  validatorController_not_contains?: Maybe<Scalars['String']>,
  validatorController_starts_with?: Maybe<Scalars['String']>,
  validatorController_not_starts_with?: Maybe<Scalars['String']>,
  validatorController_ends_with?: Maybe<Scalars['String']>,
  validatorController_not_ends_with?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
  validatorStash_not?: Maybe<Scalars['String']>,
  validatorStash_in?: Maybe<Array<Scalars['String']>>,
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>,
  validatorStash_lt?: Maybe<Scalars['String']>,
  validatorStash_lte?: Maybe<Scalars['String']>,
  validatorStash_gt?: Maybe<Scalars['String']>,
  validatorStash_gte?: Maybe<Scalars['String']>,
  validatorStash_contains?: Maybe<Scalars['String']>,
  validatorStash_not_contains?: Maybe<Scalars['String']>,
  validatorStash_starts_with?: Maybe<Scalars['String']>,
  validatorStash_not_starts_with?: Maybe<Scalars['String']>,
  validatorStash_ends_with?: Maybe<Scalars['String']>,
  validatorStash_not_ends_with?: Maybe<Scalars['String']>,
  nominatorController?: Maybe<Scalars['String']>,
  nominatorController_not?: Maybe<Scalars['String']>,
  nominatorController_in?: Maybe<Array<Scalars['String']>>,
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>,
  nominatorController_lt?: Maybe<Scalars['String']>,
  nominatorController_lte?: Maybe<Scalars['String']>,
  nominatorController_gt?: Maybe<Scalars['String']>,
  nominatorController_gte?: Maybe<Scalars['String']>,
  nominatorController_contains?: Maybe<Scalars['String']>,
  nominatorController_not_contains?: Maybe<Scalars['String']>,
  nominatorController_starts_with?: Maybe<Scalars['String']>,
  nominatorController_not_starts_with?: Maybe<Scalars['String']>,
  nominatorController_ends_with?: Maybe<Scalars['String']>,
  nominatorController_not_ends_with?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  nominatorStash_not?: Maybe<Scalars['String']>,
  nominatorStash_in?: Maybe<Array<Scalars['String']>>,
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>,
  nominatorStash_lt?: Maybe<Scalars['String']>,
  nominatorStash_lte?: Maybe<Scalars['String']>,
  nominatorStash_gt?: Maybe<Scalars['String']>,
  nominatorStash_gte?: Maybe<Scalars['String']>,
  nominatorStash_contains?: Maybe<Scalars['String']>,
  nominatorStash_not_contains?: Maybe<Scalars['String']>,
  nominatorStash_starts_with?: Maybe<Scalars['String']>,
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>,
  nominatorStash_ends_with?: Maybe<Scalars['String']>,
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>,
  stakedAmount?: Maybe<Scalars['String']>,
  stakedAmount_not?: Maybe<Scalars['String']>,
  stakedAmount_in?: Maybe<Array<Scalars['String']>>,
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>,
  stakedAmount_lt?: Maybe<Scalars['String']>,
  stakedAmount_lte?: Maybe<Scalars['String']>,
  stakedAmount_gt?: Maybe<Scalars['String']>,
  stakedAmount_gte?: Maybe<Scalars['String']>,
  stakedAmount_contains?: Maybe<Scalars['String']>,
  stakedAmount_not_contains?: Maybe<Scalars['String']>,
  stakedAmount_starts_with?: Maybe<Scalars['String']>,
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>,
  stakedAmount_ends_with?: Maybe<Scalars['String']>,
  stakedAmount_not_ends_with?: Maybe<Scalars['String']>,
  session?: Maybe<SessionWhereInput>,
};

export type NominationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type OfflineValidator = Node & {
   __typename?: 'OfflineValidator',
  id: Scalars['ID'],
  sessionIndex: Session,
  validatorId: Scalars['String'],
  total: Scalars['String'],
  own: Scalars['String'],
  others: Array<Scalars['Json']>,
};

export type OfflineValidatorConnection = {
   __typename?: 'OfflineValidatorConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<OfflineValidatorEdge>>,
  aggregate: AggregateOfflineValidator,
};

export type OfflineValidatorCreateInput = {
  id?: Maybe<Scalars['ID']>,
  validatorId: Scalars['String'],
  total: Scalars['String'],
  own: Scalars['String'],
  others?: Maybe<OfflineValidatorCreateothersInput>,
  sessionIndex: SessionCreateOneInput,
};

export type OfflineValidatorCreateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>,
};

export type OfflineValidatorEdge = {
   __typename?: 'OfflineValidatorEdge',
  node: OfflineValidator,
  cursor: Scalars['String'],
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
   __typename?: 'OfflineValidatorPreviousValues',
  id: Scalars['ID'],
  validatorId: Scalars['String'],
  total: Scalars['String'],
  own: Scalars['String'],
  others: Array<Scalars['Json']>,
};

export type OfflineValidatorSubscriptionPayload = {
   __typename?: 'OfflineValidatorSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<OfflineValidator>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<OfflineValidatorPreviousValues>,
};

export type OfflineValidatorSubscriptionWhereInput = {
  AND?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>,
  OR?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>,
  NOT?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<OfflineValidatorWhereInput>,
};

export type OfflineValidatorUpdateInput = {
  validatorId?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['String']>,
  own?: Maybe<Scalars['String']>,
  others?: Maybe<OfflineValidatorUpdateothersInput>,
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
};

export type OfflineValidatorUpdateManyMutationInput = {
  validatorId?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['String']>,
  own?: Maybe<Scalars['String']>,
  others?: Maybe<OfflineValidatorUpdateothersInput>,
};

export type OfflineValidatorUpdateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>,
};

export type OfflineValidatorWhereInput = {
  AND?: Maybe<Array<OfflineValidatorWhereInput>>,
  OR?: Maybe<Array<OfflineValidatorWhereInput>>,
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  validatorId?: Maybe<Scalars['String']>,
  validatorId_not?: Maybe<Scalars['String']>,
  validatorId_in?: Maybe<Array<Scalars['String']>>,
  validatorId_not_in?: Maybe<Array<Scalars['String']>>,
  validatorId_lt?: Maybe<Scalars['String']>,
  validatorId_lte?: Maybe<Scalars['String']>,
  validatorId_gt?: Maybe<Scalars['String']>,
  validatorId_gte?: Maybe<Scalars['String']>,
  validatorId_contains?: Maybe<Scalars['String']>,
  validatorId_not_contains?: Maybe<Scalars['String']>,
  validatorId_starts_with?: Maybe<Scalars['String']>,
  validatorId_not_starts_with?: Maybe<Scalars['String']>,
  validatorId_ends_with?: Maybe<Scalars['String']>,
  validatorId_not_ends_with?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['String']>,
  total_not?: Maybe<Scalars['String']>,
  total_in?: Maybe<Array<Scalars['String']>>,
  total_not_in?: Maybe<Array<Scalars['String']>>,
  total_lt?: Maybe<Scalars['String']>,
  total_lte?: Maybe<Scalars['String']>,
  total_gt?: Maybe<Scalars['String']>,
  total_gte?: Maybe<Scalars['String']>,
  total_contains?: Maybe<Scalars['String']>,
  total_not_contains?: Maybe<Scalars['String']>,
  total_starts_with?: Maybe<Scalars['String']>,
  total_not_starts_with?: Maybe<Scalars['String']>,
  total_ends_with?: Maybe<Scalars['String']>,
  total_not_ends_with?: Maybe<Scalars['String']>,
  own?: Maybe<Scalars['String']>,
  own_not?: Maybe<Scalars['String']>,
  own_in?: Maybe<Array<Scalars['String']>>,
  own_not_in?: Maybe<Array<Scalars['String']>>,
  own_lt?: Maybe<Scalars['String']>,
  own_lte?: Maybe<Scalars['String']>,
  own_gt?: Maybe<Scalars['String']>,
  own_gte?: Maybe<Scalars['String']>,
  own_contains?: Maybe<Scalars['String']>,
  own_not_contains?: Maybe<Scalars['String']>,
  own_starts_with?: Maybe<Scalars['String']>,
  own_not_starts_with?: Maybe<Scalars['String']>,
  own_ends_with?: Maybe<Scalars['String']>,
  own_not_ends_with?: Maybe<Scalars['String']>,
  sessionIndex?: Maybe<SessionWhereInput>,
};

export type OfflineValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Preimage = Node & {
   __typename?: 'Preimage',
  id: Scalars['ID'],
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<Motion>,
  proposal?: Maybe<Proposal>,
  preimageArguments?: Maybe<Array<PreimageArgument>>,
  preimageStatus?: Maybe<Array<PreimageStatus>>,
  referendum?: Maybe<Referendum>,
  section: Scalars['String'],
};


export type PreimagePreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>,
  orderBy?: Maybe<PreimageArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PreimagePreimageStatusArgs = {
  where?: Maybe<PreimageStatusWhereInput>,
  orderBy?: Maybe<PreimageStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PreimageArgument = Node & {
   __typename?: 'PreimageArgument',
  id: Scalars['ID'],
  name: Scalars['String'],
  preimage: Preimage,
  value: Scalars['String'],
};

export type PreimageArgumentConnection = {
   __typename?: 'PreimageArgumentConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PreimageArgumentEdge>>,
  aggregate: AggregatePreimageArgument,
};

export type PreimageArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
  preimage: PreimageCreateOneWithoutPreimageArgumentsInput,
};

export type PreimageArgumentCreateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>,
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
};

export type PreimageArgumentCreateWithoutPreimageInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type PreimageArgumentEdge = {
   __typename?: 'PreimageArgumentEdge',
  node: PreimageArgument,
  cursor: Scalars['String'],
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
   __typename?: 'PreimageArgumentPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  value: Scalars['String'],
};

export type PreimageArgumentScalarWhereInput = {
  AND?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  OR?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  NOT?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
};

export type PreimageArgumentSubscriptionPayload = {
   __typename?: 'PreimageArgumentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PreimageArgument>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PreimageArgumentPreviousValues>,
};

export type PreimageArgumentSubscriptionWhereInput = {
  AND?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>,
  OR?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PreimageArgumentWhereInput>,
};

export type PreimageArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageArgumentsInput>,
};

export type PreimageArgumentUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type PreimageArgumentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type PreimageArgumentUpdateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>,
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  set?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  disconnect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  delete?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  update?: Maybe<Array<PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput>>,
  updateMany?: Maybe<Array<PreimageArgumentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  upsert?: Maybe<Array<PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput>>,
};

export type PreimageArgumentUpdateManyWithWhereNestedInput = {
  where: PreimageArgumentScalarWhereInput,
  data: PreimageArgumentUpdateManyDataInput,
};

export type PreimageArgumentUpdateWithoutPreimageDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput = {
  where: PreimageArgumentWhereUniqueInput,
  data: PreimageArgumentUpdateWithoutPreimageDataInput,
};

export type PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput = {
  where: PreimageArgumentWhereUniqueInput,
  update: PreimageArgumentUpdateWithoutPreimageDataInput,
  create: PreimageArgumentCreateWithoutPreimageInput,
};

export type PreimageArgumentWhereInput = {
  AND?: Maybe<Array<PreimageArgumentWhereInput>>,
  OR?: Maybe<Array<PreimageArgumentWhereInput>>,
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageWhereInput>,
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PreimageConnection = {
   __typename?: 'PreimageConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PreimageEdge>>,
  aggregate: AggregatePreimage,
};

export type PreimageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
};

export type PreimageCreateOneWithoutMotionInput = {
  create?: Maybe<PreimageCreateWithoutMotionInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
};

export type PreimageCreateOneWithoutPreimageArgumentsInput = {
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
};

export type PreimageCreateOneWithoutPreimageStatusInput = {
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
};

export type PreimageCreateOneWithoutProposalInput = {
  create?: Maybe<PreimageCreateWithoutProposalInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
};

export type PreimageCreateOneWithoutReferendumInput = {
  create?: Maybe<PreimageCreateWithoutReferendumInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
};

export type PreimageCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>,
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
};

export type PreimageCreateWithoutPreimageArgumentsInput = {
  id?: Maybe<Scalars['ID']>,
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
};

export type PreimageCreateWithoutPreimageStatusInput = {
  id?: Maybe<Scalars['ID']>,
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
};

export type PreimageCreateWithoutProposalInput = {
  id?: Maybe<Scalars['ID']>,
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
};

export type PreimageCreateWithoutReferendumInput = {
  id?: Maybe<Scalars['ID']>,
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
};

export type PreimageEdge = {
   __typename?: 'PreimageEdge',
  node: Preimage,
  cursor: Scalars['String'],
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
   __typename?: 'PreimagePreviousValues',
  id: Scalars['ID'],
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
};

export type PreimageStatus = Node & {
   __typename?: 'PreimageStatus',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  preimage: Preimage,
  status: Scalars['String'],
};

export type PreimageStatusConnection = {
   __typename?: 'PreimageStatusConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PreimageStatusEdge>>,
  aggregate: AggregatePreimageStatus,
};

export type PreimageStatusCreateInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  preimage: PreimageCreateOneWithoutPreimageStatusInput,
};

export type PreimageStatusCreateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>,
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
};

export type PreimageStatusCreateWithoutPreimageInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type PreimageStatusEdge = {
   __typename?: 'PreimageStatusEdge',
  node: PreimageStatus,
  cursor: Scalars['String'],
};

export enum PreimageStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type PreimageStatusPreviousValues = {
   __typename?: 'PreimageStatusPreviousValues',
  id: Scalars['ID'],
  status: Scalars['String'],
};

export type PreimageStatusScalarWhereInput = {
  AND?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  OR?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  NOT?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
};

export type PreimageStatusSubscriptionPayload = {
   __typename?: 'PreimageStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PreimageStatus>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PreimageStatusPreviousValues>,
};

export type PreimageStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PreimageStatusWhereInput>,
};

export type PreimageStatusUpdateInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageStatusInput>,
};

export type PreimageStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type PreimageStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type PreimageStatusUpdateManyWithoutPreimageInput = {
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>,
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  set?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  disconnect?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  delete?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  update?: Maybe<Array<PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput>>,
  updateMany?: Maybe<Array<PreimageStatusUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  upsert?: Maybe<Array<PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput>>,
};

export type PreimageStatusUpdateManyWithWhereNestedInput = {
  where: PreimageStatusScalarWhereInput,
  data: PreimageStatusUpdateManyDataInput,
};

export type PreimageStatusUpdateWithoutPreimageDataInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput = {
  where: PreimageStatusWhereUniqueInput,
  data: PreimageStatusUpdateWithoutPreimageDataInput,
};

export type PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput = {
  where: PreimageStatusWhereUniqueInput,
  update: PreimageStatusUpdateWithoutPreimageDataInput,
  create: PreimageStatusCreateWithoutPreimageInput,
};

export type PreimageStatusWhereInput = {
  AND?: Maybe<Array<PreimageStatusWhereInput>>,
  OR?: Maybe<Array<PreimageStatusWhereInput>>,
  NOT?: Maybe<Array<PreimageStatusWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  preimage?: Maybe<PreimageWhereInput>,
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PreimageSubscriptionPayload = {
   __typename?: 'PreimageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Preimage>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PreimagePreviousValues>,
};

export type PreimageSubscriptionWhereInput = {
  AND?: Maybe<Array<PreimageSubscriptionWhereInput>>,
  OR?: Maybe<Array<PreimageSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PreimageSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PreimageWhereInput>,
};

export type PreimageUpdateInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
};

export type PreimageUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
};

export type PreimageUpdateOneRequiredWithoutPreimageArgumentsInput = {
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
  update?: Maybe<PreimageUpdateWithoutPreimageArgumentsDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutPreimageArgumentsInput>,
};

export type PreimageUpdateOneRequiredWithoutPreimageStatusInput = {
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
  update?: Maybe<PreimageUpdateWithoutPreimageStatusDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutPreimageStatusInput>,
};

export type PreimageUpdateOneWithoutMotionInput = {
  create?: Maybe<PreimageCreateWithoutMotionInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PreimageUpdateWithoutMotionDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutMotionInput>,
};

export type PreimageUpdateOneWithoutProposalInput = {
  create?: Maybe<PreimageCreateWithoutProposalInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PreimageUpdateWithoutProposalDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutProposalInput>,
};

export type PreimageUpdateOneWithoutReferendumInput = {
  create?: Maybe<PreimageCreateWithoutReferendumInput>,
  connect?: Maybe<PreimageWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PreimageUpdateWithoutReferendumDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutReferendumInput>,
};

export type PreimageUpdateWithoutMotionDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
};

export type PreimageUpdateWithoutPreimageArgumentsDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
};

export type PreimageUpdateWithoutPreimageStatusDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
};

export type PreimageUpdateWithoutProposalDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
};

export type PreimageUpdateWithoutReferendumDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
};

export type PreimageUpsertWithoutMotionInput = {
  update: PreimageUpdateWithoutMotionDataInput,
  create: PreimageCreateWithoutMotionInput,
};

export type PreimageUpsertWithoutPreimageArgumentsInput = {
  update: PreimageUpdateWithoutPreimageArgumentsDataInput,
  create: PreimageCreateWithoutPreimageArgumentsInput,
};

export type PreimageUpsertWithoutPreimageStatusInput = {
  update: PreimageUpdateWithoutPreimageStatusDataInput,
  create: PreimageCreateWithoutPreimageStatusInput,
};

export type PreimageUpsertWithoutProposalInput = {
  update: PreimageUpdateWithoutProposalDataInput,
  create: PreimageCreateWithoutProposalInput,
};

export type PreimageUpsertWithoutReferendumInput = {
  update: PreimageUpdateWithoutReferendumDataInput,
  create: PreimageCreateWithoutReferendumInput,
};

export type PreimageWhereInput = {
  AND?: Maybe<Array<PreimageWhereInput>>,
  OR?: Maybe<Array<PreimageWhereInput>>,
  NOT?: Maybe<Array<PreimageWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  author?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  depositAmount_not?: Maybe<Scalars['String']>,
  depositAmount_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_lt?: Maybe<Scalars['String']>,
  depositAmount_lte?: Maybe<Scalars['String']>,
  depositAmount_gt?: Maybe<Scalars['String']>,
  depositAmount_gte?: Maybe<Scalars['String']>,
  depositAmount_contains?: Maybe<Scalars['String']>,
  depositAmount_not_contains?: Maybe<Scalars['String']>,
  depositAmount_starts_with?: Maybe<Scalars['String']>,
  depositAmount_not_starts_with?: Maybe<Scalars['String']>,
  depositAmount_ends_with?: Maybe<Scalars['String']>,
  depositAmount_not_ends_with?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  hash_not?: Maybe<Scalars['String']>,
  hash_in?: Maybe<Array<Scalars['String']>>,
  hash_not_in?: Maybe<Array<Scalars['String']>>,
  hash_lt?: Maybe<Scalars['String']>,
  hash_lte?: Maybe<Scalars['String']>,
  hash_gt?: Maybe<Scalars['String']>,
  hash_gte?: Maybe<Scalars['String']>,
  hash_contains?: Maybe<Scalars['String']>,
  hash_not_contains?: Maybe<Scalars['String']>,
  hash_starts_with?: Maybe<Scalars['String']>,
  hash_not_starts_with?: Maybe<Scalars['String']>,
  hash_ends_with?: Maybe<Scalars['String']>,
  hash_not_ends_with?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  metaDescription_not?: Maybe<Scalars['String']>,
  metaDescription_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_lt?: Maybe<Scalars['String']>,
  metaDescription_lte?: Maybe<Scalars['String']>,
  metaDescription_gt?: Maybe<Scalars['String']>,
  metaDescription_gte?: Maybe<Scalars['String']>,
  metaDescription_contains?: Maybe<Scalars['String']>,
  metaDescription_not_contains?: Maybe<Scalars['String']>,
  metaDescription_starts_with?: Maybe<Scalars['String']>,
  metaDescription_not_starts_with?: Maybe<Scalars['String']>,
  metaDescription_ends_with?: Maybe<Scalars['String']>,
  metaDescription_not_ends_with?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  method_not?: Maybe<Scalars['String']>,
  method_in?: Maybe<Array<Scalars['String']>>,
  method_not_in?: Maybe<Array<Scalars['String']>>,
  method_lt?: Maybe<Scalars['String']>,
  method_lte?: Maybe<Scalars['String']>,
  method_gt?: Maybe<Scalars['String']>,
  method_gte?: Maybe<Scalars['String']>,
  method_contains?: Maybe<Scalars['String']>,
  method_not_contains?: Maybe<Scalars['String']>,
  method_starts_with?: Maybe<Scalars['String']>,
  method_not_starts_with?: Maybe<Scalars['String']>,
  method_ends_with?: Maybe<Scalars['String']>,
  method_not_ends_with?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  section_not?: Maybe<Scalars['String']>,
  section_in?: Maybe<Array<Scalars['String']>>,
  section_not_in?: Maybe<Array<Scalars['String']>>,
  section_lt?: Maybe<Scalars['String']>,
  section_lte?: Maybe<Scalars['String']>,
  section_gt?: Maybe<Scalars['String']>,
  section_gte?: Maybe<Scalars['String']>,
  section_contains?: Maybe<Scalars['String']>,
  section_not_contains?: Maybe<Scalars['String']>,
  section_starts_with?: Maybe<Scalars['String']>,
  section_not_starts_with?: Maybe<Scalars['String']>,
  section_ends_with?: Maybe<Scalars['String']>,
  section_not_ends_with?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionWhereInput>,
  proposal?: Maybe<ProposalWhereInput>,
  preimageArguments_every?: Maybe<PreimageArgumentWhereInput>,
  preimageArguments_some?: Maybe<PreimageArgumentWhereInput>,
  preimageArguments_none?: Maybe<PreimageArgumentWhereInput>,
  preimageStatus_every?: Maybe<PreimageStatusWhereInput>,
  preimageStatus_some?: Maybe<PreimageStatusWhereInput>,
  preimageStatus_none?: Maybe<PreimageStatusWhereInput>,
  referendum?: Maybe<ReferendumWhereInput>,
};

export type PreimageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PrismaDatabase {
  Default = 'default'
}

export type Proposal = {
   __typename?: 'Proposal',
  id: Scalars['Int'],
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  preimage?: Maybe<Preimage>,
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
  proposalStatus?: Maybe<Array<ProposalStatus>>,
};


export type ProposalProposalStatusArgs = {
  where?: Maybe<ProposalStatusWhereInput>,
  orderBy?: Maybe<ProposalStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ProposalConnection = {
   __typename?: 'ProposalConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ProposalEdge>>,
  aggregate: AggregateProposal,
};

export type ProposalCreateInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>,
  proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>,
};

export type ProposalCreateOneWithoutPreimageInput = {
  create?: Maybe<ProposalCreateWithoutPreimageInput>,
  connect?: Maybe<ProposalWhereUniqueInput>,
};

export type ProposalCreateOneWithoutProposalStatusInput = {
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>,
  connect?: Maybe<ProposalWhereUniqueInput>,
};

export type ProposalCreateWithoutPreimageInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
  proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>,
};

export type ProposalCreateWithoutProposalStatusInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>,
};

export type ProposalEdge = {
   __typename?: 'ProposalEdge',
  node: Proposal,
  cursor: Scalars['String'],
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
   __typename?: 'ProposalPreviousValues',
  id: Scalars['Int'],
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
};

export type ProposalStatus = Node & {
   __typename?: 'ProposalStatus',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  proposal: Proposal,
  status: Scalars['String'],
};

export type ProposalStatusConnection = {
   __typename?: 'ProposalStatusConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ProposalStatusEdge>>,
  aggregate: AggregateProposalStatus,
};

export type ProposalStatusCreateInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  proposal: ProposalCreateOneWithoutProposalStatusInput,
};

export type ProposalStatusCreateManyWithoutProposalInput = {
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>,
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
};

export type ProposalStatusCreateWithoutProposalInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type ProposalStatusEdge = {
   __typename?: 'ProposalStatusEdge',
  node: ProposalStatus,
  cursor: Scalars['String'],
};

export enum ProposalStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ProposalStatusPreviousValues = {
   __typename?: 'ProposalStatusPreviousValues',
  id: Scalars['ID'],
  status: Scalars['String'],
};

export type ProposalStatusScalarWhereInput = {
  AND?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  OR?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  NOT?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
};

export type ProposalStatusSubscriptionPayload = {
   __typename?: 'ProposalStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<ProposalStatus>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ProposalStatusPreviousValues>,
};

export type ProposalStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ProposalStatusWhereInput>,
};

export type ProposalStatusUpdateInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  proposal?: Maybe<ProposalUpdateOneRequiredWithoutProposalStatusInput>,
};

export type ProposalStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type ProposalStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type ProposalStatusUpdateManyWithoutProposalInput = {
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>,
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  set?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  disconnect?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  delete?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  update?: Maybe<Array<ProposalStatusUpdateWithWhereUniqueWithoutProposalInput>>,
  updateMany?: Maybe<Array<ProposalStatusUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  upsert?: Maybe<Array<ProposalStatusUpsertWithWhereUniqueWithoutProposalInput>>,
};

export type ProposalStatusUpdateManyWithWhereNestedInput = {
  where: ProposalStatusScalarWhereInput,
  data: ProposalStatusUpdateManyDataInput,
};

export type ProposalStatusUpdateWithoutProposalDataInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type ProposalStatusUpdateWithWhereUniqueWithoutProposalInput = {
  where: ProposalStatusWhereUniqueInput,
  data: ProposalStatusUpdateWithoutProposalDataInput,
};

export type ProposalStatusUpsertWithWhereUniqueWithoutProposalInput = {
  where: ProposalStatusWhereUniqueInput,
  update: ProposalStatusUpdateWithoutProposalDataInput,
  create: ProposalStatusCreateWithoutProposalInput,
};

export type ProposalStatusWhereInput = {
  AND?: Maybe<Array<ProposalStatusWhereInput>>,
  OR?: Maybe<Array<ProposalStatusWhereInput>>,
  NOT?: Maybe<Array<ProposalStatusWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  proposal?: Maybe<ProposalWhereInput>,
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ProposalSubscriptionPayload = {
   __typename?: 'ProposalSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Proposal>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ProposalPreviousValues>,
};

export type ProposalSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>,
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ProposalWhereInput>,
};

export type ProposalUpdateInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>,
  proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>,
};

export type ProposalUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type ProposalUpdateOneRequiredWithoutProposalStatusInput = {
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>,
  connect?: Maybe<ProposalWhereUniqueInput>,
  update?: Maybe<ProposalUpdateWithoutProposalStatusDataInput>,
  upsert?: Maybe<ProposalUpsertWithoutProposalStatusInput>,
};

export type ProposalUpdateOneWithoutPreimageInput = {
  create?: Maybe<ProposalCreateWithoutPreimageInput>,
  connect?: Maybe<ProposalWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ProposalUpdateWithoutPreimageDataInput>,
  upsert?: Maybe<ProposalUpsertWithoutPreimageInput>,
};

export type ProposalUpdateWithoutPreimageDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>,
};

export type ProposalUpdateWithoutProposalStatusDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>,
};

export type ProposalUpsertWithoutPreimageInput = {
  update: ProposalUpdateWithoutPreimageDataInput,
  create: ProposalCreateWithoutPreimageInput,
};

export type ProposalUpsertWithoutProposalStatusInput = {
  update: ProposalUpdateWithoutProposalStatusDataInput,
  create: ProposalCreateWithoutProposalStatusInput,
};

export type ProposalWhereInput = {
  AND?: Maybe<Array<ProposalWhereInput>>,
  OR?: Maybe<Array<ProposalWhereInput>>,
  NOT?: Maybe<Array<ProposalWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  author?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  depositAmount_not?: Maybe<Scalars['String']>,
  depositAmount_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_lt?: Maybe<Scalars['String']>,
  depositAmount_lte?: Maybe<Scalars['String']>,
  depositAmount_gt?: Maybe<Scalars['String']>,
  depositAmount_gte?: Maybe<Scalars['String']>,
  depositAmount_contains?: Maybe<Scalars['String']>,
  depositAmount_not_contains?: Maybe<Scalars['String']>,
  depositAmount_starts_with?: Maybe<Scalars['String']>,
  depositAmount_not_starts_with?: Maybe<Scalars['String']>,
  depositAmount_ends_with?: Maybe<Scalars['String']>,
  depositAmount_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  proposalId_not?: Maybe<Scalars['Int']>,
  proposalId_in?: Maybe<Array<Scalars['Int']>>,
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  proposalId_lt?: Maybe<Scalars['Int']>,
  proposalId_lte?: Maybe<Scalars['Int']>,
  proposalId_gt?: Maybe<Scalars['Int']>,
  proposalId_gte?: Maybe<Scalars['Int']>,
  preimage?: Maybe<PreimageWhereInput>,
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>,
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>,
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>,
};

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  heartBeats: Array<Maybe<HeartBeat>>,
  offlineValidators: Array<Maybe<OfflineValidator>>,
  eras: Array<Maybe<Era>>,
  slashings: Array<Maybe<Slashing>>,
  validators: Array<Maybe<Validator>>,
  totalIssuances: Array<Maybe<TotalIssuance>>,
  rewards: Array<Maybe<Reward>>,
  nominations: Array<Maybe<Nomination>>,
  stakes: Array<Maybe<Stake>>,
  councils: Array<Maybe<Council>>,
  councilMembers: Array<Maybe<CouncilMember>>,
  motions: Array<Maybe<Motion>>,
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>,
  motionStatuses: Array<Maybe<MotionStatus>>,
  proposals: Array<Maybe<Proposal>>,
  proposalStatuses: Array<Maybe<ProposalStatus>>,
  preimages: Array<Maybe<Preimage>>,
  preimageStatuses: Array<Maybe<PreimageStatus>>,
  preimageArguments: Array<Maybe<PreimageArgument>>,
  referendums: Array<Maybe<Referendum>>,
  referendumStatuses: Array<Maybe<ReferendumStatus>>,
  blockIndexes: Array<Maybe<BlockIndex>>,
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>,
  treasuryStatuses: Array<Maybe<TreasuryStatus>>,
  blockNumbers: Array<Maybe<BlockNumber>>,
  sessions: Array<Maybe<Session>>,
  heartBeat?: Maybe<HeartBeat>,
  offlineValidator?: Maybe<OfflineValidator>,
  era?: Maybe<Era>,
  slashing?: Maybe<Slashing>,
  validator?: Maybe<Validator>,
  totalIssuance?: Maybe<TotalIssuance>,
  reward?: Maybe<Reward>,
  nomination?: Maybe<Nomination>,
  stake?: Maybe<Stake>,
  council?: Maybe<Council>,
  councilMember?: Maybe<CouncilMember>,
  motion?: Maybe<Motion>,
  motionProposalArgument?: Maybe<MotionProposalArgument>,
  motionStatus?: Maybe<MotionStatus>,
  proposal?: Maybe<Proposal>,
  proposalStatus?: Maybe<ProposalStatus>,
  preimage?: Maybe<Preimage>,
  preimageStatus?: Maybe<PreimageStatus>,
  preimageArgument?: Maybe<PreimageArgument>,
  referendum?: Maybe<Referendum>,
  referendumStatus?: Maybe<ReferendumStatus>,
  blockIndex?: Maybe<BlockIndex>,
  treasurySpendProposal?: Maybe<TreasurySpendProposal>,
  treasuryStatus?: Maybe<TreasuryStatus>,
  blockNumber?: Maybe<BlockNumber>,
  session?: Maybe<Session>,
  heartBeatsConnection: HeartBeatConnection,
  offlineValidatorsConnection: OfflineValidatorConnection,
  erasConnection: EraConnection,
  slashingsConnection: SlashingConnection,
  validatorsConnection: ValidatorConnection,
  totalIssuancesConnection: TotalIssuanceConnection,
  rewardsConnection: RewardConnection,
  nominationsConnection: NominationConnection,
  stakesConnection: StakeConnection,
  councilsConnection: CouncilConnection,
  councilMembersConnection: CouncilMemberConnection,
  motionsConnection: MotionConnection,
  motionProposalArgumentsConnection: MotionProposalArgumentConnection,
  motionStatusesConnection: MotionStatusConnection,
  proposalsConnection: ProposalConnection,
  proposalStatusesConnection: ProposalStatusConnection,
  preimagesConnection: PreimageConnection,
  preimageStatusesConnection: PreimageStatusConnection,
  preimageArgumentsConnection: PreimageArgumentConnection,
  referendumsConnection: ReferendumConnection,
  referendumStatusesConnection: ReferendumStatusConnection,
  blockIndexesConnection: BlockIndexConnection,
  treasurySpendProposalsConnection: TreasurySpendProposalConnection,
  treasuryStatusesConnection: TreasuryStatusConnection,
  blockNumbersConnection: BlockNumberConnection,
  sessionsConnection: SessionConnection,
  node?: Maybe<Node>,
};


export type QueryHeartBeatsArgs = {
  where?: Maybe<HeartBeatWhereInput>,
  orderBy?: Maybe<HeartBeatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOfflineValidatorsArgs = {
  where?: Maybe<OfflineValidatorWhereInput>,
  orderBy?: Maybe<OfflineValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryErasArgs = {
  where?: Maybe<EraWhereInput>,
  orderBy?: Maybe<EraOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>,
  orderBy?: Maybe<SlashingOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>,
  orderBy?: Maybe<ValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>,
  orderBy?: Maybe<TotalIssuanceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRewardsArgs = {
  where?: Maybe<RewardWhereInput>,
  orderBy?: Maybe<RewardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNominationsArgs = {
  where?: Maybe<NominationWhereInput>,
  orderBy?: Maybe<NominationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryStakesArgs = {
  where?: Maybe<StakeWhereInput>,
  orderBy?: Maybe<StakeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>,
  orderBy?: Maybe<CouncilOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>,
  orderBy?: Maybe<CouncilMemberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMotionsArgs = {
  where?: Maybe<MotionWhereInput>,
  orderBy?: Maybe<MotionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>,
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMotionStatusesArgs = {
  where?: Maybe<MotionStatusWhereInput>,
  orderBy?: Maybe<MotionStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProposalsArgs = {
  where?: Maybe<ProposalWhereInput>,
  orderBy?: Maybe<ProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProposalStatusesArgs = {
  where?: Maybe<ProposalStatusWhereInput>,
  orderBy?: Maybe<ProposalStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPreimagesArgs = {
  where?: Maybe<PreimageWhereInput>,
  orderBy?: Maybe<PreimageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPreimageStatusesArgs = {
  where?: Maybe<PreimageStatusWhereInput>,
  orderBy?: Maybe<PreimageStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>,
  orderBy?: Maybe<PreimageArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReferendumsArgs = {
  where?: Maybe<ReferendumWhereInput>,
  orderBy?: Maybe<ReferendumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReferendumStatusesArgs = {
  where?: Maybe<ReferendumStatusWhereInput>,
  orderBy?: Maybe<ReferendumStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBlockIndexesArgs = {
  where?: Maybe<BlockIndexWhereInput>,
  orderBy?: Maybe<BlockIndexOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTreasurySpendProposalsArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>,
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTreasuryStatusesArgs = {
  where?: Maybe<TreasuryStatusWhereInput>,
  orderBy?: Maybe<TreasuryStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>,
  orderBy?: Maybe<BlockNumberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySessionsArgs = {
  where?: Maybe<SessionWhereInput>,
  orderBy?: Maybe<SessionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput
};


export type QueryOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput
};


export type QueryEraArgs = {
  where: EraWhereUniqueInput
};


export type QuerySlashingArgs = {
  where: SlashingWhereUniqueInput
};


export type QueryValidatorArgs = {
  where: ValidatorWhereUniqueInput
};


export type QueryTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput
};


export type QueryRewardArgs = {
  where: RewardWhereUniqueInput
};


export type QueryNominationArgs = {
  where: NominationWhereUniqueInput
};


export type QueryStakeArgs = {
  where: StakeWhereUniqueInput
};


export type QueryCouncilArgs = {
  where: CouncilWhereUniqueInput
};


export type QueryCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput
};


export type QueryMotionArgs = {
  where: MotionWhereUniqueInput
};


export type QueryMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput
};


export type QueryMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput
};


export type QueryProposalArgs = {
  where: ProposalWhereUniqueInput
};


export type QueryProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput
};


export type QueryPreimageArgs = {
  where: PreimageWhereUniqueInput
};


export type QueryPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput
};


export type QueryPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput
};


export type QueryReferendumArgs = {
  where: ReferendumWhereUniqueInput
};


export type QueryReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput
};


export type QueryBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput
};


export type QueryTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput
};


export type QueryTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput
};


export type QueryBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput
};


export type QueryHeartBeatsConnectionArgs = {
  where?: Maybe<HeartBeatWhereInput>,
  orderBy?: Maybe<HeartBeatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOfflineValidatorsConnectionArgs = {
  where?: Maybe<OfflineValidatorWhereInput>,
  orderBy?: Maybe<OfflineValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryErasConnectionArgs = {
  where?: Maybe<EraWhereInput>,
  orderBy?: Maybe<EraOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySlashingsConnectionArgs = {
  where?: Maybe<SlashingWhereInput>,
  orderBy?: Maybe<SlashingOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryValidatorsConnectionArgs = {
  where?: Maybe<ValidatorWhereInput>,
  orderBy?: Maybe<ValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTotalIssuancesConnectionArgs = {
  where?: Maybe<TotalIssuanceWhereInput>,
  orderBy?: Maybe<TotalIssuanceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRewardsConnectionArgs = {
  where?: Maybe<RewardWhereInput>,
  orderBy?: Maybe<RewardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNominationsConnectionArgs = {
  where?: Maybe<NominationWhereInput>,
  orderBy?: Maybe<NominationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryStakesConnectionArgs = {
  where?: Maybe<StakeWhereInput>,
  orderBy?: Maybe<StakeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCouncilsConnectionArgs = {
  where?: Maybe<CouncilWhereInput>,
  orderBy?: Maybe<CouncilOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCouncilMembersConnectionArgs = {
  where?: Maybe<CouncilMemberWhereInput>,
  orderBy?: Maybe<CouncilMemberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMotionsConnectionArgs = {
  where?: Maybe<MotionWhereInput>,
  orderBy?: Maybe<MotionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMotionProposalArgumentsConnectionArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>,
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMotionStatusesConnectionArgs = {
  where?: Maybe<MotionStatusWhereInput>,
  orderBy?: Maybe<MotionStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProposalsConnectionArgs = {
  where?: Maybe<ProposalWhereInput>,
  orderBy?: Maybe<ProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProposalStatusesConnectionArgs = {
  where?: Maybe<ProposalStatusWhereInput>,
  orderBy?: Maybe<ProposalStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPreimagesConnectionArgs = {
  where?: Maybe<PreimageWhereInput>,
  orderBy?: Maybe<PreimageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPreimageStatusesConnectionArgs = {
  where?: Maybe<PreimageStatusWhereInput>,
  orderBy?: Maybe<PreimageStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPreimageArgumentsConnectionArgs = {
  where?: Maybe<PreimageArgumentWhereInput>,
  orderBy?: Maybe<PreimageArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReferendumsConnectionArgs = {
  where?: Maybe<ReferendumWhereInput>,
  orderBy?: Maybe<ReferendumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReferendumStatusesConnectionArgs = {
  where?: Maybe<ReferendumStatusWhereInput>,
  orderBy?: Maybe<ReferendumStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBlockIndexesConnectionArgs = {
  where?: Maybe<BlockIndexWhereInput>,
  orderBy?: Maybe<BlockIndexOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTreasurySpendProposalsConnectionArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>,
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTreasuryStatusesConnectionArgs = {
  where?: Maybe<TreasuryStatusWhereInput>,
  orderBy?: Maybe<TreasuryStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBlockNumbersConnectionArgs = {
  where?: Maybe<BlockNumberWhereInput>,
  orderBy?: Maybe<BlockNumberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySessionsConnectionArgs = {
  where?: Maybe<SessionWhereInput>,
  orderBy?: Maybe<SessionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Referendum = {
   __typename?: 'Referendum',
  id: Scalars['Int'],
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimage?: Maybe<Preimage>,
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  referendumStatus?: Maybe<Array<ReferendumStatus>>,
  voteThreshold: Scalars['String'],
};


export type ReferendumReferendumStatusArgs = {
  where?: Maybe<ReferendumStatusWhereInput>,
  orderBy?: Maybe<ReferendumStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ReferendumConnection = {
   __typename?: 'ReferendumConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ReferendumEdge>>,
  aggregate: AggregateReferendum,
};

export type ReferendumCreateInput = {
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  voteThreshold: Scalars['String'],
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>,
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>,
};

export type ReferendumCreateOneWithoutPreimageInput = {
  create?: Maybe<ReferendumCreateWithoutPreimageInput>,
  connect?: Maybe<ReferendumWhereUniqueInput>,
};

export type ReferendumCreateOneWithoutReferendumStatusInput = {
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>,
  connect?: Maybe<ReferendumWhereUniqueInput>,
};

export type ReferendumCreateWithoutPreimageInput = {
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  voteThreshold: Scalars['String'],
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>,
};

export type ReferendumCreateWithoutReferendumStatusInput = {
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  voteThreshold: Scalars['String'],
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>,
};

export type ReferendumEdge = {
   __typename?: 'ReferendumEdge',
  node: Referendum,
  cursor: Scalars['String'],
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
   __typename?: 'ReferendumPreviousValues',
  id: Scalars['Int'],
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  voteThreshold: Scalars['String'],
};

export type ReferendumStatus = Node & {
   __typename?: 'ReferendumStatus',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  referendum: Referendum,
  status: Scalars['String'],
};

export type ReferendumStatusConnection = {
   __typename?: 'ReferendumStatusConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ReferendumStatusEdge>>,
  aggregate: AggregateReferendumStatus,
};

export type ReferendumStatusCreateInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  referendum: ReferendumCreateOneWithoutReferendumStatusInput,
};

export type ReferendumStatusCreateManyWithoutReferendumInput = {
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>,
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
};

export type ReferendumStatusCreateWithoutReferendumInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type ReferendumStatusEdge = {
   __typename?: 'ReferendumStatusEdge',
  node: ReferendumStatus,
  cursor: Scalars['String'],
};

export enum ReferendumStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ReferendumStatusPreviousValues = {
   __typename?: 'ReferendumStatusPreviousValues',
  id: Scalars['ID'],
  status: Scalars['String'],
};

export type ReferendumStatusScalarWhereInput = {
  AND?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  OR?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  NOT?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
};

export type ReferendumStatusSubscriptionPayload = {
   __typename?: 'ReferendumStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<ReferendumStatus>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ReferendumStatusPreviousValues>,
};

export type ReferendumStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ReferendumStatusWhereInput>,
};

export type ReferendumStatusUpdateInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  referendum?: Maybe<ReferendumUpdateOneRequiredWithoutReferendumStatusInput>,
};

export type ReferendumStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type ReferendumStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type ReferendumStatusUpdateManyWithoutReferendumInput = {
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>,
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  set?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  disconnect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  delete?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  update?: Maybe<Array<ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput>>,
  updateMany?: Maybe<Array<ReferendumStatusUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  upsert?: Maybe<Array<ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput>>,
};

export type ReferendumStatusUpdateManyWithWhereNestedInput = {
  where: ReferendumStatusScalarWhereInput,
  data: ReferendumStatusUpdateManyDataInput,
};

export type ReferendumStatusUpdateWithoutReferendumDataInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput = {
  where: ReferendumStatusWhereUniqueInput,
  data: ReferendumStatusUpdateWithoutReferendumDataInput,
};

export type ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput = {
  where: ReferendumStatusWhereUniqueInput,
  update: ReferendumStatusUpdateWithoutReferendumDataInput,
  create: ReferendumStatusCreateWithoutReferendumInput,
};

export type ReferendumStatusWhereInput = {
  AND?: Maybe<Array<ReferendumStatusWhereInput>>,
  OR?: Maybe<Array<ReferendumStatusWhereInput>>,
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  referendum?: Maybe<ReferendumWhereInput>,
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ReferendumSubscriptionPayload = {
   __typename?: 'ReferendumSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Referendum>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ReferendumPreviousValues>,
};

export type ReferendumSubscriptionWhereInput = {
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>,
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ReferendumWhereInput>,
};

export type ReferendumUpdateInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>,
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>,
};

export type ReferendumUpdateManyMutationInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
};

export type ReferendumUpdateOneRequiredWithoutReferendumStatusInput = {
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>,
  connect?: Maybe<ReferendumWhereUniqueInput>,
  update?: Maybe<ReferendumUpdateWithoutReferendumStatusDataInput>,
  upsert?: Maybe<ReferendumUpsertWithoutReferendumStatusInput>,
};

export type ReferendumUpdateOneWithoutPreimageInput = {
  create?: Maybe<ReferendumCreateWithoutPreimageInput>,
  connect?: Maybe<ReferendumWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ReferendumUpdateWithoutPreimageDataInput>,
  upsert?: Maybe<ReferendumUpsertWithoutPreimageInput>,
};

export type ReferendumUpdateWithoutPreimageDataInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>,
};

export type ReferendumUpdateWithoutReferendumStatusDataInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>,
};

export type ReferendumUpsertWithoutPreimageInput = {
  update: ReferendumUpdateWithoutPreimageDataInput,
  create: ReferendumCreateWithoutPreimageInput,
};

export type ReferendumUpsertWithoutReferendumStatusInput = {
  update: ReferendumUpdateWithoutReferendumStatusDataInput,
  create: ReferendumCreateWithoutReferendumStatusInput,
};

export type ReferendumWhereInput = {
  AND?: Maybe<Array<ReferendumWhereInput>>,
  OR?: Maybe<Array<ReferendumWhereInput>>,
  NOT?: Maybe<Array<ReferendumWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  delay?: Maybe<Scalars['Int']>,
  delay_not?: Maybe<Scalars['Int']>,
  delay_in?: Maybe<Array<Scalars['Int']>>,
  delay_not_in?: Maybe<Array<Scalars['Int']>>,
  delay_lt?: Maybe<Scalars['Int']>,
  delay_lte?: Maybe<Scalars['Int']>,
  delay_gt?: Maybe<Scalars['Int']>,
  delay_gte?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  end_not?: Maybe<Scalars['Int']>,
  end_in?: Maybe<Array<Scalars['Int']>>,
  end_not_in?: Maybe<Array<Scalars['Int']>>,
  end_lt?: Maybe<Scalars['Int']>,
  end_lte?: Maybe<Scalars['Int']>,
  end_gt?: Maybe<Scalars['Int']>,
  end_gte?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  referendumId_not?: Maybe<Scalars['Int']>,
  referendumId_in?: Maybe<Array<Scalars['Int']>>,
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>,
  referendumId_lt?: Maybe<Scalars['Int']>,
  referendumId_lte?: Maybe<Scalars['Int']>,
  referendumId_gt?: Maybe<Scalars['Int']>,
  referendumId_gte?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
  voteThreshold_not?: Maybe<Scalars['String']>,
  voteThreshold_in?: Maybe<Array<Scalars['String']>>,
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>,
  voteThreshold_lt?: Maybe<Scalars['String']>,
  voteThreshold_lte?: Maybe<Scalars['String']>,
  voteThreshold_gt?: Maybe<Scalars['String']>,
  voteThreshold_gte?: Maybe<Scalars['String']>,
  voteThreshold_contains?: Maybe<Scalars['String']>,
  voteThreshold_not_contains?: Maybe<Scalars['String']>,
  voteThreshold_starts_with?: Maybe<Scalars['String']>,
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>,
  voteThreshold_ends_with?: Maybe<Scalars['String']>,
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageWhereInput>,
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>,
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>,
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>,
};

export type ReferendumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  referendumId?: Maybe<Scalars['Int']>,
};

export type Reward = Node & {
   __typename?: 'Reward',
  id: Scalars['ID'],
  authoredBlock: BlockNumber,
  sessionIndex: Session,
  treasuryReward: Scalars['String'],
  validatorReward: Scalars['String'],
};

export type RewardConnection = {
   __typename?: 'RewardConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<RewardEdge>>,
  aggregate: AggregateReward,
};

export type RewardCreateInput = {
  id?: Maybe<Scalars['ID']>,
  treasuryReward: Scalars['String'],
  validatorReward: Scalars['String'],
  authoredBlock: BlockNumberCreateOneInput,
  sessionIndex: SessionCreateOneInput,
};

export type RewardEdge = {
   __typename?: 'RewardEdge',
  node: Reward,
  cursor: Scalars['String'],
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
   __typename?: 'RewardPreviousValues',
  id: Scalars['ID'],
  treasuryReward: Scalars['String'],
  validatorReward: Scalars['String'],
};

export type RewardSubscriptionPayload = {
   __typename?: 'RewardSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Reward>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<RewardPreviousValues>,
};

export type RewardSubscriptionWhereInput = {
  AND?: Maybe<Array<RewardSubscriptionWhereInput>>,
  OR?: Maybe<Array<RewardSubscriptionWhereInput>>,
  NOT?: Maybe<Array<RewardSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<RewardWhereInput>,
};

export type RewardUpdateInput = {
  treasuryReward?: Maybe<Scalars['String']>,
  validatorReward?: Maybe<Scalars['String']>,
  authoredBlock?: Maybe<BlockNumberUpdateOneRequiredInput>,
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
};

export type RewardUpdateManyMutationInput = {
  treasuryReward?: Maybe<Scalars['String']>,
  validatorReward?: Maybe<Scalars['String']>,
};

export type RewardWhereInput = {
  AND?: Maybe<Array<RewardWhereInput>>,
  OR?: Maybe<Array<RewardWhereInput>>,
  NOT?: Maybe<Array<RewardWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  treasuryReward?: Maybe<Scalars['String']>,
  treasuryReward_not?: Maybe<Scalars['String']>,
  treasuryReward_in?: Maybe<Array<Scalars['String']>>,
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>,
  treasuryReward_lt?: Maybe<Scalars['String']>,
  treasuryReward_lte?: Maybe<Scalars['String']>,
  treasuryReward_gt?: Maybe<Scalars['String']>,
  treasuryReward_gte?: Maybe<Scalars['String']>,
  treasuryReward_contains?: Maybe<Scalars['String']>,
  treasuryReward_not_contains?: Maybe<Scalars['String']>,
  treasuryReward_starts_with?: Maybe<Scalars['String']>,
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>,
  treasuryReward_ends_with?: Maybe<Scalars['String']>,
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>,
  validatorReward?: Maybe<Scalars['String']>,
  validatorReward_not?: Maybe<Scalars['String']>,
  validatorReward_in?: Maybe<Array<Scalars['String']>>,
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>,
  validatorReward_lt?: Maybe<Scalars['String']>,
  validatorReward_lte?: Maybe<Scalars['String']>,
  validatorReward_gt?: Maybe<Scalars['String']>,
  validatorReward_gte?: Maybe<Scalars['String']>,
  validatorReward_contains?: Maybe<Scalars['String']>,
  validatorReward_not_contains?: Maybe<Scalars['String']>,
  validatorReward_starts_with?: Maybe<Scalars['String']>,
  validatorReward_not_starts_with?: Maybe<Scalars['String']>,
  validatorReward_ends_with?: Maybe<Scalars['String']>,
  validatorReward_not_ends_with?: Maybe<Scalars['String']>,
  authoredBlock?: Maybe<BlockNumberWhereInput>,
  sessionIndex?: Maybe<SessionWhereInput>,
};

export type RewardWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Session = Node & {
   __typename?: 'Session',
  id: Scalars['ID'],
  index: Scalars['Int'],
  start: BlockNumber,
};

export type SessionConnection = {
   __typename?: 'SessionConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SessionEdge>>,
  aggregate: AggregateSession,
};

export type SessionCreateInput = {
  id?: Maybe<Scalars['ID']>,
  index: Scalars['Int'],
  start: BlockNumberCreateOneInput,
};

export type SessionCreateOneInput = {
  create?: Maybe<SessionCreateInput>,
  connect?: Maybe<SessionWhereUniqueInput>,
};

export type SessionEdge = {
   __typename?: 'SessionEdge',
  node: Session,
  cursor: Scalars['String'],
};

export enum SessionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type SessionPreviousValues = {
   __typename?: 'SessionPreviousValues',
  id: Scalars['ID'],
  index: Scalars['Int'],
};

export type SessionSubscriptionPayload = {
   __typename?: 'SessionSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Session>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<SessionPreviousValues>,
};

export type SessionSubscriptionWhereInput = {
  AND?: Maybe<Array<SessionSubscriptionWhereInput>>,
  OR?: Maybe<Array<SessionSubscriptionWhereInput>>,
  NOT?: Maybe<Array<SessionSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<SessionWhereInput>,
};

export type SessionUpdateDataInput = {
  index?: Maybe<Scalars['Int']>,
  start?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type SessionUpdateInput = {
  index?: Maybe<Scalars['Int']>,
  start?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type SessionUpdateManyMutationInput = {
  index?: Maybe<Scalars['Int']>,
};

export type SessionUpdateOneRequiredInput = {
  create?: Maybe<SessionCreateInput>,
  connect?: Maybe<SessionWhereUniqueInput>,
  update?: Maybe<SessionUpdateDataInput>,
  upsert?: Maybe<SessionUpsertNestedInput>,
};

export type SessionUpsertNestedInput = {
  update: SessionUpdateDataInput,
  create: SessionCreateInput,
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>,
  OR?: Maybe<Array<SessionWhereInput>>,
  NOT?: Maybe<Array<SessionWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
  start?: Maybe<BlockNumberWhereInput>,
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
};

export type Slashing = Node & {
   __typename?: 'Slashing',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  who: Scalars['String'],
  amount: Scalars['String'],
};

export type SlashingConnection = {
   __typename?: 'SlashingConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SlashingEdge>>,
  aggregate: AggregateSlashing,
};

export type SlashingCreateInput = {
  id?: Maybe<Scalars['ID']>,
  who: Scalars['String'],
  amount: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type SlashingEdge = {
   __typename?: 'SlashingEdge',
  node: Slashing,
  cursor: Scalars['String'],
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
   __typename?: 'SlashingPreviousValues',
  id: Scalars['ID'],
  who: Scalars['String'],
  amount: Scalars['String'],
};

export type SlashingSubscriptionPayload = {
   __typename?: 'SlashingSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Slashing>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<SlashingPreviousValues>,
};

export type SlashingSubscriptionWhereInput = {
  AND?: Maybe<Array<SlashingSubscriptionWhereInput>>,
  OR?: Maybe<Array<SlashingSubscriptionWhereInput>>,
  NOT?: Maybe<Array<SlashingSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<SlashingWhereInput>,
};

export type SlashingUpdateInput = {
  who?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type SlashingUpdateManyMutationInput = {
  who?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['String']>,
};

export type SlashingWhereInput = {
  AND?: Maybe<Array<SlashingWhereInput>>,
  OR?: Maybe<Array<SlashingWhereInput>>,
  NOT?: Maybe<Array<SlashingWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  who?: Maybe<Scalars['String']>,
  who_not?: Maybe<Scalars['String']>,
  who_in?: Maybe<Array<Scalars['String']>>,
  who_not_in?: Maybe<Array<Scalars['String']>>,
  who_lt?: Maybe<Scalars['String']>,
  who_lte?: Maybe<Scalars['String']>,
  who_gt?: Maybe<Scalars['String']>,
  who_gte?: Maybe<Scalars['String']>,
  who_contains?: Maybe<Scalars['String']>,
  who_not_contains?: Maybe<Scalars['String']>,
  who_starts_with?: Maybe<Scalars['String']>,
  who_not_starts_with?: Maybe<Scalars['String']>,
  who_ends_with?: Maybe<Scalars['String']>,
  who_not_ends_with?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['String']>,
  amount_not?: Maybe<Scalars['String']>,
  amount_in?: Maybe<Array<Scalars['String']>>,
  amount_not_in?: Maybe<Array<Scalars['String']>>,
  amount_lt?: Maybe<Scalars['String']>,
  amount_lte?: Maybe<Scalars['String']>,
  amount_gt?: Maybe<Scalars['String']>,
  amount_gte?: Maybe<Scalars['String']>,
  amount_contains?: Maybe<Scalars['String']>,
  amount_not_contains?: Maybe<Scalars['String']>,
  amount_starts_with?: Maybe<Scalars['String']>,
  amount_not_starts_with?: Maybe<Scalars['String']>,
  amount_ends_with?: Maybe<Scalars['String']>,
  amount_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
};

export type SlashingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  who?: Maybe<Scalars['String']>,
};

export type Stake = Node & {
   __typename?: 'Stake',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  totalStake: Scalars['String'],
};

export type StakeConnection = {
   __typename?: 'StakeConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<StakeEdge>>,
  aggregate: AggregateStake,
};

export type StakeCreateInput = {
  id?: Maybe<Scalars['ID']>,
  totalStake: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type StakeEdge = {
   __typename?: 'StakeEdge',
  node: Stake,
  cursor: Scalars['String'],
};

export enum StakeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalStakeAsc = 'totalStake_ASC',
  TotalStakeDesc = 'totalStake_DESC'
}

export type StakePreviousValues = {
   __typename?: 'StakePreviousValues',
  id: Scalars['ID'],
  totalStake: Scalars['String'],
};

export type StakeSubscriptionPayload = {
   __typename?: 'StakeSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Stake>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<StakePreviousValues>,
};

export type StakeSubscriptionWhereInput = {
  AND?: Maybe<Array<StakeSubscriptionWhereInput>>,
  OR?: Maybe<Array<StakeSubscriptionWhereInput>>,
  NOT?: Maybe<Array<StakeSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<StakeWhereInput>,
};

export type StakeUpdateInput = {
  totalStake?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type StakeUpdateManyMutationInput = {
  totalStake?: Maybe<Scalars['String']>,
};

export type StakeWhereInput = {
  AND?: Maybe<Array<StakeWhereInput>>,
  OR?: Maybe<Array<StakeWhereInput>>,
  NOT?: Maybe<Array<StakeWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  totalStake?: Maybe<Scalars['String']>,
  totalStake_not?: Maybe<Scalars['String']>,
  totalStake_in?: Maybe<Array<Scalars['String']>>,
  totalStake_not_in?: Maybe<Array<Scalars['String']>>,
  totalStake_lt?: Maybe<Scalars['String']>,
  totalStake_lte?: Maybe<Scalars['String']>,
  totalStake_gt?: Maybe<Scalars['String']>,
  totalStake_gte?: Maybe<Scalars['String']>,
  totalStake_contains?: Maybe<Scalars['String']>,
  totalStake_not_contains?: Maybe<Scalars['String']>,
  totalStake_starts_with?: Maybe<Scalars['String']>,
  totalStake_not_starts_with?: Maybe<Scalars['String']>,
  totalStake_ends_with?: Maybe<Scalars['String']>,
  totalStake_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  heartBeat?: Maybe<HeartBeatSubscriptionPayload>,
  offlineValidator?: Maybe<OfflineValidatorSubscriptionPayload>,
  era?: Maybe<EraSubscriptionPayload>,
  slashing?: Maybe<SlashingSubscriptionPayload>,
  validator?: Maybe<ValidatorSubscriptionPayload>,
  totalIssuance?: Maybe<TotalIssuanceSubscriptionPayload>,
  reward?: Maybe<RewardSubscriptionPayload>,
  nomination?: Maybe<NominationSubscriptionPayload>,
  stake?: Maybe<StakeSubscriptionPayload>,
  council?: Maybe<CouncilSubscriptionPayload>,
  councilMember?: Maybe<CouncilMemberSubscriptionPayload>,
  motion?: Maybe<MotionSubscriptionPayload>,
  motionProposalArgument?: Maybe<MotionProposalArgumentSubscriptionPayload>,
  motionStatus?: Maybe<MotionStatusSubscriptionPayload>,
  proposal?: Maybe<ProposalSubscriptionPayload>,
  proposalStatus?: Maybe<ProposalStatusSubscriptionPayload>,
  preimage?: Maybe<PreimageSubscriptionPayload>,
  preimageStatus?: Maybe<PreimageStatusSubscriptionPayload>,
  preimageArgument?: Maybe<PreimageArgumentSubscriptionPayload>,
  referendum?: Maybe<ReferendumSubscriptionPayload>,
  referendumStatus?: Maybe<ReferendumStatusSubscriptionPayload>,
  blockIndex?: Maybe<BlockIndexSubscriptionPayload>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalSubscriptionPayload>,
  treasuryStatus?: Maybe<TreasuryStatusSubscriptionPayload>,
  blockNumber?: Maybe<BlockNumberSubscriptionPayload>,
  session?: Maybe<SessionSubscriptionPayload>,
};


export type SubscriptionHeartBeatArgs = {
  where?: Maybe<HeartBeatSubscriptionWhereInput>
};


export type SubscriptionOfflineValidatorArgs = {
  where?: Maybe<OfflineValidatorSubscriptionWhereInput>
};


export type SubscriptionEraArgs = {
  where?: Maybe<EraSubscriptionWhereInput>
};


export type SubscriptionSlashingArgs = {
  where?: Maybe<SlashingSubscriptionWhereInput>
};


export type SubscriptionValidatorArgs = {
  where?: Maybe<ValidatorSubscriptionWhereInput>
};


export type SubscriptionTotalIssuanceArgs = {
  where?: Maybe<TotalIssuanceSubscriptionWhereInput>
};


export type SubscriptionRewardArgs = {
  where?: Maybe<RewardSubscriptionWhereInput>
};


export type SubscriptionNominationArgs = {
  where?: Maybe<NominationSubscriptionWhereInput>
};


export type SubscriptionStakeArgs = {
  where?: Maybe<StakeSubscriptionWhereInput>
};


export type SubscriptionCouncilArgs = {
  where?: Maybe<CouncilSubscriptionWhereInput>
};


export type SubscriptionCouncilMemberArgs = {
  where?: Maybe<CouncilMemberSubscriptionWhereInput>
};


export type SubscriptionMotionArgs = {
  where?: Maybe<MotionSubscriptionWhereInput>
};


export type SubscriptionMotionProposalArgumentArgs = {
  where?: Maybe<MotionProposalArgumentSubscriptionWhereInput>
};


export type SubscriptionMotionStatusArgs = {
  where?: Maybe<MotionStatusSubscriptionWhereInput>
};


export type SubscriptionProposalArgs = {
  where?: Maybe<ProposalSubscriptionWhereInput>
};


export type SubscriptionProposalStatusArgs = {
  where?: Maybe<ProposalStatusSubscriptionWhereInput>
};


export type SubscriptionPreimageArgs = {
  where?: Maybe<PreimageSubscriptionWhereInput>
};


export type SubscriptionPreimageStatusArgs = {
  where?: Maybe<PreimageStatusSubscriptionWhereInput>
};


export type SubscriptionPreimageArgumentArgs = {
  where?: Maybe<PreimageArgumentSubscriptionWhereInput>
};


export type SubscriptionReferendumArgs = {
  where?: Maybe<ReferendumSubscriptionWhereInput>
};


export type SubscriptionReferendumStatusArgs = {
  where?: Maybe<ReferendumStatusSubscriptionWhereInput>
};


export type SubscriptionBlockIndexArgs = {
  where?: Maybe<BlockIndexSubscriptionWhereInput>
};


export type SubscriptionTreasurySpendProposalArgs = {
  where?: Maybe<TreasurySpendProposalSubscriptionWhereInput>
};


export type SubscriptionTreasuryStatusArgs = {
  where?: Maybe<TreasuryStatusSubscriptionWhereInput>
};


export type SubscriptionBlockNumberArgs = {
  where?: Maybe<BlockNumberSubscriptionWhereInput>
};


export type SubscriptionSessionArgs = {
  where?: Maybe<SessionSubscriptionWhereInput>
};

export type TotalIssuance = Node & {
   __typename?: 'TotalIssuance',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  amount: Scalars['String'],
};

export type TotalIssuanceConnection = {
   __typename?: 'TotalIssuanceConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TotalIssuanceEdge>>,
  aggregate: AggregateTotalIssuance,
};

export type TotalIssuanceCreateInput = {
  id?: Maybe<Scalars['ID']>,
  amount: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type TotalIssuanceEdge = {
   __typename?: 'TotalIssuanceEdge',
  node: TotalIssuance,
  cursor: Scalars['String'],
};

export enum TotalIssuanceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type TotalIssuancePreviousValues = {
   __typename?: 'TotalIssuancePreviousValues',
  id: Scalars['ID'],
  amount: Scalars['String'],
};

export type TotalIssuanceSubscriptionPayload = {
   __typename?: 'TotalIssuanceSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<TotalIssuance>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TotalIssuancePreviousValues>,
};

export type TotalIssuanceSubscriptionWhereInput = {
  AND?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>,
  OR?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TotalIssuanceWhereInput>,
};

export type TotalIssuanceUpdateInput = {
  amount?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type TotalIssuanceUpdateManyMutationInput = {
  amount?: Maybe<Scalars['String']>,
};

export type TotalIssuanceWhereInput = {
  AND?: Maybe<Array<TotalIssuanceWhereInput>>,
  OR?: Maybe<Array<TotalIssuanceWhereInput>>,
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['String']>,
  amount_not?: Maybe<Scalars['String']>,
  amount_in?: Maybe<Array<Scalars['String']>>,
  amount_not_in?: Maybe<Array<Scalars['String']>>,
  amount_lt?: Maybe<Scalars['String']>,
  amount_lte?: Maybe<Scalars['String']>,
  amount_gt?: Maybe<Scalars['String']>,
  amount_gte?: Maybe<Scalars['String']>,
  amount_contains?: Maybe<Scalars['String']>,
  amount_not_contains?: Maybe<Scalars['String']>,
  amount_starts_with?: Maybe<Scalars['String']>,
  amount_not_starts_with?: Maybe<Scalars['String']>,
  amount_ends_with?: Maybe<Scalars['String']>,
  amount_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
};

export type TotalIssuanceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type TreasurySpendProposal = {
   __typename?: 'TreasurySpendProposal',
  id: Scalars['Int'],
  proposer: Scalars['String'],
  beneficiary: Scalars['String'],
  value: Scalars['String'],
  bond: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  treasuryStatus?: Maybe<Array<TreasuryStatus>>,
  motion?: Maybe<Motion>,
};


export type TreasurySpendProposalTreasuryStatusArgs = {
  where?: Maybe<TreasuryStatusWhereInput>,
  orderBy?: Maybe<TreasuryStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TreasurySpendProposalConnection = {
   __typename?: 'TreasurySpendProposalConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TreasurySpendProposalEdge>>,
  aggregate: AggregateTreasurySpendProposal,
};

export type TreasurySpendProposalCreateInput = {
  proposer: Scalars['String'],
  beneficiary: Scalars['String'],
  value: Scalars['String'],
  bond: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>,
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>,
};

export type TreasurySpendProposalCreateOneWithoutMotionInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>,
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
};

export type TreasurySpendProposalCreateOneWithoutTreasuryStatusInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>,
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
};

export type TreasurySpendProposalCreateWithoutMotionInput = {
  proposer: Scalars['String'],
  beneficiary: Scalars['String'],
  value: Scalars['String'],
  bond: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>,
};

export type TreasurySpendProposalCreateWithoutTreasuryStatusInput = {
  proposer: Scalars['String'],
  beneficiary: Scalars['String'],
  value: Scalars['String'],
  bond: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>,
};

export type TreasurySpendProposalEdge = {
   __typename?: 'TreasurySpendProposalEdge',
  node: TreasurySpendProposal,
  cursor: Scalars['String'],
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
   __typename?: 'TreasurySpendProposalPreviousValues',
  id: Scalars['Int'],
  proposer: Scalars['String'],
  beneficiary: Scalars['String'],
  value: Scalars['String'],
  bond: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
};

export type TreasurySpendProposalSubscriptionPayload = {
   __typename?: 'TreasurySpendProposalSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<TreasurySpendProposal>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TreasurySpendProposalPreviousValues>,
};

export type TreasurySpendProposalSubscriptionWhereInput = {
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>,
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TreasurySpendProposalWhereInput>,
};

export type TreasurySpendProposalUpdateInput = {
  proposer?: Maybe<Scalars['String']>,
  beneficiary?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>,
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>,
};

export type TreasurySpendProposalUpdateManyMutationInput = {
  proposer?: Maybe<Scalars['String']>,
  beneficiary?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
};

export type TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>,
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
  update?: Maybe<TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput>,
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutTreasuryStatusInput>,
};

export type TreasurySpendProposalUpdateOneWithoutMotionInput = {
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>,
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<TreasurySpendProposalUpdateWithoutMotionDataInput>,
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutMotionInput>,
};

export type TreasurySpendProposalUpdateWithoutMotionDataInput = {
  proposer?: Maybe<Scalars['String']>,
  beneficiary?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>,
};

export type TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput = {
  proposer?: Maybe<Scalars['String']>,
  beneficiary?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>,
};

export type TreasurySpendProposalUpsertWithoutMotionInput = {
  update: TreasurySpendProposalUpdateWithoutMotionDataInput,
  create: TreasurySpendProposalCreateWithoutMotionInput,
};

export type TreasurySpendProposalUpsertWithoutTreasuryStatusInput = {
  update: TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput,
  create: TreasurySpendProposalCreateWithoutTreasuryStatusInput,
};

export type TreasurySpendProposalWhereInput = {
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  proposer?: Maybe<Scalars['String']>,
  proposer_not?: Maybe<Scalars['String']>,
  proposer_in?: Maybe<Array<Scalars['String']>>,
  proposer_not_in?: Maybe<Array<Scalars['String']>>,
  proposer_lt?: Maybe<Scalars['String']>,
  proposer_lte?: Maybe<Scalars['String']>,
  proposer_gt?: Maybe<Scalars['String']>,
  proposer_gte?: Maybe<Scalars['String']>,
  proposer_contains?: Maybe<Scalars['String']>,
  proposer_not_contains?: Maybe<Scalars['String']>,
  proposer_starts_with?: Maybe<Scalars['String']>,
  proposer_not_starts_with?: Maybe<Scalars['String']>,
  proposer_ends_with?: Maybe<Scalars['String']>,
  proposer_not_ends_with?: Maybe<Scalars['String']>,
  beneficiary?: Maybe<Scalars['String']>,
  beneficiary_not?: Maybe<Scalars['String']>,
  beneficiary_in?: Maybe<Array<Scalars['String']>>,
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>,
  beneficiary_lt?: Maybe<Scalars['String']>,
  beneficiary_lte?: Maybe<Scalars['String']>,
  beneficiary_gt?: Maybe<Scalars['String']>,
  beneficiary_gte?: Maybe<Scalars['String']>,
  beneficiary_contains?: Maybe<Scalars['String']>,
  beneficiary_not_contains?: Maybe<Scalars['String']>,
  beneficiary_starts_with?: Maybe<Scalars['String']>,
  beneficiary_not_starts_with?: Maybe<Scalars['String']>,
  beneficiary_ends_with?: Maybe<Scalars['String']>,
  beneficiary_not_ends_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  bond_not?: Maybe<Scalars['String']>,
  bond_in?: Maybe<Array<Scalars['String']>>,
  bond_not_in?: Maybe<Array<Scalars['String']>>,
  bond_lt?: Maybe<Scalars['String']>,
  bond_lte?: Maybe<Scalars['String']>,
  bond_gt?: Maybe<Scalars['String']>,
  bond_gte?: Maybe<Scalars['String']>,
  bond_contains?: Maybe<Scalars['String']>,
  bond_not_contains?: Maybe<Scalars['String']>,
  bond_starts_with?: Maybe<Scalars['String']>,
  bond_not_starts_with?: Maybe<Scalars['String']>,
  bond_ends_with?: Maybe<Scalars['String']>,
  bond_not_ends_with?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  treasuryProposalId_not?: Maybe<Scalars['Int']>,
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>,
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  treasuryProposalId_lt?: Maybe<Scalars['Int']>,
  treasuryProposalId_lte?: Maybe<Scalars['Int']>,
  treasuryProposalId_gt?: Maybe<Scalars['Int']>,
  treasuryProposalId_gte?: Maybe<Scalars['Int']>,
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>,
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>,
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>,
  motion?: Maybe<MotionWhereInput>,
};

export type TreasurySpendProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
};

export type TreasuryStatus = Node & {
   __typename?: 'TreasuryStatus',
  id: Scalars['ID'],
  blockNumber: BlockNumber,
  treasurySpendProposal: TreasurySpendProposal,
  status: Scalars['String'],
};

export type TreasuryStatusConnection = {
   __typename?: 'TreasuryStatusConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TreasuryStatusEdge>>,
  aggregate: AggregateTreasuryStatus,
};

export type TreasuryStatusCreateInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  treasurySpendProposal: TreasurySpendProposalCreateOneWithoutTreasuryStatusInput,
};

export type TreasuryStatusCreateManyWithoutTreasurySpendProposalInput = {
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>,
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
};

export type TreasuryStatusCreateWithoutTreasurySpendProposalInput = {
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
};

export type TreasuryStatusEdge = {
   __typename?: 'TreasuryStatusEdge',
  node: TreasuryStatus,
  cursor: Scalars['String'],
};

export enum TreasuryStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type TreasuryStatusPreviousValues = {
   __typename?: 'TreasuryStatusPreviousValues',
  id: Scalars['ID'],
  status: Scalars['String'],
};

export type TreasuryStatusScalarWhereInput = {
  AND?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  OR?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  NOT?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
};

export type TreasuryStatusSubscriptionPayload = {
   __typename?: 'TreasuryStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<TreasuryStatus>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TreasuryStatusPreviousValues>,
};

export type TreasuryStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TreasuryStatusWhereInput>,
};

export type TreasuryStatusUpdateInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput>,
};

export type TreasuryStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type TreasuryStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput = {
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>,
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  set?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  disconnect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  delete?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  update?: Maybe<Array<TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput>>,
  updateMany?: Maybe<Array<TreasuryStatusUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  upsert?: Maybe<Array<TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput>>,
};

export type TreasuryStatusUpdateManyWithWhereNestedInput = {
  where: TreasuryStatusScalarWhereInput,
  data: TreasuryStatusUpdateManyDataInput,
};

export type TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput = {
  status?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput = {
  where: TreasuryStatusWhereUniqueInput,
  data: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput,
};

export type TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput = {
  where: TreasuryStatusWhereUniqueInput,
  update: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput,
  create: TreasuryStatusCreateWithoutTreasurySpendProposalInput,
};

export type TreasuryStatusWhereInput = {
  AND?: Maybe<Array<TreasuryStatusWhereInput>>,
  OR?: Maybe<Array<TreasuryStatusWhereInput>>,
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>,
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Validator = Node & {
   __typename?: 'Validator',
  id: Scalars['ID'],
  session: Session,
  controller: Scalars['String'],
  stash: Scalars['String'],
  preferences: Scalars['String'],
};

export type ValidatorConnection = {
   __typename?: 'ValidatorConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ValidatorEdge>>,
  aggregate: AggregateValidator,
};

export type ValidatorCreateInput = {
  id?: Maybe<Scalars['ID']>,
  controller: Scalars['String'],
  stash: Scalars['String'],
  preferences: Scalars['String'],
  session: SessionCreateOneInput,
};

export type ValidatorEdge = {
   __typename?: 'ValidatorEdge',
  node: Validator,
  cursor: Scalars['String'],
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
   __typename?: 'ValidatorPreviousValues',
  id: Scalars['ID'],
  controller: Scalars['String'],
  stash: Scalars['String'],
  preferences: Scalars['String'],
};

export type ValidatorSubscriptionPayload = {
   __typename?: 'ValidatorSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Validator>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ValidatorPreviousValues>,
};

export type ValidatorSubscriptionWhereInput = {
  AND?: Maybe<Array<ValidatorSubscriptionWhereInput>>,
  OR?: Maybe<Array<ValidatorSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ValidatorSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ValidatorWhereInput>,
};

export type ValidatorUpdateInput = {
  controller?: Maybe<Scalars['String']>,
  stash?: Maybe<Scalars['String']>,
  preferences?: Maybe<Scalars['String']>,
  session?: Maybe<SessionUpdateOneRequiredInput>,
};

export type ValidatorUpdateManyMutationInput = {
  controller?: Maybe<Scalars['String']>,
  stash?: Maybe<Scalars['String']>,
  preferences?: Maybe<Scalars['String']>,
};

export type ValidatorWhereInput = {
  AND?: Maybe<Array<ValidatorWhereInput>>,
  OR?: Maybe<Array<ValidatorWhereInput>>,
  NOT?: Maybe<Array<ValidatorWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  controller?: Maybe<Scalars['String']>,
  controller_not?: Maybe<Scalars['String']>,
  controller_in?: Maybe<Array<Scalars['String']>>,
  controller_not_in?: Maybe<Array<Scalars['String']>>,
  controller_lt?: Maybe<Scalars['String']>,
  controller_lte?: Maybe<Scalars['String']>,
  controller_gt?: Maybe<Scalars['String']>,
  controller_gte?: Maybe<Scalars['String']>,
  controller_contains?: Maybe<Scalars['String']>,
  controller_not_contains?: Maybe<Scalars['String']>,
  controller_starts_with?: Maybe<Scalars['String']>,
  controller_not_starts_with?: Maybe<Scalars['String']>,
  controller_ends_with?: Maybe<Scalars['String']>,
  controller_not_ends_with?: Maybe<Scalars['String']>,
  stash?: Maybe<Scalars['String']>,
  stash_not?: Maybe<Scalars['String']>,
  stash_in?: Maybe<Array<Scalars['String']>>,
  stash_not_in?: Maybe<Array<Scalars['String']>>,
  stash_lt?: Maybe<Scalars['String']>,
  stash_lte?: Maybe<Scalars['String']>,
  stash_gt?: Maybe<Scalars['String']>,
  stash_gte?: Maybe<Scalars['String']>,
  stash_contains?: Maybe<Scalars['String']>,
  stash_not_contains?: Maybe<Scalars['String']>,
  stash_starts_with?: Maybe<Scalars['String']>,
  stash_not_starts_with?: Maybe<Scalars['String']>,
  stash_ends_with?: Maybe<Scalars['String']>,
  stash_not_ends_with?: Maybe<Scalars['String']>,
  preferences?: Maybe<Scalars['String']>,
  preferences_not?: Maybe<Scalars['String']>,
  preferences_in?: Maybe<Array<Scalars['String']>>,
  preferences_not_in?: Maybe<Array<Scalars['String']>>,
  preferences_lt?: Maybe<Scalars['String']>,
  preferences_lte?: Maybe<Scalars['String']>,
  preferences_gt?: Maybe<Scalars['String']>,
  preferences_gte?: Maybe<Scalars['String']>,
  preferences_contains?: Maybe<Scalars['String']>,
  preferences_not_contains?: Maybe<Scalars['String']>,
  preferences_starts_with?: Maybe<Scalars['String']>,
  preferences_not_starts_with?: Maybe<Scalars['String']>,
  preferences_ends_with?: Maybe<Scalars['String']>,
  preferences_not_ends_with?: Maybe<Scalars['String']>,
  session?: Maybe<SessionWhereInput>,
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type GetExecutedMotionsWithPreimageHashQueryVariables = {
  preimageHash: Scalars['String']
};


export type GetExecutedMotionsWithPreimageHashQuery = (
  { __typename?: 'Query' }
  & { motions: Array<Maybe<(
    { __typename?: 'Motion' }
    & Pick<Motion, 'motionProposalId'>
  )>> }
);

export type GetTabledProposalAtBlockQueryVariables = {
  blockHash: Scalars['String']
};


export type GetTabledProposalAtBlockQuery = (
  { __typename?: 'Query' }
  & { proposals: Array<Maybe<(
    { __typename?: 'Proposal' }
    & Pick<Proposal, 'proposalId'>
    & { preimage: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash'>
    )> }
  )>> }
);

export type GetOnchainReferendaQueryVariables = {
  startBlock: Scalars['Int']
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
  & { referendumStatus: Maybe<Array<(
    { __typename?: 'ReferendumStatus' }
    & Pick<ReferendumStatus, 'id' | 'status'>
    & { blockNumber: (
      { __typename?: 'BlockNumber' }
      & Pick<BlockNumber, 'id' | 'hash'>
    ) }
  )>> }
);

export type GetOnchainProposalsQueryVariables = {
  startBlock: Scalars['Int']
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
  startBlock: Scalars['Int']
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
  & { motionProposalArguments: Maybe<Array<(
    { __typename?: 'MotionProposalArgument' }
    & Pick<MotionProposalArgument, 'name' | 'value'>
  )>> }
);

export type GetOnchainTreasuryProposalsQueryVariables = {
  startBlock: Scalars['Int']
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
      hash
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
export const GetExecutedMotionsWithPreimageHashDocument = gql`
    query getExecutedMotionsWithPreimageHash($preimageHash: String!) {
  motions(where: {AND: [{motionStatus_some: {status: "Executed"}}, {preimageHash: $preimageHash}]}, orderBy: id_DESC) {
    motionProposalId
  }
}
    `;
export const GetTabledProposalAtBlockDocument = gql`
    query getTabledProposalAtBlock($blockHash: String!) {
  proposals(where: {proposalStatus_some: {AND: [{blockNumber: {hash: $blockHash}}, {status: "Tabled"}]}}) {
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
export function getSdk(client: GraphQLClient) {
  return {
    getExecutedMotionsWithPreimageHash(variables: GetExecutedMotionsWithPreimageHashQueryVariables): Promise<GetExecutedMotionsWithPreimageHashQuery> {
      return client.request<GetExecutedMotionsWithPreimageHashQuery>(print(GetExecutedMotionsWithPreimageHashDocument), variables);
    },
    getTabledProposalAtBlock(variables: GetTabledProposalAtBlockQueryVariables): Promise<GetTabledProposalAtBlockQuery> {
      return client.request<GetTabledProposalAtBlockQuery>(print(GetTabledProposalAtBlockDocument), variables);
    },
    getOnchainReferenda(variables: GetOnchainReferendaQueryVariables): Promise<GetOnchainReferendaQuery> {
      return client.request<GetOnchainReferendaQuery>(print(GetOnchainReferendaDocument), variables);
    },
    getOnchainProposals(variables: GetOnchainProposalsQueryVariables): Promise<GetOnchainProposalsQuery> {
      return client.request<GetOnchainProposalsQuery>(print(GetOnchainProposalsDocument), variables);
    },
    getOnchainMotions(variables: GetOnchainMotionsQueryVariables): Promise<GetOnchainMotionsQuery> {
      return client.request<GetOnchainMotionsQuery>(print(GetOnchainMotionsDocument), variables);
    },
    getOnchainTreasuryProposals(variables: GetOnchainTreasuryProposalsQueryVariables): Promise<GetOnchainTreasuryProposalsQuery> {
      return client.request<GetOnchainTreasuryProposalsQuery>(print(GetOnchainTreasuryProposalsDocument), variables);
    }
  };
}