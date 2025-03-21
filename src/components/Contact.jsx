import React from "react";
import plane from "../assets/images/plane.png";

function Contact() {
  return (
    <>
      <div name="Contacts" className="w-screen p-5 flex gap-10 p-10 flex justify-center items-center relative top-[15vh] md:top-0">
        <div className=" hidden sm:hidden md:flex flex-col h-[90vh] w-[45vw] justify-center items-center ">
            <h2 className="text-bold font-xl;">contact me </h2>
            <p>Lorem ipsumt molestias autem aperiam tenetur tempora assumenda?</p>
            <img className="" src={plane} alt="" />
        </div>
        <div className="w-[90vw] h-[70vh] md:w-[45vw] md:h-[90vh] flex flex-col justify-center items-center  ">
        <h2 className="text-xl md:hidden text-center text-white m-3 font-bold;">contact me </h2>
        <form action="https://getform.io/f/bvrwppgb" method="POST" className="w-[90%]  p-5">
            <label htmlFor="name" className="block"> Name :
            </label>
            <input type="text" id="name" name="name" className="bg-white w-[90%]  border border-gray-300 p-2 my-2 font-xl rounded-md " required/>
            <label htmlFor="email" className="block"> Email :
            </label>
            <input type="email" id="email" name="email" className="bg-white w-[90%] border border-gray-300 p-2 my-2 font-xl rounded-md " required/>
            <b className="font-semibold  mb-3 text-justify text-sm text-blue-500 block">Be assure, we will not share your email with anyone..!</b>
            <label htmlFor="message" className="block"> Your message :
            </label>
           <textarea name="message" id="message" className="border border-gray-300 bg-white h-[10vh] md:h-[20vh] w-[90%]  p-2 my-2 font-xl rounded-md resize-none" required></textarea>
           <input type="submit" value="Send Message" className=" h-7 w-30 md:h-15 md:w-50 bg-blue-600 md:p-5 rounded-xl text-white text-semibold md:font-bold "/>
            
        </form>

        </div>

      </div>
      <hr className="relative top-[13vh] md:top-0"/>
    </>
  );
}

export default Contact;
