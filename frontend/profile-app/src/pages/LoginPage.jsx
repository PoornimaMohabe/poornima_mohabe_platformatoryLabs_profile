import React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    window.open("http://localhost:4500/auth/google", "_self");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Profile Portal</h1>
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