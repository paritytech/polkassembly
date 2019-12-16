import * as moment from 'moment'
import React from 'react'
import styled from 'styled-components';

interface Props{
    className?: string
    created_at: string
    updated_at: string
}

const UpdateLabel = ({ className, created_at, updated_at } : Props) => {
	return <div className={className}>{text} by <span>{username}</span> {moment.utc(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}</div>
}

export default styled(UpdateLabel)`
    color: #555;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
        
    span {
        font-weight: 500;
    }
}`