import React, { forwardRef } from "react";

const Input = React.memo(
  forwardRef((props, ref) => {
    return (
      <>
        <div>
          <label htmlFor={props.name}>{props.label}</label>
          <span style={{ color: "red" }}>*</span>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            name={props.name}
            ref={ref}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={props.className}
          />
          <div className="input-error">{props?.error}</div>
        </div>
      </>
    );
  }),
);

export default Input;
