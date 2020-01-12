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
  timestamptz: any,
  uuid: any,
  Upload: any,
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
  undoEmail?: Maybe<ChangeResponse>,
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


export type MutationUndoEmailArgs = {
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
  delete_comments?: Maybe<Comments_Mutation_Response>,
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  delete_posts?: Maybe<Posts_Mutation_Response>,
  insert_comments?: Maybe<Comments_Mutation_Response>,
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
  undoEmail?: Maybe<ChangeResponse>,
  update_comments?: Maybe<Comments_Mutation_Response>,
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  update_posts?: Maybe<Posts_Mutation_Response>,
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


export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp
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


export type Mutation_RootUndoEmailArgs = {
  token: Scalars['String']
};


export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>,
  _set?: Maybe<Comments_Set_Input>,
  where: Comments_Bool_Exp
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


export type Mutation_RootVerifyEmailArgs = {
  token: Scalars['String']
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
  author?: Maybe<User>,
  author_id: Scalars['Int'],
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id: Scalars['Int'],
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
  comments: Array<Comments>,
  comments_aggregate: Comments_Aggregate,
  comments_by_pk?: Maybe<Comments>,
  post_topics: Array<Post_Topics>,
  post_topics_aggregate: Post_Topics_Aggregate,
  post_topics_by_pk?: Maybe<Post_Topics>,
  post_types: Array<Post_Types>,
  post_types_aggregate: Post_Types_Aggregate,
  post_types_by_pk?: Maybe<Post_Types>,
  posts: Array<Posts>,
  posts_aggregate: Posts_Aggregate,
  posts_by_pk?: Maybe<Posts>,
  subscription?: Maybe<Subscription>,
  token?: Maybe<Token>,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
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


export type Query_RootSubscriptionArgs = {
  post_id: Scalars['Int']
};


export type Query_RootUserArgs = {
  id: Scalars['Int']
};


export type Query_RootUsersArgs = {
  limit?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>
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

export type UndoEmailMutationVariables = {
  token: Scalars['String']
};


export type UndoEmailMutation = (
  { __typename?: 'mutation_root' }
  & { undoEmail: Maybe<(
    { __typename?: 'ChangeResponse' }
    & Pick<ChangeResponse, 'message' | 'token'>
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
export const UndoEmailDocument = gql`
    mutation undoEmail($token: String!) {
  undoEmail(token: $token) {
    message
    token
  }
}
    `;
export type UndoEmailMutationFn = ApolloReactCommon.MutationFunction<UndoEmailMutation, UndoEmailMutationVariables>;

/**
 * __useUndoEmailMutation__
 *
 * To run a mutation, you first call `useUndoEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoEmailMutation, { data, loading, error }] = useUndoEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUndoEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UndoEmailMutation, UndoEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<UndoEmailMutation, UndoEmailMutationVariables>(UndoEmailDocument, baseOptions);
      }
export type UndoEmailMutationHookResult = ReturnType<typeof useUndoEmailMutation>;
export type UndoEmailMutationResult = ApolloReactCommon.MutationResult<UndoEmailMutation>;
export type UndoEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<UndoEmailMutation, UndoEmailMutationVariables>;
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