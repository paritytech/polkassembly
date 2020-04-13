// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Grid } from 'semantic-ui-react';

import { useRouter } from '../../hooks';
import Button from '../../ui-components/Button';

interface Props {
	className?: string
}

const NotFound = ({ className }:Props): JSX.Element => {
	const { history } = useRouter();
	const navigateHome = () => {
		history.push('/');
	};

	return (
		<Grid className={className} stackable reversed='mobile tablet'>
			<Grid.Column>
				<h1>You broke the chain</h1>
				<br/>
				<br/>
				<>
					<img alt={'broken chain'} width={100} src='broken-chain.png'/>
				</>
				<br/>
				<br/>
				<h2>404 Not found!</h2>
				<br/>
				<br/>
				<>
					<Button primary onClick={navigateHome}>Go Back to Home!</Button>
				</>
			</Grid.Column>
		</Grid>
	);
};

export default styled(NotFound)`
	text-align: center
`;
