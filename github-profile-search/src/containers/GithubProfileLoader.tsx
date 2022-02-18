import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GithubProfileInfo from '../components/GithubProfileInfo';
import GithubUsernameForm from '../components/GithubUsernameForm';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';

const GithubProfileLoader = () => {
  const {data, loading, error} = useSelector(({github}: RootState) => github.userProfile);
  const dispatch = useDispatch();
  
  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };
  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{textAlign: 'center'}}>로딩중 ..</p>}
      {error && <p style={{textAlign: 'center'}}>에러 발생</p>}
      {data && <GithubProfileInfo bio={data.bio} blog={data.blog} name={data.name} thumbnail={data.avatar_url} homeUrl={data.html_url} pulbicRepos={data.public_repos} followers={data.followers} followings={data.following}/>}
    </>
  );
};

export default GithubProfileLoader;