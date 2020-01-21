import { Request, Response } from 'express';

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

export interface TokenType {
    token: string
}

export interface SignUpResultType extends TokenType {
    user: UserObjectType
}

export interface AuthObjectType extends TokenType {
    user: UserObjectType
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
    email_verified: boolean
    iat: number
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}

export interface MessageType {
    message: string
}

export interface ChangeResponseType extends MessageType, TokenType {}

export interface PublicUser {
    id: number
    name: string
    username: string
}

export interface Subscription {
    subscribed: boolean
}

export interface AddressType {
    address: string
    public_key: string
    name: string
    source: string
}

export interface AddressLinkStartType extends MessageType {
    address_id: number
    sign_message: string
}

export interface UndoEmailChangeResponseType extends ChangeResponseType {
    email: string
}
