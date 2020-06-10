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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0
		});
	};

	if (!visible) return null;

	return (
		<div className={className}>
			<button className='scroll-arrow' onClick={scrollToTop}><Icon name='angle up'/></button>
		</div>
	);
};

export default styled(ScrollToTop)`
	position: sticky;
	top: calc(100vh - 60px);

	.scroll-arrow {
		display: flex;
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		background-color: white;
		color: grey_primary;
		font-size: xl;
		text-align: center;
		transition: all 0.2s ease;
		border: none;
		box-shadow: 0 0.2rem 0.4rem rgba(83, 89, 92, 0.25);
		line-height: 2.4rem;
		i.icon {
			margin: auto;
			transition: all 0.2s ease;
		}
		&:hover {
			cursor: pointer;
			background-color: grey_light;
		}
		&:focus {
			outline: none;
		}
	}
`;