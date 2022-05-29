import Link from "next/link";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

const Loadbar = ({ text, href }) => {
  const [toggle, setToggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: toggle ? width : 0 });

  return (
    <div className="container font-semibold cursor-pointer hover:text-gray-100 dark:hover:text-gray-100">
      <Link href={href || "/"}>
        <div
          ref={ref}
          className="main liText"
          onMouseEnter={() => setToggle(!toggle)}
          onMouseLeave={() => setToggle(!toggle)}
        >
          <animated.div
            className="fill bg-sky-600 dark:bg-zinc-800"
            style={props}
          />
          <animated.div className={`content rounded `}>
            <a className=" flex items-center p-2 rounded-md font-medium ">
              {text}
            </a>
          </animated.div>
        </div>
      </Link>
    </div>
  );
};

export default Loadbar;
