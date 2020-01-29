import * as moment from 'moment';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

interface Props{
    className?: string
    created_at: Date
    displayname?: string | null
    text?: string
    username: string
}

const CreationLabel = ({ className, created_at, displayname, text='posted', username } : Props) => {
	return <span className={className}>
		{text} by {
			displayname
				?
				<Popup
					trigger={<span>{displayname}</span>}
					content={username}
					hoverable={true}
					position='top center'
				/>
				:
				<span>{username}</span>
		}
		{moment.utc(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}
	</span>;
};

export default styled(CreationLabel)`
    color: grey_primary;
    font-weight: 400;
    font-size: sm;
    margin-bottom: 0.6rem;
        
    span {
        color: black_text;
		font-weight: 500;
		margin-right: 0.3rem;
    }
`;