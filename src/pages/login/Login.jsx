import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission or validation can be added here
    console.log("Logging in with:", email, password);
    navigate("/"); // Redirect to home page after successful login
  };

  return (
    <div className="w-96 p-6 border mx-auto mt-7 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <p className="text-center text-sm mb-6">
        Please enter your credentials to log in.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-slate-300 py-2 px-4 rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          Go home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ml-2 bg-slate-300 py-2 px-4 rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Login;
