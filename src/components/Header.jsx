// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black bg-opacity-30 backdrop-blur shadow-md text-center py-6 px-4">
      <h1 className="text-4xl font-bold tracking-wide text-white">Cristy Parsons</h1>
      <p className="text-lg text-gray-300 mt-2">Software Engineer • Automation Specialist</p>

      <nav className="mt-4 flex justify-center space-x-6">
        <Link to="/" className="text-blue-400 hover:text-white transition duration-200">Home</Link>
        <Link to="/skills" className="text-blue-400 hover:text-white transition duration-200">Skills</Link>
        <Link to="/projects" className="text-blue-400 hover:text-white transition duration-200">Projects</Link>
        <Link to="/about" className="text-blue-400 hover:text-white transition duration-200">About</Link>
        <Link to="/contact" className="text-blue-400 hover:text-white transition duration-200">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
