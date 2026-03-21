import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/app/assets/Projects";
import {useEffect } from "react";

const Stack = () => {
  const [cards, setCards] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe("right");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSwipe = (dir) => {
    if (dir === "left" || dir === "right") {
      setCards((prev) => {
        const newArr = [...prev];
        const first = newArr.shift(); // remove top
        newArr.push(first); // send to back
        return newArr;
      });
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }
  };

  return (
    <div className="w-full md:hidden">
      {/* cards */}
      <div className="relative h-[600px]">
        <AnimatePresence>
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.id}
              className="absolute w-full h-full rounded-2xl overflow-hidden bg-zinc-900"
              style={{ zIndex: 10 - i }}
              animate={{
                scale: 1 - i * 0.05,
                y: i * 10,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 80) handleSwipe("right");
                if (info.offset.x < -80) handleSwipe("left");
              }}
              whileTap={{ scale: 1.05 }}
            >
              <a href={card.link} target="_blank">
                <img
                  src={card.cardImage}
                  className="w-full h-full object-cover object-top"
                />
                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* text content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-zinc-300 line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Stack;
