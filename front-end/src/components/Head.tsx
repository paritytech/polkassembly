// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';
import { Helmet } from 'react-helmet';
import getNetwork from 'src/util/getNetwork';

const Head = () => {
	const network = getNetwork();
	const title = `Polkassembly | ${network}`;
	const description = `polkassembly | ${network}, discussion platform for polkadot governance`;

	return <div>
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta property='og:title' content={title} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={`https://${network}.polkassembly.io/`} />
			<meta property='og:image' content={`https://${network}.polkassembly.io/static/media/polkassembly-logo.aa0e69ae.png`} />
			<meta property='og:description' content={description} />
		</Helmet>
	</div>;
};

export default Head;
