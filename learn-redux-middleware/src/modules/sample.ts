import { RootState } from './index';
import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { ActionType, createAsyncAction, createReducer } from 'typesafe-actions';
import { PostData, UsersData, getPost, getUsers } from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
)<undefined, PostData, AxiosError>();

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getUsersAsync = createAsyncAction(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
)<undefined, UsersData[], AxiosError>();

export type PostAction = ActionType<typeof getPostAsync>;
export type UsersAction = ActionType<typeof getUsersAsync>;

export const getPostThunk = (id: number): ThunkAction<Promise<void>, RootState, null, PostAction> => {
  return async dispatch => {
    const {request, success, failure} = getPostAsync;
    dispatch(request());
    try {
      const postData = await getPost(id);
      dispatch(success(postData));
    } catch (e) {
      dispatch(failure(e as AxiosError));
    }
  }
}

export const getUsersThunk = (): ThunkAction<Promise<void>, RootState, null, UsersAction> => {
  return async dispatch => {
    const {request, success, failure} = getUsersAsync;
    dispatch(request());
    try {
      const usersData = await getUsers();
      dispatch(success(usersData));
    } catch (e) {
      dispatch(failure(e as AxiosError));
    }
  }
}

type State = {
  loading: {
    GET_POST: boolean,
    GET_USERS: boolean
  },
  post: null | PostData | undefined,
  users: null | UsersData[] | undefined
}

const initialState: State = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  post: null,
  users: null
}

const sample = createReducer<State, PostAction | UsersAction>(initialState, {
  [GET_POST]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true
    }
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false
    },
    post: action.payload
  }),
  [GET_POST_FAILURE]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false
    }
  }),
  [GET_USERS]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: true
    }
  }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false
    },
    users: action.payload
  }),
  [GET_USERS_FAILURE]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false
    }
  })
});

export default sample