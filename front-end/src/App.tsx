import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Apollo from './components/Apollo';
import { GlobalStyle } from './ui-components/GlobalStyle'
import Modal from './components/Modal'
import Notifications from './components/Notifications'
import { ModalProvider } from './context/ModalContext'
import { NotificationProvider } from './context/NotificationContext';
import { UserDetailsProvider } from './context/UserDetailsContext';
import CreatePost from './screens/CreatePost';
import Discussions from './screens/Discussions';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import MenuBar from './screens/MenuBar';
import Post from './screens/Post';
import Proposals from './screens/Proposals';
import RequestResetPassword from './screens/RequestResetPassword';
import ResetPassword from './screens/RequestResetPassword/ResetPassword';
import SignupForm from './screens/SignupForm';
import VerifyEmail from './screens/VerifyEmail';
import Settings from './screens/Settings'

const App = () => {

	return (
		<>
			<GlobalStyle />
			<Router>
				<NotificationProvider>
					<ModalProvider>
						<UserDetailsProvider>
							<Apollo>
								<MenuBar/>
								<Notifications/>
								<Modal/>
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
									<Route path="/request-reset-password">
										<RequestResetPassword/>
									</Route>
									<Route path="/reset-password/:token">
										<ResetPassword/>
									</Route>
									<Route path="/signup">
										<SignupForm/>
									</Route>
									<Route path="/verify-email/:token">
										<VerifyEmail/>
									</Route>
									<Route path="/settings">
										<Settings/>
									</Route>
								</Switch>
							</Apollo>
						</UserDetailsProvider>
					</ModalProvider>
				</NotificationProvider>
			</Router>
		</>
	);
};

export default App;