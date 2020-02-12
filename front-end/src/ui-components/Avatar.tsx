import React from 'react';
import styled from '@xstyled/styled-components';

interface Props {
    className?: string
	displayname?: string | null
	username: string | null
}

const Avatar = ({ className, displayname, username }: Props) => {

	return (
		<div className={className}>
			{displayname ? displayname.substring(0, 1) : username?.substring(0, 1)}
		</div>
	);
};

export default styled(Avatar)`
	border-radius: 50%;
	display: inline-block;
	vertical-align: top;
	overflow: hidden;
	text-transform: uppercase;
	text-align: center;
	background-color: grey_primary;
	color: white;
	width: 4rem;
	height: 4rem;
	font-size: lg;
	line-height: 4rem;
`;