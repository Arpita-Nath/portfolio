import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoPython, IoNutrition } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";


const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="text-[#00e1ff] my-20 text-center text-4xl ">My Skills</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial = {{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariant(2.5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-[#ff6145]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoPython className="text-7xl text-[yellow]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <ImHtmlFive className="text-7xl text-[#ff9500]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(2)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-[#0088ff]"/>
            </motion.div>
            <motion.div
            variants={iconVariant(6)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNodejs className="text-7xl text-[#298000]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(4)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-[#38ffd7]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandRedux className="text-7xl text-[#a34bfb]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>
            </motion.div>
            
            <motion.div 
            variants={iconVariant(6)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFirebase className="text-7xl text-[#ffbe45]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(2.5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMui className="text-7xl text-[#43cff9]"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-[#db43f9]"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies