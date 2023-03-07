import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="h-[80px] flex justify-between items-center px-5 bg-gray-800 text-white">
      <span className="font-bold">React+TS</span>

      <Link to="/" className="mr-4">
        Products
      </Link>
      <Link to="/about" className="mr-6">
        About
      </Link>
    </nav>
  );
}
