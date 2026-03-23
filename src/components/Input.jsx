import React, { forwardRef } from "react";

const Input = React.memo(
  forwardRef((props, ref) => {
    console.log(props.name, "input is running");

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
          <div className="input-error">{props?.error}</div>
        </div>
      </>
    );
  }),
);

export default Input;
