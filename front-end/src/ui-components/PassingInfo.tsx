// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Icon } from 'semantic-ui-react';

interface Props {
	className?: string;
	isPassing: boolean | null;
}

const PassingInfo = ({ className, isPassing }:Props ) => {

	const NO_INFO_TEXT = '-';

	let text = '';
	let iconName : 'check circle outline' | 'check circle outline' | null = null;

	if (isPassing === null){
		text = NO_INFO_TEXT;
	} else {
		text = isPassing ? 'Passing' : 'Failling';
		iconName = isPassing ? 'check circle outline' : 'check circle outline';
	}
	return (
		<div className={`${className} ${text === NO_INFO_TEXT ? null : text.toLowerCase()}`}>
			{iconName && <Icon name={iconName} />}{text}
		</div>
	);
};

export default styled(PassingInfo)`
	background-color: grey_secondary;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 1px;
	border-color: grey_border;
	border-radius: 3px;
	margin-bottom: 1rem;
	font-size: xl;
	color: white;
	text-align: center;
	transition-duration: 1s;

	&.passing {
		background-color: green_primary;
	}

	&.failling {
		background-color: red_primary;
	}
`;