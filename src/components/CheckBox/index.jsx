import React from "react";

const CheckBox = ({ options, name, handleInputChange }) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {options.map((opt) => (
        <div
          key={opt.value}
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <div>{opt.label}</div>
          <div>
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              onChange={handleInputChange}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CheckBox;
