import React from "react";
import Slider from "../Sub/Slider";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy, SiBmw } from "react-icons/si";
import { DiAws } from "react-icons/di";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import Slick from "../Sub/Slick";

const Home = () => {
  return (
    <section>
      <div>
        <Slick />
      </div>
      <div className="bg-gray-200 h-[214px] w-full mt-14 flex flex-col  justify-center items-center">
        <div className=" text-xl font-mono text-gray-700">
          Learn, Grow, Succeed: Your Path to Mastery
        </div>
        <div className="flex  text-gray- 500 w-3/4 justify-between mt-5 text-5xl">
          <CgGoogle /> <CgYoutube /> <SiBmw />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </div>
      </div>
      <div className="flex  flex-col w-auto h-auto ml-24 mt-11">
        <div className="text-4xl font-bold">
          Empower Yourself Through Education: Choose Your Course Today
        </div>
        <div className="mt-8 text-gray-500 text-2xl">
          {" "}
          It's a journey that transcends boundaries, connects cultures, and
          empowers individuals to reach their fullest potential. So let us
          embrace the adventure of learning, seize every opportunity to expand
          our horizons, and never cease in our pursuit of knowledge, for it is
          through education that we truly find ourselves and shape the world
          around us
        </div>
      </div>

    </section>
  );
};

export default Home;
