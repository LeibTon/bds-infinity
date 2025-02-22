import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Home | BDS Infinity</title>
      </Head>

      {/* Hero Section */}
      <section className="mb-8 relative">
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <img 
          src="/images/index_bg.png" 
          alt="Digital Mall Concept" 
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl font-bold mb-6">Welcome To BDS Infinity Private Limited</h1>
          <p className="text-xl max-w-3xl">
            Bridging the digital divide with innovative solutions for businesses and communities.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mb-8 flex flex-col lg:flex-row-reverse items-center justify-center space-y-4 lg:space-x-8 lg:space-x-reverse">
        <div className="lg:w-1/2">
          <img 
            src="/images/founder.png" 
            alt="Founder" 
            className="w-full h-90 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 text-center">
          <h2 className="text-2xl font-semibold mb-2">Founder</h2>
          <p className="text-xl">
            A youthful businessman with an idea for an online shopping centre, Bharat Digital Solutions (BDS) was founded and incorporated in 2021. BDS is an ISO 9001:2015 certified company.
          </p>
        </div>
      </section>

      {/* Idea of the Digital Mall */}
      <section className="mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-x-8">
        <div className="w-full lg:w-1/2">
            <img 
              src="/images/digital_mall.png" 
              alt="Digital Mall Concept" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">The Idea of the Digital Mall</h2>
            <p className="text-xl">
              The idea of a "Digital Mall" serves as the foundation for Bharat Digital Solutions. This innovative strategy brings together a wide range of services to support business-to-business (B2B), business-to-citizen (B2C), government-to-citizen (G2C), and business-to-government (G2G) interactions all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Recognizing the Digital Literacy Gap */}
      <section className="mb-8 flex flex-col lg:flex-row-reverse items-center justify-center space-y-4 lg:space-x-8 lg:space-x-reverse">
        <div className="w-full lg:w-1/2">
          <img 
            src="/images/digital-literacy.png" 
            alt="Digital Literacy" 
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <h2 className="text-2xl font-semibold mb-4">Recognizing the Digital Literacy Gap</h2>
          <p className="text-xl">
            The founders, coming from semi-urban and rural backgrounds, recognized the difficulties of those without basic computer literacy. This understanding led to the creation of BDS, a company dedicated to bridging the digital divide for those underserved by technology.
          </p>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="mb-8 flex flex-col lg:flex-row-reverse items-center justify-center space-y-4 lg:space-x-8 lg:space-x-reverse">
  
        <div className="w-full lg:w-2/3 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Goal</h2>
          <p className="text-xl">
            At BDS, our mission is to improve the lives of underserved individuals by offering comprehensive services, ensuring that everyone has access to the resources they need in the digital age.
          </p>
        </div>

        <div className="w-full lg:w-1/3">
          <img 
            src="/images/goal.png" 
            alt="Our Goal" 
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

     {/* Services All Under One Roof */}
<section className="mb-8">
  <h2 className="text-4xl font-semibold mb-4 text-center text-gray-800">
    Services All Under One Roof
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="text-center p-4 border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-3xl font-semibold mb-2 text-gray-700">G2C Services</h3>
      <p className="text-xl">Providing essential government services to citizens.</p>
    </div>
    <div className="text-center p-4 border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-3xl font-semibold mb-2 text-gray-700">B2B Partnerships</h3>
      <p className="text-xl">Facilitating productive business-to-business connections.</p>
    </div>
    <div className="text-center p-4 border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-3xl font-semibold mb-2 text-gray-700">G2G Exchanges</h3>
      <p className="text-xl">Simplifying government-to-government interactions.</p>
    </div>
    <div className="text-center p-4 border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-3xl font-semibold mb-2 text-gray-700">B2C Transactions</h3>
      <p className="text-xl">Enabling seamless business-to-customer transactions.</p>
    </div>
  </div>
</section>



      {/* Our Philosophy Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Philosophy</h2>
        <p className="text-xl text-center">
          BDS’s philosophy is grounded in excellence and values through knowledge, skills, and hard work. Our goal is to redefine careers by equipping individuals with the necessary skills and life knowledge to become confident, skilled, and industry-ready.
        </p>
      </section>

      {/* Our Partners Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Partners</h2>
        <p className="text-xl text-center">
          Aajivika Global Skill Private Limited
        </p>
      </section>
    </div>
  );
}
