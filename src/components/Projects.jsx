


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