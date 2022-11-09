import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const EditMyRevews = () => {
  useTitle("Edite Revews");
  const upateRevews = useLoaderData();
  const { rating, revew } = upateRevews.data;
  const [newRating, setNewRating] = useState({});
  const { revews, serviceName } = upateRevews.data;

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/reviews/${upateRevews?.data?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire(
            "Succesfully Updated Revews",
            "You clicked the button!",
            "success"
          );
          console.log(data);
          setNewRating(data);
        }
      });
  };
  const hendeleInputChanges = (e) => {
    const filde = e.target.name;
    const value = e.target.value;
    const newRevews = { ...newRating };
    newRevews[filde] = value;
    setNewRating(newRevews);
  };

  return (
    <>
      <section className="p-4 ">
        <div>
          <h1 className="text-2xl font-bold text-center my-4">
            Edit My Revews
          </h1>
          <div className="divider"></div>
        </div>
        <div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/myrevews">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  My Revews
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Update Revews
              </li>
            </ul>
          </div>
        </div>
        <div className="m-4">
          <div className="card shadow-xl p-6 w-2/4 mx-auto my-4">
            <h1 className="text-2xl font-bold ">{serviceName}</h1>
            <div className="divider"></div>
            <div>
              <h2 className="my-2">
                <span className="font-bold text-yellow-400"></span> : {revews}
              </h2>
              <h2 className="my-2">
                <span className="font-bold text-yellow-400">Rating</span> :{" "}
                {rating}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <form className="w-full max-w-lg mx-auto" onSubmit={handleUpdate}>
            <div className="retingRevews">
              <select
                className="select select-warning w-full"
                defaultValue={rating}
                onChange={hendeleInputChanges}
                name="rating"
              >
                <option disabled selected>
                  Select Your Rating
                </option>
                <option>1 - Poore</option>
                <option>2 - Fare</option>
                <option>3 - Good</option>
                <option>4 - Very Good</option>
                <option>5 - Excilent</option>
              </select>
            </div>
            <div className="mt-4">
              <textarea
                className="textarea textarea-warning w-full "
                placeholder="Write Your Revews"
                name="revews"
                onChange={hendeleInputChanges}
                defaultValue={revew}
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" className="btn btn-warning" value="Update" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditMyRevews;
