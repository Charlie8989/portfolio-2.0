import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-[8vh] mx-4 sm:mx-20">
      <span className="font-light text-zinc-400 text-lg sm:text-xl">
        01. About
      </span>

      <div className="bg-[#111]/10 w-full rounded-lg flex flex-col sm:flex-row sm:items-center mt-5">
        <div className="p-4 sm:p-5 flex justify-center sm:shrink-0">
          <Image
            src="/ayush side photo.webp"
            alt="Ayush Sahu portrait"
            width={340}
            height={340}
            className="rounded-lg w-full max-w-[340px] aspect-square object-cover sm:w-[340px] sm:h-[340px]"
          />
        </div>

        <div className="text-black capitalize text-base sm:text-2xl p-4 sm:p-5 sm:pl-6">
        I&apos;m a <span className="text-[#FF6900] font-bold"> full-stack developer </span> focused on building scalable, high-performance web applications with clean architecture and intuitive user interfaces. I enjoy developing fast, responsive frontends using React and Next.js while designing efficient and reliable backend systems.<br/> My focus is on writing maintainable code and delivering seamless, user-friendly digital experiences.
        </div>
      </div>
    </div>
  );
};

export default About;
