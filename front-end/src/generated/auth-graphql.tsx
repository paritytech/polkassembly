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
  Upload: any,
};


export type Address = {
   __typename?: 'Address',
  address?: Maybe<Scalars['String']>,
  public_key?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
};

export type AddressLinkType = {
   __typename?: 'AddressLinkType',
  sign_message?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  address_id?: Maybe<Scalars['Int']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ChangeResponse = {
   __typename?: 'ChangeResponse',
  message?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

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
  addressLinkConfirm?: Maybe<Message>,
  addressLinkStart?: Maybe<AddressLinkType>,
  addressUnlink?: Maybe<Message>,
  changeUsername?: Maybe<ChangeResponse>,
  changeEmail?: Maybe<ChangeResponse>,
  changePassword?: Maybe<Message>,
  changeName?: Maybe<ChangeResponse>,
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
  network: Scalars['String'],
  address: Scalars['String']
};


export type MutationAddressUnlinkArgs = {
  address: Scalars['String']
};


export type MutationChangeUsernameArgs = {
  username: Scalars['String']
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


export type MutationLoginArgs = {
  username: Scalars['String'],
  password: Scalars['String']
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
  token: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  username: Scalars['String'],
  name?: Maybe<Scalars['String']>
};


export type MutationUndoEmailChangeArgs = {
  token: Scalars['String']
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  addresses?: Maybe<Array<Maybe<Address>>>,
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

export type Subscription = {
   __typename?: 'Subscription',
  subscribed?: Maybe<Scalars['Boolean']>,
};

export type Token = {
   __typename?: 'Token',
  token?: Maybe<Scalars['String']>,
};

export type UndoEmailChangeResponse = {
   __typename?: 'UndoEmailChangeResponse',
  message?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};


export type User = {
   __typename?: 'User',
  id?: Maybe<Scalars['Int']>,
  username?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_verified?: Maybe<Scalars['Boolean']>,
};

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'username' | 'email' | 'email_verified'>
);

export type SignupMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  username: Scalars['String'],
  name?: Maybe<Scalars['String']>
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  )> }
);

export type LoginMutationVariables = {
  password: Scalars['String'],
  username: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  )> }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'message'>
  )> }
);

export type Get_Refresh_TokenQueryVariables = {};


export type Get_Refresh_TokenQuery = (
  { __typename?: 'Query' }
  & { token: Maybe<(
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  )> }
);

export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  username
  email
  email_verified
}
    `;
export const SignupDocument = gql`
    mutation SIGNUP($email: String!, $password: String!, $username: String!, $name: String) {
  signup(email: $email, password: $password, username: $username, name: $name) {
    user {
      ...user
    }
    token
  }
}
    ${UserFragmentDoc}`;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation LOGIN($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    user {
      ...user
    }
    token
  }
}
    ${UserFragmentDoc}`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation LOGOUT {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const Get_Refresh_TokenDocument = gql`
    query GET_REFRESH_TOKEN {
  token {
    token
  }
}
    `;

/**
 * __useGet_Refresh_TokenQuery__
 *
 * To run a query within a React component, call `useGet_Refresh_TokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Refresh_TokenQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Refresh_TokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Refresh_TokenQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>) {
        return ApolloReactHooks.useQuery<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>(Get_Refresh_TokenDocument, baseOptions);
      }
export function useGet_Refresh_TokenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>(Get_Refresh_TokenDocument, baseOptions);
        }
export type Get_Refresh_TokenQueryHookResult = ReturnType<typeof useGet_Refresh_TokenQuery>;
export type Get_Refresh_TokenLazyQueryHookResult = ReturnType<typeof useGet_Refresh_TokenLazyQuery>;
export type Get_Refresh_TokenQueryResult = ApolloReactCommon.QueryResult<Get_Refresh_TokenQuery, Get_Refresh_TokenQueryVariables>;