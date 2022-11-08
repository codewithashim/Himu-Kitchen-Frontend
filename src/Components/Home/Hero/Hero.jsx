import React from "react";
import img1 from "../../../Assets/slider/slider_1.jpeg";
import img2 from "../../../Assets/slider/slider_2.jpeg";
import img3 from "../../../Assets/slider/slider_3.jpeg";
import img4 from "../../../Assets/slider/slider_4.jpeg";
import img5 from "../../../Assets/slider/slider_5.jpeg";
import img6 from "../../../Assets/slider/slider_6.jpeg";
import img7 from "../../../Assets/slider/slider_7.jpeg";

import "../Style/Home.css";
import Slider from "./Slider";

const bannerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 7,
  },
  {
    image: img7,
    prev: 6,
    id: 7,
    next: 1,
  },
];

const Hero = () => {
  return (
    <>
      <div className="carousel w-full">
        {bannerData.map((slide) => {
          return <Slider key={slide.id} slide={slide}></Slider>;
        })}
      </div>
    </>
  );
};

export default Hero;
