import React, { useEffect } from "react";

// Hooks
import useToggle from "../hooks/useToggle";

export const PanelBox = ({ title, color, children }) => {
  // Set state to false if true
  // useEffect(() => {
  //   if (textHover) {
  //     const timer = setTimeout(() => {
  //       setTextHover(false);
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [textHover]);

  // // Frontend  hover
  // const handleTextHover = () => {
  //   setTextHover(!textHover);
  // };

  return (
    <div className="p-2 m-2 w-80 md:border-l-2 md:border-b-0 border-b-2 border-red-400  ">
      <div className="">
        <PanelBoxHeader title={title} />
      </div>
      <div className={`mb-5 p-4 font-bold text-xl text-red-400`}>
        <ul className="divide-y divide-red-400 cursor-default">{children}</ul>
      </div>
    </div>
  );
};

const PanelBoxHeader = ({ title, textHover }) => {
  return (
    <h1
      className={`font-mono font-bold text-center text-2xl text-red-400 cursor-default`}
    >
      {title}
    </h1>
  );
};
