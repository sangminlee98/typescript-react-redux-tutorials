import { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'react';
import { PostAction, PostType, UserType, UsersAction } from './../modules/sample';
type Type = 'sample/GET_POST' | 'sample/GET_USERS';
type Request = (id: number) => Promise<AxiosResponse<any, any>>

export default function createRequestThunk(type: Type, request: Request) {
  const SUCCESS: PostType | UserType = `${type}_SUCCESS`;
  const FAILURE: PostType | UserType = `${type}_FAILURE`;
  return (params: number) => async (dispatch: Dispatch<PostAction | UsersAction>) => {
    dispatch({type});
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e as AxiosError,
        error: true
      });
      throw e;
    }
  }
}