import { Dispatch } from 'react';

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});


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

const initialState = 0;
const counter = (state = initialState, action: CounterAction) => {
  switch(action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

export default counter;