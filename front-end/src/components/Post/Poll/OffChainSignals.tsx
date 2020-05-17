// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as React from 'react';

import AyeNayButtons from '../../../ui-components/AyeNayButtons';
import Card from '../../../ui-components/Card';
import { Form } from '../../../ui-components/Form';
import OffChainSignalBar from '../../../ui-components/OffChainSignalBar';

interface Props {
	className?: string
}

const CouncilSignals = ({ className }: Props) => {
	const voteRefrendum = (bool: Boolean) => {
		console.log(bool);
	};

	return (
		<Card className={className}>
			<OffChainSignalBar
				ayeSignals={3}
				naySignals={4}
			/>
			<div className='info text-muted'>Signals are off chain.</div>
			<Form standalone={false}>
				<AyeNayButtons
					disabled={false}
					onClickAye={() => voteRefrendum(true)}
					onClickNay={() => voteRefrendum(false)}
				/>
			</Form>
		</Card>
	);
};

export default styled(CouncilSignals)`
	.info {
		margin: 1em 0;
	}
`;
