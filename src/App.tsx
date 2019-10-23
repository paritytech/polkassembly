import React from 'react';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import MenuBar from './components/MenuBar';
import LoginForm from './components/LoginForm'
import { UserDetailsProvider } from './context/UserDetailsContext'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
    <UserDetailsProvider>
      <MenuBar />
      <Container fluid={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Container>
    </UserDetailsProvider>
    </Router>
  );
};

export default App;