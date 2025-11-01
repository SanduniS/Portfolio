import React from 'react'
import { motion } from "framer-motion";
import { educationData } from '../assets/assets';

const Education = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 1, ease: 'easeOut' }} 
    id="education" className="py-20 bg-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-purple-500">Education</h2>
            <p className="text-center max-w-2xl mx-auto mb-16 text-gray-50">My academic journey so far</p>

            <div className="max-w-3xl mx-auto">
                <div className="space-y-12">
                    {
                        educationData.map((data, index)=>(
                        <div key={index} className="timeline-item relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            <div className="timeline-dot absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>
                            <div className="bg-neutral-800 rounded-2xl p-6 card-hover">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-gray-50">{data.company}</h3>
                                </div>
                                <p className="text-gray-300 mb-2">{data.degree}</p>
                                <p className="text-gray-300 mb-2">{data.duration}</p>

                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Education ;