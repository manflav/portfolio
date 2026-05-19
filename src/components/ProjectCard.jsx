import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card block bg-white border border-neutral-200 overflow-hidden rounded-lg fade-in-up delay-${(index + 1) * 100}`}
    >
    <div 
        
        className={`project-card bg-white border border-neutral-200 overflow-hidden rounded-lg fade-in-up delay-${(index + 1) * 100}`}
    >
      <div className="project-card-image h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl mb-3 font-semibold">{project.title}</h4>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="text-xs px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;