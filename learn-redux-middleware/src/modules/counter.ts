import { Dispatch } from 'react';
import {
  createAction,
  ActionType,
  createReducer
} from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => (dispatch: Dispatch<CounterAction>) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000)
}
export const decreaseAsync = () => (dispatch: Dispatch<CounterAction>) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000)
}
export const increaseByAsync = (num: number) => (dispatch: Dispatch<CounterAction>) => {
  setTimeout(() => {
    dispatch(increaseBy(num));
  }, 1000)
}
type CounterState = number;
const initialState = 0;

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,
  [INCREASE_BY]: (state, action) => state + action.payload
})

export default counter;