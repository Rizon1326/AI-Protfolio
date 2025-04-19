// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
              <span className="text-gray-900">Hello, I'm</span>
              <div className="text-primary mt-1 sm:mt-2">Tahsin Ahmed</div>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-6">
              Undergrad Computer Science and Engineering Student
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
            I'm passionate about connecting AI, optimization, and low-level hardware systems to build efficient, intelligent solutions. I love tackling complex problems where software meets hardware, aiming to push performance and resource efficiency to the next level.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-pink-500 text-white font-bold text-sm sm:text-base shadow-md hover:bg-pink-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onMouseOver={(e) => e.currentTarget.innerHTML = '✨ View Projects 💖'}
                onMouseOut={(e) => e.currentTarget.innerHTML = '⭐ View Projects'}
              >
                ⭐ View Projects
              </a>
              <a
                href="#contact"
                className="btn px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border-2 border-purple-300 text-purple-600 font-bold text-sm sm:text-base shadow-md hover:bg-purple-50 hover:border-purple-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onMouseOver={(e) => e.currentTarget.innerHTML = '✉️ Contact Me ✨'}
                onMouseOut={(e) => e.currentTarget.innerHTML = '📱 Contact Me'}
              >
                📱 Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400 to-green-400 shadow-xl overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/src/assets/tahsin.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400?text=Your+Photo";
                  }}
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white p-2 sm:p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-base">AI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;