import React from "react";

const RevewsDetails = ({ revew }) => {
  return (
    <div className=" shadow-xl  m-4 mx-auto p-6">
      <div className="flex gap-4 m-4 items-center">
        <div className="flex flex-col gap-2">
          <span className="text-[1rem] font-bold">rating: {revew.revew}</span>
          <span className="text-[1rem] font-bold">rating: {revew.rating}</span>
        </div>
      </div>

      <div className="">
        <img
          src={revew.img}
          alt={revew.name}
          style={{ width: "5rem" }}
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <span className=" font-bold">{revew.name}</span>
          <span className="">{revew.email}</span>
        </div>
      </div>
    </div>
  );
};

export default RevewsDetails;
