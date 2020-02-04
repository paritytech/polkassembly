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
  timestamptz: any,
  uuid: any,
  Long: any,
  Json: any,
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

export type AggregateBlockNumber = {
   __typename?: 'AggregateBlockNumber',
  count: Scalars['Int'],
};

export type AggregateEra = {
   __typename?: 'AggregateEra',
  count: Scalars['Int'],
};

export type AggregateNomination = {
   __typename?: 'AggregateNomination',
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

export type AggregateValidator = {
   __typename?: 'AggregateValidator',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
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

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChangeResponse = {
   __typename?: 'ChangeResponse',
  message?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

export type Comments = {
   __typename?: 'comments',
  author?: Maybe<User>,
  author_id: Scalars['Int'],
  comment?: Maybe<Comments>,
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  content: Scalars['String'],
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  parent_comment_id?: Maybe<Scalars['uuid']>,
  post: Posts,
  post_id: Scalars['Int'],
  updated_at: Scalars['timestamptz'],
};


export type CommentsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


export type CommentsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
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
  comment?: Maybe<Comments_Bool_Exp>,
  comments?: Maybe<Comments_Bool_Exp>,
  content?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  parent_comment_id?: Maybe<Uuid_Comparison_Exp>,
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
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>,
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  parent_comment_id?: Maybe<Scalars['uuid']>,
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
  comment?: Maybe<Comments_Order_By>,
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  parent_comment_id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export enum Comments_Select_Column {
  AuthorId = 'author_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  ParentCommentId = 'parent_comment_id',
  PostId = 'post_id',
  UpdatedAt = 'updated_at'
}

export type Comments_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  parent_comment_id?: Maybe<Scalars['uuid']>,
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
  ParentCommentId = 'parent_comment_id',
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

export type Mutation = {
   __typename?: 'Mutation',
  addressLinkConfirm?: Maybe<Message>,
  addressLinkStart?: Maybe<AddressLinkType>,
  addressUnlink?: Maybe<Message>,
  changeEmail?: Maybe<ChangeResponse>,
  changeName?: Maybe<ChangeResponse>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<ChangeResponse>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  postSubscribe?: Maybe<Message>,
  postUnsubscribe?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
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


export type MutationAddressUnlinkArgs = {
  address: Scalars['String']
};


export type MutationChangeEmailArgs = {
  email: Scalars['String']
};


export type MutationChangeNameArgs = {
  newName: Scalars['String']
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
  addressLinkConfirm?: Maybe<Message>,
  addressLinkStart?: Maybe<AddressLinkType>,
  addressUnlink?: Maybe<Message>,
  changeEmail?: Maybe<ChangeResponse>,
  changeName?: Maybe<ChangeResponse>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<ChangeResponse>,
  createBlockNumber: BlockNumber,
  createEra: Era,
  createNomination: Nomination,
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
  createValidator: Validator,
  deleteBlockNumber?: Maybe<BlockNumber>,
  deleteEra?: Maybe<Era>,
  deleteManyBlockNumbers: BatchPayload,
  deleteManyEras: BatchPayload,
  deleteManyNominations: BatchPayload,
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
  deleteManyValidators: BatchPayload,
  deleteNomination?: Maybe<Nomination>,
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
  deleteValidator?: Maybe<Validator>,
  delete_comments?: Maybe<Comments_Mutation_Response>,
  delete_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  delete_posts?: Maybe<Posts_Mutation_Response>,
  executeRaw: Scalars['Json'],
  insert_comments?: Maybe<Comments_Mutation_Response>,
  insert_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  insert_post_types?: Maybe<Post_Types_Mutation_Response>,
  insert_posts?: Maybe<Posts_Mutation_Response>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  postSubscribe?: Maybe<Message>,
  postUnsubscribe?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
  resetPassword?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  undoEmailChange?: Maybe<UndoEmailChangeResponse>,
  updateBlockNumber?: Maybe<BlockNumber>,
  updateEra?: Maybe<Era>,
  updateManyBlockNumbers: BatchPayload,
  updateManyEras: BatchPayload,
  updateManyNominations: BatchPayload,
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
  updateManyValidators: BatchPayload,
  updateNomination?: Maybe<Nomination>,
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
  updateValidator?: Maybe<Validator>,
  update_comments?: Maybe<Comments_Mutation_Response>,
  update_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  update_posts?: Maybe<Posts_Mutation_Response>,
  upsertBlockNumber: BlockNumber,
  upsertEra: Era,
  upsertNomination: Nomination,
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


export type Mutation_RootAddressUnlinkArgs = {
  address: Scalars['String']
};


export type Mutation_RootChangeEmailArgs = {
  email: Scalars['String']
};


export type Mutation_RootChangeNameArgs = {
  newName: Scalars['String']
};


export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String'],
  oldPassword: Scalars['String']
};


export type Mutation_RootChangeUsernameArgs = {
  username: Scalars['String']
};


export type Mutation_RootCreateBlockNumberArgs = {
  data: BlockNumberCreateInput
};


export type Mutation_RootCreateEraArgs = {
  data: EraCreateInput
};


export type Mutation_RootCreateNominationArgs = {
  data: NominationCreateInput
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


export type Mutation_RootCreateValidatorArgs = {
  data: ValidatorCreateInput
};


export type Mutation_RootDeleteBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput
};


export type Mutation_RootDeleteEraArgs = {
  where: EraWhereUniqueInput
};


export type Mutation_RootDeleteManyBlockNumbersArgs = {
  where?: Maybe<BlockNumberWhereInput>
};


export type Mutation_RootDeleteManyErasArgs = {
  where?: Maybe<EraWhereInput>
};


export type Mutation_RootDeleteManyNominationsArgs = {
  where?: Maybe<NominationWhereInput>
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


export type Mutation_RootDeleteManyValidatorsArgs = {
  where?: Maybe<ValidatorWhereInput>
};


export type Mutation_RootDeleteNominationArgs = {
  where: NominationWhereUniqueInput
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


export type Mutation_RootDeleteValidatorArgs = {
  where: ValidatorWhereUniqueInput
};


export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp
};


export type Mutation_RootDelete_Onchain_LinksArgs = {
  where: Onchain_Links_Bool_Exp
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


export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>,
  on_conflict?: Maybe<Comments_On_Conflict>
};


export type Mutation_RootInsert_Onchain_LinksArgs = {
  objects: Array<Onchain_Links_Insert_Input>,
  on_conflict?: Maybe<Onchain_Links_On_Conflict>
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


export type Mutation_RootUpdateBlockNumberArgs = {
  data: BlockNumberUpdateInput,
  where: BlockNumberWhereUniqueInput
};


export type Mutation_RootUpdateEraArgs = {
  data: EraUpdateInput,
  where: EraWhereUniqueInput
};


export type Mutation_RootUpdateManyBlockNumbersArgs = {
  data: BlockNumberUpdateManyMutationInput,
  where?: Maybe<BlockNumberWhereInput>
};


export type Mutation_RootUpdateManyErasArgs = {
  data: EraUpdateManyMutationInput,
  where?: Maybe<EraWhereInput>
};


export type Mutation_RootUpdateManyNominationsArgs = {
  data: NominationUpdateManyMutationInput,
  where?: Maybe<NominationWhereInput>
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


export type Mutation_RootUpdateManyValidatorsArgs = {
  data: ValidatorUpdateManyMutationInput,
  where?: Maybe<ValidatorWhereInput>
};


export type Mutation_RootUpdateNominationArgs = {
  data: NominationUpdateInput,
  where: NominationWhereUniqueInput
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


export type Mutation_RootUpdateValidatorArgs = {
  data: ValidatorUpdateInput,
  where: ValidatorWhereUniqueInput
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


export type Mutation_RootUpsertBlockNumberArgs = {
  create: BlockNumberCreateInput,
  update: BlockNumberUpdateInput,
  where: BlockNumberWhereUniqueInput
};


export type Mutation_RootUpsertEraArgs = {
  create: EraCreateInput,
  update: EraUpdateInput,
  where: EraWhereUniqueInput
};


export type Mutation_RootUpsertNominationArgs = {
  create: NominationCreateInput,
  update: NominationUpdateInput,
  where: NominationWhereUniqueInput
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
  bonded: Scalars['String'],
  id: Scalars['ID'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  session: Session,
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
  bonded: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
  session: SessionCreateOneInput,
  validatorController: Scalars['String'],
  validatorStash: Scalars['String'],
};

export type NominationEdge = {
   __typename?: 'NominationEdge',
  cursor: Scalars['String'],
  node: Nomination,
};

export enum NominationOrderByInput {
  BondedAsc = 'bonded_ASC',
  BondedDesc = 'bonded_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NominatorControllerAsc = 'nominatorController_ASC',
  NominatorControllerDesc = 'nominatorController_DESC',
  NominatorStashAsc = 'nominatorStash_ASC',
  NominatorStashDesc = 'nominatorStash_DESC',
  ValidatorControllerAsc = 'validatorController_ASC',
  ValidatorControllerDesc = 'validatorController_DESC',
  ValidatorStashAsc = 'validatorStash_ASC',
  ValidatorStashDesc = 'validatorStash_DESC'
}

export type NominationPreviousValues = {
   __typename?: 'NominationPreviousValues',
  bonded: Scalars['String'],
  id: Scalars['ID'],
  nominatorController: Scalars['String'],
  nominatorStash: Scalars['String'],
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
  bonded?: Maybe<Scalars['String']>,
  nominatorController?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  session?: Maybe<SessionUpdateOneRequiredInput>,
  validatorController?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
};

export type NominationUpdateManyMutationInput = {
  bonded?: Maybe<Scalars['String']>,
  nominatorController?: Maybe<Scalars['String']>,
  nominatorStash?: Maybe<Scalars['String']>,
  validatorController?: Maybe<Scalars['String']>,
  validatorStash?: Maybe<Scalars['String']>,
};

export type NominationWhereInput = {
  AND?: Maybe<Array<NominationWhereInput>>,
  NOT?: Maybe<Array<NominationWhereInput>>,
  OR?: Maybe<Array<NominationWhereInput>>,
  bonded?: Maybe<Scalars['String']>,
  bonded_contains?: Maybe<Scalars['String']>,
  bonded_ends_with?: Maybe<Scalars['String']>,
  bonded_gt?: Maybe<Scalars['String']>,
  bonded_gte?: Maybe<Scalars['String']>,
  bonded_in?: Maybe<Array<Scalars['String']>>,
  bonded_lt?: Maybe<Scalars['String']>,
  bonded_lte?: Maybe<Scalars['String']>,
  bonded_not?: Maybe<Scalars['String']>,
  bonded_not_contains?: Maybe<Scalars['String']>,
  bonded_not_ends_with?: Maybe<Scalars['String']>,
  bonded_not_in?: Maybe<Array<Scalars['String']>>,
  bonded_not_starts_with?: Maybe<Scalars['String']>,
  bonded_starts_with?: Maybe<Scalars['String']>,
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

export type Onchain_Links = {
   __typename?: 'onchain_links',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  onchain_proposal?: Maybe<Proposal>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum?: Maybe<Referendum>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post: Posts,
  post_id: Scalars['Int'],
  proposer_address: Scalars['String'],
};


export type Onchain_LinksOnchain_ProposalArgs = {
  where: ProposalWhereUniqueInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal
};


export type Onchain_LinksOnchain_ReferendumArgs = {
  where: ReferendumWhereUniqueInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum
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
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Avg_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>,
  _not?: Maybe<Onchain_Links_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  onchain_proposal_id?: Maybe<Int_Comparison_Exp>,
  onchain_referendum_id?: Maybe<Int_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  proposer_address?: Maybe<String_Comparison_Exp>,
};

export enum Onchain_Links_Constraint {
  OnchainLinksOnchainReferendumIdKey = 'onchain_links_onchain_referendum_id_key',
  OnchainProposalsChainDbIdKey = 'onchain_proposals_chain_db_id_key',
  ProposalsPkey = 'proposals_pkey',
  ProposalsPostIdKey = 'proposals_post_id_key'
}

export type Onchain_Links_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Onchain_Links_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Max_Fields = {
   __typename?: 'onchain_links_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export type Onchain_Links_Min_Fields = {
   __typename?: 'onchain_links_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
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
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export enum Onchain_Links_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  OnchainProposalId = 'onchain_proposal_id',
  OnchainReferendumId = 'onchain_referendum_id',
  PostId = 'post_id',
  ProposerAddress = 'proposer_address'
}

export type Onchain_Links_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Links_Stddev_Fields = {
   __typename?: 'onchain_links_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Stddev_Pop_Fields = {
   __typename?: 'onchain_links_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Stddev_Samp_Fields = {
   __typename?: 'onchain_links_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Sum_Fields = {
   __typename?: 'onchain_links_sum_fields',
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Onchain_Links_Sum_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export enum Onchain_Links_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  OnchainProposalId = 'onchain_proposal_id',
  OnchainReferendumId = 'onchain_referendum_id',
  PostId = 'post_id',
  ProposerAddress = 'proposer_address'
}

export type Onchain_Links_Var_Pop_Fields = {
   __typename?: 'onchain_links_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Var_Samp_Fields = {
   __typename?: 'onchain_links_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Links_Variance_Fields = {
   __typename?: 'onchain_links_variance_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  onchain_referendum_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Links_Variance_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  onchain_referendum_id?: Maybe<Order_By>,
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
  preimageArguments?: Maybe<PreimageArgumentCreateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusCreateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalCreateOneWithoutPreimageInput>,
  referendum?: Maybe<ReferendumCreateOneWithoutPreimageInput>,
  section: Scalars['String'],
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

export type PreimageCreateWithoutPreimageArgumentsInput = {
  author: Scalars['String'],
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  metaDescription: Scalars['String'],
  method: Scalars['String'],
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

export type PreimageUpdateWithoutPreimageArgumentsDataInput = {
  author?: Maybe<Scalars['String']>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
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
  preimageArguments?: Maybe<PreimageArgumentUpdateManyWithoutPreimageInput>,
  preimageStatus?: Maybe<PreimageStatusUpdateManyWithoutPreimageInput>,
  proposal?: Maybe<ProposalUpdateOneWithoutPreimageInput>,
  section?: Maybe<Scalars['String']>,
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

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type ProposalWhereUniqueInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal = {
  id?: Maybe<Scalars['Int']>,
};

export type PublicUser = {
   __typename?: 'PublicUser',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  addresses?: Maybe<Array<Maybe<Address>>>,
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
  addresses?: Maybe<Array<Maybe<Address>>>,
  blockNumber?: Maybe<BlockNumber>,
  blockNumbers: Array<Maybe<BlockNumber>>,
  blockNumbersConnection: BlockNumberConnection,
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  comments_by_pk?: Maybe<Comments>,
  era?: Maybe<Era>,
  eras: Array<Maybe<Era>>,
  erasConnection: EraConnection,
  node?: Maybe<Node>,
  nomination?: Maybe<Nomination>,
  nominations: Array<Maybe<Nomination>>,
  nominationsConnection: NominationConnection,
  onchain_links: Array<Onchain_Links>,
  onchain_links_aggregate: Onchain_Links_Aggregate,
  onchain_links_by_pk?: Maybe<Onchain_Links>,
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
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<PublicUser>>>,
  validator?: Maybe<Validator>,
  validators: Array<Maybe<Validator>>,
  validatorsConnection: ValidatorConnection,
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

export type ReferendumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  referendumId?: Maybe<Scalars['Int']>,
};

export type ReferendumWhereUniqueInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum = {
  id?: Maybe<Scalars['Int']>,
};

export type Reward = Node & {
   __typename?: 'Reward',
  amount: Scalars['String'],
  authoredBlock: BlockNumber,
  id: Scalars['ID'],
  recipients: Array<Scalars['String']>,
};

export type RewardConnection = {
   __typename?: 'RewardConnection',
  aggregate: AggregateReward,
  edges: Array<Maybe<RewardEdge>>,
  pageInfo: PageInfo,
};

export type RewardCreateInput = {
  amount: Scalars['String'],
  authoredBlock: BlockNumberCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  recipients?: Maybe<RewardCreaterecipientsInput>,
};

export type RewardCreaterecipientsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type RewardEdge = {
   __typename?: 'RewardEdge',
  cursor: Scalars['String'],
  node: Reward,
};

export enum RewardOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type RewardPreviousValues = {
   __typename?: 'RewardPreviousValues',
  amount: Scalars['String'],
  id: Scalars['ID'],
  recipients: Array<Scalars['String']>,
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
  amount?: Maybe<Scalars['String']>,
  authoredBlock?: Maybe<BlockNumberUpdateOneRequiredInput>,
  recipients?: Maybe<RewardUpdaterecipientsInput>,
};

export type RewardUpdateManyMutationInput = {
  amount?: Maybe<Scalars['String']>,
  recipients?: Maybe<RewardUpdaterecipientsInput>,
};

export type RewardUpdaterecipientsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type RewardWhereInput = {
  AND?: Maybe<Array<RewardWhereInput>>,
  NOT?: Maybe<Array<RewardWhereInput>>,
  OR?: Maybe<Array<RewardWhereInput>>,
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
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  comments_by_pk?: Maybe<Comments>,
  onchain_links: Array<Onchain_Links>,
  onchain_links_aggregate: Onchain_Links_Aggregate,
  onchain_links_by_pk?: Maybe<Onchain_Links>,
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

export type AddPostAndProposalMutationMutationVariables = {
  onchainProposalId: Scalars['Int'],
  author_id: Scalars['Int'],
  proposer_address: Scalars['String'],
  content: Scalars['String'],
  title: Scalars['String'],
  topic_id: Scalars['Int'],
  type_id: Scalars['Int']
};


export type AddPostAndProposalMutationMutation = (
  { __typename: 'mutation_root' }
  & { insert_onchain_links: Maybe<(
    { __typename?: 'onchain_links_mutation_response' }
    & { returning: Array<(
      { __typename?: 'onchain_links' }
      & Pick<Onchain_Links, 'id'>
    )> }
  )> }
);

export type GetTabledProposalAtBlockQueryVariables = {
  blockHash: Scalars['String']
};


export type GetTabledProposalAtBlockQuery = (
  { __typename?: 'query_root' }
  & { proposals: Array<Maybe<(
    { __typename?: 'Proposal' }
    & Pick<Proposal, 'proposalId'>
    & { preimage: Maybe<(
      { __typename?: 'Preimage' }
      & Pick<Preimage, 'hash'>
    )> }
  )>> }
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
export const AddPostAndProposalMutationDocument = gql`
    mutation addPostAndProposalMutation($onchainProposalId: Int!, $author_id: Int!, $proposer_address: String!, $content: String!, $title: String!, $topic_id: Int!, $type_id: Int!) {
  __typename
  insert_onchain_links(objects: {onchain_proposal_id: $onchainProposalId, proposer_address: $proposer_address, post: {data: {author_id: $author_id, content: $content, title: $title, topic_id: $topic_id, type_id: $type_id}}}) {
    returning {
      id
    }
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
export function getSdk(client: GraphQLClient) {
  return {
    addPostAndProposalMutation(variables: AddPostAndProposalMutationMutationVariables): Promise<AddPostAndProposalMutationMutation> {
      return client.request<AddPostAndProposalMutationMutation>(print(AddPostAndProposalMutationDocument), variables);
    },
    getTabledProposalAtBlock(variables: GetTabledProposalAtBlockQueryVariables): Promise<GetTabledProposalAtBlockQuery> {
      return client.request<GetTabledProposalAtBlockQuery>(print(GetTabledProposalAtBlockDocument), variables);
    },
    getDiscussionProposals(variables?: GetDiscussionProposalsQueryVariables): Promise<GetDiscussionProposalsQuery> {
      return client.request<GetDiscussionProposalsQuery>(print(GetDiscussionProposalsDocument), variables);
    },
    getDiscussionReferenda(variables?: GetDiscussionReferendaQueryVariables): Promise<GetDiscussionReferendaQuery> {
      return client.request<GetDiscussionReferendaQuery>(print(GetDiscussionReferendaDocument), variables);
    }
  };
}