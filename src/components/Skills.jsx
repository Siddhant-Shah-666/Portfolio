import React from 'react'
import { motion } from "framer-motion"

// --- 1. IMPORT SVG COMPONENTS ---
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


// --- 2. CREATE A MAP OF COMPONENTS (outside or inside the function) ---
const LogoMap = {
    Html: Html,
    Css: Css,
    Js: Js,
    React: ReactPng,
    Tailwind: Tailwind,
    Node: Node,
    Express: Express,
    Mongo: Mongo,
    Gsap: Gsap,
    Framer: Framer,
};


function Skills() {
    // ... (Your variant definitions remain the same)
    const skillContainerVariant = { /* ... */ };
    const skillItemVariants = { /* ... */ };

    // --- 3. DEFINE SKILLS ARRAY WITH STRING KEYS ---
    const skills = [
        // Store a simple string key that matches the LogoMap keys
        { id: 1, key: "Html", name: "Html" }, 
        { id: 2, key: "Css", name: "Css" },
        { id: 3, key: "Js", name: "JavaScript" },
        { id: 4, key: "React", name: "React" },
        { id: 5, key: "Tailwind", name: "Tailwind" },
        { id: 6, key: "Node", name: "Node.js" },
        { id: 7, key: "Express", name: "Express.js" },
        { id: 8, key: "Mongo", name: "MongoDb" },
        { id: 9, key: "Gsap", name: "GSAP" },
        { id: 10, key: "Framer", name: "Framer Motion" },
    ];

    return (
        <div>
            {/* ... outer structure ... */}
            <motion.div
                variants={skillContainerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className=" grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-6 px-10 md:px-20"
            >
                {
                    // --- 4. RENDER: Use the key to look up the component function ---
                    skills.map(({ id, key, name }) => {
                        // CRITICAL: Look up the component using the string key
                        const LogoComponent = LogoMap[key]; 

                        return (
                            <motion.div 
                                variants={skillItemVariants}
                                className=" flex flex-col justify-center items-center p-5 rounded-xl hover:scale-105 duration-300 bg-slate-800/30 backdrop-blur-xl border border-cyan-400 shadow-cyan-300 shadow-[0_0_15px_] hover:shadow-[0_0_30px_rgba(0,255,255,1)]" 
                                key={id}
                            >
                                {/* This will now correctly render the SVG component */}
                                <LogoComponent className='h-12 w-12 text-cyan-400 mb-2' /> 
                                
                                <h3 className="text-white text-lg font-semibold">{name}</h3>
                                <div className="absolute inset-0 pointer-events-none opacity-10"></div>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
            {/* ... closing tags ... */}
        </div>
    )
}

export default Skills