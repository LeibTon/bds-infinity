import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About | BDS Infinity</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6">About BDS Infinity Private Limited</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Journey</h2>
        <p className="text-xl">
          BDS Infinity Private Limited was founded in 2021 by a group of young entrepreneurs with a vision to create a "Digital Mall" 
          that would bring multiple services together under one roof, closing the digital divide in semi-urban and rural areas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Vision & Mission</h2>
        <p className="text-xl">
          Our vision is to bridge the digital literacy gap by offering a wide range of digital services to those underserved by technology. 
          Our mission is to empower communities by providing affordable, accessible, and timely services that contribute to social and economic growth.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p className="text-xl">
          BDS offers an innovative approach with its Digital Mall concept, providing services that cater to various sectors: 
          business-to-business (B2B), business-to-citizen (B2C), government-to-citizen (G2C), and business-to-government (G2G). 
          Our services are tailored to meet the needs of individuals and organizations, making them accessible and affordable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">The BDS Philosophy</h2>
        <p className="text-xl">
          At BDS, we believe in excellence through knowledge and skills. Our curriculum and training programs are designed to prepare individuals 
          for the challenges of the digital world. Our goal is to ensure that our candidates are "industry-ready" and equipped to excel in their careers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Values</h2>
        <ul className="list-disc pl-5 text-xl">
          <li>Knowledge</li>
          <li>Innovation</li>
          <li>Care</li>
          <li>Technology Excellence</li>
          <li>Transparency</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Partners</h2>
        <p className="text-xl">We are proud to collaborate with Aajivika Global Skill Private Limited in furthering our mission of skill development and vocational training in India.</p>
      </section>
    </div>
  );
}
