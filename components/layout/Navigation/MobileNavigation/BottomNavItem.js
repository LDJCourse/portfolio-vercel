import React from "react";
import { useRouter } from "next/router";

const BottomNavItem = ({ path, icon, name }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(path)}
      className={` ${
        router.pathname == path ? "text-red-400 hover:text-red-400" : ""
      } px-2 flex flex-col items-center font-semibold tracking-wider transition cursor-pointer text-white`}
    >
      <span
        className={` ${
          router.pathname == path ? " text-red-400" : "text-white"
        }  px-1   material-symbols-rounded `}
      >
        {icon}
      </span>
      <h1
        className={`${
          router.pathname == path ? " text-red-400" : "text-white"
        } text-xs`}
      >
        {name}
      </h1>
    </div>
  );
};

export default BottomNavItem;
