"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSubMenu = (page) => {
    setActiveMenu((prev) => (prev === page ? null : page));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  const navLinks = [
    { page: "Home", url: "/", sublink: null },
    { page: "Services", url: "/services", sublink: null },
    { page: "My Account", url: "/myaccount", sublink: null },
    {
      page: "Pages",
      url: "#",
      sublink: [
        { page: "About", url: "/about" },
        { page: "Blog", url: "/blog" },
        { page: "Testimonials", url: "/testimonials" },
        { page: "Terms & Conditions", url: "/termsconditions" },
        { page: "FAQ", url: "/faq" },
      ],
    },
    { page: "Contact", url: "/contact", sublink: null },
  ];

  return (
    <header className="bg-transparent text-gray-300  w-full z-50 absolute top-0 left-0  ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={"/"} className="text-white font-bold text-lg">
          LOGO
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setActiveMenu(null); // close submenu on toggle
            }}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            {navLinks.map((item) => (
              <li key={item.page} className="relative">
                {item.sublink ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.page)}
                      className="hover:text-white"
                    >
                      {item.page}
                    </button>
                    {activeMenu === item.page && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-20">
                        {item.sublink.map((sub) => (
                          <li key={sub.page}>
                            <Link
                              href={sub.url}
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={closeMobileMenu}
                            >
                              {sub.page}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.url} className="hover:text-white">
                    {item.page}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-[#1e1e1e] px-4 py-4 z-40">
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.page}>
                {item.sublink ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.page)}
                      className="w-full text-left py-2"
                    >
                      {item.page}
                    </button>
                    {activeMenu === item.page && (
                      <ul className="ml-4 bg-[#2c2c2c] rounded px-3 py-2">
                        {item.sublink.map((sub) => (
                          <li key={sub.page}>
                            <Link
                              href={sub.url}
                              className="block py-1 text-sm text-gray-200"
                              onClick={closeMobileMenu}
                            >
                              {sub.page}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="block py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.page}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
