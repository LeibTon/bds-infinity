import React from "react";
import Head from "next/head";

export default function Management() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Head>
        <title>Team | BDS Infinity</title>
      </Head>
      <section className="mb-8 space-y-4 lg:space-x-8 lg:space-x-reverse px-6 lg:px-8">
        {/* Title */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[340px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
            Our Management Team
          </h2>
        </div>
        {/* Team Members */}
        <div className="flex space-x-6">

          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3 text-center">
            <img
              src="/images/management/director.jpg"
              alt="Jane Doe"
              className="w-[200px] h-[200px] mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="text-xl font-semibold">Lakshmi Mahto</h3>
            <p>Director</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3 text-center">
            <img
              src="/images/management/co_director.jpg"
              alt="John Smith"
              className="w-[200px] h-[200px] mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="text-xl font-semibold">Vijay</h3>
            <p>Co-director</p>
          </div>

        </div>
      </section>
    </div>
  );
}
