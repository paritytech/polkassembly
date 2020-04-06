import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  timestamptz: any,
  uuid: any,
  timestamp: any,
  bpchar: any,
  Json: any,
  Long: any,
  Upload: any,
};

export type Address = {
   __typename?: 'Address',
  address?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  public_key?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
};

export type AddressLinkType = {
   __typename?: 'AddressLinkType',
  address_id?: Maybe<Scalars['Int']>,
  message?: Maybe<Scalars['String']>,
  sign_message?: Maybe<Scalars['String']>,
};

export type AddressLoginType = {
   __typename?: 'AddressLoginType',
  message?: Maybe<Scalars['String']>,
  signMessage?: Maybe<Scalars['String']>,
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
  index: Scalars['Int'],
  startFrom: Scalars['Int'],
};

export type BlockIndexConnection = {
   __typename?: 'BlockIndexConnection',
  aggregate: AggregateBlockIndex,
  edges: Array<Maybe<BlockIndexEdge>>,
  pageInfo: PageInfo,
};

export type BlockIndexCreateInput = {
  id?: Maybe<Scalars['ID']>,
  identifier: Scalars['String'],
  index: Scalars['Int'],
  startFrom: Scalars['Int'],
};

export type BlockIndexEdge = {
   __typename?: 'BlockIndexEdge',
  cursor: Scalars['String'],
  node: BlockIndex,
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
   __typename?: 'BlockIndexPreviousValues',
  id: Scalars['ID'],
  identifier: Scalars['String'],
  index: Scalars['Int'],
  startFrom: Scalars['Int'],
};

export type BlockIndexSubscriptionPayload = {
   __typename?: 'BlockIndexSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<BlockIndex>,
  previousValues?: Maybe<BlockIndexPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type BlockIndexSubscriptionWhereInput = {
  AND?: Maybe<Array<BlockIndexSubscriptionWhereInput>>,
  NOT?: Maybe<Array<BlockIndexSubscriptionWhereInput>>,
  OR?: Maybe<Array<BlockIndexSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<BlockIndexWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type BlockIndexUpdateInput = {
  identifier?: Maybe<Scalars['String']>,
  index?: Maybe<Scalars['Int']>,
  startFrom?: Maybe<Scalars['Int']>,
};

export type BlockIndexUpdateManyMutationInput = {
  identifier?: Maybe<Scalars['String']>,
  index?: Maybe<Scalars['Int']>,
  startFrom?: Maybe<Scalars['Int']>,
};

export type BlockIndexWhereInput = {
  AND?: Maybe<Array<BlockIndexWhereInput>>,
  NOT?: Maybe<Array<BlockIndexWhereInput>>,
  OR?: Maybe<Array<BlockIndexWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  identifier?: Maybe<Scalars['String']>,
  identifier_contains?: Maybe<Scalars['String']>,
  identifier_ends_with?: Maybe<Scalars['String']>,
  identifier_gt?: Maybe<Scalars['String']>,
  identifier_gte?: Maybe<Scalars['String']>,
  identifier_in?: Maybe<Array<Scalars['String']>>,
  identifier_lt?: Maybe<Scalars['String']>,
  identifier_lte?: Maybe<Scalars['String']>,
  identifier_not?: Maybe<Scalars['String']>,
  identifier_not_contains?: Maybe<Scalars['String']>,
  identifier_not_ends_with?: Maybe<Scalars['String']>,
  identifier_not_in?: Maybe<Array<Scalars['String']>>,
  identifier_not_starts_with?: Maybe<Scalars['String']>,
  identifier_starts_with?: Maybe<Scalars['String']>,
  index?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  startFrom?: Maybe<Scalars['Int']>,
  startFrom_gt?: Maybe<Scalars['Int']>,
  startFrom_gte?: Maybe<Scalars['Int']>,
  startFrom_in?: Maybe<Array<Scalars['Int']>>,
  startFrom_lt?: Maybe<Scalars['Int']>,
  startFrom_lte?: Maybe<Scalars['Int']>,
  startFrom_not?: Maybe<Scalars['Int']>,
  startFrom_not_in?: Maybe<Array<Scalars['Int']>>,
};

export type BlockIndexWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  identifier?: Maybe<Scalars['String']>,
};

export type BlockNumber = Node & {
   __typename?: 'BlockNumber',
  authoredBy: Scalars['String'],
  hash: Scalars['String'],
  id: Scalars['ID'],
  number: Scalars['Int'],
  startDateTime: Scalars['DateTime'],
};

export type BlockNumberConnection = {
   __typename?: 'BlockNumberConnection',
  aggregate: AggregateBlockNumber,
  edges: Array<Maybe<BlockNumberEdge>>,
  pageInfo: PageInfo,
};

export type BlockNumberCreateInput = {
  authoredBy: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  number: Scalars['Int'],
  startDateTime: Scalars['DateTime'],
};

export type BlockNumberCreateOneInput = {
  connect?: Maybe<BlockNumberWhereUniqueInput>,
  create?: Maybe<BlockNumberCreateInput>,
};

export type BlockNumberEdge = {
   __typename?: 'BlockNumberEdge',
  cursor: Scalars['String'],
  node: BlockNumber,
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
   __typename?: 'BlockNumberPreviousValues',
  authoredBy: Scalars['String'],
  hash: Scalars['String'],
  id: Scalars['ID'],
  number: Scalars['Int'],
  startDateTime: Scalars['DateTime'],
};

export type BlockNumberSubscriptionPayload = {
   __typename?: 'BlockNumberSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<BlockNumber>,
  previousValues?: Maybe<BlockNumberPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type BlockNumberSubscriptionWhereInput = {
  AND?: Maybe<Array<BlockNumberSubscriptionWhereInput>>,
  NOT?: Maybe<Array<BlockNumberSubscriptionWhereInput>>,
  OR?: Maybe<Array<BlockNumberSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<BlockNumberWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type BlockNumberUpdateDataInput = {
  authoredBy?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
};

export type BlockNumberUpdateInput = {
  authoredBy?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
};

export type BlockNumberUpdateManyMutationInput = {
  authoredBy?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  startDateTime?: Maybe<Scalars['DateTime']>,
};

export type BlockNumberUpdateOneRequiredInput = {
  connect?: Maybe<BlockNumberWhereUniqueInput>,
  create?: Maybe<BlockNumberCreateInput>,
  update?: Maybe<BlockNumberUpdateDataInput>,
  upsert?: Maybe<BlockNumberUpsertNestedInput>,
};

export type BlockNumberUpsertNestedInput = {
  create: BlockNumberCreateInput,
  update: BlockNumberUpdateDataInput,
};

export type BlockNumberWhereInput = {
  AND?: Maybe<Array<BlockNumberWhereInput>>,
  NOT?: Maybe<Array<BlockNumberWhereInput>>,
  OR?: Maybe<Array<BlockNumberWhereInput>>,
  authoredBy?: Maybe<Scalars['String']>,
  authoredBy_contains?: Maybe<Scalars['String']>,
  authoredBy_ends_with?: Maybe<Scalars['String']>,
  authoredBy_gt?: Maybe<Scalars['String']>,
  authoredBy_gte?: Maybe<Scalars['String']>,
  authoredBy_in?: Maybe<Array<Scalars['String']>>,
  authoredBy_lt?: Maybe<Scalars['String']>,
  authoredBy_lte?: Maybe<Scalars['String']>,
  authoredBy_not?: Maybe<Scalars['String']>,
  authoredBy_not_contains?: Maybe<Scalars['String']>,
  authoredBy_not_ends_with?: Maybe<Scalars['String']>,
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>,
  authoredBy_not_starts_with?: Maybe<Scalars['String']>,
  authoredBy_starts_with?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  hash_contains?: Maybe<Scalars['String']>,
  hash_ends_with?: Maybe<Scalars['String']>,
  hash_gt?: Maybe<Scalars['String']>,
  hash_gte?: Maybe<Scalars['String']>,
  hash_in?: Maybe<Array<Scalars['String']>>,
  hash_lt?: Maybe<Scalars['String']>,
  hash_lte?: Maybe<Scalars['String']>,
  hash_not?: Maybe<Scalars['String']>,
  hash_not_contains?: Maybe<Scalars['String']>,
  hash_not_ends_with?: Maybe<Scalars['String']>,
  hash_not_in?: Maybe<Array<Scalars['String']>>,
  hash_not_starts_with?: Maybe<Scalars['String']>,
  hash_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Int']>,
  number_gt?: Maybe<Scalars['Int']>,
  number_gte?: Maybe<Scalars['Int']>,
  number_in?: Maybe<Array<Scalars['Int']>>,
  number_lt?: Maybe<Scalars['Int']>,
  number_lte?: Maybe<Scalars['Int']>,
  number_not?: Maybe<Scalars['Int']>,
  number_not_in?: Maybe<Array<Scalars['Int']>>,
  startDateTime?: Maybe<Scalars['DateTime']>,
  startDateTime_gt?: Maybe<Scalars['DateTime']>,
  startDateTime_gte?: Maybe<Scalars['DateTime']>,
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>,
  startDateTime_lt?: Maybe<Scalars['DateTime']>,
  startDateTime_lte?: Maybe<Scalars['DateTime']>,
  startDateTime_not?: Maybe<Scalars['DateTime']>,
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type BlockNumberWhereUniqueInput = {
  hash?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Int']>,
};


export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>,
  _gt?: Maybe<Scalars['bpchar']>,
  _gte?: Maybe<Scalars['bpchar']>,
  _in?: Maybe<Array<Scalars['bpchar']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['bpchar']>,
  _lte?: Maybe<Scalars['bpchar']>,
  _neq?: Maybe<Scalars['bpchar']>,
  _nin?: Maybe<Array<Scalars['bpchar']>>,
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChangeResponse = {
   __typename?: 'ChangeResponse',
  message?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

export type Comment_Reactions = {
   __typename?: 'comment_reactions',
  comment: Comments,
  comment_id: Scalars['uuid'],
  created_at: Scalars['timestamp'],
  id: Scalars['Int'],
  reacting_user?: Maybe<User>,
  reaction: Scalars['bpchar'],
  updated_at: Scalars['timestamp'],
  user_id: Scalars['Int'],
};

export type Comment_Reactions_Aggregate = {
   __typename?: 'comment_reactions_aggregate',
  aggregate?: Maybe<Comment_Reactions_Aggregate_Fields>,
  nodes: Array<Comment_Reactions>,
};

export type Comment_Reactions_Aggregate_Fields = {
   __typename?: 'comment_reactions_aggregate_fields',
  avg?: Maybe<Comment_Reactions_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Comment_Reactions_Max_Fields>,
  min?: Maybe<Comment_Reactions_Min_Fields>,
  stddev?: Maybe<Comment_Reactions_Stddev_Fields>,
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Fields>,
  sum?: Maybe<Comment_Reactions_Sum_Fields>,
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Fields>,
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Fields>,
  variance?: Maybe<Comment_Reactions_Variance_Fields>,
};


export type Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Reactions_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Comment_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Comment_Reactions_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Comment_Reactions_Max_Order_By>,
  min?: Maybe<Comment_Reactions_Min_Order_By>,
  stddev?: Maybe<Comment_Reactions_Stddev_Order_By>,
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Order_By>,
  sum?: Maybe<Comment_Reactions_Sum_Order_By>,
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Order_By>,
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Order_By>,
  variance?: Maybe<Comment_Reactions_Variance_Order_By>,
};

export type Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reactions_Insert_Input>,
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>,
};

export type Comment_Reactions_Avg_Fields = {
   __typename?: 'comment_reactions_avg_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Reactions_Bool_Exp>>>,
  _not?: Maybe<Comment_Reactions_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Comment_Reactions_Bool_Exp>>>,
  comment?: Maybe<Comments_Bool_Exp>,
  comment_id?: Maybe<Uuid_Comparison_Exp>,
  created_at?: Maybe<Timestamp_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  reaction?: Maybe<Bpchar_Comparison_Exp>,
  updated_at?: Maybe<Timestamp_Comparison_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

export enum Comment_Reactions_Constraint {
  CommentReactionsPkey = 'comment_reactions_pkey'
}

export type Comment_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Comment_Reactions_Insert_Input = {
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>,
  comment_id?: Maybe<Scalars['uuid']>,
  created_at?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  reaction?: Maybe<Scalars['bpchar']>,
  updated_at?: Maybe<Scalars['timestamp']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Comment_Reactions_Max_Fields = {
   __typename?: 'comment_reactions_max_fields',
  id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Comment_Reactions_Max_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Min_Fields = {
   __typename?: 'comment_reactions_min_fields',
  id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Comment_Reactions_Min_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Mutation_Response = {
   __typename?: 'comment_reactions_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Comment_Reactions>,
};

export type Comment_Reactions_Obj_Rel_Insert_Input = {
  data: Comment_Reactions_Insert_Input,
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>,
};

export type Comment_Reactions_On_Conflict = {
  constraint: Comment_Reactions_Constraint,
  update_columns: Array<Comment_Reactions_Update_Column>,
  where?: Maybe<Comment_Reactions_Bool_Exp>,
};

export type Comment_Reactions_Order_By = {
  comment?: Maybe<Comments_Order_By>,
  comment_id?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  reaction?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Comment_Reactions_Select_Column {
  CommentId = 'comment_id',
  CreatedAt = 'created_at',
  Id = 'id',
  Reaction = 'reaction',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Comment_Reactions_Set_Input = {
  comment_id?: Maybe<Scalars['uuid']>,
  created_at?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  reaction?: Maybe<Scalars['bpchar']>,
  updated_at?: Maybe<Scalars['timestamp']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Comment_Reactions_Stddev_Fields = {
   __typename?: 'comment_reactions_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Stddev_Pop_Fields = {
   __typename?: 'comment_reactions_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Stddev_Samp_Fields = {
   __typename?: 'comment_reactions_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Sum_Fields = {
   __typename?: 'comment_reactions_sum_fields',
  id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Comment_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Comment_Reactions_Update_Column {
  CommentId = 'comment_id',
  CreatedAt = 'created_at',
  Id = 'id',
  Reaction = 'reaction',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Comment_Reactions_Var_Pop_Fields = {
   __typename?: 'comment_reactions_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Var_Samp_Fields = {
   __typename?: 'comment_reactions_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comment_Reactions_Variance_Fields = {
   __typename?: 'comment_reactions_variance_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Comment_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Comments = {
   __typename?: 'comments',
  author?: Maybe<User>,
  author_id: Scalars['Int'],
  comment_reactions: Array<Comment_Reactions>,
  comment_reactions_aggregate: Comment_Reactions_Aggregate,
  content: Scalars['String'],
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  post: Posts,
  post_id: Scalars['Int'],
  updated_at: Scalars['timestamptz'],
};


export type CommentsComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>,
  where?: Maybe<Comment_Reactions_Bool_Exp>
};


export type CommentsComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>,
  where?: Maybe<Comment_Reactions_Bool_Exp>
};

export type Comments_Aggregate = {
   __typename?: 'comments_aggregate',
  aggregate?: Maybe<Comments_Aggregate_Fields>,
  nodes: Array<Comments>,
};

export type Comments_Aggregate_Fields = {
   __typename?: 'comments_aggregate_fields',
  avg?: Maybe<Comments_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Comments_Max_Fields>,
  min?: Maybe<Comments_Min_Fields>,
  stddev?: Maybe<Comments_Stddev_Fields>,
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>,
  sum?: Maybe<Comments_Sum_Fields>,
  var_pop?: Maybe<Comments_Var_Pop_Fields>,
  var_samp?: Maybe<Comments_Var_Samp_Fields>,
  variance?: Maybe<Comments_Variance_Fields>,
};


export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Comments_Aggregate_Order_By = {
  avg?: Maybe<Comments_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Comments_Max_Order_By>,
  min?: Maybe<Comments_Min_Order_By>,
  stddev?: Maybe<Comments_Stddev_Order_By>,
  stddev_pop?: Maybe<Comments_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Comments_Stddev_Samp_Order_By>,
  sum?: Maybe<Comments_Sum_Order_By>,
  var_pop?: Maybe<Comments_Var_Pop_Order_By>,
  var_samp?: Maybe<Comments_Var_Samp_Order_By>,
  variance?: Maybe<Comments_Variance_Order_By>,
};

export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>,
  on_conflict?: Maybe<Comments_On_Conflict>,
};

export type Comments_Avg_Fields = {
   __typename?: 'comments_avg_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Avg_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>,
  _not?: Maybe<Comments_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>,
  author_id?: Maybe<Int_Comparison_Exp>,
  comment_reactions?: Maybe<Comment_Reactions_Bool_Exp>,
  content?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

export enum Comments_Constraint {
  CommentsPkey = 'comments_pkey'
}

export type Comments_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Comments_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>,
  comment_reactions?: Maybe<Comment_Reactions_Arr_Rel_Insert_Input>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Comments_Max_Fields = {
   __typename?: 'comments_max_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Comments_Min_Fields = {
   __typename?: 'comments_min_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Comments_Mutation_Response = {
   __typename?: 'comments_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Comments>,
};

export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input,
  on_conflict?: Maybe<Comments_On_Conflict>,
};

export type Comments_On_Conflict = {
  constraint: Comments_Constraint,
  update_columns: Array<Comments_Update_Column>,
  where?: Maybe<Comments_Bool_Exp>,
};

export type Comments_Order_By = {
  author_id?: Maybe<Order_By>,
  comment_reactions_aggregate?: Maybe<Comment_Reactions_Aggregate_Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export enum Comments_Select_Column {
  AuthorId = 'author_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  PostId = 'post_id',
  UpdatedAt = 'updated_at'
}

export type Comments_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Comments_Stddev_Fields = {
   __typename?: 'comments_stddev_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Stddev_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Comments_Stddev_Pop_Fields = {
   __typename?: 'comments_stddev_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Comments_Stddev_Samp_Fields = {
   __typename?: 'comments_stddev_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Comments_Sum_Fields = {
   __typename?: 'comments_sum_fields',
  author_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Comments_Sum_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export enum Comments_Update_Column {
  AuthorId = 'author_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  PostId = 'post_id',
  UpdatedAt = 'updated_at'
}

export type Comments_Var_Pop_Fields = {
   __typename?: 'comments_var_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Comments_Var_Samp_Fields = {
   __typename?: 'comments_var_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Comments_Variance_Fields = {
   __typename?: 'comments_variance_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Comments_Variance_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Council = Node & {
   __typename?: 'Council',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  members?: Maybe<Array<CouncilMember>>,
};


export type CouncilMembersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CouncilMemberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CouncilMemberWhereInput>
};

export type CouncilConnection = {
   __typename?: 'CouncilConnection',
  aggregate: AggregateCouncil,
  edges: Array<Maybe<CouncilEdge>>,
  pageInfo: PageInfo,
};

export type CouncilCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  members?: Maybe<CouncilMemberCreateManyWithoutCouncilsInput>,
};

export type CouncilCreateManyWithoutMembersInput = {
  connect?: Maybe<Array<CouncilWhereUniqueInput>>,
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>,
};

export type CouncilCreateWithoutMembersInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
};

export type CouncilEdge = {
   __typename?: 'CouncilEdge',
  cursor: Scalars['String'],
  node: Council,
};

export type CouncilMember = Node & {
   __typename?: 'CouncilMember',
  address: Scalars['String'],
  councils?: Maybe<Array<Council>>,
  id: Scalars['ID'],
};


export type CouncilMemberCouncilsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CouncilOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CouncilWhereInput>
};

export type CouncilMemberConnection = {
   __typename?: 'CouncilMemberConnection',
  aggregate: AggregateCouncilMember,
  edges: Array<Maybe<CouncilMemberEdge>>,
  pageInfo: PageInfo,
};

export type CouncilMemberCreateInput = {
  address: Scalars['String'],
  councils?: Maybe<CouncilCreateManyWithoutMembersInput>,
  id?: Maybe<Scalars['ID']>,
};

export type CouncilMemberCreateManyWithoutCouncilsInput = {
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>,
};

export type CouncilMemberCreateWithoutCouncilsInput = {
  address: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
};

export type CouncilMemberEdge = {
   __typename?: 'CouncilMemberEdge',
  cursor: Scalars['String'],
  node: CouncilMember,
};

export enum CouncilMemberOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilMemberPreviousValues = {
   __typename?: 'CouncilMemberPreviousValues',
  address: Scalars['String'],
  id: Scalars['ID'],
};

export type CouncilMemberScalarWhereInput = {
  AND?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  NOT?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  OR?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  address?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
};

export type CouncilMemberSubscriptionPayload = {
   __typename?: 'CouncilMemberSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<CouncilMember>,
  previousValues?: Maybe<CouncilMemberPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type CouncilMemberSubscriptionWhereInput = {
  AND?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>,
  NOT?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>,
  OR?: Maybe<Array<CouncilMemberSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<CouncilMemberWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
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
  connect?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  create?: Maybe<Array<CouncilMemberCreateWithoutCouncilsInput>>,
  delete?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  deleteMany?: Maybe<Array<CouncilMemberScalarWhereInput>>,
  disconnect?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  set?: Maybe<Array<CouncilMemberWhereUniqueInput>>,
  update?: Maybe<Array<CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput>>,
  updateMany?: Maybe<Array<CouncilMemberUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput>>,
};

export type CouncilMemberUpdateManyWithWhereNestedInput = {
  data: CouncilMemberUpdateManyDataInput,
  where: CouncilMemberScalarWhereInput,
};

export type CouncilMemberUpdateWithoutCouncilsDataInput = {
  address?: Maybe<Scalars['String']>,
};

export type CouncilMemberUpdateWithWhereUniqueWithoutCouncilsInput = {
  data: CouncilMemberUpdateWithoutCouncilsDataInput,
  where: CouncilMemberWhereUniqueInput,
};

export type CouncilMemberUpsertWithWhereUniqueWithoutCouncilsInput = {
  create: CouncilMemberCreateWithoutCouncilsInput,
  update: CouncilMemberUpdateWithoutCouncilsDataInput,
  where: CouncilMemberWhereUniqueInput,
};

export type CouncilMemberWhereInput = {
  AND?: Maybe<Array<CouncilMemberWhereInput>>,
  NOT?: Maybe<Array<CouncilMemberWhereInput>>,
  OR?: Maybe<Array<CouncilMemberWhereInput>>,
  address?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  councils_every?: Maybe<CouncilWhereInput>,
  councils_none?: Maybe<CouncilWhereInput>,
  councils_some?: Maybe<CouncilWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
};

export type CouncilMemberWhereUniqueInput = {
  address?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
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
  NOT?: Maybe<Array<CouncilScalarWhereInput>>,
  OR?: Maybe<Array<CouncilScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
};

export type CouncilSubscriptionPayload = {
   __typename?: 'CouncilSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Council>,
  previousValues?: Maybe<CouncilPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type CouncilSubscriptionWhereInput = {
  AND?: Maybe<Array<CouncilSubscriptionWhereInput>>,
  NOT?: Maybe<Array<CouncilSubscriptionWhereInput>>,
  OR?: Maybe<Array<CouncilSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<CouncilWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type CouncilUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  members?: Maybe<CouncilMemberUpdateManyWithoutCouncilsInput>,
};

export type CouncilUpdateManyWithoutMembersInput = {
  connect?: Maybe<Array<CouncilWhereUniqueInput>>,
  create?: Maybe<Array<CouncilCreateWithoutMembersInput>>,
  delete?: Maybe<Array<CouncilWhereUniqueInput>>,
  deleteMany?: Maybe<Array<CouncilScalarWhereInput>>,
  disconnect?: Maybe<Array<CouncilWhereUniqueInput>>,
  set?: Maybe<Array<CouncilWhereUniqueInput>>,
  update?: Maybe<Array<CouncilUpdateWithWhereUniqueWithoutMembersInput>>,
  upsert?: Maybe<Array<CouncilUpsertWithWhereUniqueWithoutMembersInput>>,
};

export type CouncilUpdateWithoutMembersDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
};

export type CouncilUpdateWithWhereUniqueWithoutMembersInput = {
  data: CouncilUpdateWithoutMembersDataInput,
  where: CouncilWhereUniqueInput,
};

export type CouncilUpsertWithWhereUniqueWithoutMembersInput = {
  create: CouncilCreateWithoutMembersInput,
  update: CouncilUpdateWithoutMembersDataInput,
  where: CouncilWhereUniqueInput,
};

export type CouncilWhereInput = {
  AND?: Maybe<Array<CouncilWhereInput>>,
  NOT?: Maybe<Array<CouncilWhereInput>>,
  OR?: Maybe<Array<CouncilWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  members_every?: Maybe<CouncilMemberWhereInput>,
  members_none?: Maybe<CouncilMemberWhereInput>,
  members_some?: Maybe<CouncilMemberWhereInput>,
};

export type CouncilWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Era = Node & {
   __typename?: 'Era',
  eraStartSessionIndex: Session,
  id: Scalars['ID'],
  index: Scalars['Int'],
  individualPoints: Array<Scalars['String']>,
  totalPoints: Scalars['String'],
};

export type EraConnection = {
   __typename?: 'EraConnection',
  aggregate: AggregateEra,
  edges: Array<Maybe<EraEdge>>,
  pageInfo: PageInfo,
};

export type EraCreateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type EraCreateInput = {
  eraStartSessionIndex: SessionCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  index: Scalars['Int'],
  individualPoints?: Maybe<EraCreateindividualPointsInput>,
  totalPoints: Scalars['String'],
};

export type EraEdge = {
   __typename?: 'EraEdge',
  cursor: Scalars['String'],
  node: Era,
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
  individualPoints: Array<Scalars['String']>,
  totalPoints: Scalars['String'],
};

export type EraSubscriptionPayload = {
   __typename?: 'EraSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Era>,
  previousValues?: Maybe<EraPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type EraSubscriptionWhereInput = {
  AND?: Maybe<Array<EraSubscriptionWhereInput>>,
  NOT?: Maybe<Array<EraSubscriptionWhereInput>>,
  OR?: Maybe<Array<EraSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<EraWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type EraUpdateindividualPointsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type EraUpdateInput = {
  eraStartSessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
  index?: Maybe<Scalars['Int']>,
  individualPoints?: Maybe<EraUpdateindividualPointsInput>,
  totalPoints?: Maybe<Scalars['String']>,
};

export type EraUpdateManyMutationInput = {
  index?: Maybe<Scalars['Int']>,
  individualPoints?: Maybe<EraUpdateindividualPointsInput>,
  totalPoints?: Maybe<Scalars['String']>,
};

export type EraWhereInput = {
  AND?: Maybe<Array<EraWhereInput>>,
  NOT?: Maybe<Array<EraWhereInput>>,
  OR?: Maybe<Array<EraWhereInput>>,
  eraStartSessionIndex?: Maybe<SessionWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  totalPoints?: Maybe<Scalars['String']>,
  totalPoints_contains?: Maybe<Scalars['String']>,
  totalPoints_ends_with?: Maybe<Scalars['String']>,
  totalPoints_gt?: Maybe<Scalars['String']>,
  totalPoints_gte?: Maybe<Scalars['String']>,
  totalPoints_in?: Maybe<Array<Scalars['String']>>,
  totalPoints_lt?: Maybe<Scalars['String']>,
  totalPoints_lte?: Maybe<Scalars['String']>,
  totalPoints_not?: Maybe<Scalars['String']>,
  totalPoints_not_contains?: Maybe<Scalars['String']>,
  totalPoints_not_ends_with?: Maybe<Scalars['String']>,
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>,
  totalPoints_not_starts_with?: Maybe<Scalars['String']>,
  totalPoints_starts_with?: Maybe<Scalars['String']>,
};

export type EraWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
};

export type HeartBeat = Node & {
   __typename?: 'HeartBeat',
  authorityId: Scalars['String'],
  id: Scalars['ID'],
  sessionIndex: Session,
};

export type HeartBeatConnection = {
   __typename?: 'HeartBeatConnection',
  aggregate: AggregateHeartBeat,
  edges: Array<Maybe<HeartBeatEdge>>,
  pageInfo: PageInfo,
};

export type HeartBeatCreateInput = {
  authorityId: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  sessionIndex: SessionCreateOneInput,
};

export type HeartBeatEdge = {
   __typename?: 'HeartBeatEdge',
  cursor: Scalars['String'],
  node: HeartBeat,
};

export enum HeartBeatOrderByInput {
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeartBeatPreviousValues = {
   __typename?: 'HeartBeatPreviousValues',
  authorityId: Scalars['String'],
  id: Scalars['ID'],
};

export type HeartBeatSubscriptionPayload = {
   __typename?: 'HeartBeatSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<HeartBeat>,
  previousValues?: Maybe<HeartBeatPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type HeartBeatSubscriptionWhereInput = {
  AND?: Maybe<Array<HeartBeatSubscriptionWhereInput>>,
  NOT?: Maybe<Array<HeartBeatSubscriptionWhereInput>>,
  OR?: Maybe<Array<HeartBeatSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<HeartBeatWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
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
  NOT?: Maybe<Array<HeartBeatWhereInput>>,
  OR?: Maybe<Array<HeartBeatWhereInput>>,
  authorityId?: Maybe<Scalars['String']>,
  authorityId_contains?: Maybe<Scalars['String']>,
  authorityId_ends_with?: Maybe<Scalars['String']>,
  authorityId_gt?: Maybe<Scalars['String']>,
  authorityId_gte?: Maybe<Scalars['String']>,
  authorityId_in?: Maybe<Array<Scalars['String']>>,
  authorityId_lt?: Maybe<Scalars['String']>,
  authorityId_lte?: Maybe<Scalars['String']>,
  authorityId_not?: Maybe<Scalars['String']>,
  authorityId_not_contains?: Maybe<Scalars['String']>,
  authorityId_not_ends_with?: Maybe<Scalars['String']>,
  authorityId_not_in?: Maybe<Array<Scalars['String']>>,
  authorityId_not_starts_with?: Maybe<Scalars['String']>,
  authorityId_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  sessionIndex?: Maybe<SessionWhereInput>,
};

export type HeartBeatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};


export type LoginResponse = {
   __typename?: 'LoginResponse',
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};


export type Message = {
   __typename?: 'Message',
  message?: Maybe<Scalars['String']>,
};

export type Motion = {
   __typename?: 'Motion',
  author: Scalars['String'],
  id: Scalars['Int'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalArguments?: Maybe<Array<MotionProposalArgument>>,
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  motionStatus?: Maybe<Array<MotionStatus>>,
  preimage?: Maybe<Preimage>,
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  treasurySpendProposal?: Maybe<TreasurySpendProposal>,
};


export type MotionMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type MotionMotionStatusArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionStatusWhereInput>
};

export type MotionConnection = {
   __typename?: 'MotionConnection',
  aggregate: AggregateMotion,
  edges: Array<Maybe<MotionEdge>>,
  pageInfo: PageInfo,
};

export type MotionCreateInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateOneWithoutMotionProposalArgumentsInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>,
};

export type MotionCreateOneWithoutMotionStatusInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutMotionStatusInput>,
};

export type MotionCreateOneWithoutPreimageInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutPreimageInput>,
};

export type MotionCreateOneWithoutTreasurySpendProposalInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>,
};

export type MotionCreateWithoutMotionProposalArgumentsInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateWithoutMotionStatusInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateWithoutPreimageInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
  treasurySpendProposal?: Maybe<TreasurySpendProposalCreateOneWithoutMotionInput>,
};

export type MotionCreateWithoutTreasurySpendProposalInput = {
  author: Scalars['String'],
  memberCount: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motionProposalArguments?: Maybe<MotionProposalArgumentCreateManyWithoutMotionInput>,
  motionProposalHash: Scalars['String'],
  motionProposalId: Scalars['Int'],
  motionStatus?: Maybe<MotionStatusCreateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageCreateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section: Scalars['String'],
};

export type MotionEdge = {
   __typename?: 'MotionEdge',
  cursor: Scalars['String'],
  node: Motion,
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
   __typename?: 'MotionPreviousValues',
  author: Scalars['String'],
  id: Scalars['Int'],
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
  motion: Motion,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type MotionProposalArgumentConnection = {
   __typename?: 'MotionProposalArgumentConnection',
  aggregate: AggregateMotionProposalArgument,
  edges: Array<Maybe<MotionProposalArgumentEdge>>,
  pageInfo: PageInfo,
};

export type MotionProposalArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  motion: MotionCreateOneWithoutMotionProposalArgumentsInput,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type MotionProposalArgumentCreateManyWithoutMotionInput = {
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>,
};

export type MotionProposalArgumentCreateWithoutMotionInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type MotionProposalArgumentEdge = {
   __typename?: 'MotionProposalArgumentEdge',
  cursor: Scalars['String'],
  node: MotionProposalArgument,
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
  NOT?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  OR?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentSubscriptionPayload = {
   __typename?: 'MotionProposalArgumentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<MotionProposalArgument>,
  previousValues?: Maybe<MotionProposalArgumentPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type MotionProposalArgumentSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>,
  OR?: Maybe<Array<MotionProposalArgumentSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<MotionProposalArgumentWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type MotionProposalArgumentUpdateInput = {
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionProposalArgumentsInput>,
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
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
  connect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  create?: Maybe<Array<MotionProposalArgumentCreateWithoutMotionInput>>,
  delete?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  deleteMany?: Maybe<Array<MotionProposalArgumentScalarWhereInput>>,
  disconnect?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  set?: Maybe<Array<MotionProposalArgumentWhereUniqueInput>>,
  update?: Maybe<Array<MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput>>,
  updateMany?: Maybe<Array<MotionProposalArgumentUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput>>,
};

export type MotionProposalArgumentUpdateManyWithWhereNestedInput = {
  data: MotionProposalArgumentUpdateManyDataInput,
  where: MotionProposalArgumentScalarWhereInput,
};

export type MotionProposalArgumentUpdateWithoutMotionDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentUpdateWithWhereUniqueWithoutMotionInput = {
  data: MotionProposalArgumentUpdateWithoutMotionDataInput,
  where: MotionProposalArgumentWhereUniqueInput,
};

export type MotionProposalArgumentUpsertWithWhereUniqueWithoutMotionInput = {
  create: MotionProposalArgumentCreateWithoutMotionInput,
  update: MotionProposalArgumentUpdateWithoutMotionDataInput,
  where: MotionProposalArgumentWhereUniqueInput,
};

export type MotionProposalArgumentWhereInput = {
  AND?: Maybe<Array<MotionProposalArgumentWhereInput>>,
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>,
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  motion?: Maybe<MotionWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
};

export type MotionProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type MotionStatus = Node & {
   __typename?: 'MotionStatus',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  motion: Motion,
  status: Scalars['String'],
};

export type MotionStatusConnection = {
   __typename?: 'MotionStatusConnection',
  aggregate: AggregateMotionStatus,
  edges: Array<Maybe<MotionStatusEdge>>,
  pageInfo: PageInfo,
};

export type MotionStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  motion: MotionCreateOneWithoutMotionStatusInput,
  status: Scalars['String'],
};

export type MotionStatusCreateManyWithoutMotionInput = {
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>,
};

export type MotionStatusCreateWithoutMotionInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
};

export type MotionStatusEdge = {
   __typename?: 'MotionStatusEdge',
  cursor: Scalars['String'],
  node: MotionStatus,
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
  NOT?: Maybe<Array<MotionStatusScalarWhereInput>>,
  OR?: Maybe<Array<MotionStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type MotionStatusSubscriptionPayload = {
   __typename?: 'MotionStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<MotionStatus>,
  previousValues?: Maybe<MotionStatusPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type MotionStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MotionStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<MotionStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<MotionStatusWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type MotionStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  motion?: Maybe<MotionUpdateOneRequiredWithoutMotionStatusInput>,
  status?: Maybe<Scalars['String']>,
};

export type MotionStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type MotionStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type MotionStatusUpdateManyWithoutMotionInput = {
  connect?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  create?: Maybe<Array<MotionStatusCreateWithoutMotionInput>>,
  delete?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  deleteMany?: Maybe<Array<MotionStatusScalarWhereInput>>,
  disconnect?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  set?: Maybe<Array<MotionStatusWhereUniqueInput>>,
  update?: Maybe<Array<MotionStatusUpdateWithWhereUniqueWithoutMotionInput>>,
  updateMany?: Maybe<Array<MotionStatusUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<MotionStatusUpsertWithWhereUniqueWithoutMotionInput>>,
};

export type MotionStatusUpdateManyWithWhereNestedInput = {
  data: MotionStatusUpdateManyDataInput,
  where: MotionStatusScalarWhereInput,
};

export type MotionStatusUpdateWithoutMotionDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  status?: Maybe<Scalars['String']>,
};

export type MotionStatusUpdateWithWhereUniqueWithoutMotionInput = {
  data: MotionStatusUpdateWithoutMotionDataInput,
  where: MotionStatusWhereUniqueInput,
};

export type MotionStatusUpsertWithWhereUniqueWithoutMotionInput = {
  create: MotionStatusCreateWithoutMotionInput,
  update: MotionStatusUpdateWithoutMotionDataInput,
  where: MotionStatusWhereUniqueInput,
};

export type MotionStatusWhereInput = {
  AND?: Maybe<Array<MotionStatusWhereInput>>,
  NOT?: Maybe<Array<MotionStatusWhereInput>>,
  OR?: Maybe<Array<MotionStatusWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  motion?: Maybe<MotionWhereInput>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type MotionSubscriptionPayload = {
   __typename?: 'MotionSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Motion>,
  previousValues?: Maybe<MotionPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type MotionSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>,
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<MotionWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type MotionUpdateInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
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
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutMotionProposalArgumentsInput>,
  update?: Maybe<MotionUpdateWithoutMotionProposalArgumentsDataInput>,
  upsert?: Maybe<MotionUpsertWithoutMotionProposalArgumentsInput>,
};

export type MotionUpdateOneRequiredWithoutMotionStatusInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutMotionStatusInput>,
  update?: Maybe<MotionUpdateWithoutMotionStatusDataInput>,
  upsert?: Maybe<MotionUpsertWithoutMotionStatusInput>,
};

export type MotionUpdateOneWithoutPreimageInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutPreimageInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<MotionUpdateWithoutPreimageDataInput>,
  upsert?: Maybe<MotionUpsertWithoutPreimageInput>,
};

export type MotionUpdateOneWithoutTreasurySpendProposalInput = {
  connect?: Maybe<MotionWhereUniqueInput>,
  create?: Maybe<MotionCreateWithoutTreasurySpendProposalInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
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
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateWithoutMotionStatusDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateWithoutPreimageDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneWithoutMotionInput>,
};

export type MotionUpdateWithoutTreasurySpendProposalDataInput = {
  author?: Maybe<Scalars['String']>,
  memberCount?: Maybe<Scalars['Int']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motionProposalArguments?: Maybe<MotionProposalArgumentUpdateManyWithoutMotionInput>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  motionStatus?: Maybe<MotionStatusUpdateManyWithoutMotionInput>,
  preimage?: Maybe<PreimageUpdateOneWithoutMotionInput>,
  preimageHash?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
};

export type MotionUpsertWithoutMotionProposalArgumentsInput = {
  create: MotionCreateWithoutMotionProposalArgumentsInput,
  update: MotionUpdateWithoutMotionProposalArgumentsDataInput,
};

export type MotionUpsertWithoutMotionStatusInput = {
  create: MotionCreateWithoutMotionStatusInput,
  update: MotionUpdateWithoutMotionStatusDataInput,
};

export type MotionUpsertWithoutPreimageInput = {
  create: MotionCreateWithoutPreimageInput,
  update: MotionUpdateWithoutPreimageDataInput,
};

export type MotionUpsertWithoutTreasurySpendProposalInput = {
  create: MotionCreateWithoutTreasurySpendProposalInput,
  update: MotionUpdateWithoutTreasurySpendProposalDataInput,
};

export type MotionWhereInput = {
  AND?: Maybe<Array<MotionWhereInput>>,
  NOT?: Maybe<Array<MotionWhereInput>>,
  OR?: Maybe<Array<MotionWhereInput>>,
  author?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  memberCount?: Maybe<Scalars['Int']>,
  memberCount_gt?: Maybe<Scalars['Int']>,
  memberCount_gte?: Maybe<Scalars['Int']>,
  memberCount_in?: Maybe<Array<Scalars['Int']>>,
  memberCount_lt?: Maybe<Scalars['Int']>,
  memberCount_lte?: Maybe<Scalars['Int']>,
  memberCount_not?: Maybe<Scalars['Int']>,
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>,
  metaDescription?: Maybe<Scalars['String']>,
  metaDescription_contains?: Maybe<Scalars['String']>,
  metaDescription_ends_with?: Maybe<Scalars['String']>,
  metaDescription_gt?: Maybe<Scalars['String']>,
  metaDescription_gte?: Maybe<Scalars['String']>,
  metaDescription_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_lt?: Maybe<Scalars['String']>,
  metaDescription_lte?: Maybe<Scalars['String']>,
  metaDescription_not?: Maybe<Scalars['String']>,
  metaDescription_not_contains?: Maybe<Scalars['String']>,
  metaDescription_not_ends_with?: Maybe<Scalars['String']>,
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_not_starts_with?: Maybe<Scalars['String']>,
  metaDescription_starts_with?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  method_contains?: Maybe<Scalars['String']>,
  method_ends_with?: Maybe<Scalars['String']>,
  method_gt?: Maybe<Scalars['String']>,
  method_gte?: Maybe<Scalars['String']>,
  method_in?: Maybe<Array<Scalars['String']>>,
  method_lt?: Maybe<Scalars['String']>,
  method_lte?: Maybe<Scalars['String']>,
  method_not?: Maybe<Scalars['String']>,
  method_not_contains?: Maybe<Scalars['String']>,
  method_not_ends_with?: Maybe<Scalars['String']>,
  method_not_in?: Maybe<Array<Scalars['String']>>,
  method_not_starts_with?: Maybe<Scalars['String']>,
  method_starts_with?: Maybe<Scalars['String']>,
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalHash_contains?: Maybe<Scalars['String']>,
  motionProposalHash_ends_with?: Maybe<Scalars['String']>,
  motionProposalHash_gt?: Maybe<Scalars['String']>,
  motionProposalHash_gte?: Maybe<Scalars['String']>,
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>,
  motionProposalHash_lt?: Maybe<Scalars['String']>,
  motionProposalHash_lte?: Maybe<Scalars['String']>,
  motionProposalHash_not?: Maybe<Scalars['String']>,
  motionProposalHash_not_contains?: Maybe<Scalars['String']>,
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>,
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>,
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>,
  motionProposalHash_starts_with?: Maybe<Scalars['String']>,
  motionProposalId?: Maybe<Scalars['Int']>,
  motionProposalId_gt?: Maybe<Scalars['Int']>,
  motionProposalId_gte?: Maybe<Scalars['Int']>,
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>,
  motionProposalId_lt?: Maybe<Scalars['Int']>,
  motionProposalId_lte?: Maybe<Scalars['Int']>,
  motionProposalId_not?: Maybe<Scalars['Int']>,
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  motionStatus_every?: Maybe<MotionStatusWhereInput>,
  motionStatus_none?: Maybe<MotionStatusWhereInput>,
  motionStatus_some?: Maybe<MotionStatusWhereInput>,
  preimage?: Maybe<PreimageWhereInput>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  section_contains?: Maybe<Scalars['String']>,
  section_ends_with?: Maybe<Scalars['String']>,
  section_gt?: Maybe<Scalars['String']>,
  section_gte?: Maybe<Scalars['String']>,
  section_in?: Maybe<Array<Scalars['String']>>,
  section_lt?: Maybe<Scalars['String']>,
  section_lte?: Maybe<Scalars['String']>,
  section_not?: Maybe<Scalars['String']>,
  section_not_contains?: Maybe<Scalars['String']>,
  section_not_ends_with?: Maybe<Scalars['String']>,
  section_not_in?: Maybe<Array<Scalars['String']>>,
  section_not_starts_with?: Maybe<Scalars['String']>,
  section_starts_with?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>,
};

export type MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion = {
  AND?: Maybe<Array<MotionWhereInput>>,
  NOT?: Maybe<Array<MotionWhereInput>>,
  OR?: Maybe<Array<MotionWhereInput>>,
  author?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  memberCount?: Maybe<Scalars['Int']>,
  memberCount_gt?: Maybe<Scalars['Int']>,
  memberCount_gte?: Maybe<Scalars['Int']>,
  memberCount_in?: Maybe<Array<Scalars['Int']>>,
  memberCount_lt?: Maybe<Scalars['Int']>,
  memberCount_lte?: Maybe<Scalars['Int']>,
  memberCount_not?: Maybe<Scalars['Int']>,
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>,
  metaDescription?: Maybe<Scalars['String']>,
  metaDescription_contains?: Maybe<Scalars['String']>,
  metaDescription_ends_with?: Maybe<Scalars['String']>,
  metaDescription_gt?: Maybe<Scalars['String']>,
  metaDescription_gte?: Maybe<Scalars['String']>,
  metaDescription_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_lt?: Maybe<Scalars['String']>,
  metaDescription_lte?: Maybe<Scalars['String']>,
  metaDescription_not?: Maybe<Scalars['String']>,
  metaDescription_not_contains?: Maybe<Scalars['String']>,
  metaDescription_not_ends_with?: Maybe<Scalars['String']>,
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_not_starts_with?: Maybe<Scalars['String']>,
  metaDescription_starts_with?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  method_contains?: Maybe<Scalars['String']>,
  method_ends_with?: Maybe<Scalars['String']>,
  method_gt?: Maybe<Scalars['String']>,
  method_gte?: Maybe<Scalars['String']>,
  method_in?: Maybe<Array<Scalars['String']>>,
  method_lt?: Maybe<Scalars['String']>,
  method_lte?: Maybe<Scalars['String']>,
  method_not?: Maybe<Scalars['String']>,
  method_not_contains?: Maybe<Scalars['String']>,
  method_not_ends_with?: Maybe<Scalars['String']>,
  method_not_in?: Maybe<Array<Scalars['String']>>,
  method_not_starts_with?: Maybe<Scalars['String']>,
  method_starts_with?: Maybe<Scalars['String']>,
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>,
  motionProposalHash?: Maybe<Scalars['String']>,
  motionProposalHash_contains?: Maybe<Scalars['String']>,
  motionProposalHash_ends_with?: Maybe<Scalars['String']>,
  motionProposalHash_gt?: Maybe<Scalars['String']>,
  motionProposalHash_gte?: Maybe<Scalars['String']>,
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>,
  motionProposalHash_lt?: Maybe<Scalars['String']>,
  motionProposalHash_lte?: Maybe<Scalars['String']>,
  motionProposalHash_not?: Maybe<Scalars['String']>,
  motionProposalHash_not_contains?: Maybe<Scalars['String']>,
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>,
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>,
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>,
  motionProposalHash_starts_with?: Maybe<Scalars['String']>,
  motionProposalId_gt?: Maybe<Scalars['Int']>,
  motionProposalId_gte?: Maybe<Scalars['Int']>,
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>,
  motionProposalId_lt?: Maybe<Scalars['Int']>,
  motionProposalId_lte?: Maybe<Scalars['Int']>,
  motionProposalId_not?: Maybe<Scalars['Int']>,
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  motionStatus_every?: Maybe<MotionStatusWhereInput>,
  motionStatus_none?: Maybe<MotionStatusWhereInput>,
  motionStatus_some?: Maybe<MotionStatusWhereInput>,
  preimage?: Maybe<PreimageWhereInput>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  section_contains?: Maybe<Scalars['String']>,
  section_ends_with?: Maybe<Scalars['String']>,
  section_gt?: Maybe<Scalars['String']>,
  section_gte?: Maybe<Scalars['String']>,
  section_in?: Maybe<Array<Scalars['String']>>,
  section_lt?: Maybe<Scalars['String']>,
  section_lte?: Maybe<Scalars['String']>,
  section_not?: Maybe<Scalars['String']>,
  section_not_contains?: Maybe<Scalars['String']>,
  section_not_ends_with?: Maybe<Scalars['String']>,
  section_not_in?: Maybe<Array<Scalars['String']>>,
  section_not_starts_with?: Maybe<Scalars['String']>,
  section_starts_with?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>,
};

export type MotionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  motionProposalId?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  addressLinkConfirm?: Maybe<ChangeResponse>,
  addressLinkStart?: Maybe<AddressLinkType>,
  addressLogin?: Maybe<LoginResponse>,
  addressLoginStart?: Maybe<AddressLoginType>,
  addressUnlink?: Maybe<ChangeResponse>,
  changeEmail?: Maybe<ChangeResponse>,
  changeName?: Maybe<ChangeResponse>,
  changeNotificationPreference?: Maybe<ChangeResponse>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<ChangeResponse>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  postSubscribe?: Maybe<Message>,
  postUnsubscribe?: Maybe<Message>,
  reportContent?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
  resendVerifyEmailToken?: Maybe<Message>,
  resetPassword?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  undoEmailChange?: Maybe<UndoEmailChangeResponse>,
  verifyEmail?: Maybe<ChangeResponse>,
};


export type MutationAddressLinkConfirmArgs = {
  address_id: Scalars['Int'],
  signature: Scalars['String']
};


export type MutationAddressLinkStartArgs = {
  address: Scalars['String'],
  network: Scalars['String']
};


export type MutationAddressLoginArgs = {
  address: Scalars['String'],
  signature: Scalars['String']
};


export type MutationAddressLoginStartArgs = {
  address: Scalars['String']
};


export type MutationAddressUnlinkArgs = {
  address: Scalars['String']
};


export type MutationChangeEmailArgs = {
  email: Scalars['String']
};


export type MutationChangeNameArgs = {
  newName: Scalars['String']
};


export type MutationChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'],
  oldPassword: Scalars['String']
};


export type MutationChangeUsernameArgs = {
  username: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  username: Scalars['String']
};


export type MutationPostSubscribeArgs = {
  post_id: Scalars['Int']
};


export type MutationPostUnsubscribeArgs = {
  post_id: Scalars['Int']
};


export type MutationReportContentArgs = {
  comments?: Maybe<Scalars['String']>,
  content_id: Scalars['String'],
  network: Scalars['String'],
  reason: Scalars['String'],
  type: Scalars['String']
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'],
  token: Scalars['String']
};


export type MutationSignupArgs = {
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  username: Scalars['String']
};


export type MutationUndoEmailChangeArgs = {
  token: Scalars['String']
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']
};

export type Mutation_Root = {
   __typename?: 'mutation_root',
  addressLinkConfirm?: Maybe<ChangeResponse>,
  addressLinkStart?: Maybe<AddressLinkType>,
  addressLogin?: Maybe<LoginResponse>,
  addressLoginStart?: Maybe<AddressLoginType>,
  addressUnlink?: Maybe<ChangeResponse>,
  changeEmail?: Maybe<ChangeResponse>,
  changeName?: Maybe<ChangeResponse>,
  changeNotificationPreference?: Maybe<ChangeResponse>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<ChangeResponse>,
  createBlockIndex: BlockIndex,
  createBlockNumber: BlockNumber,
  createCouncil: Council,
  createCouncilMember: CouncilMember,
  createEra: Era,
  createHeartBeat: HeartBeat,
  createMotion: Motion,
  createMotionProposalArgument: MotionProposalArgument,
  createMotionStatus: MotionStatus,
  createNomination: Nomination,
  createOfflineValidator: OfflineValidator,
  createPreimage: Preimage,
  createPreimageArgument: PreimageArgument,
  createPreimageStatus: PreimageStatus,
  createProposal: Proposal,
  createProposalStatus: ProposalStatus,
  createReferendum: Referendum,
  createReferendumStatus: ReferendumStatus,
  createReward: Reward,
  createSession: Session,
  createSlashing: Slashing,
  createStake: Stake,
  createTotalIssuance: TotalIssuance,
  createTreasurySpendProposal: TreasurySpendProposal,
  createTreasuryStatus: TreasuryStatus,
  createValidator: Validator,
  deleteBlockIndex?: Maybe<BlockIndex>,
  deleteBlockNumber?: Maybe<BlockNumber>,
  deleteCouncil?: Maybe<Council>,
  deleteCouncilMember?: Maybe<CouncilMember>,
  deleteEra?: Maybe<Era>,
  deleteHeartBeat?: Maybe<HeartBeat>,
  deleteManyBlockIndexes: BatchPayload,
  deleteManyBlockNumbers: BatchPayload,
  deleteManyCouncilMembers: BatchPayload,
  deleteManyCouncils: BatchPayload,
  deleteManyEras: BatchPayload,
  deleteManyHeartBeats: BatchPayload,
  deleteManyMotionProposalArguments: BatchPayload,
  deleteManyMotionStatuses: BatchPayload,
  deleteManyMotions: BatchPayload,
  deleteManyNominations: BatchPayload,
  deleteManyOfflineValidators: BatchPayload,
  deleteManyPreimageArguments: BatchPayload,
  deleteManyPreimageStatuses: BatchPayload,
  deleteManyPreimages: BatchPayload,
  deleteManyProposalStatuses: BatchPayload,
  deleteManyProposals: BatchPayload,
  deleteManyReferendumStatuses: BatchPayload,
  deleteManyReferendums: BatchPayload,
  deleteManyRewards: BatchPayload,
  deleteManySessions: BatchPayload,
  deleteManySlashings: BatchPayload,
  deleteManyStakes: BatchPayload,
  deleteManyTotalIssuances: BatchPayload,
  deleteManyTreasurySpendProposals: BatchPayload,
  deleteManyTreasuryStatuses: BatchPayload,
  deleteManyValidators: BatchPayload,
  deleteMotion?: Maybe<Motion>,
  deleteMotionProposalArgument?: Maybe<MotionProposalArgument>,
  deleteMotionStatus?: Maybe<MotionStatus>,
  deleteNomination?: Maybe<Nomination>,
  deleteOfflineValidator?: Maybe<OfflineValidator>,
  deletePreimage?: Maybe<Preimage>,
  deletePreimageArgument?: Maybe<PreimageArgument>,
  deletePreimageStatus?: Maybe<PreimageStatus>,
  deleteProposal?: Maybe<Proposal>,
  deleteProposalStatus?: Maybe<ProposalStatus>,
  deleteReferendum?: Maybe<Referendum>,
  deleteReferendumStatus?: Maybe<ReferendumStatus>,
  deleteReward?: Maybe<Reward>,
  deleteSession?: Maybe<Session>,
  deleteSlashing?: Maybe<Slashing>,
  deleteStake?: Maybe<Stake>,
  deleteTotalIssuance?: Maybe<TotalIssuance>,
  deleteTreasurySpendProposal?: Maybe<TreasurySpendProposal>,
  deleteTreasuryStatus?: Maybe<TreasuryStatus>,
  deleteValidator?: Maybe<Validator>,
  delete_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>,
  delete_comments?: Maybe<Comments_Mutation_Response>,
  delete_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  delete_post_reactions?: Maybe<Post_Reactions_Mutation_Response>,
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  delete_posts?: Maybe<Posts_Mutation_Response>,
  executeRaw: Scalars['Json'],
  insert_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>,
  insert_comments?: Maybe<Comments_Mutation_Response>,
  insert_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  insert_post_reactions?: Maybe<Post_Reactions_Mutation_Response>,
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  insert_post_types?: Maybe<Post_Types_Mutation_Response>,
  insert_posts?: Maybe<Posts_Mutation_Response>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  postSubscribe?: Maybe<Message>,
  postUnsubscribe?: Maybe<Message>,
  reportContent?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
  resendVerifyEmailToken?: Maybe<Message>,
  resetPassword?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  undoEmailChange?: Maybe<UndoEmailChangeResponse>,
  updateBlockIndex?: Maybe<BlockIndex>,
  updateBlockNumber?: Maybe<BlockNumber>,
  updateCouncil?: Maybe<Council>,
  updateCouncilMember?: Maybe<CouncilMember>,
  updateEra?: Maybe<Era>,
  updateHeartBeat?: Maybe<HeartBeat>,
  updateManyBlockIndexes: BatchPayload,
  updateManyBlockNumbers: BatchPayload,
  updateManyCouncilMembers: BatchPayload,
  updateManyEras: BatchPayload,
  updateManyHeartBeats: BatchPayload,
  updateManyMotionProposalArguments: BatchPayload,
  updateManyMotionStatuses: BatchPayload,
  updateManyMotions: BatchPayload,
  updateManyNominations: BatchPayload,
  updateManyOfflineValidators: BatchPayload,
  updateManyPreimageArguments: BatchPayload,
  updateManyPreimageStatuses: BatchPayload,
  updateManyPreimages: BatchPayload,
  updateManyProposalStatuses: BatchPayload,
  updateManyProposals: BatchPayload,
  updateManyReferendumStatuses: BatchPayload,
  updateManyReferendums: BatchPayload,
  updateManyRewards: BatchPayload,
  updateManySessions: BatchPayload,
  updateManySlashings: BatchPayload,
  updateManyStakes: BatchPayload,
  updateManyTotalIssuances: BatchPayload,
  updateManyTreasurySpendProposals: BatchPayload,
  updateManyTreasuryStatuses: BatchPayload,
  updateManyValidators: BatchPayload,
  updateMotion?: Maybe<Motion>,
  updateMotionProposalArgument?: Maybe<MotionProposalArgument>,
  updateMotionStatus?: Maybe<MotionStatus>,
  updateNomination?: Maybe<Nomination>,
  updateOfflineValidator?: Maybe<OfflineValidator>,
  updatePreimage?: Maybe<Preimage>,
  updatePreimageArgument?: Maybe<PreimageArgument>,
  updatePreimageStatus?: Maybe<PreimageStatus>,
  updateProposal?: Maybe<Proposal>,
  updateProposalStatus?: Maybe<ProposalStatus>,
  updateReferendum?: Maybe<Referendum>,
  updateReferendumStatus?: Maybe<ReferendumStatus>,
  updateReward?: Maybe<Reward>,
  updateSession?: Maybe<Session>,
  updateSlashing?: Maybe<Slashing>,
  updateStake?: Maybe<Stake>,
  updateTotalIssuance?: Maybe<TotalIssuance>,
  updateTreasurySpendProposal?: Maybe<TreasurySpendProposal>,
  updateTreasuryStatus?: Maybe<TreasuryStatus>,
  updateValidator?: Maybe<Validator>,
  update_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>,
  update_comments?: Maybe<Comments_Mutation_Response>,
  update_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  update_post_reactions?: Maybe<Post_Reactions_Mutation_Response>,
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  update_posts?: Maybe<Posts_Mutation_Response>,
  upsertBlockIndex: BlockIndex,
  upsertBlockNumber: BlockNumber,
  upsertCouncil: Council,
  upsertCouncilMember: CouncilMember,
  upsertEra: Era,
  upsertHeartBeat: HeartBeat,
  upsertMotion: Motion,
  upsertMotionProposalArgument: MotionProposalArgument,
  upsertMotionStatus: MotionStatus,
  upsertNomination: Nomination,
  upsertOfflineValidator: OfflineValidator,
  upsertPreimage: Preimage,
  upsertPreimageArgument: PreimageArgument,
  upsertPreimageStatus: PreimageStatus,
  upsertProposal: Proposal,
  upsertProposalStatus: ProposalStatus,
  upsertReferendum: Referendum,
  upsertReferendumStatus: ReferendumStatus,
  upsertReward: Reward,
  upsertSession: Session,
  upsertSlashing: Slashing,
  upsertStake: Stake,
  upsertTotalIssuance: TotalIssuance,
  upsertTreasurySpendProposal: TreasurySpendProposal,
  upsertTreasuryStatus: TreasuryStatus,
  upsertValidator: Validator,
  verifyEmail?: Maybe<ChangeResponse>,
};


export type Mutation_RootAddressLinkConfirmArgs = {
  address_id: Scalars['Int'],
  signature: Scalars['String']
};


export type Mutation_RootAddressLinkStartArgs = {
  address: Scalars['String'],
  network: Scalars['String']
};


export type Mutation_RootAddressLoginArgs = {
  address: Scalars['String'],
  signature: Scalars['String']
};


export type Mutation_RootAddressLoginStartArgs = {
  address: Scalars['String']
};


export type Mutation_RootAddressUnlinkArgs = {
  address: Scalars['String']
};


export type Mutation_RootChangeEmailArgs = {
  email: Scalars['String']
};


export type Mutation_RootChangeNameArgs = {
  newName: Scalars['String']
};


export type Mutation_RootChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>
};


export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String'],
  oldPassword: Scalars['String']
};


export type Mutation_RootChangeUsernameArgs = {
  username: Scalars['String']
};


export type Mutation_RootCreateBlockIndexArgs = {
  data: BlockIndexCreateInput
};


export type Mutation_RootCreateBlockNumberArgs = {
  data: BlockNumberCreateInput
};


export type Mutation_RootCreateCouncilArgs = {
  data: CouncilCreateInput
};


export type Mutation_RootCreateCouncilMemberArgs = {
  data: CouncilMemberCreateInput
};


export type Mutation_RootCreateEraArgs = {
  data: EraCreateInput
};


export type Mutation_RootCreateHeartBeatArgs = {
  data: HeartBeatCreateInput
};


export type Mutation_RootCreateMotionArgs = {
  data: MotionCreateInput
};


export type Mutation_RootCreateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentCreateInput
};


