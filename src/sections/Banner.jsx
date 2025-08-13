import { ImageCertificate } from "@/assets/images";
import Typewriter from "typewriter-effect";
import React from "react";
import Tilt from "@/components/Tilt";

const Banner = () => {
  return (
    <section id="home" className="pt-24 sm:pt-16">
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-auto md:flex-1/2">
            <div className="pt-6 lg:pt-16">
              <div
                className="bg-primary -rotate-3 shadow px-4 py-2 w-fit rounded-sm p-[1px] mb-5"
                data-aos="fade-up"
              >
                <span className="text-white uppercase text-base sm:text-xl font-medium">
                  PLAY GAMES
                </span>
              </div>
              <div className="mb-5 md:mb-10" data-aos="fade-up">
                <h1 className="text-5xl md:leading-normal xl:text-6xl italic text-primary font-extrabold mb-5 heading">
                  Play Cash Games
                </h1>
              </div>
              <div>
                <ul
                  className="flex flex-row sm:gap-[8px] gap-4 justify-start items-stretch"
                  data-aos="fade-up"
                >
                  <li className="text-center flex items-center">
                    <div>
                      <span className="text-sm sm:text-lg font-bold text-primary block">
                        ₹25 Cr+
                      </span>
                      <span className="text-xs sm:text-base font-normal text-white">
                        Daily Winnings
                      </span>
                    </div>
                    <svg
                      className="mx-2 sm:mx-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="45"
                      viewBox="0 0 2 45"
                      fill="none"
                    >
                      <path
                        d="M1.33105 0.771484L1.33105 43.6905"
                        stroke="#A8A8A8"
                        strokeWidth="0.841549"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </li>

                  <li className="text-center flex items-center">
                    <div>
                      <span className="text-sm sm:text-lg font-bold text-primary block">
                        Instant
                      </span>
                      <span className="text-xs sm:text-base font-normal text-white">
                        Withdrawals
                      </span>
                    </div>
                    <svg
                      className="mx-2 sm:mx-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="45"
                      viewBox="0 0 2 45"
                      fill="none"
                    >
                      <path
                        d="M1.33105 0.771484L1.33105 43.6905"
                        stroke="#A8A8A8"
                        strokeWidth="0.841549"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </li>

                  <li className="text-center">
                    <div>
                      <span className="text-sm sm:text-lg font-bold text-primary block">
                        80M+
                      </span>
                      <span className="text-xs sm:text-base font-normal text-white">
                        DOWNLOADS
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <h4
              className="font-trim text-primary text-lg md:text-2xl font-bold italic mt-8 uppercase"
              data-aos="fade-up"
            >
              INSTANT WITHDRAWAL
            </h4>
            <div className="flex gap-4 pt-[12px]" data-aos="fade-up">
              <div className="rounded-full sm:size-20 size-16 flex items-center justify-center">
                <img
                  src="https://www.mpl.live/_next/image?url=https%3A%2F%2Fcms-origin.mpl.live%2Fcms-latest-env%2Fimages%2FFrame_2147223095_1_eaac516475.webp&w=128&q=75"
                  alt=""
                />
              </div>
              <div className="rounded-full sm:size-20 size-16 flex items-center justify-center">
                <img
                  src="https://www.mpl.live/_next/image?url=https%3A%2F%2Fcms-origin.mpl.live%2Fcms-latest-env%2Fimages%2FFrame_2147223094_3_3ba055ba99.webp&w=128&q=75"
                  alt=""
                />
              </div>
              <div className="rounded-full sm:size-20 size-16 flex items-center justify-center">
                <img
                  src="https://www.mpl.live/_next/image?url=https%3A%2F%2Fcms-origin.mpl.live%2Fcms-latest-env%2Fimages%2FFrame_2147223097_1_2653cfe02e.webp&w=128&q=75"
                  alt=""
                />
              </div>
              <div className="rounded-full sm:size-20 size-16 flex items-center justify-center">
                <img
                  src="https://www.mpl.live/_next/image?url=https%3A%2F%2Fcms-origin.mpl.live%2Fcms-latest-env%2Fimages%2FFrame_2147223093_9e6955aa0b.webp&w=128&q=75"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="h-full flex-auto md:flex-1/2 max-w-6xl mx-auto w-full"
            data-aos="fade-left"
            // data-aos-duration="1000"
          >
            {/* <Tilt className="box" options={tiltOption}> */}
            <img
              src="https://www.mpl.live/_next/image?url=https%3A%2F%2Fcms-origin.mpl.live%2Fcms-latest-env%2Fimages%2FMpl_New_Banner_23bbcc5ce6.webp&w=750&q=75"
              alt="banner"
              // width={438}
              // height={350}
              className="ml-auto md:h-80 lg:h-96 xl:h-[550px] object-contain"
            />
            {/* </Tilt> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
