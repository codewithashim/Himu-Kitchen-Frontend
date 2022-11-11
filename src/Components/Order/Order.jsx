import React, { useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import MyOrder from "./MyOrder/MyOrder";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  const [forceRender, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    fetch(`https://himu-kitchen-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data.data);
        forceUpdate();
      });
  }, [user?.email, forceRender]);

  const hendelDelete = (_id) => {
    const procide = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (procide) {
      fetch(`https://himu-kitchen-server.vercel.app/orders/${_id}`, {
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
            const remeinginOrder = orders.data.filter(
              (order) => order._id !== _id
            );
            setOrder(remeinginOrder);
          }
        });
    }
  };

  return (
    <>
      <section className="p-4">
        <div className="m-4">
          <div className="alert alert-warning shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Your Total Order Is {orders.length}</span>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-center">
              <span>Hey</span> Wellcome {user?.displayName}
            </h2>
          </div>
        </div>
        <div className="divider"></div>

        <div className="orderContainer grid gap-4 md:grid-cols-3">
          {orders.map((order) => {
            return (
              <MyOrder
                key={order._id}
                order={order}
                hendelDelete={hendelDelete}
              ></MyOrder>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Order;
