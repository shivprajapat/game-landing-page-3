import React, { useState } from "react";

const WinnersCard = ({ title, imageUrl, description, location }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div
      className="flex-center relative bg-white shadow-md rounded-lg z-10 overflow-hidden before:absolute before:-z-10 before:-top-4 before:-right-4 before:size-8 before:rounded-4xl before:scale-100 before:bg-primary hover:border-primary"
      data-aos="fade-up"
      onClick={handleToggle}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`absolute rounded-full transition-all duration-300 ease-in-out font-bold text-black flex text-center
               ${
                 active
                   ? "right-0 primary-gradient bottom-0 items-center justify-center w-full h-full rounded-b-none"
                   : "-bottom-32 primary-gradient -right-16 w-36 items-end justify-end"
               }
            `}
      />
      <div className="flex flex-col gap-4 items-start p-4 z-10">
        <img
          src={imageUrl}
          alt="Team Member 1"
          className="size-24 border-2 shadow border-primary p-1 rounded-full"
        />
        <div>
          <h3
            className={`text-xl font-medium ${
              active ? "text-white" : "text-black"
            } mb-2`}
          >
            {title}
          </h3>
          <span
            className={`${active ? "text-white" : "text-grray-700"} text-sm`}
          >
            {description}
          </span>
        </div>
      </div>

      <div className="bg-primary rounded-tl-full flex items-center gap-2 rounded-bl-full shadow absolute top-0 right-0 p-3 text-white">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
            fill="#fff"
          />
        </svg>
        <span className="text-sm">{location}</span>
      </div>
    </div>
  );
};

export default WinnersCard;
