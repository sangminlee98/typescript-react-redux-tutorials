import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decreaseAsync, increaseAsync } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const onIncreaseAsync = () => dispatch(increaseAsync());
  const onDecreaseAsync = () => dispatch(decreaseAsync());
  return (
    <Counter number={number} onIncrease={onIncreaseAsync} onDecrease={onDecreaseAsync}/>
  );
};

export default CounterContainer;