"use client";

import Image from "next/image";
import React, { useState } from "react";

const footerLinks = [
  {
    title: "Courses",
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    title: "Categories",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    title: "Company",
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-17.5 md:pt-4 pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-23 md:gap-18 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="ByteSpace Logo"
                width={170}
                height={40}
              />
            </div>
            <p className="text-[#242528] text-sm mt-4 max-w-132">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex gap-3 mt-6 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-gray-200 outline-none text-sm text-gray-700 placeholder-gray-400 focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-heading font-semibold text-sm px-7 py-3 rounded-full transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>

            <p className="text-[#242528] text-xs mt-6 max-w-126">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-heading font-semibold text-sm mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#242528] hover:text-heading text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 lg:mt-32.5  mt-12 pt-5.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#242528] text-xs">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#242528] hover:text-heading text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#242528] hover:text-heading text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#242528] hover:text-heading text-xs transition-colors"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
