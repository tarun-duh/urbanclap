import React from "react";

const CleaningServiceCard = ({ image, title, subtitle, paragraphs = [] }) => {
  return (
    <section className="max-w-6xl mx-auto  px-6  ">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-lg font-semibold text-gray-800">{subtitle}</h2>
          <h1 className="text-4xl font-bold text-blue-600 my-2">{title}</h1>
          {paragraphs.map((text, index) => (
            <p key={index} className="text-gray-700 mt-4">
              {text}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt="Cleaning Service"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CleaningServiceCard;
