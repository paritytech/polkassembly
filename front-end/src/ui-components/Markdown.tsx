import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@xstyled/styled-components';

interface Props {
    className?: string
	md: string
}

const Markdown = ({ className, md }: Props) => <ReactMarkdown className={className} source={md}/>;

export default styled(Markdown)`
	font-size: md;
	margin-bottom: 2rem;
	overflow-wrap: break-word;

	p, blockquote, ul, ol, dl, table {
		line-height: 150%;
		margin: 0 0 1.5rem 0;
	}

	h1, h2 {
		font-size: 2.4rem;
		margin-bottom: 1.2rem;
	}

	h3, h4 {
		font-size: lg;
		margin-bottom: 0.8rem;
	}

	ul, ol {
		padding-left: 2rem;
		li > input {
			display: none;
		}	
	}

	a {
		color: red_primary;

		&:hover {
			text-decoration: none;
			color: red_secondary;
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
`;