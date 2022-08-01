import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
const reducer = combineReducers({
  counterReducer
})

export type ReducerType= ReturnType<typeof reducer>
export default reducer;