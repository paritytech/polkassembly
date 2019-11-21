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