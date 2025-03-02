import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react"; // Updated icons for social media

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 p-8 px-10 lg:px-32 mt-10 border-t border-gray-300">
      <div className="container mx-auto flex justify-between items-center items-start space-x-20">
        {/* Left Section: Social Media, Address, Phone, and Email */}
        <div className="flex flex-col space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="http://twitter.com/bdsinfinity_pvt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/people/BDS-Infinity-Pvt-Ltd/61573648164873"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <Facebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <Linkedin />
            </a>
          </div>

          {/* Address */}
          <p className="text-base">
          Near Birsa Munda Airport, Shiva Ji Nagar,<br /> B- Block Road No 3, Hethu, Ranchi, Jharkhand, 834002
          </p>

          {/* Phone Number */}
          <p className="text-base">Phone: +123 456 7890</p>

          {/* Email */}
          <p className="text-base">Email: <Link href= "mailto:bdsinfinityinfo@gmail.com" className="font-bold">bdsinfinityinfo@gmail.com</Link></p>
        </div>

        {/* Right Section: BDS Infinity & Copyright */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold home_title">BDS Infinity Pvt Ltd</h3>
          <p className="text-base">&copy; 2025 BDS Infinity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
