import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { RootState } from '../modules';
import { getPost, getUsers, PostData, UsersData } from '../modules/sample';

type Props = {
  getPost: (id: number) => Promise<void>,
  getUsers: (id: number) => Promise<void>,
  post: PostData | AxiosError | null | undefined,
  users: UsersData[] | AxiosError | null | undefined,
  loadingPost: boolean,
  loadingUsers: boolean
}
const SampleContainer = ({
  post,
  users,
  loadingPost,
  loadingUsers,
  getPost,
  getUsers
}: Props) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  },[getPost, getUsers])
  return (
    <Sample 
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({sample}: RootState) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);