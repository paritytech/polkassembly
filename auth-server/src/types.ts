import { Request } from 'express'

interface FileType {
    path: string
}

export interface FileRequestType extends Request {
    UserId: string
    file: FileType
}

export interface UserObjectType {
    email: string
    username: string
    name: string
}

export interface AuthObjectType {
    user: UserObjectType
    token: string
    refreshToken: string
}