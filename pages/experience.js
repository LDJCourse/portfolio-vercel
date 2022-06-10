import React from "react";

import Boxes from "../components/courses/Boxes";
import Timeline from "../components/courses/Timeline";
import Panel from "../components/panel/Panel";

const Experience = () => {
  return (
    <div className="">
      <div className="h-20" />
      <div className=" flex flex-col lg:flex-row items-center justify-around">
        <ExperienceAreas
          title={"Who am i"}
          icon={"account_circle"}
          content={<MeInfo />}
        />
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-around">
        <ExperienceAreas
          title={"Skills"}
          icon={"account_circle"}
          content={<Panel />}
        />
      </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-around">
        <ExperienceAreas
          title={"Personal skills"}
          icon={"account_circle"}
          content={<PersonalSkills />}
        />
      </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-around">
        <ExperienceAreas
          title={"Courses i have studied"}
          icon={"school"}
          content={<Timeline />}
        />
      </div>
    </div>
  );
};

const MeInfo = () => {
  return (
    <div className="mb-10 flex flex-col items-center">
      <h1 className="my-4 text-2xl text-center">
        Hello, my name is Lano Akoyi and i am from Copenhagen
      </h1>
      <p className="sm:w-96 tracking-wider leading-8">
        I am a self-thaught web developer with focus on the MERN-stack. As a
        person i enjoy programming, playing soccer and learning new stuff.
      </p>
    </div>
  );
};

const PersonalSkills = () => {
  return (
    <div className="text-red-400 w-full text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <div className="my-10">
        <span className="p-3 bg-red-400 rounded-full bg-opacity-10 mx-2 text-4xl md:text-5xl material-symbols-rounded">
          star
        </span>
        <h1 className="my-5 text-2xl tracking-wider">Ambitious</h1>
      </div>
      <div className="my-10">
        <span className="p-3 bg-red-400 rounded-full bg-opacity-10 mx-2 text-4xl md:text-5xl material-symbols-rounded">
          bolt
        </span>
        <h1 className="my-5 text-2xl tracking-wider">Fast learner</h1>
      </div>
      <div className="my-10">
        <span className="p-3 bg-red-400 rounded-full bg-opacity-10 mx-2 text-4xl md:text-5xl material-symbols-rounded">
          emoji_objects
        </span>
        <h1 className="my-5 text-2xl tracking-wider">Problem solver</h1>
      </div>
      <div className="my-10">
        <span className="p-3 bg-red-400 rounded-full bg-opacity-10 mx-2 text-4xl md:text-5xl material-symbols-rounded">
          thumb_up
        </span>
        <h1 className="my-5 text-2xl tracking-wider">Motivated</h1>
      </div>
    </div>
  );
};

const ExperienceAreas = ({ title, icon, content }) => {
  return (
    <div className="w-full text-red-400">
      <div className="mb-4 md:mb-14 flex">
        <span className="mx-2 text-4xl md:text-5xl material-symbols-rounded">
          horizontal_rule
        </span>
        <h1 className="text-2xl md:text-3xl  tracking-wider">{title}</h1>
      </div>

      <div className="flex justify-center w-full">{content}</div>
    </div>
  );
};

export default Experience;
