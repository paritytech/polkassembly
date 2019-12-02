import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type LoginResponse = {
   __typename?: 'LoginResponse',
  user?: Maybe<User>,
  token?: Maybe<Scalars['String']>,
};

export type Message = {
   __typename?: 'Message',
  message?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login?: Maybe<LoginResponse>,
  logout?: Maybe<Message>,
  signup?: Maybe<LoginResponse>,
  changeEmail?: Maybe<Message>,
  changePassword?: Maybe<Message>,
  changeName?: Maybe<Message>,
};


export type MutationLoginArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  username: Scalars['String'],
  name?: Maybe<Scalars['String']>
};


export type MutationChangeEmailArgs = {
  email: Scalars['String']
};


export type MutationChangePasswordArgs = {
  oldPassword: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationChangeNameArgs = {
  newName: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
  token?: Maybe<Token>,
};


export type QueryUserArgs = {
  id: Scalars['Int']
};

export type Token = {
   __typename?: 'Token',
  token?: Maybe<Scalars['String']>,
};


export type User = {
   __typename?: 'User',
  id?: Maybe<Scalars['Int']>,
  username?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  email_verified?: Maybe<Scalars['String']>,
};


