import React from 'react';
import ReactMarkdown from 'react-markdown'
import ReactMde, { commands }  from 'react-mde';
import styled from 'styled-components';

import 'react-mde/lib/styles/css/react-mde-all.css';

const StyledTextArea = styled.div`

    textarea {
		border-radius: 0rem;
		border: none!important;
		color: #555!important;
		padding: 1rem 1.2rem!important;
	}

	@media only screen and (max-width: 576px) {
		.react-mde {
			.mde-header {
				.mde-header-group {
					.mde-header-item {
						button {
							font-size: 1rem!important;
						}
					}
				}
			}
		}
	}
	
	.react-mde  {
		border-color: #EEE;
		font-size: 1.4rem;

		.mde-preview {
			font-size: 1.4rem;

			.mde-preview-content {
				padding: 1rem 1.2rem!important;

				h1, h2, h3, h4, h5, h6 {
					font-family: Roboto;
					font-weight: 500;
				}

				h4 {
					font-size: 1.4rem;
				}

				a {
					color: #EB5757;

					&:hover {
						text-decoration: none;
						color: #CC3D3D;
						border-bottom: 1px solid #CC3D3D;
					}
				}

				p {
					font-size: 1.4rem;

					img {
						opacity: 0.6;
						max-width: 100%;
					}
				}

				blockquote {
					color: #7E7A7A;
					font-size: 1.6rem;
				}
			}
		}

		.grip {
			border-top: none;
			color: #B5AEAE;

			.icon {
				margin-bottom: 1rem;
			}
		}

		.mde-header {
			background: #FFF;
			border-bottom: 1px solid #EEE;

			.mde-tabs {
				margin: 0rem 0.5rem;

				button {
					font-family: 'Roboto Mono';
					font-size: 1rem;
					font-weight: 500;
					padding: 0.5rem 1rem;
					border-radius: 0.3em;
					border: 1px solid #B5AEAE;
					color: #B5AEAE;
					background: #FFF;
					transition: opacity .1s ease, background-color .1s ease, color .1s ease, border .1s ease, background .1s ease;

					&.selected, &:hover, &:focus {
						border: 1px solid #282828;
						color: #282828;
						outline: none;
					}
				}
			}

			.mde-header-group {
				margin-left: auto;

				.mde-header-item {
					button {
						color: #B5AEAE;
						font-size: 1.2rem;

						&:hover, &:active, &:focus {
							color: #282828;
						}
					}

					.react-mde-dropdown {
						border: 1px solid #EEE;
						border-radius: 0.5rem;

						.mde-header-item {

							button {
								p {
									color: #B5AEAE;
								}

								p:hover {
									color: #555252;
								}
							}
					}
				}
			}
		}
	}
`;

interface Props {
    value: string
    onChange:  ((value: string) => void) | undefined
}

export function TextArea(props: Props): React.ReactElement {
	const listCommands = [
		{
			commands: [
				commands.boldCommand,
				commands.italicCommand,
				commands.headerCommand,
				commands.linkCommand,
				commands.quoteCommand,
				commands.strikeThroughCommand,
				commands.codeCommand,
				commands.imageCommand,
				commands.checkedListCommand,
				commands.orderedListCommand,
				commands.unorderedListCommand
			]
		}
	]
	const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>('write');

	return (
		<StyledTextArea className="container">
			<ReactMde
				commands={listCommands}
				value={props.value}
				onChange={props.onChange}
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
				generateMarkdownPreview={markdown => Promise.resolve(<ReactMarkdown source={markdown} />) }
				{...props}
			/>
		</StyledTextArea>
	);
}
