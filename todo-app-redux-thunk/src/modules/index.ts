import { combineReducers } from 'redux';
import counter from './counter';
import github from './github';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
  github
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;