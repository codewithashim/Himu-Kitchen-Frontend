import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const { services } = useLoaderData();
  console.log(object);
  return (
    <>
      <section>

      </section>
    </>
  );
};

export default ServicesDetails;
