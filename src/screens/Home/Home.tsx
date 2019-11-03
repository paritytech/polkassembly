import * as React from 'react';
import { LatestPostsQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';

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
          (post) =>
            !!post && (
              <li key={post.id} className={`${className}__item`}>
                <Link to={`/post/${post.id}`}>
                  {post.author.username} ({post.creation_date}): {post.title}
                </Link>
              </li>
            ),
        )}
    </ul>
  </div>
);

export default Home;