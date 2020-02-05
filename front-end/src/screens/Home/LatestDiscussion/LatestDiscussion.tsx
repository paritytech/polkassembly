import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@xstyled/styled-components';

import DiscussionCard from '../../../components/DiscussionCard';
import { LatestDiscussionPostQuery } from '../../../generated/graphql';

interface Props {
  className?: string
  data: LatestDiscussionPostQuery
}

const Discussion = ({ className, data }: Props) => {
	if (!data.posts || !data.posts.length) return <div>No discussion found.</div>;

	return (
		<ul className={`${className} discussions__list`}>
			{!!data.posts &&
				data.posts.map(
					(post) => {

						return (!!post?.author?.username && (
							<li key={post.id} className='proposals__item'>
								{<Link to={`/post/${post.id}`}>
									<DiscussionCard
										displayname={post?.author?.name}
										comments={post.comments_aggregate.aggregate?.count
											? post.comments_aggregate.aggregate.count.toString()
											: 'no'}
										created_at={post.created_at}
										title={post.title}
										/* topic={post.topic.name} */
										username={post.author.username}
									/>
								</Link>}
							</li>
						));
					}
				)
			}
		</ul>
	);
};

export default styled(Discussion)`
	li {
		list-style-type: none;
	}

	.proposals__item {
		margin: 0 0 1rem 0;
		a:hover {
			text-decoration: none;
		}
	}
`;