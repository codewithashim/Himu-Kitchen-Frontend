import React from "react";
import Community from "../../../Assets/values/community.svg";
import Joy from "../../../Assets/values/joy.svg";
import Neighbors from "../../../Assets/values/neighbors.svg";
import Oprchunity from "../../../Assets/values/opportunity.svg";
import "../Style/Home.css";

const MyValuesSection = () => {
  return (
    <>
      <section className="myValueSection relative">
        <div
          className="text-center font-bold text-2xl p-6 text-yellow-400"
          style={{ fontFamily: "Dancing Script" }}
        >
          <h1>What Values I'm Providing</h1>
        </div>

        <div className="md:flex md:justify-start ">
          <div className="card mx-4">
            <figure className="">
              <img src={Joy} alt="Joys" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Sharing Joy</h2>
              <p>Enjoy community through food</p>
            </div>
          </div>
          <div className="card">
            <figure className="">
              <img src={Neighbors} alt="Nurs" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Nourishing Neighbors</h2>
              <p>Eat wholesome. Eat better.</p>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-end md:items-center">
          <div className="card">
            <figure className="px-10">
              <img src={Community} alt="Nurs" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Connecting Community</h2>
              <p>Real people. Authentic passion</p>
            </div>
          </div>
          <div className="card">
            <figure className="px-10">
              <img src={Oprchunity} alt="Nurs" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cultivating Opportunity</h2>
              <p>Empowering HomeCooks</p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default MyValuesSection;
