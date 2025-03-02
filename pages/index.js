import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Head from "next/head";
import Slider from "react-slick";  // Import the carousel library
import Link from "next/link";

export default function Home() {
  const carouselImages = [
    "/images/homepage/index_bg.png", 
    "/images/homepage/pariksha.jpg", // Add more image paths here as needed
    "/images/homepage/csc_banner.jpeg"
  ];

  // Slick Carousel settings
  const settings = {
    // dots: true,  // Enable indicators
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
    className: "slick-carousel",  // Custom class for styling
    // adaptiveHeight: true
  };

  return (
    <div className="container mx-0 px-0 py-0 overflow-x-hidden">
      <Head>
        <title>Home | BDS Infinity</title>
      </Head>

      {/* Hero Section - Carousel */}
      <section className="mb-8 relative">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
              <img 
                src={img} 
                alt={`Carousel Image ${index + 1}`} 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </section>
      
  <section className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-32">
  {/* Left side content (text) */}
  <div className="w-full flex flex-col lg:flex-row items-center justify-center">
  <div className="lg:w-5/6 lg:text-left mr-20">
  <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-32 after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
  About Us
</h2>
    <p className="text-base mb-6">
    BDS Infinity Private Limited Founded and Incorporated In 2021. BDS Infinity Private Limited Is An ISO 9001:2015 Certified Company.
    <br /> <br/>
A group of youthful entrepreneurs founded Bharat Digital Solutions in 2021 with the innovative idea of a "Digital Mall." The creators, 
who are themselves from semi-urban and rural backgrounds, recognised the difficulties encountered by populations without basic computer literacy 
and set out to close the digital divide. <br /> <br/>

The idea of a digital mall serves as the foundation for Bharat Digital Solutions. This innovative strategy entails bringing together a wide range of services to support business-to-business (B2B), business-to-citizen (B2C), government-to-citizen (G2C), and business-to-government (G2G) interactions under one roof.
Recognising the Digital Literacy Gap: The creators are sympathetic to the plight of those living in semi-urban and rural areas, having personally seen the difficulties encountered by digitally illiterate populations. This knowledge served as the impetus for the founding of Bharat computer Solutions, which is primarily dedicated to meeting the unique requirements of individuals who lack basic computer literacy.


    </p>

    {/* Links for Read More, Vision, and Mission */}
    <div className="flex justify-center lg:justify-start space-x-4 mb-5">
      <Link href="/about">
        <span className="text-blue-500 hover:text-blue-700 text-base cursor-pointer">Read More</span>
      </Link>
      <Link href="/about#goal">
        <span className="text-blue-500 hover:text-blue-700 text-base cursor-pointer">Goal</span>
      </Link>
      <Link href="/about#philosophy">
        <span className="text-blue-500 hover:text-blue-700 text-base cursor-pointer">Philosophy</span>
      </Link>
    </div>
  </div>

  {/* Right side content (image) */}
  <div className="lg:w-1/3">
    <img 
      src="/images/founder.png" 
      alt="Founder" 
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
  </div>
</section>



<section className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-32">
  {/* Left side content (text) */}
  <div className="w-full">
    <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[180px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
      Our Services
    </h2>
  </div>

  {/* Service Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { name: "Govt. Department Projects", link: "/services/govtProject" },
      { name: "Agriculture", link: "/services/agriculture" },
      { name: "Tour and Travel", link: "/services/tour" },
      { name: "CSR Projects", link: "/services/csr" },
      { name: "University Facilitation Centre", link: "/services/ufc" },
      { name: "Job Seeker", link: "/services/job" }
    ].map((service, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-10">{service.name}</h3>
        <Link href={service.link} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            View Details
        </Link>
      </div>
    ))}
  </div>
</section>




<section className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-32">
  <div className="w-full">
    <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[190px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
      Our Partners
    </h2>
  </div>

  {/* Partner Logos Section */}
  <div className="flex justify-center space-x-8 mt-6">
    <Link href="https://ajivika.co.in/" target="_blank" className="flex justify-center items-center">
      <img
        src="https://ajivika.co.in/images/logo.png"
        alt="Ajivika"
        className="h-20 object-contain"
      />
    </Link>
    <Link href="https://www.csc.gov.in/" target="_blank" className="flex justify-center items-center">
      <img
        src="https://www.csc.gov.in/assets/images/csc_name.png"
        alt="CSC"
        className="h-20 object-contain"
      />
    </Link>
    <Link href="https://jansamridhi.org/" target="_blank" className="flex justify-center items-center">
      <img
        src="https://jansamridhi.org/images/logo-t.png"
        alt="EDS"
        className="h-20 object-contain"
      />
    </Link>
    <Link href="http://edsskill.in/" target="_blank" className="flex justify-center items-center">
      <img
        src="http://edsskill.in/images/ocw_mast.png"
        alt="EDS"
        className="h-20 object-contain"
      />
    </Link>
  </div>
</section>

    </div>
  );
}
