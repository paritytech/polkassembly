import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamp: any,
  timestamptz: any,
  time: any,
  float8: any,
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Scalars['Boolean']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Scalars['Boolean']>>,
};

/** columns and relationships of "categories" */
export type Categories = {
   __typename?: 'categories',
  id: Scalars['Int'],
  name: Scalars['String'],
  /** An array relationship */
  posts: Array<Posts>,
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate,
};


/** columns and relationships of "categories" */
export type CategoriesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** columns and relationships of "categories" */
export type CategoriesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
   __typename?: 'categories_aggregate',
  aggregate?: Maybe<Categories_Aggregate_Fields>,
  nodes: Array<Categories>,
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
   __typename?: 'categories_aggregate_fields',
  avg?: Maybe<Categories_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Categories_Max_Fields>,
  min?: Maybe<Categories_Min_Fields>,
  stddev?: Maybe<Categories_Stddev_Fields>,
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>,
  sum?: Maybe<Categories_Sum_Fields>,
  var_pop?: Maybe<Categories_Var_Pop_Fields>,
  var_samp?: Maybe<Categories_Var_Samp_Fields>,
  variance?: Maybe<Categories_Variance_Fields>,
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: Maybe<Categories_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Categories_Max_Order_By>,
  min?: Maybe<Categories_Min_Order_By>,
  stddev?: Maybe<Categories_Stddev_Order_By>,
  stddev_pop?: Maybe<Categories_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Categories_Stddev_Samp_Order_By>,
  sum?: Maybe<Categories_Sum_Order_By>,
  var_pop?: Maybe<Categories_Var_Pop_Order_By>,
  var_samp?: Maybe<Categories_Var_Samp_Order_By>,
  variance?: Maybe<Categories_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>,
  on_conflict?: Maybe<Categories_On_Conflict>,
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
   __typename?: 'categories_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>,
  _not?: Maybe<Categories_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  posts?: Maybe<Posts_Bool_Exp>,
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer columne in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
   __typename?: 'categories_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
   __typename?: 'categories_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
   __typename?: 'categories_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Categories>,
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input,
  on_conflict?: Maybe<Categories_On_Conflict>,
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint,
  update_columns: Array<Categories_Update_Column>,
  where?: Maybe<Categories_Bool_Exp>,
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
   __typename?: 'categories_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
   __typename?: 'categories_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
   __typename?: 'categories_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
   __typename?: 'categories_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
   __typename?: 'categories_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
   __typename?: 'categories_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
   __typename?: 'categories_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
  id?: Maybe<Order_By>,
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>,
  _gt?: Maybe<Scalars['float8']>,
  _gte?: Maybe<Scalars['float8']>,
  _in?: Maybe<Array<Scalars['float8']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['float8']>,
  _lte?: Maybe<Scalars['float8']>,
  _neq?: Maybe<Scalars['float8']>,
  _nin?: Maybe<Array<Scalars['float8']>>,
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

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>,
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>,
  /** delete data from the table: "proposals" */
  delete_proposals?: Maybe<Proposals_Mutation_Response>,
  /** delete data from the table: "replies" */
  delete_replies?: Maybe<Replies_Mutation_Response>,
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>,
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>,
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>,
  /** insert data into the table: "proposals" */
  insert_proposals?: Maybe<Proposals_Mutation_Response>,
  /** insert data into the table: "replies" */
  insert_replies?: Maybe<Replies_Mutation_Response>,
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>,
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>,
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>,
  /** update data of the table: "proposals" */
  update_proposals?: Maybe<Proposals_Mutation_Response>,
  /** update data of the table: "replies" */
  update_replies?: Maybe<Replies_Mutation_Response>,
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_ProposalsArgs = {
  where: Proposals_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_RepliesArgs = {
  where: Replies_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>,
  on_conflict?: Maybe<Categories_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>,
  on_conflict?: Maybe<Posts_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_ProposalsArgs = {
  objects: Array<Proposals_Insert_Input>,
  on_conflict?: Maybe<Proposals_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_RepliesArgs = {
  objects: Array<Replies_Insert_Input>,
  on_conflict?: Maybe<Replies_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>,
  _set?: Maybe<Categories_Set_Input>,
  where: Categories_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>,
  _set?: Maybe<Posts_Set_Input>,
  where: Posts_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_ProposalsArgs = {
  _inc?: Maybe<Proposals_Inc_Input>,
  _set?: Maybe<Proposals_Set_Input>,
  where: Proposals_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_RepliesArgs = {
  _inc?: Maybe<Replies_Inc_Input>,
  _set?: Maybe<Replies_Set_Input>,
  where: Replies_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>,
  _set?: Maybe<Users_Set_Input>,
  where: Users_Bool_Exp
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

/** columns and relationships of "posts" */
export type Posts = {
   __typename?: 'posts',
  /** An object relationship */
  author: Users,
  author_id: Scalars['Int'],
  /** An object relationship */
  category: Categories,
  category_id: Scalars['Int'],
  content?: Maybe<Scalars['String']>,
  creation_date: Scalars['timestamp'],
  id: Scalars['Int'],
  modification_date: Scalars['time'],
  /** An object relationship */
  proposal?: Maybe<Proposals>,
  /** An array relationship */
  replies: Array<Replies>,
  /** An aggregated array relationship */
  replies_aggregate: Replies_Aggregate,
  title: Scalars['String'],
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
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>,
  _not?: Maybe<Posts_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>,
  author?: Maybe<Users_Bool_Exp>,
  author_id?: Maybe<Int_Comparison_Exp>,
  category?: Maybe<Categories_Bool_Exp>,
  category_id?: Maybe<Int_Comparison_Exp>,
  content?: Maybe<String_Comparison_Exp>,
  creation_date?: Maybe<Timestamp_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  modification_date?: Maybe<Time_Comparison_Exp>,
  proposal?: Maybe<Proposals_Bool_Exp>,
  replies?: Maybe<Replies_Bool_Exp>,
  title?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing integer columne in table "posts" */
export type Posts_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>,
  category_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>,
  author_id?: Maybe<Scalars['Int']>,
  category?: Maybe<Categories_Obj_Rel_Insert_Input>,
  category_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  creation_date?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  modification_date?: Maybe<Scalars['time']>,
  proposal?: Maybe<Proposals_Obj_Rel_Insert_Input>,
  replies?: Maybe<Replies_Arr_Rel_Insert_Input>,
  title?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
   __typename?: 'posts_max_fields',
  author_id?: Maybe<Scalars['Int']>,
  category_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
   __typename?: 'posts_min_fields',
  author_id?: Maybe<Scalars['Int']>,
  category_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
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
  author?: Maybe<Users_Order_By>,
  author_id?: Maybe<Order_By>,
  category?: Maybe<Categories_Order_By>,
  category_id?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  creation_date?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  modification_date?: Maybe<Order_By>,
  proposal?: Maybe<Proposals_Order_By>,
  replies_aggregate?: Maybe<Replies_Aggregate_Order_By>,
  title?: Maybe<Order_By>,
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreationDate = 'creation_date',
  /** column name */
  Id = 'id',
  /** column name */
  ModificationDate = 'modification_date',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['Int']>,
  category_id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  creation_date?: Maybe<Scalars['timestamp']>,
  id?: Maybe<Scalars['Int']>,
  modification_date?: Maybe<Scalars['time']>,
  title?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
   __typename?: 'posts_stddev_fields',
  author_id?: Maybe<Scalars['Float']>,
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
   __typename?: 'posts_stddev_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
   __typename?: 'posts_stddev_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
   __typename?: 'posts_sum_fields',
  author_id?: Maybe<Scalars['Int']>,
  category_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreationDate = 'creation_date',
  /** column name */
  Id = 'id',
  /** column name */
  ModificationDate = 'modification_date',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
   __typename?: 'posts_var_pop_fields',
  author_id?: Maybe<Scalars['Float']>,
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
   __typename?: 'posts_var_samp_fields',
  author_id?: Maybe<Scalars['Float']>,
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
   __typename?: 'posts_variance_fields',
  author_id?: Maybe<Scalars['Float']>,
  category_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  author_id?: Maybe<Order_By>,
  category_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** 
 * on chain proposal or referendum
 * 
 * 
 * columns and relationships of "proposals"
 **/
export type Proposals = {
   __typename?: 'proposals',
  created_at: Scalars['timestamptz'],
  deposit: Scalars['float8'],
  id: Scalars['Int'],
  method_arguments?: Maybe<Scalars['String']>,
  method_name: Scalars['String'],
  onchain_id: Scalars['Int'],
  /** An object relationship */
  post: Posts,
  post_id: Scalars['Int'],
  referendum: Scalars['Boolean'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "proposals" */
export type Proposals_Aggregate = {
   __typename?: 'proposals_aggregate',
  aggregate?: Maybe<Proposals_Aggregate_Fields>,
  nodes: Array<Proposals>,
};

/** aggregate fields of "proposals" */
export type Proposals_Aggregate_Fields = {
   __typename?: 'proposals_aggregate_fields',
  avg?: Maybe<Proposals_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Proposals_Max_Fields>,
  min?: Maybe<Proposals_Min_Fields>,
  stddev?: Maybe<Proposals_Stddev_Fields>,
  stddev_pop?: Maybe<Proposals_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Proposals_Stddev_Samp_Fields>,
  sum?: Maybe<Proposals_Sum_Fields>,
  var_pop?: Maybe<Proposals_Var_Pop_Fields>,
  var_samp?: Maybe<Proposals_Var_Samp_Fields>,
  variance?: Maybe<Proposals_Variance_Fields>,
};


/** aggregate fields of "proposals" */
export type Proposals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposals_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "proposals" */
export type Proposals_Aggregate_Order_By = {
  avg?: Maybe<Proposals_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Proposals_Max_Order_By>,
  min?: Maybe<Proposals_Min_Order_By>,
  stddev?: Maybe<Proposals_Stddev_Order_By>,
  stddev_pop?: Maybe<Proposals_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Proposals_Stddev_Samp_Order_By>,
  sum?: Maybe<Proposals_Sum_Order_By>,
  var_pop?: Maybe<Proposals_Var_Pop_Order_By>,
  var_samp?: Maybe<Proposals_Var_Samp_Order_By>,
  variance?: Maybe<Proposals_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "proposals" */
export type Proposals_Arr_Rel_Insert_Input = {
  data: Array<Proposals_Insert_Input>,
  on_conflict?: Maybe<Proposals_On_Conflict>,
};

/** aggregate avg on columns */
export type Proposals_Avg_Fields = {
   __typename?: 'proposals_avg_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "proposals" */
export type Proposals_Avg_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "proposals". All fields are combined with a logical 'AND'. */
export type Proposals_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proposals_Bool_Exp>>>,
  _not?: Maybe<Proposals_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Proposals_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  deposit?: Maybe<Float8_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  method_arguments?: Maybe<String_Comparison_Exp>,
  method_name?: Maybe<String_Comparison_Exp>,
  onchain_id?: Maybe<Int_Comparison_Exp>,
  post?: Maybe<Posts_Bool_Exp>,
  post_id?: Maybe<Int_Comparison_Exp>,
  referendum?: Maybe<Boolean_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "proposals" */
export enum Proposals_Constraint {
  /** unique or primary key constraint */
  ProposalsOnchainIdKey = 'proposals_onchain_id_key',
  /** unique or primary key constraint */
  ProposalsPkey = 'proposals_pkey',
  /** unique or primary key constraint */
  ProposalsPostIdKey = 'proposals_post_id_key'
}

/** input type for incrementing integer columne in table "proposals" */
export type Proposals_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  onchain_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "proposals" */
export type Proposals_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  deposit?: Maybe<Scalars['float8']>,
  id?: Maybe<Scalars['Int']>,
  method_arguments?: Maybe<Scalars['String']>,
  method_name?: Maybe<Scalars['String']>,
  onchain_id?: Maybe<Scalars['Int']>,
  post?: Maybe<Posts_Obj_Rel_Insert_Input>,
  post_id?: Maybe<Scalars['Int']>,
  referendum?: Maybe<Scalars['Boolean']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Proposals_Max_Fields = {
   __typename?: 'proposals_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  deposit?: Maybe<Scalars['float8']>,
  id?: Maybe<Scalars['Int']>,
  method_arguments?: Maybe<Scalars['String']>,
  method_name?: Maybe<Scalars['String']>,
  onchain_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "proposals" */
export type Proposals_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  method_arguments?: Maybe<Order_By>,
  method_name?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Proposals_Min_Fields = {
   __typename?: 'proposals_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  deposit?: Maybe<Scalars['float8']>,
  id?: Maybe<Scalars['Int']>,
  method_arguments?: Maybe<Scalars['String']>,
  method_name?: Maybe<Scalars['String']>,
  onchain_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "proposals" */
export type Proposals_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  method_arguments?: Maybe<Order_By>,
  method_name?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "proposals" */
export type Proposals_Mutation_Response = {
   __typename?: 'proposals_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Proposals>,
};

/** input type for inserting object relation for remote table "proposals" */
export type Proposals_Obj_Rel_Insert_Input = {
  data: Proposals_Insert_Input,
  on_conflict?: Maybe<Proposals_On_Conflict>,
};

/** on conflict condition type for table "proposals" */
export type Proposals_On_Conflict = {
  constraint: Proposals_Constraint,
  update_columns: Array<Proposals_Update_Column>,
  where?: Maybe<Proposals_Bool_Exp>,
};

/** ordering options when selecting data from "proposals" */
export type Proposals_Order_By = {
  created_at?: Maybe<Order_By>,
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  method_arguments?: Maybe<Order_By>,
  method_name?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post?: Maybe<Posts_Order_By>,
  post_id?: Maybe<Order_By>,
  referendum?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "proposals" */
export enum Proposals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  Id = 'id',
  /** column name */
  MethodArguments = 'method_arguments',
  /** column name */
  MethodName = 'method_name',
  /** column name */
  OnchainId = 'onchain_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Referendum = 'referendum',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "proposals" */
export type Proposals_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  deposit?: Maybe<Scalars['float8']>,
  id?: Maybe<Scalars['Int']>,
  method_arguments?: Maybe<Scalars['String']>,
  method_name?: Maybe<Scalars['String']>,
  onchain_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
  referendum?: Maybe<Scalars['Boolean']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type Proposals_Stddev_Fields = {
   __typename?: 'proposals_stddev_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "proposals" */
export type Proposals_Stddev_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Proposals_Stddev_Pop_Fields = {
   __typename?: 'proposals_stddev_pop_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "proposals" */
export type Proposals_Stddev_Pop_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Proposals_Stddev_Samp_Fields = {
   __typename?: 'proposals_stddev_samp_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "proposals" */
export type Proposals_Stddev_Samp_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Proposals_Sum_Fields = {
   __typename?: 'proposals_sum_fields',
  deposit?: Maybe<Scalars['float8']>,
  id?: Maybe<Scalars['Int']>,
  onchain_id?: Maybe<Scalars['Int']>,
  post_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "proposals" */
export type Proposals_Sum_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** update columns of table "proposals" */
export enum Proposals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  Id = 'id',
  /** column name */
  MethodArguments = 'method_arguments',
  /** column name */
  MethodName = 'method_name',
  /** column name */
  OnchainId = 'onchain_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Referendum = 'referendum',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Proposals_Var_Pop_Fields = {
   __typename?: 'proposals_var_pop_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "proposals" */
export type Proposals_Var_Pop_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Proposals_Var_Samp_Fields = {
   __typename?: 'proposals_var_samp_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "proposals" */
export type Proposals_Var_Samp_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Proposals_Variance_Fields = {
   __typename?: 'proposals_variance_fields',
  deposit?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  onchain_id?: Maybe<Scalars['Float']>,
  post_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "proposals" */
export type Proposals_Variance_Order_By = {
  deposit?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  onchain_id?: Maybe<Order_By>,
  post_id?: Maybe<Order_By>,
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "categories" */
  categories: Array<Categories>,
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate,
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>,
  /** fetch data from the table: "posts" */
  posts: Array<Posts>,
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate,
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>,
  /** fetch data from the table: "proposals" */
  proposals: Array<Proposals>,
  /** fetch aggregated fields from the table: "proposals" */
  proposals_aggregate: Proposals_Aggregate,
  /** fetch data from the table: "proposals" using primary key columns */
  proposals_by_pk?: Maybe<Proposals>,
  /** fetch data from the table: "replies" */
  replies: Array<Replies>,
  /** fetch aggregated fields from the table: "replies" */
  replies_aggregate: Replies_Aggregate,
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Categories_Order_By>>,
  where?: Maybe<Categories_Bool_Exp>
};


/** query root */
export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Categories_Order_By>>,
  where?: Maybe<Categories_Bool_Exp>
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
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
export type Query_RootProposalsArgs = {
  distinct_on?: Maybe<Array<Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Proposals_Order_By>>,
  where?: Maybe<Proposals_Bool_Exp>
};


/** query root */
export type Query_RootProposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Proposals_Order_By>>,
  where?: Maybe<Proposals_Bool_Exp>
};


/** query root */
export type Query_RootProposals_By_PkArgs = {
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
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
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
  /** An object relationship */
  author?: Maybe<Users>,
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
  author?: Maybe<Users_Bool_Exp>,
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
  author?: Maybe<Users_Obj_Rel_Insert_Input>,
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
  author?: Maybe<Users_Order_By>,
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
  /** fetch data from the table: "categories" */
  categories: Array<Categories>,
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate,
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>,
  /** fetch data from the table: "posts" */
  posts: Array<Posts>,
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate,
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>,
  /** fetch data from the table: "proposals" */
  proposals: Array<Proposals>,
  /** fetch aggregated fields from the table: "proposals" */
  proposals_aggregate: Proposals_Aggregate,
  /** fetch data from the table: "proposals" using primary key columns */
  proposals_by_pk?: Maybe<Proposals>,
  /** fetch data from the table: "replies" */
  replies: Array<Replies>,
  /** fetch aggregated fields from the table: "replies" */
  replies_aggregate: Replies_Aggregate,
  /** fetch data from the table: "replies" using primary key columns */
  replies_by_pk?: Maybe<Replies>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Categories_Order_By>>,
  where?: Maybe<Categories_Bool_Exp>
};


/** subscription root */
export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Categories_Order_By>>,
  where?: Maybe<Categories_Bool_Exp>
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
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
export type Subscription_RootProposalsArgs = {
  distinct_on?: Maybe<Array<Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Proposals_Order_By>>,
  where?: Maybe<Proposals_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposals_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Proposals_Order_By>>,
  where?: Maybe<Proposals_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProposals_By_PkArgs = {
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
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
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

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users',
  created_at: Scalars['timestamp'],
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  picture?: Maybe<Scalars['String']>,
  /** An array relationship */
  replies: Array<Replies>,
  /** An aggregated array relationship */
  replies_aggregate: Replies_Aggregate,
  /** An array relationship */
  user_posts: Array<Posts>,
  /** An aggregated array relationship */
  user_posts_aggregate: Posts_Aggregate,
  username: Scalars['String'],
};


/** columns and relationships of "users" */
export type UsersRepliesArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** columns and relationships of "users" */
export type UsersReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Replies_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Replies_Order_By>>,
  where?: Maybe<Replies_Bool_Exp>
};


/** columns and relationships of "users" */
export type UsersUser_PostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};


/** columns and relationships of "users" */
export type UsersUser_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate',
  aggregate?: Maybe<Users_Aggregate_Fields>,
  nodes: Array<Users>,
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields',
  avg?: Maybe<Users_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Users_Max_Fields>,
  min?: Maybe<Users_Min_Fields>,
  stddev?: Maybe<Users_Stddev_Fields>,
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>,
  sum?: Maybe<Users_Sum_Fields>,
  var_pop?: Maybe<Users_Var_Pop_Fields>,
  var_samp?: Maybe<Users_Var_Samp_Fields>,
  variance?: Maybe<Users_Variance_Fields>,
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Users_Max_Order_By>,
  min?: Maybe<Users_Min_Order_By>,
  stddev?: Maybe<Users_Stddev_Order_By>,
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>,
  sum?: Maybe<Users_Sum_Order_By>,
  var_pop?: Maybe<Users_Var_Pop_Order_By>,
  var_samp?: Maybe<Users_Var_Samp_Order_By>,
  variance?: Maybe<Users_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>,
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
   __typename?: 'users_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  _not?: Maybe<Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  created_at?: Maybe<Timestamp_Comparison_Exp>,
  email?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  picture?: Maybe<String_Comparison_Exp>,
  replies?: Maybe<Replies_Bool_Exp>,
  user_posts?: Maybe<Posts_Bool_Exp>,
  username?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey1 = 'users_pkey1'
}

/** input type for incrementing integer columne in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  picture?: Maybe<Scalars['String']>,
  replies?: Maybe<Replies_Arr_Rel_Insert_Input>,
  user_posts?: Maybe<Posts_Arr_Rel_Insert_Input>,
  username?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields',
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  picture?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  picture?: Maybe<Order_By>,
  username?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields',
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  picture?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  picture?: Maybe<Order_By>,
  username?: Maybe<Order_By>,
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Users>,
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input,
  on_conflict?: Maybe<Users_On_Conflict>,
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint,
  update_columns: Array<Users_Update_Column>,
  where?: Maybe<Users_Bool_Exp>,
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  picture?: Maybe<Order_By>,
  replies_aggregate?: Maybe<Replies_Aggregate_Order_By>,
  user_posts_aggregate?: Maybe<Posts_Aggregate_Order_By>,
  username?: Maybe<Order_By>,
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Picture = 'picture',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  picture?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
   __typename?: 'users_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
   __typename?: 'users_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
   __typename?: 'users_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
   __typename?: 'users_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Picture = 'picture',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
   __typename?: 'users_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
   __typename?: 'users_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
   __typename?: 'users_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

export type UserFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'username' | 'picture'>
);

export type LatestPostsQueryVariables = {};


export type LatestPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'creation_date' | 'modification_date'>
    & { author: (
      { __typename?: 'users' }
      & Pick<Users, 'username'>
    ) }
  )> }
);

export type PostAndRepliesQueryVariables = {
  id: Scalars['Int']
};


export type PostAndRepliesQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'content' | 'creation_date' | 'title'>
    & { author: (
      { __typename?: 'users' }
      & Pick<Users, 'username'>
    ), category: (
      { __typename?: 'categories' }
      & Pick<Categories, 'name'>
    ), replies: Array<(
      { __typename?: 'replies' }
      & Pick<Replies, 'content' | 'created_at'>
      & { author: Maybe<(
        { __typename?: 'users' }
        & Pick<Users, 'username'>
      )> }
    )> }
  )> }
);

export const UserFragmentDoc = gql`
    fragment user on users {
  id
  username
  picture
}
    `;
export const LatestPostsDocument = gql`
    query LatestPosts {
  posts {
    id
    title
    author {
      username
    }
    creation_date
    modification_date
  }
}
    `;
export type LatestPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LatestPostsQuery, LatestPostsQueryVariables>, 'query'>;

    export const LatestPostsComponent = (props: LatestPostsComponentProps) => (
      <ApolloReactComponents.Query<LatestPostsQuery, LatestPostsQueryVariables> query={LatestPostsDocument} {...props} />
    );
    
export type LatestPostsProps<TChildProps = {}> = ApolloReactHoc.DataProps<LatestPostsQuery, LatestPostsQueryVariables> & TChildProps;
export function withLatestPosts<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LatestPostsQuery,
  LatestPostsQueryVariables,
  LatestPostsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LatestPostsQuery, LatestPostsQueryVariables, LatestPostsProps<TChildProps>>(LatestPostsDocument, {
      alias: 'latestPosts',
      ...operationOptions
    });
};

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
    content
    creation_date
    title
    author {
      username
    }
    category {
      name
    }
    replies(order_by: {created_at: asc}) {
      content
      created_at
      author {
        username
      }
    }
  }
}
    `;
export type PostAndRepliesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostAndRepliesQuery, PostAndRepliesQueryVariables>, 'query'> & ({ variables: PostAndRepliesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostAndRepliesComponent = (props: PostAndRepliesComponentProps) => (
      <ApolloReactComponents.Query<PostAndRepliesQuery, PostAndRepliesQueryVariables> query={PostAndRepliesDocument} {...props} />
    );
    
export type PostAndRepliesProps<TChildProps = {}> = ApolloReactHoc.DataProps<PostAndRepliesQuery, PostAndRepliesQueryVariables> & TChildProps;
export function withPostAndReplies<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostAndRepliesQuery,
  PostAndRepliesQueryVariables,
  PostAndRepliesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PostAndRepliesQuery, PostAndRepliesQueryVariables, PostAndRepliesProps<TChildProps>>(PostAndRepliesDocument, {
      alias: 'postAndReplies',
      ...operationOptions
    });
};

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