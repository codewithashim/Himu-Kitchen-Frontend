import React from "react";
import useTitle from "../../Hooks/useTitle";

import Hero from "./Hero/Hero";
import Process from "./Process/Process";
import ServicesSection from "./servicesSection/ServicesSection";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <section>
        <Hero></Hero>
        <Process></Process>
        <ServicesSection></ServicesSection>
      </section>
    </>
  );
};

export default Home;
