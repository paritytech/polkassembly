import React, { ReactNode, useState } from 'react';
import styled from '@xstyled/styled-components';
import { MdClose } from 'react-icons/md';

interface Props{
	children?: ReactNode
	className?: string
	content?: string
	dismissable?: boolean
	name: string
	title: string
}

const InfoBox = ({ children, className, content, dismissable, name, title }: Props) => {
	const localStorageName = name + 'Visible'
	const infoBoxVisible = localStorage.getItem(localStorageName);
	const [infoVisible, setInfoVisible] = useState(JSON.parse(infoBoxVisible!));
	
	if (infoBoxVisible === null) {
		localStorage.setItem(name, 'true');
		setInfoVisible(true);
	}

	const handleClose = () => {
		localStorage.setItem(name, 'false');
		setInfoVisible(false);
	};

	return (
		<>
			{infoVisible &&
			<div className={className}>
				<h4>{title}</h4>
				{dismissable &&
				<div className='close'>
					<MdClose
						onClick={handleClose}
					/>
				</div>}
				{content}
				{children}
			</div>}
		</>
	);
};

export default styled(InfoBox)`
    background-color: grey_light;
	color: black_text;
	border-style: solid;
	border-width: 1px;
	border-color: grey_light;
	padding: 2rem 3rem;
	position: relative;
	margin-bottom: 2rem;
	
	h4 {
		font-family: 'Roboto Mono';
		font-size: md;
		margin-bottom: 1.2rem;
	}

	.close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: lg;
		&:hover {
			color: grey_secondary;
			cursor: pointer;
		}
	}
`;
