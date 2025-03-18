import React from "react";
import { ReactTyped, Typed } from "react-typed";

import reactpng from "../assets/images/react2.png";
import node from "../assets/images/node2.png";
import mongo from "../assets/images/mongo2.png";
import express from "../assets/images/express2.png";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import hinata from "../assets/images/hinata.png";

function Home() {
  return (
    <>
      <div className="w-screen  py-1 px-4 md:px-20 flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 md:h-[90vh] md:mt-20 order-2 md:order-1">
          <span className="text-xl px-4">Welcome to my feed</span>
          <div className="flex text-xl md:text-4xl space-y-2 px-4 ">
            <h1>Hello, i'm a </h1>
            {/* <span className="text-red-500 font-600 space-y-2 ml-2">developer</span> */}
            <ReactTyped
              className="text-red-500 font-600 space-y-2 ml-2"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className=" mt-4 mb-4 md:mt-10 mb-5 text-sm md:text-md px-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            velit, officiis inventore illum, assumenda reprehenderit quos,
            doloremque sunt culpa sed eos molestiae soluta excepturi iusto fuga.
            Eos similique odio magni sequi! Beatae quia molestiae, voluptatum,
            hic earum facere ut necessitatibus cumque eum iusto, excepturi omnis
            officiis dolorem. Modi libero iure quo voluptas magni nam tenetur
            consequatur!
          </p>
          <div className="h-[10vh] w-[100vw] mt-15 md:h-15 md:w-120  flex flex-col justify-center items-center md:flex-row md:justify-between  ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="ml-3">Available on</h3>
              <ul className="h-15 w-50  flex list-none justify-center items-center space-x-2">
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
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h3 className="ml-3">Workink on</h3>
              <ul className="h-15 w-50  flex list-none justify-center items-center space-x-2">
                <li>
                  <img className="h-9 w-10 " src={reactpng} alt="" />
                </li>
                <li>
                  <img className="h-9 w-10 " src={node} alt="" />
                </li>
                <li>
                  <img className="h-9 w-10 " src={express} alt="" />
                </li>
                <li>
                  <img className="h-9 w-10" src={mongo} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-screen h-1/2 md:w-1/2 order-1 md:order-2">
        <img className=" md:h-[90vh] md:w-[90%] md:ml-15 md:" src={hinata} alt="" /></div>
      </div>
      <hr className="relative top-[-10vh]"/>
    </>
  );
}

export default Home;
