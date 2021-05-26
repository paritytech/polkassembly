// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import debounce from 'lodash/debounce';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Search, SearchProps, SearchResultData } from 'semantic-ui-react';

import DiscussionCard from '../../components/DiscussionCard';
import { useSearchPostsLazyQuery } from '../../generated/graphql';
import getDefaultAddressField from '../../util/getDefaultAddressField';

interface Props {
  className?: string
}

const defaultAddressField = getDefaultAddressField();

const resultRenderer = (post: any) => (
	<DiscussionCard
		defaultAddress={post.author[defaultAddressField]}
		comments={post.comments_aggregate.aggregate?.count
			? post.comments_aggregate.aggregate.count.toString()
			: 'no'}
		created_at={post.created_at}
		last_update={post.last_update?.last_update}
		title={post.title || 'No title'}
		username={post.author.username}
	/>
);

const SearchScreen = ({ className }: Props) => {
	const history = useHistory();

	const [results, setResults] = useState<any[]>([]);
	const [value, setValue] = useState<string>('');
	const [searchPostsQuery, { data, loading }] = useSearchPostsLazyQuery();

	const handleResultSelect = (e: React.MouseEvent<HTMLElement, MouseEvent>, { result }: SearchResultData) => {
		history.push(`/post/${result.id}`);
	};

	const handleSearchChange = (e: React.MouseEvent<HTMLElement, MouseEvent>, { value }: SearchProps) => {
		setValue(value || '');

		if (!value) {
			return;
		}

		searchPostsQuery({
			variables: {
				term: `%${value}%`
			}
		});

		if (data && data.posts && data.posts.length > 0) {
			setResults(data.posts);
		}
	};

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<h3>Search</h3>
					<Search
						fluid
						loading={loading}
						onResultSelect={handleResultSelect}
						onSearchChange={debounce(handleSearchChange, 500, { leading: true })}
						results={results}
						value={value}
						resultRenderer={resultRenderer}
					/>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default SearchScreen;
