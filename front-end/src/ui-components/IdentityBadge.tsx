// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveAccountFlags, DeriveAccountRegistration } from '@polkadot/api-derive/types';
import styled from '@xstyled/styled-components';
import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const StyledPopup = styled.div`
font-size: sm;
color: black_text;
list-style: none;
padding: 1rem;

li {
	margin-bottom: 0.3rem;
}

.desc {
	font-weight: 500;
	margin-right: 0.3rem;
}

.judgments {
	display: inline list-item;
}
`;

const IdentityBadge = ({ className, identity, flags }: {className?: string, identity: DeriveAccountRegistration, flags?: DeriveAccountFlags}) => {
	const judgements = identity.judgements.filter(([, judgement]): boolean => !judgement.isFeePaid);
	const isGood = judgements.some(([, judgement]): boolean => judgement.isKnownGood || judgement.isReasonable);
	const isBad = judgements.some(([, judgement]): boolean => judgement.isErroneous || judgement.isLowQuality);

	const color: 'brown' | 'green' | 'grey' = isGood ? 'green' : isBad ? 'brown' : 'grey';
	const iconName = isGood ? 'check circle' : 'minus circle';
	let infoElem = <Icon name={iconName} color={color} />;

	if (flags?.isCouncil) {
		infoElem = <span role='img' aria-label='council member'>👑</span>;
	}

	const displayJudgements = JSON.stringify(judgements.map(([,jud]) => jud.toString()));

	const popupContent = <StyledPopup>
		{identity?.legal && <li><span className='desc'>legal:</span>{identity.legal}</li>}
		{identity?.email && <li><span className='desc'>email:</span>{identity.email}</li>}
		{identity?.judgements?.length > 0 && <li><span className='desc'>judgements:</span><span className='judgments'>{displayJudgements}</span></li>}
		{identity?.pgp && <li><span className='desc'>pgp:</span>{identity.pgp}</li>}
		{identity?.riot && <li><span className='desc'>riot:</span>{identity.riot}</li>}
		{identity?.twitter && <li><span className='desc'>twitter:</span>{identity.twitter}</li>}
		{identity?.web && <li><span className='desc'>web:</span>{identity.web}</li>}
		{flags?.isCouncil && <li><span className='desc'>Council Member</span></li>}
	</StyledPopup>;

	return <div className={className}>
		<Popup
			trigger={infoElem}
			content={popupContent}
			hoverable={true}
			position='top center'
		/>
	</div>;
};

export default styled(IdentityBadge)`
	display: inline;
	i.green.circle.icon {
		color: green_primary !important;
	}
	i.grey.circle.icon {
		color: grey_primary !important;
	}
`;
