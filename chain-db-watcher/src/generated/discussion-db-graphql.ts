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
  timestamptz: any;
  uuid: any;
  timestamp: any;
  bpchar: any;
  Json: any;
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

export type BlockIndex = Node & {
   __typename?: 'BlockIndex';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  index: Scalars['Int'];
  startFrom: Scalars['Int'];
};

export type BlockNumber = Node & {
   __typename?: 'BlockNumber';
  authoredBy: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  number: Scalars['Int'];
  startDateTime: Scalars['DateTime'];
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

export type BlockNumberWhereInput = {
  AND?: Maybe<Array<BlockNumberWhereInput>>;
  NOT?: Maybe<Array<BlockNumberWhereInput>>;
  OR?: Maybe<Array<BlockNumberWhereInput>>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredBy_contains?: Maybe<Scalars['String']>;
  authoredBy_ends_with?: Maybe<Scalars['String']>;
  authoredBy_gt?: Maybe<Scalars['String']>;
  authoredBy_gte?: Maybe<Scalars['String']>;
  authoredBy_in?: Maybe<Array<Scalars['String']>>;
  authoredBy_lt?: Maybe<Scalars['String']>;
  authoredBy_lte?: Maybe<Scalars['String']>;
  authoredBy_not?: Maybe<Scalars['String']>;
  authoredBy_not_contains?: Maybe<Scalars['String']>;
  authoredBy_not_ends_with?: Maybe<Scalars['String']>;
  authoredBy_not_in?: Maybe<Array<Scalars['String']>>;
  authoredBy_not_starts_with?: Maybe<Scalars['String']>;
  authoredBy_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  hash_contains?: Maybe<Scalars['String']>;
  hash_ends_with?: Maybe<Scalars['String']>;
  hash_gt?: Maybe<Scalars['String']>;
  hash_gte?: Maybe<Scalars['String']>;
  hash_in?: Maybe<Array<Scalars['String']>>;
  hash_lt?: Maybe<Scalars['String']>;
  hash_lte?: Maybe<Scalars['String']>;
  hash_not?: Maybe<Scalars['String']>;
  hash_not_contains?: Maybe<Scalars['String']>;
  hash_not_ends_with?: Maybe<Scalars['String']>;
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  hash_not_starts_with?: Maybe<Scalars['String']>;
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  number_gt?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
  number_in?: Maybe<Array<Scalars['Int']>>;
  number_lt?: Maybe<Scalars['Int']>;
  number_lte?: Maybe<Scalars['Int']>;
  number_not?: Maybe<Scalars['Int']>;
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  startDateTime_gt?: Maybe<Scalars['DateTime']>;
  startDateTime_gte?: Maybe<Scalars['DateTime']>;
  startDateTime_in?: Maybe<Array<Scalars['DateTime']>>;
  startDateTime_lt?: Maybe<Scalars['DateTime']>;
  startDateTime_lte?: Maybe<Scalars['DateTime']>;
  startDateTime_not?: Maybe<Scalars['DateTime']>;
  startDateTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type BlockNumberWhereUniqueInput = {
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
};


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

export type Comment_Reactions = {
   __typename?: 'comment_reactions';
  comment: Comments;
  comment_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  reacting_user?: Maybe<User>;
  reaction: Scalars['bpchar'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
};

export type Comment_Reactions_Aggregate = {
   __typename?: 'comment_reactions_aggregate';
  aggregate?: Maybe<Comment_Reactions_Aggregate_Fields>;
  nodes: Array<Comment_Reactions>;
};

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


export type Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};

export type Comment_Reactions_Avg_Fields = {
   __typename?: 'comment_reactions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

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

export enum Comment_Reactions_Constraint {
  CommentReactionsPkey = 'comment_reactions_pkey'
}

export type Comment_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Comment_Reactions_Insert_Input = {
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Comment_Reactions_Max_Fields = {
   __typename?: 'comment_reactions_max_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Comment_Reactions_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Min_Fields = {
   __typename?: 'comment_reactions_min_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Comment_Reactions_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Mutation_Response = {
   __typename?: 'comment_reactions_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Comment_Reactions>;
};

export type Comment_Reactions_Obj_Rel_Insert_Input = {
  data: Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};

export type Comment_Reactions_On_Conflict = {
  constraint: Comment_Reactions_Constraint;
  update_columns: Array<Comment_Reactions_Update_Column>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};

export type Comment_Reactions_Order_By = {
  comment?: Maybe<Comments_Order_By>;
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Comment_Reactions_Stddev_Fields = {
   __typename?: 'comment_reactions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Stddev_Pop_Fields = {
   __typename?: 'comment_reactions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Stddev_Samp_Fields = {
   __typename?: 'comment_reactions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Sum_Fields = {
   __typename?: 'comment_reactions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Comment_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
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
   __typename?: 'comment_reactions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Var_Samp_Fields = {
   __typename?: 'comment_reactions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comment_Reactions_Variance_Fields = {
   __typename?: 'comment_reactions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Comment_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comments = {
   __typename?: 'comments';
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  comment_reactions: Array<Comment_Reactions>;
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  post: Posts;
  post_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


export type CommentsComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


export type CommentsComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};

export type Comments_Aggregate = {
   __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

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


export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Comments_Avg_Fields = {
   __typename?: 'comments_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Comments_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

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

export enum Comments_Constraint {
  CommentsPkey = 'comments_pkey'
}

export type Comments_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

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

export type Comments_Max_Fields = {
   __typename?: 'comments_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Comments_Min_Fields = {
   __typename?: 'comments_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Comments_Mutation_Response = {
   __typename?: 'comments_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Comments>;
};

export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

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

export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Comments_Stddev_Fields = {
   __typename?: 'comments_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Comments_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Comments_Stddev_Pop_Fields = {
   __typename?: 'comments_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Comments_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Comments_Stddev_Samp_Fields = {
   __typename?: 'comments_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Comments_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Comments_Sum_Fields = {
   __typename?: 'comments_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

export type Comments_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
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
   __typename?: 'comments_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Comments_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Comments_Var_Samp_Fields = {
   __typename?: 'comments_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Comments_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Comments_Variance_Fields = {
   __typename?: 'comments_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

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

export enum CouncilMemberOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CouncilMemberWhereInput = {
  AND?: Maybe<Array<CouncilMemberWhereInput>>;
  NOT?: Maybe<Array<CouncilMemberWhereInput>>;
  OR?: Maybe<Array<CouncilMemberWhereInput>>;
  address?: Maybe<Scalars['String']>;
  address_contains?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  address_gte?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Scalars['String']>>;
  address_lt?: Maybe<Scalars['String']>;
  address_lte?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  address_not_in?: Maybe<Array<Scalars['String']>>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  councils_every?: Maybe<CouncilWhereInput>;
  councils_none?: Maybe<CouncilWhereInput>;
  councils_some?: Maybe<CouncilWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
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

export type CouncilWhereInput = {
  AND?: Maybe<Array<CouncilWhereInput>>;
  NOT?: Maybe<Array<CouncilWhereInput>>;
  OR?: Maybe<Array<CouncilWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
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
  NOT?: Maybe<Array<EraWhereInput>>;
  OR?: Maybe<Array<EraWhereInput>>;
  eraStartSessionIndex?: Maybe<SessionWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  index_gt?: Maybe<Scalars['Int']>;
  index_gte?: Maybe<Scalars['Int']>;
  index_in?: Maybe<Array<Scalars['Int']>>;
  index_lt?: Maybe<Scalars['Int']>;
  index_lte?: Maybe<Scalars['Int']>;
  index_not?: Maybe<Scalars['Int']>;
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  totalPoints?: Maybe<Scalars['String']>;
  totalPoints_contains?: Maybe<Scalars['String']>;
  totalPoints_ends_with?: Maybe<Scalars['String']>;
  totalPoints_gt?: Maybe<Scalars['String']>;
  totalPoints_gte?: Maybe<Scalars['String']>;
  totalPoints_in?: Maybe<Array<Scalars['String']>>;
  totalPoints_lt?: Maybe<Scalars['String']>;
  totalPoints_lte?: Maybe<Scalars['String']>;
  totalPoints_not?: Maybe<Scalars['String']>;
  totalPoints_not_contains?: Maybe<Scalars['String']>;
  totalPoints_not_ends_with?: Maybe<Scalars['String']>;
  totalPoints_not_in?: Maybe<Array<Scalars['String']>>;
  totalPoints_not_starts_with?: Maybe<Scalars['String']>;
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

export enum HeartBeatOrderByInput {
  AuthorityIdAsc = 'authorityId_ASC',
  AuthorityIdDesc = 'authorityId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeartBeatWhereInput = {
  AND?: Maybe<Array<HeartBeatWhereInput>>;
  NOT?: Maybe<Array<HeartBeatWhereInput>>;
  OR?: Maybe<Array<HeartBeatWhereInput>>;
  authorityId?: Maybe<Scalars['String']>;
  authorityId_contains?: Maybe<Scalars['String']>;
  authorityId_ends_with?: Maybe<Scalars['String']>;
  authorityId_gt?: Maybe<Scalars['String']>;
  authorityId_gte?: Maybe<Scalars['String']>;
  authorityId_in?: Maybe<Array<Scalars['String']>>;
  authorityId_lt?: Maybe<Scalars['String']>;
  authorityId_lte?: Maybe<Scalars['String']>;
  authorityId_not?: Maybe<Scalars['String']>;
  authorityId_not_contains?: Maybe<Scalars['String']>;
  authorityId_not_ends_with?: Maybe<Scalars['String']>;
  authorityId_not_in?: Maybe<Array<Scalars['String']>>;
  authorityId_not_starts_with?: Maybe<Scalars['String']>;
  authorityId_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  sessionIndex?: Maybe<SessionWhereInput>;
};

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
  user?: Maybe<User>;
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
  NOT?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  OR?: Maybe<Array<MotionProposalArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  motion?: Maybe<MotionWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_not_starts_with?: Maybe<Scalars['String']>;
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
};

export enum MotionStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type MotionStatusWhereInput = {
  AND?: Maybe<Array<MotionStatusWhereInput>>;
  NOT?: Maybe<Array<MotionStatusWhereInput>>;
  OR?: Maybe<Array<MotionStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  motion?: Maybe<MotionWhereInput>;
  status?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
};

export type MotionStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MotionSubscriptionPayload = {
   __typename?: 'MotionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Motion>;
  previousValues?: Maybe<MotionPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type MotionSubscriptionWhereInput = {
  AND?: Maybe<Array<MotionSubscriptionWhereInput>>;
  NOT?: Maybe<Array<MotionSubscriptionWhereInput>>;
  OR?: Maybe<Array<MotionSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<MotionWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type MotionWhereInput = {
  AND?: Maybe<Array<MotionWhereInput>>;
  NOT?: Maybe<Array<MotionWhereInput>>;
  OR?: Maybe<Array<MotionWhereInput>>;
  author?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  memberCount_gt?: Maybe<Scalars['Int']>;
  memberCount_gte?: Maybe<Scalars['Int']>;
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  memberCount_lt?: Maybe<Scalars['Int']>;
  memberCount_lte?: Maybe<Scalars['Int']>;
  memberCount_not?: Maybe<Scalars['Int']>;
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescription_contains?: Maybe<Scalars['String']>;
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  metaDescription_gt?: Maybe<Scalars['String']>;
  metaDescription_gte?: Maybe<Scalars['String']>;
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_lt?: Maybe<Scalars['String']>;
  metaDescription_lte?: Maybe<Scalars['String']>;
  metaDescription_not?: Maybe<Scalars['String']>;
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  method_contains?: Maybe<Scalars['String']>;
  method_ends_with?: Maybe<Scalars['String']>;
  method_gt?: Maybe<Scalars['String']>;
  method_gte?: Maybe<Scalars['String']>;
  method_in?: Maybe<Array<Scalars['String']>>;
  method_lt?: Maybe<Scalars['String']>;
  method_lte?: Maybe<Scalars['String']>;
  method_not?: Maybe<Scalars['String']>;
  method_not_contains?: Maybe<Scalars['String']>;
  method_not_ends_with?: Maybe<Scalars['String']>;
  method_not_in?: Maybe<Array<Scalars['String']>>;
  method_not_starts_with?: Maybe<Scalars['String']>;
  method_starts_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  motionProposalHash_not?: Maybe<Scalars['String']>;
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  motionProposalId?: Maybe<Scalars['Int']>;
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  motionProposalId_not?: Maybe<Scalars['Int']>;
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  section_contains?: Maybe<Scalars['String']>;
  section_ends_with?: Maybe<Scalars['String']>;
  section_gt?: Maybe<Scalars['String']>;
  section_gte?: Maybe<Scalars['String']>;
  section_in?: Maybe<Array<Scalars['String']>>;
  section_lt?: Maybe<Scalars['String']>;
  section_lte?: Maybe<Scalars['String']>;
  section_not?: Maybe<Scalars['String']>;
  section_not_contains?: Maybe<Scalars['String']>;
  section_not_ends_with?: Maybe<Scalars['String']>;
  section_not_in?: Maybe<Array<Scalars['String']>>;
  section_not_starts_with?: Maybe<Scalars['String']>;
  section_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion = {
  AND?: Maybe<Array<MotionWhereInput>>;
  NOT?: Maybe<Array<MotionWhereInput>>;
  OR?: Maybe<Array<MotionWhereInput>>;
  author?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  memberCount?: Maybe<Scalars['Int']>;
  memberCount_gt?: Maybe<Scalars['Int']>;
  memberCount_gte?: Maybe<Scalars['Int']>;
  memberCount_in?: Maybe<Array<Scalars['Int']>>;
  memberCount_lt?: Maybe<Scalars['Int']>;
  memberCount_lte?: Maybe<Scalars['Int']>;
  memberCount_not?: Maybe<Scalars['Int']>;
  memberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescription_contains?: Maybe<Scalars['String']>;
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  metaDescription_gt?: Maybe<Scalars['String']>;
  metaDescription_gte?: Maybe<Scalars['String']>;
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_lt?: Maybe<Scalars['String']>;
  metaDescription_lte?: Maybe<Scalars['String']>;
  metaDescription_not?: Maybe<Scalars['String']>;
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  method_contains?: Maybe<Scalars['String']>;
  method_ends_with?: Maybe<Scalars['String']>;
  method_gt?: Maybe<Scalars['String']>;
  method_gte?: Maybe<Scalars['String']>;
  method_in?: Maybe<Array<Scalars['String']>>;
  method_lt?: Maybe<Scalars['String']>;
  method_lte?: Maybe<Scalars['String']>;
  method_not?: Maybe<Scalars['String']>;
  method_not_contains?: Maybe<Scalars['String']>;
  method_not_ends_with?: Maybe<Scalars['String']>;
  method_not_in?: Maybe<Array<Scalars['String']>>;
  method_not_starts_with?: Maybe<Scalars['String']>;
  method_starts_with?: Maybe<Scalars['String']>;
  motionProposalArguments_every?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_none?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalArguments_some?: Maybe<MotionProposalArgumentWhereInput>;
  motionProposalHash?: Maybe<Scalars['String']>;
  motionProposalHash_contains?: Maybe<Scalars['String']>;
  motionProposalHash_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash_gt?: Maybe<Scalars['String']>;
  motionProposalHash_gte?: Maybe<Scalars['String']>;
  motionProposalHash_in?: Maybe<Array<Scalars['String']>>;
  motionProposalHash_lt?: Maybe<Scalars['String']>;
  motionProposalHash_lte?: Maybe<Scalars['String']>;
  motionProposalHash_not?: Maybe<Scalars['String']>;
  motionProposalHash_not_contains?: Maybe<Scalars['String']>;
  motionProposalHash_not_ends_with?: Maybe<Scalars['String']>;
  motionProposalHash_not_in?: Maybe<Array<Scalars['String']>>;
  motionProposalHash_not_starts_with?: Maybe<Scalars['String']>;
  motionProposalHash_starts_with?: Maybe<Scalars['String']>;
  motionProposalId_gt?: Maybe<Scalars['Int']>;
  motionProposalId_gte?: Maybe<Scalars['Int']>;
  motionProposalId_in?: Maybe<Array<Scalars['Int']>>;
  motionProposalId_lt?: Maybe<Scalars['Int']>;
  motionProposalId_lte?: Maybe<Scalars['Int']>;
  motionProposalId_not?: Maybe<Scalars['Int']>;
  motionProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  motionStatus_every?: Maybe<MotionStatusWhereInput>;
  motionStatus_none?: Maybe<MotionStatusWhereInput>;
  motionStatus_some?: Maybe<MotionStatusWhereInput>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  section_contains?: Maybe<Scalars['String']>;
  section_ends_with?: Maybe<Scalars['String']>;
  section_gt?: Maybe<Scalars['String']>;
  section_gte?: Maybe<Scalars['String']>;
  section_in?: Maybe<Array<Scalars['String']>>;
  section_lt?: Maybe<Scalars['String']>;
  section_lte?: Maybe<Scalars['String']>;
  section_not?: Maybe<Scalars['String']>;
  section_not_contains?: Maybe<Scalars['String']>;
  section_not_ends_with?: Maybe<Scalars['String']>;
  section_not_in?: Maybe<Array<Scalars['String']>>;
  section_not_starts_with?: Maybe<Scalars['String']>;
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
  addressUnlink?: Maybe<ChangeResponse>;
  changeEmail?: Maybe<ChangeResponse>;
  changeName?: Maybe<ChangeResponse>;
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


export type MutationAddressUnlinkArgs = {
  address: Scalars['String'];
};


export type MutationChangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationChangeNameArgs = {
  newName: Scalars['String'];
};


export type MutationChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationChangeUsernameArgs = {
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


export type MutationSignupArgs = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUndoEmailChangeArgs = {
  token: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};

export type Mutation_Root = {
   __typename?: 'mutation_root';
  addressLinkConfirm?: Maybe<ChangeResponse>;
  addressLinkStart?: Maybe<AddressLinkType>;
  addressLogin?: Maybe<LoginResponse>;
  addressLoginStart?: Maybe<AddressLoginType>;
  addressUnlink?: Maybe<ChangeResponse>;
  changeEmail?: Maybe<ChangeResponse>;
  changeName?: Maybe<ChangeResponse>;
  changeNotificationPreference?: Maybe<ChangeResponse>;
  changePassword?: Maybe<Message>;
  changeUsername?: Maybe<ChangeResponse>;
  delete_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  delete_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  delete_comments?: Maybe<Comments_Mutation_Response>;
  delete_comments_by_pk?: Maybe<Comments>;
  delete_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  delete_onchain_links_by_pk?: Maybe<Onchain_Links>;
  delete_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  delete_post_reactions_by_pk?: Maybe<Post_Reactions>;
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  delete_post_topics_by_pk?: Maybe<Post_Topics>;
  delete_post_types?: Maybe<Post_Types_Mutation_Response>;
  delete_post_types_by_pk?: Maybe<Post_Types>;
  delete_posts?: Maybe<Posts_Mutation_Response>;
  delete_posts_by_pk?: Maybe<Posts>;
  insert_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  insert_comment_reactions_one?: Maybe<Comment_Reactions>;
  insert_comments?: Maybe<Comments_Mutation_Response>;
  insert_comments_one?: Maybe<Comments>;
  insert_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  insert_onchain_links_one?: Maybe<Onchain_Links>;
  insert_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  insert_post_reactions_one?: Maybe<Post_Reactions>;
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  insert_post_topics_one?: Maybe<Post_Topics>;
  insert_post_types?: Maybe<Post_Types_Mutation_Response>;
  insert_post_types_one?: Maybe<Post_Types>;
  insert_posts?: Maybe<Posts_Mutation_Response>;
  insert_posts_one?: Maybe<Posts>;
  login?: Maybe<LoginResponse>;
  logout?: Maybe<Message>;
  postSubscribe?: Maybe<Message>;
  postUnsubscribe?: Maybe<Message>;
  reportContent?: Maybe<Message>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmailToken?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  signup?: Maybe<LoginResponse>;
  undoEmailChange?: Maybe<UndoEmailChangeResponse>;
  update_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  update_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  update_comments?: Maybe<Comments_Mutation_Response>;
  update_comments_by_pk?: Maybe<Comments>;
  update_onchain_links?: Maybe<Onchain_Links_Mutation_Response>;
  update_onchain_links_by_pk?: Maybe<Onchain_Links>;
  update_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  update_post_reactions_by_pk?: Maybe<Post_Reactions>;
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>;
  update_post_topics_by_pk?: Maybe<Post_Topics>;
  update_post_types?: Maybe<Post_Types_Mutation_Response>;
  update_post_types_by_pk?: Maybe<Post_Types>;
  update_posts?: Maybe<Posts_Mutation_Response>;
  update_posts_by_pk?: Maybe<Posts>;
  verifyEmail?: Maybe<ChangeResponse>;
};


export type Mutation_RootAddressLinkConfirmArgs = {
  address_id: Scalars['Int'];
  signature: Scalars['String'];
};


export type Mutation_RootAddressLinkStartArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


export type Mutation_RootAddressLoginArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type Mutation_RootAddressLoginStartArgs = {
  address: Scalars['String'];
};


export type Mutation_RootAddressUnlinkArgs = {
  address: Scalars['String'];
};


export type Mutation_RootChangeEmailArgs = {
  email: Scalars['String'];
};


export type Mutation_RootChangeNameArgs = {
  newName: Scalars['String'];
};


export type Mutation_RootChangeNotificationPreferenceArgs = {
  notificationPreferences?: Maybe<NotificationPreferencesInput>;
};


export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type Mutation_RootChangeUsernameArgs = {
  username: Scalars['String'];
};


export type Mutation_RootDelete_Comment_ReactionsArgs = {
  where: Comment_Reactions_Bool_Exp;
};


export type Mutation_RootDelete_Comment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Onchain_LinksArgs = {
  where: Onchain_Links_Bool_Exp;
};


export type Mutation_RootDelete_Onchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Post_ReactionsArgs = {
  where: Post_Reactions_Bool_Exp;
};


export type Mutation_RootDelete_Post_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Post_TopicsArgs = {
  where: Post_Topics_Bool_Exp;
};


export type Mutation_RootDelete_Post_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp;
};


export type Mutation_RootDelete_Post_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootInsert_Comment_ReactionsArgs = {
  objects: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};


export type Mutation_RootInsert_Comment_Reactions_OneArgs = {
  object: Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Comment_Reactions_On_Conflict>;
};


export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


export type Mutation_RootInsert_Onchain_LinksArgs = {
  objects: Array<Onchain_Links_Insert_Input>;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


export type Mutation_RootInsert_Onchain_Links_OneArgs = {
  object: Onchain_Links_Insert_Input;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};


export type Mutation_RootInsert_Post_ReactionsArgs = {
  objects: Array<Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};


export type Mutation_RootInsert_Post_Reactions_OneArgs = {
  object: Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};


export type Mutation_RootInsert_Post_TopicsArgs = {
  objects: Array<Post_Topics_Insert_Input>;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};


export type Mutation_RootInsert_Post_Topics_OneArgs = {
  object: Post_Topics_Insert_Input;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};


export type Mutation_RootInsert_Post_TypesArgs = {
  objects: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


export type Mutation_RootInsert_Post_Types_OneArgs = {
  object: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


export type Mutation_RootLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type Mutation_RootPostSubscribeArgs = {
  post_id: Scalars['Int'];
};


export type Mutation_RootPostUnsubscribeArgs = {
  post_id: Scalars['Int'];
};


export type Mutation_RootReportContentArgs = {
  comments?: Maybe<Scalars['String']>;
  content_id: Scalars['String'];
  network: Scalars['String'];
  reason: Scalars['String'];
  type: Scalars['String'];
};


export type Mutation_RootRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['Int'];
};


export type Mutation_RootSignupArgs = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type Mutation_RootUndoEmailChangeArgs = {
  token: Scalars['String'];
};


export type Mutation_RootUpdate_Comment_ReactionsArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>;
  _set?: Maybe<Comment_Reactions_Set_Input>;
  where: Comment_Reactions_Bool_Exp;
};


export type Mutation_RootUpdate_Comment_Reactions_By_PkArgs = {
  _inc?: Maybe<Comment_Reactions_Inc_Input>;
  _set?: Maybe<Comment_Reactions_Set_Input>;
  pk_columns: Comment_Reactions_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Onchain_LinksArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>;
  _set?: Maybe<Onchain_Links_Set_Input>;
  where: Onchain_Links_Bool_Exp;
};


export type Mutation_RootUpdate_Onchain_Links_By_PkArgs = {
  _inc?: Maybe<Onchain_Links_Inc_Input>;
  _set?: Maybe<Onchain_Links_Set_Input>;
  pk_columns: Onchain_Links_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Post_ReactionsArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>;
  _set?: Maybe<Post_Reactions_Set_Input>;
  where: Post_Reactions_Bool_Exp;
};


export type Mutation_RootUpdate_Post_Reactions_By_PkArgs = {
  _inc?: Maybe<Post_Reactions_Inc_Input>;
  _set?: Maybe<Post_Reactions_Set_Input>;
  pk_columns: Post_Reactions_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Post_TopicsArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>;
  _set?: Maybe<Post_Topics_Set_Input>;
  where: Post_Topics_Bool_Exp;
};


export type Mutation_RootUpdate_Post_Topics_By_PkArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>;
  _set?: Maybe<Post_Topics_Set_Input>;
  pk_columns: Post_Topics_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Post_TypesArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>;
  _set?: Maybe<Post_Types_Set_Input>;
  where: Post_Types_Bool_Exp;
};


export type Mutation_RootUpdate_Post_Types_By_PkArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>;
  _set?: Maybe<Post_Types_Set_Input>;
  pk_columns: Post_Types_Pk_Columns_Input;
};


export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


export type Mutation_RootVerifyEmailArgs = {
  token: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

export type Node = {
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

export type NominationWhereInput = {
  AND?: Maybe<Array<NominationWhereInput>>;
  NOT?: Maybe<Array<NominationWhereInput>>;
  OR?: Maybe<Array<NominationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  nominatorController?: Maybe<Scalars['String']>;
  nominatorController_contains?: Maybe<Scalars['String']>;
  nominatorController_ends_with?: Maybe<Scalars['String']>;
  nominatorController_gt?: Maybe<Scalars['String']>;
  nominatorController_gte?: Maybe<Scalars['String']>;
  nominatorController_in?: Maybe<Array<Scalars['String']>>;
  nominatorController_lt?: Maybe<Scalars['String']>;
  nominatorController_lte?: Maybe<Scalars['String']>;
  nominatorController_not?: Maybe<Scalars['String']>;
  nominatorController_not_contains?: Maybe<Scalars['String']>;
  nominatorController_not_ends_with?: Maybe<Scalars['String']>;
  nominatorController_not_in?: Maybe<Array<Scalars['String']>>;
  nominatorController_not_starts_with?: Maybe<Scalars['String']>;
  nominatorController_starts_with?: Maybe<Scalars['String']>;
  nominatorStash?: Maybe<Scalars['String']>;
  nominatorStash_contains?: Maybe<Scalars['String']>;
  nominatorStash_ends_with?: Maybe<Scalars['String']>;
  nominatorStash_gt?: Maybe<Scalars['String']>;
  nominatorStash_gte?: Maybe<Scalars['String']>;
  nominatorStash_in?: Maybe<Array<Scalars['String']>>;
  nominatorStash_lt?: Maybe<Scalars['String']>;
  nominatorStash_lte?: Maybe<Scalars['String']>;
  nominatorStash_not?: Maybe<Scalars['String']>;
  nominatorStash_not_contains?: Maybe<Scalars['String']>;
  nominatorStash_not_ends_with?: Maybe<Scalars['String']>;
  nominatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  nominatorStash_not_starts_with?: Maybe<Scalars['String']>;
  nominatorStash_starts_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
  stakedAmount?: Maybe<Scalars['String']>;
  stakedAmount_contains?: Maybe<Scalars['String']>;
  stakedAmount_ends_with?: Maybe<Scalars['String']>;
  stakedAmount_gt?: Maybe<Scalars['String']>;
  stakedAmount_gte?: Maybe<Scalars['String']>;
  stakedAmount_in?: Maybe<Array<Scalars['String']>>;
  stakedAmount_lt?: Maybe<Scalars['String']>;
  stakedAmount_lte?: Maybe<Scalars['String']>;
  stakedAmount_not?: Maybe<Scalars['String']>;
  stakedAmount_not_contains?: Maybe<Scalars['String']>;
  stakedAmount_not_ends_with?: Maybe<Scalars['String']>;
  stakedAmount_not_in?: Maybe<Array<Scalars['String']>>;
  stakedAmount_not_starts_with?: Maybe<Scalars['String']>;
  stakedAmount_starts_with?: Maybe<Scalars['String']>;
  validatorController?: Maybe<Scalars['String']>;
  validatorController_contains?: Maybe<Scalars['String']>;
  validatorController_ends_with?: Maybe<Scalars['String']>;
  validatorController_gt?: Maybe<Scalars['String']>;
  validatorController_gte?: Maybe<Scalars['String']>;
  validatorController_in?: Maybe<Array<Scalars['String']>>;
  validatorController_lt?: Maybe<Scalars['String']>;
  validatorController_lte?: Maybe<Scalars['String']>;
  validatorController_not?: Maybe<Scalars['String']>;
  validatorController_not_contains?: Maybe<Scalars['String']>;
  validatorController_not_ends_with?: Maybe<Scalars['String']>;
  validatorController_not_in?: Maybe<Array<Scalars['String']>>;
  validatorController_not_starts_with?: Maybe<Scalars['String']>;
  validatorController_starts_with?: Maybe<Scalars['String']>;
  validatorStash?: Maybe<Scalars['String']>;
  validatorStash_contains?: Maybe<Scalars['String']>;
  validatorStash_ends_with?: Maybe<Scalars['String']>;
  validatorStash_gt?: Maybe<Scalars['String']>;
  validatorStash_gte?: Maybe<Scalars['String']>;
  validatorStash_in?: Maybe<Array<Scalars['String']>>;
  validatorStash_lt?: Maybe<Scalars['String']>;
  validatorStash_lte?: Maybe<Scalars['String']>;
  validatorStash_not?: Maybe<Scalars['String']>;
  validatorStash_not_contains?: Maybe<Scalars['String']>;
  validatorStash_not_ends_with?: Maybe<Scalars['String']>;
  validatorStash_not_in?: Maybe<Array<Scalars['String']>>;
  validatorStash_not_starts_with?: Maybe<Scalars['String']>;
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

export type OfflineValidatorWhereInput = {
  AND?: Maybe<Array<OfflineValidatorWhereInput>>;
  NOT?: Maybe<Array<OfflineValidatorWhereInput>>;
  OR?: Maybe<Array<OfflineValidatorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  own?: Maybe<Scalars['String']>;
  own_contains?: Maybe<Scalars['String']>;
  own_ends_with?: Maybe<Scalars['String']>;
  own_gt?: Maybe<Scalars['String']>;
  own_gte?: Maybe<Scalars['String']>;
  own_in?: Maybe<Array<Scalars['String']>>;
  own_lt?: Maybe<Scalars['String']>;
  own_lte?: Maybe<Scalars['String']>;
  own_not?: Maybe<Scalars['String']>;
  own_not_contains?: Maybe<Scalars['String']>;
  own_not_ends_with?: Maybe<Scalars['String']>;
  own_not_in?: Maybe<Array<Scalars['String']>>;
  own_not_starts_with?: Maybe<Scalars['String']>;
  own_starts_with?: Maybe<Scalars['String']>;
  sessionIndex?: Maybe<SessionWhereInput>;
  total?: Maybe<Scalars['String']>;
  total_contains?: Maybe<Scalars['String']>;
  total_ends_with?: Maybe<Scalars['String']>;
  total_gt?: Maybe<Scalars['String']>;
  total_gte?: Maybe<Scalars['String']>;
  total_in?: Maybe<Array<Scalars['String']>>;
  total_lt?: Maybe<Scalars['String']>;
  total_lte?: Maybe<Scalars['String']>;
  total_not?: Maybe<Scalars['String']>;
  total_not_contains?: Maybe<Scalars['String']>;
  total_not_ends_with?: Maybe<Scalars['String']>;
  total_not_in?: Maybe<Array<Scalars['String']>>;
  total_not_starts_with?: Maybe<Scalars['String']>;
  total_starts_with?: Maybe<Scalars['String']>;
  validatorId?: Maybe<Scalars['String']>;
  validatorId_contains?: Maybe<Scalars['String']>;
  validatorId_ends_with?: Maybe<Scalars['String']>;
  validatorId_gt?: Maybe<Scalars['String']>;
  validatorId_gte?: Maybe<Scalars['String']>;
  validatorId_in?: Maybe<Array<Scalars['String']>>;
  validatorId_lt?: Maybe<Scalars['String']>;
  validatorId_lte?: Maybe<Scalars['String']>;
  validatorId_not?: Maybe<Scalars['String']>;
  validatorId_not_contains?: Maybe<Scalars['String']>;
  validatorId_not_ends_with?: Maybe<Scalars['String']>;
  validatorId_not_in?: Maybe<Array<Scalars['String']>>;
  validatorId_not_starts_with?: Maybe<Scalars['String']>;
  validatorId_starts_with?: Maybe<Scalars['String']>;
};

export type Onchain_Links = {
   __typename?: 'onchain_links';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  onchain_motion: Array<Maybe<Motion>>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal: Array<Maybe<Proposal>>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum: Array<Maybe<Referendum>>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  onchain_treasury_spend_proposal: Array<Maybe<TreasurySpendProposal>>;
  post: Posts;
  post_id: Scalars['Int'];
  proposer_address: Scalars['String'];
};


export type Onchain_LinksOnchain_MotionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Motion>;
};


export type Onchain_LinksOnchain_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal>;
};


export type Onchain_LinksOnchain_ReferendumArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum>;
};


export type Onchain_LinksOnchain_Treasury_Spend_ProposalArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal>;
};

export type Onchain_Links_Aggregate = {
   __typename?: 'onchain_links_aggregate';
  aggregate?: Maybe<Onchain_Links_Aggregate_Fields>;
  nodes: Array<Onchain_Links>;
};

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


export type Onchain_Links_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onchain_Links_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Onchain_Links_Arr_Rel_Insert_Input = {
  data: Array<Onchain_Links_Insert_Input>;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};

export type Onchain_Links_Avg_Fields = {
   __typename?: 'onchain_links_avg_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Avg_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Onchain_Links_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>;
  _not?: Maybe<Onchain_Links_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Onchain_Links_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  onchain_motion_id?: Maybe<Int_Comparison_Exp>;
  onchain_proposal_id?: Maybe<Int_Comparison_Exp>;
  onchain_referendum_id?: Maybe<Int_Comparison_Exp>;
  onchain_treasury_proposal_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
};

export enum Onchain_Links_Constraint {
  OnchainLinksOnchainMotionIdKey = 'onchain_links_onchain_motion_id_key',
  OnchainLinksOnchainReferendumIdKey = 'onchain_links_onchain_referendum_id_key',
  OnchainProposalsChainDbIdKey = 'onchain_proposals_chain_db_id_key',
  ProposalsPkey = 'proposals_pkey',
  ProposalsPostIdKey = 'proposals_post_id_key'
}

export type Onchain_Links_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

export type Onchain_Links_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

export type Onchain_Links_Max_Fields = {
   __typename?: 'onchain_links_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

export type Onchain_Links_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

export type Onchain_Links_Min_Fields = {
   __typename?: 'onchain_links_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

export type Onchain_Links_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

export type Onchain_Links_Mutation_Response = {
   __typename?: 'onchain_links_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Onchain_Links>;
};

export type Onchain_Links_Obj_Rel_Insert_Input = {
  data: Onchain_Links_Insert_Input;
  on_conflict?: Maybe<Onchain_Links_On_Conflict>;
};

export type Onchain_Links_On_Conflict = {
  constraint: Onchain_Links_Constraint;
  update_columns: Array<Onchain_Links_Update_Column>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};

export type Onchain_Links_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
};

export type Onchain_Links_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
};

export type Onchain_Links_Stddev_Fields = {
   __typename?: 'onchain_links_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Onchain_Links_Stddev_Pop_Fields = {
   __typename?: 'onchain_links_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Onchain_Links_Stddev_Samp_Fields = {
   __typename?: 'onchain_links_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Onchain_Links_Sum_Fields = {
   __typename?: 'onchain_links_sum_fields';
  id?: Maybe<Scalars['Int']>;
  onchain_motion_id?: Maybe<Scalars['Int']>;
  onchain_proposal_id?: Maybe<Scalars['Int']>;
  onchain_referendum_id?: Maybe<Scalars['Int']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

export type Onchain_Links_Sum_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
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
   __typename?: 'onchain_links_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Onchain_Links_Var_Samp_Fields = {
   __typename?: 'onchain_links_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Onchain_Links_Variance_Fields = {
   __typename?: 'onchain_links_variance_fields';
  id?: Maybe<Scalars['Float']>;
  onchain_motion_id?: Maybe<Scalars['Float']>;
  onchain_proposal_id?: Maybe<Scalars['Float']>;
  onchain_referendum_id?: Maybe<Scalars['Float']>;
  onchain_treasury_proposal_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type Onchain_Links_Variance_Order_By = {
  id?: Maybe<Order_By>;
  onchain_motion_id?: Maybe<Order_By>;
  onchain_proposal_id?: Maybe<Order_By>;
  onchain_referendum_id?: Maybe<Order_By>;
  onchain_treasury_proposal_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Post_Reactions = {
   __typename?: 'post_reactions';
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  post: Posts;
  post_id: Scalars['Int'];
  reacting_user?: Maybe<User>;
  reaction: Scalars['bpchar'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
};

export type Post_Reactions_Aggregate = {
   __typename?: 'post_reactions_aggregate';
  aggregate?: Maybe<Post_Reactions_Aggregate_Fields>;
  nodes: Array<Post_Reactions>;
};

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


export type Post_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};

export type Post_Reactions_Avg_Fields = {
   __typename?: 'post_reactions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

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

export enum Post_Reactions_Constraint {
  PostReactionsPkey = 'post_reactions_pkey'
}

export type Post_Reactions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Post_Reactions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Post_Reactions_Max_Fields = {
   __typename?: 'post_reactions_max_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Post_Reactions_Max_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Min_Fields = {
   __typename?: 'post_reactions_min_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Post_Reactions_Min_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Mutation_Response = {
   __typename?: 'post_reactions_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Post_Reactions>;
};

export type Post_Reactions_Obj_Rel_Insert_Input = {
  data: Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Post_Reactions_On_Conflict>;
};

export type Post_Reactions_On_Conflict = {
  constraint: Post_Reactions_Constraint;
  update_columns: Array<Post_Reactions_Update_Column>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};

export type Post_Reactions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Post_Reactions_Stddev_Fields = {
   __typename?: 'post_reactions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Stddev_Pop_Fields = {
   __typename?: 'post_reactions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Stddev_Samp_Fields = {
   __typename?: 'post_reactions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Sum_Fields = {
   __typename?: 'post_reactions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Post_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
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
   __typename?: 'post_reactions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Var_Samp_Fields = {
   __typename?: 'post_reactions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Reactions_Variance_Fields = {
   __typename?: 'post_reactions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Post_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Post_Topics = {
   __typename?: 'post_topics';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts: Array<Posts>;
  posts_aggregate: Posts_Aggregate;
};


export type Post_TopicsPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Post_TopicsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

export type Post_Topics_Aggregate = {
   __typename?: 'post_topics_aggregate';
  aggregate?: Maybe<Post_Topics_Aggregate_Fields>;
  nodes: Array<Post_Topics>;
};

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


export type Post_Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Topics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Post_Topics_Arr_Rel_Insert_Input = {
  data: Array<Post_Topics_Insert_Input>;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};

export type Post_Topics_Avg_Fields = {
   __typename?: 'post_topics_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>;
  _not?: Maybe<Post_Topics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
};

export enum Post_Topics_Constraint {
  CategoriesNameKey = 'categories_name_key',
  CategoriesPkey = 'categories_pkey'
}

export type Post_Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Post_Topics_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
};

export type Post_Topics_Max_Fields = {
   __typename?: 'post_topics_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Post_Topics_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Post_Topics_Min_Fields = {
   __typename?: 'post_topics_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Post_Topics_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Post_Topics_Mutation_Response = {
   __typename?: 'post_topics_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Post_Topics>;
};

export type Post_Topics_Obj_Rel_Insert_Input = {
  data: Post_Topics_Insert_Input;
  on_conflict?: Maybe<Post_Topics_On_Conflict>;
};

export type Post_Topics_On_Conflict = {
  constraint: Post_Topics_Constraint;
  update_columns: Array<Post_Topics_Update_Column>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};

export type Post_Topics_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
};

export type Post_Topics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Post_Topics_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Topics_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Post_Topics_Stddev_Fields = {
   __typename?: 'post_topics_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Topics_Stddev_Pop_Fields = {
   __typename?: 'post_topics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Topics_Stddev_Samp_Fields = {
   __typename?: 'post_topics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Topics_Sum_Fields = {
   __typename?: 'post_topics_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Post_Topics_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Post_Topics_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Topics_Var_Pop_Fields = {
   __typename?: 'post_topics_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Topics_Var_Samp_Fields = {
   __typename?: 'post_topics_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Topics_Variance_Fields = {
   __typename?: 'post_topics_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Topics_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types = {
   __typename?: 'post_types';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts: Array<Posts>;
  posts_aggregate: Posts_Aggregate;
};


export type Post_TypesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Post_TypesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

export type Post_Types_Aggregate = {
   __typename?: 'post_types_aggregate';
  aggregate?: Maybe<Post_Types_Aggregate_Fields>;
  nodes: Array<Post_Types>;
};

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


export type Post_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Post_Types_Arr_Rel_Insert_Input = {
  data: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

export type Post_Types_Avg_Fields = {
   __typename?: 'post_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>;
  _not?: Maybe<Post_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
};

export enum Post_Types_Constraint {
  PostTypesNameKey = 'post_types_name_key',
  PostTypesPkey = 'post_types_pkey'
}

export type Post_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Post_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
};

export type Post_Types_Max_Fields = {
   __typename?: 'post_types_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Post_Types_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Post_Types_Min_Fields = {
   __typename?: 'post_types_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Post_Types_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Post_Types_Mutation_Response = {
   __typename?: 'post_types_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Post_Types>;
};

export type Post_Types_Obj_Rel_Insert_Input = {
  data: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

export type Post_Types_On_Conflict = {
  constraint: Post_Types_Constraint;
  update_columns: Array<Post_Types_Update_Column>;
  where?: Maybe<Post_Types_Bool_Exp>;
};

export type Post_Types_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
};

export type Post_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Post_Types_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Types_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Post_Types_Stddev_Fields = {
   __typename?: 'post_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types_Stddev_Pop_Fields = {
   __typename?: 'post_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types_Stddev_Samp_Fields = {
   __typename?: 'post_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types_Sum_Fields = {
   __typename?: 'post_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Post_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Post_Types_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Post_Types_Var_Pop_Fields = {
   __typename?: 'post_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types_Var_Samp_Fields = {
   __typename?: 'post_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Post_Types_Variance_Fields = {
   __typename?: 'post_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Post_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Posts = {
   __typename?: 'posts';
  author?: Maybe<User>;
  author_id: Scalars['Int'];
  comments: Array<Comments>;
  comments_aggregate: Comments_Aggregate;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  onchain_link?: Maybe<Onchain_Links>;
  post_reactions: Array<Post_Reactions>;
  post_reactions_aggregate: Post_Reactions_Aggregate;
  title?: Maybe<Scalars['String']>;
  topic: Post_Topics;
  topic_id: Scalars['Int'];
  type: Post_Types;
  type_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type PostsPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


export type PostsPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};

export type Posts_Aggregate = {
   __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

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


export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

export type Posts_Avg_Fields = {
   __typename?: 'posts_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

export type Posts_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  onchain_link?: Maybe<Onchain_Links_Bool_Exp>;
  post_reactions?: Maybe<Post_Reactions_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  topic?: Maybe<Post_Topics_Bool_Exp>;
  topic_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<Post_Types_Bool_Exp>;
  type_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Posts_Constraint {
  MessagesPkey = 'messages_pkey'
}

export type Posts_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
};

export type Posts_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onchain_link?: Maybe<Onchain_Links_Obj_Rel_Insert_Input>;
  post_reactions?: Maybe<Post_Reactions_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Post_Topics_Obj_Rel_Insert_Input>;
  topic_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Post_Types_Obj_Rel_Insert_Input>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

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

export type Posts_Mutation_Response = {
   __typename?: 'posts_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Posts>;
};

export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

export type Posts_Order_By = {
  author_id?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  onchain_link?: Maybe<Onchain_Links_Order_By>;
  post_reactions_aggregate?: Maybe<Post_Reactions_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  topic?: Maybe<Post_Topics_Order_By>;
  topic_id?: Maybe<Order_By>;
  type?: Maybe<Post_Types_Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Posts_Stddev_Fields = {
   __typename?: 'posts_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

export type Posts_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Posts_Stddev_Pop_Fields = {
   __typename?: 'posts_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

export type Posts_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Posts_Stddev_Samp_Fields = {
   __typename?: 'posts_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

export type Posts_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Posts_Sum_Fields = {
   __typename?: 'posts_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
};

export type Posts_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
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
   __typename?: 'posts_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

export type Posts_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Posts_Var_Samp_Fields = {
   __typename?: 'posts_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

export type Posts_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

export type Posts_Variance_Fields = {
   __typename?: 'posts_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  type_id?: Maybe<Scalars['Float']>;
};

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
  NOT?: Maybe<Array<PreimageArgumentWhereInput>>;
  OR?: Maybe<Array<PreimageArgumentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  preimage?: Maybe<PreimageWhereInput>;
  value?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageArgumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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

export type PreimageStatus = Node & {
   __typename?: 'PreimageStatus';
  blockNumber: BlockNumber;
  id: Scalars['ID'];
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
  NOT?: Maybe<Array<PreimageStatusWhereInput>>;
  OR?: Maybe<Array<PreimageStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  preimage?: Maybe<PreimageWhereInput>;
  status?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PreimageWhereInput = {
  AND?: Maybe<Array<PreimageWhereInput>>;
  NOT?: Maybe<Array<PreimageWhereInput>>;
  OR?: Maybe<Array<PreimageWhereInput>>;
  author?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  depositAmount_contains?: Maybe<Scalars['String']>;
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  depositAmount_gt?: Maybe<Scalars['String']>;
  depositAmount_gte?: Maybe<Scalars['String']>;
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_lt?: Maybe<Scalars['String']>;
  depositAmount_lte?: Maybe<Scalars['String']>;
  depositAmount_not?: Maybe<Scalars['String']>;
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  hash_contains?: Maybe<Scalars['String']>;
  hash_ends_with?: Maybe<Scalars['String']>;
  hash_gt?: Maybe<Scalars['String']>;
  hash_gte?: Maybe<Scalars['String']>;
  hash_in?: Maybe<Array<Scalars['String']>>;
  hash_lt?: Maybe<Scalars['String']>;
  hash_lte?: Maybe<Scalars['String']>;
  hash_not?: Maybe<Scalars['String']>;
  hash_not_contains?: Maybe<Scalars['String']>;
  hash_not_ends_with?: Maybe<Scalars['String']>;
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  hash_not_starts_with?: Maybe<Scalars['String']>;
  hash_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescription_contains?: Maybe<Scalars['String']>;
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  metaDescription_gt?: Maybe<Scalars['String']>;
  metaDescription_gte?: Maybe<Scalars['String']>;
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_lt?: Maybe<Scalars['String']>;
  metaDescription_lte?: Maybe<Scalars['String']>;
  metaDescription_not?: Maybe<Scalars['String']>;
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  method_contains?: Maybe<Scalars['String']>;
  method_ends_with?: Maybe<Scalars['String']>;
  method_gt?: Maybe<Scalars['String']>;
  method_gte?: Maybe<Scalars['String']>;
  method_in?: Maybe<Array<Scalars['String']>>;
  method_lt?: Maybe<Scalars['String']>;
  method_lte?: Maybe<Scalars['String']>;
  method_not?: Maybe<Scalars['String']>;
  method_not_contains?: Maybe<Scalars['String']>;
  method_not_ends_with?: Maybe<Scalars['String']>;
  method_not_in?: Maybe<Array<Scalars['String']>>;
  method_not_starts_with?: Maybe<Scalars['String']>;
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
  section_contains?: Maybe<Scalars['String']>;
  section_ends_with?: Maybe<Scalars['String']>;
  section_gt?: Maybe<Scalars['String']>;
  section_gte?: Maybe<Scalars['String']>;
  section_in?: Maybe<Array<Scalars['String']>>;
  section_lt?: Maybe<Scalars['String']>;
  section_lte?: Maybe<Scalars['String']>;
  section_not?: Maybe<Scalars['String']>;
  section_not_contains?: Maybe<Scalars['String']>;
  section_not_ends_with?: Maybe<Scalars['String']>;
  section_not_in?: Maybe<Array<Scalars['String']>>;
  section_not_starts_with?: Maybe<Scalars['String']>;
  section_starts_with?: Maybe<Scalars['String']>;
};

export type PreimageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

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
};

export enum ProposalStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ProposalStatusWhereInput = {
  AND?: Maybe<Array<ProposalStatusWhereInput>>;
  NOT?: Maybe<Array<ProposalStatusWhereInput>>;
  OR?: Maybe<Array<ProposalStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  proposal?: Maybe<ProposalWhereInput>;
  status?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
};

export type ProposalStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProposalSubscriptionPayload = {
   __typename?: 'ProposalSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Proposal>;
  previousValues?: Maybe<ProposalPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ProposalSubscriptionWhereInput = {
  AND?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  OR?: Maybe<Array<ProposalSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ProposalWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ProposalWhereInput = {
  AND?: Maybe<Array<ProposalWhereInput>>;
  NOT?: Maybe<Array<ProposalWhereInput>>;
  OR?: Maybe<Array<ProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  depositAmount_contains?: Maybe<Scalars['String']>;
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  depositAmount_gt?: Maybe<Scalars['String']>;
  depositAmount_gte?: Maybe<Scalars['String']>;
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_lt?: Maybe<Scalars['String']>;
  depositAmount_lte?: Maybe<Scalars['String']>;
  depositAmount_not?: Maybe<Scalars['String']>;
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['Int']>;
  proposalId_gt?: Maybe<Scalars['Int']>;
  proposalId_gte?: Maybe<Scalars['Int']>;
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  proposalId_lt?: Maybe<Scalars['Int']>;
  proposalId_lte?: Maybe<Scalars['Int']>;
  proposalId_not?: Maybe<Scalars['Int']>;
  proposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  proposalStatus_every?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_none?: Maybe<ProposalStatusWhereInput>;
  proposalStatus_some?: Maybe<ProposalStatusWhereInput>;
};

export type ProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Proposal = {
  AND?: Maybe<Array<ProposalWhereInput>>;
  NOT?: Maybe<Array<ProposalWhereInput>>;
  OR?: Maybe<Array<ProposalWhereInput>>;
  author?: Maybe<Scalars['String']>;
  author_contains?: Maybe<Scalars['String']>;
  author_ends_with?: Maybe<Scalars['String']>;
  author_gt?: Maybe<Scalars['String']>;
  author_gte?: Maybe<Scalars['String']>;
  author_in?: Maybe<Array<Scalars['String']>>;
  author_lt?: Maybe<Scalars['String']>;
  author_lte?: Maybe<Scalars['String']>;
  author_not?: Maybe<Scalars['String']>;
  author_not_contains?: Maybe<Scalars['String']>;
  author_not_ends_with?: Maybe<Scalars['String']>;
  author_not_in?: Maybe<Array<Scalars['String']>>;
  author_not_starts_with?: Maybe<Scalars['String']>;
  author_starts_with?: Maybe<Scalars['String']>;
  depositAmount?: Maybe<Scalars['String']>;
  depositAmount_contains?: Maybe<Scalars['String']>;
  depositAmount_ends_with?: Maybe<Scalars['String']>;
  depositAmount_gt?: Maybe<Scalars['String']>;
  depositAmount_gte?: Maybe<Scalars['String']>;
  depositAmount_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_lt?: Maybe<Scalars['String']>;
  depositAmount_lte?: Maybe<Scalars['String']>;
  depositAmount_not?: Maybe<Scalars['String']>;
  depositAmount_not_contains?: Maybe<Scalars['String']>;
  depositAmount_not_ends_with?: Maybe<Scalars['String']>;
  depositAmount_not_in?: Maybe<Array<Scalars['String']>>;
  depositAmount_not_starts_with?: Maybe<Scalars['String']>;
  depositAmount_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  proposalId_gt?: Maybe<Scalars['Int']>;
  proposalId_gte?: Maybe<Scalars['Int']>;
  proposalId_in?: Maybe<Array<Scalars['Int']>>;
  proposalId_lt?: Maybe<Scalars['Int']>;
  proposalId_lte?: Maybe<Scalars['Int']>;
  proposalId_not?: Maybe<Scalars['Int']>;
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
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  notification?: Maybe<NotificationPreferences>;
  subscription?: Maybe<Subscription>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<PublicUser>>>;
};


export type QuerySubscriptionArgs = {
  post_id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Query_Root = {
   __typename?: 'query_root';
  blockNumber?: Maybe<BlockNumber>;
  blockNumbers: Array<Maybe<BlockNumber>>;
  comment_reactions: Array<Comment_Reactions>;
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  comments: Array<Comments>;
  comments_aggregate: Comments_Aggregate;
  comments_by_pk?: Maybe<Comments>;
  council?: Maybe<Council>;
  councilMember?: Maybe<CouncilMember>;
  councilMembers: Array<Maybe<CouncilMember>>;
  councils: Array<Maybe<Council>>;
  era?: Maybe<Era>;
  eras: Array<Maybe<Era>>;
  heartBeats: Array<Maybe<HeartBeat>>;
  motion?: Maybe<Motion>;
  motionProposalArgument?: Maybe<MotionProposalArgument>;
  motionProposalArguments: Array<Maybe<MotionProposalArgument>>;
  motionStatus?: Maybe<MotionStatus>;
  motionStatuses: Array<Maybe<MotionStatus>>;
  motions: Array<Maybe<Motion>>;
  nomination?: Maybe<Nomination>;
  nominations: Array<Maybe<Nomination>>;
  notification?: Maybe<NotificationPreferences>;
  offlineValidators: Array<Maybe<OfflineValidator>>;
  onchain_links: Array<Onchain_Links>;
  onchain_links_aggregate: Onchain_Links_Aggregate;
  onchain_links_by_pk?: Maybe<Onchain_Links>;
  post_reactions: Array<Post_Reactions>;
  post_reactions_aggregate: Post_Reactions_Aggregate;
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  post_topics: Array<Post_Topics>;
  post_topics_aggregate: Post_Topics_Aggregate;
  post_topics_by_pk?: Maybe<Post_Topics>;
  post_types: Array<Post_Types>;
  post_types_aggregate: Post_Types_Aggregate;
  post_types_by_pk?: Maybe<Post_Types>;
  posts: Array<Posts>;
  posts_aggregate: Posts_Aggregate;
  posts_by_pk?: Maybe<Posts>;
  preimage?: Maybe<Preimage>;
  preimageArgument?: Maybe<PreimageArgument>;
  preimageArguments: Array<Maybe<PreimageArgument>>;
  preimageStatus?: Maybe<PreimageStatus>;
  preimageStatuses: Array<Maybe<PreimageStatus>>;
  preimages: Array<Maybe<Preimage>>;
  proposal?: Maybe<Proposal>;
  proposalStatus?: Maybe<ProposalStatus>;
  proposalStatuses: Array<Maybe<ProposalStatus>>;
  proposals: Array<Maybe<Proposal>>;
  referendum?: Maybe<Referendum>;
  referendumStatus?: Maybe<ReferendumStatus>;
  referendumStatuses: Array<Maybe<ReferendumStatus>>;
  referendums: Array<Maybe<Referendum>>;
  reward?: Maybe<Reward>;
  rewards: Array<Maybe<Reward>>;
  session?: Maybe<Session>;
  sessions: Array<Maybe<Session>>;
  slashing?: Maybe<Slashing>;
  slashings: Array<Maybe<Slashing>>;
  stake?: Maybe<Stake>;
  stakes: Array<Maybe<Stake>>;
  subscription?: Maybe<Subscription>;
  token?: Maybe<Token>;
  totalIssuance?: Maybe<TotalIssuance>;
  totalIssuances: Array<Maybe<TotalIssuance>>;
  treasurySpendProposal?: Maybe<TreasurySpendProposal>;
  treasurySpendProposals: Array<Maybe<TreasurySpendProposal>>;
  treasuryStatus?: Maybe<TreasuryStatus>;
  treasuryStatuses: Array<Maybe<TreasuryStatus>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<PublicUser>>>;
  validator?: Maybe<Validator>;
  validators: Array<Maybe<Validator>>;
};


export type Query_RootBlockNumberArgs = {
  where: BlockNumberWhereUniqueInput;
};


export type Query_RootBlockNumbersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlockNumberWhereInput>;
};


export type Query_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


export type Query_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


export type Query_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCouncilArgs = {
  where: CouncilWhereUniqueInput;
};


export type Query_RootCouncilMemberArgs = {
  where: CouncilMemberWhereUniqueInput;
};


export type Query_RootCouncilMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilMemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilMemberWhereInput>;
};


export type Query_RootCouncilsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CouncilOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CouncilWhereInput>;
};


export type Query_RootEraArgs = {
  where: EraWhereUniqueInput;
};


export type Query_RootErasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EraOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EraWhereInput>;
};


export type Query_RootHeartBeatsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HeartBeatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeartBeatWhereInput>;
};


export type Query_RootMotionArgs = {
  where: MotionWhereUniqueInput;
};


export type Query_RootMotionProposalArgumentArgs = {
  where: MotionProposalArgumentWhereUniqueInput;
};


export type Query_RootMotionProposalArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionProposalArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionProposalArgumentWhereInput>;
};


export type Query_RootMotionStatusArgs = {
  where: MotionStatusWhereUniqueInput;
};


export type Query_RootMotionStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionStatusWhereInput>;
};


export type Query_RootMotionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MotionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MotionWhereInput>;
};


export type Query_RootNominationArgs = {
  where: NominationWhereUniqueInput;
};


export type Query_RootNominationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NominationWhereInput>;
};


export type Query_RootOfflineValidatorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OfflineValidatorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OfflineValidatorWhereInput>;
};


export type Query_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


export type Query_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


export type Query_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


export type Query_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


export type Query_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


export type Query_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


export type Query_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Query_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Query_RootPost_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPreimageArgs = {
  where: PreimageWhereUniqueInput;
};


export type Query_RootPreimageArgumentArgs = {
  where: PreimageArgumentWhereUniqueInput;
};


export type Query_RootPreimageArgumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageArgumentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageArgumentWhereInput>;
};


export type Query_RootPreimageStatusArgs = {
  where: PreimageStatusWhereUniqueInput;
};


export type Query_RootPreimageStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageStatusWhereInput>;
};


export type Query_RootPreimagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreimageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PreimageWhereInput>;
};


export type Query_RootProposalArgs = {
  where: ProposalWhereUniqueInput;
};


export type Query_RootProposalStatusArgs = {
  where: ProposalStatusWhereUniqueInput;
};


export type Query_RootProposalStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalStatusWhereInput>;
};


export type Query_RootProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProposalWhereInput>;
};


export type Query_RootReferendumArgs = {
  where: ReferendumWhereUniqueInput;
};


export type Query_RootReferendumStatusArgs = {
  where: ReferendumStatusWhereUniqueInput;
};


export type Query_RootReferendumStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumStatusWhereInput>;
};


export type Query_RootReferendumsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReferendumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReferendumWhereInput>;
};


export type Query_RootRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type Query_RootRewardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RewardWhereInput>;
};


export type Query_RootSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type Query_RootSessionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type Query_RootSlashingArgs = {
  where: SlashingWhereUniqueInput;
};


export type Query_RootSlashingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SlashingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SlashingWhereInput>;
};


export type Query_RootStakeArgs = {
  where: StakeWhereUniqueInput;
};


export type Query_RootStakesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<StakeWhereInput>;
};


export type Query_RootSubscriptionArgs = {
  post_id: Scalars['Int'];
};


export type Query_RootTotalIssuanceArgs = {
  where: TotalIssuanceWhereUniqueInput;
};


export type Query_RootTotalIssuancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalIssuanceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TotalIssuanceWhereInput>;
};


