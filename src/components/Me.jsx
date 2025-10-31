
import React from 'react'
import { motion } from "framer-motion";
import { assets } from '../assets/assets';

const Me = () => {
    return (
        <motion.section
        initial={{ opacity: 0, y: 50 }}       // 👈 start animation
        whileInView={{ opacity: 1, y: 0 }}    // 👈 animate when in viewport
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }} 
         id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-black">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4  text-gray-300 mb-6">Hi, I'm <span className="text-purple-500">Sanduni
                        Sathsarani</span></h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 typewriter  text-gray-300 mb-10">AI/ML Enthusiast</h2>
                    <p className="text-lg text-gray-300 mb-15">I am passionate about researching and developing intelligent AI/ML systems that learn,predict and solve real-world problems.</p>
                    <div className="flex space-x-4">
                        <a href="#projects"
                            className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-500">View
                            Work</a>
                        <a href="#contact"
                            className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">Contact
                            Me</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse-slow opacity-70">
                        </div>
                        <motion.img
                            animate={{ y: [0, -20, 0] }} // Moves up and back down
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            src={assets.profileimg} alt="Profile"
                            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float" />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Me;
