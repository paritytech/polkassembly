import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import { UserDetailsContext } from '../../context/UserDetailsContext'
import { UserDetailsContextType } from '../../types'

const Login: React.FC = () => {
    const { id, username, setUserDetailsContextState } = useContext(UserDetailsContext)
    const handleClick = () => {
        setUserDetailsContextState && setUserDetailsContextState({ id:12, username:'blabla' })
    }
    const handleClickUserName = () => {
        setUserDetailsContextState && setUserDetailsContextState((prevState:UserDetailsContextType)=>{return { ...prevState, username:'new username' }})
    }
       return (
        <>
            <Nav.Link onClick={handleClick}>set12</Nav.Link>
            <Nav.Link onClick={handleClickUserName}>setUserName</Nav.Link>
            <Nav.Link>Login - {id} - {username}</Nav.Link>
        </>
    );
}

export default Login;