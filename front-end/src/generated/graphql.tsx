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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** columns and relationships of "comments" */
export type Comments = {
   __typename?: 'comments',
  /** Remote relationship field */
  author?: Maybe<User>,
  author_id: Scalars['Int'],
  /** An object relationship */
  comment?: Maybe<Comments>,
  /** An array relationship */
  comments: Array<Comments>,
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate,
  content: Scalars['String'],
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  parent_comment_id?: Maybe<Scalars['uuid']>,
  /** An object relationship */
  post: Posts,
  post_id: Scalars['Int'],
  updated_at: Scalars['timestamptz'],
};


/** columns and relationships of "comments" */
export type CommentsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


/** columns and relationships of "comments" */
export type CommentsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
   __typename?: 'comments_aggregate',
  aggregate?: Maybe<Comments_Aggregate_Fields>,
  nodes: Array<Comments>,
};

/** aggregate fields of "comments" */
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


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "comments" */
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

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>,
  on_conflict?: Maybe<Comments_On_Conflict>,
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
   __typename?: 'comments_avg_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
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

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for incrementing integer columne in table "comments" */
export type Comments_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "comments" */
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

/** aggregate max on columns */
export type Comments_Max_Fields = {
   __typename?: 'comments_max_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
   __typename?: 'comments_min_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
   __typename?: 'comments_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Comments>,
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input,
  on_conflict?: Maybe<Comments_On_Conflict>,
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint,
  update_columns: Array<Comments_Update_Column>,
  where?: Maybe<Comments_Bool_Exp>,
};

/** ordering options when selecting data from "comments" */
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
  ParentCommentId = 'parent_comment_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  parent_comment_id?: Maybe<Scalars['uuid']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
   __typename?: 'comments_stddev_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
   __typename?: 'comments_stddev_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
   __typename?: 'comments_stddev_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
   __typename?: 'comments_sum_fields',
  author_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
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
  ParentCommentId = 'parent_comment_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
   __typename?: 'comments_var_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
   __typename?: 'comments_var_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
   __typename?: 'comments_variance_fields',
  author_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  author_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
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
  changeEmail?: Maybe<Message>,
  changeName?: Maybe<Message>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<Message>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
  resetPassword?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  verifyEmail?: Maybe<Message>,
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


export type MutationVerifyEmailArgs = {
  token: Scalars['String']
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  changeEmail?: Maybe<Message>,
  changeName?: Maybe<Message>,
  changePassword?: Maybe<Message>,
  changeUsername?: Maybe<Message>,
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>,
  /** delete data from the table: "post_topics" */
  delete_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  /** delete data from the table: "post_types" */
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>,
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>,
  /** insert data into the table: "post_topics" */
  insert_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  /** insert data into the table: "post_types" */
  insert_post_types?: Maybe<Post_Types_Mutation_Response>,
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
  resetPassword?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>,
  /** update data of the table: "post_topics" */
  update_post_topics?: Maybe<Post_Topics_Mutation_Response>,
  /** update data of the table: "post_types" */
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>,
  verifyEmail?: Maybe<Message>,
};


/** mutation root */
export type Mutation_RootChangeEmailArgs = {
  email: Scalars['String']
};


/** mutation root */
export type Mutation_RootChangeNameArgs = {
  newName: Scalars['String']
};


/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String'],
  oldPassword: Scalars['String']
};


