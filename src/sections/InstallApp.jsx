import { iconLeftArrow, iconRightArrow } from "@/assets/images";
import { Heading } from "@/components";
import { howToInstallData } from "@/constants";
import React, { useCallback, useRef } from "react";
import Slider from "react-slick";

const InstallApp = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handlePrevClick = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, []);

  const handleNextClick = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  return (
    <section className="py-5 md:py-8" id="install">
      <div className="max-w-7xl mx-auto p-4 md:p-6 rounded-xl lg:p-10 bg-gradient-to-b from-light-blue-100 to-light-blue-200">
        <div data-aos="fade-up">
          <Heading>How to Install LudoPlayers Gaming App</Heading>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {howToInstallData.map((item, index) => (
            <div key={index}>
              <div className="border border-white">
                <img
                  src={item.imageUrl}
                  alt={item?.title}
                  // className="object-contain w-full h-96"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex-center  bg-white w-fit mx-auto px-3 py-2 rounded-full gap-3  mt-5">
          <button
            className="bg-primary transition-all duration-200 cursor-pointer rounded-full hover:bg-primary/30 p-2"
            onClick={handlePrevClick}
          >
            <img src={iconLeftArrow} alt="Previous" width={20} height={20} />
          </button>
          <button
            className="bg-primary transition-all duration-200 cursor-pointer rounded-full hover:bg-yellow-500 p-2"
            onClick={handleNextClick}
          >
            <img src={iconRightArrow} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallApp;
