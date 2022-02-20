import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../components/Sample';
import { RootState } from '../modules';
import { getPostThunk, getUsersThunk } from '../modules/sample';

const SampleContainer = () => {
  const {post, users, loadingPost, loadingUsers} = useSelector(({sample}: RootState) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostThunk(5));
    dispatch(getUsersThunk());
  },[dispatch])
  return (
    <Sample 
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default React.memo(SampleContainer);