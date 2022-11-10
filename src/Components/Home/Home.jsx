import React from "react";
import useTitle from "../../Hooks/useTitle";

import Hero from "./Hero/Hero";
import MyValuesSection from "./MyValuesSection/MyValuesSection";
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
        <MyValuesSection></MyValuesSection>
      </section>
    </>
  );
};

export default Home;
