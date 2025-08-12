import { Heading } from "@/components";
import { enjoyGamesSliderData } from "@/constants";
import React from "react";

const EnjoyGames = () => {
  return (
    <section className="py-8 md:py-12 relative">
      <div className="max-w-6xl sm:px-4 mx-auto">
        <Heading>6+ Game Mode</Heading>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-3"
          data-aos="fade-up"
        >
          {enjoyGamesSliderData.map((item, index) => (
            <div
              key={index}
              className="w-full py-4 sm:py-7 text-center border border-white group bg-gradient-to-b from-light-blue-100 to-light-blue-200"
            >
              <div className="block size-28 sm:size-32 mx-auto rounded-full object-cover border-2 border-primary p-2 shadow">
                <img
                  src={item.videoPoster}
                  className="size-full group-hover:scale-110 transition-all duration-300 rounded-full"
                />
              </div>
              <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                portfolio
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnjoyGames;
