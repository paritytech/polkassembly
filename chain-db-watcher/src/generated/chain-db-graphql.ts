import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { SdkFunctionWrapper, defaultWrapper } from '@graphql-codegen/typescript-graphql-request';
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
  Json: any;
};

export type BlockIndex = Node & {
   __typename?: 'BlockIndex';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  startFrom: Scalars['Int'];
  index: Scalars['Int'];
};

export type BlockNumber = Node & {
   __typename?: 'BlockNumber';
  id: Scalars['ID'];
  number: Scalars['Int'];
  authoredBy: Scalars['String'];
  startDateTime: Scalars['DateTime'];
  hash: Scalars['String'];
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

export type BlockNumberWhereInput = {
  AND?: Maybe<Array<BlockNumberWhereInput>>;
  OR?: Maybe<Array<BlockNumberWhereInput>>;
  NOT?: Maybe<Array<BlockNumberWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  number_not?: Maybe<Scalars['Int']>;
  number_in?: Maybe<Array<Scalars['Int']>>;
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  number_lt?: Maybe<Scalars['Int']>;
  number_lte?: Maybe<Scalars['Int']>;
  number_gt?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredBy_not?: Maybe<Scalars['String']>;
  authoredBy_in?: Maybe<Array<Scalars['String']>>;
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>;
  authoredBy_lt?: Maybe<Scalars['String']>;
  authoredBy_lte?: Maybe<Scalars['String']>;
  authoredBy_gt?: Maybe<Scalars['String']>;
  authoredBy_gte?: Maybe<Scalars['String']>;
  authoredBy_contains?: Maybe<Scalars['String']>;
  authoredBy_not_contains?: Maybe<Scalars['String']>;
  authoredBy_starts_with?: Maybe<Scalars['String']>;
  authoredBy_not_starts_with?: Maybe<Scalars['String']>;
  authoredBy_ends_with?: Maybe<Scalars['String']>;
  authoredBy_not_ends_with?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  startDateTime_not?: Maybe<Scalars['DateTime']>;
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>;
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  startDateTime_lt?: Maybe<Scalars['DateTime']>;
  startDateTime_lte?: Maybe<Scalars['DateTime']>;
  startDateTime_gt?: Maybe<Scalars['DateTime']>;
  startDateTime_gte?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  hash_not?: Maybe<Scalars['String']>;
  hash_in?: Maybe<Array<Scalars['String']>>;
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  hash_lt?: Maybe<Scalars['String']>;
  hash_lte?: Maybe<Scalars['String']>;
  hash_gt?: Maybe<Scalars['String']>;
  hash_gte?: Maybe<Scalars['String']>;
  hash_contains?: Maybe<Scalars['String']>;
  hash_not_contains?: Maybe<Scalars['String']>;
  hash_starts_with?: Maybe<Scalars['String']>;
  hash_not_starts_with?: Maybe<Scalars['String']>;
  hash_ends_with?: Maybe<Scalars['String']>;
  hash_not_ends_with?: Maybe<Scalars['String']>;
};

export type BlockNumberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
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

export enum CouncilMemberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC'
}

