import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-blue-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs md:text-sm text-white">
          <p>
            © 2026 {personalInfo.name}
            <span className="hidden md:inline">. Todos los derechos reservados.</span>
          </p>
          <div className="hidden md:flex gap-6 font-medium">
            <a href={personalInfo.github} className="hover:text-neutral-300 transition-colors">GitHub</a>
            <a href={personalInfo.linkedin} className="hover:text-neutral-300 transition-colors">LinkedIn</a>
            <a href={personalInfo.instagram} className="hover:text-neutral-300 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;