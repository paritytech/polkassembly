// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
	className?: string
	isPreview?: boolean
	md: string
}

const Markdown = ({ className, isPreview=false, md }: Props) => {
	return <ReactMarkdown className={isPreview ? `${className} mde-preview-content` : className} source={md}/>;
};

export default styled(Markdown)`

	&, &.mde-preview-content {
		font-size: md;
		margin-bottom: 2rem;
		overflow-wrap: break-word;

		p, blockquote, ul, ol, dl, table {
			line-height: 150%;
			margin: 0 0 1.5rem 0;
		}

		h1 {
			font-size: 3rem;
			margin-bottom: 3rem;
		} 
		
		h2 {
			font-size: 2.4rem;
			margin: 3rem 0 2rem 0;
		}

		h3, h4 {
			font-size: lg;
			margin-bottom: 0.8rem;
		}

		ul, ol {
			padding-left: 2rem;

			li {
				padding-left: 0.8rem;
				margin-bottom: 1.2rem;
			}

			li > input {
				display: none;
			}
		}

		a {
			color: pink_primary;

			&:hover {
				text-decoration: none;
				color: pink_secondary;
			}
		}

		blockquote {
			margin-left: 0;
			padding: 0 1em;
			color: grey_primary;
			border-left-style: solid;
			border-left-width: 0.25rem;
			border-left-color: grey_primary;
			font-size: 1.6rem;
				& > :first-child {
					margin-top: 0;
				}
				& > :last-child {
					margin-bottom: 0;
				}
		}

		img {
			max-width: 100%;
			margin: 2rem 0;
		}

		code {
			padding: 0.4rem;
			margin: 0;
			font-size: sm;
			background-color: rgba(0, 0, 0, 0.04);
			border-radius: 3px;
			color: black_text;
			&::before, &::after {
			letter-spacing: -0.2em;
			}
		}
	}
	
	&.mde-preview-content {

		h1, h2, h3, h4 {
			border-bottom: none;
		}

		h1, h2 {
			font-size: lg;
			font-weight: 400;
		}

		h3, h4 {
			font-size: md;
			font-weight: 500;
		}

		h3 {
			font-family: font_default !important;
		}
	}
`;