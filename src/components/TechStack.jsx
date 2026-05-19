import React from 'react';
import { techStack } from '../data/portfolioData';
import Badge from './Badge';

const TechStack = () => {
  return (
    <section id="stack" className="bg-white border-y border-neutral-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl text-blue-800 mb-16 font-bold">Stack Técnico</h3>
        <div className="flex flex-wrap gap-4 flex justify-center" >
          {techStack.map((tech, index) => (
            <Badge key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;