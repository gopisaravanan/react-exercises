import React, { useState, useEffect } from 'react';

const useDebounce = (val, delay) => {
  const [debouncedVal, setDebouncedVal] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => clearTimeout(timer);
  }, [val, delay]);

  return debouncedVal;
};

const Search = () => {
  const [val, setVal] = useState('');
  const debounceVal = useDebounce(val, 1000);

  useEffect(() => {
    console.log(`Api calling - ${debounceVal}`);
  }, [debounceVal]);

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

export default Search;
