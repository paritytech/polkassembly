// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';

const Spacer = () => {return <div className='spacer'></div>;};

export default styled(Spacer)`
    .spacer {
        font-size: 0;
		height: 25px;
		line-height: 0;
    }
`;
