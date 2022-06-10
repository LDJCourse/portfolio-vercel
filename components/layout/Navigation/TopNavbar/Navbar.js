import React from "react";

// Components
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="hidden sm:flex fixed w-full z-10 h-14 items-center justify-between dark-bg-color">
      <div>
        <NavbarItem path={"/"} icon={"home"} name={"Home"} />
      </div>
      <div className="flex justify-between">
        {/* <NavbarItem path={"/about"} icon={"person"} name={"About"} /> */}
        <NavbarItem path={"/experience"} icon={"person"} name={"About me"} />
        <NavbarItem path={"/projects"} icon={"sort"} name={"Projects"} />
        <NavbarItem path={"/games"} icon={"stadia_controller"} name={"Games"} />
      </div>
    </nav>
  );
};

export default Navbar;
