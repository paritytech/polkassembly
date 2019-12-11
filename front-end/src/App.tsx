import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './ui-components/GlobalStyle'
import { UserDetailsProvider } from './context/UserDetailsContext';
import CreatePost from './screens/CreatePost';
import Discussions from './screens/Discussions';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import MenuBar from './screens/MenuBar';
import Post from './screens/Post';
import Proposals from './screens/Proposals';
import SignupForm from './screens/SignupForm';
import VerifyEmail from './screens/VerifyEmail';
import Apollo from './components/Apollo';

const App = () => {

	return (
		<>
			<GlobalStyle />
			<Router>
				<UserDetailsProvider>
					<Apollo>
						<MenuBar/>
						<Switch>
							<Route exact path="/">
								<Home/>
							</Route>
							<Route path="/discussions">
								<Discussions/>
							</Route>
							<Route path="/login">
								<LoginForm/>
							</Route>
							<Route path="/post/create" >
								<CreatePost/>
							</Route>
							<Route exact path="/post/:id" >
								<Post/>
							</Route>
							<Route path="/proposals" >
								<Proposals/>
							</Route>
							<Route path="/signup">
								<SignupForm/>
							</Route>
							<Route path="/verify-email/:token">
								<VerifyEmail/>
							</Route>
						</Switch>
					</Apollo>
				</UserDetailsProvider>
			</Router>
		</>
	);
};

export default App;