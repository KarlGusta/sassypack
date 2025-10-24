import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#212121] text-[#CFCFCF] shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          SassyPack
        </Link>

        {/* Centered Menu */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="#why" className="hover:text-[#F5AF00] transition">
            Why SassyPack
          </Link>
          <Link to="#inside" className="hover:text-[#F5AF00] transition">
            What's Inside
          </Link>
          <Link to="#pricing" className="hover:text-[#F5AF00] transition">
            Pricing
          </Link>
          <Link to="#early" className="hover:text-[#F5AF00] transition">
            Early Access
          </Link>
        </nav>

        {/* Get Now Button */}
        <a
          href="https://karlgusta.gumroad.com/l/mlixgb"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm border-none"
          style={{ backgroundColor: "#F5AF00", color: "#212121" }}
        >
          Get Now
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle text-[#F5AF00]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-3 shadow-lg bg-[#212121] text-[#CFCFCF] rounded-box w-52 mt-2 space-y-2"
          >
            <li>
              <Link to="#why" className="hover:text-[#F5AF00]">
                Why SassyPack
              </Link>
            </li>
            <li>
              <Link to="#inside" className="hover:text-[#F5AF00]">
                What's Inside
              </Link>
            </li>
            <li>
              <Link to="#pricing" className="hover:text-[#F5AF00]">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#early" className="hover:text-[#F5AF00]">
                Early Access
              </Link>
            </li>
            <li>
              <a
                href="https://karlgusta.gumroad.com/l/mlixgb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm border-none w-full"
                style={{ backgroundColor: "#F5AF00", color: "#212121" }}
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
