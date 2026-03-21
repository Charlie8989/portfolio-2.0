"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const CardNav = ({
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content");
      if (contentEl) {
        const prevStyles = {
          visibility: contentEl.style.visibility,
          pointerEvents: contentEl.style.pointerEvents,
          position: contentEl.style.position,
          height: contentEl.style.height,
        };

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        Object.assign(contentEl.style, prevStyles);

        return topBar + contentHeight + padding;
      }
    }

    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease,
        stagger: 0.08,
      },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      tlRef.current.kill();
      const newTl = createTimeline();

      if (newTl) {
        if (isExpanded) {
          newTl.progress(1);
        }
        tlRef.current = newTl;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            onClick={toggleMenu}
            className="group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]"
            style={{ color: menuColor || "#000" }}
          >
            <div
              className={`w-[30px] h-[2px] bg-current transition duration-300 ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <div
              className={`w-[30px] h-[2px] bg-current transition duration-300 ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>

          <div className="flex items-center">
            <Image
              src='/logo.webp'
              alt='logo'
              width={70}
              height={28}
              priority
            />
          </div>

          <button
            type="button"
            className="hidden md:inline-flex rounded-xl px-4 items-center h-full font-medium transition-colors duration-300"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
            }}
          >
            Get Started
          </button>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col gap-2 ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-3`}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              ref={setCardRef(idx)}
              className="flex flex-col gap-2 p-4 rounded-xl min-h-[60px] md:h-full flex-1"
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
            >
              <div className="text-lg md:text-xl">
                {item.label}
              </div>

              <div className="mt-auto flex flex-col gap-1">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    href={lnk.href}
                    className="inline-flex items-center gap-2 hover:opacity-75 transition"
                  >
                    <GoArrowUpRight />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
