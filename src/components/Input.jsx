import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        name={props?.name}
        ref={props?.ref}
        type={props?.type}
        value={props?.value}
        onChange={props?.onChange}
        placeholder={props?.placeholder}
        error={props?.error}
        className={props?.className}
      />
    </div>
  );
};

export default Input;
