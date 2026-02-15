import React, { useState, useEffect } from 'react';
import './style.css';

const useDebounce = (val, delay) => {
  const [debounceVal, setDebounceVal] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(val);
    }, delay);

    return () => clearTimeout(timer);
  }, [val, delay]);

  return debounceVal;
};

export default function App() {
  const [val, setVal] = useState('');
  const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    console.log(`api calling ${debouncedVal}`);
  }, [debouncedVal]);

  return (
    <div>
      <input
        placeholder="search"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
}
