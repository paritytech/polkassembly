import * as React from 'react';

import getExtensionUrl from '../util/getExtensionUrl';

const ExtensionNotDetected = () => (
	<>
		<div className='text-muted'>Polkadot-js extension not detected.</div>
		{getExtensionUrl() ? (
			<div className='text-muted'>
				Please reload this page after installing <a href={getExtensionUrl()}>Polkadot-js extension</a>.
			</div>
		) : (
			<div className='text-muted'>
				Please install <a href='https://www.mozilla.org/en-US/firefox/'>Firefox</a> or <a href='https://www.google.com/chrome/'>Chrome</a> browser to use this feature.
			</div>
		)}
	</>
);

export default ExtensionNotDetected;
