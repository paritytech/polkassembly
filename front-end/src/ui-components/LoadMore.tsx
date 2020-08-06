// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Icon } from 'semantic-ui-react';

const LoadMoreCard = styled.div`
	padding: 2rem 3rem 1.5rem 3rem;
	background-color: white;
	border-radius: 3px;
	box-shadow: box_shadow_card;
	transition: box-shadow .1s ease-in-out;
	font-family: font_default;
	font-size: md;
	font-weight: bold;
	color: grey_primary;
	margin-bottom: 0.3rem;
	text-align: center;

	&:hover {
		box-shadow: box_shadow_card_hover;
		text-decoration: none;
		cursor: pointer;
	}

	@media only screen and (max-width: 576px) {
		& {
			padding: 1.2rem 1.5rem;
		}
	}
`;

type Props = {
	onClick: () => void
	loading?: boolean
}

const LoadMore = ({ onClick, loading } :Props) => {
	return (
		<LoadMoreCard onClick={onClick}>
			{loading ? <Icon name='spinner' className='icon'/> : 'LOAD MORE'}
		</LoadMoreCard>
	);
};

export default LoadMore;
