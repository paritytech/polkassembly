// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export const sortValues = {
	COMMENTED: 'commented',
	NEWEST: 'newest',
	OLDEST: 'oldest'
};

export const sortOptions = [
	{ key: 'commented', text: 'Last Commented', value: sortValues.COMMENTED },
	{ key: 'newest', text: 'Date Added (newest)', value: sortValues.NEWEST },
	{ key: 'oldest', text: 'Date Added (oldest)', value: sortValues.OLDEST }
];
