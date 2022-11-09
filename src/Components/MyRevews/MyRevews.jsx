import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";
import MyRevewsDetails from "./MyRevewsDetails/MyRevewsDetails";

const MyRevews = () => {
  useTitle("My Revews");
  const { user } = useContext(AuthContext);
  const [myrevews, setMyRevews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyRevews(data));
  }, [user?.email]);

  const allMyRevews = myrevews.data;

  console.log(allMyRevews);

  return (
    <>
      <section >
        <div>
          <h1 className="text-2xl font-bold text-center my-4">My Revews</h1>
        </div>
        <div className="grid gap-2 md:grid-cols-2 p-2 justify-center">
          {allMyRevews?.map((revews) => {
            return <MyRevewsDetails key={revews._id} revews={revews} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MyRevews;
