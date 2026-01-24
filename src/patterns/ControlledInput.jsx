import { useState } from "react";

const ControlledInput = () => {
  const [val, setVal] = useState("");

  const handleOnChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <h3>Controlled Input</h3>
      <input value={val} onChange={handleOnChange} />
    </div>
  );
};

export default ControlledInput;
