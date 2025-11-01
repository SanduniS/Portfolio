
import React from 'react'

const ProjectCard = ({ title, description, image, tech, github }) => {
  return (
    <div className="bg-neutral-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
    <img src={image} alt={title} className="w-full h-60 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-50">{title}</h3>
      <p className="text-gray-50 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-50">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          View Code
        </a>
        {/* <a
          href="#"
          className="flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition-colors"
        >
          Code
        </a> */}
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;
