import { ActionType, createAction, createReducer } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();

type CounterAction = ActionType<typeof increase | typeof decrease>;
type CounterState = {
  number: number
}
const initialState = {
  number: 0,
}

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({number: state.number + 1}),
  [DECREASE]: state => ({number: state.number - 1})
});

export default counter