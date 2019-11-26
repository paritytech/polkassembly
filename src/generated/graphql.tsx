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
};


/** columns and relationships of "categories" */
export type CategoriesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Posts_Order_By>>,
  where?: Maybe<Posts_Bool_Exp>
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

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


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

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "categories" */
  categories: Array<Categories>,
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>,
  /** fetch data from the table: "posts" */
  posts: Array<Posts>,
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>,
  /** fetch data from the table: "proposals" */
  proposals: Array<Proposals>,
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
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>,
  /** fetch data from the table: "posts" */
  posts: Array<Posts>,
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>,
  /** fetch data from the table: "proposals" */
  proposals: Array<Proposals>,
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
  id: Scalars['Int'],
  picture?: Maybe<Scalars['String']>,
  /** An array relationship */
  replies: Array<Replies>,
  /** An aggregated array relationship */
  replies_aggregate: Replies_Aggregate,
  /** An array relationship */
  user_posts: Array<Posts>,
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

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  _not?: Maybe<Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  created_at?: Maybe<Timestamp_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  picture?: Maybe<String_Comparison_Exp>,
  replies?: Maybe<Replies_Bool_Exp>,
  user_posts?: Maybe<Posts_Bool_Exp>,
  username?: Maybe<String_Comparison_Exp>,
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  picture?: Maybe<Order_By>,
  replies_aggregate?: Maybe<Replies_Aggregate_Order_By>,
  username?: Maybe<Order_By>,
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Picture = 'picture',
  /** column name */
  Username = 'username'
}

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
    ), replies_aggregate: (
      { __typename?: 'replies_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'replies_aggregate_fields' }
        & Pick<Replies_Aggregate_Fields, 'count'>
      )> }
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
    replies_aggregate {
      aggregate {
        count
      }
    }
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