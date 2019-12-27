import { Request, Response } from 'express'

interface FileType {
    path: string
}

export interface FileRequestType extends Request {
    UserId: string
    file: FileType
}

export interface UserObjectType {
    id: number
    email: string
    username: string
    name: string
    email_verified: boolean
}

export interface SignUpResultType {
    user: UserObjectType,
    token: string
}

export interface AuthObjectType {
    user: UserObjectType
    token: string
    refreshToken: string
}

export interface Context {
    req: Request
    res: Response
}

export enum Role {
    ANOONYMOUS = 'anonymous',
    ADMIN = 'admin',
    PROPOSAL_BOT = 'proposal_bot',
    USER = 'user',
}

// these are enforced by Hasura
export interface HasuraClaimPayload {
    'x-hasura-allowed-roles': Array<Role>
    'x-hasura-default-role': Role
    'x-hasura-user-email': string
    'x-hasura-user-id': string
}

export interface JWTPayploadType {
    sub: string
    name: string
    username: string,
    email: string
    iat: number
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}