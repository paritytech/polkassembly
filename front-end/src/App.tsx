import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './components/GlobalStyle'
import { UserDetailsProvider } from './context/UserDetailsContext';
import CreatePost from './screens/CreatePost';
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
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/temp-login">
							<LoginForm/>
						</Route>
						<Route path="/temp-post/create" >
							<CreatePost/>
						</Route>
						<Route exact path="/temp-post/:id" >
							<Post/>
						</Route>
						<Route path="/temp-signup">
							<SignupForm/>
						</Route>
					</Switch>
				</UserDetailsProvider>
			</Router>
		</>
	);
};

export default App;