import React from 'react'
import {motion} from "motion/react"

import reactpng from "../assets/images/react2.png";
import node from "../assets/images/node2.png";
import mongo from "../assets/images/mongo2.png";
import express from "../assets/images/express2.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import tailwind from "../assets/images/tailwind.png";
import gsap from "../assets/images/gsap.png";
import framer from "../assets/images/framer.png"



function Skills() {

 const skillContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,  
      staggerChildren: 0.3
    }
  }
};
const skillItemVariants = {

  visible: {
    scale: [1,0.6,1.5,1],
    opacity:1,
    // opacity: [1,0.7,1],
    // rotate:360,
    transition: { duration: .6 }
  }
};

    const skills=[
        {
            id:1,
            logo:html,
            name:"Html"
        },
        {
            id:2,
            logo:css,
            name:"Css"
        },
        {
            id:3,
            logo:js,
            name:"JavaScript"
        },
        {
            id:4,
            logo:reactpng,
            name:"React"
        },
        {
            id:5,
            logo:tailwind,
            name:"Tailwind"
        },
        {
            id:6,
            logo:node,
            name:"Node.js"
        },
        {
            id:7,
            logo:express,
            name:"Express.js"
        },
        {
            id:8,
            logo:mongo,
            name:"MongoDb"
        },
        {
            id:9,
            logo:gsap,
            name:"GSAP"
        },
        {
            id:10,
            logo:framer,
            name:"Framer Motion"
        }, 
           

    ]
  return (
    <div>
      <div name="Skills" className="w-screen py-5 relative top-[10vh] md:top-[-5vh]">
        <h2 className='text-3xl font-bold mb-10 text-center'>Skills</h2>
        <motion.div
         variants={skillContainerVariant}
         initial="hidden"
         whileInView="visible" 
        viewport={{ once: true }}
        className=" grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-6 px-10 md:px-20"
        >
            {
                skills.map(({id,logo,name})=>
                    (
                        <motion.div variants={skillItemVariants}
                         className=" flex flex-col justify-center items-center  p-5 rounded-xl hover:scale-110 duration-300  bg-slate-800/30 backdrop-blur-xl border  border-cyan-400 shadow-cyan-300  shadow-[0_0_15px_]  hover:shadow-[0_0_30px_rgba(0,255,255,1)]  " key={id}>
                            <img className='h-30 w-30' src={logo} alt="hhh" />
                            <h3>{name}</h3>
                            <div className="absolute inset-0 pointer-events-none  opacity-10"></div>
                        </motion.div>
                    )
                )
            }
        </motion.div>
      </div>
      <hr className='relative top-[10vh] md:top-0'/>
    </div>
  )
}

export default Skills
