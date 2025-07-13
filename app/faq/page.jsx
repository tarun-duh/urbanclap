import React from "react";
import Hero from "../components/Hero";
import FaqSection from "../components/FaqSection";

const page = () => {
  return (
    <>
      <Hero
        heading={"FAQ"}
        para={"Frequently Asked Questions"}
        bgImg="/images/faqHero.jpg"
      />
      <FaqSection />
    </>
  );
};

export default page;
