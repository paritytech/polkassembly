import * as moment from 'moment';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

interface Props{
    className?: string
    created_at: Date
    displayname?: string
    text?: string
    username: string
}

const CreationLabel = ({ className, created_at, displayname, text='posted', username } : Props) => {
	return <span className={className}>
		{text} by {
			displayname
				?
				<Popup
					trigger={<span>{displayname}&nbsp;</span>}
					content={username}
					position='top center'
				/>
				:
				<span>{username}&nbsp;</span>
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
    }
}`;
