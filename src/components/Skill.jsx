import React from 'react';
import { motion } from 'framer-motion';
import { skills as skillsData } from '../assets/assets';

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id="skills"
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-200">
          My <span className="text-purple-500">Skills</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => {
            const Icon = skill.tags[0]?.icon; // example, if you want to show first icon
            return (
              <div key={index} className="bg-neutral-800 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer">
                <div className="flex items-center mb-4">
                  {Icon && <Icon className="w-12 h-12 text-purple-500 mr-6" />}
                  <h3 className="text-xl font-semibold text-gray-50">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600 rounded-full text-sm text-gray-50">{tech.name}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
