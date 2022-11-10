import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.displayName);
  const [photo, setPhotoo] = useRef(user.photoURL);
  const hendelSubmit = (e) => {
    e.preventDefault();
    console.log(name, photo);
  };

  const hendelNameChange = (e) => {
    setName(e.target.value);
  };
  const hendelPhotoChange = (e) => {
    setPhotoo(e.target.value);
  };

  return (
    <>
      <section>
        <div className="card border shadow-xl my-4 md:w-2/4 p-4 mx-auto">
          <div className="md:flex gap-4 items-center">
            <img
              src={user?.photoURL}
              alt=""
              className="rounded-full"
              style={{ width: "5rem" }}
            />
            <div>
              <h1>{user?.displayName}</h1>
              <h1>{user?.email}</h1>
            </div>
          </div>
        </div>

        <div>
          <form action="">
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
