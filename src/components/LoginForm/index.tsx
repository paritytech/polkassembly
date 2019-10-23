import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControlProps } from 'react-bootstrap';
// import SignIn from '../../services/auth.service';

const LoginForm : React.FC = () => {
    const [username, setUsername] = useState<String | undefined>('');
    const [password, setPassword] = useState<String | undefined>('');

    const onUserNameChange = (event: React.FormEvent<FormControlProps>) => setUsername(event.currentTarget.value);
    const onPasswordChange = (event: React.FormEvent<FormControlProps>) => setPassword(event.currentTarget.value);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        event.preventDefault();
        event.stopPropagation();
        console.log('username',username,'password',password);
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
                Submit
            </Button>
        </Form>
    )
};

export default LoginForm;