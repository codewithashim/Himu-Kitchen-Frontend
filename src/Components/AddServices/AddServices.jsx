import React, { useContext, useState } from "react";
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
