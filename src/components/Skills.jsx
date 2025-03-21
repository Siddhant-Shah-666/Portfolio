import React from 'react'

import reactpng from "../assets/images/react2.png";
import node from "../assets/images/node2.png";
import mongo from "../assets/images/mongo2.png";
import express from "../assets/images/express2.png";
import hinata from "../assets/images/hinata.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import tailwind from "../assets/images/tailwind.png";
import bootstrap from "../assets/images/bootstrap.png";
import php from "../assets/images/php.png";
import mysql from "../assets/images/mysql.png";


function Skills() {
    const skills=[
        {
            id:1,
            logo:html,
            name:"Html"
        },
        {
            id:2,
            logo:css,
            name:"Css"
        },
        {
            id:3,
            logo:js,
            name:"JavaScript"
        },
        {
            id:4,
            logo:reactpng,
            name:"React"
        },
        {
            id:5,
            logo:tailwind,
            name:"Tailwind"
        },
        {
            id:6,
            logo:node,
            name:"Node.js"
        },
        {
            id:7,
            logo:express,
            name:"Express.js"
        },
        {
            id:8,
            logo:mongo,
            name:"MongoDb"
        },
        {
            id:9,
            logo:php,
            name:"Php"
        },
        {
            id:10,
            logo:mysql,
            name:"MySql"
        }, 
           

    ]
  return (
    <div>
      <div name="Skills" className="w-screen py-5 relative top-[10vh] md:top-[-5vh]">
        <h2 className='text-3xl font-bold mb-10 text-center'>Skills</h2>
        <div className=" grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-5 px-10 md:px-20">
            {
                skills.map(({id,logo,name})=>
                    (
                        <div className=" flex flex-col justify-center items-center bg-red-300 p-5 rounded-xl hover:scale-110 duration-300 border-[2px] shadow-xl bg-white/20 backdrop-blur-xl border border-white/20 " key={id}>
                            <img className='h-30 w-30' src={logo} alt="" />
                            <h3>{name}</h3>
                            <div class="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>
                        </div>
                    )
                )
            }
        </div>
      </div>
      <hr className='relative top-[10vh] md:top-0'/>
    </div>
  )
}

export default Skills
