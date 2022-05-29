import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-red-400">
      <Intro />
    </div>
  );
}

// Intro with image

const Intro = () => {
  return (
    <div className="h-screen relative flex justify-center md:justify-start items-center">
      <div className=" md:ml-12 text-center md:text-left text-xl md:text-3xl">
        <IntroText text={"Hi, I am Lano"} />
        <IntroText text={"I am a self-taught Web Developer"} />
        <IntroText text={"Welcome to my page"} />
      </div>
      <div className="absolute w-full h-full -z-10">
        <div className="">
          <Image className="" src="/img3.jpg" layout="fill" objectFit="" />
          <div className="absolute  custom-bg-gradient  w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const IntroText = ({ text }) => {
  return (
    <h1 className="my-9 md:my-5 transition hover:scale-105 tracking-wider md:text-red-400 text-opacity-30 hover:text-opacity-100">
      {text}
    </h1>
  );
};
