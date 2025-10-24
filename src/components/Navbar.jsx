import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">
          🚀 SassyPack
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="#why" className="hover:text-primary transition">Why SassyPack</Link>
          <Link to="#inside" className="hover:text-primary transition">What's Inside</Link>
          <Link to="#pricing" className="hover:text-primary transition">Pricing</Link>
          <Link to="#early" className="hover:text-primary transition">Early Access</Link>
          <a
            href="https://karlgusta.gumroad.com/l/mlixgb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Get Now
          </a>
        </nav>
        {/* Mobile Menu */}
        <div className="md:hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
          >
            <li><Link to="#why">Why SassyPack</Link></li>
            <li><Link to="#inside">What's Inside</Link></li>
            <li><Link to="#pricing">Pricing</Link></li>
            <li><Link to="#early">Early Access</Link></li>
            <li>
              <a
                href="https://karlgusta.gumroad.com/l/mlixgb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
