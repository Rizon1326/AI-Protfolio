import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // More elegant color variations
  const getCardColor = () => {
    const colors = [
      "from-indigo-400 to-blue-600", // Refined blue
      "from-violet-400 to-purple-600", // Rich purple
    ];
    
    const colorIndex = Math.abs(project.title.charCodeAt(0)) % colors.length;
    return colors[colorIndex];
  };

  // Header animation variants
  const headerVariants = {
    initial: { y: 0 },
    hover: { 
      y: [0, -5, 0],
      transition: { 
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: isOpen ? [0, -10, 0] : [0, 10, 0],
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  // Combined button variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.01,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    tap: { 
      scale: 0.98 
    }
  };

  return (
    <motion.div
      className="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={`w-full flex items-center justify-between p-3 sm:p-4 md:p-5 bg-gradient-to-r ${getCardColor()} text-white font-medium text-base sm:text-lg`}
        onClick={toggleOpen}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div 
          className="flex items-center space-x-2 sm:space-x-3"
          variants={headerVariants}
        >
          <motion.div 
            className="bg-white/20 p-1 sm:p-2 rounded-lg backdrop-blur-sm"
            variants={iconVariants}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </motion.div>
          <span className="text-white drop-shadow-md truncate">{project.title}</span>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-gradient-to-b from-gray-50 to-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 sm:p-5 md:p-6 grid gap-3 sm:gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-md mr-2 shadow-sm flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  What I Did:
                </h4>
                <p className="text-gray-700 text-sm sm:text-base ml-5 sm:ml-7">{project.whatIDid || "Designed and implemented the project from concept to completion."}</p>
              </div>
            
              <div className="mt-2">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                  <span className="bg-violet-100 text-violet-600 p-1 rounded-md mr-2 shadow-sm flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </span>
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-5 sm:ml-7">
                  {project.tags && project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 text-gray-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mt-3 sm:mt-4">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 text-xs sm:text-sm md:text-base shadow-sm"
                    whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span className="whitespace-nowrap">View on GitHub</span>
                  </motion.a>
                )}
                
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 text-xs sm:text-sm md:text-base shadow-sm"
                    whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="whitespace-nowrap">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;