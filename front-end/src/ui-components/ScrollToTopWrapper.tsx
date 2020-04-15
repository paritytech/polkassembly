// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Button from 'src/ui-components/Button';

interface Props {
	hasScrolled?: boolean
}

class ScrollingWrapper extends Component<{}, Props> {
	constructor(props: any) {
		super(props);
		this.state = { hasScrolled: false };
	}

	componentDidMount() {
		document.addEventListener('scroll', this.toggleScrollButton);
	}

	toggleScrollButton = () => {
		window.pageYOffset > 300
			? this.setState({ hasScrolled: true })
			: this.setState({ hasScrolled: false });
	}

	scrollToTop() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0
		});
	}

	render () {
		return (
			<>
				{this.state.hasScrolled &&
					<ButtonContainer>
						<Button onClick={() => this.scrollToTop()} primary><Icon className='icon' name='angle up' />Back To Top</Button>
					</ButtonContainer>
				}
				<ScrollingWrapperContainer>
					{this.props.children}
				</ScrollingWrapperContainer>
			</>
		);
	}
}

export default ScrollingWrapper;

const ButtonContainer = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 4rem;
	z-index: 2;

	@media only screen and (max-width: 768px) {
		right: 50%;
		margin-right: -7rem;
	}
`;

const ScrollingWrapperContainer = styled.div`
	height: 100%;
	position: relative;
`;