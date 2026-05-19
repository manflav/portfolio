import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

// Hook personalizado para detectar scroll
const useScrollPosition = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    // Verificar posición inicial (por si ya hay scroll al cargar)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

const Header = () => {
  const scrolled = useScrollPosition(50);
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Formación', href: '#formacion', id: 'formacion' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-neutral-200' 
            : 'bg-transparent'
        }`}
        style={{ animation: 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 py-6 lg:py-8 flex justify-between items-center">
          <a 
            href="#" 
            className={`text-2xl lg:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-blue-800' : 'text-white'
            }`}
          >
            ManFlav
          </a>
          
          {/* Nav desktop */}
          <nav className="hidden md:flex gap-8 lg:gap-12">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`relative text-xs lg:text-sm uppercase tracking-widest font-medium transition-colors duration-300 group ${
                  scrolled 
                    ? 'text-neutral-600 hover:text-blue-800' 
                    : 'text-white hover:text-white/80'
                } ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500 -mb-1 ${
                  scrolled ? 'bg-blue-800' : 'bg-white'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Botón hamburguesa - solo móvil */}
          <button 
            className={`md:hidden transition-colors ${
              scrolled ? 'text-neutral-600 hover:text-blue-800' : 'text-white hover:text-white/80'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Iconos sociales - solo desktop */}
          <div className="hidden md:flex gap-4 ml-8">
            <a 
              href="https://instagram.com/manuelflav"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-neutral-600 hover:text-blue-800' : 'text-white hover:text-white/80'
              }`}
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a 
              href="https://linkedin.com/in/manuelfloresaviles"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-neutral-600 hover:text-blue-800' : 'text-white hover:text-white/80'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href="https://github.com/manflav"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-neutral-600 hover:text-blue-800' : 'text-white hover:text-white/80'
              }`}
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-neutral-200 z-40">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                className={`font-medium py-3 transition-colors ${
                  activeLink === link.id 
                    ? 'text-blue-800' 
                    : 'text-neutral-600 hover:text-blue-800'
                }`}
                onClick={() => {
                  setActiveLink(link.id);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Iconos flotantes - solo móvil */}
      <div className="md:hidden fixed bottom-6 right-4 z-50 flex gap-3">
        <a 
          href="https://instagram.com/manuelflav"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg rounded-full p-3 text-neutral-600 hover:text-blue-800 transition-colors border border-neutral-200"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/manuelfloresaviles"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg rounded-full p-3 text-neutral-600 hover:text-blue-800 transition-colors border border-neutral-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://github.com/manflav"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg rounded-full p-3 text-neutral-600 hover:text-blue-800 transition-colors border border-neutral-200"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </>
  );
};

export default Header;