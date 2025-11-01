import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contacy" className="py-12 bg-black border-t border-dark-400">
      <div className="container mx-auto px-6 text-center">
        {/* Contact Title */}
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          Get in <span className="text-purple-500">Touch</span>
        </h3>

        {/* Email */}
        <p className="text-gray-400 mb-6">
          <a 
            href="mailto:SanduniSathsaranipa@gmail.com"
            className=" hover:text-gray-50 transition-colors"
          >
            sandunisathsaranipa@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://github.com/SanduniS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/sandunisathsarani/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:your-email@example.com"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-300 hover:bg-pink-500 hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-sm">
          © 2025 Created by <span className="text-purple-400">Sanduni Sathsarani</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
