import { AxiosError } from 'axios';
import React from 'react';
import { PostData, UsersData } from '../modules/sample';

type Props = {
  post: null | PostData | AxiosError | undefined,
  users: null | UsersData[] | AxiosError | undefined,
  loadingPost: boolean,
  loadingUsers: boolean
}
const Sample = ({ loadingPost, loadingUsers, post, users }: Props) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩 중...'}
        {!loadingPost && post && (
          <div>
            <h3>{(post as PostData).title}</h3>
            <h3>{(post as PostData).body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩 중...'}
        {!loadingUsers && users && (
          <ul>
            {(users as UsersData[]).map(user => (
              <li key={user.id}>
                {(user as UsersData).username} ({user.email})
              </li>
            ))}
          </ul>
        )} 
      </section>
    </div>
  );
};

export default Sample;