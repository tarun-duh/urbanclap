import React from "react";
import Hero from "../components/Hero";
import TestimonialCard from "../components/TestimonialCard";
import Cta from "../components/Cta";

const page = () => {
  return (
    <>
      <Hero
        heading={"Testimonials"}
        para={"What Our Customer Say About Us"}
        bgImg="/images/testHero.jpg"
      />
      <TestimonialCard />
      <Cta />
    </>
  );
};

export default page;
