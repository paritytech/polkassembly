import React from 'react';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './components/GlobalStyle'
import { UserDetailsProvider } from './context/UserDetailsContext';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import MenuBar from './screens/MenuBar';
import Post from './screens/Post';
import SignupForm from './screens/SignupForm';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<UserDetailsProvider>
					<MenuBar/>
					<Container fluid={true}>
						<Switch>
							<Route exact path="/">
								<Home/>
							</Route>
							<Route path="/temp-login">
								<LoginForm/>
							</Route>
							<Route exact path="/temp-post/:id" >
								<Post/>
							</Route>
							<Route path="/temp-signup">
								<SignupForm/>
							</Route>
						</Switch>
					</Container>
				</UserDetailsProvider>
			</Router>
		</>
	);
};

export default App;