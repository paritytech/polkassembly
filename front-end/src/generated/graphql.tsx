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
  timestamp: any,
  time: any,
  timestamptz: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

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
  /** delete data from the table: "post_types" */
  delete_post_types?: Maybe<Post_Types_Mutation_Response>,
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>,
  /** delete data from the table: "replies" */
  delete_replies?: Maybe<Replies_Mutation_Response>,
  /** delete data from the table: "topics" */
  delete_topics?: Maybe<Topics_Mutation_Response>,
  /** insert data into the table: "post_types" */
  insert_post_types?: Maybe<Post_Types_Mutation_Response>,
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>,
  /** insert data into the table: "replies" */
  insert_replies?: Maybe<Replies_Mutation_Response>,
  /** insert data into the table: "topics" */
  insert_topics?: Maybe<Topics_Mutation_Response>,
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  requestResetPassword?: Maybe<Message>,
  resetPassword?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  /** update data of the table: "post_types" */
  update_post_types?: Maybe<Post_Types_Mutation_Response>,
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>,
  /** update data of the table: "replies" */
  update_replies?: Maybe<Replies_Mutation_Response>,
  /** update data of the table: "topics" */
  update_topics?: Maybe<Topics_Mutation_Response>,
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
export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_RepliesArgs = {
  where: Replies_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_TopicsArgs = {
  where: Topics_Bool_Exp
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
export type Mutation_RootInsert_RepliesArgs = {
  objects: Array<Replies_Insert_Input>,
  on_conflict?: Maybe<Replies_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_TopicsArgs = {
  objects: Array<Topics_Insert_Input>,
  on_conflict?: Maybe<Topics_On_Conflict>
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
export type Mutation_RootUpdate_RepliesArgs = {
  _inc?: Maybe<Replies_Inc_Input>,
  _set?: Maybe<Replies_Set_Input>,
  where: Replies_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_TopicsArgs = {
  _inc?: Maybe<Topics_Inc_Input>,
  _set?: Maybe<Topics_Set_Input>,
  where: Topics_Bool_Exp
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
  content?: Maybe<Scalars['String']>,
  creation_date: Scalars['timestamp'],
  id: Scalars['Int'],
  modification_date: Scalars['time'],
  /** An array relationship */
  replies: Array<Replies>,
  /** An aggregated array relationship */
  replies_aggregate: Replies_Aggregate,
  title: Scalars['String'],
  /** An object relationship */
  topic?: Maybe<Topics>,
  /** Define the main suject of the post */
  topic_id?: Maybe<Scalars['Int']>,
  /** An object relationship */
  type: Post_Types,
  type_id: Scalars['Int'],
};


/** columns and relationships of "posts" */
export type PostsRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** columns and relationships of "posts" */
export type PostsReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
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
  content?: Maybe<String_Comparison_Exp>,
  creation_date?: Maybe<Timestamp_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  modification_date?: Maybe<Time_Comparison_Exp>,
  replies?: Maybe<Replies_Bool_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  topic?: Maybe<Topics_Bool_Exp>,
  topic_id?: Maybe<Int_Comparison_Exp>,
  type?: Maybe<Post_Types_Bool_Exp>,
  type_id?: Maybe<Int_Comparison_Exp>,
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
  content?: Maybe<Scalars['String']>,
  creation_date?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  modification_date?: Maybe<Scalars['time']>,
  replies?: Maybe<Replies_Arr_Rel_Insert_Input>,
  title?: Maybe<Scalars['String']>,
  topic?: Maybe<Topics_Obj_Rel_Insert_Input>,
  topic_id?: Maybe<Scalars['Int']>,
  type?: Maybe<Post_Types_Obj_Rel_Insert_Input>,
  type_id?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
   __typename?: 'posts_max_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
   __typename?: 'posts_min_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  topic_id?: Maybe<Order_By>,
  type_id?: Maybe<Order_By>,
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
  content?: Maybe<Order_By>,
  creation_date?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  modification_date?: Maybe<Order_By>,
  replies_aggregate?: Maybe<Replies_Aggregate_Order_By>,
  title?: Maybe<Order_By>,
  topic?: Maybe<Topics_Order_By>,
  topic_id?: Maybe<Order_By>,
  type?: Maybe<Post_Types_Order_By>,
  type_id?: Maybe<Order_By>,
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreationDate = 'creation_date',
  /** column name */
  Id = 'id',
  /** column name */
  ModificationDate = 'modification_date',
  /** column name */
  Title = 'title',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  TypeId = 'type_id'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  creation_date?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  modification_date?: Maybe<Scalars['time']>,
  title?: Maybe<Scalars['String']>,
  topic_id?: Maybe<Scalars['Int']>,
  type_id?: Maybe<Scalars['Int']>,
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
  CreationDate = 'creation_date',
  /** column name */
  Id = 'id',
  /** column name */
  ModificationDate = 'modification_date',
  /** column name */
  Title = 'title',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  TypeId = 'type_id'
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
  /** fetch data from the table: "replies" */
  replies: Array<Replies>,
  /** fetch aggregated fields from the table: "replies" */
  replies_aggregate: Replies_Aggregate,
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>,
  token?: Maybe<Token>,
  /** fetch data from the table: "topics" */
  topics: Array<Topics>,
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: Topics_Aggregate,
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>,
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
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
export type Query_RootRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** query root */
export type Query_RootReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** query root */
export type Query_RootReplies_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootTopicsArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Topics_Order_By>>,
  where?: Maybe<Topics_Bool_Exp>
};


/** query root */
export type Query_RootTopics_AggregateArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Topics_Order_By>>,
  where?: Maybe<Topics_Bool_Exp>
};


/** query root */
export type Query_RootTopics_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['Int']
};

/** 
 * The replies to any post
 * 
 * 
 * columns and relationships of "replies"
 **/
export type Replies = {
   __typename?: 'replies',
  /** Remote relationship field */
  author?: Maybe<User>,
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  /** An object relationship */
  post?: Maybe<Posts>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "replies" */
export type Replies_Aggregate = {
   __typename?: 'replies_aggregate',
  aggregate?: Maybe<Replies_Aggregate_Fields>,
  nodes: Array<Replies>,
};

/** aggregate fields of "replies" */
export type Replies_Aggregate_Fields = {
   __typename?: 'replies_aggregate_fields',
  avg?: Maybe<Replies_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Replies_Max_Fields>,
  min?: Maybe<Replies_Min_Fields>,
  stddev?: Maybe<Replies_Stddev_Fields>,
  stddev_pop?: Maybe<Replies_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Replies_Stddev_Samp_Fields>,
  sum?: Maybe<Replies_Sum_Fields>,
  var_pop?: Maybe<Replies_Var_Pop_Fields>,
  var_samp?: Maybe<Replies_Var_Samp_Fields>,
  variance?: Maybe<Replies_Variance_Fields>,
};


/** aggregate fields of "replies" */
export type Replies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Replies_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "replies" */
export type Replies_Aggregate_Order_By = {
  avg?: Maybe<Replies_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Replies_Max_Order_By>,
  min?: Maybe<Replies_Min_Order_By>,
  stddev?: Maybe<Replies_Stddev_Order_By>,
  stddev_pop?: Maybe<Replies_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Replies_Stddev_Samp_Order_By>,
  sum?: Maybe<Replies_Sum_Order_By>,
  var_pop?: Maybe<Replies_Var_Pop_Order_By>,
  var_samp?: Maybe<Replies_Var_Samp_Order_By>,
  variance?: Maybe<Replies_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "replies" */
export type Replies_Arr_Rel_Insert_Input = {
  data: Array<Replies_Insert_Input>,
  on_conflict?: Maybe<Replies_On_Conflict>,
};

/** aggregate avg on columns */
export type Replies_Avg_Fields = {
   __typename?: 'replies_avg_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "replies" */
export type Replies_Avg_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "replies". All fields are combined with a logical 'AND'. */
export type Replies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Replies_Bool_Exp>>>,
  _not?: Maybe<Replies_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Replies_Bool_Exp>>>,
  author_id?: Maybe<Int_Comparison_Exp>,
  content?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "replies" */
export enum Replies_Constraint {
  /** unique or primary key constraint */
  RepliesPkey = 'replies_pkey'
}

/** input type for incrementing integer columne in table "replies" */
export type Replies_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "replies" */
export type Replies_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Replies_Max_Fields = {
   __typename?: 'replies_max_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "replies" */
export type Replies_Max_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Replies_Min_Fields = {
   __typename?: 'replies_min_fields',
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "replies" */
export type Replies_Min_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "replies" */
export type Replies_Mutation_Response = {
   __typename?: 'replies_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Replies>,
};

/** input type for inserting object relation for remote table "replies" */
export type Replies_Obj_Rel_Insert_Input = {
  data: Replies_Insert_Input,
  on_conflict?: Maybe<Replies_On_Conflict>,
};

/** on conflict condition type for table "replies" */
export type Replies_On_Conflict = {
  constraint: Replies_Constraint,
  update_columns: Array<Replies_Update_Column>,
  where?: Maybe<Replies_Bool_Exp>,
};

/** ordering options when selecting data from "replies" */
export type Replies_Order_By = {
  author_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "replies" */
export enum Replies_Select_Column {
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

/** input type for updating data in table "replies" */
export type Replies_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type Replies_Stddev_Fields = {
   __typename?: 'replies_stddev_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "replies" */
export type Replies_Stddev_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Replies_Stddev_Pop_Fields = {
   __typename?: 'replies_stddev_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "replies" */
export type Replies_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Replies_Stddev_Samp_Fields = {
   __typename?: 'replies_stddev_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "replies" */
export type Replies_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Replies_Sum_Fields = {
   __typename?: 'replies_sum_fields',
  author_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "replies" */
export type Replies_Sum_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** update columns of table "replies" */
export enum Replies_Update_Column {
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
export type Replies_Var_Pop_Fields = {
   __typename?: 'replies_var_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "replies" */
export type Replies_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Replies_Var_Samp_Fields = {
   __typename?: 'replies_var_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "replies" */
export type Replies_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Replies_Variance_Fields = {
   __typename?: 'replies_variance_fields',
  author_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "replies" */
export type Replies_Variance_Order_By = {
  author_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
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
  /** fetch data from the table: "replies" */
  replies: Array<Replies>,
  /** fetch aggregated fields from the table: "replies" */
  replies_aggregate: Replies_Aggregate,
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>,
  /** fetch data from the table: "topics" */
  topics: Array<Topics>,
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: Topics_Aggregate,
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>,
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


/** subscription root */
export type Subscription_RootRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** subscription root */
export type Subscription_RootReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** subscription root */
export type Subscription_RootReplies_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootTopicsArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Topics_Order_By>>,
  where?: Maybe<Topics_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTopics_AggregateArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Topics_Order_By>>,
  where?: Maybe<Topics_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTopics_By_PkArgs = {
  id: Scalars['Int']
};


/** expression to compare columns of type time. All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: Maybe<Scalars['time']>,
  _gt?: Maybe<Scalars['time']>,
  _gte?: Maybe<Scalars['time']>,
  _in?: Maybe<Array<Scalars['time']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['time']>,
  _lte?: Maybe<Scalars['time']>,
  _neq?: Maybe<Scalars['time']>,
  _nin?: Maybe<Array<Scalars['time']>>,
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
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

/** columns and relationships of "topics" */
export type Topics = {
   __typename?: 'topics',
  id: Scalars['Int'],
  name: Scalars['String'],
  /** An array relationship */
  posts: Array<Posts>,
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate,
};


/** columns and relationships of "topics" */
export type TopicsPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** columns and relationships of "topics" */
export type TopicsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

/** aggregated selection of "topics" */
export type Topics_Aggregate = {
   __typename?: 'topics_aggregate',
  aggregate?: Maybe<Topics_Aggregate_Fields>,
  nodes: Array<Topics>,
};

/** aggregate fields of "topics" */
export type Topics_Aggregate_Fields = {
   __typename?: 'topics_aggregate_fields',
  avg?: Maybe<Topics_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Topics_Max_Fields>,
  min?: Maybe<Topics_Min_Fields>,
  stddev?: Maybe<Topics_Stddev_Fields>,
  stddev_pop?: Maybe<Topics_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Topics_Stddev_Samp_Fields>,
  sum?: Maybe<Topics_Sum_Fields>,
  var_pop?: Maybe<Topics_Var_Pop_Fields>,
  var_samp?: Maybe<Topics_Var_Samp_Fields>,
  variance?: Maybe<Topics_Variance_Fields>,
};


/** aggregate fields of "topics" */
export type Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Topics_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "topics" */
export type Topics_Aggregate_Order_By = {
  avg?: Maybe<Topics_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Topics_Max_Order_By>,
  min?: Maybe<Topics_Min_Order_By>,
  stddev?: Maybe<Topics_Stddev_Order_By>,
  stddev_pop?: Maybe<Topics_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Topics_Stddev_Samp_Order_By>,
  sum?: Maybe<Topics_Sum_Order_By>,
  var_pop?: Maybe<Topics_Var_Pop_Order_By>,
  var_samp?: Maybe<Topics_Var_Samp_Order_By>,
  variance?: Maybe<Topics_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "topics" */
export type Topics_Arr_Rel_Insert_Input = {
  data: Array<Topics_Insert_Input>,
  on_conflict?: Maybe<Topics_On_Conflict>,
};

/** aggregate avg on columns */
export type Topics_Avg_Fields = {
   __typename?: 'topics_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "topics" */
export type Topics_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "topics". All fields are combined with a logical 'AND'. */
export type Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Topics_Bool_Exp>>>,
  _not?: Maybe<Topics_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Topics_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  posts?: Maybe<Posts_Bool_Exp>,
};

/** unique or primary key constraints on table "topics" */
export enum Topics_Constraint {
  /** unique or primary key constraint */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer columne in table "topics" */
export type Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "topics" */
export type Topics_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Topics_Max_Fields = {
   __typename?: 'topics_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "topics" */
export type Topics_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Topics_Min_Fields = {
   __typename?: 'topics_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "topics" */
export type Topics_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "topics" */
export type Topics_Mutation_Response = {
   __typename?: 'topics_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Topics>,
};

/** input type for inserting object relation for remote table "topics" */
export type Topics_Obj_Rel_Insert_Input = {
  data: Topics_Insert_Input,
  on_conflict?: Maybe<Topics_On_Conflict>,
};

/** on conflict condition type for table "topics" */
export type Topics_On_Conflict = {
  constraint: Topics_Constraint,
  update_columns: Array<Topics_Update_Column>,
  where?: Maybe<Topics_Bool_Exp>,
};

/** ordering options when selecting data from "topics" */
export type Topics_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
};

/** select columns of table "topics" */
export enum Topics_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "topics" */
export type Topics_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Topics_Stddev_Fields = {
   __typename?: 'topics_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "topics" */
export type Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Topics_Stddev_Pop_Fields = {
   __typename?: 'topics_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "topics" */
export type Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Topics_Stddev_Samp_Fields = {
   __typename?: 'topics_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "topics" */
export type Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Topics_Sum_Fields = {
   __typename?: 'topics_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "topics" */
export type Topics_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "topics" */
export enum Topics_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Topics_Var_Pop_Fields = {
   __typename?: 'topics_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "topics" */
export type Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Topics_Var_Samp_Fields = {
   __typename?: 'topics_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "topics" */
export type Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Topics_Variance_Fields = {
   __typename?: 'topics_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "topics" */
export type Topics_Variance_Order_By = {
  id?: Maybe<Order_By>,
};


export type User = {
   __typename?: 'User',
  email_verified?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
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
  )> }
);

export type TopicFragment = (
  { __typename?: 'topics' }
  & Pick<Topics, 'id' | 'name'>
);

export type TopicsQueryVariables = {};


export type TopicsQuery = (
  { __typename?: 'query_root' }
  & { topics: Array<(
    { __typename?: 'topics' }
    & TopicFragment
  )> }
);

export type LatestDiscussionPostsQueryVariables = {};


export type LatestDiscussionPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'creation_date' | 'modification_date'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )>, replies_aggregate: (
      { __typename?: 'replies_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'replies_aggregate_fields' }
        & Pick<Replies_Aggregate_Fields, 'count'>
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
    & Pick<Posts, 'id' | 'title' | 'creation_date' | 'modification_date'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )>, replies_aggregate: (
      { __typename?: 'replies_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'replies_aggregate_fields' }
        & Pick<Replies_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type PostFragment = (
  { __typename?: 'posts' }
  & Pick<Posts, 'content' | 'creation_date' | 'id' | 'modification_date' | 'title'>
  & { author: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username'>
  )>, replies: Array<(
    { __typename?: 'replies' }
    & Pick<Replies, 'id' | 'content' | 'created_at' | 'updated_at'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  )>, topic: Maybe<(
    { __typename?: 'topics' }
    & Pick<Topics, 'id' | 'name'>
  )>, type: (
    { __typename?: 'post_types' }
    & Pick<Post_Types, 'id' | 'name'>
  ) }
);

export type PostAndRepliesQueryVariables = {
  id: Scalars['Int']
};


export type PostAndRepliesQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & PostFragment
  )> }
);

export type LatestProposalPostsQueryVariables = {};


export type LatestProposalPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'creation_date' | 'modification_date'>
    & { author: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )>, replies_aggregate: (
      { __typename?: 'replies_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'replies_aggregate_fields' }
        & Pick<Replies_Aggregate_Fields, 'count'>
      )> }
    ), type: (
      { __typename?: 'post_types' }
      & Pick<Post_Types, 'name' | 'id'>
    ) }
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
    fragment topic on topics {
  id
  name
}
    `;
export const PostFragmentDoc = gql`
    fragment post on posts {
  author {
    username
  }
  content
  creation_date
  id
  modification_date
  replies(order_by: {created_at: asc}) {
    author {
      id
      username
    }
    id
    content
    created_at
    updated_at
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
    `;
export const CreatePostDocument = gql`
    mutation createPost($userId: Int!, $content: String!, $topicId: Int!, $title: String!) {
  __typename
  insert_posts(objects: {author_id: $userId, content: $content, title: $title, topic_id: $topicId}) {
    affected_rows
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
export const TopicsDocument = gql`
    query Topics {
  topics {
    ...topic
  }
}
    ${TopicFragmentDoc}`;

/**
 * __useTopicsQuery__
 *
 * To run a query within a React component, call `useTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
        return ApolloReactHooks.useQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, baseOptions);
      }
export function useTopicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, baseOptions);
        }
export type TopicsQueryHookResult = ReturnType<typeof useTopicsQuery>;
export type TopicsLazyQueryHookResult = ReturnType<typeof useTopicsLazyQuery>;
export type TopicsQueryResult = ApolloReactCommon.QueryResult<TopicsQuery, TopicsQueryVariables>;
export const LatestDiscussionPostsDocument = gql`
    query LatestDiscussionPosts {
  posts(order_by: {creation_date: desc}, limit: 20, where: {type: {id: {_eq: 1}}}) {
    id
    title
    author {
      username
    }
    creation_date
    modification_date
    replies_aggregate {
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
  posts(order_by: {creation_date: desc}) {
    id
    title
    author {
      username
    }
    creation_date
    modification_date
    replies_aggregate {
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
export const PostAndRepliesDocument = gql`
    query PostAndReplies($id: Int!) {
  posts(where: {id: {_eq: $id}}) {
    ...post
  }
}
    ${PostFragmentDoc}`;

/**
 * __usePostAndRepliesQuery__
 *
 * To run a query within a React component, call `usePostAndRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostAndRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostAndRepliesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostAndRepliesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostAndRepliesQuery, PostAndRepliesQueryVariables>) {
        return ApolloReactHooks.useQuery<PostAndRepliesQuery, PostAndRepliesQueryVariables>(PostAndRepliesDocument, baseOptions);
      }
export function usePostAndRepliesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostAndRepliesQuery, PostAndRepliesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostAndRepliesQuery, PostAndRepliesQueryVariables>(PostAndRepliesDocument, baseOptions);
        }
export type PostAndRepliesQueryHookResult = ReturnType<typeof usePostAndRepliesQuery>;
export type PostAndRepliesLazyQueryHookResult = ReturnType<typeof usePostAndRepliesLazyQuery>;
export type PostAndRepliesQueryResult = ApolloReactCommon.QueryResult<PostAndRepliesQuery, PostAndRepliesQueryVariables>;
export const LatestProposalPostsDocument = gql`
    query LatestProposalPosts {
  posts(order_by: {creation_date: desc}, limit: 20, where: {type: {id: {_eq: 2}}}) {
    id
    title
    author {
      username
    }
    creation_date
    modification_date
    replies_aggregate {
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