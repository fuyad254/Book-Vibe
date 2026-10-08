import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
      <nav className="">
      <div className="mx-auto flex container items-center justify-between px-5 py-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-[#151515]">
          Book ibe
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href=""
            className="rounded-md border border-[#16c20e] px-4 py-2.5 text-sm font-medium text-[#16c20e]"
          >
            Home
          </Link>

          <Link
            href="/booklist"
            className="text-sm font-medium text-gray-600 transition hover:text-[#16c20e]"
          >
            Books
          </Link>

          <Link
            href="/selectedbook"
            className="text-sm font-medium text-gray-600 transition hover:text-[#16c20e]"
          >
            Listed Books
          </Link>

          <Link
            href="/readPage"
            className="text-sm font-medium text-gray-600 transition hover:text-[#16c20e]"
          >
            Pages to Read
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-md cursor-pointer bg-[#13c20b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0eaa08]">
            Sign In
          </button>

          <button className="rounded-md cursor-pointer bg-[#54c1d3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3fb2c5]">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="text-2xl md:hidden">
          ☰
        </button>
      </div>
    </nav>
    );
};

export default Navbar;