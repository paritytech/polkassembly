import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

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
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
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
		</Container>
	);
};

export default styled(NotFound)`
	text-align: center
`;
