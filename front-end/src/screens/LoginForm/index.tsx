// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import Web2Login from '../../components/Login/Web2Login';
import Web3Login from '../../components/Login/Web3Login';

interface Props {
	className?: string
}

const Login = ({ className }: Props) => {

	const [displayWeb2, setDisplayWeb2] = useState(true);
	const toggleWeb2Login = () => setDisplayWeb2(!displayWeb2);

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				{ displayWeb2
					? <Web2Login toggleWeb2Login={toggleWeb2Login}/>
					: <Web3Login toggleWeb2Login={toggleWeb2Login}/>
				}
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
		</Grid>
	);
};

export default Login;