export type Mutation_RootCreateMotionStatusArgs = {
  data: MotionStatusCreateInput
};


export type Mutation_RootCreateNominationArgs = {
  data: NominationCreateInput
};


export type Mutation_RootCreateOfflineValidatorArgs = {
  data: OfflineValidatorCreateInput
};


export type Mutation_RootCreatePreimageArgs = {
  data: PreimageCreateInput
};


export type Mutation_RootCreatePreimageArgumentArgs = {
  data: PreimageArgumentCreateInput
};


export type Mutation_RootCreatePreimageStatusArgs = {
  data: PreimageStatusCreateInput
};


export type Mutation_RootCreateProposalArgs = {
  data: ProposalCreateInput
};


export type Mutation_RootCreateProposalStatusArgs = {
  data: ProposalStatusCreateInput
};


export type Mutation_RootCreateReferendumArgs = {
  data: ReferendumCreateInput
};


export type Mutation_RootCreateReferendumStatusArgs = {
  data: ReferendumStatusCreateInput
};


export type Mutation_RootCreateRewardArgs = {
  data: RewardCreateInput
};


export type Mutation_RootCreateSessionArgs = {
  data: SessionCreateInput
};


export type Mutation_RootCreateSlashingArgs = {
  data: SlashingCreateInput
};


export type Mutation_RootCreateStakeArgs = {
  data: StakeCreateInput
};


export type Mutation_RootCreateTotalIssuanceArgs = {
  data: TotalIssuanceCreateInput
};


export type Mutation_RootCreateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalCreateInput
};


export type Mutation_RootCreateTreasuryStatusArgs = {
  data: TreasuryStatusCreateInput
};


export type Mutation_RootCreateValidatorArgs = {
  data: ValidatorCreateInput
};


export type Mutation_RootDeleteBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput
};


export type Mutation_RootDeleteBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput
};


export type Mutation_RootDeleteCouncilArgs = {
  where: CouncilWhereUniqueInput
};


export type Mutation_RootDeleteCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput
};


export type Mutation_RootDeleteEraArgs = {
  where: EraWhereUniqueInput
};


export type Mutation_RootDeleteHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput
};


export type Mutation_RootDeleteManyBlockIndexesArgs = {
  where?: Maybe<BlockIndexWhereInput>
};


export type Mutation_RootDeleteManyBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>
};


export type Mutation_RootDeleteManyCouncilMembersArgs = {
  where?: Maybe<CouncilMemberWhereInput>
};


export type Mutation_RootDeleteManyCouncilsArgs = {
  where?: Maybe<CouncilWhereInput>
};


export type Mutation_RootDeleteManyErasArgs = {
  where?: Maybe<EraWhereInput>
};


export type Mutation_RootDeleteManyHeartBeatsArgs = {
  where?: Maybe<HeartBeatWhereInput>
};


