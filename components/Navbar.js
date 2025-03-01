import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav
  className={`bg-white text-black p-3 shadow-md sticky top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
    isVisible ? "transform translate-y-0" : "transform -translate-y-full"
  }`}
>
  <div className="container mx-auto flex justify-between items-center md:px-20"> {/* Added padding here */}
    <Link href="/" className="flex items-center">
      <img src="/images/logo.png" alt="Logo" className="h-10" />
      <span className="text-xl ml-4 text-gray-800 home_title">BDS Infinity Private Limited</span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6 text-base">
      <Link href="/" className="hover:text-gray-600">Home</Link>
      <Link href="/about" className="hover:text-gray-600">About</Link>
      <Link href="/management" className="hover:text-gray-600">Management</Link>
      <div className="relative group">
        <button className="hover:text-gray-600 flex items-center">
          Services <ChevronDown size={18} className="ml-1" />
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100 text-base">Web Development</Link>
          <Link href="/services/app-development" className="block px-4 py-2 hover:bg-gray-100 text-base">App Development</Link>
          <Link href="/services/cloud-solutions" className="block px-4 py-2 hover:bg-gray-100 text-base">Cloud Solutions</Link>
        </div>
      </div>
      <Link href="/careers" className="hover:text-gray-600">Careers</Link>
      <Link href="/contact" className="hover:text-gray-600">Contact Us</Link>
      <Link href="/login" className="hover:text-gray-600">Login</Link>
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? "block" : "hidden"}`}>
    <div className="bg-gray-100 p-3 mt-4 text-base">
      <Link href="/" className="block py-2 text-black" onClick={handleLinkClick}>Home</Link>
      <Link href="/about" className="block py-2 text-black" onClick={handleLinkClick}>About</Link>
      <Link href="/management" className="block py-2 text-black" onClick={handleLinkClick}>Management</Link>
      <button
        className="block w-full text-left py-2 flex justify-between text-black"
        onClick={() => setIsServicesOpen(!isServicesOpen)}
      >
        Services <ChevronDown size={18} />
      </button>
      <div className={`pl-4 ${isServicesOpen ? "block" : "hidden"}`}>
        <Link href="/services/web-development" className="block py-2 text-black text-base" onClick={handleLinkClick}>Web Development</Link>
        <Link href="/services/app-development" className="block py-2 text-black text-base" onClick={handleLinkClick}>App Development</Link>
        <Link href="/services/cloud-solutions" className="block py-2 text-black text-base" onClick={handleLinkClick}>Cloud Solutions</Link>
      </div>
      <Link href="/careers" className="block py-2 text-black" onClick={handleLinkClick}>Careers</Link>
      <Link href="/contact" className="block py-2 text-black" onClick={handleLinkClick}>Contact Us</Link>
      <Link href="/login" className="block py-2 text-black" onClick={handleLinkClick}>Login</Link>
    </div>
  </div>
</nav>

  );
}
