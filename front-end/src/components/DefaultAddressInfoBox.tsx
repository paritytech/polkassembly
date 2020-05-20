// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDetailsContext } from 'src/context/UserDetailsContext';
import InfoBox from 'src/ui-components/InfoBox';

const DefaultAddressInfoBox = () => {
	const currentUser = useContext(UserDetailsContext);

	return (
		<>
			{currentUser.id && currentUser.addresses?.length !== 0 && !currentUser.defaultAddress &&
				<InfoBox
					className='default-address-infobox'
					dismissable={true}
					name='defaultAddress'
					title='Default Address is here!'
				>
					<p><Link to='/settings'>Visit your settings</Link> to set a default address and let other users see your on-chain identity.</p>
					<p>If you don&apos;t have any on-chain identity yet,&nbsp;
						<a href='https://wiki.polkadot.network/docs/en/mirror-learn-identity#setting-an-identity' rel='noopener noreferrer' target='_blank'>here is how to set it up</a>.</p>
				</InfoBox>
			}
		</>
	);
};

export default DefaultAddressInfoBox;