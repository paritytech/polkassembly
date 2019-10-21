import * as React from 'react';
import { useLatestPostsQuery } from '../../generated/graphql';
import Mainpage from './MainPage';

const MainPageContainer = () => {
  const { data, error, loading } = useLatestPostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Mainpage data={data} />;
};

export default MainPageContainer;