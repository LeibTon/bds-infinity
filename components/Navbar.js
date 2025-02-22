import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to track navbar visibility

  // Handle link click to close mobile menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  // Handle scroll event to show/hide navbar
  /*Uncomment the below code, if you wanna add nav bar invisibility on scroll.*/
  // useEffect(() => {
  //   let lastScrollTop = 0;
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollTop) {
  //       setIsVisible(false); // Hide navbar when scrolling down
  //     } else {
  //       setIsVisible(true); // Show navbar when scrolling up
  //     }
  //     lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY; // Prevent negative scrollY
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* Conditionally hide/show navbar based on scroll */}
      <nav
        className={`bg-gray-900 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Custom Logo Image */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png" // Update this path to match your logo's location
              alt="Software Solutions Logo"
              className="h-10" // Adjust the height of your logo
            />
          </Link>

          {/* Desktop Menu with Increased Font Size */}
          <div className="hidden md:flex space-x-6 text-xl">
          <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/management" className="hover:text-gray-300">Management</Link>
            <Link href="/login" className="hover:text-gray-300">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Slide Animation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {isOpen && (
            <div className="bg-gray-800 p-4 mt-4">
              <Link
                href="/"
                className="block py-2 text-white hover:text-gray-300 text-xl"
                onClick={handleLinkClick} // Close the menu when clicked
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-white hover:text-gray-300 text-xl"
                onClick={handleLinkClick} // Close the menu when clicked
              >
                About
              </Link>
              <Link
                href="/management"
                className="block py-2 text-white hover:text-gray-300 text-xl"
                onClick={handleLinkClick} // Close the menu when clicked
              >
                Management
              </Link>
              <Link
                href="/login"
                className="block py-2 text-white hover:text-gray-300 text-xl"
                onClick={handleLinkClick} // Close the menu when clicked
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
