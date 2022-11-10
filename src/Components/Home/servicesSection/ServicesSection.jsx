import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import ServiceSectionDetails from "./serviceSectionDetails";
import Loaders from "../../../Assets/loader.gif";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    return () => {
      fetch("https://himu-kitchen-server.vercel.app/servicelimit")
        .then((res) => res.json())
        .then((data) => setServices(data.data));
    };
  }, []);
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
        <img src={Loaders} style={{ width: "50%" }} alt="loader....." />
      </div>
    );
  }
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
          {services.slice(0, 3).map((service) => {
            return (
              <ServiceSectionDetails
                key={service._id}
                service={service}
              ></ServiceSectionDetails>
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
