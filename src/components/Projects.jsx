


import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection using Machine Learning",
      whatIDid: "Built a fake news detection system that classifies news articles as real or fake. Utilized machine learning techniques for classification and implemented a Streamlit web app for interactive usage.",
      tags: ["Python", "Scikit-learn", "Pandas", "Streamlit", "NLP"],
      githubLink: "https://github.com/Rafid13iit/fakeNewsDetection_AI_Project-3",
    },
    {
      title: "8-Puzzle Solver using Search Algorithms",
      whatIDid: "Developed a solver for the classic 8-puzzle problem using AI search techniques like A*, BFS, and DFS. The solution visualizes the steps from the initial to goal state.",
      tags: ["Python", "AI", "A*", "Search Algorithms"],
      githubLink: "https://github.com/Rafid13iit/8-PuzzleSolver_AI_Project-0",
    },
    {
      title: "Mini Chess Game with AI Opponent",
      whatIDid: "Built a simplified version of chess where a human can play against an AI. The AI uses the Minimax algorithm with Alpha-Beta pruning to make intelligent decisions.",
      tags: ["Python", "Minimax", "Alpha-Beta Pruning", "Game AI"],
      githubLink: "https://github.com/Rafid13iit/miniChess_AI_Project-1",
    },
    {
      title: "Wumpus World Intelligent Agent",
      whatIDid: "Implemented a logic-based intelligent agent to navigate the Wumpus World. The agent uses propositional logic and inference to make safe moves and locate the gold.",
      tags: ["Python", "Propositional Logic", "AI Agent", "Knowledge Base"],
      githubLink: "https://github.com/Rafid13iit/WumpusWorld_AI_Project-2",
    },
    {
      title: "BitFest 2025 Hackathon Project – KUET Final",
      whatIDid: "Participated in BitFest Hackathon 2025 finals at KUET. Worked on an innovative tech solution under time constraints, focusing on real-world impact and AI integration.",
      tags: ["Hackathon", "Team Project", "AI", "Innovation"],
      githubLink: "https://github.com/Rafid13iit/BitFest_Hackathon_2025_Kuet_Final",
    },
    {
      title: "Urban Heat Island Mitigation – AI for Change Hackathon",
      whatIDid: "Developed an AI-powered solution to identify and mitigate urban heat islands using geospatial data, real-time monitoring, and green infrastructure recommendations.",
      tags: ["Hackathon", "AI", "Climate Tech", "Geospatial Analysis"],
      githubLink: "https://github.com/Rafid13iit/AI-for-Change-Hackathon",
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