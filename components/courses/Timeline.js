import React from "react";

// Components
import ProgressBar from "../UI/ProgressBar";

import data from "./data";

const Timeline = () => {
  const renderedData = data.map((data) => (
    <TimelineElement
      key={data.id}
      title={data.title}
      author={data.author}
      description={data.description}
      date={data.date}
      completed={data.completed}
    />
  ));

  return (
    <div className="w-full flex flex-col sm:justify-around ">
      <h1 className="py-4 px-3 text-center text-xl sm:text-2xl md:text-4xl text-red-400 ">
        Here is a selection of the courses i have studied
      </h1>
      <div className="py-3 flex  overflow-x-scroll  overflow-hidden">
        {renderedData}
      </div>
    </div>
  );
};

const TimelineElement = ({ title, author, description, date, completed }) => {
  return (
    <div className="w-9/12 md:w-4/12 mx-5 flex flex-col justify-between  h-32 rounded shrink-0 timeline-element text-red-400   shadow shadow-red-200 ">
      <h1 className="px-2 font-semibold text-xl truncate">{title}</h1>
      {/* <ProgressBar completed={completed} /> */}
      <div className="p-1 flex justify-between items-end tracking-wide  text-black bg-red-400">
        <h1 className="text-sm font-bold">{author}</h1>
        <div className="text-xs italic font-semibold">
          <h1>{description}</h1>
          <h1>{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
// import React from "react";

// // Components
// import ProgressBar from "../UI/ProgressBar";

// import data from "./data";

// const Timeline = () => {
//   const renderedData = data.map((data) => (
//     <TimelineElement
//       key={data.id}
//       title={data.title}
//       author={data.author}
//       description={data.description}
//       date={data.date}
//       completed={data.completed}
//     />
//   ));

//   return (
//     <div className="w-10/12 md:w-7/12 lg:6/12  mx-auto relative">
//       <h1 className="text-3xl text-center font-bold text-sky-700 dark:text-zinc-200">
//         Timeline of courses
//       </h1>
//       <div className="border-l-2 mt-10">{renderedData}</div>
//     </div>
//   );
// };

// const TimelineElement = ({ title, author, description, date, completed }) => {
//   return (
//     <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex  px-6 py-4  rounded-lg mb-10 flex-col md:flex-row space-y-4 md:space-y-0 bg-gradient-to-r from-sky-300 to-sky-600 dark:from-zinc-500 dark:to-zinc-700 text-white">
//       <div className="w-5 h-5 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0 bg-sky-700 dark:bg-zinc-800"></div>

//       <div className="w-10 h-1 absolute -left-10 z-0 bg-blue-300 dark:bg-zinc-800" />

//       <div className="w-full">
//         <h1 className="font-bold">{title}</h1>
//         <h1 className="">
//           <span className="font-bold">Start:</span> {date}
//         </h1>

//         <h3>{author}</h3>
//         <h3>{description}</h3>
//         <ProgressBar completed={completed} />
//       </div>
//     </div>
//   );
// };

// export default Timeline;
