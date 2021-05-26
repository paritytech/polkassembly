// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveAccountFlags, DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Icon, Table } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';

import Balance from '../../components/Balance';
import { useProfileQuery } from '../../generated/graphql';
import { network } from '../../global/networkConstants';
import { useRouter } from '../../hooks';
import AddressComponent from '../../ui-components/Address';
import FilteredError from '../../ui-components/FilteredError';
import getNetwork from '../../util/getNetwork';

interface Props {
	className?: string
}

const NETWORK = getNetwork();

const CouncilEmoji = () => <span aria-label="council member" className='councilMember' role="img">👑</span>;

const UserProfile = ({ className }: Props): JSX.Element => {
	const router = useRouter();

	const { api, apiReady } = useContext(ApiContext);
	const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null);
	const [flags, setFlags] = useState<DeriveAccountFlags | undefined>(undefined);
	const { data, error } = useProfileQuery({ variables: { username: router.query.username } });

	const address = NETWORK === network.POLKADOT ? data?.profile?.polkadot_default_address : data?.profile?.kusama_default_address;

	useEffect(() => {

		if (!api) {
			return;
		}

		if (!apiReady) {
			return;
		}

		if (!address) {
			return;
		}

		let unsubscribe: () => void;

		api.derive.accounts.info(address, (info: DeriveAccountInfo) => {
			setIdentity(info.identity);
		})
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api, apiReady]);

	useEffect(() => {
		if (!api) {
			return;
		}

		if (!apiReady) {
			return;
		}

		if (!address) {
			return;
		}

		let unsubscribe: () => void;

		api.derive.accounts.flags(address, (result: DeriveAccountFlags) => {
			setFlags(result);
		})
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api, apiReady]);

	if (error?.message) return <FilteredError text={error.message}/>;

	const judgements = identity ? identity.judgements.filter(([, judgement]): boolean => !judgement.isFeePaid) : [];
	const displayJudgements = judgements.map(([,jud]) => jud.toString()).join(', ');
	const isGood = judgements.some(([, judgement]): boolean => judgement.isKnownGood || judgement.isReasonable);
	const isBad = judgements.some(([, judgement]): boolean => judgement.isErroneous || judgement.isLowQuality);

	const color: 'brown' | 'green' | 'grey' = isGood ? 'green' : isBad ? 'brown' : 'grey';
	const iconName = isGood ? 'check circle' : 'minus circle';

	return (
		<Grid className={className}>
			<Grid.Column mobile={16} tablet={16} computer={10} largeScreen={10}>
				<div className='info-box'>
					<h2>{router.query.username}</h2>
					{address ? <>
						<div className="address-container">
							<AddressComponent address={address}/>
						</div>
						<Balance address={address} className='balance'/>
						{identity && <Table basic='very' celled collapsing>
							<Table.Body>
								{identity?.legal && <Table.Row>
									<Table.Cell className='desc'>Legal:</Table.Cell>
									<Table.Cell>{identity.legal}</Table.Cell>
								</Table.Row>}
								{identity?.email && <Table.Row>
									<Table.Cell className='desc'>Email:</Table.Cell>
									<Table.Cell><a href={`mailto:${identity.email}`}>{identity.email}</a></Table.Cell>
								</Table.Row>}
								{identity?.judgements?.length > 0 && <Table.Row>
									<Table.Cell className='desc'>Judgements:</Table.Cell>
									<Table.Cell className='judgments'><Icon name={iconName} color={color} /> {displayJudgements}</Table.Cell>
								</Table.Row>}
								{identity?.pgp && <Table.Row>
									<Table.Cell className='desc'>PGP:</Table.Cell>
									<Table.Cell>{identity.pgp}</Table.Cell>
								</Table.Row>}
								{identity?.riot && <Table.Row>
									<Table.Cell className='desc'>Riot:</Table.Cell>
									<Table.Cell>{identity.riot}</Table.Cell>
								</Table.Row>}
								{identity?.twitter && <Table.Row>
									<Table.Cell className='desc'>Twitter:</Table.Cell>
									<Table.Cell><a href={`https://twitter.com/${identity.twitter.substring(1)}`}>{identity.twitter}</a></Table.Cell>
								</Table.Row>}
								{identity?.web && <Table.Row>
									<Table.Cell className='desc'>Web:</Table.Cell>
									<Table.Cell>{identity.web}</Table.Cell>
								</Table.Row>}
								{flags?.isCouncil && <Table.Row>
									<Table.Cell className='desc'>Roles:</Table.Cell>
									<Table.Cell>Council member <CouncilEmoji/></Table.Cell>
								</Table.Row>}
							</Table.Body>
						</Table>}
					</> : <p>No address attached to this account</p>}
				</div>
			</Grid.Column>
		</Grid>
	);
};

export default styled(UserProfile)`
	display: flex;
	justify-content: center;

	.info-box {
		background-color: white;
		border-radius: 3px;
		box-shadow: box_shadow_card;
		margin: 1rem;
		width: calc(100% - 60px);
		word-break: break-word;
		padding: 10px;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;

		@media only screen and (max-width: 576px) {
			width: 100%;
			border-radius: 0px;
		}
	}


	.address-container {
		margin: 10px 0;
	}

	.desc {
		font-weight: bold;
	}
`;