export type Mutation_RootDeleteManyMotionProposalArgumentsArgs = {
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type Mutation_RootDeleteManyMotionStatusesArgs = {
  where?: Maybe<MotionStatusWhereInput>
};


export type Mutation_RootDeleteManyMotionsArgs = {
  where?: Maybe<MotionWhereInput>
};


export type Mutation_RootDeleteManyNominationsArgs = {
  where?: Maybe<NominationWhereInput>
};


export type Mutation_RootDeleteManyOfflineValidatorsArgs = {
  where?: Maybe<OfflineValidatorWhereInput>
};


export type Mutation_RootDeleteManyPreimageArgumentsArgs = {
  where?: Maybe<PreimageArgumentWhereInput>
};


export type Mutation_RootDeleteManyPreimageStatusesArgs = {
  where?: Maybe<PreimageStatusWhereInput>
};


export type Mutation_RootDeleteManyPreimagesArgs = {
  where?: Maybe<PreimageWhereInput>
};


export type Mutation_RootDeleteManyProposalStatusesArgs = {
  where?: Maybe<ProposalStatusWhereInput>
};


export type Mutation_RootDeleteManyProposalsArgs = {
  where?: Maybe<ProposalWhereInput>
};


export type Mutation_RootDeleteManyReferendumStatusesArgs = {
  where?: Maybe<ReferendumStatusWhereInput>
};


export type Mutation_RootDeleteManyReferendumsArgs = {
  where?: Maybe<ReferendumWhereInput>
};


export type Mutation_RootDeleteManyRewardsArgs = {
  where?: Maybe<RewardWhereInput>
};


export type Mutation_RootDeleteManySessionsArgs = {
  where?: Maybe<SessionWhereInput>
};


export type Mutation_RootDeleteManySlashingsArgs = {
  where?: Maybe<SlashingWhereInput>
};


export type Mutation_RootDeleteManyStakesArgs = {
  where?: Maybe<StakeWhereInput>
};


export type Mutation_RootDeleteManyTotalIssuancesArgs = {
  where?: Maybe<TotalIssuanceWhereInput>
};


export type Mutation_RootDeleteManyTreasurySpendProposalsArgs = {
  where?: Maybe<TreasurySpendProposalWhereInput>
};


export type Mutation_RootDeleteManyTreasuryStatusesArgs = {
  where?: Maybe<TreasuryStatusWhereInput>
};


export type Mutation_RootDeleteManyValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>
};


export type Mutation_RootDeleteMotionArgs = {
  where: MotionWhereUniqueInput
};


export type Mutation_RootDeleteMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput
};


export type Mutation_RootDeleteMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput
};


export type Mutation_RootDeleteNominationArgs = {
  where: NominationWhereUniqueInput
};


export type Mutation_RootDeleteOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput
};


export type Mutation_RootDeletePreimageArgs = {
  where: PreimageWhereUniqueInput
};


export type Mutation_RootDeletePreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput
};


export type Mutation_RootDeletePreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput
};


export type Mutation_RootDeleteProposalArgs = {
  where: ProposalWhereUniqueInput
};


export type Mutation_RootDeleteProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput
};


export type Mutation_RootDeleteReferendumArgs = {
  where: ReferendumWhereUniqueInput
};


export type Mutation_RootDeleteReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput
};


export type Mutation_RootDeleteRewardArgs = {
  where: RewardWhereUniqueInput
};


export type Mutation_RootDeleteSessionArgs = {
  where: SessionWhereUniqueInput
};


export type Mutation_RootDeleteSlashingArgs = {
  where: SlashingWhereUniqueInput
};


export type Mutation_RootDeleteStakeArgs = {
  where: StakeWhereUniqueInput
};


export type Mutation_RootDeleteTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput
};


export type Mutation_RootDeleteTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput
};


export type Mutation_RootDeleteTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput
};


export type Mutation_RootDeleteValidatorArgs = {
  where: ValidatorWhereUniqueInput
};


export type Mutation_RootDelete_Comment_ReactionsArgs = {
  where: Comment_Reactions_Bool_Exp
};


export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp
};


export type Mutation_RootDelete_Onchain_LinksArgs = {
  where: Onchain_Links_Bool_Exp
};


export type Mutation_RootDelete_Post_ReactionsArgs = {
  where: Post_Reactions_Bool_Exp
};


export type Mutation_RootDelete_Post_TopicsArgs = {
  where: Post_Topics_Bool_Exp
};


export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp
};


export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
};


export type Mutation_RootExecuteRawArgs = {
  database?: Maybe<PrismaDatabase>,
  query: Scalars['String']
};


export type Mutation_RootInsert_Comment_ReactionsArgs = {
  objects: Array<Comment_Reactions_Insert_Input>,
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>
};


export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>,
  on_conflict?: Maybe<Comments_On_Conflict>
};


export type Mutation_RootInsert_Onchain_LinksArgs = {
  objects: Array<Onchain_Links_Insert_Input>,
  on_conflict?: Maybe<Onchain_Links_On_Conflict>
};


export type Mutation_RootInsert_Post_ReactionsArgs = {
  objects: Array<Post_Reactions_Insert_Input>,
  on_conflict?: Maybe<Post_Reactions_On_Conflict>
};


export type Mutation_RootInsert_Post_TopicsArgs = {
  objects: Array<Post_Topics_Insert_Input>,
  on_conflict?: Maybe<Post_Topics_On_Conflict>
};


export type Mutation_RootInsert_Post_TypesArgs = {
  objects: Array<Post_Types_Insert_Input>,
  on_conflict?: Maybe<Post_Types_On_Conflict>
};


export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>,
  on_conflict?: Maybe<Posts_On_Conflict>
};


export type Mutation_RootLoginArgs = {
  password: Scalars['String'],
  username: Scalars['String']
};


export type Mutation_RootPostSubscribeArgs = {
  post_id: Scalars['Int']
};


export type Mutation_RootPostUnsubscribeArgs = {
  post_id: Scalars['Int']
};


export type Mutation_RootReportContentArgs = {
  comments?: Maybe<Scalars['String']>,
  content_id: Scalars['String'],
  network: Scalars['String'],
  reason: Scalars['String'],
  type: Scalars['String']
};


export type Mutation_RootRequestResetPasswordArgs = {
  email: Scalars['String']
};


export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars['String'],
  token: Scalars['String']
};


export type Mutation_RootSignupArgs = {
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  username: Scalars['String']
};


export type Mutation_RootUndoEmailChangeArgs = {
  token: Scalars['String']
};


export type Mutation_RootUpdateBlockIndexArgs = {
  data: BlockIndexUpdateInput,
  where: BlockIndexWhereUniqueInput
};


export type Mutation_RootUpdateBlockNumberArgs = {
  data: BlockNumberUpdateInput,
  where: BlockNumberWhereUniqueInput
};


export type Mutation_RootUpdateCouncilArgs = {
  data: CouncilUpdateInput,
  where: CouncilWhereUniqueInput
};


export type Mutation_RootUpdateCouncilMemberArgs = {
  data: CouncilMemberUpdateInput,
  where: CouncilMemberWhereUniqueInput
};


export type Mutation_RootUpdateEraArgs = {
  data: EraUpdateInput,
  where: EraWhereUniqueInput
};


export type Mutation_RootUpdateHeartBeatArgs = {
  data: HeartBeatUpdateInput,
  where: HeartBeatWhereUniqueInput
};


export type Mutation_RootUpdateManyBlockIndexesArgs = {
  data: BlockIndexUpdateManyMutationInput,
  where?: Maybe<BlockIndexWhereInput>
};


export type Mutation_RootUpdateManyBlockNumbersArgs = {
  data: BlockNumberUpdateManyMutationInput,
  where?: Maybe<BlockNumberWhereInput>
};


export type Mutation_RootUpdateManyCouncilMembersArgs = {
  data: CouncilMemberUpdateManyMutationInput,
  where?: Maybe<CouncilMemberWhereInput>
};


export type Mutation_RootUpdateManyErasArgs = {
  data: EraUpdateManyMutationInput,
  where?: Maybe<EraWhereInput>
};


export type Mutation_RootUpdateManyHeartBeatsArgs = {
  data: HeartBeatUpdateManyMutationInput,
  where?: Maybe<HeartBeatWhereInput>
};


export type Mutation_RootUpdateManyMotionProposalArgumentsArgs = {
  data: MotionProposalArgumentUpdateManyMutationInput,
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type Mutation_RootUpdateManyMotionStatusesArgs = {
  data: MotionStatusUpdateManyMutationInput,
  where?: Maybe<MotionStatusWhereInput>
};


export type Mutation_RootUpdateManyMotionsArgs = {
  data: MotionUpdateManyMutationInput,
  where?: Maybe<MotionWhereInput>
};


export type Mutation_RootUpdateManyNominationsArgs = {
  data: NominationUpdateManyMutationInput,
  where?: Maybe<NominationWhereInput>
};


export type Mutation_RootUpdateManyOfflineValidatorsArgs = {
  data: OfflineValidatorUpdateManyMutationInput,
  where?: Maybe<OfflineValidatorWhereInput>
};


export type Mutation_RootUpdateManyPreimageArgumentsArgs = {
  data: PreimageArgumentUpdateManyMutationInput,
  where?: Maybe<PreimageArgumentWhereInput>
};


export type Mutation_RootUpdateManyPreimageStatusesArgs = {
  data: PreimageStatusUpdateManyMutationInput,
  where?: Maybe<PreimageStatusWhereInput>
};


export type Mutation_RootUpdateManyPreimagesArgs = {
  data: PreimageUpdateManyMutationInput,
  where?: Maybe<PreimageWhereInput>
};


export type Mutation_RootUpdateManyProposalStatusesArgs = {
  data: ProposalStatusUpdateManyMutationInput,
  where?: Maybe<ProposalStatusWhereInput>
};


export type Mutation_RootUpdateManyProposalsArgs = {
  data: ProposalUpdateManyMutationInput,
  where?: Maybe<ProposalWhereInput>
};


export type Mutation_RootUpdateManyReferendumStatusesArgs = {
  data: ReferendumStatusUpdateManyMutationInput,
  where?: Maybe<ReferendumStatusWhereInput>
};


export type Mutation_RootUpdateManyReferendumsArgs = {
  data: ReferendumUpdateManyMutationInput,
  where?: Maybe<ReferendumWhereInput>
};


export type Mutation_RootUpdateManyRewardsArgs = {
  data: RewardUpdateManyMutationInput,
  where?: Maybe<RewardWhereInput>
};


export type Mutation_RootUpdateManySessionsArgs = {
  data: SessionUpdateManyMutationInput,
  where?: Maybe<SessionWhereInput>
};


export type Mutation_RootUpdateManySlashingsArgs = {
  data: SlashingUpdateManyMutationInput,
  where?: Maybe<SlashingWhereInput>
};


export type Mutation_RootUpdateManyStakesArgs = {
  data: StakeUpdateManyMutationInput,
  where?: Maybe<StakeWhereInput>
};


export type Mutation_RootUpdateManyTotalIssuancesArgs = {
  data: TotalIssuanceUpdateManyMutationInput,
  where?: Maybe<TotalIssuanceWhereInput>
};


export type Mutation_RootUpdateManyTreasurySpendProposalsArgs = {
  data: TreasurySpendProposalUpdateManyMutationInput,
  where?: Maybe<TreasurySpendProposalWhereInput>
};


export type Mutation_RootUpdateManyTreasuryStatusesArgs = {
  data: TreasuryStatusUpdateManyMutationInput,
  where?: Maybe<TreasuryStatusWhereInput>
};


export type Mutation_RootUpdateManyValidatorsArgs = {
  data: ValidatorUpdateManyMutationInput,
  where?: Maybe<ValidatorWhereInput>
};


export type Mutation_RootUpdateMotionArgs = {
  data: MotionUpdateInput,
  where: MotionWhereUniqueInput
};


export type Mutation_RootUpdateMotionProposalArgumentArgs = {
  data: MotionProposalArgumentUpdateInput,
  where: MotionProposalArgumentWhereUniqueInput
};


export type Mutation_RootUpdateMotionStatusArgs = {
  data: MotionStatusUpdateInput,
  where: MotionStatusWhereUniqueInput
};


export type Mutation_RootUpdateNominationArgs = {
  data: NominationUpdateInput,
  where: NominationWhereUniqueInput
};


export type Mutation_RootUpdateOfflineValidatorArgs = {
  data: OfflineValidatorUpdateInput,
  where: OfflineValidatorWhereUniqueInput
};


export type Mutation_RootUpdatePreimageArgs = {
  data: PreimageUpdateInput,
  where: PreimageWhereUniqueInput
};


export type Mutation_RootUpdatePreimageArgumentArgs = {
  data: PreimageArgumentUpdateInput,
  where: PreimageArgumentWhereUniqueInput
};


export type Mutation_RootUpdatePreimageStatusArgs = {
  data: PreimageStatusUpdateInput,
  where: PreimageStatusWhereUniqueInput
};


export type Mutation_RootUpdateProposalArgs = {
  data: ProposalUpdateInput,
  where: ProposalWhereUniqueInput
};


export type Mutation_RootUpdateProposalStatusArgs = {
  data: ProposalStatusUpdateInput,
  where: ProposalStatusWhereUniqueInput
};


export type Mutation_RootUpdateReferendumArgs = {
  data: ReferendumUpdateInput,
  where: ReferendumWhereUniqueInput
};


export type Mutation_RootUpdateReferendumStatusArgs = {
  data: ReferendumStatusUpdateInput,
  where: ReferendumStatusWhereUniqueInput
};


export type Mutation_RootUpdateRewardArgs = {
  data: RewardUpdateInput,
  where: RewardWhereUniqueInput
};


export type Mutation_RootUpdateSessionArgs = {
  data: SessionUpdateInput,
  where: SessionWhereUniqueInput
};


export type Mutation_RootUpdateSlashingArgs = {
  data: SlashingUpdateInput,
  where: SlashingWhereUniqueInput
};


export type Mutation_RootUpdateStakeArgs = {
  data: StakeUpdateInput,
  where: StakeWhereUniqueInput
};


export type Mutation_RootUpdateTotalIssuanceArgs = {
  data: TotalIssuanceUpdateInput,
  where: TotalIssuanceWhereUniqueInput
};


export type Mutation_RootUpdateTreasurySpendProposalArgs = {
  data: TreasurySpendProposalUpdateInput,
  where: TreasurySpendProposalWhereUniqueInput
};


export type Mutation_RootUpdateTreasuryStatusArgs = {
  data: TreasuryStatusUpdateInput,
  where: TreasuryStatusWhereUniqueInput
};


export type Mutation_RootUpdateValidatorArgs = {
  data: ValidatorUpdateInput,
  where: ValidatorWhereUniqueInput
};


export type Mutation_RootUpdate_Comment_ReactionsArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>,
  _set?: Maybe<Comment_Reactions_Set_Input>,
  where: Comment_Reactions_Bool_Exp
};


export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>,
  _set?: Maybe<Comments_Set_Input>,
  where: Comments_Bool_Exp
};


export type Mutation_RootUpdate_Onchain_LinksArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>,
  _set?: Maybe<Onchain_Links_Set_Input>,
  where: Onchain_Links_Bool_Exp
};


export type Mutation_RootUpdate_Post_ReactionsArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>,
  _set?: Maybe<Post_Reactions_Set_Input>,
  where: Post_Reactions_Bool_Exp
};


export type Mutation_RootUpdate_Post_TopicsArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>,
  _set?: Maybe<Post_Topics_Set_Input>,
  where: Post_Topics_Bool_Exp
};


export type Mutation_RootUpdate_Post_TypesArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>,
  _set?: Maybe<Post_Types_Set_Input>,
  where: Post_Types_Bool_Exp
};


export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>,
  _set?: Maybe<Posts_Set_Input>,
  where: Posts_Bool_Exp
};


export type Mutation_RootUpsertBlockIndexArgs = {
  create: BlockIndexCreateInput,
  update: BlockIndexUpdateInput,
  where: BlockIndexWhereUniqueInput
};


export type Mutation_RootUpsertBlockNumberArgs = {
  create: BlockNumberCreateInput,
  update: BlockNumberUpdateInput,
  where: BlockNumberWhereUniqueInput
};


export type Mutation_RootUpsertCouncilArgs = {
  create: CouncilCreateInput,
  update: CouncilUpdateInput,
  where: CouncilWhereUniqueInput
};


export type Mutation_RootUpsertCouncilMemberArgs = {
  create: CouncilMemberCreateInput,
  update: CouncilMemberUpdateInput,
  where: CouncilMemberWhereUniqueInput
};


export type Mutation_RootUpsertEraArgs = {
  create: EraCreateInput,
  update: EraUpdateInput,
  where: EraWhereUniqueInput
};


export type Mutation_RootUpsertHeartBeatArgs = {
  create: HeartBeatCreateInput,
  update: HeartBeatUpdateInput,
  where: HeartBeatWhereUniqueInput
};


export type Mutation_RootUpsertMotionArgs = {
  create: MotionCreateInput,
  update: MotionUpdateInput,
  where: MotionWhereUniqueInput
};


export type Mutation_RootUpsertMotionProposalArgumentArgs = {
  create: MotionProposalArgumentCreateInput,
  update: MotionProposalArgumentUpdateInput,
  where: MotionProposalArgumentWhereUniqueInput
};


export type Mutation_RootUpsertMotionStatusArgs = {
  create: MotionStatusCreateInput,
  update: MotionStatusUpdateInput,
  where: MotionStatusWhereUniqueInput
};


export type Mutation_RootUpsertNominationArgs = {
  create: NominationCreateInput,
  update: NominationUpdateInput,
  where: NominationWhereUniqueInput
};


export type Mutation_RootUpsertOfflineValidatorArgs = {
  create: OfflineValidatorCreateInput,
  update: OfflineValidatorUpdateInput,
  where: OfflineValidatorWhereUniqueInput
};


export type Mutation_RootUpsertPreimageArgs = {
  create: PreimageCreateInput,
  update: PreimageUpdateInput,
  where: PreimageWhereUniqueInput
};


export type Mutation_RootUpsertPreimageArgumentArgs = {
  create: PreimageArgumentCreateInput,
  update: PreimageArgumentUpdateInput,
  where: PreimageArgumentWhereUniqueInput
};


export type Mutation_RootUpsertPreimageStatusArgs = {
  create: PreimageStatusCreateInput,
  update: PreimageStatusUpdateInput,
  where: PreimageStatusWhereUniqueInput
};


export type Mutation_RootUpsertProposalArgs = {
  create: ProposalCreateInput,
  update: ProposalUpdateInput,
  where: ProposalWhereUniqueInput
};


export type Mutation_RootUpsertProposalStatusArgs = {
  create: ProposalStatusCreateInput,
  update: ProposalStatusUpdateInput,
  where: ProposalStatusWhereUniqueInput
};


export type Mutation_RootUpsertReferendumArgs = {
  create: ReferendumCreateInput,
  update: ReferendumUpdateInput,
  where: ReferendumWhereUniqueInput
};


export type Mutation_RootUpsertReferendumStatusArgs = {
  create: ReferendumStatusCreateInput,
  update: ReferendumStatusUpdateInput,
  where: ReferendumStatusWhereUniqueInput
};


export type Mutation_RootUpsertRewardArgs = {
  create: RewardCreateInput,
  update: RewardUpdateInput,
  where: RewardWhereUniqueInput
};


export type Mutation_RootUpsertSessionArgs = {
  create: SessionCreateInput,
  update: SessionUpdateInput,
  where: SessionWhereUniqueInput
};


export type Mutation_RootUpsertSlashingArgs = {
  create: SlashingCreateInput,
  update: SlashingUpdateInput,
  where: SlashingWhereUniqueInput
};


export type Mutation_RootUpsertStakeArgs = {
  create: StakeCreateInput,
  update: StakeUpdateInput,
  where: StakeWhereUniqueInput
};


export type Mutation_RootUpsertTotalIssuanceArgs = {
  create: TotalIssuanceCreateInput,
  update: TotalIssuanceUpdateInput,
  where: TotalIssuanceWhereUniqueInput
};


export type Mutation_RootUpsertTreasurySpendProposalArgs = {
  create: TreasurySpendProposalCreateInput,
  update: TreasurySpendProposalUpdateInput,
  where: TreasurySpendProposalWhereUniqueInput
};


export type Mutation_RootUpsertTreasuryStatusArgs = {
  create: TreasuryStatusCreateInput,
  update: TreasuryStatusUpdateInput,
  where: TreasuryStatusWhereUniqueInput
};


export type Mutation_RootUpsertValidatorArgs = {
  create: ValidatorCreateInput,
  update: ValidatorUpdateInput,
  where: ValidatorWhereUniqueInput
};


export type Mutation_RootVerifyEmailArgs = {
  token: Scalars['String']
};

export enum MutationType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

export type Node = {
  id: Scalars['ID'],
};

export type Nomination = Node & {
   __typename?: 'Nomination',
  id: Scalars['ID'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  session: Session,
  stakedAmount: Scalars['String'],
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
};

export type NominationConnection = {
   __typename?: 'NominationConnection',
  aggregate: AggregateNomination,
  edges: Array<Maybe<NominationEdge>>,
  pageInfo: PageInfo,
};

export type NominationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  session: SessionCreateOneInput,
  stakedAmount: Scalars['String'],
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
};

export type NominationEdge = {
   __typename?: 'NominationEdge',
  cursor: Scalars['String'],
  node: Nomination,
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
   __typename?: 'NominationPreviousValues',
  id: Scalars['ID'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  stakedAmount: Scalars['String'],
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
};

export type NominationSubscriptionPayload = {
   __typename?: 'NominationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Nomination>,
  previousValues?: Maybe<NominationPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type NominationSubscriptionWhereInput = {
  AND?: Maybe<Array<NominationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<NominationSubscriptionWhereInput>>,
  OR?: Maybe<Array<NominationSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<NominationWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type NominationUpdateInput = {
  nominatorController?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  session?: Maybe<SessionUpdateOneRequiredInput>,
  stakedAmount?: Maybe<Scalars['String']>,
  validatorController?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
};

export type NominationUpdateManyMutationInput = {
  nominatorController?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  stakedAmount?: Maybe<Scalars['String']>,
  validatorController?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
};

export type NominationWhereInput = {
  AND?: Maybe<Array<NominationWhereInput>>,
  NOT?: Maybe<Array<NominationWhereInput>>,
  OR?: Maybe<Array<NominationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  nominatorController?: Maybe<Scalars['String']>,
  nominatorController_contains?: Maybe<Scalars['String']>,
  nominatorController_ends_with?: Maybe<Scalars['String']>,
  nominatorController_gt?: Maybe<Scalars['String']>,
  nominatorController_gte?: Maybe<Scalars['String']>,
  nominatorController_in?: Maybe<Array<Scalars['String']>>,
  nominatorController_lt?: Maybe<Scalars['String']>,
  nominatorController_lte?: Maybe<Scalars['String']>,
  nominatorController_not?: Maybe<Scalars['String']>,
  nominatorController_not_contains?: Maybe<Scalars['String']>,
  nominatorController_not_ends_with?: Maybe<Scalars['String']>,
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>,
  nominatorController_not_starts_with?: Maybe<Scalars['String']>,
  nominatorController_starts_with?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  nominatorStash_contains?: Maybe<Scalars['String']>,
  nominatorStash_ends_with?: Maybe<Scalars['String']>,
  nominatorStash_gt?: Maybe<Scalars['String']>,
  nominatorStash_gte?: Maybe<Scalars['String']>,
  nominatorStash_in?: Maybe<Array<Scalars['String']>>,
  nominatorStash_lt?: Maybe<Scalars['String']>,
  nominatorStash_lte?: Maybe<Scalars['String']>,
  nominatorStash_not?: Maybe<Scalars['String']>,
  nominatorStash_not_contains?: Maybe<Scalars['String']>,
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>,
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>,
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>,
  nominatorStash_starts_with?: Maybe<Scalars['String']>,
  session?: Maybe<SessionWhereInput>,
  stakedAmount?: Maybe<Scalars['String']>,
  stakedAmount_contains?: Maybe<Scalars['String']>,
  stakedAmount_ends_with?: Maybe<Scalars['String']>,
  stakedAmount_gt?: Maybe<Scalars['String']>,
  stakedAmount_gte?: Maybe<Scalars['String']>,
  stakedAmount_in?: Maybe<Array<Scalars['String']>>,
  stakedAmount_lt?: Maybe<Scalars['String']>,
  stakedAmount_lte?: Maybe<Scalars['String']>,
  stakedAmount_not?: Maybe<Scalars['String']>,
  stakedAmount_not_contains?: Maybe<Scalars['String']>,
  stakedAmount_not_ends_with?: Maybe<Scalars['String']>,
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>,
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>,
  stakedAmount_starts_with?: Maybe<Scalars['String']>,
  validatorController?: Maybe<Scalars['String']>,
  validatorController_contains?: Maybe<Scalars['String']>,
  validatorController_ends_with?: Maybe<Scalars['String']>,
  validatorController_gt?: Maybe<Scalars['String']>,
  validatorController_gte?: Maybe<Scalars['String']>,
  validatorController_in?: Maybe<Array<Scalars['String']>>,
  validatorController_lt?: Maybe<Scalars['String']>,
  validatorController_lte?: Maybe<Scalars['String']>,
  validatorController_not?: Maybe<Scalars['String']>,
  validatorController_not_contains?: Maybe<Scalars['String']>,
  validatorController_not_ends_with?: Maybe<Scalars['String']>,
  validatorController_not_in?: Maybe<Array<Scalars['String']>>,
  validatorController_not_starts_with?: Maybe<Scalars['String']>,
  validatorController_starts_with?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
  validatorStash_contains?: Maybe<Scalars['String']>,
  validatorStash_ends_with?: Maybe<Scalars['String']>,
  validatorStash_gt?: Maybe<Scalars['String']>,
  validatorStash_gte?: Maybe<Scalars['String']>,
  validatorStash_in?: Maybe<Array<Scalars['String']>>,
  validatorStash_lt?: Maybe<Scalars['String']>,
  validatorStash_lte?: Maybe<Scalars['String']>,
  validatorStash_not?: Maybe<Scalars['String']>,
  validatorStash_not_contains?: Maybe<Scalars['String']>,
  validatorStash_not_ends_with?: Maybe<Scalars['String']>,
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>,
  validatorStash_not_starts_with?: Maybe<Scalars['String']>,
  validatorStash_starts_with?: Maybe<Scalars['String']>,
};

export type NominationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type NotificationPreferences = {
   __typename?: 'NotificationPreferences',
  newProposal?: Maybe<Scalars['Boolean']>,
  ownProposal?: Maybe<Scalars['Boolean']>,
  postCreated?: Maybe<Scalars['Boolean']>,
  postParticipated?: Maybe<Scalars['Boolean']>,
};

export type NotificationPreferencesInput = {
  newProposal?: Maybe<Scalars['Boolean']>,
  ownProposal?: Maybe<Scalars['Boolean']>,
  postCreated?: Maybe<Scalars['Boolean']>,
  postParticipated?: Maybe<Scalars['Boolean']>,
};

export type OfflineValidator = Node & {
   __typename?: 'OfflineValidator',
  id: Scalars['ID'],
  others: Array<Scalars['Json']>,
  own: Scalars['String'],
  sessionIndex: Session,
  total: Scalars['String'],
  validatorId: Scalars['String'],
};

export type OfflineValidatorConnection = {
   __typename?: 'OfflineValidatorConnection',
  aggregate: AggregateOfflineValidator,
  edges: Array<Maybe<OfflineValidatorEdge>>,
  pageInfo: PageInfo,
};

export type OfflineValidatorCreateInput = {
  id?: Maybe<Scalars['ID']>,
  others?: Maybe<OfflineValidatorCreateothersInput>,
  own: Scalars['String'],
  sessionIndex: SessionCreateOneInput,
  total: Scalars['String'],
  validatorId: Scalars['String'],
};

export type OfflineValidatorCreateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>,
};

export type OfflineValidatorEdge = {
   __typename?: 'OfflineValidatorEdge',
  cursor: Scalars['String'],
  node: OfflineValidator,
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
   __typename?: 'OfflineValidatorPreviousValues',
  id: Scalars['ID'],
  others: Array<Scalars['Json']>,
  own: Scalars['String'],
  total: Scalars['String'],
  validatorId: Scalars['String'],
};

export type OfflineValidatorSubscriptionPayload = {
   __typename?: 'OfflineValidatorSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<OfflineValidator>,
  previousValues?: Maybe<OfflineValidatorPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type OfflineValidatorSubscriptionWhereInput = {
  AND?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>,
  NOT?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>,
  OR?: Maybe<Array<OfflineValidatorSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<OfflineValidatorWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type OfflineValidatorUpdateInput = {
  others?: Maybe<OfflineValidatorUpdateothersInput>,
  own?: Maybe<Scalars['String']>,
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
  total?: Maybe<Scalars['String']>,
  validatorId?: Maybe<Scalars['String']>,
};

export type OfflineValidatorUpdateManyMutationInput = {
  others?: Maybe<OfflineValidatorUpdateothersInput>,
  own?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['String']>,
  validatorId?: Maybe<Scalars['String']>,
};

export type OfflineValidatorUpdateothersInput = {
  set?: Maybe<Array<Scalars['Json']>>,
};

export type OfflineValidatorWhereInput = {
  AND?: Maybe<Array<OfflineValidatorWhereInput>>,
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>,
  OR?: Maybe<Array<OfflineValidatorWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  own?: Maybe<Scalars['String']>,
  own_contains?: Maybe<Scalars['String']>,
  own_ends_with?: Maybe<Scalars['String']>,
  own_gt?: Maybe<Scalars['String']>,
  own_gte?: Maybe<Scalars['String']>,
  own_in?: Maybe<Array<Scalars['String']>>,
  own_lt?: Maybe<Scalars['String']>,
  own_lte?: Maybe<Scalars['String']>,
  own_not?: Maybe<Scalars['String']>,
  own_not_contains?: Maybe<Scalars['String']>,
  own_not_ends_with?: Maybe<Scalars['String']>,
  own_not_in?: Maybe<Array<Scalars['String']>>,
  own_not_starts_with?: Maybe<Scalars['String']>,
  own_starts_with?: Maybe<Scalars['String']>,
  sessionIndex?: Maybe<SessionWhereInput>,
  total?: Maybe<Scalars['String']>,
  total_contains?: Maybe<Scalars['String']>,
  total_ends_with?: Maybe<Scalars['String']>,
  total_gt?: Maybe<Scalars['String']>,
  total_gte?: Maybe<Scalars['String']>,
  total_in?: Maybe<Array<Scalars['String']>>,
  total_lt?: Maybe<Scalars['String']>,
  total_lte?: Maybe<Scalars['String']>,
  total_not?: Maybe<Scalars['String']>,
  total_not_contains?: Maybe<Scalars['String']>,
  total_not_ends_with?: Maybe<Scalars['String']>,
  total_not_in?: Maybe<Array<Scalars['String']>>,
  total_not_starts_with?: Maybe<Scalars['String']>,
  total_starts_with?: Maybe<Scalars['String']>,
  validatorId?: Maybe<Scalars['String']>,
  validatorId_contains?: Maybe<Scalars['String']>,
  validatorId_ends_with?: Maybe<Scalars['String']>,
  validatorId_gt?: Maybe<Scalars['String']>,
  validatorId_gte?: Maybe<Scalars['String']>,
  validatorId_in?: Maybe<Array<Scalars['String']>>,
  validatorId_lt?: Maybe<Scalars['String']>,
  validatorId_lte?: Maybe<Scalars['String']>,
  validatorId_not?: Maybe<Scalars['String']>,
  validatorId_not_contains?: Maybe<Scalars['String']>,
  validatorId_not_ends_with?: Maybe<Scalars['String']>,
  validatorId_not_in?: Maybe<Array<Scalars['String']>>,
  validatorId_not_starts_with?: Maybe<Scalars['String']>,
  validatorId_starts_with?: Maybe<Scalars['String']>,
};

export type OfflineValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Onchain_Links = {
   __typename?: 'onchain_links',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  onchain_motion: Array<Maybe<Motion>>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal: Array<Maybe<Proposal>>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum: Array<Maybe<Referendum>>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  onchain_treasury_spend_proposal: Array<Maybe<TreasurySpendProposal>>,
  post: Posts,
  post_id: Scalars['Int'],
  proposer_address: Scalars['String'],
};


export type Onchain_LinksOnchain_MotionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion>
};


export type Onchain_LinksOnchain_ProposalArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal>
};


export type Onchain_LinksOnchain_ReferendumArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReferendumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum>
};


export type Onchain_LinksOnchain_Treasury_Spend_ProposalArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal>
};

export type Onchain_Links_Aggregate = {
   __typename?: 'onchain_links_aggregate',
  aggregate?: Maybe<Onchain_Links_Aggregate_Fields>,
  nodes: Array<Onchain_Links>,
};

