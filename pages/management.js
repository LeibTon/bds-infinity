import React from "react";
import Head from "next/head";

export default function Management() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Head>
        <title>Team | BDS Infinity</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Meet Our Management Team</h1>
      <p className="text-lg mb-4">Our team consists of experienced professionals dedicated to shaping the future of online education.</p>
      <div className="flex space-x-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
          <h3 className="text-xl font-semibold">Jane Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
          <h3 className="text-xl font-semibold">John Smith</h3>
          <p>COO</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
          <h3 className="text-xl font-semibold">Emily Davis</h3>
          <p>CTO</p>
        </div>
      </div>
    </div>
  );
}
