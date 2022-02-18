import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decreaseAsync, increaseAsync, increaseByAsync } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const onIncreaseAsync = () => dispatch(increaseAsync());
  const onDecreaseAsync = () => dispatch(decreaseAsync());
  const onIncreaseByAsync = (num: number) => dispatch(increaseByAsync(num))
  return (
    <Counter number={number} onIncrease={onIncreaseAsync} onDecrease={onDecreaseAsync} onIncreaseBy={onIncreaseByAsync}/>
  );
};

export default CounterContainer;