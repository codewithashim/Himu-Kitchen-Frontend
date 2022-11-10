import React, { useContext, useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";
import MyRevewsDetails from "./MyRevewsDetails/MyRevewsDetails";

const MyRevews = () => {
  useTitle("My Revews");
  const [forceRender, forceUpdate] = useReducer((x) => x + 1, 0);
  const { user, logout } = useContext(AuthContext);
  const [myrevews, setMyRevews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
          // throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => setMyRevews(data));
    forceUpdate();
  }, [user?.email, logout, forceRender]);
  
  const allMyRevews = myrevews.data;

  const hendelDelete = (_id) => {
    const procide = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (procide) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success > 0) {
            Swal.fire(
              "Succesfully Delete Order",
              "You clicked the button!",
              "success"
            );
            const remeinginRevews = myrevews.data.filter(
              (revews) => revews._id !== _id
            );
            setMyRevews(remeinginRevews);
          }
        });
    }
  };

  return (
    <>
      <section>
        <div>
          <h1 className="text-2xl font-bold text-center my-4">My Revews</h1>
        </div>
        <div>
          <div className=" text-center font-bold text-2xl mb-4">
            Your Total Revews: {allMyRevews?.length}
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2 p-2 justify-center">
          {allMyRevews?.map((revews) => {
            return (
              <MyRevewsDetails
                key={revews._id}
                revews={revews}
                hendelDelete={hendelDelete}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyRevews;
