// import { iconStarEmoji } from "@/assets/images";
import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h2
      className={`text-3xl font-sans md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-[#f1b300] to-[#f1b300] leading-tight tracking-[-2px] font-semibold text-center mb-5 md:mb-8 ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
