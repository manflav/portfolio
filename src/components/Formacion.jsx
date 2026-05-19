import React from 'react';
import FormCard from './FormCard';
import { formacion } from '../data/portfolioData';

const Formacion = () => {
  return (
    <section id="formacion" className="bg-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl text-blue-800 mb-16 font-bold fade-in-up">Formación</h3>

        {/* Línea vertical + cards */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200" />
          {formacion.map((item, index) => (
            <FormCard key={item.id} formacion={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Formacion;