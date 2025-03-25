import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate()

  const toggleAuthMode = () => {
    setIsSignup(!isSignup)
    navigate("/")
    alert("Login successful! 🎊")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-800 p-6">
      <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>

        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            onClick={toggleAuthMode}
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-300">
          {isSignup ? "Already have an account?" : "Don't have an account?"} 
          <button
            onClick={toggleAuthMode}
            className="text-yellow-400 font-bold hover:underline ml-1"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
        <div className="text-center mt-6">
          <Link to="/" className="text-blue-300 hover:underline font-semibold">
            ⬅️ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
