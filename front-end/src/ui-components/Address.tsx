// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveAccountInfo } from '@polkadot/api-derive/types';
import Identicon from '@polkadot/react-identicon';
import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react';

import shortenAddress from '../util/shortenAddress';

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

	useEffect(() => {

		if (!isApiReady){
			return;
		}

		let unsubscribe: () => void;

		api.derive.accounts.info(address, (info: DeriveAccountInfo) => {
			if (info.identity.displayParent && info.identity.display){
				setMainDisplay(info.identity.displayParent);
				setSub(info.identity.display);
			} else {
				setMainDisplay(info.identity.displayParent || info.identity.display || info.nickname || '');
			}
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
				size={displayInline ? 16 : 32}
				theme={'polkadot'}
			/>
			<div className='content'>
				{displayInline
					// When inline disregard the extension name.
					? popupContent
						? <Popup
							trigger={
								<div className={'header inline'}>{mainDisplay || shortenAddress(address)}
									{sub && <span className='sub'>/{sub}</span>}
								</div>
							}
							content={popupContent}
							hoverable={true}
							position='top center'
						/>
						: <>
							<div className={'description inline'}>
								{ mainDisplay || shortenAddress(address)}
								{sub && <span className='sub'>/{sub}</span>}
							</div>
						</>
					: extensionName || mainDisplay
						? popupContent
							? <Popup
								trigger={
									<>
										<div className={'header'}>
											{extensionName || mainDisplay}
											{sub && <span className='sub'>/{sub}</span>}
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
									{extensionName || mainDisplay}
									{sub && <span className='sub'>/{sub}</span>}
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
		line-height: 1.6rem;
	}

	.identicon {
		margin-right: 0.8rem;
	}

	.header {
		color: black_text;
		font-weight: 500;
		font-size: sm;
		filter: grayscale(100%);
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
	&.inline .content {
		line-height: inherit !important;
	}

	.sub {
		color: grey_secondary;
	}
`;
