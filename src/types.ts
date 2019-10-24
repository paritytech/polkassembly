import { Dispatch, SetStateAction } from 'react';

export interface LoginObjectType {
    username: String
    password: String
}

export interface SignupObjectType extends LoginObjectType {
    email: String
}

export interface UserDetailsContextType {
    id?: Number | null,
    picture?: String | null,
    username?: String | null,
    setUserDetailsContextState?: Dispatch<SetStateAction<UserDetailsContextType>>;
}