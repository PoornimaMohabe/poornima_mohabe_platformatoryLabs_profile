import React from "react";
import { BASE_URL } from "../../utils/url";

const LoginPage = () => {
  const handleLogin = () => {
    window.open(`${BASE_URL}/auth/google`, "_self");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-300 via-indigo-200 to-pink-100 text-white">
      <h1 className="text-4xl text-black font-bold mb-4">Welcome to Profile Portal</h1>
      <button
        onClick={handleLogin}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;