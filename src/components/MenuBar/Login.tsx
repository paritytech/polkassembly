import React, { useContext } from 'react'
import {UserDetailsContext} from '../../util/UserDetailsProvider'
import { UserDetailsContextType } from '../../types'
// import { LatestPostsQuery } from '../../generated/graphql';

const Login: React.FC = () => {
    const { id, username, setUserDetailsContextState } = useContext(UserDetailsContext)
    const handleClick = () => {
        setUserDetailsContextState && setUserDetailsContextState({id:12, username:'blabla'})
    }
    const handleClickUserName = () => {
        setUserDetailsContextState && setUserDetailsContextState((prevState:UserDetailsContextType)=>{return {...prevState, username:'new username'}})
    }
       return (
        <>
            <div onClick={handleClick}>set12</div>
            <div onClick={handleClickUserName}>setUserName</div>
            <div>Login - {id} - {username}</div>
        </>
);
}
 

export default Login;