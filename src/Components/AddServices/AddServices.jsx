import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const AddServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  const hendelAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = `${form.fristName.value} ${form.lastName.value}`;
    const service_name = form.name.value;
    const service_price = form.price.value;
    const service_description = form.description.value;
    const img = form.image.value;
    const rating = form.rating.value;
    const service_category = form.category.value;
    const service_status = form.status.value;
    const service_provider = user.email;
    const service_provider_img = user.photoURL;
    const service = {
      service_name,
      service_price,
      img,
      service_description,
      service_category,
      rating,
      service_status,
      service_provider,
      service_provider_img,
    };
    const newService = { ...service };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data);
          Swal.fire(
            "Sucesfully Added Product",
            "You clicked the button!",
            "success"
          );
        }
      });
  };

  console.log(services);

  return (
    <>
      <section className="p-4">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 text-center p-4">
            Add New Services
          </h2>
          <div className="divider"></div>
        </div>
        <div className="mb-2">
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
                  Services
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
                Add Services
              </li>
            </ul>
          </div>
        </div>
        <div>
          <form action="" onSubmit={hendelAddProduct}>
            <div className="w-3/5 mx-auto grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Service Name"
                name="name"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Service Price"
                name="price"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Service Image"
                name="image"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Status"
                name="status"
                className="input input-bordered input-warning w-full max-w-xs"
              />

              <select
                name="rating"
                className="select select-warning w-full max-w-xs"
              >
                <option disabled selected>
                  Select Your Rating
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <select
                name="category"
                className="select select-warning w-full max-w-xs"
              >
                <option disabled selected>
                  Cetagory
                </option>
                <option>Food</option>
                <option>Brackfrist</option>
                <option>Fastfood</option>
              </select>
              <div>
                <textarea
                  name="description"
                  className="textarea textarea-warning w-full"
                  placeholder="Service Description"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Product"
                  className="btn btn-warning"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddServices;
