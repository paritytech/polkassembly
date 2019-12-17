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