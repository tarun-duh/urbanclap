"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "We provide residential, commercial, deep cleaning, and move-in/move-out cleaning services tailored to your needs.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer:
      "Yes, we use eco-friendly and non-toxic cleaning products that are completely safe for children and pets.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No, our team brings all the necessary supplies and equipment required for the service.",
  },
  {
    question: "How do I book a cleaning service?",
    answer:
      "You can book a service through our website’s contact page or by calling our support line.",
  },
  {
    question: "Can I reschedule or cancel an appointment?",
    answer:
      "Yes, please inform us at least 24 hours in advance for any changes or cancellations.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center focus:outline-none"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
