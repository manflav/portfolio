import React from 'react';
import { personalInfo, sobreMi } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Imagen de fondo 
      <img
        src="/images/hero2.jpg"
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />*/}
      

      {/* Capa oscura sobre la imagen */}
      <div className="hero-overlay" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-4xl text-white-300 mb-5 leading-tight font-bold fade-in-up">
            {sobreMi.title}
          </h2>
          <p className="text-xs md:text-xl text-gray-800 font-thin leading-relaxed fade-in-up delay-100">
            {sobreMi.description}
          </p>
        </div>
      </div>

      {/* Flecha animada */}
      <a href="#proyectos" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

    </section>
  );
};

export default Hero;