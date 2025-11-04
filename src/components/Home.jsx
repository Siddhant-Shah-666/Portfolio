import React from "react";
import { motion } from "motion/react";
import { ReactTyped, Typed } from "react-typed";

import reactpng from "../assets/images/react.svg";
import node from "../assets/images/nodedotjs.svg";
import mongo from "../assets/images/mongodb.svg";
import express from "../assets/images/express.svg";
import resume from "../assets/images/resume.pdf";
import certificate from "../assets/images/MernCertificate.pdf";
import tron from "../assets/images/Tron.png";


const infoContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delay: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const infoItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const skillContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.5,
    },
  },
};
const skillItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    scale: [0.6, 1.5, 1],
    opacity: [1, 0.7, 1],
    rotate: 360,
    transition: { duration: 1 },
  },
};

function Home() {
  return (
    <>
      <div
        name="Home"
        className="w-screen  py-1 px-4 md:px-20 flex flex-col md:flex-row justify-center items-center"
      >
        <motion.div
          variants={infoContainerVariant}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 md:h-[90vh] md:mt-[20vh] order-2 md:order-1"
        >
          <motion.p className="text-xl px-4" variants={infoItemVariants}>
            Welcome to my feed
          </motion.p>
          <motion.div
            variants={infoItemVariants}
            className="flex text-xl md:text-4xl space-y-2 px-4 "
          >
            <motion.h1>Hello, i'm a </motion.h1>
            <ReactTyped
              className="text-cyan-300 font-600 space-y-2 ml-2"
              strings={["Developer", "Programmer", "Designer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </motion.div>

          <motion.h6
            variants={infoItemVariants}
            className=" mt-4 mb-4 md:mt-10 mb-5 text-sm md:text-md px-5 text-justify text-white font-semibold text-shadow-md"
          >
            I’m a passionate MERN stack developer with strong skills in **HTML,
            CSS, JavaScript, PHP, MySQL, Node.js, and MongoDB**. I enjoy building
            responsive and dynamic web applications that provide a smooth user
            experience. Currently, I’m working on projects like a Bug tracking , a Bus e-ticketing system, and an E-commerce platform. I'm
            constantly learning and improving my skills, especially in React and
            modern web technologies, to stay updated with the latest trends in
            web development.
          </motion.h6>

          <div className="h-[20vh] w-[100vw] mt-15 md:h-[25vh] md:w-120  flex flex-col justify-center items-start  gap-3  ">
            <div className="w-[100vw] md:w-[25vw] h-15 flex gap-3">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-[30vw] md:w-[10vw] bg-gray-300 rounded-full p-2  flex justify-center items-center   shadow-lg"
              >
                RESUME
              </a>

              <div
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10  w-[30vw] md:w-[10vw] bg-gray-300 rounded-full p-2  flex  justify-center items-center  shadow-lg"
              >
                CERTIFICATE
              </div>
            </div>


            <motion.div variants={infoItemVariants} className="flex flex-col justify-center items-center space-y-2">
              <motion.h3 className="ml-3">Workink on</motion.h3>
              <motion.ul
                variants={skillContainerVariant}
                initial="hidden"
                animate="visible"
                className="h-15 w-50  flex list-none justify-center items-center space-x-2"
              >
                <motion.li variants={skillItemVariants}>
                  <img className="h-9 w-10 invert brightness-0 contrast-100 " src={reactpng} alt="" />
                </motion.li>
                <motion.li variants={skillItemVariants}>
                  <img className="h-9 w-10 invert brightness-0 contrast-100 " src={node} alt="" />
                </motion.li>
                <motion.li variants={skillItemVariants}>
                  <img className="h-9 w-10 invert brightness-0 contrast-100 " src={express} alt="" />
                </motion.li>
                <motion.li variants={skillItemVariants}>
                  <img className="h-9 w-10 invert brightness-0 contrast-100" src={mongo} alt="" />
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>

        <div className=" w-screen h-[60vh] md:w-1/2 order-1 md:order-2 shadow drop-shadow-[0_0_20px_rgba(0,255,255,1)] brightness-65 contrast-130 flex justify-center items-center">
          <motion.img
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 2,
            }}
            className="h-[40vh] mt-20 md:h-[60vh] md:w-[] md:ml-25 md:mt-0 will-change-transform"
            src={tron}
            alt=""
          />
        </div>
      </div>
      <hr className="relative top-[10vh] md:top-[-10vh]" />
    </>
  );
}

export default Home;
