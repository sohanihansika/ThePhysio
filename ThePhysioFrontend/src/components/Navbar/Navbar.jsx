import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#051B40] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="w-16" />
          <span className="ml-4 text-2xl font-bold">The Physio</span>
        </div>
        <nav className="hidden md:flex space-x-8 ml-auto">
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#join" className="hover:text-gray-300">
            Join
          </a>
        </nav>
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#051B40] text-white p-4 flex justify-end">
          <div className="flex flex-col items-end">
            <a href="#services" className="block py-2 hover:text-gray-300">
              Services
            </a>
            <a href="#about" className="block py-2 hover:text-gray-300">
              About
            </a>
            <a href="#join" className="block py-2 hover:text-gray-300">
              Join
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
