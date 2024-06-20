import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-[#FFF5E1] p-4">
      <div className="logo">
        <Link to="/">
          <div className="bg-[#E8DABA] p-2 rounded">
            <span className="font-bold text-gray-700">S A A</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className={`text-black hover:underline ${location.pathname === '/' ? 'font-bold' : 'font-normal'}`}
        >
          Home
        </Link>
        <Link
          to="/project"
          className={`text-black hover:underline ${location.pathname === '/project' ? 'font-bold' : 'font-normal'}`}
        >
          Project
        </Link>
        <Link
          to="/about"
          className={`text-black hover:underline ${location.pathname === '/about' ? 'font-bold' : 'font-normal'}`}
        >
          About me
        </Link>
        <a
          href="#contact"
          className={`text-black hover:underline ${location.hash === '#contact' ? 'font-bold' : 'font-normal'}`}
        >
          Contact
        </a>
      </div>
      <div className="text-gray-500 font-normal">
        <span>Portfolio</span>
      </div>
    </nav>
  );
};

export default Navbar;
