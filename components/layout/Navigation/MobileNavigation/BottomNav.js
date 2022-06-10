import React from "react";
import BottomNavItem from "./BottomNavItem";

const BottomNav = () => {
  return (
    <div className="md:hidden z-20 h-16 fixed w-full bottom-0 flex items-center justify-between shadow-xl  dark-bg-color">
      <BottomNavItem path={"/"} icon={"home"} name={"Home"} />
      <NavbarItem path={"/experience"} icon={"person"} name={"About me"} />
      <BottomNavItem path={"/projects"} icon={"sort"} name={"Projects"} />
      <BottomNavItem
        path={"/games"}
        icon={"stadia_controller"}
        name={"Games"}
      />
    </div>
  );
};

export default BottomNav;
