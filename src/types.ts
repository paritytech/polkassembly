import { Dispatch, SetStateAction } from 'react';

export interface LoginObjectType {
    username: String
    password: String
}

export interface SignupObjectType extends LoginObjectType {
    email: String
}

export interface UserDetailsContextType {
    id?: Number | null,
    picture?: String | null,
    username?: String | null,
    setUserDetailsContextState: Dispatch<SetStateAction<UserDetailsContextType>>;
}

export enum Role {
    'user',
    'anonymous',
    'admin'
}

export interface HasuraClaimPayload {
    "x-hasura-allowed-roles": Array<Role>
    "x-hasura-user-id": Number
    "x-hasura-default-role": Role
    "x-hasura-role": String
}

export interface JWTPayploadType {
    sub: Number
    name: String
    iat: String //rather a date
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}