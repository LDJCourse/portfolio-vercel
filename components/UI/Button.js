import React from "react";

const Button = ({
  name,
  textColor,
  borderColor,
  handleClick,
  hoverColor,
  children,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`
      ml-2 px-6 py-1 font-bold 
      rounded-full shadow-2xl border-b-4 transition 1s focus:outline-none 
        border-${borderColor} text-${textColor} active:bg-${hoverColor} bg-white
      `}
    >
      {name}
      {children}
    </button>
  );
};

export default Button;
