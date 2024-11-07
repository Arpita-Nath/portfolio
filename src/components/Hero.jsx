import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/images/cropped-my.png'
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="lg:border-b lg:border-neutral-800 pb-32 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto">
            <div className="col-span-1 my-auto mx-auto h-auto w-[250px] lg:w-[400px]">
                <motion.img 
                initial =  {{x: 100, opacity: 0}}
                animate = {{x: 0, opacity: 1}}
                transition = {{duration: 1, delay: 1.2}}
                src={profilePic} alt="img" />
            </div>

            <div className="col-span-2 px-5 my-auto">
                <motion.h1 
                variants = {container(1)}
                initial = "hidden"
                animate = "visible"
                className="text-white text-2xl sm:text-3xl lg:text-5xl font-extrabold">
                    <span className="primary-color lg:text-7xl pb-8">I'm a</span><br />
                    <TypeAnimation 
                        sequence={[
                            "Frontend Developer",
                            1000,
                            "Backend Developer",
                            1000,
                            "Programmer",
                            1000,
                            "Software Engineer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.h1>

                <motion.div 
                variants = {container(1.5)}
                initial = "hidden"
                animate = "visible"
                className="mt-16 flex gap-x-8">
                    <a download href="../../public/Arpita_Nath_JOB.pdf" className="btn"><span className="z-50">Download CV</span></a>
                    <a href="#contact" className="btn"><span className="z-50">Contact</span></a>
                    {/* <a href="#contact" className="py-3 px-6 w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none">Contact</a> */}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero