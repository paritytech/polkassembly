// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveAccountFlags, DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types';
import Identicon from '@polkadot/react-identicon';
import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react';

import shortenAddress from '../util/shortenAddress';
import IdentityBadge from './IdentityBadge';

interface Props {
	address: string
	className?: string
	displayInline?: boolean
	extensionName?: string
	popupContent?: string
}

const Address = ({ address, className, displayInline, extensionName, popupContent }: Props): JSX.Element => {
	const { api, isApiReady } = useContext(ApiPromiseContext);
	const [mainDisplay, setMainDisplay] = useState<string>('');
	const [sub, setSub] = useState<string | null>(null);
	const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null);
	const [flags, setFlags] = useState<DeriveAccountFlags | undefined>(undefined);

	useEffect(() => {

		if (!isApiReady){
			return;
		}

		let unsubscribe: () => void;

		api.derive.accounts.info(address, (info: DeriveAccountInfo) => {
			setIdentity(info.identity);

			if (info.identity.displayParent && info.identity.display){
				// when an identity is a sub identity `displayParent` is set
				// and `display` get the sub identity
				setMainDisplay(info.identity.displayParent);
				setSub(info.identity.display);
			} else {
				// There should not be a `displayParent` without a `display`
				// but we can't be too sure.
				setMainDisplay(info.identity.displayParent || info.identity.display || info.nickname || '');
			}
		})
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api, isApiReady]);

	useEffect(() => {
		if (!isApiReady){
			return;
		}

		let unsubscribe: () => void;

		api.derive.accounts.flags(address, (result: DeriveAccountFlags) => {
			setFlags(result);
		})
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api, isApiReady]);

	return (
		<div className={displayInline ? `${className} inline`: className}>
			<Identicon
				className='image identicon'
				value={address}
				size={displayInline ? 20 : 32}
				theme={'polkadot'}
			/>
			<div className='content'>
				{displayInline
					// When inline disregard the extension name.
					? popupContent
						? <>
							{identity && mainDisplay && <IdentityBadge identity={identity} flags={flags} />}
							<Popup
								trigger={
									<div className={'header inline identityName'}>
										{mainDisplay || shortenAddress(address)}
										{sub && <span className='sub'>/{sub}</span>}
									</div>
								}
								content={popupContent}
								hoverable={true}
								position='top center'
							/>
						</>
						: <>
							<div className={'description inline'}>
								{identity && mainDisplay && <IdentityBadge identity={identity} flags={flags} />}
								<span className='identityName'>
									{ mainDisplay || shortenAddress(address)}
									{sub && <span className='sub'>/{sub}</span>}
								</span>
							</div>
						</>
					: extensionName || mainDisplay
						? popupContent
							? <Popup
								trigger={
									<>
										<div className={'header'}>
											{identity && mainDisplay && !extensionName && <IdentityBadge identity={identity} flags={flags} />}
											<span className='identityName'>
												{extensionName || mainDisplay}
												{!extensionName && sub && <span className='sub'>/{sub}</span>}
											</span>
										</div>
										<div className={'description inline'}>{shortenAddress(address)}</div>
									</>
								}
								content={popupContent}
								hoverable={true}
								position='top center'
							/>
							: <>
								<div className={'header'}>
									{identity && mainDisplay && !extensionName && <IdentityBadge identity={identity} flags={flags} />}
									<span className='identityName'>
										{extensionName || mainDisplay}
										{!extensionName && sub && <span className='sub'>/{sub}</span>}
									</span>
								</div>
								<div className={'description'}>{shortenAddress(address)}</div>
							</>
						: <div className={'description'}>{shortenAddress(address)}</div>
				}
			</div>
		</div>
	);
};

export default styled(Address)`
	position: relative;
	display: flex;
	align-items: center;

	.content {
		display: inline-block;
	}

	.identicon {
		margin-right: 0.25rem;
	}

	.identityName{
		filter: grayscale(100%);
	}

	.header {
		color: black_text;
		font-weight: 500;
		font-size: sm;
		margin-right: 0.4rem;
	}

	.description {
		color: grey_primary;
		font-size: xs;
		margin-right: 0.4rem;
	}

	.inline {
		display: inline-flex !important;
		font-size: sm !important;

	}

	.sub {
		color: grey_secondary;
		line-height: inherit;
	}
`;
