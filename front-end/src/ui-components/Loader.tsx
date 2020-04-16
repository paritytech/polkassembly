// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Dimmer, Loader as SUILoader } from 'semantic-ui-react';

interface Props{
	className?: string
	text?: string
}
const Loader = ({ className, text = 'Loading' }: Props) => {
	return (
		<Dimmer inverted active className={className}>
			<SUILoader inverted>{text}</SUILoader>
		</Dimmer>
	);
};

export default styled(Loader)`
    background-color: inherit!important;

	&.ui.inverted.dimmer {
		border-radius: 3px;
	}
`;
