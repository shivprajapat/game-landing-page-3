import { Heading } from "@/components";
import { enjoyGamesSliderData } from "@/constants";
import React from "react";

const EnjoyGames = () => {
  return (
    <section className="py-8 md:py-12 relative">
      <div className="max-w-4xl sm:px-4 mx-auto">
        <Heading>6+ Game Mode</Heading>
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
          data-aos="fade-up"
        >
          {enjoyGamesSliderData.map((item, index) => {
            const isSpecial = index === 1 || index === 4;

            return (
              <div
                key={index}
                className={`w-full p-2 sm:p-3 rounded-lg sm:rounded-xl text-center group h-fit bg-white shadow flex flex-col ${
                  isSpecial ? "mt-6" : ""
                }`}
              >
                <div
                  className={`h-40 w-full ${
                    isSpecial ? "sm:h-80" : "sm:h-72"
                  } overflow-hidden`}
                >
                  <img
                    src={item.videoPoster}
                    className="size-full group-hover:scale-110 transition-all duration-300 rounded-lg sm:rounded-xl"
                  />
                </div>
                <span className="pt-2 text-sm font-medium capitalize font-body text-black lg:text-lg md:text-base">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnjoyGames;
