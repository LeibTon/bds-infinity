import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Head>
        <title>About | BDS Infinity</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">We offer high-quality online development courses to equip you with the skills needed for the modern tech industry.</p>
      <p>Our courses range from beginner to advanced levels, with a focus on practical, hands-on learning to ensure our students gain real-world experience.</p>
    </div>
  );
}
