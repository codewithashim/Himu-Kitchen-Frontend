import React from "react";

const Service = ({ service }) => {
  const {
    _id,
    service_name,
    service_price,
    service_description,
    img,
    service_category,
    rating,
    service_status,
    service_provider,
    service_provider_img,
  } = service;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={service_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
