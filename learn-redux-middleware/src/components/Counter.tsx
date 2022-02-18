import React from 'react';

type Props = {
  number: number,
  onIncrease: () => void,
  onDecrease: () => void,
  onIncreaseBy: (num: number) => void
}
const Counter = ({number, onIncrease, onDecrease, onIncreaseBy}: Props) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;