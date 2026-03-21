import React from "react";

const About = () => {
  return (
    <div className="mt-[8vh] mx-4 sm:mx-20 lg:mx-40">
      <span className="font-light text-zinc-400 text-lg sm:text-xl">
        01. About
      </span>

      <div className="bg-[#111]/10 w-full rounded-lg flex flex-col sm:flex-row mt-5">
        <div className="p-4 flex justify-center">
          <img
            src="/ayush side photo.jpeg"
            className="rounded-lg sm:max-w-none sm:h-[35vh] object-cover"
            alt=""
          />
        </div>

        <div className="text-black capitalize text-base sm:my-auto sm:text-2xl  p-4">
        I'm a <span className="text-[#FF6900] font-bold"> full-stack developer </span> focused on building scalable, high-performance web applications with clean architecture and intuitive user interfaces. I enjoy developing fast, responsive frontends using React and Next.js while designing efficient and reliable backend systems.<br/> My focus is on writing maintainable code and delivering seamless, user-friendly digital experiences.
        </div>
      </div>
    </div>
  );
};

export default About;
