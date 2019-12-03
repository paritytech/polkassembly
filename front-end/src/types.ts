import { Dispatch, SetStateAction } from 'react';
import { SignupMutationResult, LoginResponse } from './generated/auth-graphql';

export interface LoginObjectType {
    username: string
    password: string
}

export interface SignupObjectType extends LoginObjectType {
    email: string
}

/* Example:
*
* token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0IiwibmFtZSI6IkpvaG5ueXNzcyIsImlhdCI6MTU3MjIxNzk3OC42MzgsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLXVzZXItaWQiOiI0IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn19.vmiOKzCCJ1v_TeVH-YZRxd6TRKW7RonOBOSRVSX7xjU"
* user: {
*   email: "Johnnysss"
*   id: 4
*   username: "Johnnysss"
* }
*/

// export interface SignupResponseObjectType {
//     token: string
//     user: SignupUserObjectType
// }

// Fixme, this should never be null.
// export interface SignupUserObjectType {
//     id?: number | null
//     username?: string | null
// }

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
    iat: string //rather a date
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}