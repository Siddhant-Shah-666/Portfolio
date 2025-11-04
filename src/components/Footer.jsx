import React from "react";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";

function Footer() {
  return (
    <>
      <footer className="w-screen flex flex-col justify-center items-center p-5 relative top-[15vh] md:top-0">
        <ul className="h-15 w-[60vw]   flex list-none justify-center items-center space-x-2 border-white border-b-2 mb-7">
          <li>
            <img className="h-10 w-10 invert brightness-0 contrast-100 " src={insta} alt="" />
          </li>
          <li>
            <img className="h-11 w-11 invert brightness-0 contrast-100" src={whatsapp} alt="" />
          </li>
          <li>
            <img className="h-8 w-8 invert brightness-0 contrast-100" src={gmail} alt="" />
          </li>
          <li>
            <img className="h-10 w-10 invert brightness-0 contrast-100" src={linkedin} alt="" />
          </li>
        </ul>
        <h3 className="font-semibold text-md md:text-xl">A Developer Dedicated to Clean Code and Great Design.</h3>
        <h4 className="text-md text-white">Designed and Developed by **Siddhant Shah**.</h4>
      </footer>
    </>
  );
}

export default Footer;
