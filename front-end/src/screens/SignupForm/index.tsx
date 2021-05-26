// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import Web2Signup from '../../components/Signup/Web2Signup';
import Web3Signup from '../../components/Signup/Web3Signup';

interface Props {
	className?: string
}

const Signup = ({ className }: Props) => {
	const [displayWeb2, setDisplayWeb2] = useState(true);
	const toggleWeb2Signup = () => setDisplayWeb2(!displayWeb2);

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={4} widescreen={4}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={8} widescreen={8}>
				{ displayWeb2
					? <Web2Signup toggleWeb2Signup={toggleWeb2Signup}/>
					: <Web3Signup toggleWeb2Signup={toggleWeb2Signup}/>
				}
			</Grid.Column>
		</Grid>
	);
};

export default Signup;
