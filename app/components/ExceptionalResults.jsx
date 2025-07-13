"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Commercial cleaning",
    desc: "Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.",
    img: "/images/cleaning3.jpg", // Replace with actual image path
  },
  {
    title: "Residential cleaning",
    desc: "Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.",
    img: "/images/cleaning1.jpg", // Replace with actual image path
  },
  {
    title: "Commercial cleaning",
    desc: "Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.",
    img: "/images/cleaning2.jpg", // Replace with actual image path
  },
];

const ExceptionalResults = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        We deliver exceptional results
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md border"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Get in touch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExceptionalResults;
