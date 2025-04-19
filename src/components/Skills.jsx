import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    "Natural Language Processing",
    "Computer Vision",
    "Python",
    "Django",
    "FastAPI",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",
    "Machine Learning",
    "Streamlit",
    "Sktlearn",
    "Spring Boot",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Rust"
  ];

  const aiTheories = [
    "Propositional Logic",
    "Alpha-Beta Pruning",
    "Min-Max Algorithm",
    "Heuristic Search",
    "Constraint Satisfaction Problems (CSP)",
    "Bayesian Networks",
    "Knowledge Representation",
    "A* Search Algorithm",
    "Hidden Markov Models (HMM)",
    "Support Vector Machines (SVM)",
    "Supprt vector classification",
    "Cosine similarity",
    "Embedding",
    "Random Forest",
    "Decision Trees",
    "Linear Regression",
    "K-Nearest Neighbors (KNN)",

  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          <motion.div
            className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
              Technical Skills
            </h3>

            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-2 bg-blue-50 p-2 sm:p-3 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-blue-600 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base font-medium text-gray-700 truncate">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
              AI Theories & Concepts
            </h3>

            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aiTheories.map((theory, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-2 bg-purple-50 p-2 sm:p-3 rounded-lg hover:bg-purple-100 transition-colors duration-300"
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-purple-600 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base font-medium text-gray-700 truncate">{theory}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 sm:mt-8 p-3 sm:p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-1 sm:mb-2 text-gray-800 text-sm sm:text-base">Focus Areas</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                Specialized in developing AI solutions with a focus on Natural Language Processing
                and Computer Vision applications using Python and modern frameworks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;