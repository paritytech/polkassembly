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
    color: #555;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
        
    span {
        font-weight: 500;
    }
}`;