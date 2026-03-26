import React from "react";

const RadioButton = ({ label, name, type, options, handleInputChange }) => {
  return (
    <>
      <div>
        <span>{label}</span>
        <span style={{ color: "red" }}>*</span>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {options.map((opt) => (
          <div
            key={opt.value}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <div>
              <input
                id={opt.value}
                name={name}
                value={opt.value}
                type="radio"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor={opt.value}>{opt.label}</label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioButton;