export type Onchain_Links_Aggregate_Fields = {
   __typename?: 'onchain_links_aggregate_fields',
  avg?: Maybe<Onchain_Links_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Onchain_Links_Max_Fields>,
  min?: Maybe<Onchain_Links_Min_Fields>,
  stddev?: Maybe<Onchain_Links_Stddev_Fields>,
  stddev_pop?: Maybe<Onchain_Links_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Onchain_Links_Stddev_Samp_Fields>,
  sum?: Maybe<Onchain_Links_Sum_Fields>,
  var_pop?: Maybe<Onchain_Links_Var_Pop_Fields>,
  var_samp?: Maybe<Onchain_Links_Var_Samp_Fields>,
  variance?: Maybe<Onchain_Links_Variance_Fields>,
};


export type Onchain_Links_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onchain_Links_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Onchain_Links_Aggregate_Order_By = {
  avg?: Maybe<Onchain_Links_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Onchain_Links_Max_Order_By>,
  min?: Maybe<Onchain_Links_Min_Order_By>,
  stddev?: Maybe<Onchain_Links_Stddev_Order_By>,
  stddev_pop?: Maybe<Onchain_Links_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Onchain_Links_Stddev_Samp_Order_By>,
  sum?: Maybe<Onchain_Links_Sum_Order_By>,
  var_pop?: Maybe<Onchain_Links_Var_Pop_Order_By>,
  var_samp?: Maybe<Onchain_Links_Var_Samp_Order_By>,
  variance?: Maybe<Onchain_Links_Variance_Order_By>,
};

export type Onchain_Links_Arr_Rel_Insert_Input = {
  data: Array<Onchain_Links_Insert_Input>,
  on_conflict?: Maybe<Onchain_Links_On_Conflict>,
};

export type Onchain_Links_Avg_Fields = {
   __typename?: 'onchain_links_avg_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Avg_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>,
  _not?: Maybe<Onchain_Links_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  onchain_motion_id?: Maybe<Int_Comparison_Exp>,
  onchain_proposal_id?: Maybe<Int_Comparison_Exp>,
  onchain_referendum_id?: Maybe<Int_Comparison_Exp>,
  onchain_treasury_proposal_id?: Maybe<Int_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  proposer_address?: Maybe<String_Comparison_Exp>,
};

export enum Onchain_Links_Constraint {
  OnchainLinksOnchainMotionIdKey = 'onchain_links_onchain_motion_id_key',
  OnchainLinksOnchainReferendumIdKey = 'onchain_links_onchain_referendum_id_key',
  OnchainProposalsChainDbIdKey = 'onchain_proposals_chain_db_id_key',
  ProposalsPkey = 'proposals_pkey',
  ProposalsPostIdKey = 'proposals_post_id_key'
}

export type Onchain_Links_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Onchain_Links_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Max_Fields = {
   __typename?: 'onchain_links_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export type Onchain_Links_Min_Fields = {
   __typename?: 'onchain_links_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export type Onchain_Links_Mutation_Response = {
   __typename?: 'onchain_links_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Onchain_Links>,
};

export type Onchain_Links_Obj_Rel_Insert_Input = {
  data: Onchain_Links_Insert_Input,
  on_conflict?: Maybe<Onchain_Links_On_Conflict>,
};

export type Onchain_Links_On_Conflict = {
  constraint: Onchain_Links_Constraint,
  update_columns: Array<Onchain_Links_Update_Column>,
  where?: Maybe<Onchain_Links_Bool_Exp>,
};

export type Onchain_Links_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export enum Onchain_Links_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  OnchainMotionId = 'onchain_motion_id',
  OnchainProposalId = 'onchain_proposal_id',
  OnchainReferendumId = 'onchain_referendum_id',
  OnchainTreasuryProposalId = 'onchain_treasury_proposal_id',
  PostId = 'post_id',
  ProposerAddress = 'proposer_address'
}

export type Onchain_Links_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Stddev_Fields = {
   __typename?: 'onchain_links_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Stddev_Pop_Fields = {
   __typename?: 'onchain_links_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Stddev_Samp_Fields = {
   __typename?: 'onchain_links_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Sum_Fields = {
   __typename?: 'onchain_links_sum_fields',
  id?: Maybe<Scalars['Int']>,
  onchain_motion_id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Onchain_Links_Sum_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export enum Onchain_Links_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  OnchainMotionId = 'onchain_motion_id',
  OnchainProposalId = 'onchain_proposal_id',
  OnchainReferendumId = 'onchain_referendum_id',
  OnchainTreasuryProposalId = 'onchain_treasury_proposal_id',
  PostId = 'post_id',
  ProposerAddress = 'proposer_address'
}

export type Onchain_Links_Var_Pop_Fields = {
   __typename?: 'onchain_links_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Var_Samp_Fields = {
   __typename?: 'onchain_links_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Variance_Fields = {
   __typename?: 'onchain_links_variance_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_motion_id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Variance_Order_By = {
  id?: Maybe<Order_By>,
  onchain_motion_id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  onchain_treasury_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

export type Post_Reactions = {
   __typename?: 'post_reactions',
  created_at: Scalars['timestamp'],
  id: Scalars['Int'],
  post: Posts,
  post_id: Scalars['Int'],
  reacting_user?: Maybe<User>,
  reaction: Scalars['bpchar'],
  updated_at: Scalars['timestamp'],
  user_id: Scalars['Int'],
};

export type Post_Reactions_Aggregate = {
   __typename?: 'post_reactions_aggregate',
  aggregate?: Maybe<Post_Reactions_Aggregate_Fields>,
  nodes: Array<Post_Reactions>,
};

export type Post_Reactions_Aggregate_Fields = {
   __typename?: 'post_reactions_aggregate_fields',
  avg?: Maybe<Post_Reactions_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Post_Reactions_Max_Fields>,
  min?: Maybe<Post_Reactions_Min_Fields>,
  stddev?: Maybe<Post_Reactions_Stddev_Fields>,
  stddev_pop?: Maybe<Post_Reactions_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Post_Reactions_Stddev_Samp_Fields>,
  sum?: Maybe<Post_Reactions_Sum_Fields>,
  var_pop?: Maybe<Post_Reactions_Var_Pop_Fields>,
  var_samp?: Maybe<Post_Reactions_Var_Samp_Fields>,
  variance?: Maybe<Post_Reactions_Variance_Fields>,
};


export type Post_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Reactions_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Post_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Post_Reactions_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Post_Reactions_Max_Order_By>,
  min?: Maybe<Post_Reactions_Min_Order_By>,
  stddev?: Maybe<Post_Reactions_Stddev_Order_By>,
  stddev_pop?: Maybe<Post_Reactions_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Post_Reactions_Stddev_Samp_Order_By>,
  sum?: Maybe<Post_Reactions_Sum_Order_By>,
  var_pop?: Maybe<Post_Reactions_Var_Pop_Order_By>,
  var_samp?: Maybe<Post_Reactions_Var_Samp_Order_By>,
  variance?: Maybe<Post_Reactions_Variance_Order_By>,
};

export type Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Post_Reactions_Insert_Input>,
  on_conflict?: Maybe<Post_Reactions_On_Conflict>,
};

export type Post_Reactions_Avg_Fields = {
   __typename?: 'post_reactions_avg_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Reactions_Bool_Exp>>>,
  _not?: Maybe<Post_Reactions_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Post_Reactions_Bool_Exp>>>,
  created_at?: Maybe<Timestamp_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  reaction?: Maybe<Bpchar_Comparison_Exp>,
  updated_at?: Maybe<Timestamp_Comparison_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

export enum Post_Reactions_Constraint {
  PostReactionsPkey = 'post_reactions_pkey'
}

export type Post_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Post_Reactions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  reaction?: Maybe<Scalars['bpchar']>,
  updated_at?: Maybe<Scalars['timestamp']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Post_Reactions_Max_Fields = {
   __typename?: 'post_reactions_max_fields',
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Post_Reactions_Max_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Min_Fields = {
   __typename?: 'post_reactions_min_fields',
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Post_Reactions_Min_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Mutation_Response = {
   __typename?: 'post_reactions_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Post_Reactions>,
};

export type Post_Reactions_Obj_Rel_Insert_Input = {
  data: Post_Reactions_Insert_Input,
  on_conflict?: Maybe<Post_Reactions_On_Conflict>,
};

export type Post_Reactions_On_Conflict = {
  constraint: Post_Reactions_Constraint,
  update_columns: Array<Post_Reactions_Update_Column>,
  where?: Maybe<Post_Reactions_Bool_Exp>,
};

export type Post_Reactions_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  reaction?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Post_Reactions_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  PostId = 'post_id',
  Reaction = 'reaction',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Post_Reactions_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  reaction?: Maybe<Scalars['bpchar']>,
  updated_at?: Maybe<Scalars['timestamp']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Post_Reactions_Stddev_Fields = {
   __typename?: 'post_reactions_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Stddev_Pop_Fields = {
   __typename?: 'post_reactions_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Stddev_Samp_Fields = {
   __typename?: 'post_reactions_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Sum_Fields = {
   __typename?: 'post_reactions_sum_fields',
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Post_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Post_Reactions_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  PostId = 'post_id',
  Reaction = 'reaction',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Post_Reactions_Var_Pop_Fields = {
   __typename?: 'post_reactions_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Var_Samp_Fields = {
   __typename?: 'post_reactions_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Reactions_Variance_Fields = {
   __typename?: 'post_reactions_variance_fields',
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Post_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Post_Topics = {
   __typename?: 'post_topics',
  id: Scalars['Int'],
  name: Scalars['String'],
  posts: Array<Posts>,
  posts_aggregate: Posts_Aggregate,
};


export type Post_TopicsPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


export type Post_TopicsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

export type Post_Topics_Aggregate = {
   __typename?: 'post_topics_aggregate',
  aggregate?: Maybe<Post_Topics_Aggregate_Fields>,
  nodes: Array<Post_Topics>,
};

export type Post_Topics_Aggregate_Fields = {
   __typename?: 'post_topics_aggregate_fields',
  avg?: Maybe<Post_Topics_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Post_Topics_Max_Fields>,
  min?: Maybe<Post_Topics_Min_Fields>,
  stddev?: Maybe<Post_Topics_Stddev_Fields>,
  stddev_pop?: Maybe<Post_Topics_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Post_Topics_Stddev_Samp_Fields>,
  sum?: Maybe<Post_Topics_Sum_Fields>,
  var_pop?: Maybe<Post_Topics_Var_Pop_Fields>,
  var_samp?: Maybe<Post_Topics_Var_Samp_Fields>,
  variance?: Maybe<Post_Topics_Variance_Fields>,
};


export type Post_Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Topics_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Post_Topics_Aggregate_Order_By = {
  avg?: Maybe<Post_Topics_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Post_Topics_Max_Order_By>,
  min?: Maybe<Post_Topics_Min_Order_By>,
  stddev?: Maybe<Post_Topics_Stddev_Order_By>,
  stddev_pop?: Maybe<Post_Topics_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Post_Topics_Stddev_Samp_Order_By>,
  sum?: Maybe<Post_Topics_Sum_Order_By>,
  var_pop?: Maybe<Post_Topics_Var_Pop_Order_By>,
  var_samp?: Maybe<Post_Topics_Var_Samp_Order_By>,
  variance?: Maybe<Post_Topics_Variance_Order_By>,
};

export type Post_Topics_Arr_Rel_Insert_Input = {
  data: Array<Post_Topics_Insert_Input>,
  on_conflict?: Maybe<Post_Topics_On_Conflict>,
};

export type Post_Topics_Avg_Fields = {
   __typename?: 'post_topics_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>,
  _not?: Maybe<Post_Topics_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  posts?: Maybe<Posts_Bool_Exp>,
};

export enum Post_Topics_Constraint {
  CategoriesNameKey = 'categories_name_key',
  CategoriesPkey = 'categories_pkey'
}

export type Post_Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

export type Post_Topics_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
};

export type Post_Topics_Max_Fields = {
   __typename?: 'post_topics_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Post_Topics_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Post_Topics_Min_Fields = {
   __typename?: 'post_topics_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Post_Topics_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Post_Topics_Mutation_Response = {
   __typename?: 'post_topics_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Post_Topics>,
};

export type Post_Topics_Obj_Rel_Insert_Input = {
  data: Post_Topics_Insert_Input,
  on_conflict?: Maybe<Post_Topics_On_Conflict>,
};

export type Post_Topics_On_Conflict = {
  constraint: Post_Topics_Constraint,
  update_columns: Array<Post_Topics_Update_Column>,
  where?: Maybe<Post_Topics_Bool_Exp>,
};

export type Post_Topics_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
};

export enum Post_Topics_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Topics_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Post_Topics_Stddev_Fields = {
   __typename?: 'post_topics_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Topics_Stddev_Pop_Fields = {
   __typename?: 'post_topics_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Topics_Stddev_Samp_Fields = {
   __typename?: 'post_topics_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Topics_Sum_Fields = {
   __typename?: 'post_topics_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type Post_Topics_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

export enum Post_Topics_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Topics_Var_Pop_Fields = {
   __typename?: 'post_topics_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Topics_Var_Samp_Fields = {
   __typename?: 'post_topics_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Topics_Variance_Fields = {
   __typename?: 'post_topics_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Topics_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types = {
   __typename?: 'post_types',
  id: Scalars['Int'],
  name: Scalars['String'],
  posts: Array<Posts>,
  posts_aggregate: Posts_Aggregate,
};


export type Post_TypesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


export type Post_TypesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

export type Post_Types_Aggregate = {
   __typename?: 'post_types_aggregate',
  aggregate?: Maybe<Post_Types_Aggregate_Fields>,
  nodes: Array<Post_Types>,
};

export type Post_Types_Aggregate_Fields = {
   __typename?: 'post_types_aggregate_fields',
  avg?: Maybe<Post_Types_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Post_Types_Max_Fields>,
  min?: Maybe<Post_Types_Min_Fields>,
  stddev?: Maybe<Post_Types_Stddev_Fields>,
  stddev_pop?: Maybe<Post_Types_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Post_Types_Stddev_Samp_Fields>,
  sum?: Maybe<Post_Types_Sum_Fields>,
  var_pop?: Maybe<Post_Types_Var_Pop_Fields>,
  var_samp?: Maybe<Post_Types_Var_Samp_Fields>,
  variance?: Maybe<Post_Types_Variance_Fields>,
};


export type Post_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Types_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Post_Types_Aggregate_Order_By = {
  avg?: Maybe<Post_Types_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Post_Types_Max_Order_By>,
  min?: Maybe<Post_Types_Min_Order_By>,
  stddev?: Maybe<Post_Types_Stddev_Order_By>,
  stddev_pop?: Maybe<Post_Types_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Post_Types_Stddev_Samp_Order_By>,
  sum?: Maybe<Post_Types_Sum_Order_By>,
  var_pop?: Maybe<Post_Types_Var_Pop_Order_By>,
  var_samp?: Maybe<Post_Types_Var_Samp_Order_By>,
  variance?: Maybe<Post_Types_Variance_Order_By>,
};

export type Post_Types_Arr_Rel_Insert_Input = {
  data: Array<Post_Types_Insert_Input>,
  on_conflict?: Maybe<Post_Types_On_Conflict>,
};

export type Post_Types_Avg_Fields = {
   __typename?: 'post_types_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>,
  _not?: Maybe<Post_Types_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  posts?: Maybe<Posts_Bool_Exp>,
};

export enum Post_Types_Constraint {
  PostTypesNameKey = 'post_types_name_key',
  PostTypesPkey = 'post_types_pkey'
}

export type Post_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

export type Post_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
};

export type Post_Types_Max_Fields = {
   __typename?: 'post_types_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Post_Types_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Post_Types_Min_Fields = {
   __typename?: 'post_types_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Post_Types_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Post_Types_Mutation_Response = {
   __typename?: 'post_types_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Post_Types>,
};

export type Post_Types_Obj_Rel_Insert_Input = {
  data: Post_Types_Insert_Input,
  on_conflict?: Maybe<Post_Types_On_Conflict>,
};

export type Post_Types_On_Conflict = {
  constraint: Post_Types_Constraint,
  update_columns: Array<Post_Types_Update_Column>,
  where?: Maybe<Post_Types_Bool_Exp>,
};

export type Post_Types_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
};

export enum Post_Types_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Types_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Post_Types_Stddev_Fields = {
   __typename?: 'post_types_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types_Stddev_Pop_Fields = {
   __typename?: 'post_types_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types_Stddev_Samp_Fields = {
   __typename?: 'post_types_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types_Sum_Fields = {
   __typename?: 'post_types_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type Post_Types_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

export enum Post_Types_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Types_Var_Pop_Fields = {
   __typename?: 'post_types_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types_Var_Samp_Fields = {
   __typename?: 'post_types_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type Post_Types_Variance_Fields = {
   __typename?: 'post_types_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Post_Types_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

export type Posts = {
   __typename?: 'posts',
  author?: Maybe<User>,
  author_id: Scalars['Int'],
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  content?: Maybe<Scalars['String']>,
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  onchain_link?: Maybe<Onchain_Links>,
  post_reactions: Array<Post_Reactions>,
  post_reactions_aggregate: Post_Reactions_Aggregate,
  title: Scalars['String'],
  topic: Post_Topics,
  topic_id: Scalars['Int'],
  type: Post_Types,
  type_id: Scalars['Int'],
  updated_at: Scalars['timestamptz'],
};


export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type PostsPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Reactions_Order_By>>,
  where?: Maybe<Post_Reactions_Bool_Exp>
};


export type PostsPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Reactions_Order_By>>,
  where?: Maybe<Post_Reactions_Bool_Exp>
};

export type Posts_Aggregate = {
   __typename?: 'posts_aggregate',
  aggregate?: Maybe<Posts_Aggregate_Fields>,
  nodes: Array<Posts>,
};

export type Posts_Aggregate_Fields = {
   __typename?: 'posts_aggregate_fields',
  avg?: Maybe<Posts_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Posts_Max_Fields>,
  min?: Maybe<Posts_Min_Fields>,
  stddev?: Maybe<Posts_Stddev_Fields>,
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>,
  sum?: Maybe<Posts_Sum_Fields>,
  var_pop?: Maybe<Posts_Var_Pop_Fields>,
  var_samp?: Maybe<Posts_Var_Samp_Fields>,
  variance?: Maybe<Posts_Variance_Fields>,
};


export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Posts_Max_Order_By>,
  min?: Maybe<Posts_Min_Order_By>,
  stddev?: Maybe<Posts_Stddev_Order_By>,
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>,
  sum?: Maybe<Posts_Sum_Order_By>,
  var_pop?: Maybe<Posts_Var_Pop_Order_By>,
  var_samp?: Maybe<Posts_Var_Samp_Order_By>,
  variance?: Maybe<Posts_Variance_Order_By>,
};

export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>,
  on_conflict?: Maybe<Posts_On_Conflict>,
};

export type Posts_Avg_Fields = {
   __typename?: 'posts_avg_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Avg_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>,
  _not?: Maybe<Posts_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>,
  author_id?: Maybe<Int_Comparison_Exp>,
  comments?: Maybe<Comments_Bool_Exp>,
  content?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  onchain_link?: Maybe<Onchain_Links_Bool_Exp>,
  post_reactions?: Maybe<Post_Reactions_Bool_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  topic?: Maybe<Post_Topics_Bool_Exp>,
  topic_id?: Maybe<Int_Comparison_Exp>,
  type?: Maybe<Post_Types_Bool_Exp>,
  type_id?: Maybe<Int_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

export enum Posts_Constraint {
  MessagesPkey = 'messages_pkey'
}

export type Posts_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
};

export type Posts_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>,
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_link?: Maybe<Onchain_Links_Obj_Rel_Insert_Input>,
  post_reactions?: Maybe<Post_Reactions_Arr_Rel_Insert_Input>,
  title?: Maybe<Scalars['String']>,
  topic?: Maybe<Post_Topics_Obj_Rel_Insert_Input>,
  topic_id?: Maybe<Scalars['Int']>,
  type?: Maybe<Post_Types_Obj_Rel_Insert_Input>,
  type_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Posts_Max_Fields = {
   __typename?: 'posts_max_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Posts_Min_Fields = {
   __typename?: 'posts_min_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Posts_Mutation_Response = {
   __typename?: 'posts_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Posts>,
};

export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input,
  on_conflict?: Maybe<Posts_On_Conflict>,
};

export type Posts_On_Conflict = {
  constraint: Posts_Constraint,
  update_columns: Array<Posts_Update_Column>,
  where?: Maybe<Posts_Bool_Exp>,
};

export type Posts_Order_By = {
  author_id?: Maybe<Order_By>,
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_link?: Maybe<Onchain_Links_Order_By>,
  post_reactions_aggregate?: Maybe<Post_Reactions_Aggregate_Order_By>,
  title?: Maybe<Order_By>,
  topic?: Maybe<Post_Topics_Order_By>,
  topic_id?: Maybe<Order_By>,
  type?: Maybe<Post_Types_Order_By>,
  type_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export enum Posts_Select_Column {
  AuthorId = 'author_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  Title = 'title',
  TopicId = 'topic_id',
  TypeId = 'type_id',
  UpdatedAt = 'updated_at'
}

export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Posts_Stddev_Fields = {
   __typename?: 'posts_stddev_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Stddev_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Posts_Stddev_Pop_Fields = {
   __typename?: 'posts_stddev_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Posts_Stddev_Samp_Fields = {
   __typename?: 'posts_stddev_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Posts_Sum_Fields = {
   __typename?: 'posts_sum_fields',
  author_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
};

export type Posts_Sum_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export enum Posts_Update_Column {
  AuthorId = 'author_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  Title = 'title',
  TopicId = 'topic_id',
  TypeId = 'type_id',
  UpdatedAt = 'updated_at'
}

export type Posts_Var_Pop_Fields = {
   __typename?: 'posts_var_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Posts_Var_Samp_Fields = {
   __typename?: 'posts_var_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Posts_Variance_Fields = {
   __typename?: 'posts_variance_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

export type Posts_Variance_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Preimage = Node & {
   __typename?: 'Preimage',
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id: Scalars['ID'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<Motion>,
  preimageArguments?: Maybe<Array<PreimageArgument>>,
  preimageStatus?: Maybe<Array<PreimageStatus>>,
  proposal?: Maybe<Proposal>,
  referendum?: Maybe<Referendum>,
  section: Scalars['String'],
};


export type PreimagePreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageArgumentWhereInput>
};


export type PreimagePreimageStatusArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageStatusWhereInput>
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
  aggregate: AggregatePreimageArgument,
  edges: Array<Maybe<PreimageArgumentEdge>>,
  pageInfo: PageInfo,
};

export type PreimageArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  preimage: PreimageCreateOneWithoutPreimageArgumentsInput,
  value: Scalars['String'],
};

export type PreimageArgumentCreateManyWithoutPreimageInput = {
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>,
};

export type PreimageArgumentCreateWithoutPreimageInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type PreimageArgumentEdge = {
   __typename?: 'PreimageArgumentEdge',
  cursor: Scalars['String'],
  node: PreimageArgument,
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
  NOT?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  OR?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
};

export type PreimageArgumentSubscriptionPayload = {
   __typename?: 'PreimageArgumentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PreimageArgument>,
  previousValues?: Maybe<PreimageArgumentPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type PreimageArgumentSubscriptionWhereInput = {
  AND?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>,
  OR?: Maybe<Array<PreimageArgumentSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<PreimageArgumentWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type PreimageArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageArgumentsInput>,
  value?: Maybe<Scalars['String']>,
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
  connect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  create?: Maybe<Array<PreimageArgumentCreateWithoutPreimageInput>>,
  delete?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  deleteMany?: Maybe<Array<PreimageArgumentScalarWhereInput>>,
  disconnect?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  set?: Maybe<Array<PreimageArgumentWhereUniqueInput>>,
  update?: Maybe<Array<PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput>>,
  updateMany?: Maybe<Array<PreimageArgumentUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput>>,
};

export type PreimageArgumentUpdateManyWithWhereNestedInput = {
  data: PreimageArgumentUpdateManyDataInput,
  where: PreimageArgumentScalarWhereInput,
};

export type PreimageArgumentUpdateWithoutPreimageDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type PreimageArgumentUpdateWithWhereUniqueWithoutPreimageInput = {
  data: PreimageArgumentUpdateWithoutPreimageDataInput,
  where: PreimageArgumentWhereUniqueInput,
};

export type PreimageArgumentUpsertWithWhereUniqueWithoutPreimageInput = {
  create: PreimageArgumentCreateWithoutPreimageInput,
  update: PreimageArgumentUpdateWithoutPreimageDataInput,
  where: PreimageArgumentWhereUniqueInput,
};

export type PreimageArgumentWhereInput = {
  AND?: Maybe<Array<PreimageArgumentWhereInput>>,
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>,
  OR?: Maybe<Array<PreimageArgumentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageWhereInput>,
  value?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PreimageConnection = {
   __typename?: 'PreimageConnection',
  aggregate: AggregatePreimage,
  edges: Array<Maybe<PreimageEdge>>,
  pageInfo: PageInfo,
};

export type PreimageCreateInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
};

export type PreimageCreateOneWithoutMotionInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutMotionInput>,
};

export type PreimageCreateOneWithoutPreimageArgumentsInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>,
};

export type PreimageCreateOneWithoutPreimageStatusInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>,
};

export type PreimageCreateOneWithoutProposalInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutProposalInput>,
};

export type PreimageCreateOneWithoutReferendumInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutReferendumInput>,
};

export type PreimageCreateWithoutMotionInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
};

export type PreimageCreateWithoutPreimageArgumentsInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
};

export type PreimageCreateWithoutPreimageStatusInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
};

export type PreimageCreateWithoutProposalInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
};

export type PreimageCreateWithoutReferendumInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
};

export type PreimageEdge = {
   __typename?: 'PreimageEdge',
  cursor: Scalars['String'],
  node: Preimage,
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
   __typename?: 'PreimagePreviousValues',
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id: Scalars['ID'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  section: Scalars['String'],
};

export type PreimageStatus = Node & {
   __typename?: 'PreimageStatus',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  preimage: Preimage,
  status: Scalars['String'],
};

export type PreimageStatusConnection = {
   __typename?: 'PreimageStatusConnection',
  aggregate: AggregatePreimageStatus,
  edges: Array<Maybe<PreimageStatusEdge>>,
  pageInfo: PageInfo,
};

export type PreimageStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  preimage: PreimageCreateOneWithoutPreimageStatusInput,
  status: Scalars['String'],
};

export type PreimageStatusCreateManyWithoutPreimageInput = {
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>,
};

export type PreimageStatusCreateWithoutPreimageInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
};

export type PreimageStatusEdge = {
   __typename?: 'PreimageStatusEdge',
  cursor: Scalars['String'],
  node: PreimageStatus,
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
  NOT?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  OR?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type PreimageStatusSubscriptionPayload = {
   __typename?: 'PreimageStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PreimageStatus>,
  previousValues?: Maybe<PreimageStatusPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type PreimageStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<PreimageStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<PreimageStatusWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type PreimageStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  preimage?: Maybe<PreimageUpdateOneRequiredWithoutPreimageStatusInput>,
  status?: Maybe<Scalars['String']>,
};

export type PreimageStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type PreimageStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type PreimageStatusUpdateManyWithoutPreimageInput = {
  connect?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  create?: Maybe<Array<PreimageStatusCreateWithoutPreimageInput>>,
  delete?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  deleteMany?: Maybe<Array<PreimageStatusScalarWhereInput>>,
  disconnect?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  set?: Maybe<Array<PreimageStatusWhereUniqueInput>>,
  update?: Maybe<Array<PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput>>,
  updateMany?: Maybe<Array<PreimageStatusUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput>>,
};

export type PreimageStatusUpdateManyWithWhereNestedInput = {
  data: PreimageStatusUpdateManyDataInput,
  where: PreimageStatusScalarWhereInput,
};

export type PreimageStatusUpdateWithoutPreimageDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  status?: Maybe<Scalars['String']>,
};

export type PreimageStatusUpdateWithWhereUniqueWithoutPreimageInput = {
  data: PreimageStatusUpdateWithoutPreimageDataInput,
  where: PreimageStatusWhereUniqueInput,
};

export type PreimageStatusUpsertWithWhereUniqueWithoutPreimageInput = {
  create: PreimageStatusCreateWithoutPreimageInput,
  update: PreimageStatusUpdateWithoutPreimageDataInput,
  where: PreimageStatusWhereUniqueInput,
};

export type PreimageStatusWhereInput = {
  AND?: Maybe<Array<PreimageStatusWhereInput>>,
  NOT?: Maybe<Array<PreimageStatusWhereInput>>,
  OR?: Maybe<Array<PreimageStatusWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  preimage?: Maybe<PreimageWhereInput>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PreimageSubscriptionPayload = {
   __typename?: 'PreimageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Preimage>,
  previousValues?: Maybe<PreimagePreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type PreimageSubscriptionWhereInput = {
  AND?: Maybe<Array<PreimageSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PreimageSubscriptionWhereInput>>,
  OR?: Maybe<Array<PreimageSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<PreimageWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type PreimageUpdateInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
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
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutPreimageArgumentsInput>,
  update?: Maybe<PreimageUpdateWithoutPreimageArgumentsDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutPreimageArgumentsInput>,
};

export type PreimageUpdateOneRequiredWithoutPreimageStatusInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutPreimageStatusInput>,
  update?: Maybe<PreimageUpdateWithoutPreimageStatusDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutPreimageStatusInput>,
};

export type PreimageUpdateOneWithoutMotionInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutMotionInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PreimageUpdateWithoutMotionDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutMotionInput>,
};

export type PreimageUpdateOneWithoutProposalInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutProposalInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PreimageUpdateWithoutProposalDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutProposalInput>,
};

export type PreimageUpdateOneWithoutReferendumInput = {
  connect?: Maybe<PreimageWhereUniqueInput>,
  create?: Maybe<PreimageCreateWithoutReferendumInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PreimageUpdateWithoutReferendumDataInput>,
  upsert?: Maybe<PreimageUpsertWithoutReferendumInput>,
};

export type PreimageUpdateWithoutMotionDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
};

export type PreimageUpdateWithoutPreimageArgumentsDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
};

export type PreimageUpdateWithoutPreimageStatusDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
};

export type PreimageUpdateWithoutProposalDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  referendum?: Maybe<ReferendumUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
};

export type PreimageUpdateWithoutReferendumDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutPreimageInput>,
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
};

export type PreimageUpsertWithoutMotionInput = {
  create: PreimageCreateWithoutMotionInput,
  update: PreimageUpdateWithoutMotionDataInput,
};

export type PreimageUpsertWithoutPreimageArgumentsInput = {
  create: PreimageCreateWithoutPreimageArgumentsInput,
  update: PreimageUpdateWithoutPreimageArgumentsDataInput,
};

export type PreimageUpsertWithoutPreimageStatusInput = {
  create: PreimageCreateWithoutPreimageStatusInput,
  update: PreimageUpdateWithoutPreimageStatusDataInput,
};

export type PreimageUpsertWithoutProposalInput = {
  create: PreimageCreateWithoutProposalInput,
  update: PreimageUpdateWithoutProposalDataInput,
};

export type PreimageUpsertWithoutReferendumInput = {
  create: PreimageCreateWithoutReferendumInput,
  update: PreimageUpdateWithoutReferendumDataInput,
};

