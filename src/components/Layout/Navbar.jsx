import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-gray-900 flex items-center justify-between px-10 fixed top-0 left-0 shadow-md z-50">
      {/* Verizon Logo */}
      <img src="/verizon-logo.png" alt="Verizon Logo" className="h-12" />

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link to="/" className="text-white text-lg font-semibold hover:text-red-500 transition duration-300">
          Home
        </Link>
        {/* Uncomment below if login is needed */}
        {/* <Link to="/login" className="text-white text-lg font-semibold hover:text-red-500 transition duration-300">
          Login
        </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
