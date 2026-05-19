import React from 'react';
import Header from './components/Header';
import Sobremi from './components/Sobremi';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Sobremi />
        <Projects />
        <TechStack />
        <Experiencia/>
        <Formacion />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;