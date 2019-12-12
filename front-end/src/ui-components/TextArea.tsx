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
		line-height: 1.4!important;
	}

	@media only screen and (max-width: 768px) {
		.react-mde {
			.mde-header {
				.mde-header-group {
					border-top: 1px solid #DED7D7;
					border-bottom-color: #DED7D7;
					margin-left: 0!important;
					padding: 1rem 0.5rem;
					background-color: #FFF;
					width: 100%;

					&.hidden {
						visibility: hidden;
						display: none;
					  }

					.mde-header-item {
						button {
							font-size: 1.3rem!important;
						}
					}
				}

				.mde-tabs {
					margin: 0rem 0rem!important;
					width: 100%;

					button {
						margin: 0 auto;
						width: 48%;
						border-bottom-right-radius: 0!important;
						border-bottom-left-radius: 0!important;

						&.selected {
							border-bottom-color: #FFF!important;
							z-index: 1;
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
			background: #FBFAFA;
			border-bottom: 1px solid #DED7D7;

			.mde-tabs {
				margin: 0rem 0.5rem;

				button {
					font-family: 'Roboto Mono';
					font-size: 1.2rem;
					font-weight: 500;
					padding: 0.8rem 1.6rem;
					color: #706D6D;
					background: #FBFAFA;
					border-radius: 0.3em;
					border-bottom-color: #DED7D7;
					margin-bottom: -1px;
					margin-top: 1rem;

					&.selected, &:focus {
						background: #FFF;
						color: #282828;
						border: 1px solid #DED7D7;
						outline: none;
						border-bottom-color: #fffdfd;
						margin-bottom: -1px;
						border-bottom-right-radius: 0;
						border-bottom-left-radius: 0;
						margin-top: 1rem;
					}

					&:hover {
						color: #282828;
					}
				}
			}

			.mde-header-group {
				margin-left: auto;

				.mde-header-item {
					button {
						color: #706D6D;
						font-size: 1.4rem;

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
									color: #706D6D;
								}

								p:hover {
									color: #282828;
								}
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