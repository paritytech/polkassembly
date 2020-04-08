// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as moment from 'moment';
import React from 'react';
import { Popup } from 'semantic-ui-react';

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
    font-size: sm;
    
    span {
        color: grey_secondary;
    }
}`;