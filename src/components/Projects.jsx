import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl md:text-4xl text-blue-800 mb-16 font-bold fade-in-up">Proyectos</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

