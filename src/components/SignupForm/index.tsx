import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControlProps } from 'react-bootstrap';
import { signUp, storeAuthHeader } from '../../services/auth.service';
import { SignupResponseObjectType } from '../../types';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import {RouteComponentProps, withRouter} from "react-router-dom";

const SignupForm = (props: RouteComponentProps): JSX.Element => {
    const [email, setEmail] = useState<String | undefined>('');
    const [username, setUsername] = useState<String | undefined>('');
    const [password, setPassword] = useState<String | undefined>('');
    const currentUser = useContext(UserDetailsContext)
    
    const onEmailChange = (event: React.FormEvent<FormControlProps>) => setEmail(event.currentTarget.value);
    const onUserNameChange = (event: React.FormEvent<FormControlProps>) => setUsername(event.currentTarget.value);
    const onPasswordChange = (event: React.FormEvent<FormControlProps>) => setPassword(event.currentTarget.value);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        event.preventDefault();
        event.stopPropagation();
        if (username && email && password){
            const response = signUp({ username, email ,password })
            response
                .then((data) => data.json())
                .then((data) => {
                    handleNewUser(data);
                    // redirect to the home
                    props.history.push('/');
                })
        }
    }

    const handleNewUser = ({user, token}: SignupResponseObjectType) => {
        storeAuthHeader(token);
        currentUser.setUserDetailsContextState((prevState) => {
            return {
                ...prevState,
                id: user.id,
                username: user.username
            }  
        })       
    }

    return (
        <Form>
            <Form.Group controlId="formSignIn">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    onChange={onUserNameChange}
                    placeholder="John"
                    type="text"
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={onEmailChange}
                    placeholder="john@doe.com"
                    type="email"
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSignInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={onPasswordChange}
                    placeholder="Password"
                    type="password"
                />
            </Form.Group>
            <Button
                onClick={handleClick}
                type="submit"
                variant="primary"
            >
                Sign-up
            </Button>
        </Form>
    )
};

export default withRouter(SignupForm);