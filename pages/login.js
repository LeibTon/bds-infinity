import React, { useState } from "react";
import Head from "next/head";

export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <Head>
        <title>Login | BDS Infinity</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <label className="block text-sm mb-2">Select Login Type:</label>
      <select 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="admin">Admin</option>
        <option value="center">Center</option>
        <option value="student">Student</option>
      </select>
      <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Login as {role}
      </button>
    </div>
  );
}
