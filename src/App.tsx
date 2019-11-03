import React from 'react';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserDetailsProvider } from './context/UserDetailsContext';
import Home from './screens/Home';
import Post from './screens/Post';
import LoginForm from './screens/LoginForm';
import MenuBar from './screens/MenuBar';
import SignupForm from './screens/SignupForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
    <UserDetailsProvider>
      <MenuBar/>
      <Container fluid={true}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
           <LoginForm/>
          </Route>
          <Route exact path="/post/:id" >
           <Post/>
          </Route>
          <Route path="/signup">
            <SignupForm/>
          </Route>
        </Switch>
      </Container>
    </UserDetailsProvider>
    </Router>
  );
};

export default App;