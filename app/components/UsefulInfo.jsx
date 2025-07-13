import React from "react";

const infoItems = [
  {
    title: "How long should a house cleaning take?",
    desc: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
  },
  {
    title: "Simple Spring Cleaning Tips and Tricks",
    desc: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
  },
  {
    title: "Franchise Opportunities",
    desc: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
  },
  {
    title: "Office Cleaning",
    desc: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
  },
  {
    title: "Cleaning and Disinfecting Tips",
    desc: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
  },
  {
    title: "Special Event Cleaning",
    desc: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.",
  },
];

const UsefulInfo = () => {
  return (
    <section className=" py-12 md:py-20 px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
        More useful information
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {infoItems.map((item, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsefulInfo;
