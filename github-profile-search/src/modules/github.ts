import { RootState } from './index';
import { getUserProfile, GithubProfile } from './../api/github';
import { createAsyncAction, ActionType, createReducer } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();

export type GithubAction = ActionType<typeof getUserProfileAsync>
export type GithubState = {
  userProfile: {
    loading: boolean,
    error: Error | null,
    data: GithubProfile | null
  }
}

export function getUserProfileThunk(username: string): ThunkAction<Promise<void>, RootState, null, GithubAction> {
  return async dispatch => {
    const {request, success, failure} = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e as AxiosError));
    }
  }
}

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null
  }
};

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: state => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default github;
