// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'react-mde/lib/styles/css/react-mde-all.css';

import styled from '@xstyled/styled-components';
import React from 'react';
import ReactMde, { commands }  from 'react-mde';

import Markdown from './Markdown';

const StyledTextArea = styled.div`

    textarea {
		border-radius: 0rem;
		border: none!important;
		color: black_text !important;
		padding: 1rem 1.2rem!important;
		line-height: 1.4!important;
	}

	@media only screen and (max-width: 768px) {
		.react-mde {
			.mde-header {
				.mde-header-group {
					margin-left: 0!important;
					padding: 1rem 0.5rem;
					background-color: white;
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
							border-bottom-color: white !important;
							z-index: 1;
						}
					}
				}
			}
		}
	}
	
	.react-mde  {
		border-color: grey_light;
		font-size: 1.4rem;

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
					font-family: font_default;
					font-size: sm;
					font-weight: 500;
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
	height?: number
	name?: string
	onChange:  ((value: string) => void) | undefined
    value: string
}

export function MarkdownEditor(props: Props): React.ReactElement {
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
				generateMarkdownPreview={markdown => Promise.resolve(<Markdown isPreview={true} md={markdown} />) }
				minEditorHeight={props.height}
				minPreviewHeight={props.height}
				name={props.name}
				onChange={props.onChange}
				onTabChange={setSelectedTab}
				selectedTab={selectedTab}
				{...props}
			/>
		</StyledTextArea>
	);
}