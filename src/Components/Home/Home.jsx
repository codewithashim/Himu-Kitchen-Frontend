import React from "react";
import useTitle from "../../Hooks/useTitle";
import Hero from "./Hero/Hero";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <section>
        <Hero></Hero>
      </section>
    </>
  );
};

export default Home;
