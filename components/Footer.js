import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react"; // Heroicons icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p>&copy; 2025 BDS Infinity. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
