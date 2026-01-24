import { useEffect, useState } from "react";

const DebouncedInput = () => {
  const [val, setVal] = useState("");
  const [debounceVal, setDebounceVal] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(val);
    }, 1000);

    return () => clearTimeout(timer);
  }, [val]);

  return (
    <div>
      <h3>Debounce Input</h3>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <p>debounced val : {debounceVal} </p>
    </div>
  );
};

export default DebouncedInput;
