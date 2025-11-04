import React from "react";
import {motion} from 'motion/react'
import plane from "../assets/images/plane.png";

function Contact() {
  return (
    <>
      <div name="Contacts" className="w-screen p-5 flex gap-10 p-10 flex justify-center items-center relative top-[15vh] md:top-0 relative">
        <div className=" hidden sm:hidden md:flex flex-col h-[70vh] md:h-[90vh] w-[45vw] justify-center items-center gap-3  ">
            <h2 className="font-bold text-[4vh]  ;">Contact me..! </h2>
            <p>Looking for a dedicated developer? I'm ready to contribute.</p>
            <motion.img
            animate={{
              y:[2,-17,3,-13],
              x:[2,-14,3,-9],
              
            }}
            transition={{
              duration:3,
              ease:"easeInOut",
              repeat:Infinity,
              repeatType:"reverse"
            }}
            className="w-[28vw] mt-5" src={plane} alt="" />
        </div>
        <div className="w-[90vw] h-[50vh] md:w-[35vw] md:h-[65vh] rounded-xl flex flex-col justify-center items-center  bg-slate-800/30 backdrop-blur-xl border  border-cyan-400 shadow-cyan-300  shadow-[0_0_15px_] ">
        <h2 className="text-xl md:hidden text-center text-white mt-[5vh] mb-3 font-bold;">Contact me..! </h2>
        <form action="https://getform.io/f/bvrwppgb" method="POST" className="w-[90%] font-semibold  p-5 flex flex-col justify-center items-center text-cyan-300">
            
              <input type="text" id="name" name="name" placeholder="Enter Your Name" className="bg-slate-950/40 w-[80vw] md:w-[28vw] text-cyan-300  border  p-2 my-2 font-xl rounded-md " required/>

              <input type="email" id="email" name="email" placeholder="Enter Your E-mail" className="bg-slate-950/ w-[80vw] md:w-[28vw] text-cyan-300 border  p-2 my-2  font-xl rounded-md " required/>
        
            <b className="font-semibold  mb-3 text-justify text-sm text-cyan-500 block">Be assure, your email will not be shared with anyone..!</b>
           
           <textarea name="message" id="message" placeholder="Type Your Message" className="border  bg-slate-950/40 h-[10vh] md:h-[15vh] w-[80vw] md:w-[28vw]  p-2 my-2 text-cyan-300 font-xl rounded-md resize-none" required></textarea>

           <input type="submit" value="Send Message" className=" h-9 w-[80vw] md:h-10 md:w-[28vw] bg-cyan-800 md:p-1 my-2 rounded-xl text-white text-semibold md:font-bold border  border-cyan-400 shadow-cyan-300  shadow-[0_0_15px_] hover:bg-cyan-400"/>
            
        </form>

        </div>

      </div>
      <hr className="relative top-[13vh] md:top-0"/>
    </>
  );
}

export default Contact;
