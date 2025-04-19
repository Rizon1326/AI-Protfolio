import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Waste Management System",
      whatIDid: "Developed a web application for classifying and managing waste. It was a combined project. I have made a data set of 5000 images. Trainded a model using Tensorflow and Keras. I have vectorize the images and save the vectors in a database. Then i have classify the image by cosine similarity.",
      tags: ["Python", "TensorFlow", "Streamlit"],
      githubLink: "https://github.com/Rizon1326/E-Waste",
    },
    {
      title:"Resume Screening App",
      whatIDid:"Developing a python and streamlit based project to screen resume and get the score on it"
    } 
    
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