import React from "react";
import { motion } from "motion/react";

function Projects() {
  const projectContainerVariant = {
    initial: (custom) => ({
      opacity: 0,
      x: custom,
    }),
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delayChildren: 0.7,
        staggerChildren: 0.5,
      },
    },
  };
  const projectItemVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <>
      <div
        name="Projects"
        className="w-screen p-5 relative top-[10vh] md:top-0"
      >
        <h2 className="text-center font-bold text-3xl mb-5">Projects</h2>
        <div className="grid grid-cols-1 gap-5">
          <motion.div
            variants={projectContainerVariant}
            custom={400}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-5 p-3 border-2 border-cyan-400 rounded-md justify-center items-center bg-slate-950/40 backdrop-blur-lg shadow-md  "
          >
            <motion.div
              variants={projectItemVariants}
              className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center order-1"
            >
              <img src="" alt="" />
            </motion.div>
            <motion.div
              variants={projectItemVariants}
              className="flex flex-col gap-3 w-[70vw] md:w-[45vw] order-2"
            >
              <h3 className="text-2xl font-bold  text-center  ">
                Tron - Bug tracking website
              </h3>
              <h6 className="hidden md:block text-sm md:text-md text-justify text-cyan-300 font-semibold">
                <p className="text-sm md:text-md text-justify text-cyan-300 mb-4">
                  A full-featured platform designed to streamline bug resolution
                  and project workflows.
                </p>

                <ul className="list-disc list-outside space-y-2 text-sm md:text-md text-cyan-300">
                  <li className="pl-2">
                    Implemented <strong>secure JWT-based authentication</strong> and 
                    <strong>Role-Based Access Control (RBAC)</strong>.
                  </li>
                  <li className="pl-2">
                    Integrated <strong>real-time chat</strong> functionality for seamless
                    team communication.
                  </li>
                  <li className="pl-2">
                    Features a <strong>mobile-friendly and responsive UI</strong> with
                    advanced styling effects (Glassmorphism and <strong>Vanta.js</strong>
                     backgrounds).
                  </li>
                  <li className="pl-2">
                    Developed an <strong>interactive dashboard</strong> offering key <strong>ticket
                    analytics</strong> and a project overview.
                  </li>
                  <li className="pl-2">
                    Core functionality includes <strong>ticket creation, assignment,
                    and progress tracking</strong> through the full lifecycle.
                  </li>
                </ul>
              </h6>
              <div className="flex gap-5">
                <a
                  className="h-10 w-50 md:w-35 text-sm md:text-lg bg-cyan-800 rounded-md text-white flex justify-center items-center border  border-cyan-400 shadow-cyan-300  shadow-[0_0_10px_] hover:bg-cyan-400"
                  href="https://tron-zmbx.onrender.com"
                >
                  View Live
                </a>
                <a
                  className="h-10 w-50 md:w-35 text-sm md:text-lg bg-cyan-800 rounded-md text-white flex justify-center items-center border  border-cyan-400 shadow-cyan-300 shadow-[0_0_10px_] hover:bg-cyan-400"
                  href="https://github.com/Siddhant-Shah-666/Tron"
                >
                  Source code
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={projectContainerVariant}
            custom={400}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-5 p-3 border-2 border-cyan-400 rounded-md justify-center items-center bg-slate-950/40 backdrop-blur-lg shadow-md "
          >
            <motion.div
              variants={projectItemVariants}
              className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center  order-1 md:order-2"
            >
              <img src="" alt="" />
            </motion.div>
            <motion.div
              variants={projectItemVariants}
              className="flex flex-col gap-3 w-[70vw] md:w-[45vw] order-2 md:order-1 "
            >
              <h3 className="text-2xl font-bold  text-center ">
                Retro Bus - An E-ticketing website
              </h3>
              <h6 className="hidden md:block text-sm md:text-md md:text-s text-justify text-cyan-300">
                <p className="text-sm md:text-md text-justify text-cyan-300 mb-4">
                  An online platform for easy and automated bus ticket booking
                  and scheduling.
                </p>

                <ul className="list-disc list-outside space-y-2 text-sm md:text-md text-cyan-300">
                  <li className="pl-2">
                    Built dynamic <strong>seat booking and route scheduling</strong> using 
                    <strong>Node.js</strong> and <strong>MongoDB</strong>.
                  </li>
                  <li className="pl-2">
                    Implemented <strong>user authentication</strong> and <strong>booking history
                    tracking</strong>.
                  </li>
                  <li className="pl-2">
                    Added comprehensive <strong>admin features</strong> for managing buses,
                    routes, and user data efficiently.
                  </li>
                </ul>
              </h6>
              <div className="flex gap-5">
                {/* <a className='h-10 w-35 text-sm md:text-lg bg-cyan-800 rounded-md text-white flex justify-center items-center border  border-cyan-400 shadow-cyan-300  shadow-[0_0_10px_] hover:bg-cyan-400' href="https://github.com/Siddhant-Shah-666/Bagbuy">view demo</a> */}
                <a
                  className="h-10 w-70 md:w-50 text-sm md:text-lg bg-cyan-800 rounded-md text-white flex justify-center items-center border  border-cyan-400 shadow-cyan-300  shadow-[0_0_10px_] hover:bg-cyan-400"
                  href="https://github.com/Siddhant-Shah-666/retroBus"
                >
                  Source code
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className="hidden flex flex-col md:flex-row gap-5 p-3 border-2 rounded-md justify-center items-center border-white">
            <div className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center order-1 md:order-2">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-3 w-[45vw]  order-2 md:order-1">
              <h3 className="text-2xl font-bold text-center ">
                Project name 4
              </h3>
              <p className="hidden md:block text-sm md:text-md text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                soluta laboriosam fuga optio possimus quia corrupti sint
                consectetur aspernatur tenetur beatae facere obcaecati,
                exercitationem nesciunt. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ea excepturi blanditiis ut, vero a fugit
                pariatur cum inventore magnam asperiores! Reiciendis est impedit
                ut animi, nesciunt dolfuga suscipit obcaecati sapiente ducimus?
                Harum quisquam, impedit facilis enim numquam laboriosam
                doloribus modi rerum in, eaque, voluptatibus aspernatur
                reprehenderit odit ea dolorem vel?
              </p>
              <div className="flex gap-5">
                <a
                  className="h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center"
                  href=""
                >
                  view demo
                </a>
                <a
                  className="h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center"
                  href=""
                >
                  get code
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="relative top-[10vh] md:top-[5vh]" />
      </div>
    </>
  );
}

export default Projects;
