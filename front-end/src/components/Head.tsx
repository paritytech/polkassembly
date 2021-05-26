// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { MetaContext } from '../context/MetaContext';

const Head = () => {
	const {
		description,
		image,
		title,
		type,
		url
	} = useContext(MetaContext);

	return <Helmet>
		<title>{title}</title>
		<meta name='description' content={description} />
		<meta property='og:title' content={title} />
		<meta property='og:type' content={type} />
		<meta property='og:url' content={url} />
		<meta property='og:image' content={image} />
		<meta property='og:description' content={description} />
	</Helmet>;
};

export default Head;