export type Query_RootTreasurySpendProposalArgs = {
  where: TreasurySpendProposalWhereUniqueInput;
};


export type Query_RootTreasurySpendProposalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasurySpendProposalOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasurySpendProposalWhereInput>;
};


export type Query_RootTreasuryStatusArgs = {
  where: TreasuryStatusWhereUniqueInput;
};


export type Query_RootTreasuryStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TreasuryStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TreasuryStatusWhereInput>;
};


export type Query_RootUserArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type Query_RootValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};


export type Query_RootValidatorsArgs = {
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
};

export enum ReferendumStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ReferendumStatusWhereInput = {
  AND?: Maybe<Array<ReferendumStatusWhereInput>>;
  NOT?: Maybe<Array<ReferendumStatusWhereInput>>;
  OR?: Maybe<Array<ReferendumStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  referendum?: Maybe<ReferendumWhereInput>;
  status?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ReferendumSubscriptionPayload = {
   __typename?: 'ReferendumSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Referendum>;
  previousValues?: Maybe<ReferendumPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumSubscriptionWhereInput = {
  AND?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  OR?: Maybe<Array<ReferendumSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<ReferendumWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type ReferendumWhereInput = {
  AND?: Maybe<Array<ReferendumWhereInput>>;
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  OR?: Maybe<Array<ReferendumWhereInput>>;
  delay?: Maybe<Scalars['Int']>;
  delay_gt?: Maybe<Scalars['Int']>;
  delay_gte?: Maybe<Scalars['Int']>;
  delay_in?: Maybe<Array<Scalars['Int']>>;
  delay_lt?: Maybe<Scalars['Int']>;
  delay_lte?: Maybe<Scalars['Int']>;
  delay_not?: Maybe<Scalars['Int']>;
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  end?: Maybe<Scalars['Int']>;
  end_gt?: Maybe<Scalars['Int']>;
  end_gte?: Maybe<Scalars['Int']>;
  end_in?: Maybe<Array<Scalars['Int']>>;
  end_lt?: Maybe<Scalars['Int']>;
  end_lte?: Maybe<Scalars['Int']>;
  end_not?: Maybe<Scalars['Int']>;
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  referendumId_gt?: Maybe<Scalars['Int']>;
  referendumId_gte?: Maybe<Scalars['Int']>;
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  referendumId_lt?: Maybe<Scalars['Int']>;
  referendumId_lte?: Maybe<Scalars['Int']>;
  referendumId_not?: Maybe<Scalars['Int']>;
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  voteThreshold?: Maybe<Scalars['String']>;
  voteThreshold_contains?: Maybe<Scalars['String']>;
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  voteThreshold_gt?: Maybe<Scalars['String']>;
  voteThreshold_gte?: Maybe<Scalars['String']>;
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  voteThreshold_lt?: Maybe<Scalars['String']>;
  voteThreshold_lte?: Maybe<Scalars['String']>;
  voteThreshold_not?: Maybe<Scalars['String']>;
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
  voteThreshold_starts_with?: Maybe<Scalars['String']>;
};

export type ReferendumWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Referendum = {
  AND?: Maybe<Array<ReferendumWhereInput>>;
  NOT?: Maybe<Array<ReferendumWhereInput>>;
  OR?: Maybe<Array<ReferendumWhereInput>>;
  delay?: Maybe<Scalars['Int']>;
  delay_gt?: Maybe<Scalars['Int']>;
  delay_gte?: Maybe<Scalars['Int']>;
  delay_in?: Maybe<Array<Scalars['Int']>>;
  delay_lt?: Maybe<Scalars['Int']>;
  delay_lte?: Maybe<Scalars['Int']>;
  delay_not?: Maybe<Scalars['Int']>;
  delay_not_in?: Maybe<Array<Scalars['Int']>>;
  end?: Maybe<Scalars['Int']>;
  end_gt?: Maybe<Scalars['Int']>;
  end_gte?: Maybe<Scalars['Int']>;
  end_in?: Maybe<Array<Scalars['Int']>>;
  end_lt?: Maybe<Scalars['Int']>;
  end_lte?: Maybe<Scalars['Int']>;
  end_not?: Maybe<Scalars['Int']>;
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  preimage?: Maybe<PreimageWhereInput>;
  preimageHash?: Maybe<Scalars['String']>;
  preimageHash_contains?: Maybe<Scalars['String']>;
  preimageHash_ends_with?: Maybe<Scalars['String']>;
  preimageHash_gt?: Maybe<Scalars['String']>;
  preimageHash_gte?: Maybe<Scalars['String']>;
  preimageHash_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_lt?: Maybe<Scalars['String']>;
  preimageHash_lte?: Maybe<Scalars['String']>;
  preimageHash_not?: Maybe<Scalars['String']>;
  preimageHash_not_contains?: Maybe<Scalars['String']>;
  preimageHash_not_ends_with?: Maybe<Scalars['String']>;
  preimageHash_not_in?: Maybe<Array<Scalars['String']>>;
  preimageHash_not_starts_with?: Maybe<Scalars['String']>;
  preimageHash_starts_with?: Maybe<Scalars['String']>;
  referendumId_gt?: Maybe<Scalars['Int']>;
  referendumId_gte?: Maybe<Scalars['Int']>;
  referendumId_in?: Maybe<Array<Scalars['Int']>>;
  referendumId_lt?: Maybe<Scalars['Int']>;
  referendumId_lte?: Maybe<Scalars['Int']>;
  referendumId_not?: Maybe<Scalars['Int']>;
  referendumId_not_in?: Maybe<Array<Scalars['Int']>>;
  referendumStatus_every?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_none?: Maybe<ReferendumStatusWhereInput>;
  referendumStatus_some?: Maybe<ReferendumStatusWhereInput>;
  voteThreshold?: Maybe<Scalars['String']>;
  voteThreshold_contains?: Maybe<Scalars['String']>;
  voteThreshold_ends_with?: Maybe<Scalars['String']>;
  voteThreshold_gt?: Maybe<Scalars['String']>;
  voteThreshold_gte?: Maybe<Scalars['String']>;
  voteThreshold_in?: Maybe<Array<Scalars['String']>>;
  voteThreshold_lt?: Maybe<Scalars['String']>;
  voteThreshold_lte?: Maybe<Scalars['String']>;
  voteThreshold_not?: Maybe<Scalars['String']>;
  voteThreshold_not_contains?: Maybe<Scalars['String']>;
  voteThreshold_not_ends_with?: Maybe<Scalars['String']>;
  voteThreshold_not_in?: Maybe<Array<Scalars['String']>>;
  voteThreshold_not_starts_with?: Maybe<Scalars['String']>;
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
  NOT?: Maybe<Array<RewardWhereInput>>;
  OR?: Maybe<Array<RewardWhereInput>>;
  authoredBlock?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  sessionIndex?: Maybe<SessionWhereInput>;
  treasuryReward?: Maybe<Scalars['String']>;
  treasuryReward_contains?: Maybe<Scalars['String']>;
  treasuryReward_ends_with?: Maybe<Scalars['String']>;
  treasuryReward_gt?: Maybe<Scalars['String']>;
  treasuryReward_gte?: Maybe<Scalars['String']>;
  treasuryReward_in?: Maybe<Array<Scalars['String']>>;
  treasuryReward_lt?: Maybe<Scalars['String']>;
  treasuryReward_lte?: Maybe<Scalars['String']>;
  treasuryReward_not?: Maybe<Scalars['String']>;
  treasuryReward_not_contains?: Maybe<Scalars['String']>;
  treasuryReward_not_ends_with?: Maybe<Scalars['String']>;
  treasuryReward_not_in?: Maybe<Array<Scalars['String']>>;
  treasuryReward_not_starts_with?: Maybe<Scalars['String']>;
  treasuryReward_starts_with?: Maybe<Scalars['String']>;
  validatorReward?: Maybe<Scalars['String']>;
  validatorReward_contains?: Maybe<Scalars['String']>;
  validatorReward_ends_with?: Maybe<Scalars['String']>;
  validatorReward_gt?: Maybe<Scalars['String']>;
  validatorReward_gte?: Maybe<Scalars['String']>;
  validatorReward_in?: Maybe<Array<Scalars['String']>>;
  validatorReward_lt?: Maybe<Scalars['String']>;
  validatorReward_lte?: Maybe<Scalars['String']>;
  validatorReward_not?: Maybe<Scalars['String']>;
  validatorReward_not_contains?: Maybe<Scalars['String']>;
  validatorReward_not_ends_with?: Maybe<Scalars['String']>;
  validatorReward_not_in?: Maybe<Array<Scalars['String']>>;
  validatorReward_not_starts_with?: Maybe<Scalars['String']>;
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

export enum SessionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  index_gt?: Maybe<Scalars['Int']>;
  index_gte?: Maybe<Scalars['Int']>;
  index_in?: Maybe<Array<Scalars['Int']>>;
  index_lt?: Maybe<Scalars['Int']>;
  index_lte?: Maybe<Scalars['Int']>;
  index_not?: Maybe<Scalars['Int']>;
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

export enum SlashingOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC'
}

export type SlashingWhereInput = {
  AND?: Maybe<Array<SlashingWhereInput>>;
  NOT?: Maybe<Array<SlashingWhereInput>>;
  OR?: Maybe<Array<SlashingWhereInput>>;
  amount?: Maybe<Scalars['String']>;
  amount_contains?: Maybe<Scalars['String']>;
  amount_ends_with?: Maybe<Scalars['String']>;
  amount_gt?: Maybe<Scalars['String']>;
  amount_gte?: Maybe<Scalars['String']>;
  amount_in?: Maybe<Array<Scalars['String']>>;
  amount_lt?: Maybe<Scalars['String']>;
  amount_lte?: Maybe<Scalars['String']>;
  amount_not?: Maybe<Scalars['String']>;
  amount_not_contains?: Maybe<Scalars['String']>;
  amount_not_ends_with?: Maybe<Scalars['String']>;
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  amount_not_starts_with?: Maybe<Scalars['String']>;
  amount_starts_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  who?: Maybe<Scalars['String']>;
  who_contains?: Maybe<Scalars['String']>;
  who_ends_with?: Maybe<Scalars['String']>;
  who_gt?: Maybe<Scalars['String']>;
  who_gte?: Maybe<Scalars['String']>;
  who_in?: Maybe<Array<Scalars['String']>>;
  who_lt?: Maybe<Scalars['String']>;
  who_lte?: Maybe<Scalars['String']>;
  who_not?: Maybe<Scalars['String']>;
  who_not_contains?: Maybe<Scalars['String']>;
  who_not_ends_with?: Maybe<Scalars['String']>;
  who_not_in?: Maybe<Array<Scalars['String']>>;
  who_not_starts_with?: Maybe<Scalars['String']>;
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

export enum StakeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalStakeAsc = 'totalStake_ASC',
  TotalStakeDesc = 'totalStake_DESC'
}

export type StakeWhereInput = {
  AND?: Maybe<Array<StakeWhereInput>>;
  NOT?: Maybe<Array<StakeWhereInput>>;
  OR?: Maybe<Array<StakeWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  totalStake?: Maybe<Scalars['String']>;
  totalStake_contains?: Maybe<Scalars['String']>;
  totalStake_ends_with?: Maybe<Scalars['String']>;
  totalStake_gt?: Maybe<Scalars['String']>;
  totalStake_gte?: Maybe<Scalars['String']>;
  totalStake_in?: Maybe<Array<Scalars['String']>>;
  totalStake_lt?: Maybe<Scalars['String']>;
  totalStake_lte?: Maybe<Scalars['String']>;
  totalStake_not?: Maybe<Scalars['String']>;
  totalStake_not_contains?: Maybe<Scalars['String']>;
  totalStake_not_ends_with?: Maybe<Scalars['String']>;
  totalStake_not_in?: Maybe<Array<Scalars['String']>>;
  totalStake_not_starts_with?: Maybe<Scalars['String']>;
  totalStake_starts_with?: Maybe<Scalars['String']>;
};

export type StakeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

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

export type Subscription_Root = {
   __typename?: 'subscription_root';
  comment_reactions: Array<Comment_Reactions>;
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  comments: Array<Comments>;
  comments_aggregate: Comments_Aggregate;
  comments_by_pk?: Maybe<Comments>;
  onchain_links: Array<Onchain_Links>;
  onchain_links_aggregate: Onchain_Links_Aggregate;
  onchain_links_by_pk?: Maybe<Onchain_Links>;
  post_reactions: Array<Post_Reactions>;
  post_reactions_aggregate: Post_Reactions_Aggregate;
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  post_topics: Array<Post_Topics>;
  post_topics_aggregate: Post_Topics_Aggregate;
  post_topics_by_pk?: Maybe<Post_Topics>;
  post_types: Array<Post_Types>;
  post_types_aggregate: Post_Types_Aggregate;
  post_types_by_pk?: Maybe<Post_Types>;
  posts: Array<Posts>;
  posts_aggregate: Posts_Aggregate;
  posts_by_pk?: Maybe<Posts>;
};


export type Subscription_RootComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootComment_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Order_By>>;
  where?: Maybe<Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootComment_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOnchain_LinksArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


export type Subscription_RootOnchain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Onchain_Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onchain_Links_Order_By>>;
  where?: Maybe<Onchain_Links_Bool_Exp>;
};


export type Subscription_RootOnchain_Links_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


export type Subscription_RootPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reactions_Order_By>>;
  where?: Maybe<Post_Reactions_Bool_Exp>;
};


export type Subscription_RootPost_Reactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


export type Subscription_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Topics_Order_By>>;
  where?: Maybe<Post_Topics_Bool_Exp>;
};


