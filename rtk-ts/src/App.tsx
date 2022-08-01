import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReducerType } from "./store/rootReducer";
import {
  CounterState,
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counterSlice";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const counter = useSelector<ReducerType, CounterState>(
    (state) => state.counterReducer
  );
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  const onSubmit = () => {
    const num = inputRef.current?.value;
    if (num) {
      dispatch(incrementByAmount(+num));
    }
  };
  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <input ref={inputRef} type="number" />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default App;
