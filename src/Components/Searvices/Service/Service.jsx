import React from "react";
import { Link } from "react-router-dom";

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
      <div className="card m-4 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={service_name}
            style={{ width: "100%", height: "20rem", objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>
          <p>{service_description.slice(0, 100)} ......</p>
          <div className="flex">
            <p className="text-2xl font-bold flex items-center gap-2">
              <span>৳ </span>
              {service_price}
            </p>
            <div className="">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <span className="text-2xl text-yellow-400 mx-2 font-bold">
                  {rating}
                </span>
              </div>
            </div>
          </div>
          <div className="card-actions items-center gap-4 justify-end">
            <Link to={`/order/${_id}`} className="btn btn-warning btn-outline btn-sm">
              Order Now
            </Link>
            <div className="badge badge-outline">{service_category}</div>
            <div className="badge badge-outline badge-primary">
              {service_status}
            </div>
          </div>
        </div>
        <div className="card-footer bg-slate-600 p-3 flex justify-center items-center gap-4">
          <div className="profile flex justify-center items-center gap-2">
            <img
              src={service_provider_img}
              alt={service_provider}
              className="rounded-full"
              style={{ width: "3rem" }}
            />
            <h1 className="font-bold text-white">{service_provider}</h1>
          </div>
          <div>
            <Link to={`/services/${_id}`} className="btn btn-warning btn-sm">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
