import * as moment from 'moment';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props{
    className?: string
    created_at: Date
    updated_at: Date
}

const UpdateLabel = ({ className, created_at, updated_at } : Props) => {
	return (
		updated_at === created_at
			? null :
			<span className={className}>
				<Popup content={moment.utc(updated_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()} trigger={<span>(edited)</span>}/>
			</span>
	);
};

export default styled(UpdateLabel)`
    margin-left: .5rem;
    font-size: 1.2rem;
    
    span {
        color: gray
    }
}`;