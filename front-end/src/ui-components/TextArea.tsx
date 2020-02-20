import React from 'react';
import ReactMde, { commands }  from 'react-mde';
import styled from '@xstyled/styled-components';
import Markdown from './Markdown';

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
				overflow-wrap: break-word;

				h1, h2, h3, h4, h5, h6 {
					font-family: Roboto;
					border-bottom: none;
				}

				h1, h2 {
					font-size: 2.4rem;
					font-weight: 400;
					margin-bottom: 1.2rem;
				}
		
				h3, h4 {
					font-size: lg;
					font-weight: 500;
					margin-bottom: 0.8rem;
				}

				a {
					color: red_primary;

					&:hover {
						text-decoration: none;
						color: red_secondary;
						border-bottom-style: solid;
						border-bottom-width: 1px;
						border-bottom-color: red_secondary;
					}
				}

				p {
					img {
						opacity: 0.6;
						max-width: 100%;
					}
				}

				blockquote {
					color: grey_primary;
					font-size: 1.6rem;
				}

				ul > li > input {
					display: none;
				}
			}
		}

		.grip {
			border-top: none;
			color: grey_secondary;

			.icon {
				margin-bottom: 1rem;
			}
		}

		.mde-header {
			background-color: grey_app_background;
			border-bottom-style: solid;
			border-bottom-width: 1px;
			border-bottom-color: grey_light;

			.mde-tabs {
				margin: 0rem 0.5rem;

				button {
					font-family: 'Roboto';
					font-size: sm;
					font-weight: 400;
					padding: 0.8rem 1.6rem;
					color: black_text;
					background: grey_app_background;
					border-radius: 0.3em;
					border-bottom-color: grey_light;
					margin-bottom: -1px;
					margin-top: 1rem;

					&.selected, &:focus {
						background: white;
						color: black_primary;
						border-style: solid;
						border-width: 1px;
						border-color: grey_light;
						outline: none;
						border-bottom-color: white;
						margin-bottom: -1px;
						border-bottom-right-radius: 0;
						border-bottom-left-radius: 0;
						margin-top: 1rem;
					}

					&:hover {
						color: black_primary;
					}
				}
			}

			.mde-header-group {
				margin-left: auto;

				.mde-header-item {
					button {
						color: grey_primary;
						font-size: 1.4rem;

						&:hover, &:active, &:focus {
							color: black_primary;
						}
					}

					.react-mde-dropdown {
						border-style: solid;
						border-width: 1px;
						border-color: grey_light;
						border-radius: 0.5rem;

						.mde-header-item {

							button {
								p {
									color: grey_primary;
								}

								p:hover {
									color: black_primary;
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
	className?: string
	name?: string
	onChange:  ((value: string) => void) | undefined
    value: string
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
				commands.orderedListCommand,
				commands.unorderedListCommand
			]
		}
	];
	const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>('write');

	return (
		<StyledTextArea className="container">
			<ReactMde
				commands={listCommands}
				generateMarkdownPreview={markdown => Promise.resolve(<Markdown md={markdown} />) }
				name={props.name}
				onChange={props.onChange}
				onTabChange={setSelectedTab}
				selectedTab={selectedTab}
				value={props.value}
				{...props}
			/>
		</StyledTextArea>
	);
}