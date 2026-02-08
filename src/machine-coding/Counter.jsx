import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count === 0) {
      alert('Warning count value is already 0');
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h2>Count - {count} </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
    </>
  );
};

export default Counter;
