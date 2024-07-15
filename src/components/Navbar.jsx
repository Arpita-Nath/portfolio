import React, {useState} from 'react'
import logo from '../assets/images/Arpita.png'
import logox from '../assets/images/Arpita1.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion"


// import { FaLinkedin } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";




const Navbar = () => {

  const [nav,setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <motion.div 
       initial =  {{x: -100, opacity: 0}}
       animate = {{x: 0, opacity: 1}}
       transition = {{duration: 1, delay: 1.2}}
        className='h-28 w-32	 flex flex-shrink-0 items-center'>
        <img className='w-full h-full object-cover' src={logo} alt="logo" />
      </motion.div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        {/* <FaLinkedin />
        <FaGithub />
        <FaFacebook /> */}
        <motion.ul 
         initial =  {{x: 100, opacity: 0}}
         animate = {{x: 0, opacity: 1}}
         transition = {{duration: 1, delay: 1.2}}
        className='hidden md:flex'>
          <li className="p-5 text_color transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-200 inline-block"><a href="#about">About</a></li>
          <li className="p-5 text_color transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-200 inline-block"><a href="#work">Work</a></li>
          <li className="p-5 text_color transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-200 inline-block"><a href="#contact">Contact</a></li>
        </motion.ul>
      </div>

      <div className="block md:hidden mr-6" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <div className='h-16 w-24	 flex flex-shrink-0 items-center'>
          <img className='w-full h-full object-cover' src={logo} alt="logo" />
        </div> 
        <ul className='p-8 text-2xl'>
          <li className="p-2"><a href="#home">Home</a></li>
          <li className="p-2"><a href="#about">About</a></li>
          <li className="p-2"><a href="#work">Work</a></li>
          <li className="p-2"><a href="#experiences">Experiences</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
