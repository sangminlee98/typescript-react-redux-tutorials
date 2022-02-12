import React from 'react';

type Props = {
  number: number,
  onIncrease: () => void,
  onDecrease: () => void,
}
const Counter = ({number, onIncrease, onDecrease}: Props) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;