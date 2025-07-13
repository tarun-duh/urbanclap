import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Jose Fuller",
    role: "Customer",
    text: "Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.",
  },
  {
    name: "Barbara Elliot",
    role: "Customer",
    text: "Nisi Duis porta, ligula rhoncus euismod pretium, tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.",
  },
  {
    name: "Marie Stewart",
    role: "Customer",
    text: "Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.",
  },
  {
    name: "Marie Stewart",
    role: "Customer",
    text: "Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.",
  },
  {
    name: "Marie Stewart",
    role: "Customer",
    text: "Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.",
  },
  {
    name: "Marie Stewart",
    role: "Customer",
    text: "Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.",
  },
];

const TestimonialCard = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <FaQuoteLeft className="text-2xl text-gray-400 mb-4" />
            <p className="text-sm text-gray-700 mb-6">{t.text}</p>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;
