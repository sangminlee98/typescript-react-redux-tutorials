import { combineReducers } from 'redux';
import github from './github';

const rootReducer = combineReducers({
  github
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;