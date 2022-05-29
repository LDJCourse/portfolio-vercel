import React from "react";
import axios from "axios";

// Components
import TodoApp from "../components/todolist/TodoApp";
import CalculatorApp from "../components/calculator/CalculatorApp";
import CryptoTable from "../components/crypto/CryptoTable";
import BlurryBackground from "../components/bganimation/BlurryBackground";

const Projects = ({ coins }) => {
  return (
    <div className="text-red-400">
      <div className="project-title-height flex items-center justify-center ">
        <h1 className="p-12 text-center w-10/12 md:w-7/12 lg:w-5/12 text-2xl md:text-3xl tracking-wider shadow-lg shadow-red-400 bg-neutral-900">
          In this section you can find a collection of the projects i have
          created.
        </h1>
      </div>

      {/* TodoApp */}

      <div className="height flex flex-col justify-around items-center">
        <div className="lg:ml-14 xl:ml-32 -z-10 lg:self-start">
          <BlurryBackground>
            <DescriptionBox
              title={"To do list app"}
              description={
                "This is a to do list where you can create, edit, and delete your todos."
              }
            />
          </BlurryBackground>
        </div>

        <div className="lg:mr-14 xl:mr-32 lg:self-end">
          <TodoApp />
        </div>
      </div>

      {/* Calculator */}

      <div className="height flex flex-col justify-around items-center">
        <div className="lg:ml-14 xl:ml-32 -z-10 lg:self-start">
          <BlurryBackground>
            <DescriptionBox
              title={"Calculator app"}
              description={
                "This is a calculator i have created with react hooks"
              }
            />
          </BlurryBackground>
        </div>

        <div className="lg:mr-14 xl:mr-32 lg:self-end">
          <CalculatorApp />
        </div>
      </div>

      {/* Crypto */}
      <div className="height flex flex-col justify-around items-center">
        <div className="lg:ml-14 xl:ml-32 -z-10 lg:self-start">
          <BlurryBackground>
            <DescriptionBox
              title={"Crypto coin market app"}
              description={
                "This is a table of the current market. I have used a api from coin gecko to get the data."
              }
            />
          </BlurryBackground>
        </div>

        <div className="lg:mr-14 xl:mr-32 lg:self-end">
          <CryptoTable currencies={coins} />
        </div>
      </div>
    </div>
  );
};

const DescriptionBox = ({ title, description }) => {
  return (
    <div className="my-14 rounded-lg bg-neutral-900 bg-opacity-60 tracking-wider">
      <h1 className="p-3 text-center text-xl font-semibold">{title}</h1>
      <div className="p-1 bg-neutral-900 ">
        <h1 className="p-2">{description}</h1>
      </div>
    </div>
  );
};

const ProjectContainer = ({ children }) => {
  return <div></div>;
};

Projects.getInitialProps = async ({ query }) => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  const res = await axios.get(url);
  const { data } = res;
  return { ...query, coins: data };
};

export default Projects;
