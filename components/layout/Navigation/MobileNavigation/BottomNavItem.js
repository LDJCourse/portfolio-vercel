import React from "react";
import { useRouter } from "next/router";

const BottomNavItem = ({ path, icon, name }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(path)}
      className={` ${
        router.pathname == path
          ? "text-red-400 hover:text-red-400"
          : "hover:text-gray-200"
      } px-2 flex flex-col items-center font-semibold tracking-wider transition cursor-pointer text-white`}
    >
      <span className="px-1 material-symbols-rounded">{icon}</span>
      <h1 className={`text-xs`}>{name}</h1>
    </div>
  );
};

export default BottomNavItem;
