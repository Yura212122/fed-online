import React, { useRef, useState } from "react";

function Useref() {
  const [currentValue, setCurrentValue] = useState(0);  
  const previousValue = useRef(0);  
  const handleChange = (event) => {
    const newValue = Number(event.target.value);  
    console.log(`Previous Value: ${previousValue.current}, New Value: ${newValue}`);

    
    previousValue.current = currentValue;
    setCurrentValue(newValue);
  };

  return (
    <div>
      <label htmlFor="rangeInput" className="form-label">
        Choose a value:
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="1000"
        step="1"
        id="rangeInput"
        value={currentValue}
        onChange={handleChange}
      />
      <p>Current Value: {currentValue}</p>
      <p>Previous Value: {previousValue.current}</p>
    </div>
  );
}

export default Useref;
