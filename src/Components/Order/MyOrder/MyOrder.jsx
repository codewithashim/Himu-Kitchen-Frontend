import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MyOrder = ({ order, hendelDelete }) => {
  const {
    _id,
    service_price,
    service,
    customar,
    serviceName,
    service_category,
    status,
  } = order;
  const [orderService, setOrderService] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://himu-kitchen-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data.data);
      });
  }, [service]);

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
          <PhotoView src={orderService.img}>
            <figure>
              <img
                src={orderService.img}
                alt={serviceName}
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
          <h2 className="card-title">{serviceName}</h2>
          <p>Price : {service_price}</p>
          <p>Status : {status}</p>
          <p>Category : {service_category}</p>
          <div>
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="rounded-full"
              style={{ width: "5rem" }}
            />
            <h2>{customar}</h2>
          </div>
          <div className="card-actions justify-end">
            <Link onClick={() => hendelDelete(_id)}>
              <button className="btn btn-warning">
                <FaTrashAlt className="mr-3 text-2xl"></FaTrashAlt> Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
