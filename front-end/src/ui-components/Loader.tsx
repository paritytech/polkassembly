// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useEffect, useState } from 'react';
import { Dimmer, Loader as SUILoader } from 'semantic-ui-react';

interface Props{
	className?: string
	text?: string
	timeout?: number
	timeoutmessage?: string
}
const Loader = ({ className, text = 'Loading', timeout, timeoutmessage = 'Process timeout' }: Props) => {
	const [displayLoader, setDisplayLoader] = useState(true);

	useEffect(() => {
		if (timeout) {
			const timer = setTimeout(() => {
				setDisplayLoader(false);
			}, timeout);
			return () => clearTimeout(timer);
		}
	}, [timeout]);

	return (
		<>
			{displayLoader
				?
				<Dimmer inverted active className={className}>
					<SUILoader inverted>{text}</SUILoader>
				</Dimmer>
				:
				<div className={`${className} error-text`}>{timeoutmessage}</div>
			}
		</>
	);
};

export default styled(Loader)`
    background-color: inherit!important;

	&.ui.inverted.dimmer {
		border-radius: 3px;
	}

	.error-text {
		color: red_secondary;
	}
`;