/** mutation root */
export type Mutation_RootChangeUsernameArgs = {
  username: Scalars['String']
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Post_TopicsArgs = {
  where: Post_Topics_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>,
  on_conflict?: Maybe<Comments_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Post_TopicsArgs = {
  objects: Array<Post_Topics_Insert_Input>,
  on_conflict?: Maybe<Post_Topics_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Post_TypesArgs = {
  objects: Array<Post_Types_Insert_Input>,
  on_conflict?: Maybe<Post_Types_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>,
  on_conflict?: Maybe<Posts_On_Conflict>
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  password: Scalars['String'],
  username: Scalars['String']
};


/** mutation root */
export type Mutation_RootRequestResetPasswordArgs = {
  email: Scalars['String']
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars['String'],
  token: Scalars['String']
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  username: Scalars['String']
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>,
  _set?: Maybe<Comments_Set_Input>,
  where: Comments_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Post_TopicsArgs = {
  _inc?: Maybe<Post_Topics_Inc_Input>,
  _set?: Maybe<Post_Topics_Set_Input>,
  where: Post_Topics_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Post_TypesArgs = {
  _inc?: Maybe<Post_Types_Inc_Input>,
  _set?: Maybe<Post_Types_Set_Input>,
  where: Post_Types_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>,
  _set?: Maybe<Posts_Set_Input>,
  where: Posts_Bool_Exp
};


/** mutation root */
export type Mutation_RootVerifyEmailArgs = {
  token: Scalars['String']
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

/** columns and relationships of "post_topics" */
export type Post_Topics = {
   __typename?: 'post_topics',
  id: Scalars['Int'],
  name: Scalars['String'],
  /** An array relationship */
  posts: Array<Posts>,
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate,
};


/** columns and relationships of "post_topics" */
export type Post_TopicsPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** columns and relationships of "post_topics" */
export type Post_TopicsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

/** aggregated selection of "post_topics" */
export type Post_Topics_Aggregate = {
   __typename?: 'post_topics_aggregate',
  aggregate?: Maybe<Post_Topics_Aggregate_Fields>,
  nodes: Array<Post_Topics>,
};

/** aggregate fields of "post_topics" */
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


/** aggregate fields of "post_topics" */
export type Post_Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Topics_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "post_topics" */
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

/** input type for inserting array relation for remote table "post_topics" */
export type Post_Topics_Arr_Rel_Insert_Input = {
  data: Array<Post_Topics_Insert_Input>,
  on_conflict?: Maybe<Post_Topics_On_Conflict>,
};

/** aggregate avg on columns */
export type Post_Topics_Avg_Fields = {
   __typename?: 'post_topics_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "post_topics" */
export type Post_Topics_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "post_topics". All fields are combined with a logical 'AND'. */
export type Post_Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>,
  _not?: Maybe<Post_Topics_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Post_Topics_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  posts?: Maybe<Posts_Bool_Exp>,
};

/** unique or primary key constraints on table "post_topics" */
export enum Post_Topics_Constraint {
  /** unique or primary key constraint */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer columne in table "post_topics" */
export type Post_Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "post_topics" */
export type Post_Topics_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Post_Topics_Max_Fields = {
   __typename?: 'post_topics_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "post_topics" */
export type Post_Topics_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Post_Topics_Min_Fields = {
   __typename?: 'post_topics_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "post_topics" */
export type Post_Topics_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "post_topics" */
export type Post_Topics_Mutation_Response = {
   __typename?: 'post_topics_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Post_Topics>,
};

/** input type for inserting object relation for remote table "post_topics" */
export type Post_Topics_Obj_Rel_Insert_Input = {
  data: Post_Topics_Insert_Input,
  on_conflict?: Maybe<Post_Topics_On_Conflict>,
};

/** on conflict condition type for table "post_topics" */
export type Post_Topics_On_Conflict = {
  constraint: Post_Topics_Constraint,
  update_columns: Array<Post_Topics_Update_Column>,
  where?: Maybe<Post_Topics_Bool_Exp>,
};

/** ordering options when selecting data from "post_topics" */
export type Post_Topics_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
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
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Post_Topics_Stddev_Fields = {
   __typename?: 'post_topics_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "post_topics" */
export type Post_Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Post_Topics_Stddev_Pop_Fields = {
   __typename?: 'post_topics_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "post_topics" */
export type Post_Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Post_Topics_Stddev_Samp_Fields = {
   __typename?: 'post_topics_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "post_topics" */
export type Post_Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Post_Topics_Sum_Fields = {
   __typename?: 'post_topics_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "post_topics" */
export type Post_Topics_Sum_Order_By = {
  id?: Maybe<Order_By>,
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
   __typename?: 'post_topics_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "post_topics" */
export type Post_Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Post_Topics_Var_Samp_Fields = {
   __typename?: 'post_topics_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "post_topics" */
export type Post_Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Post_Topics_Variance_Fields = {
   __typename?: 'post_topics_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "post_topics" */
export type Post_Topics_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

/** columns and relationships of "post_types" */
export type Post_Types = {
   __typename?: 'post_types',
  id: Scalars['Int'],
  name: Scalars['String'],
  /** An array relationship */
  posts: Array<Posts>,
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate,
};


/** columns and relationships of "post_types" */
export type Post_TypesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** columns and relationships of "post_types" */
export type Post_TypesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

/** aggregated selection of "post_types" */
export type Post_Types_Aggregate = {
   __typename?: 'post_types_aggregate',
  aggregate?: Maybe<Post_Types_Aggregate_Fields>,
  nodes: Array<Post_Types>,
};

/** aggregate fields of "post_types" */
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


/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Types_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "post_types" */
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

/** input type for inserting array relation for remote table "post_types" */
export type Post_Types_Arr_Rel_Insert_Input = {
  data: Array<Post_Types_Insert_Input>,
  on_conflict?: Maybe<Post_Types_On_Conflict>,
};

/** aggregate avg on columns */
export type Post_Types_Avg_Fields = {
   __typename?: 'post_types_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "post_types" */
export type Post_Types_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "post_types". All fields are combined with a logical 'AND'. */
export type Post_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>,
  _not?: Maybe<Post_Types_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Post_Types_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  posts?: Maybe<Posts_Bool_Exp>,
};

/** unique or primary key constraints on table "post_types" */
export enum Post_Types_Constraint {
  /** unique or primary key constraint */
  PostTypesNameKey = 'post_types_name_key',
  /** unique or primary key constraint */
  PostTypesPkey = 'post_types_pkey'
}

/** input type for incrementing integer columne in table "post_types" */
export type Post_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "post_types" */
export type Post_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Post_Types_Max_Fields = {
   __typename?: 'post_types_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "post_types" */
export type Post_Types_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Post_Types_Min_Fields = {
   __typename?: 'post_types_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "post_types" */
export type Post_Types_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "post_types" */
export type Post_Types_Mutation_Response = {
   __typename?: 'post_types_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Post_Types>,
};

/** input type for inserting object relation for remote table "post_types" */
export type Post_Types_Obj_Rel_Insert_Input = {
  data: Post_Types_Insert_Input,
  on_conflict?: Maybe<Post_Types_On_Conflict>,
};

/** on conflict condition type for table "post_types" */
export type Post_Types_On_Conflict = {
  constraint: Post_Types_Constraint,
  update_columns: Array<Post_Types_Update_Column>,
  where?: Maybe<Post_Types_Bool_Exp>,
};

/** ordering options when selecting data from "post_types" */
export type Post_Types_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
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
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Post_Types_Stddev_Fields = {
   __typename?: 'post_types_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "post_types" */
export type Post_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Post_Types_Stddev_Pop_Fields = {
   __typename?: 'post_types_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "post_types" */
export type Post_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Post_Types_Stddev_Samp_Fields = {
   __typename?: 'post_types_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "post_types" */
export type Post_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Post_Types_Sum_Fields = {
   __typename?: 'post_types_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "post_types" */
export type Post_Types_Sum_Order_By = {
  id?: Maybe<Order_By>,
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
   __typename?: 'post_types_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "post_types" */
export type Post_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Post_Types_Var_Samp_Fields = {
   __typename?: 'post_types_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "post_types" */
export type Post_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Post_Types_Variance_Fields = {
   __typename?: 'post_types_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "post_types" */
export type Post_Types_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

/** columns and relationships of "posts" */
export type Posts = {
   __typename?: 'posts',
  /** Remote relationship field */
  author?: Maybe<User>,
  author_id: Scalars['Int'],
  /** An array relationship */
  comments: Array<Comments>,
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id: Scalars['Int'],
  title: Scalars['String'],
  /** An object relationship */
  topic?: Maybe<Post_Topics>,
  /** Define the main suject of the post */
  topic_id?: Maybe<Scalars['Int']>,
  /** An object relationship */
  type: Post_Types,
  type_id: Scalars['Int'],
  updated_at?: Maybe<Scalars['timestamptz']>,
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
   __typename?: 'posts_aggregate',
  aggregate?: Maybe<Posts_Aggregate_Fields>,
  nodes: Array<Posts>,
};

/** aggregate fields of "posts" */
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


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "posts" */
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

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>,
  on_conflict?: Maybe<Posts_On_Conflict>,
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
   __typename?: 'posts_avg_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
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

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing integer columne in table "posts" */
export type Posts_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "posts" */
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

/** aggregate max on columns */
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

/** order by max() on columns of table "posts" */
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

/** aggregate min on columns */
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

/** order by min() on columns of table "posts" */
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

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
   __typename?: 'posts_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Posts>,
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input,
  on_conflict?: Maybe<Posts_On_Conflict>,
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint,
  update_columns: Array<Posts_Update_Column>,
  where?: Maybe<Posts_Bool_Exp>,
};

/** ordering options when selecting data from "posts" */
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
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
   __typename?: 'posts_stddev_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
   __typename?: 'posts_stddev_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
   __typename?: 'posts_stddev_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
   __typename?: 'posts_sum_fields',
  author_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
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
   __typename?: 'posts_var_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
   __typename?: 'posts_var_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
   __typename?: 'posts_variance_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  topic_id?: Maybe<Scalars['Float']>,
  type_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

export type Query = {
   __typename?: 'Query',
  token?: Maybe<Token>,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
};


export type QueryUserArgs = {
  id: Scalars['Int']
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "comments" */
  comments: Array<Comments>,
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate,
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>,
  /** fetch data from the table: "post_topics" */
  post_topics: Array<Post_Topics>,
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: Post_Topics_Aggregate,
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<Post_Topics>,
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>,
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate,
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>,
  /** fetch data from the table: "posts" */
  posts: Array<Posts>,
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate,
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>,
  token?: Maybe<Token>,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
};


/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


/** query root */
export type Query_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


/** query root */
export type Query_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


/** query root */
export type Query_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


/** query root */
export type Query_RootPost_Types_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** query root */
export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** query root */
export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['Int']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
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

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "comments" */
  comments: Array<Comments>,
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate,
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>,
  /** fetch data from the table: "post_topics" */
  post_topics: Array<Post_Topics>,
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: Post_Topics_Aggregate,
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<Post_Topics>,
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>,
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate,
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>,
  /** fetch data from the table: "posts" */
  posts: Array<Posts>,
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate,
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>,
};


/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Comments_Order_By>>,
  where?: Maybe<Comments_Bool_Exp>
};


/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootPost_TopicsArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPost_Topics_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Topics_Order_By>>,
  where?: Maybe<Post_Topics_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPost_Topics_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Post_Types_Order_By>>,
  where?: Maybe<Post_Types_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPost_Types_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
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
  email_verified?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
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

export type VerifyEmailMutationVariables = {
  token: Scalars['String']
};


export type VerifyEmailMutation = (
  { __typename?: 'mutation_root' }
  & { verifyEmail: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
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
export const VerifyEmailDocument = gql`
    mutation verifyEmail($token: String!) {
  verifyEmail(token: $token) {
    message
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