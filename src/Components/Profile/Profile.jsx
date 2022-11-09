import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section>
        <div className="card border shadow-xl w-2/4 p-4 mx-auto">
          <h1>{user?.displayName}</h1>
          <h1>{user?.email}</h1>
          <img
            src={user?.photoURL}
            alt=""
            className="rounded-full"
            style={{ width: "5rem" }}
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
