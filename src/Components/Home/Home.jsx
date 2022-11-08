import React from "react";
import useTitle from "../../Hooks/useTitle";
import Searvices from "../Searvices/Searvices";
import Hero from "./Hero/Hero";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <section>
        <Hero></Hero>
        <Searvices></Searvices>
      </section>
    </>
  );
};

export default Home;
