import styled from '@xstyled/styled-components';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Grid } from 'semantic-ui-react';

interface Props {
	className?: string
}

const PrivacyPolicy = ({ className }:Props): JSX.Element => {

    return (
        <Container className={className}>
            <Grid>
                <Grid.Column className='policy_box' mobile={16} tablet={12} computer={10} largeScreen={10} widescreen={4}>
                    <h1>Privacy Policy</h1>
                    <ReactMarkdown className='markdown'>
                        ## Placeholder MD
                    </ReactMarkdown>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={4} computer={2} largeScreen={2} widescreen={12}/>
            </Grid>
        </Container>
    );
}

export default styled(PrivacyPolicy)`
    .policy_box {
        background-color: white;
        padding: 3rem!important;
        border-width: 1px;
        border-style: solid;
        border-color: grey_light;
    }

    .markdown {
		color: black_text;
		font-family: 'Roboto';
		font-size: md;
		line-height: 150%;
        margin-bottom: 2rem;

		p, blockquote, ul, ol, dl, table {
			margin: 0 0 1.5rem 0;
		}

		h1, h2 {
			margin: 2rem 0 1.5rem 0;
		}

		h3, h4 {
			margin: 1.5rem 0 0.5rem 0;
		}

		h1 {
			font-size: 2.4rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		h3 {
			font-size: md;
		}

		h4 {
			font-size: md;
			font-family: 'Roboto Mono';
		}

		h5, h6 {
			font-size: sm;
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
	}
`;