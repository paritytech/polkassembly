import * as React from 'react';
import { useParams } from 'react-router-dom';
import { usePostAndRepliesQuery } from '../../generated/graphql';
import Post from './Post';

const PostContainer = () => {
  const { id } = useParams();
  // cast id as a number or 0
  const idNumber = Number(id) || 0;
  const { data, error, loading } = usePostAndRepliesQuery({ variables: { 'id': idNumber } });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Post data={data} />;
 
};

export default PostContainer;