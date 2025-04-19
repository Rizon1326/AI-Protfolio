// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI<span className="text-primary">Portfolio</span></h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Exploring the frontiers of artificial intelligence through research and development.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 sm:mb-0"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Research Areas</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-gray-400 text-sm sm:text-base">Machine Learning</li>
              <li className="text-gray-400 text-sm sm:text-base">Natural Language Processing</li>
              <li className="text-gray-400 text-sm sm:text-base">Computer Vision</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs sm:text-sm">&copy; {currentYear} Khandakar Mehedi Hasan. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;