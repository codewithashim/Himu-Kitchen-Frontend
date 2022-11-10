import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import Revews from "../../Revews/Revews";
// import Loaders from "../../../Assets/loader.gif";
import RevewsDetails from "../../Revews/RevewsDetails/RevewsDetails";

const ServicesDetails = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const [revews, setRevews] = useState([]);
  // const [loader, setLoader] = useState(false);
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
  } = services?.data;
  const servicesId = _id;

  useEffect(() => {
    fetch(`https://himu-kitchen-server.vercel.app/reviews?services=${servicesId}`)
      .then((res) => res.json())
      .then((data) => {
        const revews = data;
        setRevews(revews);
      });
  }, [servicesId]);

  const allRevews = revews.data;

  return (
    <>
      <section className="p-4">
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <figure>
                <img
                  src={img}
                  alt={service_name}
                  className="rounded-lg mx-auto"
                  style={{ height: "100%", width: "40%" }}
                />
              </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title text-yellow-400 font-bold text-3xl">
              {service_name}
            </h2>
            <p>{service_description}</p>

            <div className="flex gap-4 justify-start">
              <span className=" bg-primary p-2 text-white rounded">
                Category : {service_category}
              </span>
              <span className=" bg-primary p-2 text-white rounded">
                Status : {service_status}
              </span>
              <div>
                <span className="text-[1rem] mx-4 text-center font-bold">
                  Price: ৳ {service_price}
                </span>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-warning">Order Now</button>
            </div>
            <div className="flex gap-2 mt-2 justify-center items-center">
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
              <span className="badge bg-warning mx-4 font-bold">{rating}</span>
            </div>

            <div className="divider"></div>
            <div>
              <h2 className="text-2xl my-2 text-center font-bold text-yellow-400">
                Give Your Valuabele Revews
              </h2>
              {/* =========== revews =========== */}
              <div>
                {user?.uid ? (
                  <>
                    <Revews
                      servicesId={servicesId}
                      service_name={service_name}
                    ></Revews>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="alert alert-warning shadow-lg">
                        <div className="m-2 p3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <span className="text-center">
                            {" "}
                            Pless Login Frist Then You Can Provider Your
                            Valuable Revews
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <Link to="/login" className="btn btn-warning">
                          Login Now
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div>
                <div className="divider"></div>
                <div>
                  <h2 className="text-2xl text-center font-bold text-yellow-400">
                    See All Revews
                  </h2>
                </div>

                {allRevews >= 0 ? (
                  <>
                    <h2 className="text-center text-2xl text-red-400 p-4">
                      No reviews were added
                    </h2>
                  </>
                ) : (
                  <>
                    <div>
                      {allRevews?.map((revew) => {
                        return (
                          <RevewsDetails
                            key={revew._id}
                            revew={revew}
                          ></RevewsDetails>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* <div>
                  {allRevews?.map((revew) => {
                    return (
                      <RevewsDetails
                        key={revew._id}
                        revew={revew}
                      ></RevewsDetails>
                    );
                  })}
                </div> */}
              </div>
            </div>
            {/* <div className="divider"></div> */}
            <div className="flex gap-4 justify-center items-center"></div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <img
                src={service_provider_img}
                alt={service_name}
                style={{ width: "5rem" }}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-yellow-400">
                {service_provider}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;
