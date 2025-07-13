import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactCards = () => {
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500 text-2xl mb-2" />,
      title: "Physical Address",
      lines: [
        { text: "Akshya Nagar 1st Block 1st Cross," },
        { text: "Ramamurthy Nagar, Bangalore - 560016" },
      ],
    },
    {
      icon: <FaEnvelope className="text-blue-500 text-2xl mb-2" />,
      title: "Email Address",
      lines: [
        { text: "example@gmail.com", link: "mailto:example@gmail.com" },
        { text: "info@gmail.com", link: "mailto:info@gmail.com" },
      ],
    },
    {
      icon: <FaPhoneAlt className="text-blue-500 text-2xl mb-2" />,
      title: "Phone Numbers",
      lines: [
        { text: "+1800-964-152", link: "tel:+1800964152" },
        { text: "+1800-964-153", link: "tel:+1800964153" },
      ],
    },
  ];

  return (
    <div className="w-full px-6 py-10 md:py-20 bg-white flex flex-col md:flex-row justify-center items-center gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-[#f9fbfc] rounded-2xl shadow-sm p-6 text-center w-full max-w-sm"
        >
          <div className="flex justify-center">{card.icon}</div>
          <h3 className="text-lg font-semibold text-blue-500 mb-2">
            {card.title}
          </h3>
          {card.lines.map((line, i) =>
            line.link ? (
              <a
                key={i}
                href={line.link}
                className="text-black text-sm block hover:underline"
              >
                {line.text}
              </a>
            ) : (
              <p key={i} className="text-black text-sm">
                {line.text}
              </p>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
