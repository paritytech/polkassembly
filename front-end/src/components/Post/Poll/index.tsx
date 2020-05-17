// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';

import CouncilSignals from './CouncilSignals';
import OffChainSignals from './OffChainSignals';

interface Props {

}

const Poll = () => {
	return (
		<>
			<OffChainSignals />
			<CouncilSignals />
		</>
	);
};

export default Poll;
