import React from 'react';

const FormCard = ({ formacion, index }) => {
  return (
    <div className="relative pl-10 mb-12">
      {/* Punto en la línea */}
      <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-800 border-2 border-white" />

      <div className="flex gap-4">
        {/* Imagen */}
        <img
          src={formacion.image}
          className="w-16 md:w-12 rounded-md object-contain"
        />

        {/* Datos */}
        <div>
          <span className="block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
            {formacion.periodo}
          </span>
          <h3 className="text-lg font-bold text-neutral-900">{formacion.titulo}</h3>
          <p className="font-semibold text-neutral-700">{formacion.escuela}</p>
          <p className="font-light text-gray-500 text-sm">{formacion.tipo}</p>
        </div>
      </div>

    </div>
  );
};

export default FormCard;