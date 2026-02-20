import React, { useState, useEffect } from 'react';

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

const Register = () => {
  const [val, setVal] = useState('');
  const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    console.log(debouncedVal);
  }, [debouncedVal]);

  return (
    <>
      <input
        placeholder="search"
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
    </>
  );
};

export default Register;
