import React from 'react';
import { motion } from "framer-motion";
import profileImg from '../assets/profileimg.jpg'; // ✅ Correct image import

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      id="about"
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-300">
          About <span className="text-gray-300">Me</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
        

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="md:w-1/2 mx-auto"
          >
            <div className="rounded-2xl p-6">
              <p className="text-gray-300 mb-4 text-justify " >
                I’m Sanduni Sathsarani, a third-year Computer Science undergraduate at the University of Sri Jayewardenepura, deeply passionate about Artificial Intelligence and Machine Learning.
              </p>
              <p className="text-gray-300 mb-4 text-justify">
                My curiosity lies in exploring how intelligent systems can learn, adapt, and make decisions that transform industries and improve everyday life. I’m particularly interested in areas like deep learning, natural language processing, computer vision, few-shot learning, and predictive analytics.
              </p>
              <p className="text-gray-300 mb-4 text-justify">
                I enjoy working on projects that combine data, algorithms, and creativity to uncover insights and build smart, efficient solutions. With a growing enthusiasm for AI research and real-world applications, I’m continuously learning, experimenting, and striving to contribute to the evolving field of intelligent technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About; // ✅ Default export
