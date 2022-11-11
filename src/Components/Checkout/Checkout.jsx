import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Checkout = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    service_name,
    service_price,
    img,
    service_category,
  } = services?.data;

  const hendelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;
    const email = user?.email.value || form.email.value;
    const order = {
      phone,
      email,
      service_category,
      address,
      message,
      service_price,
      service: _id,
      customar: name,
      serviceName: service_name,
    };

    fetch("https://himu-kitchen-server.vercel.app/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire(
            "Succesfully Confirme Order",
            "You clicked the button!",
            "success"
          );
        } else {
          Swal.error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-5 mt-6">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/services">
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
                Searvices
              </Link>
            </li>
            <li>
              <Link to="/orders">
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
                Orders
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
              Checkout
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="card">
          <PhotoProvider>
            <PhotoView src={img}>
              <figure>
                <img
                  src={img}
                  alt={service_name}
                  className="rounded-lg mx-auto"
                  style={{ height: "20rem", width: "50%", objectFit: "cover" }}
                />
              </figure>
            </PhotoView>
          </PhotoProvider>
          <div className="card-body text-center">
            <h2 className="text-center text-2xl font-bold">
              Product Name : {service_name}
            </h2>
            <h2>Price : ৳ {service_price}</h2>
            <p className="card-text">Category {service_category}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="checkoutFroms p-6">
          <form
            action=""
            onSubmit={hendelSubmit}
            className="grid gap-4 w-3/4 md:grid-cols-2 mx-auto "
          >
            <input
              type="email"
              defaultValue={user.email}
              placeholder="Your Email"
              name="email"
              className="input input-bordered input-warning w-full "
            />
            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user.name}
              name="fullName"
              className="input input-bordered input-warning w-full"
            />
            <input
              type="text"
              placeholder="Your Address"
              name="address"
              className="input input-bordered input-warning w-full"
            />
            <input
              type="number"
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered input-warning w-full"
            />
            <textarea
              name="message"
              className="textarea textarea-warning"
              placeholder="Your Message"
            ></textarea>

            <input
              type="submit"
              value="Order Now"
              className="input input-bordered input-warning w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
