// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import styled from '@xstyled/styled-components';
import React, { useLayoutEffect, useState } from 'react';

import Button from './Button';

interface Props {
	className?: string;
}

const ScrollToTopButton = ({ className }: Props) => {
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

	return (
		<div className={className}>
			{visible &&
				<Button
					className='primary'
					onClick={scrollToTop}
				>
					Back to top
				</Button>
			}
		</div>
	);
};

export default styled(ScrollToTopButton)`
	position: sticky;
	top: calc(100vh - 40px);
`;