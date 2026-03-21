import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectsCard";
import projects from "@/app/assets/Projects";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="w-[60vw] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel */}
      <div className="overflow-hidden rounded-2xl relative">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {/* Buttons */}
        {/* <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded-full"
        >
          ›
        </button> */}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === index ? "bg-orange-400 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
