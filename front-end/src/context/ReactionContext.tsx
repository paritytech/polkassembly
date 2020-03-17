// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { useReactionsQuery } from '../generated/graphql';

export interface Reaction {
	id: number
	reaction: string
}

export interface ReactionContextType {
	reactions: Reaction[]
}

export const ReactionContext: React.Context<ReactionContextType> = React.createContext(
	{} as ReactionContextType
);

export interface ReactionContextProviderProps {
	children?: React.ReactElement;
}

export function ReactionContextProvider(
	props: ReactionContextProviderProps
): React.ReactElement {
	const { children = null } = props;
	const { data, error } = useReactionsQuery();

	if (error) {
		console.error(error);
	}

	const reactions = data?.reactions || [];

	return (
		<ReactionContext.Provider value={{ reactions }}>
			{children}
		</ReactionContext.Provider>
	);
}
