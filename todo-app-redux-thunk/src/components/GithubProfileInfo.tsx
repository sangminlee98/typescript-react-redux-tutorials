import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string | null,
  thumbnail: string,
  bio: string | null,
  blog: string
}
const GithubProfileInfo = ({name, thumbnail, bio, blog}: GithubProfileInfoProps) => {
  return (
    <div className='GithubProfileInfo'>
      <div className='profile-head'>
        <img src={thumbnail} alt="user thumbnail"/>
        <div className='name'>{name}</div>
      </div>
      <p>{bio}</p>
      <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
    </div>
  );
};

export default GithubProfileInfo;