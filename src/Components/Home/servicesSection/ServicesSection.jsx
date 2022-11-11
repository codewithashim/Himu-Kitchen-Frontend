import React, { useState } from "react";
import { useEffect } from "react";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ClipLoader from "react-spinners/ClipLoader";

// import ServiceSectionDetails from "./serviceSectionDetails";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch("https://himu-kitchen-server.vercel.app/servicelimit")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      <section>
        <div className="servicesTitle">
          <h1
            className="text-center py-2 text-3xl font-bold text-yellow-400"
            style={{ fontFamily: "Dancing Script" }}
          >
            What I'm Providing ?{" "}
          </h1>
          <h1 className="justify-center items-center gap-4 text-5xl flex font-bold text-gray-700">
            Services
            <FaUtensils className="text-yellow-400"></FaUtensils>
          </h1>
        </div>
        <div className="servicesContainer grid md:grid-cols-3 py-4">
          {services.map((service) => {
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
                {loader ? (
                  <div>
                    <div
                      style={{
                        width: "100%",
                        height: "100vh",
                        margin: "0 auto",
                      }}
                      className="text-center mx-auto mt-10"
                    >
                      <ClipLoader
                        color={"#FEBE8C"}
                        loading={loader}
                        size={40}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="card m-4 bg-base-100 shadow-xl">
                    <PhotoProvider>
                      <PhotoView src={img}>
                        <figure>
                          <img
                            src={img}
                            alt={service_name}
                            className="rounded-lg mx-auto"
                            style={{
                              height: "15rem",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </figure>
                      </PhotoView>
                    </PhotoProvider>
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
                        <Link
                          to={`/checkout/${_id}`}
                          className="btn btn-warning btn-outline btn-sm"
                        >
                          Order Now
                        </Link>
                        <div className="badge badge-outline">
                          {service_category}
                        </div>
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
                        <h1 className="font-bold text-white">
                          {service_provider}
                        </h1>
                      </div>
                      <div>
                        <Link
                          to={`/services/${_id}`}
                          className="btn btn-warning btn-sm"
                        >
                          See Details
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Link className="btn btn-warning btn-outline" to="/services">
            See More
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
