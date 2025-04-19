


import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Sentiment Analysis",
      whatIDid:"I review and analysis data of 1000 rows for sentiment analysis",
      tags: ["Python", "TensorFlow", "NLP-tools"],
      githubLink: "https://www.kaggle.com/code/mhrizon/imdb-movie-reviwer/",
    },
    {
      title: "CV Data screening",
      whatIDid:"Using NLP tools I have reviewed and analysis data of 1000+ rows for CV screening",
      tags: ["Python", "TensorFlow", "NLP-tools"],
      githubLink: "https://www.kaggle.com/code/mhrizon/resume/",
    },
   
   
    
  ];
  
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          My Projects
        </h2>
        
        {/* Display all projects vertically */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} isFeatured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;