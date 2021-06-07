// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ThemeProvider } from '@xstyled/styled-components';
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Apollo from './components/Apollo';
import Footer from './components/Footer';
import Head from './components/Head';
import MenuBar from './components/MenuBar';
import Modal from './components/Modal';
import Notifications from './components/Notifications';
import { ApiContextProvider } from './context/ApiContext';
import { MetaProvider } from './context/MetaContext';
import { ModalProvider } from './context/ModalContext';
import { NotificationProvider } from './context/NotificationContext';
import { UserDetailsProvider } from './context/UserDetailsContext';
import Bounties from './screens/Bounties';
import PostBounty from './screens/BountyPost';
import CreatePost from './screens/CreatePost';
import PostDiscussion from './screens/DiscussionPost';
import Discussions from './screens/Discussions';
import Home from './screens/Home';
import { PrivacyPolicy, TermsAndConditions, TermsOfWebsite } from './screens/LegalDocuments';
import LoginForm from './screens/LoginForm';
import PostMotion from './screens/MotionPost';
import Motions from './screens/Motions';
import NotFound from './screens/NotFound';
import NotificationSettings from './screens/NotificationSettings';
import OnChain from './screens/OnChain';
import PostProposal from './screens/ProposalPost';
import Proposals from './screens/Proposals';
import Referenda from './screens/Referenda';
import PostReferendum from './screens/ReferendumPost';
import RequestResetPassword from './screens/RequestResetPassword';
import ResetPassword from './screens/ResetPassword';
import Search from './screens/Search';
import Settings from './screens/Settings';
import SignupForm from './screens/SignupForm';
import PostTechCommitteeProposal from './screens/TechCommitteeProposalPost';
import TechCommitteeProposals from './screens/TechCommitteeProposals';
import PostTip from './screens/TipPost';
import Tips from './screens/Tips';
import Treasury from './screens/Treasury';
import PostTreasury from './screens/TreasuryPost';
import UndoEmailChange from './screens/UndoEmailChange';
import UserProfile from './screens/UserProfile';
import VerifyEmail from './screens/VerifyEmail';
import { theme } from './themes/theme';
import { GlobalStyle } from './ui-components/GlobalStyle';

const App = () => {
	return (
		<>
			<Router>
				<ThemeProvider theme={theme}>
					<NotificationProvider>
						<ModalProvider>
							<UserDetailsProvider>
								<MetaProvider>
									<Apollo>
										<Head />
										<GlobalStyle />
										<Notifications/>
										<Modal/>
										<ApiContextProvider>
											<div id='page-container'>
												<MenuBar />
												<Container>
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
														<Route path="/post/create">
															<CreatePost/>
														</Route>
														<Route exact path="/bounty/:id">
															<PostBounty/>
														</Route>
														<Route exact path="/motion/:id">
															<PostMotion/>
														</Route>
														<Route exact path="/proposal/:id">
															<PostProposal/>
														</Route>
														<Route exact path="/referendum/:id">
															<PostReferendum/>
														</Route>
														<Route exact path="/treasury/:id">
															<PostTreasury/>
														</Route>
														<Route exact path="/tech/:id">
															<PostTechCommitteeProposal/>
														</Route>
														<Route exact path="/tip/:hash">
															<PostTip/>
														</Route>
														<Route exact path="/post/:id">
															<PostDiscussion/>
														</Route>
														<Route path="/onchain">
															<OnChain/>
														</Route>
														<Route path="/bounties">
															<Bounties/>
														</Route>
														<Route path="/referenda">
															<Referenda/>
														</Route>
														<Route path="/proposals">
															<Proposals/>
														</Route>
														<Route path="/motions">
															<Motions/>
														</Route>
														<Route path="/treasury-proposals">
															<Treasury/>
														</Route>
														<Route path="/tech-comm-proposals">
															<TechCommitteeProposals/>
														</Route>
														<Route path="/tips">
															<Tips/>
														</Route>
														<Route path="/request-reset-password">
															<RequestResetPassword/>
														</Route>
														<Route path="/reset-password">
															<ResetPassword/>
														</Route>
														<Route path="/signup">
															<SignupForm/>
														</Route>
														<Route path="/verify-email/:token">
															<VerifyEmail/>
														</Route>
														<Route path="/undo-email-change/:token">
															<UndoEmailChange/>
														</Route>
														<Route path="/settings">
															<Settings/>
														</Route>
														<Route path="/notification-settings">
															<NotificationSettings/>
														</Route>
														<Route path="/terms-and-conditions">
															<TermsAndConditions/>
														</Route>
														<Route path="/terms-of-website">
															<TermsOfWebsite/>
														</Route>
														<Route path="/privacy">
															<PrivacyPolicy/>
														</Route>
														<Route path="/user/:username">
															<UserProfile/>
														</Route>
														<Route path="/search">
															<Search/>
														</Route>
														<Route path="*">
															<NotFound/>
														</Route>
													</Switch>
												</Container>
												<Footer />
											</div>
										</ApiContextProvider>
									</Apollo>
								</MetaProvider>
							</UserDetailsProvider>
						</ModalProvider>
					</NotificationProvider>
				</ThemeProvider>
			</Router>
		</>
	);
};

export default App;
