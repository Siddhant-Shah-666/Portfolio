import React from 'react'
import { motion } from "framer-motion" // Fix: The import path for motion/react is usually 'framer-motion'

import { default as ReactPng } from "../assets/images/react.svg?react";
import { default as Node } from "../assets/images/nodedotjs.svg?react";
import { default as Mongo } from "../assets/images/mongodb.svg?react";
import { default as Express } from "../assets/images/express.svg?react";
import { default as Html } from "../assets/images/html5.svg?react";
import { default as Css } from "../assets/images/css.svg?react";
import { default as Js } from "../assets/images/javascript.svg?react";
import { default as Tailwind } from "../assets/images/tailwindcss.svg?react";
import { default as Gsap } from "../assets/images/gsap.svg?react";
import { default as Framer } from "../assets/images/framer.svg?react";


function Skills() {

  const skillContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,  
        staggerChildren: 0.15 
      }
    }
  };
  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260,
        damping: 20
      }
    }
  };

  const skills = [
    
    { id: 1, logo: Html, name: "Html" }, 
    { id: 2, logo: Css, name: "Css" },
    { id: 3, logo: Js, name: "JavaScript" },
    { id: 4, logo: ReactPng, name: "React" },
    { id: 5, logo: Tailwind, name: "Tailwind" },
    { id: 6, logo: Node, name: "Node.js" },
    { id: 7, logo: Express, name: "Express.js" },
    { id: 8, logo: Mongo, name: "MongoDb" },
    { id: 9, logo: Gsap, name: "GSAP" },
    { id: 10, logo: Framer, name: "Framer Motion" },
  ];

  return (
    <div>
      <div name="Skills" className="w-screen py-5 relative top-[10vh] md:top-[-5vh]">
        <h2 className='text-3xl font-bold mb-10 text-center text-white'>Skills</h2>
        <motion.div
          variants={skillContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-6 px-10 md:px-20"
        >
          {
            skills.map(({ id, logo: LogoComponent, name }) => 
              (
                <motion.div variants={skillItemVariants}
                  className=" flex flex-col justify-center items-center p-5 rounded-xl hover:scale-105 duration-300 bg-slate-800/30 backdrop-blur-xl border border-cyan-400 shadow-cyan-300 shadow-[0_0_15px_] hover:shadow-[0_0_30px_rgba(0,255,255,1)]" key={id}>
                  
                  
                  <LogoComponent className='h-12 w-12 text-cyan-400 mb-2' /> 
                  
                  <h3 className="text-white text-lg font-semibold">{name}</h3>
                  <div className="absolute inset-0 pointer-events-none opacity-10"></div>
                </motion.div>
              )
            )
          }
        </motion.div>
      </div>
      <hr className='relative top-[10vh] md:top-0 border-t border-cyan-400 opacity-50'/>
    </div>
  )
}

export default Skills