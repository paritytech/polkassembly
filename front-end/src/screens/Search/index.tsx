import React, { useState } from 'react';
import { Container, Grid, Search, SearchProps, SearchResultData } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

import DiscussionCard from '../../components/DiscussionCard';
import { useSearchPostsLazyQuery } from '../../generated/graphql';

interface Props {
  className?: string
}

const resultRenderer = (post: any) => (
	<DiscussionCard
		displayname={post.displayname}
		username={post.username}
		created_at={post.created_at}
		title={post.title}
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
			setResults(data.posts.map(post => ({
				created_at: post.created_at,
				displayname: post.author?.name,
				id: post.id,
				title: post.title,
				username: post.author?.username
			})));
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
