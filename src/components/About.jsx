// src/components/About.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Brain, BookOpen, MessageSquare, Star, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const [activeInfo, setActiveInfo] = useState("education");
  const [activeTab, setActiveTab] = useState("about");
  
  const infoIcons = {
    education: <BookOpen className="text-blue-500" />,
    skills: <Code className="text-green-500" />,
    passion: <Brain className="text-purple-500" />,
    work: <Cpu className="text-red-500" />
  };
  
  const infoContent = {
    education: "Software Engineering student at Institute of Information Technology, University of Dhaka",
    skills: "Experienced in Java, Python, JavaScript, React, Node.js, and Django",
    passion: "Passionate about AI research and development alongside software engineering",
    work: "Currently interning at Brain Station 23, a leading software company in Bangladesh"
  };

  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      institution: "Institute of Information Technology, University of Dhaka",
      year: "2020 - Present"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Ananada Mohan College. Mymensingh",
      year: "2018 - 2020"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Mymensingh Zilla School. Mymensingh",
      year: "2016 - 2018"
    }
  ];

  const experience = [
    {
      position: "Intern",
      company: "BRAIN Station 23",
      period: "Present",
      description: "Working as an intern at BRAIN Station 23, focusing on software development projects and gaining hands-on experience in industry-standard practices."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  const tabVariants = {
    active: { 
      color: '#3b82f6', 
      borderBottom: '3px solid #3b82f6',
      fontWeight: 600
    },
    inactive: { 
      color: '#6b7280', 
      borderBottom: '3px solid transparent',
      fontWeight: 400
    }
  };

  return (
    <section id="about" className="section bg-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        {/* Responsive Tab Navigation */}
        <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto">
          <div className="inline-flex bg-gray-100 rounded-full p-1 flex-wrap md:flex-nowrap">
            <motion.button
              className="px-3 md:px-6 py-2 rounded-full flex items-center space-x-1 md:space-x-2 text-sm md:text-base whitespace-nowrap"
              variants={tabVariants}
              animate={activeTab === "about" ? "active" : "inactive"}
              onClick={() => setActiveTab("about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={16} className="flex-shrink-0" />
              <span>Who I Am</span>
            </motion.button>
            
            <motion.button
              className="px-3 md:px-6 py-2 rounded-full flex items-center space-x-1 md:space-x-2 text-sm md:text-base whitespace-nowrap"
              variants={tabVariants}
              animate={activeTab === "education" ? "active" : "inactive"}
              onClick={() => setActiveTab("education")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap size={16} className="flex-shrink-0" />
              <span>Education</span>
            </motion.button>
            
            <motion.button
              className="px-3 md:px-6 py-2 rounded-full flex items-center space-x-1 md:space-x-2 text-sm md:text-base whitespace-nowrap"
              variants={tabVariants}
              animate={activeTab === "experience" ? "active" : "inactive"}
              onClick={() => setActiveTab("experience")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase size={16} className="flex-shrink-0" />
              <span>Experience</span>
            </motion.button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6 md:gap-10">
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="p-4 md:p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center">
                <MessageSquare className="mr-2 text-blue-600" size={20} />
                Who I Am
              </h3>
              
              {/* Responsive Info Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
                {Object.keys(infoIcons).map((key) => (
                  <motion.div
                    key={key}
                    className={`p-2 md:p-3 rounded-lg cursor-pointer flex flex-col items-center text-center ${
                      activeInfo === key 
                        ? "bg-blue-50 border-2 border-blue-300" 
                        : "bg-gray-50 border border-gray-200"
                    }`}
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveInfo(key)}
                  >
                    <div className="text-lg md:text-xl mb-1 md:mb-2">{infoIcons[key]}</div>
                    <div className="text-xs md:text-sm font-medium capitalize">{key}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Responsive Info Content */}
              <motion.div 
                className="bg-blue-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6 min-h-16 md:min-h-20 flex items-center"
                key={activeInfo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-2 md:mr-3 text-blue-500 text-xl md:text-2xl flex-shrink-0">
                  {infoIcons[activeInfo]}
                </div>
                <p className="text-gray-800 text-sm md:text-base">{infoContent[activeInfo]}</p>
              </motion.div>
              
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                As a student at the University of Dhaka's Institute of Information Technology, I'm currently working as an intern at Brain Station 23, one of Bangladesh's leading software development companies. Alongside my software engineering studies, I have a strong passion for AI research and development.
              </p>
              
              <p className="text-sm md:text-base text-gray-700">
                When I'm not coding or exploring AI technologies, you can find me participating in hackathons and continuously learning to improve my skills in both software development and artificial intelligence.
              </p>
            </motion.div>
          )}
          
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-4 md:p-5 rounded-lg border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                      <GraduationCap className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">{item.degree}</h4>
                      <p className="text-gray-600 text-sm md:text-base">{item.institution}</p>
                      <p className="text-gray-500 text-xs md:text-sm flex items-center mt-1 md:mt-2">
                        <Star size={14} className="mr-1 text-yellow-500" />
                        {item.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              {experience.map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-4 md:p-5 rounded-lg border-l-4 border-green-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                      <Briefcase className="text-green-600 w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">{item.position}</h4>
                      <p className="text-gray-600 text-sm md:text-base">{item.company}</p>
                      <p className="text-gray-500 text-xs md:text-sm flex items-center mt-1 md:mt-2">
                        <Star size={14} className="mr-1 text-yellow-500" />
                        {item.period}
                      </p>
                      <p className="text-gray-700 text-sm md:text-base mt-1 md:mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;