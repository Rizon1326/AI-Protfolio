// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Linkedin, Facebook, Home } from 'lucide-react';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactItems = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+880 749649672",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "khandakarmehrab-2020915830@eee.du.ac.bd",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Electrical and Electronics Engineering, University of Dhaka, Bangladesh",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Home size={20} />,
      title: "Address",
      value: "Fazlul Haque Muslim Hall, Dokkhin Vaban- Room 5001, University of Dhaka, Bangladesh",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const socialLinks = [
    // {
    //   icon: <Github size={20} />,
    //   href: "https://github.com/Rizon1326",
    //   hoverColor: "hover:bg-gray-800 hover:text-white"
    // },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/mehrab-rishad-a89274279?",
      hoverColor: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/share/16RSXBtvSp/",
      hoverColor: "hover:bg-sky-500 hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 pb-2 border-b border-gray-200">
              Contact Information
            </h3>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 sm:gap-4"
                  variants={itemVariants}
                >
                  <div className={`${item.color} p-2 sm:p-3 rounded-full flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-words">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8 sm:mt-10">
              <h4 className="font-medium mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">Connect with me</h4>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href} 
                    className={`bg-gray-100 p-2 sm:p-3 rounded-full transition-all duration-300 ${link.hoverColor}`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="mt-8 sm:mt-10 p-3 sm:p-5 bg-blue-50 rounded-xl border border-blue-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">Currently Available For</h4>
              <ul className="space-y-1 sm:space-y-2 text-blue-700 text-sm sm:text-base">
                {/* <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Internship Opportunities</span>
                </li> */}
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Collaborative AI Research Projects</span>
                </li>
                {/* <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Software Development Work</span>
                </li> */}
              </ul>
            </motion.div>
            
            <motion.div 
              className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-600 text-xs sm:text-sm">
                You can reach me directly at{" "}
                <a href="mailto:khandakarmehrab-2020915830@eee.du.ac.bd" className="text-blue-600 hover:underline">
                khandakarmehrab-2020915830@eee.du.ac.bd
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;