export type PreimageWhereInput = {
  AND?: Maybe<Array<PreimageWhereInput>>,
  NOT?: Maybe<Array<PreimageWhereInput>>,
  OR?: Maybe<Array<PreimageWhereInput>>,
  author?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  depositAmount_contains?: Maybe<Scalars['String']>,
  depositAmount_ends_with?: Maybe<Scalars['String']>,
  depositAmount_gt?: Maybe<Scalars['String']>,
  depositAmount_gte?: Maybe<Scalars['String']>,
  depositAmount_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_lt?: Maybe<Scalars['String']>,
  depositAmount_lte?: Maybe<Scalars['String']>,
  depositAmount_not?: Maybe<Scalars['String']>,
  depositAmount_not_contains?: Maybe<Scalars['String']>,
  depositAmount_not_ends_with?: Maybe<Scalars['String']>,
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_not_starts_with?: Maybe<Scalars['String']>,
  depositAmount_starts_with?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  hash_contains?: Maybe<Scalars['String']>,
  hash_ends_with?: Maybe<Scalars['String']>,
  hash_gt?: Maybe<Scalars['String']>,
  hash_gte?: Maybe<Scalars['String']>,
  hash_in?: Maybe<Array<Scalars['String']>>,
  hash_lt?: Maybe<Scalars['String']>,
  hash_lte?: Maybe<Scalars['String']>,
  hash_not?: Maybe<Scalars['String']>,
  hash_not_contains?: Maybe<Scalars['String']>,
  hash_not_ends_with?: Maybe<Scalars['String']>,
  hash_not_in?: Maybe<Array<Scalars['String']>>,
  hash_not_starts_with?: Maybe<Scalars['String']>,
  hash_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  metaDescription?: Maybe<Scalars['String']>,
  metaDescription_contains?: Maybe<Scalars['String']>,
  metaDescription_ends_with?: Maybe<Scalars['String']>,
  metaDescription_gt?: Maybe<Scalars['String']>,
  metaDescription_gte?: Maybe<Scalars['String']>,
  metaDescription_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_lt?: Maybe<Scalars['String']>,
  metaDescription_lte?: Maybe<Scalars['String']>,
  metaDescription_not?: Maybe<Scalars['String']>,
  metaDescription_not_contains?: Maybe<Scalars['String']>,
  metaDescription_not_ends_with?: Maybe<Scalars['String']>,
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>,
  metaDescription_not_starts_with?: Maybe<Scalars['String']>,
  metaDescription_starts_with?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  method_contains?: Maybe<Scalars['String']>,
  method_ends_with?: Maybe<Scalars['String']>,
  method_gt?: Maybe<Scalars['String']>,
  method_gte?: Maybe<Scalars['String']>,
  method_in?: Maybe<Array<Scalars['String']>>,
  method_lt?: Maybe<Scalars['String']>,
  method_lte?: Maybe<Scalars['String']>,
  method_not?: Maybe<Scalars['String']>,
  method_not_contains?: Maybe<Scalars['String']>,
  method_not_ends_with?: Maybe<Scalars['String']>,
  method_not_in?: Maybe<Array<Scalars['String']>>,
  method_not_starts_with?: Maybe<Scalars['String']>,
  method_starts_with?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionWhereInput>,
  preimageArguments_every?: Maybe<PreimageArgumentWhereInput>,
  preimageArguments_none?: Maybe<PreimageArgumentWhereInput>,
  preimageArguments_some?: Maybe<PreimageArgumentWhereInput>,
  preimageStatus_every?: Maybe<PreimageStatusWhereInput>,
  preimageStatus_none?: Maybe<PreimageStatusWhereInput>,
  preimageStatus_some?: Maybe<PreimageStatusWhereInput>,
  proposal?: Maybe<ProposalWhereInput>,
  referendum?: Maybe<ReferendumWhereInput>,
  section?: Maybe<Scalars['String']>,
  section_contains?: Maybe<Scalars['String']>,
  section_ends_with?: Maybe<Scalars['String']>,
  section_gt?: Maybe<Scalars['String']>,
  section_gte?: Maybe<Scalars['String']>,
  section_in?: Maybe<Array<Scalars['String']>>,
  section_lt?: Maybe<Scalars['String']>,
  section_lte?: Maybe<Scalars['String']>,
  section_not?: Maybe<Scalars['String']>,
  section_not_contains?: Maybe<Scalars['String']>,
  section_not_ends_with?: Maybe<Scalars['String']>,
  section_not_in?: Maybe<Array<Scalars['String']>>,
  section_not_starts_with?: Maybe<Scalars['String']>,
  section_starts_with?: Maybe<Scalars['String']>,
};

export type PreimageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PrismaDatabase {
  Default = 'default'
}

export type Proposal = {
   __typename?: 'Proposal',
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  id: Scalars['Int'],
  preimage?: Maybe<Preimage>,
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
  proposalStatus?: Maybe<Array<ProposalStatus>>,
};


export type ProposalProposalStatusArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalStatusWhereInput>
};

export type ProposalConnection = {
   __typename?: 'ProposalConnection',
  aggregate: AggregateProposal,
  edges: Array<Maybe<ProposalEdge>>,
  pageInfo: PageInfo,
};

export type ProposalCreateInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>,
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
  proposalStatus?: Maybe<ProposalStatusCreateManyWithoutProposalInput>,
};

export type ProposalCreateOneWithoutPreimageInput = {
  connect?: Maybe<ProposalWhereUniqueInput>,
  create?: Maybe<ProposalCreateWithoutPreimageInput>,
};

export type ProposalCreateOneWithoutProposalStatusInput = {
  connect?: Maybe<ProposalWhereUniqueInput>,
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>,
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
  preimage?: Maybe<PreimageCreateOneWithoutProposalInput>,
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
};

export type ProposalEdge = {
   __typename?: 'ProposalEdge',
  cursor: Scalars['String'],
  node: Proposal,
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
   __typename?: 'ProposalPreviousValues',
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  id: Scalars['Int'],
  preimageHash: Scalars['String'],
  proposalId: Scalars['Int'],
};

export type ProposalStatus = Node & {
   __typename?: 'ProposalStatus',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  proposal: Proposal,
  status: Scalars['String'],
};

export type ProposalStatusConnection = {
   __typename?: 'ProposalStatusConnection',
  aggregate: AggregateProposalStatus,
  edges: Array<Maybe<ProposalStatusEdge>>,
  pageInfo: PageInfo,
};

export type ProposalStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  proposal: ProposalCreateOneWithoutProposalStatusInput,
  status: Scalars['String'],
};

export type ProposalStatusCreateManyWithoutProposalInput = {
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>,
};

export type ProposalStatusCreateWithoutProposalInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
};

export type ProposalStatusEdge = {
   __typename?: 'ProposalStatusEdge',
  cursor: Scalars['String'],
  node: ProposalStatus,
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
  NOT?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  OR?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type ProposalStatusSubscriptionPayload = {
   __typename?: 'ProposalStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<ProposalStatus>,
  previousValues?: Maybe<ProposalStatusPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type ProposalStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<ProposalStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<ProposalStatusWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type ProposalStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  proposal?: Maybe<ProposalUpdateOneRequiredWithoutProposalStatusInput>,
  status?: Maybe<Scalars['String']>,
};

export type ProposalStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type ProposalStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type ProposalStatusUpdateManyWithoutProposalInput = {
  connect?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  create?: Maybe<Array<ProposalStatusCreateWithoutProposalInput>>,
  delete?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ProposalStatusScalarWhereInput>>,
  disconnect?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  set?: Maybe<Array<ProposalStatusWhereUniqueInput>>,
  update?: Maybe<Array<ProposalStatusUpdateWithWhereUniqueWithoutProposalInput>>,
  updateMany?: Maybe<Array<ProposalStatusUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ProposalStatusUpsertWithWhereUniqueWithoutProposalInput>>,
};

export type ProposalStatusUpdateManyWithWhereNestedInput = {
  data: ProposalStatusUpdateManyDataInput,
  where: ProposalStatusScalarWhereInput,
};

export type ProposalStatusUpdateWithoutProposalDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  status?: Maybe<Scalars['String']>,
};

export type ProposalStatusUpdateWithWhereUniqueWithoutProposalInput = {
  data: ProposalStatusUpdateWithoutProposalDataInput,
  where: ProposalStatusWhereUniqueInput,
};

export type ProposalStatusUpsertWithWhereUniqueWithoutProposalInput = {
  create: ProposalStatusCreateWithoutProposalInput,
  update: ProposalStatusUpdateWithoutProposalDataInput,
  where: ProposalStatusWhereUniqueInput,
};

export type ProposalStatusWhereInput = {
  AND?: Maybe<Array<ProposalStatusWhereInput>>,
  NOT?: Maybe<Array<ProposalStatusWhereInput>>,
  OR?: Maybe<Array<ProposalStatusWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  proposal?: Maybe<ProposalWhereInput>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ProposalSubscriptionPayload = {
   __typename?: 'ProposalSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Proposal>,
  previousValues?: Maybe<ProposalPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type ProposalSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>,
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<ProposalWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type ProposalUpdateInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  proposalStatus?: Maybe<ProposalStatusUpdateManyWithoutProposalInput>,
};

export type ProposalUpdateManyMutationInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type ProposalUpdateOneRequiredWithoutProposalStatusInput = {
  connect?: Maybe<ProposalWhereUniqueInput>,
  create?: Maybe<ProposalCreateWithoutProposalStatusInput>,
  update?: Maybe<ProposalUpdateWithoutProposalStatusDataInput>,
  upsert?: Maybe<ProposalUpsertWithoutProposalStatusInput>,
};

export type ProposalUpdateOneWithoutPreimageInput = {
  connect?: Maybe<ProposalWhereUniqueInput>,
  create?: Maybe<ProposalCreateWithoutPreimageInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
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
  preimage?: Maybe<PreimageUpdateOneWithoutProposalInput>,
  preimageHash?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type ProposalUpsertWithoutPreimageInput = {
  create: ProposalCreateWithoutPreimageInput,
  update: ProposalUpdateWithoutPreimageDataInput,
};

export type ProposalUpsertWithoutProposalStatusInput = {
  create: ProposalCreateWithoutProposalStatusInput,
  update: ProposalUpdateWithoutProposalStatusDataInput,
};

export type ProposalWhereInput = {
  AND?: Maybe<Array<ProposalWhereInput>>,
  NOT?: Maybe<Array<ProposalWhereInput>>,
  OR?: Maybe<Array<ProposalWhereInput>>,
  author?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  depositAmount_contains?: Maybe<Scalars['String']>,
  depositAmount_ends_with?: Maybe<Scalars['String']>,
  depositAmount_gt?: Maybe<Scalars['String']>,
  depositAmount_gte?: Maybe<Scalars['String']>,
  depositAmount_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_lt?: Maybe<Scalars['String']>,
  depositAmount_lte?: Maybe<Scalars['String']>,
  depositAmount_not?: Maybe<Scalars['String']>,
  depositAmount_not_contains?: Maybe<Scalars['String']>,
  depositAmount_not_ends_with?: Maybe<Scalars['String']>,
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_not_starts_with?: Maybe<Scalars['String']>,
  depositAmount_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  preimage?: Maybe<PreimageWhereInput>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  proposalId_gt?: Maybe<Scalars['Int']>,
  proposalId_gte?: Maybe<Scalars['Int']>,
  proposalId_in?: Maybe<Array<Scalars['Int']>>,
  proposalId_lt?: Maybe<Scalars['Int']>,
  proposalId_lte?: Maybe<Scalars['Int']>,
  proposalId_not?: Maybe<Scalars['Int']>,
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>,
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>,
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>,
};

export type ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal = {
  AND?: Maybe<Array<ProposalWhereInput>>,
  NOT?: Maybe<Array<ProposalWhereInput>>,
  OR?: Maybe<Array<ProposalWhereInput>>,
  author?: Maybe<Scalars['String']>,
  author_contains?: Maybe<Scalars['String']>,
  author_ends_with?: Maybe<Scalars['String']>,
  author_gt?: Maybe<Scalars['String']>,
  author_gte?: Maybe<Scalars['String']>,
  author_in?: Maybe<Array<Scalars['String']>>,
  author_lt?: Maybe<Scalars['String']>,
  author_lte?: Maybe<Scalars['String']>,
  author_not?: Maybe<Scalars['String']>,
  author_not_contains?: Maybe<Scalars['String']>,
  author_not_ends_with?: Maybe<Scalars['String']>,
  author_not_in?: Maybe<Array<Scalars['String']>>,
  author_not_starts_with?: Maybe<Scalars['String']>,
  author_starts_with?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  depositAmount_contains?: Maybe<Scalars['String']>,
  depositAmount_ends_with?: Maybe<Scalars['String']>,
  depositAmount_gt?: Maybe<Scalars['String']>,
  depositAmount_gte?: Maybe<Scalars['String']>,
  depositAmount_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_lt?: Maybe<Scalars['String']>,
  depositAmount_lte?: Maybe<Scalars['String']>,
  depositAmount_not?: Maybe<Scalars['String']>,
  depositAmount_not_contains?: Maybe<Scalars['String']>,
  depositAmount_not_ends_with?: Maybe<Scalars['String']>,
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>,
  depositAmount_not_starts_with?: Maybe<Scalars['String']>,
  depositAmount_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  preimage?: Maybe<PreimageWhereInput>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  proposalId_gt?: Maybe<Scalars['Int']>,
  proposalId_gte?: Maybe<Scalars['Int']>,
  proposalId_in?: Maybe<Array<Scalars['Int']>>,
  proposalId_lt?: Maybe<Scalars['Int']>,
  proposalId_lte?: Maybe<Scalars['Int']>,
  proposalId_not?: Maybe<Scalars['Int']>,
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>,
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>,
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>,
};

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type PublicUser = {
   __typename?: 'PublicUser',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  notification?: Maybe<NotificationPreferences>,
  subscription?: Maybe<Subscription>,
  token?: Maybe<Token>,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<PublicUser>>>,
};


export type QuerySubscriptionArgs = {
  post_id: Scalars['Int']
};


export type QueryUserArgs = {
  id: Scalars['Int']
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>
};

export type Query_Root = {
   __typename?: 'query_root',
  blockIndex?: Maybe<BlockIndex>,
  blockIndexes: Array<Maybe<BlockIndex>>,
  blockIndexesConnection: BlockIndexConnection,
  blockNumber?: Maybe<BlockNumber>,
  blockNumbers: Array<Maybe<BlockNumber>>,
  blockNumbersConnection: BlockNumberConnection,
  comment_reactions: Array<Comment_Reactions>,
  comment_reactions_aggregate: Comment_Reactions_Aggregate,
  comment_reactions_by_pk?: Maybe<Comment_Reactions>,
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  comments_by_pk?: Maybe<Comments>,
  council?: Maybe<Council>,
  councilMember?: Maybe<CouncilMember>,
  councilMembers: Array<Maybe<CouncilMember>>,
  councilMembersConnection: CouncilMemberConnection,
  councils: Array<Maybe<Council>>,
  councilsConnection: CouncilConnection,
  era?: Maybe<Era>,
  eras: Array<Maybe<Era>>,
  erasConnection: EraConnection,
  heartBeat?: Maybe<HeartBeat>,
  heartBeats: Array<Maybe<HeartBeat>>,
  heartBeatsConnection: HeartBeatConnection,
  motion?: Maybe<Motion>,
  motionProposalArgument?: Maybe<MotionProposalArgument>,
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>,
  motionProposalArgumentsConnection: MotionProposalArgumentConnection,
  motionStatus?: Maybe<MotionStatus>,
  motionStatuses: Array<Maybe<MotionStatus>>,
  motionStatusesConnection: MotionStatusConnection,
  motions: Array<Maybe<Motion>>,
  motionsConnection: MotionConnection,
  node?: Maybe<Node>,
  nomination?: Maybe<Nomination>,
  nominations: Array<Maybe<Nomination>>,
  nominationsConnection: NominationConnection,
  notification?: Maybe<NotificationPreferences>,
  offlineValidator?: Maybe<OfflineValidator>,
  offlineValidators: Array<Maybe<OfflineValidator>>,
  offlineValidatorsConnection: OfflineValidatorConnection,
  onchain_links: Array<Onchain_Links>,
  onchain_links_aggregate: Onchain_Links_Aggregate,
  onchain_links_by_pk?: Maybe<Onchain_Links>,
  post_reactions: Array<Post_Reactions>,
  post_reactions_aggregate: Post_Reactions_Aggregate,
  post_reactions_by_pk?: Maybe<Post_Reactions>,
  post_topics: Array<Post_Topics>,
  post_topics_aggregate: Post_Topics_Aggregate,
  post_topics_by_pk?: Maybe<Post_Topics>,
  post_types: Array<Post_Types>,
  post_types_aggregate: Post_Types_Aggregate,
  post_types_by_pk?: Maybe<Post_Types>,
  posts: Array<Posts>,
  posts_aggregate: Posts_Aggregate,
  posts_by_pk?: Maybe<Posts>,
  preimage?: Maybe<Preimage>,
  preimageArgument?: Maybe<PreimageArgument>,
  preimageArguments: Array<Maybe<PreimageArgument>>,
  preimageArgumentsConnection: PreimageArgumentConnection,
  preimageStatus?: Maybe<PreimageStatus>,
  preimageStatuses: Array<Maybe<PreimageStatus>>,
  preimageStatusesConnection: PreimageStatusConnection,
  preimages: Array<Maybe<Preimage>>,
  preimagesConnection: PreimageConnection,
  proposal?: Maybe<Proposal>,
  proposalStatus?: Maybe<ProposalStatus>,
  proposalStatuses: Array<Maybe<ProposalStatus>>,
  proposalStatusesConnection: ProposalStatusConnection,
  proposals: Array<Maybe<Proposal>>,
  proposalsConnection: ProposalConnection,
  referendum?: Maybe<Referendum>,
  referendumStatus?: Maybe<ReferendumStatus>,
  referendumStatuses: Array<Maybe<ReferendumStatus>>,
  referendumStatusesConnection: ReferendumStatusConnection,
  referendums: Array<Maybe<Referendum>>,
  referendumsConnection: ReferendumConnection,
  reward?: Maybe<Reward>,
  rewards: Array<Maybe<Reward>>,
  rewardsConnection: RewardConnection,
  session?: Maybe<Session>,
  sessions: Array<Maybe<Session>>,
  sessionsConnection: SessionConnection,
  slashing?: Maybe<Slashing>,
  slashings: Array<Maybe<Slashing>>,
  slashingsConnection: SlashingConnection,
  stake?: Maybe<Stake>,
  stakes: Array<Maybe<Stake>>,
  stakesConnection: StakeConnection,
  subscription?: Maybe<Subscription>,
  token?: Maybe<Token>,
  totalIssuance?: Maybe<TotalIssuance>,
  totalIssuances: Array<Maybe<TotalIssuance>>,
  totalIssuancesConnection: TotalIssuanceConnection,
  treasurySpendProposal?: Maybe<TreasurySpendProposal>,
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>,
  treasurySpendProposalsConnection: TreasurySpendProposalConnection,
  treasuryStatus?: Maybe<TreasuryStatus>,
  treasuryStatuses: Array<Maybe<TreasuryStatus>>,
  treasuryStatusesConnection: TreasuryStatusConnection,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<PublicUser>>>,
  validator?: Maybe<Validator>,
  validators: Array<Maybe<Validator>>,
  validatorsConnection: ValidatorConnection,
};


export type Query_RootBlockIndexArgs = {
  where: BlockIndexWhereUniqueInput
};


export type Query_RootBlockIndexesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<BlockIndexOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<BlockIndexWhereInput>
};


export type Query_RootBlockIndexesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<BlockIndexOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<BlockIndexWhereInput>
};


export type Query_RootBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput
};


export type Query_RootBlockNumbersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<BlockNumberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<BlockNumberWhereInput>
};


export type Query_RootBlockNumbersConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<BlockNumberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<BlockNumberWhereInput>
};


export type Query_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>,
  where?: Maybe<Comment_Reactions_Bool_Exp>
};


export type Query_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>,
  where?: Maybe<Comment_Reactions_Bool_Exp>
};


export type Query_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int']
};


export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']
};


export type Query_RootCouncilArgs = {
  where: CouncilWhereUniqueInput
};


export type Query_RootCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput
};


export type Query_RootCouncilMembersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CouncilMemberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CouncilMemberWhereInput>
};


export type Query_RootCouncilMembersConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CouncilMemberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CouncilMemberWhereInput>
};


export type Query_RootCouncilsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CouncilOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CouncilWhereInput>
};


export type Query_RootCouncilsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CouncilOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CouncilWhereInput>
};


export type Query_RootEraArgs = {
  where: EraWhereUniqueInput
};


export type Query_RootErasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EraOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EraWhereInput>
};


export type Query_RootErasConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EraOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EraWhereInput>
};


export type Query_RootHeartBeatArgs = {
  where: HeartBeatWhereUniqueInput
};


export type Query_RootHeartBeatsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<HeartBeatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<HeartBeatWhereInput>
};


export type Query_RootHeartBeatsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<HeartBeatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<HeartBeatWhereInput>
};


export type Query_RootMotionArgs = {
  where: MotionWhereUniqueInput
};


export type Query_RootMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput
};


export type Query_RootMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type Query_RootMotionProposalArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionProposalArgumentWhereInput>
};


export type Query_RootMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput
};


export type Query_RootMotionStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionStatusWhereInput>
};


export type Query_RootMotionStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionStatusWhereInput>
};


export type Query_RootMotionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionWhereInput>
};


export type Query_RootMotionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MotionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MotionWhereInput>
};


export type Query_RootNodeArgs = {
  id: Scalars['ID']
};


export type Query_RootNominationArgs = {
  where: NominationWhereUniqueInput
};


export type Query_RootNominationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<NominationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<NominationWhereInput>
};


export type Query_RootNominationsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<NominationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<NominationWhereInput>
};


export type Query_RootOfflineValidatorArgs = {
  where: OfflineValidatorWhereUniqueInput
};


export type Query_RootOfflineValidatorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OfflineValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OfflineValidatorWhereInput>
};


export type Query_RootOfflineValidatorsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OfflineValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OfflineValidatorWhereInput>
};


export type Query_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Links_Order_By>>,
  where?: Maybe<Onchain_Links_Bool_Exp>
};


export type Query_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Links_Order_By>>,
  where?: Maybe<Onchain_Links_Bool_Exp>
};


export type Query_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int']
};


export type Query_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Reactions_Order_By>>,
  where?: Maybe<Post_Reactions_Bool_Exp>
};


export type Query_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Reactions_Order_By>>,
  where?: Maybe<Post_Reactions_Bool_Exp>
};


export type Query_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int']
};


export type Query_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


export type Query_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


export type Query_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int']
};


export type Query_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


export type Query_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


export type Query_RootPost_Types_By_PkArgs = {
  id: Scalars['Int']
};


export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']
};


export type Query_RootPreimageArgs = {
  where: PreimageWhereUniqueInput
};


export type Query_RootPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput
};


export type Query_RootPreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageArgumentWhereInput>
};


export type Query_RootPreimageArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageArgumentWhereInput>
};


export type Query_RootPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput
};


export type Query_RootPreimageStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageStatusWhereInput>
};


export type Query_RootPreimageStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageStatusWhereInput>
};


export type Query_RootPreimagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageWhereInput>
};


export type Query_RootPreimagesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PreimageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PreimageWhereInput>
};


export type Query_RootProposalArgs = {
  where: ProposalWhereUniqueInput
};


export type Query_RootProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput
};


export type Query_RootProposalStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalStatusWhereInput>
};


export type Query_RootProposalStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalStatusWhereInput>
};


export type Query_RootProposalsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalWhereInput>
};


export type Query_RootProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalWhereInput>
};


export type Query_RootReferendumArgs = {
  where: ReferendumWhereUniqueInput
};


export type Query_RootReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput
};


export type Query_RootReferendumStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReferendumStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ReferendumStatusWhereInput>
};


export type Query_RootReferendumStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReferendumStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ReferendumStatusWhereInput>
};


export type Query_RootReferendumsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReferendumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ReferendumWhereInput>
};


export type Query_RootReferendumsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReferendumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ReferendumWhereInput>
};


export type Query_RootRewardArgs = {
  where: RewardWhereUniqueInput
};


export type Query_RootRewardsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RewardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RewardWhereInput>
};


export type Query_RootRewardsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RewardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RewardWhereInput>
};


export type Query_RootSessionArgs = {
  where: SessionWhereUniqueInput
};


export type Query_RootSessionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SessionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SessionWhereInput>
};


export type Query_RootSessionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SessionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SessionWhereInput>
};


export type Query_RootSlashingArgs = {
  where: SlashingWhereUniqueInput
};


export type Query_RootSlashingsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SlashingOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SlashingWhereInput>
};


export type Query_RootSlashingsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SlashingOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SlashingWhereInput>
};


export type Query_RootStakeArgs = {
  where: StakeWhereUniqueInput
};


export type Query_RootStakesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<StakeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<StakeWhereInput>
};


export type Query_RootStakesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<StakeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<StakeWhereInput>
};


export type Query_RootSubscriptionArgs = {
  post_id: Scalars['Int']
};


export type Query_RootTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput
};


export type Query_RootTotalIssuancesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TotalIssuanceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TotalIssuanceWhereInput>
};


export type Query_RootTotalIssuancesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TotalIssuanceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TotalIssuanceWhereInput>
};


export type Query_RootTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput
};


export type Query_RootTreasurySpendProposalsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TreasurySpendProposalWhereInput>
};


export type Query_RootTreasurySpendProposalsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TreasurySpendProposalWhereInput>
};


export type Query_RootTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput
};


export type Query_RootTreasuryStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TreasuryStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TreasuryStatusWhereInput>
};


export type Query_RootTreasuryStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TreasuryStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TreasuryStatusWhereInput>
};


export type Query_RootUserArgs = {
  id: Scalars['Int']
};


export type Query_RootUsersArgs = {
  limit?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>
};


export type Query_RootValidatorArgs = {
  where: ValidatorWhereUniqueInput
};


export type Query_RootValidatorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ValidatorWhereInput>
};


export type Query_RootValidatorsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ValidatorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ValidatorWhereInput>
};

export type Referendum = {
   __typename?: 'Referendum',
  delay: Scalars['Int'],
  end: Scalars['Int'],
  id: Scalars['Int'],
  preimage?: Maybe<Preimage>,
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  referendumStatus?: Maybe<Array<ReferendumStatus>>,
  voteThreshold: Scalars['String'],
};


export type ReferendumReferendumStatusArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReferendumStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ReferendumStatusWhereInput>
};

export type ReferendumConnection = {
   __typename?: 'ReferendumConnection',
  aggregate: AggregateReferendum,
  edges: Array<Maybe<ReferendumEdge>>,
  pageInfo: PageInfo,
};

export type ReferendumCreateInput = {
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>,
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>,
  voteThreshold: Scalars['String'],
};

export type ReferendumCreateOneWithoutPreimageInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>,
  create?: Maybe<ReferendumCreateWithoutPreimageInput>,
};

export type ReferendumCreateOneWithoutReferendumStatusInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>,
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>,
};

export type ReferendumCreateWithoutPreimageInput = {
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  referendumStatus?: Maybe<ReferendumStatusCreateManyWithoutReferendumInput>,
  voteThreshold: Scalars['String'],
};

export type ReferendumCreateWithoutReferendumStatusInput = {
  delay: Scalars['Int'],
  end: Scalars['Int'],
  preimage?: Maybe<PreimageCreateOneWithoutReferendumInput>,
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  voteThreshold: Scalars['String'],
};

export type ReferendumEdge = {
   __typename?: 'ReferendumEdge',
  cursor: Scalars['String'],
  node: Referendum,
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
   __typename?: 'ReferendumPreviousValues',
  delay: Scalars['Int'],
  end: Scalars['Int'],
  id: Scalars['Int'],
  preimageHash: Scalars['String'],
  referendumId: Scalars['Int'],
  voteThreshold: Scalars['String'],
};

export type ReferendumStatus = Node & {
   __typename?: 'ReferendumStatus',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  referendum: Referendum,
  status: Scalars['String'],
};

export type ReferendumStatusConnection = {
   __typename?: 'ReferendumStatusConnection',
  aggregate: AggregateReferendumStatus,
  edges: Array<Maybe<ReferendumStatusEdge>>,
  pageInfo: PageInfo,
};

export type ReferendumStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  referendum: ReferendumCreateOneWithoutReferendumStatusInput,
  status: Scalars['String'],
};

export type ReferendumStatusCreateManyWithoutReferendumInput = {
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>,
};

export type ReferendumStatusCreateWithoutReferendumInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
};

export type ReferendumStatusEdge = {
   __typename?: 'ReferendumStatusEdge',
  cursor: Scalars['String'],
  node: ReferendumStatus,
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
  NOT?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  OR?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type ReferendumStatusSubscriptionPayload = {
   __typename?: 'ReferendumStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<ReferendumStatus>,
  previousValues?: Maybe<ReferendumStatusPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type ReferendumStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<ReferendumStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<ReferendumStatusWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type ReferendumStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  referendum?: Maybe<ReferendumUpdateOneRequiredWithoutReferendumStatusInput>,
  status?: Maybe<Scalars['String']>,
};

export type ReferendumStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type ReferendumStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type ReferendumStatusUpdateManyWithoutReferendumInput = {
  connect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  create?: Maybe<Array<ReferendumStatusCreateWithoutReferendumInput>>,
  delete?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ReferendumStatusScalarWhereInput>>,
  disconnect?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  set?: Maybe<Array<ReferendumStatusWhereUniqueInput>>,
  update?: Maybe<Array<ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput>>,
  updateMany?: Maybe<Array<ReferendumStatusUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput>>,
};

export type ReferendumStatusUpdateManyWithWhereNestedInput = {
  data: ReferendumStatusUpdateManyDataInput,
  where: ReferendumStatusScalarWhereInput,
};

export type ReferendumStatusUpdateWithoutReferendumDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  status?: Maybe<Scalars['String']>,
};

export type ReferendumStatusUpdateWithWhereUniqueWithoutReferendumInput = {
  data: ReferendumStatusUpdateWithoutReferendumDataInput,
  where: ReferendumStatusWhereUniqueInput,
};

export type ReferendumStatusUpsertWithWhereUniqueWithoutReferendumInput = {
  create: ReferendumStatusCreateWithoutReferendumInput,
  update: ReferendumStatusUpdateWithoutReferendumDataInput,
  where: ReferendumStatusWhereUniqueInput,
};

export type ReferendumStatusWhereInput = {
  AND?: Maybe<Array<ReferendumStatusWhereInput>>,
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>,
  OR?: Maybe<Array<ReferendumStatusWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  referendum?: Maybe<ReferendumWhereInput>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ReferendumSubscriptionPayload = {
   __typename?: 'ReferendumSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Referendum>,
  previousValues?: Maybe<ReferendumPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type ReferendumSubscriptionWhereInput = {
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>,
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<ReferendumWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type ReferendumUpdateInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>,
  voteThreshold?: Maybe<Scalars['String']>,
};

export type ReferendumUpdateManyMutationInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
};

export type ReferendumUpdateOneRequiredWithoutReferendumStatusInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>,
  create?: Maybe<ReferendumCreateWithoutReferendumStatusInput>,
  update?: Maybe<ReferendumUpdateWithoutReferendumStatusDataInput>,
  upsert?: Maybe<ReferendumUpsertWithoutReferendumStatusInput>,
};

export type ReferendumUpdateOneWithoutPreimageInput = {
  connect?: Maybe<ReferendumWhereUniqueInput>,
  create?: Maybe<ReferendumCreateWithoutPreimageInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ReferendumUpdateWithoutPreimageDataInput>,
  upsert?: Maybe<ReferendumUpsertWithoutPreimageInput>,
};

export type ReferendumUpdateWithoutPreimageDataInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  referendumStatus?: Maybe<ReferendumStatusUpdateManyWithoutReferendumInput>,
  voteThreshold?: Maybe<Scalars['String']>,
};

export type ReferendumUpdateWithoutReferendumStatusDataInput = {
  delay?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
  preimage?: Maybe<PreimageUpdateOneWithoutReferendumInput>,
  preimageHash?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  voteThreshold?: Maybe<Scalars['String']>,
};

export type ReferendumUpsertWithoutPreimageInput = {
  create: ReferendumCreateWithoutPreimageInput,
  update: ReferendumUpdateWithoutPreimageDataInput,
};

export type ReferendumUpsertWithoutReferendumStatusInput = {
  create: ReferendumCreateWithoutReferendumStatusInput,
  update: ReferendumUpdateWithoutReferendumStatusDataInput,
};

