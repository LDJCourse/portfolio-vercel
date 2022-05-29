import React from "react";

import Boxes from "../components/courses/Boxes";
import Timeline from "../components/courses/Timeline";
import Panel from "../components/panel/Panel";

const Experience = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="text-red-400 text-2xl">
          <h1>Experience</h1>
        </div>
        <Panel />
      </div>

      <Timeline />
      <Boxes />
    </div>
  );
};

export default Experience;
