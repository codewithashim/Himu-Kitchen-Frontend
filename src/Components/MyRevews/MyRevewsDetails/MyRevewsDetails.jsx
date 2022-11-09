import React from "react";

const MyRevewsDetails = ({ revews }) => {
  const { name, email, img, revew, rating, services } = revews;
  return (
    <>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRevewsDetails;
