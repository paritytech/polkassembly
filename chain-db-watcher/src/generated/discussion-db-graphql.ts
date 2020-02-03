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
  timestamptz: any,
  uuid: any,
};

export type Comments = {
   __typename?: 'comments',
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

export type Mutation_Root = {
   __typename?: 'mutation_root',
  delete_comments?: Maybe<Comments_Mutation_Response>,
  delete_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  delete_posts?: Maybe<Posts_Mutation_Response>,
  insert_comments?: Maybe<Comments_Mutation_Response>,
  insert_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  insert_post_types?: Maybe<Post_Types_Mutation_Response>,
  insert_posts?: Maybe<Posts_Mutation_Response>,
  update_comments?: Maybe<Comments_Mutation_Response>,
  update_onchain_links?: Maybe<Onchain_Links_Mutation_Response>,
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  update_posts?: Maybe<Posts_Mutation_Response>,
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

export type Onchain_Links = {
   __typename?: 'onchain_links',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  onchain_proposal_id?: Maybe<Scalars['Int']>,
  onchain_referendum_id?: Maybe<Scalars['Int']>,
  post: Posts,
  post_id: Scalars['Int'],
  proposer_address: Scalars['String'],
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

export type Query_Root = {
   __typename?: 'query_root',
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
  & Pick<Onchain_Links, 'id' | 'onchain_proposal_id'>
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
}
    `;
export const DiscussionReferendumFragmentDoc = gql`
    fragment discussionReferendum on onchain_links {
  id
  onchain_referendum_id
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
    getDiscussionProposals(variables?: GetDiscussionProposalsQueryVariables): Promise<GetDiscussionProposalsQuery> {
      return client.request<GetDiscussionProposalsQuery>(print(GetDiscussionProposalsDocument), variables);
    },
    getDiscussionReferenda(variables?: GetDiscussionReferendaQueryVariables): Promise<GetDiscussionReferendaQuery> {
      return client.request<GetDiscussionReferendaQuery>(print(GetDiscussionReferendaDocument), variables);
    }
  };
}