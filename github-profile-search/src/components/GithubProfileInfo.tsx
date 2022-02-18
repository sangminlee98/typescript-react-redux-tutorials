import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string | null,
  thumbnail: string,
  bio: string | null,
  blog: string,
  homeUrl: string,
  pulbicRepos: number,
  followers: number,
  followings: number
}
const GithubProfileInfo = ({name, thumbnail, bio, blog, homeUrl, pulbicRepos, followers, followings}: GithubProfileInfoProps) => {
  return (
    <div className='GithubProfileInfo'>
      <div className='profile-head'>
        <img src={thumbnail} alt="user thumbnail"/>
        <div className='name'>{name}</div>
      </div>
      <p>{bio}</p>
      <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
      <div>주소: <a href={homeUrl}>{homeUrl}</a></div>
      <div>Public Repository 수 : {pulbicRepos}</div>
      <div>팔로워 수 : {followers}</div>
      <div>팔로잉 수 : {followings}</div>
    </div>
  );
};

export default GithubProfileInfo;