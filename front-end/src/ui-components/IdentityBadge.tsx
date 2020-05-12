// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveAccountRegistration } from '@polkadot/api-derive/types';
import styled from '@xstyled/styled-components';
import React from 'react';
import { Icon } from 'semantic-ui-react';

const IdentityBadge = ({ className, identity }: {className?: string, identity: DeriveAccountRegistration}) => {
	const judgements = identity.judgements.filter(([, judgement]): boolean => !judgement.isFeePaid);
	const isGood = judgements.some(([, judgement]): boolean => judgement.isKnownGood || judgement.isReasonable);
	const isBad = judgements.some(([, judgement]): boolean => judgement.isErroneous || judgement.isLowQuality);

	const color: 'brown' | 'green' | 'grey' = isGood ? 'green' : isBad ? 'brown' : 'grey';
	const iconName = isGood ? 'check circle' : 'minus circle';
	const infoElem = <Icon name={iconName} color={color} />;

	return <div className={className}>{infoElem}</div>;
};

export default styled(IdentityBadge)`
    display: inline;
	i.green.circle.icon {
		color: green_primary !important;
	}
	i.grey.circle.icon {
		color: grey_primary  !important;
	}
`;