export type ReferendumWhereInput = {
  AND?: Maybe<Array<ReferendumWhereInput>>,
  NOT?: Maybe<Array<ReferendumWhereInput>>,
  OR?: Maybe<Array<ReferendumWhereInput>>,
  delay?: Maybe<Scalars['Int']>,
  delay_gt?: Maybe<Scalars['Int']>,
  delay_gte?: Maybe<Scalars['Int']>,
  delay_in?: Maybe<Array<Scalars['Int']>>,
  delay_lt?: Maybe<Scalars['Int']>,
  delay_lte?: Maybe<Scalars['Int']>,
  delay_not?: Maybe<Scalars['Int']>,
  delay_not_in?: Maybe<Array<Scalars['Int']>>,
  end?: Maybe<Scalars['Int']>,
  end_gt?: Maybe<Scalars['Int']>,
  end_gte?: Maybe<Scalars['Int']>,
  end_in?: Maybe<Array<Scalars['Int']>>,
  end_lt?: Maybe<Scalars['Int']>,
  end_lte?: Maybe<Scalars['Int']>,
  end_not?: Maybe<Scalars['Int']>,
  end_not_in?: Maybe<Array<Scalars['Int']>>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  preimage?: Maybe<PreimageWhereInput>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  referendumId?: Maybe<Scalars['Int']>,
  referendumId_gt?: Maybe<Scalars['Int']>,
  referendumId_gte?: Maybe<Scalars['Int']>,
  referendumId_in?: Maybe<Array<Scalars['Int']>>,
  referendumId_lt?: Maybe<Scalars['Int']>,
  referendumId_lte?: Maybe<Scalars['Int']>,
  referendumId_not?: Maybe<Scalars['Int']>,
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>,
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>,
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>,
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>,
  voteThreshold?: Maybe<Scalars['String']>,
  voteThreshold_contains?: Maybe<Scalars['String']>,
  voteThreshold_ends_with?: Maybe<Scalars['String']>,
  voteThreshold_gt?: Maybe<Scalars['String']>,
  voteThreshold_gte?: Maybe<Scalars['String']>,
  voteThreshold_in?: Maybe<Array<Scalars['String']>>,
  voteThreshold_lt?: Maybe<Scalars['String']>,
  voteThreshold_lte?: Maybe<Scalars['String']>,
  voteThreshold_not?: Maybe<Scalars['String']>,
  voteThreshold_not_contains?: Maybe<Scalars['String']>,
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>,
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>,
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>,
  voteThreshold_starts_with?: Maybe<Scalars['String']>,
};

export type ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum = {
  AND?: Maybe<Array<ReferendumWhereInput>>,
  NOT?: Maybe<Array<ReferendumWhereInput>>,
  OR?: Maybe<Array<ReferendumWhereInput>>,
  delay?: Maybe<Scalars['Int']>,
  delay_gt?: Maybe<Scalars['Int']>,
  delay_gte?: Maybe<Scalars['Int']>,
  delay_in?: Maybe<Array<Scalars['Int']>>,
  delay_lt?: Maybe<Scalars['Int']>,
  delay_lte?: Maybe<Scalars['Int']>,
  delay_not?: Maybe<Scalars['Int']>,
  delay_not_in?: Maybe<Array<Scalars['Int']>>,
  end?: Maybe<Scalars['Int']>,
  end_gt?: Maybe<Scalars['Int']>,
  end_gte?: Maybe<Scalars['Int']>,
  end_in?: Maybe<Array<Scalars['Int']>>,
  end_lt?: Maybe<Scalars['Int']>,
  end_lte?: Maybe<Scalars['Int']>,
  end_not?: Maybe<Scalars['Int']>,
  end_not_in?: Maybe<Array<Scalars['Int']>>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  preimage?: Maybe<PreimageWhereInput>,
  preimageHash?: Maybe<Scalars['String']>,
  preimageHash_contains?: Maybe<Scalars['String']>,
  preimageHash_ends_with?: Maybe<Scalars['String']>,
  preimageHash_gt?: Maybe<Scalars['String']>,
  preimageHash_gte?: Maybe<Scalars['String']>,
  preimageHash_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_lt?: Maybe<Scalars['String']>,
  preimageHash_lte?: Maybe<Scalars['String']>,
  preimageHash_not?: Maybe<Scalars['String']>,
  preimageHash_not_contains?: Maybe<Scalars['String']>,
  preimageHash_not_ends_with?: Maybe<Scalars['String']>,
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>,
  preimageHash_not_starts_with?: Maybe<Scalars['String']>,
  preimageHash_starts_with?: Maybe<Scalars['String']>,
  referendumId_gt?: Maybe<Scalars['Int']>,
  referendumId_gte?: Maybe<Scalars['Int']>,
  referendumId_in?: Maybe<Array<Scalars['Int']>>,
  referendumId_lt?: Maybe<Scalars['Int']>,
  referendumId_lte?: Maybe<Scalars['Int']>,
  referendumId_not?: Maybe<Scalars['Int']>,
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>,
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>,
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>,
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>,
  voteThreshold?: Maybe<Scalars['String']>,
  voteThreshold_contains?: Maybe<Scalars['String']>,
  voteThreshold_ends_with?: Maybe<Scalars['String']>,
  voteThreshold_gt?: Maybe<Scalars['String']>,
  voteThreshold_gte?: Maybe<Scalars['String']>,
  voteThreshold_in?: Maybe<Array<Scalars['String']>>,
  voteThreshold_lt?: Maybe<Scalars['String']>,
  voteThreshold_lte?: Maybe<Scalars['String']>,
  voteThreshold_not?: Maybe<Scalars['String']>,
  voteThreshold_not_contains?: Maybe<Scalars['String']>,
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>,
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>,
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>,
  voteThreshold_starts_with?: Maybe<Scalars['String']>,
};

export type ReferendumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  referendumId?: Maybe<Scalars['Int']>,
};

export type Reward = Node & {
   __typename?: 'Reward',
  authoredBlock: BlockNumber,
  id: Scalars['ID'],
  sessionIndex: Session,
  treasuryReward: Scalars['String'],
  validatorReward: Scalars['String'],
};

export type RewardConnection = {
   __typename?: 'RewardConnection',
  aggregate: AggregateReward,
  edges: Array<Maybe<RewardEdge>>,
  pageInfo: PageInfo,
};

export type RewardCreateInput = {
  authoredBlock: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  sessionIndex: SessionCreateOneInput,
  treasuryReward: Scalars['String'],
  validatorReward: Scalars['String'],
};

export type RewardEdge = {
   __typename?: 'RewardEdge',
  cursor: Scalars['String'],
  node: Reward,
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
  previousValues?: Maybe<RewardPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type RewardSubscriptionWhereInput = {
  AND?: Maybe<Array<RewardSubscriptionWhereInput>>,
  NOT?: Maybe<Array<RewardSubscriptionWhereInput>>,
  OR?: Maybe<Array<RewardSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<RewardWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type RewardUpdateInput = {
  authoredBlock?: Maybe<BlockNumberUpdateOneRequiredInput>,
  sessionIndex?: Maybe<SessionUpdateOneRequiredInput>,
  treasuryReward?: Maybe<Scalars['String']>,
  validatorReward?: Maybe<Scalars['String']>,
};

export type RewardUpdateManyMutationInput = {
  treasuryReward?: Maybe<Scalars['String']>,
  validatorReward?: Maybe<Scalars['String']>,
};

export type RewardWhereInput = {
  AND?: Maybe<Array<RewardWhereInput>>,
  NOT?: Maybe<Array<RewardWhereInput>>,
  OR?: Maybe<Array<RewardWhereInput>>,
  authoredBlock?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  sessionIndex?: Maybe<SessionWhereInput>,
  treasuryReward?: Maybe<Scalars['String']>,
  treasuryReward_contains?: Maybe<Scalars['String']>,
  treasuryReward_ends_with?: Maybe<Scalars['String']>,
  treasuryReward_gt?: Maybe<Scalars['String']>,
  treasuryReward_gte?: Maybe<Scalars['String']>,
  treasuryReward_in?: Maybe<Array<Scalars['String']>>,
  treasuryReward_lt?: Maybe<Scalars['String']>,
  treasuryReward_lte?: Maybe<Scalars['String']>,
  treasuryReward_not?: Maybe<Scalars['String']>,
  treasuryReward_not_contains?: Maybe<Scalars['String']>,
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>,
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>,
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>,
  treasuryReward_starts_with?: Maybe<Scalars['String']>,
  validatorReward?: Maybe<Scalars['String']>,
  validatorReward_contains?: Maybe<Scalars['String']>,
  validatorReward_ends_with?: Maybe<Scalars['String']>,
  validatorReward_gt?: Maybe<Scalars['String']>,
  validatorReward_gte?: Maybe<Scalars['String']>,
  validatorReward_in?: Maybe<Array<Scalars['String']>>,
  validatorReward_lt?: Maybe<Scalars['String']>,
  validatorReward_lte?: Maybe<Scalars['String']>,
  validatorReward_not?: Maybe<Scalars['String']>,
  validatorReward_not_contains?: Maybe<Scalars['String']>,
  validatorReward_not_ends_with?: Maybe<Scalars['String']>,
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>,
  validatorReward_not_starts_with?: Maybe<Scalars['String']>,
  validatorReward_starts_with?: Maybe<Scalars['String']>,
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
  aggregate: AggregateSession,
  edges: Array<Maybe<SessionEdge>>,
  pageInfo: PageInfo,
};

export type SessionCreateInput = {
  id?: Maybe<Scalars['ID']>,
  index: Scalars['Int'],
  start: BlockNumberCreateOneInput,
};

export type SessionCreateOneInput = {
  connect?: Maybe<SessionWhereUniqueInput>,
  create?: Maybe<SessionCreateInput>,
};

export type SessionEdge = {
   __typename?: 'SessionEdge',
  cursor: Scalars['String'],
  node: Session,
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
  previousValues?: Maybe<SessionPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type SessionSubscriptionWhereInput = {
  AND?: Maybe<Array<SessionSubscriptionWhereInput>>,
  NOT?: Maybe<Array<SessionSubscriptionWhereInput>>,
  OR?: Maybe<Array<SessionSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<SessionWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
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
  connect?: Maybe<SessionWhereUniqueInput>,
  create?: Maybe<SessionCreateInput>,
  update?: Maybe<SessionUpdateDataInput>,
  upsert?: Maybe<SessionUpsertNestedInput>,
};

export type SessionUpsertNestedInput = {
  create: SessionCreateInput,
  update: SessionUpdateDataInput,
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>,
  NOT?: Maybe<Array<SessionWhereInput>>,
  OR?: Maybe<Array<SessionWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  start?: Maybe<BlockNumberWhereInput>,
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  index?: Maybe<Scalars['Int']>,
};

export type Slashing = Node & {
   __typename?: 'Slashing',
  amount: Scalars['String'],
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  who: Scalars['String'],
};

export type SlashingConnection = {
   __typename?: 'SlashingConnection',
  aggregate: AggregateSlashing,
  edges: Array<Maybe<SlashingEdge>>,
  pageInfo: PageInfo,
};

export type SlashingCreateInput = {
  amount: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  who: Scalars['String'],
};

export type SlashingEdge = {
   __typename?: 'SlashingEdge',
  cursor: Scalars['String'],
  node: Slashing,
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
   __typename?: 'SlashingPreviousValues',
  amount: Scalars['String'],
  id: Scalars['ID'],
  who: Scalars['String'],
};

export type SlashingSubscriptionPayload = {
   __typename?: 'SlashingSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Slashing>,
  previousValues?: Maybe<SlashingPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type SlashingSubscriptionWhereInput = {
  AND?: Maybe<Array<SlashingSubscriptionWhereInput>>,
  NOT?: Maybe<Array<SlashingSubscriptionWhereInput>>,
  OR?: Maybe<Array<SlashingSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<SlashingWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type SlashingUpdateInput = {
  amount?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  who?: Maybe<Scalars['String']>,
};

export type SlashingUpdateManyMutationInput = {
  amount?: Maybe<Scalars['String']>,
  who?: Maybe<Scalars['String']>,
};

export type SlashingWhereInput = {
  AND?: Maybe<Array<SlashingWhereInput>>,
  NOT?: Maybe<Array<SlashingWhereInput>>,
  OR?: Maybe<Array<SlashingWhereInput>>,
  amount?: Maybe<Scalars['String']>,
  amount_contains?: Maybe<Scalars['String']>,
  amount_ends_with?: Maybe<Scalars['String']>,
  amount_gt?: Maybe<Scalars['String']>,
  amount_gte?: Maybe<Scalars['String']>,
  amount_in?: Maybe<Array<Scalars['String']>>,
  amount_lt?: Maybe<Scalars['String']>,
  amount_lte?: Maybe<Scalars['String']>,
  amount_not?: Maybe<Scalars['String']>,
  amount_not_contains?: Maybe<Scalars['String']>,
  amount_not_ends_with?: Maybe<Scalars['String']>,
  amount_not_in?: Maybe<Array<Scalars['String']>>,
  amount_not_starts_with?: Maybe<Scalars['String']>,
  amount_starts_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  who?: Maybe<Scalars['String']>,
  who_contains?: Maybe<Scalars['String']>,
  who_ends_with?: Maybe<Scalars['String']>,
  who_gt?: Maybe<Scalars['String']>,
  who_gte?: Maybe<Scalars['String']>,
  who_in?: Maybe<Array<Scalars['String']>>,
  who_lt?: Maybe<Scalars['String']>,
  who_lte?: Maybe<Scalars['String']>,
  who_not?: Maybe<Scalars['String']>,
  who_not_contains?: Maybe<Scalars['String']>,
  who_not_ends_with?: Maybe<Scalars['String']>,
  who_not_in?: Maybe<Array<Scalars['String']>>,
  who_not_starts_with?: Maybe<Scalars['String']>,
  who_starts_with?: Maybe<Scalars['String']>,
};

export type SlashingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  who?: Maybe<Scalars['String']>,
};

export type Stake = Node & {
   __typename?: 'Stake',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  totalStake: Scalars['String'],
};

export type StakeConnection = {
   __typename?: 'StakeConnection',
  aggregate: AggregateStake,
  edges: Array<Maybe<StakeEdge>>,
  pageInfo: PageInfo,
};

export type StakeCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  totalStake: Scalars['String'],
};

export type StakeEdge = {
   __typename?: 'StakeEdge',
  cursor: Scalars['String'],
  node: Stake,
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
  previousValues?: Maybe<StakePreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type StakeSubscriptionWhereInput = {
  AND?: Maybe<Array<StakeSubscriptionWhereInput>>,
  NOT?: Maybe<Array<StakeSubscriptionWhereInput>>,
  OR?: Maybe<Array<StakeSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<StakeWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type StakeUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  totalStake?: Maybe<Scalars['String']>,
};

export type StakeUpdateManyMutationInput = {
  totalStake?: Maybe<Scalars['String']>,
};

export type StakeWhereInput = {
  AND?: Maybe<Array<StakeWhereInput>>,
  NOT?: Maybe<Array<StakeWhereInput>>,
  OR?: Maybe<Array<StakeWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  totalStake?: Maybe<Scalars['String']>,
  totalStake_contains?: Maybe<Scalars['String']>,
  totalStake_ends_with?: Maybe<Scalars['String']>,
  totalStake_gt?: Maybe<Scalars['String']>,
  totalStake_gte?: Maybe<Scalars['String']>,
  totalStake_in?: Maybe<Array<Scalars['String']>>,
  totalStake_lt?: Maybe<Scalars['String']>,
  totalStake_lte?: Maybe<Scalars['String']>,
  totalStake_not?: Maybe<Scalars['String']>,
  totalStake_not_contains?: Maybe<Scalars['String']>,
  totalStake_not_ends_with?: Maybe<Scalars['String']>,
  totalStake_not_in?: Maybe<Array<Scalars['String']>>,
  totalStake_not_starts_with?: Maybe<Scalars['String']>,
  totalStake_starts_with?: Maybe<Scalars['String']>,
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  subscribed?: Maybe<Scalars['Boolean']>,
};

export type Subscription_Root = {
   __typename?: 'subscription_root',
  comment_reactions: Array<Comment_Reactions>,
  comment_reactions_aggregate: Comment_Reactions_Aggregate,
  comment_reactions_by_pk?: Maybe<Comment_Reactions>,
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  comments_by_pk?: Maybe<Comments>,
  onchain_links: Array<Onchain_Links>,
  onchain_links_aggregate: Onchain_Links_Aggregate,
  onchain_links_by_pk?: Maybe<Onchain_Links>,
  post_reactions: Array<Post_Reactions>,
  post_reactions_aggregate: Post_Reactions_Aggregate,
  post_reactions_by_pk?: Maybe<Post_Reactions>,
  post_topics: Array<Post_Topics>,
  post_topics_aggregate: Post_Topics_Aggregate,
  post_topics_by_pk?: Maybe<Post_Topics>,
  post_types: Array<Post_Types>,
  post_types_aggregate: Post_Types_Aggregate,
  post_types_by_pk?: Maybe<Post_Types>,
  posts: Array<Posts>,
  posts_aggregate: Posts_Aggregate,
  posts_by_pk?: Maybe<Posts>,
};


export type Subscription_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>,
  where?: Maybe<Comment_Reactions_Bool_Exp>
};


export type Subscription_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>,
  where?: Maybe<Comment_Reactions_Bool_Exp>
};


export type Subscription_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int']
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']
};


export type Subscription_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Links_Order_By>>,
  where?: Maybe<Onchain_Links_Bool_Exp>
};


export type Subscription_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Links_Order_By>>,
  where?: Maybe<Onchain_Links_Bool_Exp>
};


export type Subscription_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int']
};


export type Subscription_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Reactions_Order_By>>,
  where?: Maybe<Post_Reactions_Bool_Exp>
};


export type Subscription_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Reactions_Order_By>>,
  where?: Maybe<Post_Reactions_Bool_Exp>
};


export type Subscription_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int']
};


export type Subscription_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


export type Subscription_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


export type Subscription_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int']
};


export type Subscription_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


export type Subscription_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


export type Subscription_RootPost_Types_By_PkArgs = {
  id: Scalars['Int']
};


export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']
};


export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>,
  _gt?: Maybe<Scalars['timestamp']>,
  _gte?: Maybe<Scalars['timestamp']>,
  _in?: Maybe<Array<Scalars['timestamp']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamp']>,
  _lte?: Maybe<Scalars['timestamp']>,
  _neq?: Maybe<Scalars['timestamp']>,
  _nin?: Maybe<Array<Scalars['timestamp']>>,
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

export type Token = {
   __typename?: 'Token',
  token?: Maybe<Scalars['String']>,
};

export type TotalIssuance = Node & {
   __typename?: 'TotalIssuance',
  amount: Scalars['String'],
  blockNumber: BlockNumber,
  id: Scalars['ID'],
};

export type TotalIssuanceConnection = {
   __typename?: 'TotalIssuanceConnection',
  aggregate: AggregateTotalIssuance,
  edges: Array<Maybe<TotalIssuanceEdge>>,
  pageInfo: PageInfo,
};

export type TotalIssuanceCreateInput = {
  amount: Scalars['String'],
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
};

export type TotalIssuanceEdge = {
   __typename?: 'TotalIssuanceEdge',
  cursor: Scalars['String'],
  node: TotalIssuance,
};

export enum TotalIssuanceOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type TotalIssuancePreviousValues = {
   __typename?: 'TotalIssuancePreviousValues',
  amount: Scalars['String'],
  id: Scalars['ID'],
};

export type TotalIssuanceSubscriptionPayload = {
   __typename?: 'TotalIssuanceSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<TotalIssuance>,
  previousValues?: Maybe<TotalIssuancePreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type TotalIssuanceSubscriptionWhereInput = {
  AND?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>,
  OR?: Maybe<Array<TotalIssuanceSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<TotalIssuanceWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
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
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>,
  OR?: Maybe<Array<TotalIssuanceWhereInput>>,
  amount?: Maybe<Scalars['String']>,
  amount_contains?: Maybe<Scalars['String']>,
  amount_ends_with?: Maybe<Scalars['String']>,
  amount_gt?: Maybe<Scalars['String']>,
  amount_gte?: Maybe<Scalars['String']>,
  amount_in?: Maybe<Array<Scalars['String']>>,
  amount_lt?: Maybe<Scalars['String']>,
  amount_lte?: Maybe<Scalars['String']>,
  amount_not?: Maybe<Scalars['String']>,
  amount_not_contains?: Maybe<Scalars['String']>,
  amount_not_ends_with?: Maybe<Scalars['String']>,
  amount_not_in?: Maybe<Array<Scalars['String']>>,
  amount_not_starts_with?: Maybe<Scalars['String']>,
  amount_starts_with?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
};

export type TotalIssuanceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type TreasurySpendProposal = {
   __typename?: 'TreasurySpendProposal',
  beneficiary: Scalars['String'],
  bond: Scalars['String'],
  id: Scalars['Int'],
  motion?: Maybe<Motion>,
  proposer: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  treasuryStatus?: Maybe<Array<TreasuryStatus>>,
  value: Scalars['String'],
};


export type TreasurySpendProposalTreasuryStatusArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TreasuryStatusOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TreasuryStatusWhereInput>
};

export type TreasurySpendProposalConnection = {
   __typename?: 'TreasurySpendProposalConnection',
  aggregate: AggregateTreasurySpendProposal,
  edges: Array<Maybe<TreasurySpendProposalEdge>>,
  pageInfo: PageInfo,
};

export type TreasurySpendProposalCreateInput = {
  beneficiary: Scalars['String'],
  bond: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>,
  proposer: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>,
  value: Scalars['String'],
};

export type TreasurySpendProposalCreateOneWithoutMotionInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>,
};

export type TreasurySpendProposalCreateOneWithoutTreasuryStatusInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>,
};

export type TreasurySpendProposalCreateWithoutMotionInput = {
  beneficiary: Scalars['String'],
  bond: Scalars['String'],
  proposer: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  treasuryStatus?: Maybe<TreasuryStatusCreateManyWithoutTreasurySpendProposalInput>,
  value: Scalars['String'],
};

export type TreasurySpendProposalCreateWithoutTreasuryStatusInput = {
  beneficiary: Scalars['String'],
  bond: Scalars['String'],
  motion?: Maybe<MotionCreateOneWithoutTreasurySpendProposalInput>,
  proposer: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  value: Scalars['String'],
};

export type TreasurySpendProposalEdge = {
   __typename?: 'TreasurySpendProposalEdge',
  cursor: Scalars['String'],
  node: TreasurySpendProposal,
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
   __typename?: 'TreasurySpendProposalPreviousValues',
  beneficiary: Scalars['String'],
  bond: Scalars['String'],
  id: Scalars['Int'],
  proposer: Scalars['String'],
  treasuryProposalId: Scalars['Int'],
  value: Scalars['String'],
};

export type TreasurySpendProposalSubscriptionPayload = {
   __typename?: 'TreasurySpendProposalSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<TreasurySpendProposal>,
  previousValues?: Maybe<TreasurySpendProposalPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type TreasurySpendProposalSubscriptionWhereInput = {
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>,
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<TreasurySpendProposalWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type TreasurySpendProposalUpdateInput = {
  beneficiary?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>,
  proposer?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>,
  value?: Maybe<Scalars['String']>,
};

export type TreasurySpendProposalUpdateManyMutationInput = {
  beneficiary?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  proposer?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['String']>,
};

export type TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
  create?: Maybe<TreasurySpendProposalCreateWithoutTreasuryStatusInput>,
  update?: Maybe<TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput>,
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutTreasuryStatusInput>,
};

export type TreasurySpendProposalUpdateOneWithoutMotionInput = {
  connect?: Maybe<TreasurySpendProposalWhereUniqueInput>,
  create?: Maybe<TreasurySpendProposalCreateWithoutMotionInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<TreasurySpendProposalUpdateWithoutMotionDataInput>,
  upsert?: Maybe<TreasurySpendProposalUpsertWithoutMotionInput>,
};

export type TreasurySpendProposalUpdateWithoutMotionDataInput = {
  beneficiary?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  proposer?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  treasuryStatus?: Maybe<TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput>,
  value?: Maybe<Scalars['String']>,
};

export type TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput = {
  beneficiary?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  motion?: Maybe<MotionUpdateOneWithoutTreasurySpendProposalInput>,
  proposer?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['String']>,
};

export type TreasurySpendProposalUpsertWithoutMotionInput = {
  create: TreasurySpendProposalCreateWithoutMotionInput,
  update: TreasurySpendProposalUpdateWithoutMotionDataInput,
};

export type TreasurySpendProposalUpsertWithoutTreasuryStatusInput = {
  create: TreasurySpendProposalCreateWithoutTreasuryStatusInput,
  update: TreasurySpendProposalUpdateWithoutTreasuryStatusDataInput,
};

export type TreasurySpendProposalWhereInput = {
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  beneficiary?: Maybe<Scalars['String']>,
  beneficiary_contains?: Maybe<Scalars['String']>,
  beneficiary_ends_with?: Maybe<Scalars['String']>,
  beneficiary_gt?: Maybe<Scalars['String']>,
  beneficiary_gte?: Maybe<Scalars['String']>,
  beneficiary_in?: Maybe<Array<Scalars['String']>>,
  beneficiary_lt?: Maybe<Scalars['String']>,
  beneficiary_lte?: Maybe<Scalars['String']>,
  beneficiary_not?: Maybe<Scalars['String']>,
  beneficiary_not_contains?: Maybe<Scalars['String']>,
  beneficiary_not_ends_with?: Maybe<Scalars['String']>,
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>,
  beneficiary_not_starts_with?: Maybe<Scalars['String']>,
  beneficiary_starts_with?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  bond_contains?: Maybe<Scalars['String']>,
  bond_ends_with?: Maybe<Scalars['String']>,
  bond_gt?: Maybe<Scalars['String']>,
  bond_gte?: Maybe<Scalars['String']>,
  bond_in?: Maybe<Array<Scalars['String']>>,
  bond_lt?: Maybe<Scalars['String']>,
  bond_lte?: Maybe<Scalars['String']>,
  bond_not?: Maybe<Scalars['String']>,
  bond_not_contains?: Maybe<Scalars['String']>,
  bond_not_ends_with?: Maybe<Scalars['String']>,
  bond_not_in?: Maybe<Array<Scalars['String']>>,
  bond_not_starts_with?: Maybe<Scalars['String']>,
  bond_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  motion?: Maybe<MotionWhereInput>,
  proposer?: Maybe<Scalars['String']>,
  proposer_contains?: Maybe<Scalars['String']>,
  proposer_ends_with?: Maybe<Scalars['String']>,
  proposer_gt?: Maybe<Scalars['String']>,
  proposer_gte?: Maybe<Scalars['String']>,
  proposer_in?: Maybe<Array<Scalars['String']>>,
  proposer_lt?: Maybe<Scalars['String']>,
  proposer_lte?: Maybe<Scalars['String']>,
  proposer_not?: Maybe<Scalars['String']>,
  proposer_not_contains?: Maybe<Scalars['String']>,
  proposer_not_ends_with?: Maybe<Scalars['String']>,
  proposer_not_in?: Maybe<Array<Scalars['String']>>,
  proposer_not_starts_with?: Maybe<Scalars['String']>,
  proposer_starts_with?: Maybe<Scalars['String']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
  treasuryProposalId_gt?: Maybe<Scalars['Int']>,
  treasuryProposalId_gte?: Maybe<Scalars['Int']>,
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>,
  treasuryProposalId_lt?: Maybe<Scalars['Int']>,
  treasuryProposalId_lte?: Maybe<Scalars['Int']>,
  treasuryProposalId_not?: Maybe<Scalars['Int']>,
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>,
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>,
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>,
  value?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
};

export type TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal = {
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>,
  beneficiary?: Maybe<Scalars['String']>,
  beneficiary_contains?: Maybe<Scalars['String']>,
  beneficiary_ends_with?: Maybe<Scalars['String']>,
  beneficiary_gt?: Maybe<Scalars['String']>,
  beneficiary_gte?: Maybe<Scalars['String']>,
  beneficiary_in?: Maybe<Array<Scalars['String']>>,
  beneficiary_lt?: Maybe<Scalars['String']>,
  beneficiary_lte?: Maybe<Scalars['String']>,
  beneficiary_not?: Maybe<Scalars['String']>,
  beneficiary_not_contains?: Maybe<Scalars['String']>,
  beneficiary_not_ends_with?: Maybe<Scalars['String']>,
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>,
  beneficiary_not_starts_with?: Maybe<Scalars['String']>,
  beneficiary_starts_with?: Maybe<Scalars['String']>,
  bond?: Maybe<Scalars['String']>,
  bond_contains?: Maybe<Scalars['String']>,
  bond_ends_with?: Maybe<Scalars['String']>,
  bond_gt?: Maybe<Scalars['String']>,
  bond_gte?: Maybe<Scalars['String']>,
  bond_in?: Maybe<Array<Scalars['String']>>,
  bond_lt?: Maybe<Scalars['String']>,
  bond_lte?: Maybe<Scalars['String']>,
  bond_not?: Maybe<Scalars['String']>,
  bond_not_contains?: Maybe<Scalars['String']>,
  bond_not_ends_with?: Maybe<Scalars['String']>,
  bond_not_in?: Maybe<Array<Scalars['String']>>,
  bond_not_starts_with?: Maybe<Scalars['String']>,
  bond_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  motion?: Maybe<MotionWhereInput>,
  proposer?: Maybe<Scalars['String']>,
  proposer_contains?: Maybe<Scalars['String']>,
  proposer_ends_with?: Maybe<Scalars['String']>,
  proposer_gt?: Maybe<Scalars['String']>,
  proposer_gte?: Maybe<Scalars['String']>,
  proposer_in?: Maybe<Array<Scalars['String']>>,
  proposer_lt?: Maybe<Scalars['String']>,
  proposer_lte?: Maybe<Scalars['String']>,
  proposer_not?: Maybe<Scalars['String']>,
  proposer_not_contains?: Maybe<Scalars['String']>,
  proposer_not_ends_with?: Maybe<Scalars['String']>,
  proposer_not_in?: Maybe<Array<Scalars['String']>>,
  proposer_not_starts_with?: Maybe<Scalars['String']>,
  proposer_starts_with?: Maybe<Scalars['String']>,
  treasuryProposalId_gt?: Maybe<Scalars['Int']>,
  treasuryProposalId_gte?: Maybe<Scalars['Int']>,
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>,
  treasuryProposalId_lt?: Maybe<Scalars['Int']>,
  treasuryProposalId_lte?: Maybe<Scalars['Int']>,
  treasuryProposalId_not?: Maybe<Scalars['Int']>,
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>,
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>,
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>,
  value?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_gt?: Maybe<Scalars['String']>,
  value_gte?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Scalars['String']>>,
  value_lt?: Maybe<Scalars['String']>,
  value_lte?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_not_in?: Maybe<Array<Scalars['String']>>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
};

export type TreasurySpendProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  treasuryProposalId?: Maybe<Scalars['Int']>,
};

export type TreasuryStatus = Node & {
   __typename?: 'TreasuryStatus',
  blockNumber: BlockNumber,
  id: Scalars['ID'],
  status: Scalars['String'],
  treasurySpendProposal: TreasurySpendProposal,
};

export type TreasuryStatusConnection = {
   __typename?: 'TreasuryStatusConnection',
  aggregate: AggregateTreasuryStatus,
  edges: Array<Maybe<TreasuryStatusEdge>>,
  pageInfo: PageInfo,
};

export type TreasuryStatusCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
  treasurySpendProposal: TreasurySpendProposalCreateOneWithoutTreasuryStatusInput,
};

export type TreasuryStatusCreateManyWithoutTreasurySpendProposalInput = {
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>,
};

export type TreasuryStatusCreateWithoutTreasurySpendProposalInput = {
  blockNumber: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  status: Scalars['String'],
};

export type TreasuryStatusEdge = {
   __typename?: 'TreasuryStatusEdge',
  cursor: Scalars['String'],
  node: TreasuryStatus,
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
  NOT?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  OR?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
};

export type TreasuryStatusSubscriptionPayload = {
   __typename?: 'TreasuryStatusSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<TreasuryStatus>,
  previousValues?: Maybe<TreasuryStatusPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type TreasuryStatusSubscriptionWhereInput = {
  AND?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>,
  OR?: Maybe<Array<TreasuryStatusSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<TreasuryStatusWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type TreasuryStatusUpdateInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  status?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalUpdateOneRequiredWithoutTreasuryStatusInput>,
};

export type TreasuryStatusUpdateManyDataInput = {
  status?: Maybe<Scalars['String']>,
};

export type TreasuryStatusUpdateManyMutationInput = {
  status?: Maybe<Scalars['String']>,
};

export type TreasuryStatusUpdateManyWithoutTreasurySpendProposalInput = {
  connect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  create?: Maybe<Array<TreasuryStatusCreateWithoutTreasurySpendProposalInput>>,
  delete?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  deleteMany?: Maybe<Array<TreasuryStatusScalarWhereInput>>,
  disconnect?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  set?: Maybe<Array<TreasuryStatusWhereUniqueInput>>,
  update?: Maybe<Array<TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput>>,
  updateMany?: Maybe<Array<TreasuryStatusUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput>>,
};

export type TreasuryStatusUpdateManyWithWhereNestedInput = {
  data: TreasuryStatusUpdateManyDataInput,
  where: TreasuryStatusScalarWhereInput,
};

export type TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  status?: Maybe<Scalars['String']>,
};

