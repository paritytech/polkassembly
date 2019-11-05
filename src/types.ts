import { Dispatch, SetStateAction } from 'react';

export interface LoginObjectType {
    username: String
    password: String
}

export interface SignupObjectType extends LoginObjectType {
    email: String
}

/* Example:
*
* token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0IiwibmFtZSI6IkpvaG5ueXNzcyIsImlhdCI6MTU3MjIxNzk3OC42MzgsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLXVzZXItaWQiOiI0IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn19.vmiOKzCCJ1v_TeVH-YZRxd6TRKW7RonOBOSRVSX7xjU"​
* user: {
*    email: "Johnnysss"
*    ​​id: 4
*    username: "Johnnysss"
* }
*/

export interface SignupResponseObjectType {
    token: string
    user: SignupUserObjectType
}

export interface SignupUserObjectType extends LoginObjectType {
    id: number
    email: string
    username: string
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
    'x-hasura-allowed-roles': Array<Role>
    'x-hasura-user-id': Number
    'x-hasura-default-role': Role
    'x-hasura-role': String
}

export interface JWTPayploadType {
    sub: Number
    name: String
    iat: String //rather a date
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}