import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Imagen de fondo */}
      <img
        src="/images/hero2.jpg"
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura sobre la imagen */}
      <div className="hero-overlay" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-bold leading-tight fade-in-up">
            Hola, soy {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-4xl text-blue-300 mb-5 leading-tight font-bold fade-in-up">
            {personalInfo.title}
          </h2>
          <p className="text-xs md:text-xl text-blue-100 font-thin leading-relaxed fade-in-up delay-100">
            {personalInfo.description}
          </p>

          {/* Botones */}
          <div className="flex gap-4 mt-6">
            <a href="#proyectos" className="text-xs md:text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Proyectos
            </a>
            <a href="/cv.pdf" target="_blank" className="text-xs md:text-sm px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-colors backdrop-blur-sm">
              CV
            </a>
          </div>
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