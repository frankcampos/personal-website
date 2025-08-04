"use client";
import React from 'react';
import { projects } from '../../lib/projectData';
import Image from 'next/image';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-contain"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {project.responsibilities && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {project.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                View App
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
