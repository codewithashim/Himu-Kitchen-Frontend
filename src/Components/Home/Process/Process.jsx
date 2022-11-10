import React from "react";
import Process1 from "../../../Assets/Explore_homemade_dishes.gif";
import Process2 from "../../../Assets/order_homemade_dish.gif";
import Process3 from "../../../Assets/enjoy_homemade.gif";

const Process = () => {
  return (
    <>
      <section className="p-4">
        <div>
          <h1
            className="text-2xl font-bold text-center p-4 text-yellow-400"
            style={{ fontFamily: "Dancing Script" }}
          >
            How I'm Works
          </h1>
        </div>
        <div className="howImworl grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          <div className="card border-0 ">
            <figure>
              <img
                src={Process1}
                alt="Himu Kitchen"
                style={{ width: "100", objectFit: "cover", height: "20rem" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold  text-center">Explore</h2>
              <p className="text-center">
                Himu Kitchen homemade meals near you. All of our HomeCooks are
                carefully vetted & food safety certified.
              </p>
            </div>
          </div>
          <div className="card border-0 ">
            <figure>
              <img
                src={Process2}
                alt="Himu Kitchen"
                style={{ width: "100", objectFit: "cover", height: "20rem" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold  text-center">Order</h2>
              <p className="text-center">
                Add dishes to your cart, select pickup or delivery date & time
                and checkout - it’s that easy!
              </p>
            </div>
          </div>
          <div className="card border-0">
            <figure>
              <img
                src={Process3}
                alt="Himu Kitchen"
                style={{ width: "100", objectFit: "cover", height: "20rem" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold  text-center">Enjoy</h2>
              <p className="text-center">
                Do curbside pickup or get your order delivered directly to your
                door. Food is delivered hot and ready to eat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
