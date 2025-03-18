import React from "react";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";

function Footer() {
  return (
    <>
      <footer className="w-screen flex flex-col justify-center items-center p-5 relative top-[15vh] md:top-0">
        <ul className="h-15 w-[60vw]   flex list-none justify-center items-center space-x-2 border-b-2 mb-7">
          <li>
            <img className="h-10 w-10 " src={insta} alt="" />
          </li>
          <li>
            <img className="h-11 w-11 " src={whatsapp} alt="" />
          </li>
          <li>
            <img className="h-8 w-8 " src={gmail} alt="" />
          </li>
          <li>
            <img className="h-10 w-10" src={linkedin} alt="" />
          </li>
        </ul>
        <h3 className="font-semibold text-md md:text-xl">Lorem ipsum dolor sit amet consectetur.</h3>
        <h4 className="text-md">Lorem ipsum dolor sit.</h4>
      </footer>
    </>
  );
}

export default Footer;
