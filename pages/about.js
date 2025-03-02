import React, { useState } from "react";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("vision");

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="text-center p-8 text-black">
      <h2 className="text-sm text-gray-500 mb-3">Our Mission</h2>
      <h1 className="text-4xl font-bold mb-10 home_title">Create "Digital Mall"</h1>
      <div className="sticky top-[85px] inline-flex space-x-4 bg-gray-100 rounded-full p-2 mb-6">
        <button 
          onClick={() => scrollToSection("journey")} 
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeSection === "journey" ? "bg-blue-500 text-white" : "text-black"}`}
        >
          Our Journey
        </button>
        <button 
          onClick={() => scrollToSection("goal")} 
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeSection === "goal" ? "bg-blue-500 text-white" : "text-black"}`}
        >
          Our Goal
        </button>
        <button 
          onClick={() => scrollToSection("philosophy")} 
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeSection === "philosophy" ? "bg-blue-500 text-white" : "text-black"}`}
        >
          Our Philosophy
        </button>
      </div>
      <div id="journey" className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-32 text-left scroll-mt-[150px]">
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[175px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
          Our Journey
        </h2>

        <p className="mb-4 mx-auto">BDS Infinity Private Limited Founded and Incorporated In 2021. BDS Infinity Private Limited Is An ISO 9001:2015 Certified Company.</p>
        <p className="mx-auto mb-4">A group of youthful entrepreneurs founded Bharat Digital Solutions in 2021 with the innovative idea of a "Digital Mall." The creators, who are themselves from semi-urban and rural backgrounds, recognised the difficulties encountered by populations without basic computer literacy and set out to close the digital divide.</p>
        <p className="mx-auto mb-4">The idea of a digital mall serves as the foundation for Bharat Digital Solutions. This innovative strategy entails bringing together a wide range of services to support business-to-business (B2B), business-to-citizen (B2C), government-to-citizen (G2C), and business-to-government (G2G) interactions under one roof.</p>
        <p className="mx-auto">Recognising the Digital Literacy Gap: The creators are sympathetic to the plight of those living in semi-urban and rural areas, having personally seen the difficulties encountered by digitally illiterate populations. This knowledge served as the impetus for the founding of Bharat computer Solutions, which is primarily dedicated to meeting the unique requirements of individuals who lack basic computer literacy.</p>
      </div>
      </div>


        <div id="goal" className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-32 text-left scroll-mt-[150px]">
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[130px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
          Our Goal
        </h2>

        <p className="mb-4 mx-auto">At Bharat Digital Solutions, we want to improve the lives of those who are underserved by technology. By providing a wide range of services, we hope to offer a comprehensive solution and make sure that people have access to all the resources they require in the digital age. </p>
        <p className="mb-4 mx-auto">Services All Under One Roof: We are dedicated to offering every service imaginable under one roof. Whether it's necessary G2C services, smooth G2G exchanges, productive B2B partnerships, or easy B2C transactions, Bharat Digital Solutions works to make these services timely, accessible, and reasonably priced.</p>
        <p className="mb-4 mx-auto">Timeliness, accessibility, and affordability: We're dedicated to providing all services on schedule, within budget, and to the satisfaction of our intended clientele. In the future, everyone will be able to take advantage of the efficiency and convenience that come with digital services, according to Bharat Digital Solutions, and digital literacy will not be a barrier.</p>
        <p className="mx-auto">Bharat Digital Solutions is more than simply a business; it's a social project motivated by a deep comprehension of the difficulties encountered by populations lacking access to digital literacy. Using the Digital Mall.</p>
      </div>
        </div>


      <div id="philosophy" className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-32 text-left scroll-mt-[150px]">
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[220px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
          Our Philosophy
        </h2>

        <p className="mb-4 mx-auto">The BDS philosophy is based on “Excellence and Values” gained through the principles of knowledge, attitudes, skills and hard work which is reflected in our ever increasing inflow of career aspiring students. Our experts mentor the candidates in such a manner that along with excelling in their respective domains, they are equipped with necessary life skills too, which “Redefines” them as confident and skilled individuals.</p>
        <p className="mx-auto">At BDS, the curriculum and the training programs have been devised in such a way, that one can acquire high level of educational attainment as well as improve his skills at par with the industry requirement. In other words each candidate becomes “Industry Ready”, employable with lucrative earnings.</p>
     
      </div>
        </div>
    </section>
  );
};

export default AboutMe;