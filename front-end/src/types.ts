import { Dispatch, SetStateAction } from 'react';

export interface UserDetailsContextType {
    id?: number | null,
    picture?: string | null,
    username?: string | null,
    setUserDetailsContextState: Dispatch<SetStateAction<UserDetailsContextType>>;
}

export enum Role {
    ANOONYMOUS = 'anonymous',
    ADMIN = 'admin',
    PROPOSAL_BOT = 'proposal_bot',
    USER = 'user',
}

export interface HasuraClaimPayload {
    'x-hasura-allowed-roles': Array<Role>
    'x-hasura-default-role': Role
    'x-hasura-user-email': string
    'x-hasura-user-id': number
}

export interface JWTPayploadType {
    exp: number
    sub: number
    name: string
    iat: number
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}