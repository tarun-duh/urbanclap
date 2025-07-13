import React from "react";
import Hero from "../components/Hero";
import CleaningServiceCard from "../components/CleaningServiceCard";
import ExceptionalResults from "../components/ExceptionalResults";
import Cta from "../components/Cta";

const page = () => {
  const heading = "About us";
  const para = "OUR STORY";

  return (
    <>
      <Hero heading={heading} para={para} bgImg="/images/aboutHero.jpg" />
      <div className="w-full bg-gray-100 py-10 md:py-20">
        <CleaningServiceCard
          image={"/images/cleaning2.jpg"}
          subtitle="High Quality"
          title="Cleaning Services"
          paragraphs={[
            "Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.",
            "Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.",
            "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
          ]}
        />
      </div>
      <ExceptionalResults />
      <Cta
      // heading="need help with your next project?"
      // subtext="We’re just one message away. Let’s build something amazing together."
      // bgImage="/images/cta.jpg"
      />
    </>
  );
};

export default page;
