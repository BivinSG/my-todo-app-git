import React from "react";

const Dropdown = ({
  name,
  value,
  label,
  Dropdown,
  options,
  handleInputChange,
}) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <select name={name} id={name} onChange={handleInputChange}>
        <option value="">Select Your Course</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
