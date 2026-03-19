import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  console.log("input is running");
  return (
    <>
      <div>
        <input
          name={props.name}
          ref={ref}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={props.className}
        />
      </div>
      <div>{props.error}</div>
    </>
  );
});

export default Input;
