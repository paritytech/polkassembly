// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { ReactNode }  from 'react';

interface Props {
	className?: string;
    children: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ButtonLink = (props: Props) => {
	return <button {...props} />;
};

export default styled(ButtonLink)`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline;
    margin: 0;
    padding: 0;
`;
