import React from "react";
import useTitle from "../../Hooks/useTitle";

import Hero from "./Hero/Hero";
import ServicesSection from "./servicesSection/ServicesSection";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <section>
        <Hero></Hero>
        <ServicesSection></ServicesSection>
      </section>
    </>
  );
};

export default Home;