export type Subscription_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Subscription_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Subscription_RootPost_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


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

export enum TotalIssuanceOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type TotalIssuanceWhereInput = {
  AND?: Maybe<Array<TotalIssuanceWhereInput>>;
  NOT?: Maybe<Array<TotalIssuanceWhereInput>>;
  OR?: Maybe<Array<TotalIssuanceWhereInput>>;
  amount?: Maybe<Scalars['String']>;
  amount_contains?: Maybe<Scalars['String']>;
  amount_ends_with?: Maybe<Scalars['String']>;
  amount_gt?: Maybe<Scalars['String']>;
  amount_gte?: Maybe<Scalars['String']>;
  amount_in?: Maybe<Array<Scalars['String']>>;
  amount_lt?: Maybe<Scalars['String']>;
  amount_lte?: Maybe<Scalars['String']>;
  amount_not?: Maybe<Scalars['String']>;
  amount_not_contains?: Maybe<Scalars['String']>;
  amount_not_ends_with?: Maybe<Scalars['String']>;
  amount_not_in?: Maybe<Array<Scalars['String']>>;
  amount_not_starts_with?: Maybe<Scalars['String']>;
  amount_starts_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
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
  AND?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  NOT?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  OR?: Maybe<Array<TreasurySpendProposalSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  node?: Maybe<TreasurySpendProposalWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type TreasurySpendProposalWhereInput = {
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  beneficiary_contains?: Maybe<Scalars['String']>;
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  beneficiary_gt?: Maybe<Scalars['String']>;
  beneficiary_gte?: Maybe<Scalars['String']>;
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  beneficiary_lt?: Maybe<Scalars['String']>;
  beneficiary_lte?: Maybe<Scalars['String']>;
  beneficiary_not?: Maybe<Scalars['String']>;
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bond_contains?: Maybe<Scalars['String']>;
  bond_ends_with?: Maybe<Scalars['String']>;
  bond_gt?: Maybe<Scalars['String']>;
  bond_gte?: Maybe<Scalars['String']>;
  bond_in?: Maybe<Array<Scalars['String']>>;
  bond_lt?: Maybe<Scalars['String']>;
  bond_lte?: Maybe<Scalars['String']>;
  bond_not?: Maybe<Scalars['String']>;
  bond_not_contains?: Maybe<Scalars['String']>;
  bond_not_ends_with?: Maybe<Scalars['String']>;
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  bond_not_starts_with?: Maybe<Scalars['String']>;
  bond_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  motion?: Maybe<MotionWhereInput>;
  proposer?: Maybe<Scalars['String']>;
  proposer_contains?: Maybe<Scalars['String']>;
  proposer_ends_with?: Maybe<Scalars['String']>;
  proposer_gt?: Maybe<Scalars['String']>;
  proposer_gte?: Maybe<Scalars['String']>;
  proposer_in?: Maybe<Array<Scalars['String']>>;
  proposer_lt?: Maybe<Scalars['String']>;
  proposer_lte?: Maybe<Scalars['String']>;
  proposer_not?: Maybe<Scalars['String']>;
  proposer_not_contains?: Maybe<Scalars['String']>;
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  proposer_starts_with?: Maybe<Scalars['String']>;
  treasuryProposalId?: Maybe<Scalars['Int']>;
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  value?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
};

export type TreasurySpendProposalWhereInput_Remote_Rel_Public_Onchain_Linksonchain_Treasury_Spend_Proposal = {
  AND?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  NOT?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  OR?: Maybe<Array<TreasurySpendProposalWhereInput>>;
  beneficiary?: Maybe<Scalars['String']>;
  beneficiary_contains?: Maybe<Scalars['String']>;
  beneficiary_ends_with?: Maybe<Scalars['String']>;
  beneficiary_gt?: Maybe<Scalars['String']>;
  beneficiary_gte?: Maybe<Scalars['String']>;
  beneficiary_in?: Maybe<Array<Scalars['String']>>;
  beneficiary_lt?: Maybe<Scalars['String']>;
  beneficiary_lte?: Maybe<Scalars['String']>;
  beneficiary_not?: Maybe<Scalars['String']>;
  beneficiary_not_contains?: Maybe<Scalars['String']>;
  beneficiary_not_ends_with?: Maybe<Scalars['String']>;
  beneficiary_not_in?: Maybe<Array<Scalars['String']>>;
  beneficiary_not_starts_with?: Maybe<Scalars['String']>;
  beneficiary_starts_with?: Maybe<Scalars['String']>;
  bond?: Maybe<Scalars['String']>;
  bond_contains?: Maybe<Scalars['String']>;
  bond_ends_with?: Maybe<Scalars['String']>;
  bond_gt?: Maybe<Scalars['String']>;
  bond_gte?: Maybe<Scalars['String']>;
  bond_in?: Maybe<Array<Scalars['String']>>;
  bond_lt?: Maybe<Scalars['String']>;
  bond_lte?: Maybe<Scalars['String']>;
  bond_not?: Maybe<Scalars['String']>;
  bond_not_contains?: Maybe<Scalars['String']>;
  bond_not_ends_with?: Maybe<Scalars['String']>;
  bond_not_in?: Maybe<Array<Scalars['String']>>;
  bond_not_starts_with?: Maybe<Scalars['String']>;
  bond_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  motion?: Maybe<MotionWhereInput>;
  proposer?: Maybe<Scalars['String']>;
  proposer_contains?: Maybe<Scalars['String']>;
  proposer_ends_with?: Maybe<Scalars['String']>;
  proposer_gt?: Maybe<Scalars['String']>;
  proposer_gte?: Maybe<Scalars['String']>;
  proposer_in?: Maybe<Array<Scalars['String']>>;
  proposer_lt?: Maybe<Scalars['String']>;
  proposer_lte?: Maybe<Scalars['String']>;
  proposer_not?: Maybe<Scalars['String']>;
  proposer_not_contains?: Maybe<Scalars['String']>;
  proposer_not_ends_with?: Maybe<Scalars['String']>;
  proposer_not_in?: Maybe<Array<Scalars['String']>>;
  proposer_not_starts_with?: Maybe<Scalars['String']>;
  proposer_starts_with?: Maybe<Scalars['String']>;
  treasuryProposalId_gt?: Maybe<Scalars['Int']>;
  treasuryProposalId_gte?: Maybe<Scalars['Int']>;
  treasuryProposalId_in?: Maybe<Array<Scalars['Int']>>;
  treasuryProposalId_lt?: Maybe<Scalars['Int']>;
  treasuryProposalId_lte?: Maybe<Scalars['Int']>;
  treasuryProposalId_not?: Maybe<Scalars['Int']>;
  treasuryProposalId_not_in?: Maybe<Array<Scalars['Int']>>;
  treasuryStatus_every?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_none?: Maybe<TreasuryStatusWhereInput>;
  treasuryStatus_some?: Maybe<TreasuryStatusWhereInput>;
  value?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_gt?: Maybe<Scalars['String']>;
  value_gte?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_lt?: Maybe<Scalars['String']>;
  value_lte?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_not_starts_with?: Maybe<Scalars['String']>;
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
};

export enum TreasuryStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type TreasuryStatusWhereInput = {
  AND?: Maybe<Array<TreasuryStatusWhereInput>>;
  NOT?: Maybe<Array<TreasuryStatusWhereInput>>;
  OR?: Maybe<Array<TreasuryStatusWhereInput>>;
  blockNumber?: Maybe<BlockNumberWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  treasurySpendProposal?: Maybe<TreasurySpendProposalWhereInput>;
};

export type TreasuryStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


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

export type ValidatorWhereInput = {
  AND?: Maybe<Array<ValidatorWhereInput>>;
  NOT?: Maybe<Array<ValidatorWhereInput>>;
  OR?: Maybe<Array<ValidatorWhereInput>>;
  controller?: Maybe<Scalars['String']>;
  controller_contains?: Maybe<Scalars['String']>;
  controller_ends_with?: Maybe<Scalars['String']>;
  controller_gt?: Maybe<Scalars['String']>;
  controller_gte?: Maybe<Scalars['String']>;
  controller_in?: Maybe<Array<Scalars['String']>>;
  controller_lt?: Maybe<Scalars['String']>;
  controller_lte?: Maybe<Scalars['String']>;
  controller_not?: Maybe<Scalars['String']>;
  controller_not_contains?: Maybe<Scalars['String']>;
  controller_not_ends_with?: Maybe<Scalars['String']>;
  controller_not_in?: Maybe<Array<Scalars['String']>>;
  controller_not_starts_with?: Maybe<Scalars['String']>;
  controller_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  preferences?: Maybe<Scalars['String']>;
  preferences_contains?: Maybe<Scalars['String']>;
  preferences_ends_with?: Maybe<Scalars['String']>;
  preferences_gt?: Maybe<Scalars['String']>;
  preferences_gte?: Maybe<Scalars['String']>;
  preferences_in?: Maybe<Array<Scalars['String']>>;
  preferences_lt?: Maybe<Scalars['String']>;
  preferences_lte?: Maybe<Scalars['String']>;
  preferences_not?: Maybe<Scalars['String']>;
  preferences_not_contains?: Maybe<Scalars['String']>;
  preferences_not_ends_with?: Maybe<Scalars['String']>;
  preferences_not_in?: Maybe<Array<Scalars['String']>>;
  preferences_not_starts_with?: Maybe<Scalars['String']>;
  preferences_starts_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionWhereInput>;
  stash?: Maybe<Scalars['String']>;
  stash_contains?: Maybe<Scalars['String']>;
  stash_ends_with?: Maybe<Scalars['String']>;
  stash_gt?: Maybe<Scalars['String']>;
  stash_gte?: Maybe<Scalars['String']>;
  stash_in?: Maybe<Array<Scalars['String']>>;
  stash_lt?: Maybe<Scalars['String']>;
  stash_lte?: Maybe<Scalars['String']>;
  stash_not?: Maybe<Scalars['String']>;
  stash_not_contains?: Maybe<Scalars['String']>;
  stash_not_ends_with?: Maybe<Scalars['String']>;
  stash_not_in?: Maybe<Array<Scalars['String']>>;
  stash_not_starts_with?: Maybe<Scalars['String']>;
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
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addPostAndProposalMutation(variables: AddPostAndProposalMutationMutationVariables): Promise<AddPostAndProposalMutationMutation> {
      return withWrapper(() => client.request<AddPostAndProposalMutationMutation>(print(AddPostAndProposalMutationDocument), variables));
    },
    addPostAndTreasurySpendProposalMutation(variables: AddPostAndTreasurySpendProposalMutationMutationVariables): Promise<AddPostAndTreasurySpendProposalMutationMutation> {
      return withWrapper(() => client.request<AddPostAndTreasurySpendProposalMutationMutation>(print(AddPostAndTreasurySpendProposalMutationDocument), variables));
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
    }
  };
}