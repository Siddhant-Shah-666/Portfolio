import React, { useActionState, useState } from "react";
import {motion} from "motion/react"
import { Link, ScrollLink } from "react-scroll";
import "../components/navbar.css";
import icon from "../assets/images/icon.png";
import cross from "../assets/images/cross.jpg";
import menuimg from "../assets/images/menu.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      delay: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="navbar w-screen py-1 px-4 md:px-20 bg-slate-950/40 backdrop-blur-lg shadow-md shadow-white h-16 fixed top-0 z-100">
        <div className="flex justify-between items-center h-16">
          <motion.div
          initial={{
            x:-30,
            opacity:0
          }}
          animate={
            {
              x:0,
              opacity:1
            }
          }
          transition={{
            duration:1,
            delay:1/2
          }}
          className="right-box flex space-x-2">
            <img
              className="h-10 w-10 flex invert brightness-0 contrast-100"
              src={icon}
              alt=""
            />
            <h3 className="flex justify-between items-center">Portfolio</h3>
          </motion.div>
          <div className="desktop left-box">
            <motion.ul 
            variants={navContainerVariant}
            initial="hidden"
            animate="visible"
            className="hidden  md:flex space-x-4"
            >
              <motion.li variants={navItemVariants}>
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="Skills"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="Projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="Contacts"
                  smooth={true}
                  duration={500}
                  offset={-30}
                  spy={true}
                  activeClass="active"
                >
                  Contacts
                </Link>
              </motion.li>
            </motion.ul>
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden relative z-100"
            >
              <img className="h-10 " src={menu ? cross : menuimg} alt="" />
            </div>
          </div>
        </div>
        {menu && (
          <div className="mobile left-box ">
            <motion.ul
            variants={navContainerVariant}
            initial="hidden"
            animate="visible"
             className="md:hidden text-slate-800 md:text-white h-screen font-700 flex flex-col justify-center items-center space-y-3 fixed top-0 left-0 right-0 font-semibold text-lg bg-slate-600">
              <motion.li variants={navItemVariants}>
                <Link
                  to="Home"
                  onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="Skills"
                  onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="Projects"
                  onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="Contacts"
                  onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-30}
                  activeClass="active"
                >
                  Contacts
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
