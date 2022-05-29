import React from "react";

const BlurryBackground = ({ children }) => {
  return (
    <div className="  flex items-center justify-center ">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 left-8 sm:-left-4 w-52 h-52 sm:w-72 sm:h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-lg opacity-5 animate-blob"></div>
        <div className="absolute top-0 right-20 sm:-right-4 w-52 h-52 sm:w-72 sm:h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-lg opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-52 h-52 sm:w-72 sm:h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-lg opacity-5 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default BlurryBackground;
