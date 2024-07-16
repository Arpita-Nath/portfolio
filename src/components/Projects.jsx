import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}} 
         className='my-20 text-center text-4xl text-[#00e1ff]'>Projects</motion.h2>
        <div>
          {PROJECTS.map((project,index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center gap-x-28'>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="overflow-hidden shadow-lg shadow-[#040c16] group rounded-md h-[200px] w-full lg:w-1/4 hover:scale-105 mb-6 relative">
                <img src={project.image} width={400} height={250} alt={project.title} />
                <div className="opacity-0 w-0 transition-all duration-500 group-hover:opacity-90 group-hover:w-full bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                  <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                  <div className="pt-8 text-center">
                    <a href={project.url} target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              className="w-full bg-cover max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>{project.title}</h6> 
                <p className='mb-4 text-neutral-400'>{project.description}</p> 
                {project.technologies.map((tech,index) => (
                  <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects