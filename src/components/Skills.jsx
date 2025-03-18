import React from 'react'

import reactpng from "../assets/images/react2.png";
import node from "../assets/images/node2.png";
import mongo from "../assets/images/mongo2.png";
import express from "../assets/images/express2.png";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import hinata from "../assets/images/hinata.png";

function Skills() {
    const skills=[
        {
            id:1,
            logo:reactpng,
            name:"React"
        },
        {
            id:2,
            logo:reactpng,
            name:"React"
        },
        {
            id:3,
            logo:reactpng,
            name:"React"
        },
        {
            id:4,
            logo:reactpng,
            name:"React"
        },
        {
            id:5,
            logo:reactpng,
            name:"React"
        },
        {
            id:6,
            logo:reactpng,
            name:"React"
        },
        {
            id:7,
            logo:reactpng,
            name:"React"
        },
        {
            id:8,
            logo:reactpng,
            name:"React"
        },
        {
            id:9,
            logo:reactpng,
            name:"React"
        },
        {
            id:10,
            logo:reactpng,
            name:"React"
        }, 
        {
            id:11,
            logo:reactpng,
            name:"React"
        },
        {
            id:12,
            logo:reactpng,
            name:"React"
        },       

    ]
  return (
    <div>
      <div name="Skills" className="w-screen py-5 relative top-[10vh] md:top-[-5vh]">
        <h2 className='text-3xl font-bold mb-10 text-center'>Skills</h2>
        <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-5 px-10 md:px-20">
            {
                skills.map(({id,logo,name})=>
                    (
                        <div className=" flex flex-col justify-center items-center bg-red-300 p-5 rounded-xl hover:scale-110 duration-300 border-[2px] shadow-xl" key={id}>
                            <img className='h-30 w-30' src={logo} alt="" />
                            <h3>{name}</h3>

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
