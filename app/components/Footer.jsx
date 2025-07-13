import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-blue-500 text-4xl font-bold">U</div>
            <span className="text-white font-semibold text-xl">
              <span className="text-blue-500">Homehead</span> Network
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
            nulla. Nulla posuere.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-white">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Top Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">TOP SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/cleaning" className="hover:text-white">
                Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services/handyman" className="hover:text-white">
                Handyman
              </Link>
            </li>
            <li>
              <Link href="/services/plumbing" className="hover:text-white">
                Plumbing
              </Link>
            </li>
            <li>
              <Link href="/services/electrical" className="hover:text-white">
                Electrical
              </Link>
            </li>
            <li>
              <Link href="/services/furniture" className="hover:text-white">
                Furniture Assembly
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                See all services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span>74 Guild Street 542B, Great North Town MT.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:info@example.com" className="hover:text-white">
                info@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <a href="tel:+44123456789" className="hover:text-white">
                (+44) 123 456 789
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
