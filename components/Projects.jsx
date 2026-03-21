import React from "react";
import Carousel from "./Carousel";
import Stack from "./Stack";

const Projects = () => {
  return (
    <div className="mx-4 sm:mx-20 lg:mx-40 h-[70vh] w-[90vw]">
      <div className="flex flex-col gap-2">
        <div className="font-light text-zinc-400 text-lg sm:text-xl">
          02. Projects
        </div>

        <div className="text-black w-full max-h-full border border-gray-200 p-10 rounded-sm">
          <div className="hidden md:block">
            <Carousel />
          </div>

          <div className="md:hidden ">
            <Stack/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
