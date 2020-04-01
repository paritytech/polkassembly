import React from 'react';
import styled from '@xstyled/styled-components';

import Address from '../ui-components/Address';
import TopicTag from '../ui-components/TopicTag';

interface Props {
	address?: string
	className?: string
	topic: string
}

const OnchainCreationLabel = ({ address, className, topic }:Props ) => {
	return (
		<div className={className}>
			by
			<Address
				address={address || ''}
				className='address'
				displayInline={true}
			/>
				from <TopicTag className='topic' topic={topic} />
		</div>
	);
};

export default styled(OnchainCreationLabel)`
	display: inline-flex;
	align-items: center;
	font-size: sm;
	color: black_text;
`;