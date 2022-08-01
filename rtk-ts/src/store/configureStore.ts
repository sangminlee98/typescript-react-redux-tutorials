import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './rootReducer';

const middleware = [logger];

const store = configureStore({
  reducer,
  middleware
})

export type AppDispatch = typeof store.dispatch;
export default store;