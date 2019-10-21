export interface LoginObjectType {
    username: String
    password: String
}

export interface ContextUserDetailsType {
    id?: Number | null,
    picture?: String | null,
    username?: String | null,
    setUserDetails?: (contextUserDetails:ContextUserDetailsType) => void
}