export type TreasuryStatusUpdateWithWhereUniqueWithoutTreasurySpendProposalInput = {
  data: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput,
  where: TreasuryStatusWhereUniqueInput,
};

export type TreasuryStatusUpsertWithWhereUniqueWithoutTreasurySpendProposalInput = {
  create: TreasuryStatusCreateWithoutTreasurySpendProposalInput,
  update: TreasuryStatusUpdateWithoutTreasurySpendProposalDataInput,
  where: TreasuryStatusWhereUniqueInput,
};

export type TreasuryStatusWhereInput = {
  AND?: Maybe<Array<TreasuryStatusWhereInput>>,
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>,
  OR?: Maybe<Array<TreasuryStatusWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  status_contains?: Maybe<Scalars['String']>,
  status_ends_with?: Maybe<Scalars['String']>,
  status_gt?: Maybe<Scalars['String']>,
  status_gte?: Maybe<Scalars['String']>,
  status_in?: Maybe<Array<Scalars['String']>>,
  status_lt?: Maybe<Scalars['String']>,
  status_lte?: Maybe<Scalars['String']>,
  status_not?: Maybe<Scalars['String']>,
  status_not_contains?: Maybe<Scalars['String']>,
  status_not_ends_with?: Maybe<Scalars['String']>,
  status_not_in?: Maybe<Array<Scalars['String']>>,
  status_not_starts_with?: Maybe<Scalars['String']>,
  status_starts_with?: Maybe<Scalars['String']>,
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>,
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type UndoEmailChangeResponse = {
   __typename?: 'UndoEmailChangeResponse',
  email?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};


export type User = {
   __typename?: 'User',
  email?: Maybe<Scalars['String']>,
  email_verified?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type Validator = Node & {
   __typename?: 'Validator',
  controller: Scalars['String'],
  id: Scalars['ID'],
  preferences: Scalars['String'],
  session: Session,
  stash: Scalars['String'],
};

export type ValidatorConnection = {
   __typename?: 'ValidatorConnection',
  aggregate: AggregateValidator,
  edges: Array<Maybe<ValidatorEdge>>,
  pageInfo: PageInfo,
};

export type ValidatorCreateInput = {
  controller: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  preferences: Scalars['String'],
  session: SessionCreateOneInput,
  stash: Scalars['String'],
};

export type ValidatorEdge = {
   __typename?: 'ValidatorEdge',
  cursor: Scalars['String'],
  node: Validator,
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
   __typename?: 'ValidatorPreviousValues',
  controller: Scalars['String'],
  id: Scalars['ID'],
  preferences: Scalars['String'],
  stash: Scalars['String'],
};

export type ValidatorSubscriptionPayload = {
   __typename?: 'ValidatorSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Validator>,
  previousValues?: Maybe<ValidatorPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type ValidatorSubscriptionWhereInput = {
  AND?: Maybe<Array<ValidatorSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ValidatorSubscriptionWhereInput>>,
  OR?: Maybe<Array<ValidatorSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<ValidatorWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type ValidatorUpdateInput = {
  controller?: Maybe<Scalars['String']>,
  preferences?: Maybe<Scalars['String']>,
  session?: Maybe<SessionUpdateOneRequiredInput>,
  stash?: Maybe<Scalars['String']>,
};

export type ValidatorUpdateManyMutationInput = {
  controller?: Maybe<Scalars['String']>,
  preferences?: Maybe<Scalars['String']>,
  stash?: Maybe<Scalars['String']>,
};

export type ValidatorWhereInput = {
  AND?: Maybe<Array<ValidatorWhereInput>>,
  NOT?: Maybe<Array<ValidatorWhereInput>>,
  OR?: Maybe<Array<ValidatorWhereInput>>,
  controller?: Maybe<Scalars['String']>,
  controller_contains?: Maybe<Scalars['String']>,
  controller_ends_with?: Maybe<Scalars['String']>,
  controller_gt?: Maybe<Scalars['String']>,
  controller_gte?: Maybe<Scalars['String']>,
  controller_in?: Maybe<Array<Scalars['String']>>,
  controller_lt?: Maybe<Scalars['String']>,
  controller_lte?: Maybe<Scalars['String']>,
  controller_not?: Maybe<Scalars['String']>,
  controller_not_contains?: Maybe<Scalars['String']>,
  controller_not_ends_with?: Maybe<Scalars['String']>,
  controller_not_in?: Maybe<Array<Scalars['String']>>,
  controller_not_starts_with?: Maybe<Scalars['String']>,
  controller_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  preferences?: Maybe<Scalars['String']>,
  preferences_contains?: Maybe<Scalars['String']>,
  preferences_ends_with?: Maybe<Scalars['String']>,
  preferences_gt?: Maybe<Scalars['String']>,
  preferences_gte?: Maybe<Scalars['String']>,
  preferences_in?: Maybe<Array<Scalars['String']>>,
  preferences_lt?: Maybe<Scalars['String']>,
  preferences_lte?: Maybe<Scalars['String']>,
  preferences_not?: Maybe<Scalars['String']>,
  preferences_not_contains?: Maybe<Scalars['String']>,
  preferences_not_ends_with?: Maybe<Scalars['String']>,
  preferences_not_in?: Maybe<Array<Scalars['String']>>,
  preferences_not_starts_with?: Maybe<Scalars['String']>,
  preferences_starts_with?: Maybe<Scalars['String']>,
  session?: Maybe<SessionWhereInput>,
  stash?: Maybe<Scalars['String']>,
  stash_contains?: Maybe<Scalars['String']>,
  stash_ends_with?: Maybe<Scalars['String']>,
  stash_gt?: Maybe<Scalars['String']>,
  stash_gte?: Maybe<Scalars['String']>,
  stash_in?: Maybe<Array<Scalars['String']>>,
  stash_lt?: Maybe<Scalars['String']>,
  stash_lte?: Maybe<Scalars['String']>,
  stash_not?: Maybe<Scalars['String']>,
  stash_not_contains?: Maybe<Scalars['String']>,
  stash_not_ends_with?: Maybe<Scalars['String']>,
  stash_not_in?: Maybe<Array<Scalars['String']>>,
  stash_not_starts_with?: Maybe<Scalars['String']>,
  stash_starts_with?: Maybe<Scalars['String']>,
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type EditCommentMutationVariables = {
  id: Scalars['uuid'],
  content: Scalars['String']
};


export type EditCommentMutation = (
  { __typename?: 'mutation_root' }
  & { update_comments: Maybe<(
    { __typename?: 'comments_mutation_response' }
    & Pick<Comments_Mutation_Response, 'affected_rows'>
  )> }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'mutation_root' }
  & { logout: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type GetCouncilMembersQueryVariables = {};


export type GetCouncilMembersQuery = (
  { __typename?: 'query_root' }
  & { councils: Array<Maybe<(
    { __typename?: 'Council' }
    & { members: Maybe<Array<(
      { __typename?: 'CouncilMember' }
      & Pick<CouncilMember, 'address'>
    )>> }
  )>> }
);

export type EditPostMutationVariables = {
  id: Scalars['Int'],
  content: Scalars['String'],
  title: Scalars['String']
};


export type EditPostMutation = (
  { __typename?: 'mutation_root' }
  & { update_posts: Maybe<(
    { __typename?: 'posts_mutation_response' }
    & Pick<Posts_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddPostCommentMutationVariables = {
  authorId: Scalars['Int'],
  content: Scalars['String'],
  postId: Scalars['Int']
};


export type AddPostCommentMutation = (
  { __typename: 'mutation_root' }
  & { insert_comments: Maybe<(
    { __typename?: 'comments_mutation_response' }
    & Pick<Comments_Mutation_Response, 'affected_rows'>
  )> }
);

export type PostReactionFieldsFragment = (
  { __typename?: 'post_reactions' }
  & Pick<Post_Reactions, 'id' | 'reaction' | 'created_at' | 'updated_at'>
  & { reacting_user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type PostReactionsQueryVariables = {
  postId: Scalars['Int']
};


export type PostReactionsQuery = (
  { __typename?: 'query_root' }
  & { post_reactions: Array<(
    { __typename?: 'post_reactions' }
    & PostReactionFieldsFragment
  )> }
);

export type CommentReactionFieldsFragment = (
  { __typename?: 'comment_reactions' }
  & Pick<Comment_Reactions, 'id' | 'reaction' | 'created_at' | 'updated_at'>
  & { reacting_user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type CommentReactionsQueryVariables = {
  commentId: Scalars['uuid']
};


export type CommentReactionsQuery = (
  { __typename?: 'query_root' }
  & { comment_reactions: Array<(
    { __typename?: 'comment_reactions' }
    & CommentReactionFieldsFragment
  )> }
);

export type AddPostReactionMutationVariables = {
  postId: Scalars['Int'],
  userId: Scalars['Int'],
  reaction: Scalars['bpchar']
};


export type AddPostReactionMutation = (
  { __typename: 'mutation_root' }
  & { insert_post_reactions: Maybe<(
    { __typename?: 'post_reactions_mutation_response' }
    & Pick<Post_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddCommentReactionMutationVariables = {
  commentId: Scalars['uuid'],
  userId: Scalars['Int'],
  reaction: Scalars['bpchar']
};


export type AddCommentReactionMutation = (
  { __typename: 'mutation_root' }
  & { insert_comment_reactions: Maybe<(
    { __typename?: 'comment_reactions_mutation_response' }
    & Pick<Comment_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeletePostReactionMutationVariables = {
  postId: Scalars['Int'],
  userId: Scalars['Int'],
  reaction: Scalars['bpchar']
};


export type DeletePostReactionMutation = (
  { __typename?: 'mutation_root' }
  & { delete_post_reactions: Maybe<(
    { __typename?: 'post_reactions_mutation_response' }
    & Pick<Post_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteCommentReactionMutationVariables = {
  commentId: Scalars['uuid'],
  userId: Scalars['Int'],
  reaction: Scalars['bpchar']
};


export type DeleteCommentReactionMutation = (
  { __typename?: 'mutation_root' }
  & { delete_comment_reactions: Maybe<(
    { __typename?: 'comment_reactions_mutation_response' }
    & Pick<Comment_Reactions_Mutation_Response, 'affected_rows'>
  )> }
);

export type ReportContentMutationVariables = {
  network: Scalars['String'],
  type: Scalars['String'],
  content_id: Scalars['String'],
  reason: Scalars['String'],
  comments: Scalars['String']
};


export type ReportContentMutation = (
  { __typename?: 'mutation_root' }
  & { reportContent: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type PostSubscribeMutationVariables = {
  postId: Scalars['Int']
};


export type PostSubscribeMutation = (
  { __typename?: 'mutation_root' }
  & { postSubscribe: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type PostUnsubscribeMutationVariables = {
  postId: Scalars['Int']
};


export type PostUnsubscribeMutation = (
  { __typename?: 'mutation_root' }
  & { postUnsubscribe: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type SubscriptionQueryVariables = {
  postId: Scalars['Int']
};


export type SubscriptionQuery = (
  { __typename?: 'query_root' }
  & { subscription: Maybe<(
    { __typename?: 'Subscription' }
    & Pick<Subscription, 'subscribed'>
  )> }
);

export type Get_Refresh_TokenQueryVariables = {};


export type Get_Refresh_TokenQuery = (
  { __typename?: 'query_root' }
  & { token: Maybe<(
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  )> }
);

export type CommentFieldsFragment = (
  { __typename?: 'comments' }
  & Pick<Comments, 'id' | 'content' | 'created_at' | 'updated_at'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )> }
);

export type AddressLoginStartMutationVariables = {
  address: Scalars['String']
};


export type AddressLoginStartMutation = (
  { __typename?: 'mutation_root' }
  & { addressLoginStart: Maybe<(
    { __typename?: 'AddressLoginType' }
    & Pick<AddressLoginType, 'message' | 'signMessage'>
  )> }
);

export type AddressLoginMutationVariables = {
  address: Scalars['String'],
  signature: Scalars['String']
};


export type AddressLoginMutation = (
  { __typename?: 'mutation_root' }
  & { addressLogin: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'username' | 'email' | 'email_verified'>
    )> }
  )> }
);

export type CreatePostMutationVariables = {
  userId: Scalars['Int'],
  content: Scalars['String'],
  topicId: Scalars['Int'],
  title: Scalars['String']
};


export type CreatePostMutation = (
  { __typename: 'mutation_root' }
  & { insert_posts: Maybe<(
    { __typename?: 'posts_mutation_response' }
    & Pick<Posts_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'posts' }
      & Pick<Posts, 'id'>
    )> }
  )> }
);

export type TopicFragment = (
  { __typename?: 'post_topics' }
  & Pick<Post_Topics, 'id' | 'name'>
);

export type Post_TopicsQueryVariables = {};


export type Post_TopicsQuery = (
  { __typename?: 'query_root' }
  & { post_topics: Array<(
    { __typename?: 'post_topics' }
    & TopicFragment
  )> }
);

export type DiscussionPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type DiscussionPostAndCommentsQueryVariables = {
  id: Scalars['Int']
};


export type DiscussionPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & DiscussionPostFragment
  )> }
);

export type LatestDiscussionPostsQueryVariables = {
  limit?: Scalars['Int']
};


export type LatestDiscussionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'username'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ) }
  )> }
);

export type LoginMutationVariables = {
  password: Scalars['String'],
  username: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'mutation_root' }
  & { login: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'username' | 'email' | 'email_verified'>
    )> }
  )> }
);

export type OnchainLinkMotionPreimageFragment = (
  { __typename?: 'Preimage' }
  & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
  & { preimageArguments: Maybe<Array<(
    { __typename?: 'PreimageArgument' }
    & Pick<PreimageArgument, 'id' | 'name' | 'value'>
  )>> }
);

export type OnchainLinkMotionTreasuryFragment = (
  { __typename?: 'TreasurySpendProposal' }
  & Pick<TreasurySpendProposal, 'beneficiary' | 'bond' | 'value'>
);

export type OnchainLinkMotionFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_referendum_id' | 'onchain_motion_id'>
  & { onchain_motion: Array<Maybe<(
    { __typename?: 'Motion' }
    & Pick<Motion, 'id' | 'memberCount' | 'method' | 'motionProposalHash'>
    & { motionStatus: Maybe<Array<(
      { __typename?: 'MotionStatus' }
      & Pick<MotionStatus, 'id' | 'status'>
    )>>, motionProposalArguments: Maybe<Array<(
      { __typename?: 'MotionProposalArgument' }
      & Pick<MotionProposalArgument, 'name' | 'value'>
    )>>, preimage: Maybe<(
      { __typename?: 'Preimage' }
      & OnchainLinkMotionPreimageFragment
    )>, treasurySpendProposal: Maybe<(
      { __typename?: 'TreasurySpendProposal' }
      & OnchainLinkMotionTreasuryFragment
    )> }
  )>> }
);

export type MotionPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkMotionFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type MotionPostAndCommentsQueryVariables = {
  id: Scalars['Int']
};


export type MotionPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & MotionPostFragment
  )> }
);

export type ChangeNotificationPreferenceMutationVariables = {
  postParticipated?: Maybe<Scalars['Boolean']>,
  postCreated?: Maybe<Scalars['Boolean']>,
  newProposal?: Maybe<Scalars['Boolean']>,
  ownProposal?: Maybe<Scalars['Boolean']>
};


export type ChangeNotificationPreferenceMutation = (
  { __typename?: 'mutation_root' }
  & { changeNotificationPreference: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type LatestMotionPostsQueryVariables = {
  postType: Scalars['Int'],
  limit?: Scalars['Int']
};


export type LatestMotionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'name'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_motion_id' | 'proposer_address'>
      & { onchain_motion: Array<Maybe<(
        { __typename?: 'Motion' }
        & Pick<Motion, 'id'>
        & { motionStatus: Maybe<Array<(
          { __typename?: 'MotionStatus' }
          & Pick<MotionStatus, 'id' | 'status'>
        )>>, preimage: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type LatestDemocracyProposalPostsQueryVariables = {
  postType: Scalars['Int'],
  postTopic: Scalars['Int'],
  limit?: Scalars['Int']
};


export type LatestDemocracyProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'name'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_proposal_id' | 'proposer_address'>
      & { onchain_proposal: Array<Maybe<(
        { __typename?: 'Proposal' }
        & Pick<Proposal, 'id'>
        & { proposalStatus: Maybe<Array<(
          { __typename?: 'ProposalStatus' }
          & Pick<ProposalStatus, 'id' | 'status'>
        )>>, preimage: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type LatestReferendaPostsQueryVariables = {
  postType: Scalars['Int'],
  limit?: Scalars['Int']
};


export type LatestReferendaPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'name'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_referendum_id' | 'proposer_address'>
      & { onchain_referendum: Array<Maybe<(
        { __typename?: 'Referendum' }
        & Pick<Referendum, 'id'>
        & { referendumStatus: Maybe<Array<(
          { __typename?: 'ReferendumStatus' }
          & Pick<ReferendumStatus, 'id' | 'status'>
        )>>, preimage: Maybe<(
          { __typename?: 'Preimage' }
          & Pick<Preimage, 'method'>
        )> }
      )>> }
    )> }
  )> }
);

export type LatestDemocracyTreasuryProposalPostsQueryVariables = {
  postType: Scalars['Int'],
  postTopic: Scalars['Int'],
  limit?: Scalars['Int']
};


export type LatestDemocracyTreasuryProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'name'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ), topic: (
      { __typename?: 'post_topics' }
      & Pick<Post_Topics, 'id' | 'name'>
    ), onchain_link: Maybe<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id' | 'onchain_treasury_proposal_id' | 'proposer_address'>
      & { onchain_treasury_spend_proposal: Array<Maybe<(
        { __typename?: 'TreasurySpendProposal' }
        & Pick<TreasurySpendProposal, 'id'>
        & { treasuryStatus: Maybe<Array<(
          { __typename?: 'TreasuryStatus' }
          & Pick<TreasuryStatus, 'id' | 'status'>
        )>> }
      )>> }
    )> }
  )> }
);

export type OnchainLinkProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_proposal_id' | 'onchain_referendum_id'>
  & { onchain_proposal: Array<Maybe<(
    { __typename?: 'Proposal' }
    & Pick<Proposal, 'id' | 'depositAmount'>
    & { proposalStatus: Maybe<Array<(
      { __typename?: 'ProposalStatus' }
      & Pick<ProposalStatus, 'id' | 'status'>
    )>>, preimage: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
      & { preimageArguments: Maybe<Array<(
        { __typename?: 'PreimageArgument' }
        & Pick<PreimageArgument, 'id' | 'name' | 'value'>
      )>> }
    )> }
  )>> }
);

export type ProposalPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkProposalFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type ProposalPostAndCommentsQueryVariables = {
  id: Scalars['Int']
};


export type ProposalPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & ProposalPostFragment
  )> }
);

export type OnchainLinkReferendumFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_referendum_id'>
  & { onchain_referendum: Array<Maybe<(
    { __typename?: 'Referendum' }
    & Pick<Referendum, 'id' | 'delay' | 'end' | 'voteThreshold'>
    & { referendumStatus: Maybe<Array<(
      { __typename?: 'ReferendumStatus' }
      & Pick<ReferendumStatus, 'status' | 'id'>
    )>>, preimage: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash' | 'id' | 'metaDescription' | 'method'>
      & { preimageArguments: Maybe<Array<(
        { __typename?: 'PreimageArgument' }
        & Pick<PreimageArgument, 'id' | 'name' | 'value'>
      )>> }
    )> }
  )>> }
);

export type ReferendumPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkReferendumFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type ReferendumPostAndCommentsQueryVariables = {
  id: Scalars['Int']
};


export type ReferendumPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & ReferendumPostFragment
  )> }
);

export type ResetPasswordMutationVariables = {
  newPassword: Scalars['String'],
  token: Scalars['String']
};


