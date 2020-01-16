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
  Long: any,
  Json: any,
  Upload: any,
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

export type AggregateProposal = {
   __typename?: 'AggregateProposal',
  count: Scalars['Int'],
};

export type AggregateProposalArgument = {
   __typename?: 'AggregateProposalArgument',
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
  email: Scalars['String'],
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
  changeEmail?: Maybe<ChangeResponse>,
  changeName?: Maybe<ChangeResponse>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<ChangeResponse>,
  createBlockNumber: BlockNumber,
  createEra: Era,
  createNomination: Nomination,
  createProposal: Proposal,
  createProposalArgument: ProposalArgument,
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
  deleteManyProposalArguments: BatchPayload,
  deleteManyProposals: BatchPayload,
  deleteManyRewards: BatchPayload,
  deleteManySessions: BatchPayload,
  deleteManySlashings: BatchPayload,
  deleteManyStakes: BatchPayload,
  deleteManyTotalIssuances: BatchPayload,
  deleteManyValidators: BatchPayload,
  deleteNomination?: Maybe<Nomination>,
  deleteProposal?: Maybe<Proposal>,
  deleteProposalArgument?: Maybe<ProposalArgument>,
  deleteReward?: Maybe<Reward>,
  deleteSession?: Maybe<Session>,
  deleteSlashing?: Maybe<Slashing>,
  deleteStake?: Maybe<Stake>,
  deleteTotalIssuance?: Maybe<TotalIssuance>,
  deleteValidator?: Maybe<Validator>,
  delete_comments?: Maybe<Comments_Mutation_Response>,
  delete_onchain_proposals?: Maybe<Onchain_Proposals_Mutation_Response>,
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  delete_posts?: Maybe<Posts_Mutation_Response>,
  executeRaw: Scalars['Json'],
  insert_comments?: Maybe<Comments_Mutation_Response>,
  insert_onchain_proposals?: Maybe<Onchain_Proposals_Mutation_Response>,
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
  updateManyProposalArguments: BatchPayload,
  updateManyProposals: BatchPayload,
  updateManyRewards: BatchPayload,
  updateManySessions: BatchPayload,
  updateManySlashings: BatchPayload,
  updateManyStakes: BatchPayload,
  updateManyTotalIssuances: BatchPayload,
  updateManyValidators: BatchPayload,
  updateNomination?: Maybe<Nomination>,
  updateProposal?: Maybe<Proposal>,
  updateProposalArgument?: Maybe<ProposalArgument>,
  updateReward?: Maybe<Reward>,
  updateSession?: Maybe<Session>,
  updateSlashing?: Maybe<Slashing>,
  updateStake?: Maybe<Stake>,
  updateTotalIssuance?: Maybe<TotalIssuance>,
  updateValidator?: Maybe<Validator>,
  update_comments?: Maybe<Comments_Mutation_Response>,
  update_onchain_proposals?: Maybe<Onchain_Proposals_Mutation_Response>,
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  update_posts?: Maybe<Posts_Mutation_Response>,
  upsertBlockNumber: BlockNumber,
  upsertEra: Era,
  upsertNomination: Nomination,
  upsertProposal: Proposal,
  upsertProposalArgument: ProposalArgument,
  upsertReward: Reward,
  upsertSession: Session,
  upsertSlashing: Slashing,
  upsertStake: Stake,
  upsertTotalIssuance: TotalIssuance,
  upsertValidator: Validator,
  verifyEmail?: Maybe<ChangeResponse>,
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


export type Mutation_RootCreateProposalArgs = {
  data: ProposalCreateInput
};


export type Mutation_RootCreateProposalArgumentArgs = {
  data: ProposalArgumentCreateInput
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


export type Mutation_RootDeleteManyProposalArgumentsArgs = {
  where?: Maybe<ProposalArgumentWhereInput>
};


export type Mutation_RootDeleteManyProposalsArgs = {
  where?: Maybe<ProposalWhereInput>
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


export type Mutation_RootDeleteProposalArgs = {
  where: ProposalWhereUniqueInput
};


export type Mutation_RootDeleteProposalArgumentArgs = {
  where: ProposalArgumentWhereUniqueInput
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


export type Mutation_RootDelete_Onchain_ProposalsArgs = {
  where: Onchain_Proposals_Bool_Exp
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


export type Mutation_RootInsert_Onchain_ProposalsArgs = {
  objects: Array<Onchain_Proposals_Insert_Input>,
  on_conflict?: Maybe<Onchain_Proposals_On_Conflict>
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
  email: Scalars['String'],
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


export type Mutation_RootUpdateManyProposalArgumentsArgs = {
  data: ProposalArgumentUpdateManyMutationInput,
  where?: Maybe<ProposalArgumentWhereInput>
};


export type Mutation_RootUpdateManyProposalsArgs = {
  data: ProposalUpdateManyMutationInput,
  where?: Maybe<ProposalWhereInput>
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


export type Mutation_RootUpdateProposalArgs = {
  data: ProposalUpdateInput,
  where: ProposalWhereUniqueInput
};


export type Mutation_RootUpdateProposalArgumentArgs = {
  data: ProposalArgumentUpdateInput,
  where: ProposalArgumentWhereUniqueInput
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


export type Mutation_RootUpdate_Onchain_ProposalsArgs = {
  _inc?: Maybe<Onchain_Proposals_Inc_Input>,
  _set?: Maybe<Onchain_Proposals_Set_Input>,
  where: Onchain_Proposals_Bool_Exp
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


export type Mutation_RootUpsertProposalArgs = {
  create: ProposalCreateInput,
  update: ProposalUpdateInput,
  where: ProposalWhereUniqueInput
};


export type Mutation_RootUpsertProposalArgumentArgs = {
  create: ProposalArgumentCreateInput,
  update: ProposalArgumentUpdateInput,
  where: ProposalArgumentWhereUniqueInput
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

export type Onchain_Proposals = {
   __typename?: 'onchain_proposals',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  onchain_proposal_id: Scalars['Int'],
  post: Posts,
  post_id: Scalars['Int'],
  proposal?: Maybe<Proposal>,
  proposer_address: Scalars['String'],
};


export type Onchain_ProposalsProposalArgs = {
  where: ProposalWhereUniqueInput_Remote_Rel_Public_Onchain_Proposalsproposal
};

export type Onchain_Proposals_Aggregate = {
   __typename?: 'onchain_proposals_aggregate',
  aggregate?: Maybe<Onchain_Proposals_Aggregate_Fields>,
  nodes: Array<Onchain_Proposals>,
};

export type Onchain_Proposals_Aggregate_Fields = {
   __typename?: 'onchain_proposals_aggregate_fields',
  avg?: Maybe<Onchain_Proposals_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Onchain_Proposals_Max_Fields>,
  min?: Maybe<Onchain_Proposals_Min_Fields>,
  stddev?: Maybe<Onchain_Proposals_Stddev_Fields>,
  stddev_pop?: Maybe<Onchain_Proposals_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Onchain_Proposals_Stddev_Samp_Fields>,
  sum?: Maybe<Onchain_Proposals_Sum_Fields>,
  var_pop?: Maybe<Onchain_Proposals_Var_Pop_Fields>,
  var_samp?: Maybe<Onchain_Proposals_Var_Samp_Fields>,
  variance?: Maybe<Onchain_Proposals_Variance_Fields>,
};


export type Onchain_Proposals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onchain_Proposals_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Onchain_Proposals_Aggregate_Order_By = {
  avg?: Maybe<Onchain_Proposals_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Onchain_Proposals_Max_Order_By>,
  min?: Maybe<Onchain_Proposals_Min_Order_By>,
  stddev?: Maybe<Onchain_Proposals_Stddev_Order_By>,
  stddev_pop?: Maybe<Onchain_Proposals_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Onchain_Proposals_Stddev_Samp_Order_By>,
  sum?: Maybe<Onchain_Proposals_Sum_Order_By>,
  var_pop?: Maybe<Onchain_Proposals_Var_Pop_Order_By>,
  var_samp?: Maybe<Onchain_Proposals_Var_Samp_Order_By>,
  variance?: Maybe<Onchain_Proposals_Variance_Order_By>,
};

export type Onchain_Proposals_Arr_Rel_Insert_Input = {
  data: Array<Onchain_Proposals_Insert_Input>,
  on_conflict?: Maybe<Onchain_Proposals_On_Conflict>,
};

export type Onchain_Proposals_Avg_Fields = {
   __typename?: 'onchain_proposals_avg_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Avg_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Proposals_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onchain_Proposals_Bool_Exp>>>,
  _not?: Maybe<Onchain_Proposals_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Onchain_Proposals_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  onchain_proposal_id?: Maybe<Int_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  proposer_address?: Maybe<String_Comparison_Exp>,
};

export enum Onchain_Proposals_Constraint {
  OnchainProposalsChainDbIdKey = 'onchain_proposals_chain_db_id_key',
  ProposalsPkey = 'proposals_pkey',
  ProposalsPostIdKey = 'proposals_post_id_key'
}

export type Onchain_Proposals_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Onchain_Proposals_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Proposals_Max_Fields = {
   __typename?: 'onchain_proposals_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Proposals_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export type Onchain_Proposals_Min_Fields = {
   __typename?: 'onchain_proposals_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Proposals_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export type Onchain_Proposals_Mutation_Response = {
   __typename?: 'onchain_proposals_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Onchain_Proposals>,
};

export type Onchain_Proposals_Obj_Rel_Insert_Input = {
  data: Onchain_Proposals_Insert_Input,
  on_conflict?: Maybe<Onchain_Proposals_On_Conflict>,
};

export type Onchain_Proposals_On_Conflict = {
  constraint: Onchain_Proposals_Constraint,
  update_columns: Array<Onchain_Proposals_Update_Column>,
  where?: Maybe<Onchain_Proposals_Bool_Exp>,
};

export type Onchain_Proposals_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  proposer_address?: Maybe<Order_By>,
};

export enum Onchain_Proposals_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  OnchainProposalId = 'onchain_proposal_id',
  PostId = 'post_id',
  ProposerAddress = 'proposer_address'
}

export type Onchain_Proposals_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  proposer_address?: Maybe<Scalars['String']>,
};

export type Onchain_Proposals_Stddev_Fields = {
   __typename?: 'onchain_proposals_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Proposals_Stddev_Pop_Fields = {
   __typename?: 'onchain_proposals_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Proposals_Stddev_Samp_Fields = {
   __typename?: 'onchain_proposals_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Proposals_Sum_Fields = {
   __typename?: 'onchain_proposals_sum_fields',
  id?: Maybe<Scalars['Int']>,
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

export type Onchain_Proposals_Sum_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export enum Onchain_Proposals_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  OnchainProposalId = 'onchain_proposal_id',
  PostId = 'post_id',
  ProposerAddress = 'proposer_address'
}

export type Onchain_Proposals_Var_Pop_Fields = {
   __typename?: 'onchain_proposals_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Proposals_Var_Samp_Fields = {
   __typename?: 'onchain_proposals_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

export type Onchain_Proposals_Variance_Fields = {
   __typename?: 'onchain_proposals_variance_fields',
  id?: Maybe<Scalars['Float']>,
  onchain_proposal_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

export type Onchain_Proposals_Variance_Order_By = {
  id?: Maybe<Order_By>,
  onchain_proposal_id?: Maybe<Order_By>,
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
  created_at?: Maybe<Scalars['timestamptz']>,
  id: Scalars['Int'],
  onchain_proposal?: Maybe<Onchain_Proposals>,
  title: Scalars['String'],
  topic?: Maybe<Post_Topics>,
  topic_id?: Maybe<Scalars['Int']>,
  type: Post_Types,
  type_id: Scalars['Int'],
  updated_at?: Maybe<Scalars['timestamptz']>,
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
  onchain_proposal?: Maybe<Onchain_Proposals_Bool_Exp>,
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
  onchain_proposal?: Maybe<Onchain_Proposals_Obj_Rel_Insert_Input>,
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
  onchain_proposal?: Maybe<Onchain_Proposals_Order_By>,
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

export enum PrismaDatabase {
  Default = 'default'
}

export type Proposal = {
   __typename?: 'Proposal',
  blockNumber: BlockNumber,
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  proposal: Scalars['String'],
  proposalArguments?: Maybe<Array<ProposalArgument>>,
  proposalId: Scalars['Int'],
  proposer: Scalars['String'],
  section: Scalars['String'],
};


export type ProposalProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalArgumentWhereInput>
};

export type ProposalArgument = Node & {
   __typename?: 'ProposalArgument',
  id: Scalars['ID'],
  name: Scalars['String'],
  proposal: Proposal,
  value: Scalars['String'],
};

export type ProposalArgumentConnection = {
   __typename?: 'ProposalArgumentConnection',
  aggregate: AggregateProposalArgument,
  edges: Array<Maybe<ProposalArgumentEdge>>,
  pageInfo: PageInfo,
};

export type ProposalArgumentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  proposal: ProposalCreateOneWithoutProposalArgumentsInput,
  value: Scalars['String'],
};

export type ProposalArgumentCreateManyWithoutProposalInput = {
  connect?: Maybe<Array<ProposalArgumentWhereUniqueInput>>,
  create?: Maybe<Array<ProposalArgumentCreateWithoutProposalInput>>,
};

export type ProposalArgumentCreateWithoutProposalInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
};

export type ProposalArgumentEdge = {
   __typename?: 'ProposalArgumentEdge',
  cursor: Scalars['String'],
  node: ProposalArgument,
};

export enum ProposalArgumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ProposalArgumentPreviousValues = {
   __typename?: 'ProposalArgumentPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  value: Scalars['String'],
};

export type ProposalArgumentScalarWhereInput = {
  AND?: Maybe<Array<ProposalArgumentScalarWhereInput>>,
  NOT?: Maybe<Array<ProposalArgumentScalarWhereInput>>,
  OR?: Maybe<Array<ProposalArgumentScalarWhereInput>>,
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

export type ProposalArgumentSubscriptionPayload = {
   __typename?: 'ProposalArgumentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<ProposalArgument>,
  previousValues?: Maybe<ProposalArgumentPreviousValues>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
};

export type ProposalArgumentSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalArgumentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ProposalArgumentSubscriptionWhereInput>>,
  OR?: Maybe<Array<ProposalArgumentSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  node?: Maybe<ProposalArgumentWhereInput>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
};

export type ProposalArgumentUpdateInput = {
  name?: Maybe<Scalars['String']>,
  proposal?: Maybe<ProposalUpdateOneRequiredWithoutProposalArgumentsInput>,
  value?: Maybe<Scalars['String']>,
};

export type ProposalArgumentUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type ProposalArgumentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type ProposalArgumentUpdateManyWithoutProposalInput = {
  connect?: Maybe<Array<ProposalArgumentWhereUniqueInput>>,
  create?: Maybe<Array<ProposalArgumentCreateWithoutProposalInput>>,
  delete?: Maybe<Array<ProposalArgumentWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ProposalArgumentScalarWhereInput>>,
  disconnect?: Maybe<Array<ProposalArgumentWhereUniqueInput>>,
  set?: Maybe<Array<ProposalArgumentWhereUniqueInput>>,
  update?: Maybe<Array<ProposalArgumentUpdateWithWhereUniqueWithoutProposalInput>>,
  updateMany?: Maybe<Array<ProposalArgumentUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ProposalArgumentUpsertWithWhereUniqueWithoutProposalInput>>,
};

export type ProposalArgumentUpdateManyWithWhereNestedInput = {
  data: ProposalArgumentUpdateManyDataInput,
  where: ProposalArgumentScalarWhereInput,
};

export type ProposalArgumentUpdateWithoutProposalDataInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type ProposalArgumentUpdateWithWhereUniqueWithoutProposalInput = {
  data: ProposalArgumentUpdateWithoutProposalDataInput,
  where: ProposalArgumentWhereUniqueInput,
};

export type ProposalArgumentUpsertWithWhereUniqueWithoutProposalInput = {
  create: ProposalArgumentCreateWithoutProposalInput,
  update: ProposalArgumentUpdateWithoutProposalDataInput,
  where: ProposalArgumentWhereUniqueInput,
};

export type ProposalArgumentWhereInput = {
  AND?: Maybe<Array<ProposalArgumentWhereInput>>,
  NOT?: Maybe<Array<ProposalArgumentWhereInput>>,
  OR?: Maybe<Array<ProposalArgumentWhereInput>>,
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
  proposal?: Maybe<ProposalWhereInput>,
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

export type ProposalArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ProposalConnection = {
   __typename?: 'ProposalConnection',
  aggregate: AggregateProposal,
  edges: Array<Maybe<ProposalEdge>>,
  pageInfo: PageInfo,
};

export type ProposalCreateInput = {
  blockNumber: BlockNumberCreateOneInput,
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  proposal: Scalars['String'],
  proposalArguments?: Maybe<ProposalArgumentCreateManyWithoutProposalInput>,
  proposalId: Scalars['Int'],
  proposer: Scalars['String'],
  section: Scalars['String'],
};

export type ProposalCreateOneWithoutProposalArgumentsInput = {
  connect?: Maybe<ProposalWhereUniqueInput>,
  create?: Maybe<ProposalCreateWithoutProposalArgumentsInput>,
};

export type ProposalCreateWithoutProposalArgumentsInput = {
  blockNumber: BlockNumberCreateOneInput,
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  proposal: Scalars['String'],
  proposalId: Scalars['Int'],
  proposer: Scalars['String'],
  section: Scalars['String'],
};

export type ProposalEdge = {
   __typename?: 'ProposalEdge',
  cursor: Scalars['String'],
  node: Proposal,
};

export enum ProposalOrderByInput {
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
  ProposalIdAsc = 'proposalId_ASC',
  ProposalIdDesc = 'proposalId_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  ProposerAsc = 'proposer_ASC',
  ProposerDesc = 'proposer_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC'
}

export type ProposalPreviousValues = {
   __typename?: 'ProposalPreviousValues',
  depositAmount: Scalars['String'],
  hash: Scalars['String'],
  id: Scalars['Int'],
  metaDescription: Scalars['String'],
  method: Scalars['String'],
  proposal: Scalars['String'],
  proposalId: Scalars['Int'],
  proposer: Scalars['String'],
  section: Scalars['String'],
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
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  proposal?: Maybe<Scalars['String']>,
  proposalArguments?: Maybe<ProposalArgumentUpdateManyWithoutProposalInput>,
  proposalId?: Maybe<Scalars['Int']>,
  proposer?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
};

export type ProposalUpdateManyMutationInput = {
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  proposal?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  proposer?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
};

export type ProposalUpdateOneRequiredWithoutProposalArgumentsInput = {
  connect?: Maybe<ProposalWhereUniqueInput>,
  create?: Maybe<ProposalCreateWithoutProposalArgumentsInput>,
  update?: Maybe<ProposalUpdateWithoutProposalArgumentsDataInput>,
  upsert?: Maybe<ProposalUpsertWithoutProposalArgumentsInput>,
};

export type ProposalUpdateWithoutProposalArgumentsDataInput = {
  blockNumber?: Maybe<BlockNumberUpdateOneRequiredInput>,
  depositAmount?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  proposal?: Maybe<Scalars['String']>,
  proposalId?: Maybe<Scalars['Int']>,
  proposer?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
};

export type ProposalUpsertWithoutProposalArgumentsInput = {
  create: ProposalCreateWithoutProposalArgumentsInput,
  update: ProposalUpdateWithoutProposalArgumentsDataInput,
};

export type ProposalWhereInput = {
  AND?: Maybe<Array<ProposalWhereInput>>,
  NOT?: Maybe<Array<ProposalWhereInput>>,
  OR?: Maybe<Array<ProposalWhereInput>>,
  blockNumber?: Maybe<BlockNumberWhereInput>,
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
  id?: Maybe<Scalars['Int']>,
  id_gt?: Maybe<Scalars['Int']>,
  id_gte?: Maybe<Scalars['Int']>,
  id_in?: Maybe<Array<Scalars['Int']>>,
  id_lt?: Maybe<Scalars['Int']>,
  id_lte?: Maybe<Scalars['Int']>,
  id_not?: Maybe<Scalars['Int']>,
  id_not_in?: Maybe<Array<Scalars['Int']>>,
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
  proposal?: Maybe<Scalars['String']>,
  proposalArguments_every?: Maybe<ProposalArgumentWhereInput>,
  proposalArguments_none?: Maybe<ProposalArgumentWhereInput>,
  proposalArguments_some?: Maybe<ProposalArgumentWhereInput>,
  proposalId?: Maybe<Scalars['Int']>,
  proposalId_gt?: Maybe<Scalars['Int']>,
  proposalId_gte?: Maybe<Scalars['Int']>,
  proposalId_in?: Maybe<Array<Scalars['Int']>>,
  proposalId_lt?: Maybe<Scalars['Int']>,
  proposalId_lte?: Maybe<Scalars['Int']>,
  proposalId_not?: Maybe<Scalars['Int']>,
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>,
  proposal_contains?: Maybe<Scalars['String']>,
  proposal_ends_with?: Maybe<Scalars['String']>,
  proposal_gt?: Maybe<Scalars['String']>,
  proposal_gte?: Maybe<Scalars['String']>,
  proposal_in?: Maybe<Array<Scalars['String']>>,
  proposal_lt?: Maybe<Scalars['String']>,
  proposal_lte?: Maybe<Scalars['String']>,
  proposal_not?: Maybe<Scalars['String']>,
  proposal_not_contains?: Maybe<Scalars['String']>,
  proposal_not_ends_with?: Maybe<Scalars['String']>,
  proposal_not_in?: Maybe<Array<Scalars['String']>>,
  proposal_not_starts_with?: Maybe<Scalars['String']>,
  proposal_starts_with?: Maybe<Scalars['String']>,
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

export type ProposalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  proposalId?: Maybe<Scalars['Int']>,
};

export type ProposalWhereUniqueInput_Remote_Rel_Public_Onchain_Proposalsproposal = {
  id?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  subscription?: Maybe<Subscription>,
  token?: Maybe<Token>,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
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
  onchain_proposals: Array<Onchain_Proposals>,
  onchain_proposals_aggregate: Onchain_Proposals_Aggregate,
  onchain_proposals_by_pk?: Maybe<Onchain_Proposals>,
  post_topics: Array<Post_Topics>,
  post_topics_aggregate: Post_Topics_Aggregate,
  post_topics_by_pk?: Maybe<Post_Topics>,
  post_types: Array<Post_Types>,
  post_types_aggregate: Post_Types_Aggregate,
  post_types_by_pk?: Maybe<Post_Types>,
  posts: Array<Posts>,
  posts_aggregate: Posts_Aggregate,
  posts_by_pk?: Maybe<Posts>,
  proposal?: Maybe<Proposal>,
  proposalArgument?: Maybe<ProposalArgument>,
  proposalArguments: Array<Maybe<ProposalArgument>>,
  proposalArgumentsConnection: ProposalArgumentConnection,
  proposals: Array<Maybe<Proposal>>,
  proposalsConnection: ProposalConnection,
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
  users?: Maybe<Array<Maybe<User>>>,
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


export type Query_RootOnchain_ProposalsArgs = {
  distinct_on?: Maybe<Array<Onchain_Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Proposals_Order_By>>,
  where?: Maybe<Onchain_Proposals_Bool_Exp>
};


export type Query_RootOnchain_Proposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Proposals_Order_By>>,
  where?: Maybe<Onchain_Proposals_Bool_Exp>
};


export type Query_RootOnchain_Proposals_By_PkArgs = {
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


export type Query_RootProposalArgs = {
  where: ProposalWhereUniqueInput
};


export type Query_RootProposalArgumentArgs = {
  where: ProposalArgumentWhereUniqueInput
};


export type Query_RootProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalArgumentWhereInput>
};


export type Query_RootProposalArgumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProposalArgumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProposalArgumentWhereInput>
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
  onchain_proposals: Array<Onchain_Proposals>,
  onchain_proposals_aggregate: Onchain_Proposals_Aggregate,
  onchain_proposals_by_pk?: Maybe<Onchain_Proposals>,
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


export type Subscription_RootOnchain_ProposalsArgs = {
  distinct_on?: Maybe<Array<Onchain_Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Proposals_Order_By>>,
  where?: Maybe<Onchain_Proposals_Bool_Exp>
};


export type Subscription_RootOnchain_Proposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Onchain_Proposals_Order_By>>,
  where?: Maybe<Onchain_Proposals_Bool_Exp>
};


export type Subscription_RootOnchain_Proposals_By_PkArgs = {
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

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'username'>
);

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

export type LatestDiscussionPostsQueryVariables = {};


export type LatestDiscussionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
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

export type LatestPostsQueryVariables = {};


export type LatestPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type CommentFieldsFragment = (
  { __typename?: 'comments' }
  & Pick<Comments, 'content' | 'created_at' | 'id' | 'updated_at'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type CommentRecursiveFragment = (
  { __typename?: 'comments' }
  & { comments: Array<(
    { __typename?: 'comments' }
    & { comments: Array<(
      { __typename?: 'comments' }
      & CommentFieldsFragment
    )> }
    & CommentFieldsFragment
  )> }
  & CommentFieldsFragment
);

export type PostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'created_at' | 'id' | 'updated_at' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )>, comments: Array<(
    { __typename?: 'comments' }
    & CommentRecursiveFragment
  )>, topic: Maybe<(
    { __typename?: 'post_topics' }
    & Pick<Post_Topics, 'id' | 'name'>
  )>, type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type PostAndCommentsQueryVariables = {
  id: Scalars['Int']
};


export type PostAndCommentsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & PostFragment
  )> }
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

export type AddRootCommentMutationVariables = {
  authorId: Scalars['Int'],
  content: Scalars['String'],
  postId: Scalars['Int']
};


export type AddRootCommentMutation = (
  { __typename: 'mutation_root' }
  & { insert_comments: Maybe<(
    { __typename?: 'comments_mutation_response' }
    & Pick<Comments_Mutation_Response, 'affected_rows'>
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

export type LatestProposalPostsQueryVariables = {};


export type LatestProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
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

export const UserFragmentFragmentDoc = gql`
    fragment userFragment on User {
  id
  name
  username
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
  author {
    id
    username
  }
  content
  created_at
  id
  updated_at
}
    `;
export const CommentRecursiveFragmentDoc = gql`
    fragment commentRecursive on comments {
  ...commentFields
  comments {
    ...commentFields
    comments {
      ...commentFields
    }
  }
}
    ${CommentFieldsFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment post on posts {
  author {
    id
    username
  }
  content
  created_at
  id
  updated_at
  comments(where: {parent_comment_id: {_is_null: true}}, order_by: {created_at: asc}) {
    ...commentRecursive
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
    ${CommentRecursiveFragmentDoc}`;
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
export const LatestDiscussionPostsDocument = gql`
    query LatestDiscussionPosts {
  posts(order_by: {created_at: desc}, limit: 20, where: {type: {id: {_eq: 1}}}) {
    id
    title
    author {
      id
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
export const LatestPostsDocument = gql`
    query LatestPosts {
  posts(order_by: {created_at: desc}) {
    id
    title
    author {
      id
      username
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useLatestPostsQuery__
 *
 * To run a query within a React component, call `useLatestPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestPostsQuery, LatestPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestPostsQuery, LatestPostsQueryVariables>(LatestPostsDocument, baseOptions);
      }
export function useLatestPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestPostsQuery, LatestPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestPostsQuery, LatestPostsQueryVariables>(LatestPostsDocument, baseOptions);
        }
export type LatestPostsQueryHookResult = ReturnType<typeof useLatestPostsQuery>;
export type LatestPostsLazyQueryHookResult = ReturnType<typeof useLatestPostsLazyQuery>;
export type LatestPostsQueryResult = ApolloReactCommon.QueryResult<LatestPostsQuery, LatestPostsQueryVariables>;
export const PostAndCommentsDocument = gql`
    query PostAndComments($id: Int!) {
  posts(where: {id: {_eq: $id}}) {
    ...post
  }
}
    ${PostFragmentDoc}`;

/**
 * __usePostAndCommentsQuery__
 *
 * To run a query within a React component, call `usePostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostAndCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostAndCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostAndCommentsQuery, PostAndCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostAndCommentsQuery, PostAndCommentsQueryVariables>(PostAndCommentsDocument, baseOptions);
      }
export function usePostAndCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostAndCommentsQuery, PostAndCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostAndCommentsQuery, PostAndCommentsQueryVariables>(PostAndCommentsDocument, baseOptions);
        }
export type PostAndCommentsQueryHookResult = ReturnType<typeof usePostAndCommentsQuery>;
export type PostAndCommentsLazyQueryHookResult = ReturnType<typeof usePostAndCommentsLazyQuery>;
export type PostAndCommentsQueryResult = ApolloReactCommon.QueryResult<PostAndCommentsQuery, PostAndCommentsQueryVariables>;
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
export const AddRootCommentDocument = gql`
    mutation AddRootComment($authorId: Int!, $content: String!, $postId: Int!) {
  __typename
  insert_comments(objects: {author_id: $authorId, content: $content, post_id: $postId}) {
    affected_rows
  }
}
    `;
export type AddRootCommentMutationFn = ApolloReactCommon.MutationFunction<AddRootCommentMutation, AddRootCommentMutationVariables>;

/**
 * __useAddRootCommentMutation__
 *
 * To run a mutation, you first call `useAddRootCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRootCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRootCommentMutation, { data, loading, error }] = useAddRootCommentMutation({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      content: // value for 'content'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddRootCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRootCommentMutation, AddRootCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRootCommentMutation, AddRootCommentMutationVariables>(AddRootCommentDocument, baseOptions);
      }
export type AddRootCommentMutationHookResult = ReturnType<typeof useAddRootCommentMutation>;
export type AddRootCommentMutationResult = ApolloReactCommon.MutationResult<AddRootCommentMutation>;
export type AddRootCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRootCommentMutation, AddRootCommentMutationVariables>;
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
export const LatestProposalPostsDocument = gql`
    query LatestProposalPosts {
  posts(order_by: {created_at: desc}, limit: 20, where: {type: {id: {_eq: 2}}}) {
    id
    title
    author {
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
 * __useLatestProposalPostsQuery__
 *
 * To run a query within a React component, call `useLatestProposalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestProposalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestProposalPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestProposalPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LatestProposalPostsQuery, LatestProposalPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<LatestProposalPostsQuery, LatestProposalPostsQueryVariables>(LatestProposalPostsDocument, baseOptions);
      }
export function useLatestProposalPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LatestProposalPostsQuery, LatestProposalPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LatestProposalPostsQuery, LatestProposalPostsQueryVariables>(LatestProposalPostsDocument, baseOptions);
        }
export type LatestProposalPostsQueryHookResult = ReturnType<typeof useLatestProposalPostsQuery>;
export type LatestProposalPostsLazyQueryHookResult = ReturnType<typeof useLatestProposalPostsLazyQuery>;
export type LatestProposalPostsQueryResult = ApolloReactCommon.QueryResult<LatestProposalPostsQuery, LatestProposalPostsQueryVariables>;
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