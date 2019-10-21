import * as React from 'react';
import Login from './Login'
// import { useLatestPostsQuery } from '../../generated/graphql';

const MenuBar = () => {
  // const { data, error, loading } = useLatestPostsQuery();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || !data) {
  //   return <div>ERROR</div>;
  // }

  return <Login />;
};

export default MenuBar;