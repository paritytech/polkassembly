import React, { ReactNode } from 'react';
import styled from '@xstyled/styled-components';
import { MdClose } from 'react-icons/md';

interface Props{
	children?: ReactNode
	className?: string
	content?: string
	dismissable?: boolean
	onClose?: (() => void)
	title: string
}

const InfoBox = ({ children, className, content, dismissable, onClose, title }: Props) => {

	return (
		<div className={className}>
			<h4>{title}</h4>
			{dismissable &&
			<div className='close'>
				<MdClose
					onClick={onClose}
				/>
			</div>}
			{content}
			{children}
		</div>
	);
};

export default styled(InfoBox)`
    background-color: white;
    color: black_text;
	padding: 2rem 3rem;
	position: relative;
	
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
		}
	}
`;