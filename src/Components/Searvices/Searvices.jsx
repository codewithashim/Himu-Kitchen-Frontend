import React, { useContext, useEffect, useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";
import Service from "./Service/Service";
import Loaders from "../../Assets/loader.gif";

const Searvices = () => {
  useTitle("Services");
  // const { services, count } = useLoaderData();
  const [count, setCount] = useState(0);
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const pages = Math.ceil(count / perPage);

  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}&perPage=${perPage}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setCount(data.count);
      });
  }, [page, perPage]);

  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
        <img src={Loaders} style={{width:"50%"}} alt="loader....." />
      </div>
    );
  }

  return (
    <>
      <section className="p-4">
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
            return <Service key={service._id} service={service}></Service>;
          })}
        </div>

        <div className="pagination flex justify-center items-center">
          {/* <p>curnetly selectd page {page}</p> */}
          {[...Array(pages).keys()].map((number) => {
            return (
              <button
                key={number}
                className={page === number && "bg-yellow-400 btn m-4"}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            );
          })}
          <select
            className="mx-4"
            onChange={(event) => setPerPage(event.target.value)}
          >
            <option value="5" selected>
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Searvices;
