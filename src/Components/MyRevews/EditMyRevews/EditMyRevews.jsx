import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const EditMyRevews = () => {
  useTitle("Edite Revews");
  const upateRevews = useLoaderData();
  const { rating, revew } = upateRevews.data;
  const [newRating, setNewRating] = useState({});

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/reviews/${upateRevews?.data?._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire(
            "Succesfully Updated Revews",
            "You clicked the button!",
            "success"
          );
          console.log(data);
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
        <div></div>
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
