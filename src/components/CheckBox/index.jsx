import React from "react";

const CheckBox = ({ options, name, handleInputChange, selectedValues }) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {options.map((opt) => (
        <div
          key={opt.value}
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <div>
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              onChange={handleInputChange}
              checked={selectedValues?.includes(opt.value)}
            />
          </div>
          <div>{opt.label}</div>
        </div>
      ))}
    </div>
  );
};
export default CheckBox;
