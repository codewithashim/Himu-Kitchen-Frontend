import React, { useContext, useRef  } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

import useTitle from "../../Hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  const { user } = useContext(AuthContext);

  const photoURLRef = useRef(user.photoURL);
  const nameURLRef = useRef(user.displayName);

  // const [photoURL, setPhotoURL] = useState(user.photoURL);
  // const [name, setName] = useState(user.displayName);

  const hendelSubmit = (e) => {
    e.preventDefault();
    console.log(photoURLRef.current.value);
    console.log(nameURLRef.current.value);
    Swal.fire("Succesfully Update!", "You clicked the button!", "success");
  };

  // const hendeleInputChanges = (e) => {
  //   const filde = e.target.name;
  //   const value = e.target.value;
  //   if (filde === "photoURL") {
  //     setPhotoURL(value);
  //   }
  //   if (filde === "fullName") {
  //     setName(value);
  //   }
  // };

  return (
    <>
      <section>
        <div className="card border shadow-xl my-4 md:w-2/4 p-4 mx-auto">
          <div className="md:flex gap-4 items-center">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="rounded-full"
              style={{ width: "5rem" }}
            />
            <div>
              <h1>{user?.displayName}</h1>
              <h1>{user?.email}</h1>
            </div>
          </div>
        </div>

        <div className="p-6">
          <form action="" onSubmit={(e) => hendelSubmit(e)}>
            <div className="w-3/5 mx-auto grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                ref={nameURLRef}
                // onChange={(e) => hendeleInputChanges(e)}
                defaultValue={user?.displayName}
                name="fullName"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                type="text"
                defaultValue={user.photoURL}
                ref={photoURLRef}
                // onChange={(e) => hendeleInputChanges(e)}
                placeholder="Photo URL"
                name="photoURL"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                placeholder="Email"
                readOnly
                defaultValue={user?.email}
                type="email"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                type="submit"
                name="submit"
                value="Update"
                className="btn btn-warning"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
