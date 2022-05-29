import React from "react";
import { useRouter } from "next/router";

const NavbarItem = ({ path, icon, name }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(path)}
      className={` ${
        router.pathname == path ? "" : " "
      } px-2 flex  items-center font-semibold tracking-wider transition cursor-pointer `}
    >
      <span
        className={` ${
          router.pathname == path ? " text-red-400" : "text-white"
        } hover:text-gray-200 px-1 text-4xl  material-symbols-rounded `}
      >
        {icon}
      </span>
      <h1
        className={` ${
          router.pathname == path ? "block text-red-400" : "hidden"
        } text-sm `}
      >
        {name}
      </h1>
    </div>
  );
};

export default NavbarItem;
