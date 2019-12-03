import { Dispatch, SetStateAction } from 'react';

export interface UserDetailsContextType {
    id?: number | null,
    picture?: string | null,
    username?: string | null,
    setUserDetailsContextState: Dispatch<SetStateAction<UserDetailsContextType>>;
}

export enum Role {
    'user',
    'anonymous',
    'admin'
}

export interface HasuraClaimPayload {
    'x-hasura-allowed-roles': Array<Role>
    'x-hasura-user-id': number
    'x-hasura-default-role': Role
    'x-hasura-role': string
}

export interface JWTPayploadType {
    exp: number
    sub: number
    name: string
    iat: Date
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}