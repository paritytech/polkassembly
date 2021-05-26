// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';
import Card from 'src/ui-components/Card';

import getExtensionUrl from '../util/getExtensionUrl';

const ExtensionNotDetected = () =>
	<Card>
		<div className='text-muted'>Polkadot-js extension not detected.</div>
		{getExtensionUrl() ?
			<div className='text-muted'>
				No web 3 account integration could be found. To be able to vote on-chain, visit this page on a computer with polkadot-js entension.
			</div>
			:
			<div className='text-muted'>
				Please install <a href='https://www.mozilla.org/en-US/firefox/'>Firefox</a> or <a href='https://www.google.com/chrome/'>Chrome</a> browser to use this feature.
			</div>
		}
	</Card>
;

export default ExtensionNotDetected;
