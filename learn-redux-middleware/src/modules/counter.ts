import { Dispatch } from 'react';

type Type = 'counter/INCREASE' | 'counter/DECREASE';
type Action = {type: Type};

const INCREASE: Type = 'counter/INCREASE';
const DECREASE: Type = 'counter/DECREASE';

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => (dispatch: Dispatch<any>) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000)
}
export const decreaseAsync = () => (dispatch: Dispatch<any>) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000)
}

const initialState = 0;
const counter = (state = initialState, action: Action) => {
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