import * as React from 'react';
import { LatestPostsQuery } from '../../generated/graphql';

interface Props {
  data: LatestPostsQuery;
}

const className = 'Home';

const Home: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Latest posts</h3>
    <ul className={`${className}__list`}>
      {!!data.posts &&
        data.posts.map(
          (post, i) =>
            !!post && (
              <li key={i} className={`${className}__item`}>
                {post.author.username} ({post.creation_date}): {post.content}
              </li>
            ),
        )}
    </ul>
  </div>
);

export default Home;