export type CouncilMemberWhereInput = {
  AND?: Maybe<Array<CouncilMemberWhereInput>>;
  OR?: Maybe<Array<CouncilMemberWhereInput>>;
  NOT?: Maybe<Array<CouncilMemberWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Scalars['String']>>;
  address_not_in?: Maybe<Array<Scalars['String']>>;
  address_lt?: Maybe<Scalars['String']>;
  address_lte?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  address_gte?: Maybe<Scalars['String']>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
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

export type CouncilWhereInput = {
  AND?: Maybe<Array<CouncilWhereInput>>;
  OR?: Maybe<Array<CouncilWhereInput>>;
  NOT?: Maybe<Array<CouncilWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
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

export enum EraOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  TotalPointsAsc = 'totalPoints_ASC',
  TotalPointsDesc = 'totalPoints_DESC'
}

export type EraWhereInput = {
  AND?: Maybe<Array<EraWhereInput>>;
  OR?: Maybe<Array<EraWhereInput>>;
  NOT?: Maybe<Array<EraWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  index_not?: Maybe<Scalars['Int']>;
  index_in?: Maybe<Array<Scalars['Int']>>;
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  index_lt?: Maybe<Scalars['Int']>;
  index_lte?: Maybe<Scalars['Int']>;
  index_gt?: Maybe<Scalars['Int']>;
  index_gte?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['String']>;
  totalPoints_not?: Maybe<Scalars['String']>;
  totalPoints_in?: Maybe<Array<Scalars['String']>>;
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>;
  totalPoints_lt?: Maybe<Scalars['String']>;
  totalPoints_lte?: Maybe<Scalars['String']>;
  totalPoints_gt?: Maybe<Scalars['String']>;
  totalPoints_gte?: Maybe<Scalars['String']>;
  totalPoints_contains?: Maybe<Scalars['String']>;
  totalPoints_not_contains?: Maybe<Scalars['String']>;
  totalPoints_starts_with?: Maybe<Scalars['String']>;
  totalPoints_not_starts_with?: Maybe<Scalars['String']>;
  totalPoints_ends_with?: Maybe<Scalars['String']>;
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

export enum HeartBeatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC'
}

export type HeartBeatWhereInput = {
  AND?: Maybe<Array<HeartBeatWhereInput>>;
  OR?: Maybe<Array<HeartBeatWhereInput>>;
  NOT?: Maybe<Array<HeartBeatWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  authorityId?: Maybe<Scalars['String']>;
  authorityId_not?: Maybe<Scalars['String']>;
  authorityId_in?: Maybe<Array<Scalars['String']>>;
  authorityId_not_in?: Maybe<Array<Scalars['String']>>;
  authorityId_lt?: Maybe<Scalars['String']>;
  authorityId_lte?: Maybe<Scalars['String']>;
  authorityId_gt?: Maybe<Scalars['String']>;
  authorityId_gte?: Maybe<Scalars['String']>;
  authorityId_contains?: Maybe<Scalars['String']>;
  authorityId_not_contains?: Maybe<Scalars['String']>;
  authorityId_starts_with?: Maybe<Scalars['String']>;
  authorityId_not_starts_with?: Maybe<Scalars['String']>;
  authorityId_ends_with?: Maybe<Scalars['String']>;
  authorityId_not_ends_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
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

export enum MotionProposalArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type MotionProposalArgumentWhereInput = {
  AND?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
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
};

export enum MotionStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type MotionStatusWhereInput = {
  AND?: Maybe<Array<MotionStatusWhereInput>>;
  OR?: Maybe<Array<MotionStatusWhereInput>>;
  NOT?: Maybe<Array<MotionStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  motion?: Maybe<MotionWhereInput>;
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MotionSubscriptionPayload = {
   __typename?: 'MotionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Motion>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MotionPreviousValues>;
};

export type MotionSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>;
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>;
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MotionWhereInput>;
};

export type MotionWhereInput = {
  AND?: Maybe<Array<MotionWhereInput>>;
  OR?: Maybe<Array<MotionWhereInput>>;
  NOT?: Maybe<Array<MotionWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  memberCount_not?: Maybe<Scalars['Int']>;
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount_lt?: Maybe<Scalars['Int']>;
  memberCount_lte?: Maybe<Scalars['Int']>;
  memberCount_gt?: Maybe<Scalars['Int']>;
  memberCount_gte?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescription_not?: Maybe<Scalars['String']>;
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_lt?: Maybe<Scalars['String']>;
  metaDescription_lte?: Maybe<Scalars['String']>;
  metaDescription_gt?: Maybe<Scalars['String']>;
  metaDescription_gte?: Maybe<Scalars['String']>;
  metaDescription_contains?: Maybe<Scalars['String']>;
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  method_not?: Maybe<Scalars['String']>;
  method_in?: Maybe<Array<Scalars['String']>>;
  method_not_in?: Maybe<Array<Scalars['String']>>;
  method_lt?: Maybe<Scalars['String']>;
  method_lte?: Maybe<Scalars['String']>;
  method_gt?: Maybe<Scalars['String']>;
  method_gte?: Maybe<Scalars['String']>;
  method_contains?: Maybe<Scalars['String']>;
  method_not_contains?: Maybe<Scalars['String']>;
  method_starts_with?: Maybe<Scalars['String']>;
  method_not_starts_with?: Maybe<Scalars['String']>;
  method_ends_with?: Maybe<Scalars['String']>;
  method_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalHash_not?: Maybe<Scalars['String']>;
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  motionProposalId_not?: Maybe<Scalars['Int']>;
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  section_not?: Maybe<Scalars['String']>;
  section_in?: Maybe<Array<Scalars['String']>>;
  section_not_in?: Maybe<Array<Scalars['String']>>;
  section_lt?: Maybe<Scalars['String']>;
  section_lte?: Maybe<Scalars['String']>;
  section_gt?: Maybe<Scalars['String']>;
  section_gte?: Maybe<Scalars['String']>;
  section_contains?: Maybe<Scalars['String']>;
  section_not_contains?: Maybe<Scalars['String']>;
  section_starts_with?: Maybe<Scalars['String']>;
  section_not_starts_with?: Maybe<Scalars['String']>;
  section_ends_with?: Maybe<Scalars['String']>;
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

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
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

export type NominationWhereInput = {
  AND?: Maybe<Array<NominationWhereInput>>;
  OR?: Maybe<Array<NominationWhereInput>>;
  NOT?: Maybe<Array<NominationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  validatorController?: Maybe<Scalars['String']>;
  validatorController_not?: Maybe<Scalars['String']>;
  validatorController_in?: Maybe<Array<Scalars['String']>>;
  validatorController_not_in?: Maybe<Array<Scalars['String']>>;
  validatorController_lt?: Maybe<Scalars['String']>;
  validatorController_lte?: Maybe<Scalars['String']>;
  validatorController_gt?: Maybe<Scalars['String']>;
  validatorController_gte?: Maybe<Scalars['String']>;
  validatorController_contains?: Maybe<Scalars['String']>;
  validatorController_not_contains?: Maybe<Scalars['String']>;
  validatorController_starts_with?: Maybe<Scalars['String']>;
  validatorController_not_starts_with?: Maybe<Scalars['String']>;
  validatorController_ends_with?: Maybe<Scalars['String']>;
  validatorController_not_ends_with?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  validatorStash_not?: Maybe<Scalars['String']>;
  validatorStash_in?: Maybe<Array<Scalars['String']>>;
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  validatorStash_lt?: Maybe<Scalars['String']>;
  validatorStash_lte?: Maybe<Scalars['String']>;
  validatorStash_gt?: Maybe<Scalars['String']>;
  validatorStash_gte?: Maybe<Scalars['String']>;
  validatorStash_contains?: Maybe<Scalars['String']>;
  validatorStash_not_contains?: Maybe<Scalars['String']>;
  validatorStash_starts_with?: Maybe<Scalars['String']>;
  validatorStash_not_starts_with?: Maybe<Scalars['String']>;
  validatorStash_ends_with?: Maybe<Scalars['String']>;
  validatorStash_not_ends_with?: Maybe<Scalars['String']>;
  nominatorController?: Maybe<Scalars['String']>;
  nominatorController_not?: Maybe<Scalars['String']>;
  nominatorController_in?: Maybe<Array<Scalars['String']>>;
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>;
  nominatorController_lt?: Maybe<Scalars['String']>;
  nominatorController_lte?: Maybe<Scalars['String']>;
  nominatorController_gt?: Maybe<Scalars['String']>;
  nominatorController_gte?: Maybe<Scalars['String']>;
  nominatorController_contains?: Maybe<Scalars['String']>;
  nominatorController_not_contains?: Maybe<Scalars['String']>;
  nominatorController_starts_with?: Maybe<Scalars['String']>;
  nominatorController_not_starts_with?: Maybe<Scalars['String']>;
  nominatorController_ends_with?: Maybe<Scalars['String']>;
  nominatorController_not_ends_with?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  nominatorStash_not?: Maybe<Scalars['String']>;
  nominatorStash_in?: Maybe<Array<Scalars['String']>>;
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  nominatorStash_lt?: Maybe<Scalars['String']>;
  nominatorStash_lte?: Maybe<Scalars['String']>;
  nominatorStash_gt?: Maybe<Scalars['String']>;
  nominatorStash_gte?: Maybe<Scalars['String']>;
  nominatorStash_contains?: Maybe<Scalars['String']>;
  nominatorStash_not_contains?: Maybe<Scalars['String']>;
  nominatorStash_starts_with?: Maybe<Scalars['String']>;
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>;
  nominatorStash_ends_with?: Maybe<Scalars['String']>;
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>;
  stakedAmount?: Maybe<Scalars['String']>;
  stakedAmount_not?: Maybe<Scalars['String']>;
  stakedAmount_in?: Maybe<Array<Scalars['String']>>;
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>;
  stakedAmount_lt?: Maybe<Scalars['String']>;
  stakedAmount_lte?: Maybe<Scalars['String']>;
  stakedAmount_gt?: Maybe<Scalars['String']>;
  stakedAmount_gte?: Maybe<Scalars['String']>;
  stakedAmount_contains?: Maybe<Scalars['String']>;
  stakedAmount_not_contains?: Maybe<Scalars['String']>;
  stakedAmount_starts_with?: Maybe<Scalars['String']>;
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>;
  stakedAmount_ends_with?: Maybe<Scalars['String']>;
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

export type OfflineValidatorWhereInput = {
  AND?: Maybe<Array<OfflineValidatorWhereInput>>;
  OR?: Maybe<Array<OfflineValidatorWhereInput>>;
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  validatorId?: Maybe<Scalars['String']>;
  validatorId_not?: Maybe<Scalars['String']>;
  validatorId_in?: Maybe<Array<Scalars['String']>>;
  validatorId_not_in?: Maybe<Array<Scalars['String']>>;
  validatorId_lt?: Maybe<Scalars['String']>;
  validatorId_lte?: Maybe<Scalars['String']>;
  validatorId_gt?: Maybe<Scalars['String']>;
  validatorId_gte?: Maybe<Scalars['String']>;
  validatorId_contains?: Maybe<Scalars['String']>;
  validatorId_not_contains?: Maybe<Scalars['String']>;
  validatorId_starts_with?: Maybe<Scalars['String']>;
  validatorId_not_starts_with?: Maybe<Scalars['String']>;
  validatorId_ends_with?: Maybe<Scalars['String']>;
  validatorId_not_ends_with?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  total_not?: Maybe<Scalars['String']>;
  total_in?: Maybe<Array<Scalars['String']>>;
  total_not_in?: Maybe<Array<Scalars['String']>>;
  total_lt?: Maybe<Scalars['String']>;
  total_lte?: Maybe<Scalars['String']>;
  total_gt?: Maybe<Scalars['String']>;
  total_gte?: Maybe<Scalars['String']>;
  total_contains?: Maybe<Scalars['String']>;
  total_not_contains?: Maybe<Scalars['String']>;
  total_starts_with?: Maybe<Scalars['String']>;
  total_not_starts_with?: Maybe<Scalars['String']>;
  total_ends_with?: Maybe<Scalars['String']>;
  total_not_ends_with?: Maybe<Scalars['String']>;
  own?: Maybe<Scalars['String']>;
  own_not?: Maybe<Scalars['String']>;
  own_in?: Maybe<Array<Scalars['String']>>;
  own_not_in?: Maybe<Array<Scalars['String']>>;
  own_lt?: Maybe<Scalars['String']>;
  own_lte?: Maybe<Scalars['String']>;
  own_gt?: Maybe<Scalars['String']>;
  own_gte?: Maybe<Scalars['String']>;
  own_contains?: Maybe<Scalars['String']>;
  own_not_contains?: Maybe<Scalars['String']>;
  own_starts_with?: Maybe<Scalars['String']>;
  own_not_starts_with?: Maybe<Scalars['String']>;
  own_ends_with?: Maybe<Scalars['String']>;
  own_not_ends_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
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

export enum PreimageArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type PreimageArgumentWhereInput = {
  AND?: Maybe<Array<PreimageArgumentWhereInput>>;
  OR?: Maybe<Array<PreimageArgumentWhereInput>>;
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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

export type PreimageStatus = Node & {
   __typename?: 'PreimageStatus';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  preimage: Preimage;
  status: Scalars['String'];
};

export enum PreimageStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type PreimageStatusWhereInput = {
  AND?: Maybe<Array<PreimageStatusWhereInput>>;
  OR?: Maybe<Array<PreimageStatusWhereInput>>;
  NOT?: Maybe<Array<PreimageStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PreimageWhereInput = {
  AND?: Maybe<Array<PreimageWhereInput>>;
  OR?: Maybe<Array<PreimageWhereInput>>;
  NOT?: Maybe<Array<PreimageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  depositAmount_not?: Maybe<Scalars['String']>;
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_lt?: Maybe<Scalars['String']>;
  depositAmount_lte?: Maybe<Scalars['String']>;
  depositAmount_gt?: Maybe<Scalars['String']>;
  depositAmount_gte?: Maybe<Scalars['String']>;
  depositAmount_contains?: Maybe<Scalars['String']>;
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  hash_not?: Maybe<Scalars['String']>;
  hash_in?: Maybe<Array<Scalars['String']>>;
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  hash_lt?: Maybe<Scalars['String']>;
  hash_lte?: Maybe<Scalars['String']>;
  hash_gt?: Maybe<Scalars['String']>;
  hash_gte?: Maybe<Scalars['String']>;
  hash_contains?: Maybe<Scalars['String']>;
  hash_not_contains?: Maybe<Scalars['String']>;
  hash_starts_with?: Maybe<Scalars['String']>;
  hash_not_starts_with?: Maybe<Scalars['String']>;
  hash_ends_with?: Maybe<Scalars['String']>;
  hash_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescription_not?: Maybe<Scalars['String']>;
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_lt?: Maybe<Scalars['String']>;
  metaDescription_lte?: Maybe<Scalars['String']>;
  metaDescription_gt?: Maybe<Scalars['String']>;
  metaDescription_gte?: Maybe<Scalars['String']>;
  metaDescription_contains?: Maybe<Scalars['String']>;
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  method_not?: Maybe<Scalars['String']>;
  method_in?: Maybe<Array<Scalars['String']>>;
  method_not_in?: Maybe<Array<Scalars['String']>>;
  method_lt?: Maybe<Scalars['String']>;
  method_lte?: Maybe<Scalars['String']>;
  method_gt?: Maybe<Scalars['String']>;
  method_gte?: Maybe<Scalars['String']>;
  method_contains?: Maybe<Scalars['String']>;
  method_not_contains?: Maybe<Scalars['String']>;
  method_starts_with?: Maybe<Scalars['String']>;
  method_not_starts_with?: Maybe<Scalars['String']>;
  method_ends_with?: Maybe<Scalars['String']>;
  method_not_ends_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  section_not?: Maybe<Scalars['String']>;
  section_in?: Maybe<Array<Scalars['String']>>;
  section_not_in?: Maybe<Array<Scalars['String']>>;
  section_lt?: Maybe<Scalars['String']>;
  section_lte?: Maybe<Scalars['String']>;
  section_gt?: Maybe<Scalars['String']>;
  section_gte?: Maybe<Scalars['String']>;
  section_contains?: Maybe<Scalars['String']>;
  section_not_contains?: Maybe<Scalars['String']>;
  section_starts_with?: Maybe<Scalars['String']>;
  section_not_starts_with?: Maybe<Scalars['String']>;
  section_ends_with?: Maybe<Scalars['String']>;
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
};

export enum ProposalStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ProposalStatusWhereInput = {
  AND?: Maybe<Array<ProposalStatusWhereInput>>;
  OR?: Maybe<Array<ProposalStatusWhereInput>>;
  NOT?: Maybe<Array<ProposalStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  proposal?: Maybe<ProposalWhereInput>;
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProposalSubscriptionPayload = {
   __typename?: 'ProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Proposal>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ProposalPreviousValues>;
};

export type ProposalSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ProposalWhereInput>;
};

export type ProposalWhereInput = {
  AND?: Maybe<Array<ProposalWhereInput>>;
  OR?: Maybe<Array<ProposalWhereInput>>;
  NOT?: Maybe<Array<ProposalWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  depositAmount_not?: Maybe<Scalars['String']>;
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_lt?: Maybe<Scalars['String']>;
  depositAmount_lte?: Maybe<Scalars['String']>;
  depositAmount_gt?: Maybe<Scalars['String']>;
  depositAmount_gte?: Maybe<Scalars['String']>;
  depositAmount_contains?: Maybe<Scalars['String']>;
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  proposalId_not?: Maybe<Scalars['Int']>;
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  proposalId_lt?: Maybe<Scalars['Int']>;
  proposalId_lte?: Maybe<Scalars['Int']>;
  proposalId_gt?: Maybe<Scalars['Int']>;
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
  blockNumbers: Array<Maybe<BlockNumber>>;
  eras: Array<Maybe<Era>>;
  heartBeats: Array<Maybe<HeartBeat>>;
  nominations: Array<Maybe<Nomination>>;
  offlineValidators: Array<Maybe<OfflineValidator>>;
  rewards: Array<Maybe<Reward>>;
  sessions: Array<Maybe<Session>>;
  slashings: Array<Maybe<Slashing>>;
  stakes: Array<Maybe<Stake>>;
  totalIssuances: Array<Maybe<TotalIssuance>>;
  validators: Array<Maybe<Validator>>;
  blockNumber?: Maybe<BlockNumber>;
  era?: Maybe<Era>;
  nomination?: Maybe<Nomination>;
  reward?: Maybe<Reward>;
  session?: Maybe<Session>;
  slashing?: Maybe<Slashing>;
  stake?: Maybe<Stake>;
  totalIssuance?: Maybe<TotalIssuance>;
  validator?: Maybe<Validator>;
  council?: Maybe<Council>;
  councils: Array<Maybe<Council>>;
  councilMember?: Maybe<CouncilMember>;
  councilMembers: Array<Maybe<CouncilMember>>;
  motion?: Maybe<Motion>;
  motions: Array<Maybe<Motion>>;
  motionProposalArgument?: Maybe<MotionProposalArgument>;
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>;
  motionStatus?: Maybe<MotionStatus>;
  motionStatuses: Array<Maybe<MotionStatus>>;
  preimage?: Maybe<Preimage>;
  preimages: Array<Maybe<Preimage>>;
  preimageArgument?: Maybe<PreimageArgument>;
  preimageArguments: Array<Maybe<PreimageArgument>>;
  preimageStatus?: Maybe<PreimageStatus>;
  preimageStatuses: Array<Maybe<PreimageStatus>>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Maybe<Proposal>>;
  proposalStatus?: Maybe<ProposalStatus>;
  proposalStatuses: Array<Maybe<ProposalStatus>>;
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>;
  treasuryStatus?: Maybe<TreasuryStatus>;
  treasuryStatuses: Array<Maybe<TreasuryStatus>>;
  referendum?: Maybe<Referendum>;
  referendums: Array<Maybe<Referendum>>;
  referendumStatus?: Maybe<ReferendumStatus>;
  referendumStatuses: Array<Maybe<ReferendumStatus>>;
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


export type QueryErasArgs = {
  where?: Maybe<EraWhereInput>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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


export type QueryNominationsArgs = {
  where?: Maybe<NominationWhereInput>;
  orderBy?: Maybe<NominationOrderByInput>;
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


export type QueryRewardsArgs = {
  where?: Maybe<RewardWhereInput>;
  orderBy?: Maybe<RewardOrderByInput>;
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


export type QuerySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>;
  orderBy?: Maybe<SlashingOrderByInput>;
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


export type QueryTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
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


export type QueryBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


export type QueryEraArgs = {
  where: EraWhereUniqueInput;
};


export type QueryNominationArgs = {
  where: NominationWhereUniqueInput;
};


export type QueryRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySlashingArgs = {
  where: SlashingWhereUniqueInput;
};


export type QueryStakeArgs = {
  where: StakeWhereUniqueInput;
};


export type QueryTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


export type QueryValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


export type QueryCouncilArgs = {
  where: CouncilWhereUniqueInput;
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


export type QueryCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
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


export type QueryMotionArgs = {
  where: MotionWhereUniqueInput;
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


export type QueryMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
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


export type QueryMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
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


export type QueryPreimageArgs = {
  where: PreimageWhereUniqueInput;
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


export type QueryPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
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


export type QueryPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
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


export type QueryProposalArgs = {
  where: ProposalWhereUniqueInput;
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


export type QueryProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
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


export type QueryTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
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


export type QueryTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
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


export type QueryReferendumArgs = {
  where: ReferendumWhereUniqueInput;
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


export type QueryReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
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
};

export enum ReferendumStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ReferendumStatusWhereInput = {
  AND?: Maybe<Array<ReferendumStatusWhereInput>>;
  OR?: Maybe<Array<ReferendumStatusWhereInput>>;
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  referendum?: Maybe<ReferendumWhereInput>;
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ReferendumSubscriptionPayload = {
   __typename?: 'ReferendumSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Referendum>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ReferendumPreviousValues>;
};

export type ReferendumSubscriptionWhereInput = {
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ReferendumWhereInput>;
};

export type ReferendumWhereInput = {
  AND?: Maybe<Array<ReferendumWhereInput>>;
  OR?: Maybe<Array<ReferendumWhereInput>>;
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  delay?: Maybe<Scalars['Int']>;
  delay_not?: Maybe<Scalars['Int']>;
  delay_in?: Maybe<Array<Scalars['Int']>>;
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  delay_lt?: Maybe<Scalars['Int']>;
  delay_lte?: Maybe<Scalars['Int']>;
  delay_gt?: Maybe<Scalars['Int']>;
  delay_gte?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  end_not?: Maybe<Scalars['Int']>;
  end_in?: Maybe<Array<Scalars['Int']>>;
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  end_lt?: Maybe<Scalars['Int']>;
  end_lte?: Maybe<Scalars['Int']>;
  end_gt?: Maybe<Scalars['Int']>;
  end_gte?: Maybe<Scalars['Int']>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  referendumId_not?: Maybe<Scalars['Int']>;
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumId_lt?: Maybe<Scalars['Int']>;
  referendumId_lte?: Maybe<Scalars['Int']>;
  referendumId_gt?: Maybe<Scalars['Int']>;
  referendumId_gte?: Maybe<Scalars['Int']>;
  voteThreshold?: Maybe<Scalars['String']>;
  voteThreshold_not?: Maybe<Scalars['String']>;
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  voteThreshold_lt?: Maybe<Scalars['String']>;
  voteThreshold_lte?: Maybe<Scalars['String']>;
  voteThreshold_gt?: Maybe<Scalars['String']>;
  voteThreshold_gte?: Maybe<Scalars['String']>;
  voteThreshold_contains?: Maybe<Scalars['String']>;
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
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

export enum RewardOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TreasuryRewardAsc = 'treasuryReward_ASC',
  TreasuryRewardDesc = 'treasuryReward_DESC',
  ValidatorRewardAsc = 'validatorReward_ASC',
  ValidatorRewardDesc = 'validatorReward_DESC'
}

export type RewardWhereInput = {
  AND?: Maybe<Array<RewardWhereInput>>;
  OR?: Maybe<Array<RewardWhereInput>>;
  NOT?: Maybe<Array<RewardWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  treasuryReward?: Maybe<Scalars['String']>;
  treasuryReward_not?: Maybe<Scalars['String']>;
  treasuryReward_in?: Maybe<Array<Scalars['String']>>;
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>;
  treasuryReward_lt?: Maybe<Scalars['String']>;
  treasuryReward_lte?: Maybe<Scalars['String']>;
  treasuryReward_gt?: Maybe<Scalars['String']>;
  treasuryReward_gte?: Maybe<Scalars['String']>;
  treasuryReward_contains?: Maybe<Scalars['String']>;
  treasuryReward_not_contains?: Maybe<Scalars['String']>;
  treasuryReward_starts_with?: Maybe<Scalars['String']>;
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>;
  treasuryReward_ends_with?: Maybe<Scalars['String']>;
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
  validatorReward_not?: Maybe<Scalars['String']>;
  validatorReward_in?: Maybe<Array<Scalars['String']>>;
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>;
  validatorReward_lt?: Maybe<Scalars['String']>;
  validatorReward_lte?: Maybe<Scalars['String']>;
  validatorReward_gt?: Maybe<Scalars['String']>;
  validatorReward_gte?: Maybe<Scalars['String']>;
  validatorReward_contains?: Maybe<Scalars['String']>;
  validatorReward_not_contains?: Maybe<Scalars['String']>;
  validatorReward_starts_with?: Maybe<Scalars['String']>;
  validatorReward_not_starts_with?: Maybe<Scalars['String']>;
  validatorReward_ends_with?: Maybe<Scalars['String']>;
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

export enum SessionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  index_not?: Maybe<Scalars['Int']>;
  index_in?: Maybe<Array<Scalars['Int']>>;
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  index_lt?: Maybe<Scalars['Int']>;
  index_lte?: Maybe<Scalars['Int']>;
  index_gt?: Maybe<Scalars['Int']>;
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

export enum SlashingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type SlashingWhereInput = {
  AND?: Maybe<Array<SlashingWhereInput>>;
  OR?: Maybe<Array<SlashingWhereInput>>;
  NOT?: Maybe<Array<SlashingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
  who_not?: Maybe<Scalars['String']>;
  who_in?: Maybe<Array<Scalars['String']>>;
  who_not_in?: Maybe<Array<Scalars['String']>>;
  who_lt?: Maybe<Scalars['String']>;
  who_lte?: Maybe<Scalars['String']>;
  who_gt?: Maybe<Scalars['String']>;
  who_gte?: Maybe<Scalars['String']>;
  who_contains?: Maybe<Scalars['String']>;
  who_not_contains?: Maybe<Scalars['String']>;
  who_starts_with?: Maybe<Scalars['String']>;
  who_not_starts_with?: Maybe<Scalars['String']>;
  who_ends_with?: Maybe<Scalars['String']>;
  who_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  amount_not?: Maybe<Scalars['String']>;
  amount_in?: Maybe<Array<Scalars['String']>>;
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  amount_lt?: Maybe<Scalars['String']>;
  amount_lte?: Maybe<Scalars['String']>;
  amount_gt?: Maybe<Scalars['String']>;
  amount_gte?: Maybe<Scalars['String']>;
  amount_contains?: Maybe<Scalars['String']>;
  amount_not_contains?: Maybe<Scalars['String']>;
  amount_starts_with?: Maybe<Scalars['String']>;
  amount_not_starts_with?: Maybe<Scalars['String']>;
  amount_ends_with?: Maybe<Scalars['String']>;
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

export enum StakeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalStakeAsc = 'totalStake_ASC',
  TotalStakeDesc = 'totalStake_DESC'
}

export type StakeWhereInput = {
  AND?: Maybe<Array<StakeWhereInput>>;
  OR?: Maybe<Array<StakeWhereInput>>;
  NOT?: Maybe<Array<StakeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  totalStake?: Maybe<Scalars['String']>;
  totalStake_not?: Maybe<Scalars['String']>;
  totalStake_in?: Maybe<Array<Scalars['String']>>;
  totalStake_not_in?: Maybe<Array<Scalars['String']>>;
  totalStake_lt?: Maybe<Scalars['String']>;
  totalStake_lte?: Maybe<Scalars['String']>;
  totalStake_gt?: Maybe<Scalars['String']>;
  totalStake_gte?: Maybe<Scalars['String']>;
  totalStake_contains?: Maybe<Scalars['String']>;
  totalStake_not_contains?: Maybe<Scalars['String']>;
  totalStake_starts_with?: Maybe<Scalars['String']>;
  totalStake_not_starts_with?: Maybe<Scalars['String']>;
  totalStake_ends_with?: Maybe<Scalars['String']>;
  totalStake_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  subscribeBlockNumbers?: Maybe<BlockNumber>;
  subscribeEras?: Maybe<Era>;
  subscribeHeartBeats?: Maybe<HeartBeat>;
  subscribeNominations?: Maybe<Nomination>;
  subscribeOfflineValidators?: Maybe<OfflineValidator>;
  subscribeRewards?: Maybe<Reward>;
  subscribeSessions?: Maybe<Session>;
  subscribeSlashings?: Maybe<Slashing>;
  subscribeStakes?: Maybe<Stake>;
  subscribeValidators?: Maybe<Validator>;
  proposal?: Maybe<ProposalSubscriptionPayload>;
  motion?: Maybe<MotionSubscriptionPayload>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalSubscriptionPayload>;
  referendum?: Maybe<ReferendumSubscriptionPayload>;
};


export type SubscriptionProposalArgs = {
  where?: Maybe<ProposalSubscriptionWhereInput>;
};


export type SubscriptionMotionArgs = {
  where?: Maybe<MotionSubscriptionWhereInput>;
};


export type SubscriptionTreasurySpendProposalArgs = {
  where?: Maybe<TreasurySpendProposalSubscriptionWhereInput>;
};


export type SubscriptionReferendumArgs = {
  where?: Maybe<ReferendumSubscriptionWhereInput>;
};

export type TotalIssuance = Node & {
   __typename?: 'TotalIssuance';
  id: Scalars['ID'];
  blockNumber: BlockNumber;
  amount: Scalars['String'];
};

export enum TotalIssuanceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type TotalIssuanceWhereInput = {
  AND?: Maybe<Array<TotalIssuanceWhereInput>>;
  OR?: Maybe<Array<TotalIssuanceWhereInput>>;
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['String']>;
  amount_not?: Maybe<Scalars['String']>;
  amount_in?: Maybe<Array<Scalars['String']>>;
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  amount_lt?: Maybe<Scalars['String']>;
  amount_lte?: Maybe<Scalars['String']>;
  amount_gt?: Maybe<Scalars['String']>;
  amount_gte?: Maybe<Scalars['String']>;
  amount_contains?: Maybe<Scalars['String']>;
  amount_not_contains?: Maybe<Scalars['String']>;
  amount_starts_with?: Maybe<Scalars['String']>;
  amount_not_starts_with?: Maybe<Scalars['String']>;
  amount_ends_with?: Maybe<Scalars['String']>;
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
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TreasurySpendProposalWhereInput>;
};

export type TreasurySpendProposalWhereInput = {
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  id?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  proposer?: Maybe<Scalars['String']>;
  proposer_not?: Maybe<Scalars['String']>;
  proposer_in?: Maybe<Array<Scalars['String']>>;
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  proposer_lt?: Maybe<Scalars['String']>;
  proposer_lte?: Maybe<Scalars['String']>;
  proposer_gt?: Maybe<Scalars['String']>;
  proposer_gte?: Maybe<Scalars['String']>;
  proposer_contains?: Maybe<Scalars['String']>;
  proposer_not_contains?: Maybe<Scalars['String']>;
  proposer_starts_with?: Maybe<Scalars['String']>;
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  proposer_ends_with?: Maybe<Scalars['String']>;
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  beneficiary_not?: Maybe<Scalars['String']>;
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  beneficiary_lt?: Maybe<Scalars['String']>;
  beneficiary_lte?: Maybe<Scalars['String']>;
  beneficiary_gt?: Maybe<Scalars['String']>;
  beneficiary_gte?: Maybe<Scalars['String']>;
  beneficiary_contains?: Maybe<Scalars['String']>;
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bond_not?: Maybe<Scalars['String']>;
  bond_in?: Maybe<Array<Scalars['String']>>;
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  bond_lt?: Maybe<Scalars['String']>;
  bond_lte?: Maybe<Scalars['String']>;
  bond_gt?: Maybe<Scalars['String']>;
  bond_gte?: Maybe<Scalars['String']>;
  bond_contains?: Maybe<Scalars['String']>;
  bond_not_contains?: Maybe<Scalars['String']>;
  bond_starts_with?: Maybe<Scalars['String']>;
  bond_not_starts_with?: Maybe<Scalars['String']>;
  bond_ends_with?: Maybe<Scalars['String']>;
  bond_not_ends_with?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
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
};

export enum TreasuryStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type TreasuryStatusWhereInput = {
  AND?: Maybe<Array<TreasuryStatusWhereInput>>;
  OR?: Maybe<Array<TreasuryStatusWhereInput>>;
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Validator = Node & {
   __typename?: 'Validator';
  id: Scalars['ID'];
  session: Session;
  controller: Scalars['String'];
  stash: Scalars['String'];
  preferences: Scalars['String'];
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

export type ValidatorWhereInput = {
  AND?: Maybe<Array<ValidatorWhereInput>>;
  OR?: Maybe<Array<ValidatorWhereInput>>;
  NOT?: Maybe<Array<ValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  controller?: Maybe<Scalars['String']>;
  controller_not?: Maybe<Scalars['String']>;
  controller_in?: Maybe<Array<Scalars['String']>>;
  controller_not_in?: Maybe<Array<Scalars['String']>>;
  controller_lt?: Maybe<Scalars['String']>;
  controller_lte?: Maybe<Scalars['String']>;
  controller_gt?: Maybe<Scalars['String']>;
  controller_gte?: Maybe<Scalars['String']>;
  controller_contains?: Maybe<Scalars['String']>;
  controller_not_contains?: Maybe<Scalars['String']>;
  controller_starts_with?: Maybe<Scalars['String']>;
  controller_not_starts_with?: Maybe<Scalars['String']>;
  controller_ends_with?: Maybe<Scalars['String']>;
  controller_not_ends_with?: Maybe<Scalars['String']>;
  stash?: Maybe<Scalars['String']>;
  stash_not?: Maybe<Scalars['String']>;
  stash_in?: Maybe<Array<Scalars['String']>>;
  stash_not_in?: Maybe<Array<Scalars['String']>>;
  stash_lt?: Maybe<Scalars['String']>;
  stash_lte?: Maybe<Scalars['String']>;
  stash_gt?: Maybe<Scalars['String']>;
  stash_gte?: Maybe<Scalars['String']>;
  stash_contains?: Maybe<Scalars['String']>;
  stash_not_contains?: Maybe<Scalars['String']>;
  stash_starts_with?: Maybe<Scalars['String']>;
  stash_not_starts_with?: Maybe<Scalars['String']>;
  stash_ends_with?: Maybe<Scalars['String']>;
  stash_not_ends_with?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['String']>;
  preferences_not?: Maybe<Scalars['String']>;
  preferences_in?: Maybe<Array<Scalars['String']>>;
  preferences_not_in?: Maybe<Array<Scalars['String']>>;
  preferences_lt?: Maybe<Scalars['String']>;
  preferences_lte?: Maybe<Scalars['String']>;
  preferences_gt?: Maybe<Scalars['String']>;
  preferences_gte?: Maybe<Scalars['String']>;
  preferences_contains?: Maybe<Scalars['String']>;
  preferences_not_contains?: Maybe<Scalars['String']>;
  preferences_starts_with?: Maybe<Scalars['String']>;
  preferences_not_starts_with?: Maybe<Scalars['String']>;
  preferences_ends_with?: Maybe<Scalars['String']>;
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
    }
  };
}