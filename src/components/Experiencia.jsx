import React from 'react';
import { experiencia } from '../data/portfolioData';

const Experiencia = () => {
  return (
    <section id="experiencia" className="bg-neutral-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl text-blue-800 mb-16 font-bold">Experiencia</h3>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200" />

          <div className="flex flex-col gap-12">
            {experiencia.map((item, index) => (
              <div key={index} className="relative pl-10">
                {/* Punto en la línea */}
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-800 border-2 border-white" />

                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  {item.periodo}  
                </span>
                <span className="text-xs ml-2">[{item.lugar}]</span>
                <h4 className="text-xl font-bold text-neutral-900 mt-1">{item.puesto}</h4>
                <p className="text-sm font-semibold text-neutral-500 mb-2">{item.empresa}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experiencia;

