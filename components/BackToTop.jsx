"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-9998 grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-[#FF6900] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#FF6900] focus-visible:outline-2 focus-visible:outline-offset-4 hover:border-[#FF6900] focus-visible:outline-[#FF6900] sm:bottom-8 sm:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;
