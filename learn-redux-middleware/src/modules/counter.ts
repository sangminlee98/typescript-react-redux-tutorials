type Type = 'counter/INCREASE' | 'counter/DECREASE';
type Action = {type: Type};

const INCREASE: Type = 'counter/INCREASE';
const DECREASE: Type = 'counter/DECREASE';

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

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