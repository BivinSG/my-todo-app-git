import React from "react";

const CheckBox = ({
  options,
  name,
  label,
  handleInputChange,
  selectedValues,
}) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <span style={{ color: "red" }}>*</span>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center",marginBottom: "10px" }}>
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
    </>
  );
};
export default CheckBox;
