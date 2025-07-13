import React from "react";
import Link from "next/link";

const Cta = ({
  heading = "Ready for a Sparkling Clean Space?",
  subtext = "Whether it’s your home or office, our expert cleaning team is here to deliver spotless results. Book a service today and enjoy a fresher, healthier environment.",
  bgImage = "/images/cta.jpg",
}) => {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-white text-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-2xl px-4">
        <h3 className="text-3xl font-bold mb-4">{heading}</h3>
        <p className="text-lg mb-6">{subtext}</p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Cta;
