"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] 
        transition-transform duration-150 ease-out
        ${isHovering ? " bg-black" : "bg-[#FF6900]"}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,

        width: "16px",
        height: "16px",
        borderRadius: "50%",
      }}
    />
  );
}
