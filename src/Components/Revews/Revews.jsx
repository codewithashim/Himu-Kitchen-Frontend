import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const Revews = ({ servicesId,service_name }) => {
  const { user } = useContext(AuthContext);

  const hendelRevews = (e) => {
    e.preventDefault();
    const revew = {
      services: servicesId,
      name: user?.displayName,
      email: user?.email,
      serviceName: service_name,
      img: user?.photoURL,
      revew: e.target.revews.value,
      rating: e.target.rating.value,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(revew),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          e.target.reset();
          Swal.fire(
            "Thank For Your Revews!",
            "You clicked the button!",
            "success"
          );
        }
      });
  };

  return (
    <>
      <section>
        <div className="revewsContainer">
          <form action="" className="mx-auto" onSubmit={(e) => hendelRevews(e)}>
            <div className="retingRevews">
              <select
                className="select select-warning w-full max-w-xs"
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
                className="textarea textarea-warning w-full max-w-xs"
                placeholder="Write Your Revews"
                name="revews"
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" className="btn btn-warning" value="Submit" />
            </div>
          </form>
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="text-2xl text-center font-bold text-yellow-400">
            See All Revews
          </h2>
        </div>
      </section>
    </>
  );
};

export default Revews;
