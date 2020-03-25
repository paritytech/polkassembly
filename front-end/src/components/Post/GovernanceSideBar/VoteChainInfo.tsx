// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect, useState } from 'react';
import styled from '@xstyled/styled-components';
import { Grid } from 'semantic-ui-react';

import { ApiContext } from '../../../context/ApiContext';

interface Props {
	className?: string
	referendumId?: number | null | undefined
}

const VoteChainInfo = ({ className, referendumId }: Props) => {
	const { api, apiReady } = useContext(ApiContext);
	const [totalVotes, setTotalVotes] = useState(0);
	const [yesVotes, setYesVotes] = useState(0);
	const [noVotes, setNoVotes] = useState(0);

	useEffect(() => {
		async function getVotes() {
			if (!api) {
				console.error('polkadot/api not set');
				return;
			}

			if (!apiReady) {
				console.error('api not ready');
				return;
			}

			if (referendumId !== 0 && !referendumId) {
				console.error('referendumId not set');
				return;
			}

			const votes = await api.derive.democracy.referendumVotesFor(referendumId);

			setTotalVotes(votes.length);

			const ayes = votes.filter(({ vote }) => vote.isAye);
			const nays = votes.filter(({ vote }) => vote.isNay);

			setYesVotes(ayes.length);
			setNoVotes(nays.length);
		}

		getVotes().catch(console.error);
	}, [api, apiReady, referendumId]);

	return (
		<Grid className={className} columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					<div><b>Total Votes</b></div>
					<div>{totalVotes}</div>
				</Grid.Column>
				<Grid.Column width={5}>
					<div><b>Aye</b></div>
					<div>{yesVotes}</div>
				</Grid.Column>
				<Grid.Column width={5}>
					<div><b>Nay</b></div>
					<div>{noVotes}</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default styled(VoteChainInfo)`
	margin-bottom: 1rem;
`;
