import React from "react";

const WinnersCard = ({ title, imageUrl, description, location }) => {
  return (
    <div
      className="card relative bg-white shadow-md rounded-lg z-10 overflow-hidden before:absolute before:-z-10 before:-top-4 before:-right-4 before:size-8 before:rounded-4xl before:scale-100 before:bg-primary hover:border-primary"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-4 items-start p-4">
        <img
          src={imageUrl}
          alt="Team Member 1"
          className="size-24 border-2 shadow border-primary p-1 rounded-full"
        />
        <div>
          <h3 className="text-xl font-medium text-black mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>

      <div className="bg-primary border-t border-white p-3 text-white">
        <span className="text-sm font-semibold">Location : </span>
        <span className="text-sm ">{location}</span>
      </div>
    </div>
  );
};

export default WinnersCard;
