import React, { useEffect, useState } from "react";

const ScrollArrow = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollData = () => {
      setScrollY(window.scrollY);
    };

    updateScrollData(); // Initial set

    window.addEventListener("scroll", updateScrollData);
    window.addEventListener("resize", updateScrollData);

    return () => {
      window.removeEventListener("scroll", updateScrollData);
      window.removeEventListener("resize", updateScrollData);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scrollArrow"
      className="animate-bounce cursor-pointer z-[999] flex justify-center items-center fixed bottom-1 md:bottom-5 right-5 bg-primary rounded-full size-10 text-2xl"
      style={{
        display: scrollY > 50 ? "flex" : "none",
      }}
      onClick={handleClick}
    >
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7L12 16"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13L12 17L16 13"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollArrow;
