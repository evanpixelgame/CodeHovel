import React, { useState, useEffect } from "react";

const UnitAppender = ({ value = "", onChange }) => {
  // Separate the numeric value and unit from the incoming value
  const initialNumericValue = value.replace(/[^\d.-]/g, "") || "";
  const initialUnit = value.replace(/[^a-z%]/g, "") || "px"; // Default unit

  // Initialize state variables with initial values based on props
  const [numericValue, setNumericValue] = useState(initialNumericValue);
  const [unit, setUnit] = useState(initialUnit);

  // Event handler for numeric input change
  const handleNumericChange = (event) => {
    const { value: newValue } = event.target;
    setNumericValue(newValue); // Update numericValue state
    onChange(newValue + unit); // Call onChange with combined numeric value and unit
  };

  // Event handler for unit selection change
  const handleUnitChange = (event) => {
    const { value: newUnit } = event.target;
    setUnit(newUnit); // Update unit state
    onChange(numericValue + newUnit); // Call onChange with combined numeric value and new unit
  };

  return (
    <div className="unit-appender">
      <input
        type="number"
        value={numericValue}
        onChange={handleNumericChange}
        className="input-field"
      />
      <select
        value={unit}
        onChange={handleUnitChange}
        className="unit-selector"
      >
        <option value="px">px</option>
        <option value="%">%</option>
        <option value="em">em</option>
        <option value="rem">rem</option>
        <option value="vw">vw</option>
        <option value="vh">vh</option>
        {/* Add more options as needed */}
      </select>
      {/*<p className="result">Result: {numericValue + unit}</p>*/}
    </div>
  );
};

export default UnitAppender;
