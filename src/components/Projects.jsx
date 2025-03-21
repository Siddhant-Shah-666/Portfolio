import React from 'react'

function Projects() {
  return (
    <>
     <div name="Projects" className='w-screen p-5 relative top-[10vh] md:top-0'>
      <h2 className='text-center font-bold text-3xl mb-5'>Projects</h2>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col md:flex-row gap-5 p-3 border-2 border-white rounded-md justify-center items-center ">
            <div className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center order-1">
                <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-3 w-[45vw] order-2">
                <h3 className='text-2xl font-bold  text-center '>Retro bus - an E-ticketing website</h3>
                <p className='hidden md:block text-sm md:text-md text-justify'>Retro Rides is a vintage-themed bus e-ticketing system designed to provide a seamless booking experience for classic bus rides. The platform allows users to browse available routes, select preferred timings, and book tickets effortlessly. Built using the <b>(MongoDB, Express, Node.js)</b> , the project features a responsive and user-friendly interface, secure payment integration, and real-time booking updates. The goal is to combine the charm of retro travel with the convenience of modern technology, creating a smooth and engaging user experience.</p>
                <div className="flex gap-5">
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="https://github.com/Siddhant-Shah-666/retroBus">view demo</a>
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="https://github.com/Siddhant-Shah-666/retroBus">get code</a>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 p-3 border-2 rounded-md justify-center items-center ">
            <div className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center  order-1 md:order-2">
                <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-3 w-[45vw] order-2 md:order-1">
                <h3 className='text-2xl font-bold  text-center '>BagBuy - An ecommerce website</h3>
                <p className='hidden md:block text-sm md:text-md text-justify'>Bagbuy is a modern e-commerce platform for buying a wide range of bags, from stylish backpacks to premium travel luggage. Built using the <b>(MongoDB, Express, Node.js)</b> , the platform allows users to browse collections, filter products, and securely place orders. It features a responsive design, user authentication, a shopping cart. The goal is to provide a smooth and convenient shopping experience while showcasing a diverse collection of high-quality bags.</p>
                <div className="flex gap-5">
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="https://github.com/Siddhant-Shah-666/Bagbuy">view demo</a>
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="https://github.com/Siddhant-Shah-666/Bagbuy">get code</a>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 p-3 border-2 rounded-md justify-center items-center border white ">
            <div className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center order-1">
                <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-3 w-[45vw] order-2">
                <h3 className='text-2xl font-bold  text-center '>Hinata Hyuga - A Fan-page</h3>
                <p className='hidden md:block text-sm md:text-md text-justify'>The Hinata Hyuga Fanpage is an image-sharing platform where fans can upload and download their favorite Hinata Hyuga pictures. Built using HTML, CSS, and JavaScript for the front end and PHP and MySQL for the backend, the platform allows users to securely upload images, view a gallery, and download content. It features user authentication, image categorization, and a responsive design to ensure a smooth browsing experience. The goal is to create a community-driven space where fans can easily share and enjoy Hinata-related content.</p>
                <div className="flex gap-5">
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="https://github.com/Siddhant-Shah-666/php-projects/tree/main/Hinata">view demo</a>
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="https://github.com/Siddhant-Shah-666/php-projects/tree/main/Hinata">get code</a>
                </div>
            </div>
        </div>

        <div className="hidden flex flex-col md:flex-row gap-5 p-3 border-2 rounded-md justify-center items-center border-white">
            <div className="w-[80vw] h-[30vh] md:w-[45vw] md:h-[40vh] bg-red-600 rounded-md  justify-center items-center order-1 md:order-2">
                <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-3 w-[45vw]  order-2 md:order-1">
                <h3 className='text-2xl font-bold text-center '>Project name 4</h3>
                <p className='hidden md:block text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta laboriosam fuga optio possimus quia corrupti sint consectetur aspernatur tenetur beatae facere obcaecati, exercitationem nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi blanditiis ut, vero a fugit pariatur cum inventore magnam asperiores! Reiciendis est impedit ut animi, nesciunt dolfuga suscipit obcaecati sapiente ducimus? Harum quisquam, impedit facilis enim numquam laboriosam doloribus modi rerum in, eaque, voluptatibus aspernatur reprehenderit odit ea dolorem vel?</p>
                <div className="flex gap-5">
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="">view demo</a>
                    <a className='h-10 w-35 text-sm md:text-xl bg-blue-400 rounded-md text-white flex justify-center items-center' href="">get code</a>
                </div>
            </div>
        </div>
      </div>
      <hr className='relative top-[10vh] md:top-[5vh]'/>
      </div>
    </>
   
  )
}

export default Projects
