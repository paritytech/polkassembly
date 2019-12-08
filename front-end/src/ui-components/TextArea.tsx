import React from 'react';
import ReactMarkdown from 'react-markdown'
import ReactMde, { commands }  from 'react-mde';
import styled from 'styled-components';

import 'react-mde/lib/styles/css/react-mde-all.css';

const StyledTextArea = styled.div`
    textarea {
        border-radius: 0rem;
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
