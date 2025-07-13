import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import ContactCards from "../components/ContactCards";
import UsefulInfo from "../components/UsefulInfo";
import ContactFormSection from "../components/ContactFormSection";
import CleaningServiceCard from "../components/CleaningServiceCard";

const page = () => {
  const heading = "Contact us";
  const para = "Have questions? We're here to help!";
  return (
    <>
      <Hero heading={heading} para={para} bgImg="/images/bgImg.jpg" />
      <ContactCards />
      <div className="w-full bg-gray-100 md:py-20 py-10">
        <ContactFormSection />
      </div>
      <UsefulInfo />
      <div className="w-full bg-gray-100 py-10 md:py-20">
        <CleaningServiceCard
          image={"/images/cleaning1.jpg"}
          subtitle="High Quality"
          title="Cleaning Services"
          paragraphs={[
            "Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.",
            "Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.",
            "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
          ]}
        />
      </div>
    </>
  );
};

export default page;
