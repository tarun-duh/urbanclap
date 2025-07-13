"use client";

import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import cleaningImg from "/public/images/cleaning.jpg";

const ContactFormSection = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace with your actual EmailJS service ID
        "your_template_id", // Replace with your actual EmailJS template ID
        form.current,
        "your_public_key" // Replace with your actual EmailJS public key
      )
      .then(
        () => {
          setMessageSent(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="max-w-7xl  mx-auto  px-4 md:px-8">
      <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 relative">
          <Image
            src={cleaningImg}
            alt="Contact Support"
            className="object-cover h-2/3 w-full"
          />
          <div className="bg-gray-900 h-1/3 text-white p-6 space-y-4">
            <h3 className="text-lg font-semibold">Contact us today</h3>
            <a
              href="tel:+1800964152"
              className="flex items-center gap-2 text-sm"
            >
              <FaPhoneAlt /> +1800–964–152
            </a>
            <a
              href="mailto:example@gmail.com"
              className="flex items-center gap-2 text-sm"
            >
              <FaEnvelope /> example@gmail.com
            </a>
            <p className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt /> Akshya Nagar 1st Block 1st Cross, Ramamurthy
              Nagar, Bangalore – 560016
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
          <p className="text-sm text-gray-600 mb-6">
            Nulla eleifend pulvinar purus, molestie euismod.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full border p-3 rounded text-sm"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full border p-3 rounded text-sm"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border p-3 rounded text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone Number"
                required
                className="w-full border p-3 rounded text-sm"
              />
            </div>
            <select
              name="service"
              required
              className="w-full border p-3 rounded text-sm text-gray-600"
            >
              <option value="">Select Service</option>
              <option>House Cleaning</option>
              <option>Office Cleaning</option>
              <option>Event Cleaning</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full border p-3 rounded text-sm"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 text-sm"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {messageSent && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
