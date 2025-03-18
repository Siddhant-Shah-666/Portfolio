import React, { useActionState, useState } from "react";
import '../components/navbar.css'
import icon from "../assets/images/icon.png";
import cross from "../assets/images/cross.jpg";
import menuimg from "../assets/images/menu.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  

  return (
    <>
      <div className="navbar w-screen py-1 px-4 md:px-20 shadow-md h-16">
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
              <li>Home</li>
              <li>About</li>
              <li>Experiance</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              <img className="h-10 " src={menu ? cross :menuimg} alt="" />
            </div>
          </div>
        </div>
        {menu && (
          <div className="mobile left-box ">
            <ul className="md:hidden h-screen font-700 flex flex-col justify-center items-center space-y-3 fixed top-0 left-0 right-0 font-semibold text-lg">
              <li>Home</li>
              <li>About</li>
              <li>Experiance</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
