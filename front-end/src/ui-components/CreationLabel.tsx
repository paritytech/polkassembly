import * as moment from 'moment';
import React from 'react';
import styled from 'styled-components';

interface Props{
    className?: string
    created_at: Date
    text?: string
    username: string
}

const CreationLabel = ({ className, created_at, text='posted', username } : Props) => {
	return <span className={className}>
		{text} by <span>{username}</span> {moment.utc(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}
	</span>;
};

export default styled(CreationLabel)`
    color: #7E7A7A;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.small};
    margin-bottom: 0.6rem;
        
    span {
        color: #555252;
        font-weight: 500;
    }
}`;