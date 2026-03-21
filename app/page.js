import CardNav from "@/components/Cardnav";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";
import { Skiper39 } from "@/components/ui/skiper-ui/skiper39";
import React from "react";

const page = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <CardNav
        items={items}
        baseColor="#fff"
        menuColor="#111"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="light"
      />
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-0">
          <Skiper19 />
        </div>

        <div className="relative z-10">
          <Skiper31 />
        </div>
      </div>
    </div>
  );
};

export default page;
