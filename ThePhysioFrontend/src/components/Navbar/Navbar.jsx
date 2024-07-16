import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BiSun, BiMoon } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="w-16" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#join" className="hover:text-primary">
            Join
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? <BiSun size={24} /> : <BiMoon size={24} />}
          </button>
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          <a href="#services" className="block py-2 hover:text-primary">
            Services
          </a>
          <a href="#about" className="block py-2 hover:text-primary">
            About
          </a>
          <a href="#join" className="block py-2 hover:text-primary">
            Join
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
