import React, { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyRevewsDetails = ({ revews }) => {
  const { name, email, img, revew, rating, services, serviceName } = revews;
  const [revewService, setRevewsService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${services}`)
      .then((res) => res.json())
      .then((data) => setRevewsService(data.data));
  }, [services]);

  return (
    <>
      <div className="card glass">
        <div className="card-body">
          <div>
            {revewService?.img && (
              <img
                src={revewService?.img}
                alt=""
                style={{ width: "100%", height: "15rem", objectFit: "cover" }}
              />
            )}
            <h2 className="card-title my-2">{serviceName}</h2>
          </div>
          <p>
            <span className="text-yellow-400 font-bold">Revew : {revew}</span>
          </p>
          <div className="flex gap-2 items-center">
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
            </div>
            <p>
              <span className="text-yellow-400 font-bold">
                Rating : {rating}
              </span>
            </p>
          </div>
          <div className="md:flex gap-3 items-center mt-2">
            <img
              src={img}
              alt={name}
              className="rounded-full"
              style={{ width: "5rem" }}
            />
            <div>
              <h1>{name} You are rating this food</h1>
              <p>{email}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link>
              <button className="btn btn-warning">
                <FaTrashAlt className="mr-3 text-2xl"></FaTrashAlt> Delete
              </button>
            </Link>
            <Link>
              <button className="btn">
                <FaRegEdit className="mr-3 text-2xl"></FaRegEdit> Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRevewsDetails;
