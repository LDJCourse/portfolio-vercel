import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "react-spring";

// Components
import ProgressBar from "../UI/ProgressBar";

import data from "./data";

const Boxes = () => {
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "#4361ee" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "#dee2e6" : "#4361ee",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 200 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="hidden xl:flex p-3 h-full w-full justify-center items-center ">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="box-container "
        onClick={() => setOpen(!open)}
      >
        {transition((style, item) => (
          <animated.div
            key={item.id}
            className="h-full rounded-lg bg-gradient-to-r from-sky-300 to-sky-600 dark:from-zinc-400 dark:to-zinc-800"
            style={{ ...style }}
          >
            <div className="h-full flex flex-col justify-between text-gray-50">
              <div className="m-2">
                <h1 className="text-lg pb-2">{item.title}</h1>
                <h1 className=" italic">{item.author}</h1>
              </div>
              <div>
                <ProgressBar completed={item.completed} />
              </div>
              <div className="mx-2 flex justify-between items-center">
                <h1 className="text-xs pb-2 text-center ">
                  {item.description}
                </h1>
                <h1 className="text-xs italic">{item.date}</h1>
              </div>
            </div>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Boxes;