export type ResetPasswordMutation = (
  { __typename?: 'mutation_root' }
  & { resetPassword: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type RequestResetPasswordMutationVariables = {
  email: Scalars['String']
};


export type RequestResetPasswordMutation = (
  { __typename?: 'mutation_root' }
  & { requestResetPassword: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type ChangeNameMutationVariables = {
  newName: Scalars['String']
};


export type ChangeNameMutation = (
  { __typename?: 'mutation_root' }
  & { changeName: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ChangeUsernameMutationVariables = {
  username: Scalars['String']
};


export type ChangeUsernameMutation = (
  { __typename?: 'mutation_root' }
  & { changeUsername: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ChangeEmailMutationVariables = {
  email: Scalars['String']
};


export type ChangeEmailMutation = (
  { __typename?: 'mutation_root' }
  & { changeEmail: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ChangePasswordMutationVariables = {
  oldPassword: Scalars['String'],
  newPassword: Scalars['String']
};


export type ChangePasswordMutation = (
  { __typename?: 'mutation_root' }
  & { changePassword: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type AddressLinkStartMutationVariables = {
  network: Scalars['String'],
  address: Scalars['String']
};


export type AddressLinkStartMutation = (
  { __typename?: 'mutation_root' }
  & { addressLinkStart: Maybe<(
    { __typename?: 'AddressLinkType' }
    & Pick<AddressLinkType, 'sign_message' | 'message' | 'address_id'>
  )> }
);

export type AddressLinkConfirmMutationVariables = {
  address_id: Scalars['Int'],
  signature: Scalars['String']
};


export type AddressLinkConfirmMutation = (
  { __typename?: 'mutation_root' }
  & { addressLinkConfirm: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type AddressUnlinkMutationVariables = {
  address: Scalars['String']
};


export type AddressUnlinkMutation = (
  { __typename?: 'mutation_root' }
  & { addressUnlink: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export type ResendVerifyEmailTokenMutationVariables = {};


export type ResendVerifyEmailTokenMutation = (
  { __typename?: 'mutation_root' }
  & { resendVerifyEmailToken: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type SignupMutationVariables = {
  email?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  username: Scalars['String'],
  name?: Maybe<Scalars['String']>
};


export type SignupMutation = (
  { __typename?: 'mutation_root' }
  & { signup: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'username' | 'email' | 'email_verified'>
    )> }
  )> }
);

export type OnchainLinkTreasuryProposalFragment = (
  { __typename?: 'onchain_links' }
  & Pick<Onchain_Links, 'id' | 'proposer_address' | 'onchain_treasury_proposal_id' | 'onchain_motion_id'>
  & { onchain_treasury_spend_proposal: Array<Maybe<(
    { __typename?: 'TreasurySpendProposal' }
    & Pick<TreasurySpendProposal, 'id' | 'beneficiary' | 'value' | 'bond'>
    & { treasuryStatus: Maybe<Array<(
      { __typename?: 'TreasuryStatus' }
      & Pick<TreasuryStatus, 'id' | 'status'>
    )>> }
  )>> }
);

export type TreasuryProposalPostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentFieldsFragment
  )>, onchain_link: Maybe<(
    { __typename?: 'onchain_links' }
    & OnchainLinkTreasuryProposalFragment
  )>, topic: (
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  ), type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type TreasuryProposalPostAndCommentsQueryVariables = {
  id: Scalars['Int']
};


export type TreasuryProposalPostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & TreasuryProposalPostFragment
  )> }
);

export type UndoEmailChangeMutationVariables = {
  token: Scalars['String']
};


export type UndoEmailChangeMutation = (
  { __typename?: 'mutation_root' }
  & { undoEmailChange: Maybe<(
    { __typename?: 'UndoEmailChangeResponse' }
    & Pick<UndoEmailChangeResponse, 'message' | 'token' | 'email'>
  )> }
);

export type VerifyEmailMutationVariables = {
  token: Scalars['String']
};


export type VerifyEmailMutation = (
  { __typename?: 'mutation_root' }
  & { verifyEmail: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
  )> }
);

export const PostReactionFieldsFragmentDoc = gql`
    fragment postReactionFields on post_reactions {
  id
  reacting_user {
    id
  }
  reaction
  created_at
  updated_at
}
    `;
export const CommentReactionFieldsFragmentDoc = gql`
    fragment commentReactionFields on comment_reactions {
  id
  reacting_user {
    id
  }
  reaction
  created_at
  updated_at
}
    `;
export const TopicFragmentDoc = gql`
    fragment topic on post_topics {
  id
  name
}
    `;
export const CommentFieldsFragmentDoc = gql`
    fragment commentFields on comments {
  id
  author {
    id
    name
    username
  }
  content
  created_at
  updated_at
}
    `;
export const DiscussionPostFragmentDoc = gql`
    fragment discussionPost on posts {
  author {
    id
    name
    username
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${CommentFieldsFragmentDoc}`;
export const OnchainLinkMotionPreimageFragmentDoc = gql`
    fragment onchainLinkMotionPreimage on Preimage {
  hash
  id
  metaDescription
  method
  preimageArguments {
    id
    name
    value
  }
}
    `;
export const OnchainLinkMotionTreasuryFragmentDoc = gql`
    fragment onchainLinkMotionTreasury on TreasurySpendProposal {
  beneficiary
  bond
  value
}
    `;
export const OnchainLinkMotionFragmentDoc = gql`
    fragment onchainLinkMotion on onchain_links {
  id
  proposer_address
  onchain_referendum_id
  onchain_motion_id
  onchain_motion(where: {}) {
    id
    motionStatus(last: 1) {
      id
      status
    }
    memberCount
    method
    motionProposalHash
    motionProposalArguments {
      name
      value
    }
    preimage {
      ...onchainLinkMotionPreimage
    }
    treasurySpendProposal {
      ...onchainLinkMotionTreasury
    }
  }
}
    ${OnchainLinkMotionPreimageFragmentDoc}
${OnchainLinkMotionTreasuryFragmentDoc}`;
export const MotionPostFragmentDoc = gql`
    fragment motionPost on posts {
  author {
    id
    name
    username
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkMotion
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${CommentFieldsFragmentDoc}
${OnchainLinkMotionFragmentDoc}`;
export const OnchainLinkProposalFragmentDoc = gql`
    fragment onchainLinkProposal on onchain_links {
  id
  proposer_address
  onchain_proposal_id
  onchain_referendum_id
  onchain_proposal(where: {}) {
    id
    depositAmount
    proposalStatus(last: 1) {
      id
      status
    }
    preimage {
      hash
      id
      metaDescription
      method
      preimageArguments {
        id
        name
        value
      }
    }
  }
}
    `;
export const ProposalPostFragmentDoc = gql`
    fragment proposalPost on posts {
  author {
    id
    name
    username
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${CommentFieldsFragmentDoc}
${OnchainLinkProposalFragmentDoc}`;
export const OnchainLinkReferendumFragmentDoc = gql`
    fragment onchainLinkReferendum on onchain_links {
  id
  proposer_address
  onchain_referendum_id
  onchain_referendum(where: {}) {
    id
    delay
    end
    voteThreshold
    referendumStatus(last: 1) {
      status
      id
    }
    preimage {
      hash
      id
      metaDescription
      method
      preimageArguments {
        id
        name
        value
      }
    }
  }
}
    `;
export const ReferendumPostFragmentDoc = gql`
    fragment referendumPost on posts {
  author {
    id
    name
    username
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkReferendum
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${CommentFieldsFragmentDoc}
${OnchainLinkReferendumFragmentDoc}`;
export const OnchainLinkTreasuryProposalFragmentDoc = gql`
    fragment onchainLinkTreasuryProposal on onchain_links {
  id
  proposer_address
  onchain_treasury_proposal_id
  onchain_motion_id
  onchain_treasury_spend_proposal(where: {}) {
    id
    beneficiary
    value
    bond
    treasuryStatus(last: 1) {
      id
      status
    }
  }
}
    `;
export const TreasuryProposalPostFragmentDoc = gql`
    fragment treasuryProposalPost on posts {
  author {
    id
    name
    username
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTreasuryProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${CommentFieldsFragmentDoc}
${OnchainLinkTreasuryProposalFragmentDoc}`;
export const EditCommentDocument = gql`
    mutation EditComment($id: uuid!, $content: String!) {
  update_comments(where: {id: {_eq: $id}}, _set: {content: $content}) {
    affected_rows
  }
}
    `;
export type EditCommentMutationFn = ApolloReactCommon.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, baseOptions);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = ApolloReactCommon.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const LogoutDocument = gql`
    mutation LOGOUT {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetCouncilMembersDocument = gql`
    query getCouncilMembers {
  councils(last: 1) {
    members {
      address
    }
  }
}
    `;

/**
 * __useGetCouncilMembersQuery__
 *
 * To run a query within a React component, call `useGetCouncilMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCouncilMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCouncilMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCouncilMembersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>(GetCouncilMembersDocument, baseOptions);
      }
export function useGetCouncilMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>(GetCouncilMembersDocument, baseOptions);
        }
export type GetCouncilMembersQueryHookResult = ReturnType<typeof useGetCouncilMembersQuery>;
export type GetCouncilMembersLazyQueryHookResult = ReturnType<typeof useGetCouncilMembersLazyQuery>;
export type GetCouncilMembersQueryResult = ApolloReactCommon.QueryResult<GetCouncilMembersQuery, GetCouncilMembersQueryVariables>;
export const EditPostDocument = gql`
    mutation EditPost($id: Int!, $content: String!, $title: String!) {
  update_posts(where: {id: {_eq: $id}}, _set: {content: $content, title: $title}) {
    affected_rows
  }
}
    `;
export type EditPostMutationFn = ApolloReactCommon.MutationFunction<EditPostMutation, EditPostMutationVariables>;

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useEditPostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        return ApolloReactHooks.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, baseOptions);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = ApolloReactCommon.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = ApolloReactCommon.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const AddPostCommentDocument = gql`
    mutation AddPostComment($authorId: Int!, $content: String!, $postId: Int!) {
  __typename
  insert_comments(objects: {author_id: $authorId, content: $content, post_id: $postId}) {
    affected_rows
  }
}
    `;
export type AddPostCommentMutationFn = ApolloReactCommon.MutationFunction<AddPostCommentMutation, AddPostCommentMutationVariables>;

/**
 * __useAddPostCommentMutation__
 *
 * To run a mutation, you first call `useAddPostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostCommentMutation, { data, loading, error }] = useAddPostCommentMutation({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      content: // value for 'content'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddPostCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostCommentMutation, AddPostCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPostCommentMutation, AddPostCommentMutationVariables>(AddPostCommentDocument, baseOptions);
      }
export type AddPostCommentMutationHookResult = ReturnType<typeof useAddPostCommentMutation>;
export type AddPostCommentMutationResult = ApolloReactCommon.MutationResult<AddPostCommentMutation>;
export type AddPostCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostCommentMutation, AddPostCommentMutationVariables>;
export const PostReactionsDocument = gql`
    query PostReactions($postId: Int!) {
  post_reactions(where: {post_id: {_eq: $postId}}) {
    ...postReactionFields
  }
}
    ${PostReactionFieldsFragmentDoc}`;

/**
 * __usePostReactionsQuery__
 *
 * To run a query within a React component, call `usePostReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostReactionsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostReactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostReactionsQuery, PostReactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostReactionsQuery, PostReactionsQueryVariables>(PostReactionsDocument, baseOptions);
      }
export function usePostReactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostReactionsQuery, PostReactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostReactionsQuery, PostReactionsQueryVariables>(PostReactionsDocument, baseOptions);
        }
export type PostReactionsQueryHookResult = ReturnType<typeof usePostReactionsQuery>;
export type PostReactionsLazyQueryHookResult = ReturnType<typeof usePostReactionsLazyQuery>;
export type PostReactionsQueryResult = ApolloReactCommon.QueryResult<PostReactionsQuery, PostReactionsQueryVariables>;
export const CommentReactionsDocument = gql`
    query CommentReactions($commentId: uuid!) {
  comment_reactions(where: {comment_id: {_eq: $commentId}}) {
    ...commentReactionFields
  }
}
    ${CommentReactionFieldsFragmentDoc}`;

/**
 * __useCommentReactionsQuery__
 *
 * To run a query within a React component, call `useCommentReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentReactionsQuery({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useCommentReactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommentReactionsQuery, CommentReactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommentReactionsQuery, CommentReactionsQueryVariables>(CommentReactionsDocument, baseOptions);
      }
export function useCommentReactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommentReactionsQuery, CommentReactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommentReactionsQuery, CommentReactionsQueryVariables>(CommentReactionsDocument, baseOptions);
        }
export type CommentReactionsQueryHookResult = ReturnType<typeof useCommentReactionsQuery>;
export type CommentReactionsLazyQueryHookResult = ReturnType<typeof useCommentReactionsLazyQuery>;
export type CommentReactionsQueryResult = ApolloReactCommon.QueryResult<CommentReactionsQuery, CommentReactionsQueryVariables>;
export const AddPostReactionDocument = gql`
    mutation AddPostReaction($postId: Int!, $userId: Int!, $reaction: bpchar!) {
  __typename
  insert_post_reactions(objects: {post_id: $postId, user_id: $userId, reaction: $reaction}) {
    affected_rows
  }
}
    `;
export type AddPostReactionMutationFn = ApolloReactCommon.MutationFunction<AddPostReactionMutation, AddPostReactionMutationVariables>;

/**
 * __useAddPostReactionMutation__
 *
 * To run a mutation, you first call `useAddPostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostReactionMutation, { data, loading, error }] = useAddPostReactionMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useAddPostReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostReactionMutation, AddPostReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPostReactionMutation, AddPostReactionMutationVariables>(AddPostReactionDocument, baseOptions);
      }
export type AddPostReactionMutationHookResult = ReturnType<typeof useAddPostReactionMutation>;
export type AddPostReactionMutationResult = ApolloReactCommon.MutationResult<AddPostReactionMutation>;
export type AddPostReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostReactionMutation, AddPostReactionMutationVariables>;
export const AddCommentReactionDocument = gql`
    mutation AddCommentReaction($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
  __typename
  insert_comment_reactions(objects: {comment_id: $commentId, user_id: $userId, reaction: $reaction}) {
    affected_rows
  }
}
    `;
export type AddCommentReactionMutationFn = ApolloReactCommon.MutationFunction<AddCommentReactionMutation, AddCommentReactionMutationVariables>;

/**
 * __useAddCommentReactionMutation__
 *
 * To run a mutation, you first call `useAddCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentReactionMutation, { data, loading, error }] = useAddCommentReactionMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useAddCommentReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommentReactionMutation, AddCommentReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommentReactionMutation, AddCommentReactionMutationVariables>(AddCommentReactionDocument, baseOptions);
      }
export type AddCommentReactionMutationHookResult = ReturnType<typeof useAddCommentReactionMutation>;
export type AddCommentReactionMutationResult = ApolloReactCommon.MutationResult<AddCommentReactionMutation>;
export type AddCommentReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentReactionMutation, AddCommentReactionMutationVariables>;
export const DeletePostReactionDocument = gql`
    mutation DeletePostReaction($postId: Int!, $userId: Int!, $reaction: bpchar!) {
  delete_post_reactions(where: {_and: [{post_id: {_eq: $postId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}) {
    affected_rows
  }
}
    `;
export type DeletePostReactionMutationFn = ApolloReactCommon.MutationFunction<DeletePostReactionMutation, DeletePostReactionMutationVariables>;

/**
 * __useDeletePostReactionMutation__
 *
 * To run a mutation, you first call `useDeletePostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostReactionMutation, { data, loading, error }] = useDeletePostReactionMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useDeletePostReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePostReactionMutation, DeletePostReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePostReactionMutation, DeletePostReactionMutationVariables>(DeletePostReactionDocument, baseOptions);
      }
export type DeletePostReactionMutationHookResult = ReturnType<typeof useDeletePostReactionMutation>;
export type DeletePostReactionMutationResult = ApolloReactCommon.MutationResult<DeletePostReactionMutation>;
export type DeletePostReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePostReactionMutation, DeletePostReactionMutationVariables>;
export const DeleteCommentReactionDocument = gql`
    mutation DeleteCommentReaction($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
  delete_comment_reactions(where: {_and: [{comment_id: {_eq: $commentId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}) {
    affected_rows
  }
}
    `;
export type DeleteCommentReactionMutationFn = ApolloReactCommon.MutationFunction<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;

/**
 * __useDeleteCommentReactionMutation__
 *
 * To run a mutation, you first call `useDeleteCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentReactionMutation, { data, loading, error }] = useDeleteCommentReactionMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      userId: // value for 'userId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useDeleteCommentReactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>(DeleteCommentReactionDocument, baseOptions);
      }
export type DeleteCommentReactionMutationHookResult = ReturnType<typeof useDeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationResult = ApolloReactCommon.MutationResult<DeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;
export const ReportContentDocument = gql`
    mutation ReportContent($network: String!, $type: String!, $content_id: String!, $reason: String!, $comments: String!) {
  reportContent(network: $network, type: $type, content_id: $content_id, reason: $reason, comments: $comments) {
    message
  }
}
    `;
export type ReportContentMutationFn = ApolloReactCommon.MutationFunction<ReportContentMutation, ReportContentMutationVariables>;

/**
 * __useReportContentMutation__
 *
 * To run a mutation, you first call `useReportContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportContentMutation, { data, loading, error }] = useReportContentMutation({
 *   variables: {
 *      network: // value for 'network'
 *      type: // value for 'type'
 *      content_id: // value for 'content_id'
 *      reason: // value for 'reason'
 *      comments: // value for 'comments'
 *   },
 * });
 */
export function useReportContentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReportContentMutation, ReportContentMutationVariables>) {
        return ApolloReactHooks.useMutation<ReportContentMutation, ReportContentMutationVariables>(ReportContentDocument, baseOptions);
      }
export type ReportContentMutationHookResult = ReturnType<typeof useReportContentMutation>;
export type ReportContentMutationResult = ApolloReactCommon.MutationResult<ReportContentMutation>;
export type ReportContentMutationOptions = ApolloReactCommon.BaseMutationOptions<ReportContentMutation, ReportContentMutationVariables>;
export const PostSubscribeDocument = gql`
    mutation PostSubscribe($postId: Int!) {
  postSubscribe(post_id: $postId) {
    message
  }
}
    `;
export type PostSubscribeMutationFn = ApolloReactCommon.MutationFunction<PostSubscribeMutation, PostSubscribeMutationVariables>;

/**
 * __usePostSubscribeMutation__
 *
 * To run a mutation, you first call `usePostSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSubscribeMutation, { data, loading, error }] = usePostSubscribeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostSubscribeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostSubscribeMutation, PostSubscribeMutationVariables>) {
        return ApolloReactHooks.useMutation<PostSubscribeMutation, PostSubscribeMutationVariables>(PostSubscribeDocument, baseOptions);
      }
export type PostSubscribeMutationHookResult = ReturnType<typeof usePostSubscribeMutation>;
export type PostSubscribeMutationResult = ApolloReactCommon.MutationResult<PostSubscribeMutation>;
export type PostSubscribeMutationOptions = ApolloReactCommon.BaseMutationOptions<PostSubscribeMutation, PostSubscribeMutationVariables>;
export const PostUnsubscribeDocument = gql`
    mutation PostUnsubscribe($postId: Int!) {
  postUnsubscribe(post_id: $postId) {
    message
  }
}
    `;
export type PostUnsubscribeMutationFn = ApolloReactCommon.MutationFunction<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>;

/**
 * __usePostUnsubscribeMutation__
 *
 * To run a mutation, you first call `usePostUnsubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUnsubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUnsubscribeMutation, { data, loading, error }] = usePostUnsubscribeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostUnsubscribeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>) {
        return ApolloReactHooks.useMutation<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>(PostUnsubscribeDocument, baseOptions);
      }
export type PostUnsubscribeMutationHookResult = ReturnType<typeof usePostUnsubscribeMutation>;
export type PostUnsubscribeMutationResult = ApolloReactCommon.MutationResult<PostUnsubscribeMutation>;
export type PostUnsubscribeMutationOptions = ApolloReactCommon.BaseMutationOptions<PostUnsubscribeMutation, PostUnsubscribeMutationVariables>;
export const SubscriptionDocument = gql`
    query Subscription($postId: Int!) {
  subscription(post_id: $postId) {
    subscribed
  }
}
    `;

/**
 * __useSubscriptionQuery__
 *
 * To run a query within a React component, call `useSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useSubscriptionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SubscriptionQuery, SubscriptionQueryVariables>) {
        return ApolloReactHooks.useQuery<SubscriptionQuery, SubscriptionQueryVariables>(SubscriptionDocument, baseOptions);
      }
export function useSubscriptionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SubscriptionQuery, SubscriptionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SubscriptionQuery, SubscriptionQueryVariables>(SubscriptionDocument, baseOptions);
        }
export type SubscriptionQueryHookResult = ReturnType<typeof useSubscriptionQuery>;
export type SubscriptionLazyQueryHookResult = ReturnType<typeof useSubscriptionLazyQuery>;
export type SubscriptionQueryResult = ApolloReactCommon.QueryResult<SubscriptionQuery, SubscriptionQueryVariables>;
export const Get_Refresh_TokenDocument = gql`
    query GET_REFRESH_TOKEN {
  token {
    token
  }
}
    `;

/**
 * __useGet_Refresh_TokenQuery__
 *
 * To run a query within a React component, call `useGet_Refresh_TokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Refresh_TokenQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Refresh_TokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Refresh_TokenQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>) {
        return ApolloReactHooks.useQuery<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>(Get_Refresh_TokenDocument, baseOptions);
      }
export function useGet_Refresh_TokenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>(Get_Refresh_TokenDocument, baseOptions);
        }
export type Get_Refresh_TokenQueryHookResult = ReturnType<typeof useGet_Refresh_TokenQuery>;
export type Get_Refresh_TokenLazyQueryHookResult = ReturnType<typeof useGet_Refresh_TokenLazyQuery>;
export type Get_Refresh_TokenQueryResult = ApolloReactCommon.QueryResult<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>;
export const AddressLoginStartDocument = gql`
    mutation AddressLoginStart($address: String!) {
  addressLoginStart(address: $address) {
    message
    signMessage
  }
}
    `;
export type AddressLoginStartMutationFn = ApolloReactCommon.MutationFunction<AddressLoginStartMutation, AddressLoginStartMutationVariables>;

/**
 * __useAddressLoginStartMutation__
 *
 * To run a mutation, you first call `useAddressLoginStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLoginStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLoginStartMutation, { data, loading, error }] = useAddressLoginStartMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressLoginStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLoginStartMutation, AddressLoginStartMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLoginStartMutation, AddressLoginStartMutationVariables>(AddressLoginStartDocument, baseOptions);
      }
export type AddressLoginStartMutationHookResult = ReturnType<typeof useAddressLoginStartMutation>;
export type AddressLoginStartMutationResult = ApolloReactCommon.MutationResult<AddressLoginStartMutation>;
export type AddressLoginStartMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLoginStartMutation, AddressLoginStartMutationVariables>;
export const AddressLoginDocument = gql`
    mutation AddressLogin($address: String!, $signature: String!) {
  addressLogin(address: $address, signature: $signature) {
    user {
      id
      name
      username
      email
      email_verified
    }
    token
  }
}
    `;
export type AddressLoginMutationFn = ApolloReactCommon.MutationFunction<AddressLoginMutation, AddressLoginMutationVariables>;

/**
 * __useAddressLoginMutation__
 *
 * To run a mutation, you first call `useAddressLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLoginMutation, { data, loading, error }] = useAddressLoginMutation({
 *   variables: {
 *      address: // value for 'address'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useAddressLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLoginMutation, AddressLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLoginMutation, AddressLoginMutationVariables>(AddressLoginDocument, baseOptions);
      }
export type AddressLoginMutationHookResult = ReturnType<typeof useAddressLoginMutation>;
export type AddressLoginMutationResult = ApolloReactCommon.MutationResult<AddressLoginMutation>;
export type AddressLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLoginMutation, AddressLoginMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($userId: Int!, $content: String!, $topicId: Int!, $title: String!) {
  __typename
  insert_posts(objects: {author_id: $userId, content: $content, title: $title, topic_id: $topicId}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      content: // value for 'content'
 *      topicId: // value for 'topicId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const Post_TopicsDocument = gql`
    query Post_topics {
  post_topics {
    ...topic
  }
}
    ${TopicFragmentDoc}`;

/**
 * __usePost_TopicsQuery__
 *
 * To run a query within a React component, call `usePost_TopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePost_TopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePost_TopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePost_TopicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Post_TopicsQuery, Post_TopicsQueryVariables>) {
        return ApolloReactHooks.useQuery<Post_TopicsQuery, Post_TopicsQueryVariables>(Post_TopicsDocument, baseOptions);
      }
export function usePost_TopicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Post_TopicsQuery, Post_TopicsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Post_TopicsQuery, Post_TopicsQueryVariables>(Post_TopicsDocument, baseOptions);
        }
export type Post_TopicsQueryHookResult = ReturnType<typeof usePost_TopicsQuery>;
export type Post_TopicsLazyQueryHookResult = ReturnType<typeof usePost_TopicsLazyQuery>;
export type Post_TopicsQueryResult = ApolloReactCommon.QueryResult<Post_TopicsQuery, Post_TopicsQueryVariables>;
export const DiscussionPostAndCommentsDocument = gql`
    query DiscussionPostAndComments($id: Int!) {
  posts(where: {id: {_eq: $id}}) {
    ...discussionPost
  }
}
    ${DiscussionPostFragmentDoc}`;

/**
 * __useDiscussionPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useDiscussionPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscussionPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscussionPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDiscussionPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>(DiscussionPostAndCommentsDocument, baseOptions);
      }
export function useDiscussionPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>(DiscussionPostAndCommentsDocument, baseOptions);
        }
export type DiscussionPostAndCommentsQueryHookResult = ReturnType<typeof useDiscussionPostAndCommentsQuery>;
export type DiscussionPostAndCommentsLazyQueryHookResult = ReturnType<typeof useDiscussionPostAndCommentsLazyQuery>;
export type DiscussionPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<DiscussionPostAndCommentsQuery, DiscussionPostAndCommentsQueryVariables>;
export const LatestDiscussionPostsDocument = gql`
    query LatestDiscussionPosts($limit: Int! = 20) {
  posts(order_by: {created_at: desc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
    id
    title
    author {
      id
      name
      username
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
  }
}
    `;

/**
 * __useLatestDiscussionPostsQuery__
 *
 * To run a query within a React component, call `useLatestDiscussionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestDiscussionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestDiscussionPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestDiscussionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>(LatestDiscussionPostsDocument, baseOptions);
      }
export function useLatestDiscussionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>(LatestDiscussionPostsDocument, baseOptions);
        }
export type LatestDiscussionPostsQueryHookResult = ReturnType<typeof useLatestDiscussionPostsQuery>;
export type LatestDiscussionPostsLazyQueryHookResult = ReturnType<typeof useLatestDiscussionPostsLazyQuery>;
export type LatestDiscussionPostsQueryResult = ApolloReactCommon.QueryResult<LatestDiscussionPostsQuery, LatestDiscussionPostsQueryVariables>;
export const LoginDocument = gql`
    mutation LOGIN($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    user {
      id
      name
      username
      email
      email_verified
    }
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MotionPostAndCommentsDocument = gql`
    query MotionPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_motion_id: {_eq: $id}}}) {
    ...motionPost
  }
}
    ${MotionPostFragmentDoc}`;

/**
 * __useMotionPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useMotionPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMotionPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMotionPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMotionPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>(MotionPostAndCommentsDocument, baseOptions);
      }
export function useMotionPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>(MotionPostAndCommentsDocument, baseOptions);
        }
export type MotionPostAndCommentsQueryHookResult = ReturnType<typeof useMotionPostAndCommentsQuery>;
export type MotionPostAndCommentsLazyQueryHookResult = ReturnType<typeof useMotionPostAndCommentsLazyQuery>;
export type MotionPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<MotionPostAndCommentsQuery, MotionPostAndCommentsQueryVariables>;
export const ChangeNotificationPreferenceDocument = gql`
    mutation changeNotificationPreference($postParticipated: Boolean, $postCreated: Boolean, $newProposal: Boolean, $ownProposal: Boolean) {
  changeNotificationPreference(notificationPreferences: {postParticipated: $postParticipated, postCreated: $postCreated, newProposal: $newProposal, ownProposal: $ownProposal}) {
    message
    token
  }
}
    `;
export type ChangeNotificationPreferenceMutationFn = ApolloReactCommon.MutationFunction<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>;

/**
 * __useChangeNotificationPreferenceMutation__
 *
 * To run a mutation, you first call `useChangeNotificationPreferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeNotificationPreferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeNotificationPreferenceMutation, { data, loading, error }] = useChangeNotificationPreferenceMutation({
 *   variables: {
 *      postParticipated: // value for 'postParticipated'
 *      postCreated: // value for 'postCreated'
 *      newProposal: // value for 'newProposal'
 *      ownProposal: // value for 'ownProposal'
 *   },
 * });
 */
export function useChangeNotificationPreferenceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>(ChangeNotificationPreferenceDocument, baseOptions);
      }
export type ChangeNotificationPreferenceMutationHookResult = ReturnType<typeof useChangeNotificationPreferenceMutation>;
export type ChangeNotificationPreferenceMutationResult = ApolloReactCommon.MutationResult<ChangeNotificationPreferenceMutation>;
export type ChangeNotificationPreferenceMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeNotificationPreferenceMutation, ChangeNotificationPreferenceMutationVariables>;
export const LatestMotionPostsDocument = gql`
    query LatestMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(limit: $limit, where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}, onchain_referendum_id: {_is_null: true}}}, order_by: {onchain_link: {onchain_motion_id: desc}}) {
    id
    title
    author {
      id
      username
      name
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_motion_id
      onchain_motion(where: {}) {
        id
        motionStatus(last: 1) {
          id
          status
        }
        preimage {
          method
        }
      }
      proposer_address
    }
  }
}
    `;

/**
 * __useLatestMotionPostsQuery__
 *
 * To run a query within a React component, call `useLatestMotionPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestMotionPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestMotionPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestMotionPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>(LatestMotionPostsDocument, baseOptions);
      }
export function useLatestMotionPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>(LatestMotionPostsDocument, baseOptions);
        }
export type LatestMotionPostsQueryHookResult = ReturnType<typeof useLatestMotionPostsQuery>;
export type LatestMotionPostsLazyQueryHookResult = ReturnType<typeof useLatestMotionPostsLazyQuery>;
export type LatestMotionPostsQueryResult = ApolloReactCommon.QueryResult<LatestMotionPostsQuery, LatestMotionPostsQueryVariables>;
export const LatestDemocracyProposalPostsDocument = gql`
    query LatestDemocracyProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(limit: $limit, where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}, onchain_referendum_id: {_is_null: true}}}, order_by: {onchain_link: {onchain_proposal_id: desc}}) {
    id
    title
    author {
      id
      username
      name
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_proposal_id
      onchain_proposal(where: {}) {
        id
        proposalStatus(last: 1) {
          id
          status
        }
        preimage {
          method
        }
      }
      proposer_address
    }
  }
}
    `;

/**
 * __useLatestDemocracyProposalPostsQuery__
 *
 * To run a query within a React component, call `useLatestDemocracyProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestDemocracyProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestDemocracyProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestDemocracyProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>(LatestDemocracyProposalPostsDocument, baseOptions);
      }
export function useLatestDemocracyProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>(LatestDemocracyProposalPostsDocument, baseOptions);
        }
export type LatestDemocracyProposalPostsQueryHookResult = ReturnType<typeof useLatestDemocracyProposalPostsQuery>;
export type LatestDemocracyProposalPostsLazyQueryHookResult = ReturnType<typeof useLatestDemocracyProposalPostsLazyQuery>;
export type LatestDemocracyProposalPostsQueryResult = ApolloReactCommon.QueryResult<LatestDemocracyProposalPostsQuery, LatestDemocracyProposalPostsQueryVariables>;
export const LatestReferendaPostsDocument = gql`
    query LatestReferendaPosts($postType: Int!, $limit: Int! = 5) {
  posts(limit: $limit, where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}, order_by: {onchain_link: {onchain_referendum_id: desc}}) {
    id
    title
    author {
      id
      username
      name
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_referendum_id
      onchain_referendum(where: {}) {
        id
        referendumStatus(last: 1) {
          id
          status
        }
        preimage {
          method
        }
      }
      proposer_address
    }
  }
}
    `;

/**
 * __useLatestReferendaPostsQuery__
 *
 * To run a query within a React component, call `useLatestReferendaPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestReferendaPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestReferendaPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestReferendaPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>(LatestReferendaPostsDocument, baseOptions);
      }
export function useLatestReferendaPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>(LatestReferendaPostsDocument, baseOptions);
        }
export type LatestReferendaPostsQueryHookResult = ReturnType<typeof useLatestReferendaPostsQuery>;
export type LatestReferendaPostsLazyQueryHookResult = ReturnType<typeof useLatestReferendaPostsLazyQuery>;
export type LatestReferendaPostsQueryResult = ApolloReactCommon.QueryResult<LatestReferendaPostsQuery, LatestReferendaPostsQueryVariables>;
export const LatestDemocracyTreasuryProposalPostsDocument = gql`
    query LatestDemocracyTreasuryProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(limit: $limit, where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}, onchain_motion_id: {_is_null: true}}}, order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}) {
    id
    title
    author {
      id
      username
      name
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    `;

/**
 * __useLatestDemocracyTreasuryProposalPostsQuery__
 *
 * To run a query within a React component, call `useLatestDemocracyTreasuryProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestDemocracyTreasuryProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestDemocracyTreasuryProposalPostsQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      postTopic: // value for 'postTopic'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLatestDemocracyTreasuryProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>(LatestDemocracyTreasuryProposalPostsDocument, baseOptions);
      }
export function useLatestDemocracyTreasuryProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>(LatestDemocracyTreasuryProposalPostsDocument, baseOptions);
        }
export type LatestDemocracyTreasuryProposalPostsQueryHookResult = ReturnType<typeof useLatestDemocracyTreasuryProposalPostsQuery>;
export type LatestDemocracyTreasuryProposalPostsLazyQueryHookResult = ReturnType<typeof useLatestDemocracyTreasuryProposalPostsLazyQuery>;
export type LatestDemocracyTreasuryProposalPostsQueryResult = ApolloReactCommon.QueryResult<LatestDemocracyTreasuryProposalPostsQuery, LatestDemocracyTreasuryProposalPostsQueryVariables>;
export const ProposalPostAndCommentsDocument = gql`
    query ProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_proposal_id: {_eq: $id}}}) {
    ...proposalPost
  }
}
    ${ProposalPostFragmentDoc}`;

/**
 * __useProposalPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useProposalPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProposalPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>(ProposalPostAndCommentsDocument, baseOptions);
      }
export function useProposalPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>(ProposalPostAndCommentsDocument, baseOptions);
        }
export type ProposalPostAndCommentsQueryHookResult = ReturnType<typeof useProposalPostAndCommentsQuery>;
export type ProposalPostAndCommentsLazyQueryHookResult = ReturnType<typeof useProposalPostAndCommentsLazyQuery>;
export type ProposalPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables>;
export const ReferendumPostAndCommentsDocument = gql`
    query ReferendumPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_referendum_id: {_eq: $id}}}) {
    ...referendumPost
  }
}
    ${ReferendumPostFragmentDoc}`;

/**
 * __useReferendumPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useReferendumPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferendumPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferendumPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReferendumPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>(ReferendumPostAndCommentsDocument, baseOptions);
      }
export function useReferendumPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>(ReferendumPostAndCommentsDocument, baseOptions);
        }
export type ReferendumPostAndCommentsQueryHookResult = ReturnType<typeof useReferendumPostAndCommentsQuery>;
export type ReferendumPostAndCommentsLazyQueryHookResult = ReturnType<typeof useReferendumPostAndCommentsLazyQuery>;
export type ReferendumPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<ReferendumPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($newPassword: String!, $token: String!) {
  resetPassword(newPassword: $newPassword, token: $token) {
    message
  }
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation requestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    message
  }
}
    `;
export type RequestResetPasswordMutationFn = ApolloReactCommon.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, baseOptions);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = ApolloReactCommon.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ChangeNameDocument = gql`
    mutation changeName($newName: String!) {
  changeName(newName: $newName) {
    message
    token
  }
}
    `;
export type ChangeNameMutationFn = ApolloReactCommon.MutationFunction<ChangeNameMutation, ChangeNameMutationVariables>;

/**
 * __useChangeNameMutation__
 *
 * To run a mutation, you first call `useChangeNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeNameMutation, { data, loading, error }] = useChangeNameMutation({
 *   variables: {
 *      newName: // value for 'newName'
 *   },
 * });
 */
export function useChangeNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeNameMutation, ChangeNameMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeNameMutation, ChangeNameMutationVariables>(ChangeNameDocument, baseOptions);
      }
export type ChangeNameMutationHookResult = ReturnType<typeof useChangeNameMutation>;
export type ChangeNameMutationResult = ApolloReactCommon.MutationResult<ChangeNameMutation>;
export type ChangeNameMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeNameMutation, ChangeNameMutationVariables>;
export const ChangeUsernameDocument = gql`
    mutation changeUsername($username: String!) {
  changeUsername(username: $username) {
    message
    token
  }
}
    `;
export type ChangeUsernameMutationFn = ApolloReactCommon.MutationFunction<ChangeUsernameMutation, ChangeUsernameMutationVariables>;

/**
 * __useChangeUsernameMutation__
 *
 * To run a mutation, you first call `useChangeUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUsernameMutation, { data, loading, error }] = useChangeUsernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useChangeUsernameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeUsernameMutation, ChangeUsernameMutationVariables>(ChangeUsernameDocument, baseOptions);
      }
export type ChangeUsernameMutationHookResult = ReturnType<typeof useChangeUsernameMutation>;
export type ChangeUsernameMutationResult = ApolloReactCommon.MutationResult<ChangeUsernameMutation>;
export type ChangeUsernameMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation changeEmail($email: String!) {
  changeEmail(email: $email) {
    message
    token
  }
}
    `;
export type ChangeEmailMutationFn = ApolloReactCommon.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, baseOptions);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = ApolloReactCommon.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    message
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const AddressLinkStartDocument = gql`
    mutation addressLinkStart($network: String!, $address: String!) {
  addressLinkStart(network: $network, address: $address) {
    sign_message
    message
    address_id
  }
}
    `;
export type AddressLinkStartMutationFn = ApolloReactCommon.MutationFunction<AddressLinkStartMutation, AddressLinkStartMutationVariables>;

/**
 * __useAddressLinkStartMutation__
 *
 * To run a mutation, you first call `useAddressLinkStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLinkStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLinkStartMutation, { data, loading, error }] = useAddressLinkStartMutation({
 *   variables: {
 *      network: // value for 'network'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressLinkStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLinkStartMutation, AddressLinkStartMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLinkStartMutation, AddressLinkStartMutationVariables>(AddressLinkStartDocument, baseOptions);
      }
export type AddressLinkStartMutationHookResult = ReturnType<typeof useAddressLinkStartMutation>;
export type AddressLinkStartMutationResult = ApolloReactCommon.MutationResult<AddressLinkStartMutation>;
export type AddressLinkStartMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLinkStartMutation, AddressLinkStartMutationVariables>;
export const AddressLinkConfirmDocument = gql`
    mutation addressLinkConfirm($address_id: Int!, $signature: String!) {
  addressLinkConfirm(address_id: $address_id, signature: $signature) {
    message
    token
  }
}
    `;
export type AddressLinkConfirmMutationFn = ApolloReactCommon.MutationFunction<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>;

/**
 * __useAddressLinkConfirmMutation__
 *
 * To run a mutation, you first call `useAddressLinkConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressLinkConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressLinkConfirmMutation, { data, loading, error }] = useAddressLinkConfirmMutation({
 *   variables: {
 *      address_id: // value for 'address_id'
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useAddressLinkConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>(AddressLinkConfirmDocument, baseOptions);
      }
export type AddressLinkConfirmMutationHookResult = ReturnType<typeof useAddressLinkConfirmMutation>;
export type AddressLinkConfirmMutationResult = ApolloReactCommon.MutationResult<AddressLinkConfirmMutation>;
export type AddressLinkConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressLinkConfirmMutation, AddressLinkConfirmMutationVariables>;
export const AddressUnlinkDocument = gql`
    mutation addressUnlink($address: String!) {
  addressUnlink(address: $address) {
    message
    token
  }
}
    `;
export type AddressUnlinkMutationFn = ApolloReactCommon.MutationFunction<AddressUnlinkMutation, AddressUnlinkMutationVariables>;

/**
 * __useAddressUnlinkMutation__
 *
 * To run a mutation, you first call `useAddressUnlinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressUnlinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressUnlinkMutation, { data, loading, error }] = useAddressUnlinkMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressUnlinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddressUnlinkMutation, AddressUnlinkMutationVariables>) {
        return ApolloReactHooks.useMutation<AddressUnlinkMutation, AddressUnlinkMutationVariables>(AddressUnlinkDocument, baseOptions);
      }
export type AddressUnlinkMutationHookResult = ReturnType<typeof useAddressUnlinkMutation>;
export type AddressUnlinkMutationResult = ApolloReactCommon.MutationResult<AddressUnlinkMutation>;
export type AddressUnlinkMutationOptions = ApolloReactCommon.BaseMutationOptions<AddressUnlinkMutation, AddressUnlinkMutationVariables>;
export const ResendVerifyEmailTokenDocument = gql`
    mutation resendVerifyEmailToken {
  resendVerifyEmailToken {
    message
  }
}
    `;
export type ResendVerifyEmailTokenMutationFn = ApolloReactCommon.MutationFunction<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>;

/**
 * __useResendVerifyEmailTokenMutation__
 *
 * To run a mutation, you first call `useResendVerifyEmailTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerifyEmailTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerifyEmailTokenMutation, { data, loading, error }] = useResendVerifyEmailTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useResendVerifyEmailTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>(ResendVerifyEmailTokenDocument, baseOptions);
      }
export type ResendVerifyEmailTokenMutationHookResult = ReturnType<typeof useResendVerifyEmailTokenMutation>;
export type ResendVerifyEmailTokenMutationResult = ApolloReactCommon.MutationResult<ResendVerifyEmailTokenMutation>;
export type ResendVerifyEmailTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerifyEmailTokenMutation, ResendVerifyEmailTokenMutationVariables>;
export const SignupDocument = gql`
    mutation SIGNUP($email: String, $password: String!, $username: String!, $name: String) {
  signup(email: $email, password: $password, username: $username, name: $name) {
    user {
      id
      name
      username
      email
      email_verified
    }
    token
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const TreasuryProposalPostAndCommentsDocument = gql`
    query TreasuryProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_treasury_proposal_id: {_eq: $id}}}) {
    ...treasuryProposalPost
  }
}
    ${TreasuryProposalPostFragmentDoc}`;

/**
 * __useTreasuryProposalPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useTreasuryProposalPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTreasuryProposalPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTreasuryProposalPostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTreasuryProposalPostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>(TreasuryProposalPostAndCommentsDocument, baseOptions);
      }
export function useTreasuryProposalPostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>(TreasuryProposalPostAndCommentsDocument, baseOptions);
        }
export type TreasuryProposalPostAndCommentsQueryHookResult = ReturnType<typeof useTreasuryProposalPostAndCommentsQuery>;
export type TreasuryProposalPostAndCommentsLazyQueryHookResult = ReturnType<typeof useTreasuryProposalPostAndCommentsLazyQuery>;
export type TreasuryProposalPostAndCommentsQueryResult = ApolloReactCommon.QueryResult<TreasuryProposalPostAndCommentsQuery, TreasuryProposalPostAndCommentsQueryVariables>;
export const UndoEmailChangeDocument = gql`
    mutation undoEmailChange($token: String!) {
  undoEmailChange(token: $token) {
    message
    token
    email
  }
}
    `;
export type UndoEmailChangeMutationFn = ApolloReactCommon.MutationFunction<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>;

/**
 * __useUndoEmailChangeMutation__
 *
 * To run a mutation, you first call `useUndoEmailChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoEmailChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoEmailChangeMutation, { data, loading, error }] = useUndoEmailChangeMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUndoEmailChangeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>) {
        return ApolloReactHooks.useMutation<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>(UndoEmailChangeDocument, baseOptions);
      }
export type UndoEmailChangeMutationHookResult = ReturnType<typeof useUndoEmailChangeMutation>;
export type UndoEmailChangeMutationResult = ApolloReactCommon.MutationResult<UndoEmailChangeMutation>;
export type UndoEmailChangeMutationOptions = ApolloReactCommon.BaseMutationOptions<UndoEmailChangeMutation, UndoEmailChangeMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation verifyEmail($token: String!) {
  verifyEmail(token: $token) {
    message
    token
  }
}
    `;
export type VerifyEmailMutationFn = ApolloReactCommon.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = ApolloReactCommon.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;