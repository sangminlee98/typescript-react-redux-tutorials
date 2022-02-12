import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
  );
};

export default CounterContainer;