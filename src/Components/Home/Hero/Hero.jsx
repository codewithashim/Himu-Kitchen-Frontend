import React from "react";
import "./Hero.css";
import "../Style/Home.css";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaUtensils } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="hero-Section">
        <div className="w-full">
          <div className="p-6 py-8 absolute top-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-4xl mb-4"> Hey Wellcome to </span>
              <br />
              <span className="flex">
                <span className="text-yellow-400 ">Himu</span> Kitchen
                <span className="text-yellow-400">
                  <FaUtensils></FaUtensils>
                </span>
              </span>
            </h1>
            <p className="mt-4 text-white w-3/6">
              I'm Himu ! I'm a professional chef and I have been cooking for 10
              years. I have providign the best homemake food for my customers !!
            </p>
            <div className="flex gap-4 mt-6">
              <Link className="btn btn-warning">See Recipe</Link>
              <Link className="btn btn-warning btn-outline">
                <FaPlayCircle className="mx-2 font-2xl"></FaPlayCircle> Watch
                Video
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
