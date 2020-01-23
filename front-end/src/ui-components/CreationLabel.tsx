import * as moment from 'moment';
import React from 'react';
import styled from '@xstyled/styled-components';

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

export default styled(CreationLabel).attrs(() => ({
	className: 'creationlabel'
}))`
    color: grey_primary;
    font-weight: 400;
    font-size: sm;
    margin-bottom: 0.6rem;
    display: inline-block;
        
    span {
        color: black_text;
        font-weight: 500;
    }
}`;