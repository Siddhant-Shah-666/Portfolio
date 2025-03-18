import React, { useActionState, useState } from "react";
import {Link, ScrollLink} from 'react-scroll'
import '../components/navbar.css'
import icon from "../assets/images/icon.png";
import cross from "../assets/images/cross.jpg";
import menuimg from "../assets/images/menu.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  

  return (
    <>
      <div className="navbar w-screen py-1 px-4 md:px-20 shadow-md h-16 fixed top-0 bg-white z-100">
        <div className="flex justify-between items-center h-16">
          <div className="right-box flex space-x-2">
            <img className="h-10 w-10" src={icon} alt="" />
            <h3>
              Sid
              <p>Webdeveloper</p>
            </h3>
          </div>
          <div className="desktop left-box">
            <ul className="hidden md:flex space-x-4">
              
              <li><Link to="Home"  smooth={true} duration={500} offset={-70} activeClass="active">Home
              </Link></li>
              <li><Link to="Skills"  smooth={true} duration={500} offset={-70} activeClass="active">Skills
              </Link></li>
              <li><Link to="Projects"  smooth={true} duration={500} offset={-70} activeClass="active">Projects
              </Link></li>
              <li><Link to="Contacts"  smooth={true} duration={500} offset={-30} activeClass="active">Contacts
              </Link></li>
              
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden relative z-100">
              <img className="h-10 " src={menu ? cross :menuimg} alt="" />
            </div>
          </div>
        </div>
        {menu && (
          <div className="mobile left-box ">
            <ul className="md:hidden h-screen font-700 flex flex-col justify-center items-center space-y-3 fixed top-0 left-0 right-0 font-semibold text-lg bg-white">
            <li><Link to="Home"onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass="active">Home
              </Link></li>
              <li><Link to="Skills"onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass="active">Skills
              </Link></li>
              <li><Link to="Projects"onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass="active">Projects
              </Link></li>
              <li><Link to="Contacts"onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-30} activeClass="active">Contacts
              </Link></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
