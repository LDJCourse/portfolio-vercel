import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="my-2 border-b border-t border-red-400  cursor-default">
      <div
        className="text-right text-black  bg-red-400 hover:bg-red-500"
        style={fillerStyles}
      >
        <span className="p-3 font-bold">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
