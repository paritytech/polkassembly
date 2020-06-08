// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import styled from '@xstyled/styled-components';
import React, { useLayoutEffect, useState } from 'react';
import { Icon } from 'semantic-ui-react';

interface Props {
	className?: string;
}

const ScrollToTop = ({ className }: Props) => {
	const [visible, setVisible] = useState(false);

	useLayoutEffect(() => {
		const handleScroll = () => {
			window.pageYOffset > 300
				? setVisible(true)
				: setVisible(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (!visible) return null;

	return (
		<div className={className}>
			<a className='scroll-arrow' href='#page-container'><Icon name='angle up'/></a>
		</div>
	);
};

export default styled(ScrollToTop)`
	position: sticky;
	top: calc(100vh - 50px);

	.scroll-arrow {
		display: inline-flex;
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
		background-color: pink_primary;
		color: white;
		font-size: xl;
		text-align: center;
		transition: all 0.2s ease;
		i.icon {
			margin: 1rem auto auto auto;
			transition: all 0.2s ease;
		}
		&:hover {
			cursor: pointer;
			background-color: pink_secondary;
			i.icon {
				margin: 0.5rem auto auto auto;
			}
		}
	}
`;