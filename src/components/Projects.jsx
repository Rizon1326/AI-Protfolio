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
      title: "Imbd Movie dataset sentiment analysis",
      whatIDid: "Created a drag-and-drop task management system with real-time updates and team collaboration features.",
      tags: ["Python", "TensorFlow", "Streamlit"],
      githubLink: "https://github.com/Rizon1326/Movie-Review-Sentiment-Analysis",
    },
    {
      title: "Eco_Life_AI_Project",
      whatIDid: "Designed and developed a responsive portfolio website to showcase my work and skills.",
      whatHappened: "The website attracted potential clients and employers, leading to new opportunities.",
      whatILearned: "Improved my skills in responsive design, animations, and optimizing site performance.",
      tags: ["Python", "FastAPI", "React", "Express", "Deepseek SDK"],
      githubLink: "https://github.com/Rizon1326/Eco_Life_AI_Project",
    },
    {
      title: "Mini Chess AI",
      whatIDid: "Minichess is a 6x5 chess game. This project features an AI opponent using Minimax with alpha-beta pruning and a user-friendly interface.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/Rizon1326/Mini_Chess_AI"
    },
    {
      title: "Wumpus-World-AI",
      whatIDid: "It is a 10x10 grid-based project where an agent uses AI techniques like logic, inference, probabilistic reasoning, and loop detection to navigate, collect gold, and achieve its goals.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/Rizon1326/Wumpus-World-AI"
    }
  ];
  
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          My Projects
        </h2>
        
        {/* Featured Project - First item gets more prominence on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* Mobile view filter options */}
        {/* <div className="mt-8 sm:mt-10 md:hidden">
          <div className="flex justify-center flex-wrap gap-2">
            <button className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors">
              All
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Web Dev
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              AI/ML
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Latest
            </button>
          </div>
        </div> */}
        
        {/* View more button */}
        {/* <div className="mt-10 sm:mt-12 flex justify-center">
          <a 
            href="https://github.com/Rizon1326?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            <span>View More Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;