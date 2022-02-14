import { AxiosError } from 'axios';
import { Dispatch } from 'react';
import * as api from '../lib/api';

export type PostData = {
  userId?: string,
  id?: number,
  title?: string,
  body?: string,
}
export type UsersData = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {},
  phone: string,
  website: string,
  company: {}
}
type State = {
  loading: {
    GET_POST: boolean,
    GET_USERS: boolean
  },
  post: null | PostData | undefined,
  users: null | UsersData[] | undefined
}
type PostType = 'sample/GET_POST' | 'sample/GET_POST_SUCCESS' | 'sample/GET_POST_FAILURE';
type UserType = 'sample/GET_USERS' | 'sample/GET_USERS_SUCCESS' | 'sample/GET_USERS_FAILURE';
export type PostAction = {type: PostType, payload?: PostData | AxiosError, error?: boolean};
export type UsersAction = {type: UserType, payload?: UsersData[] | AxiosError, error?: boolean};

const GET_POST: PostType = 'sample/GET_POST';
const GET_POST_SUCCESS: PostType = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE: PostType = 'sample/GET_POST_FAILURE';


const GET_USERS: UserType = 'sample/GET_USERS';
const GET_USERS_SUCCESS: UserType = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE: UserType = 'sample/GET_USERS_FAILURE';


export const getPost = (id: number) => async (dispatch: Dispatch<PostAction>) => {
  dispatch({type: GET_POST});
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data
    })
  } catch(e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e as AxiosError,
      error: true
    });
    throw e;
  }
}

export const getUsers = (id: number) => async (dispatch: Dispatch<UsersAction>) => {
  dispatch({type: GET_USERS});
  try {
    const response = await api.getUsers(id);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data
    })
  } catch(e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e as AxiosError,
      error: true,
    });
    throw e;
  }
};

const initialState: State = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  post: null,
  users: null
}

const sample = (state = initialState, action: PostAction | UsersAction ): State => {
  switch(action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true
        }
      }
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false
        },
        post: action.payload as PostData
      }
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false
        },
      }
    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true
        }
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false
        },
        users: action.payload as UsersData[]
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false
        }
      }
    default: return state
  }
}

export default sample