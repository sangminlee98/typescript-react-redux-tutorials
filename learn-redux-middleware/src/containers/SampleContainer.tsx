import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../components/Sample';
import { RootState } from '../modules';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = () => {
  const {post, users, loadingPost, loadingUsers} = useSelector(({sample}: RootState) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS
  }));
  const dispatch = useDispatch();
  const onGetPost = useCallback((id: number) => dispatch(getPost(id)),[dispatch]);
  const onGetUsers = useCallback((id: number) => dispatch(getUsers(id)),[dispatch]);
  useEffect(() => {
    onGetPost(3);
    onGetUsers(1);
  },[onGetPost, onGetUsers])
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