import React from "react";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="text-sm rounded-lg py-1 px-2 focus:outline-none text-black"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
