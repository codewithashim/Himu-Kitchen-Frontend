import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { FaPlayCircle } from "react-icons/fa";

const Slider = ({ slide }) => {
  const { image, prev, id, next } = slide;

  return (
    <>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="sliderImage ">
          <img src={image} className="w-full" alt="Slider" />
        </div>
        <div className="absolute flex gap-4 mr-8 transform -translate-y-1/2 right-0 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2 left-0 top-1/2 pl-5">
          <div>
            <h1 className="text-6xl font-bold text-white">
              <span className="text-4xl mb-1"> Hey Wellcome to </span>
              <br />
              <span className="text-yellow-400">Himu</span> Kitchen !!
            </h1>
            <p className="mt-4 text-white w-3/4">
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
      </div>
    </>
  );
};

export default Slider;
