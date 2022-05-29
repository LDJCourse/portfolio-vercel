import React, { useEffect } from "react";

// Hooks
import useToggle from "../hooks/useToggle";

export const PanelBox = ({ title, color, children }) => {
  const [textHover, setTextHover] = useToggle(false);

  // Set state to false if true
  useEffect(() => {
    if (textHover) {
      const timer = setTimeout(() => {
        setTextHover(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [textHover]);

  // Frontend  hover
  const handleTextHover = () => {
    setTextHover(!textHover);
  };

  return (
    <div className="p-2 m-4 w-80 lg:border-l-2 lg:border-t-0 border-t border-red-400  ">
      <div className="">
        <PanelBoxHeader textHover={textHover} title={title} />
      </div>
      <div
        onMouseEnter={handleTextHover}
        className={` mb-5 p-4 font-bold text-xl text-red-400 `}
      >
        <ul className="divide-y-2 divide-red-400  cursor-default">
          {children}
        </ul>
      </div>
    </div>
  );
};

const PanelBoxHeader = ({ title, textHover }) => {
  return (
    <h1
      className={` font-mono font-bold text-center text-2xl text-red-400   cursor-default `}
    >
      {title}
    </h1>
  );
};
