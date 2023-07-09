"use client";
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='w-full lg:w-11/12 m-auto border-2 rounded-lg mt-4 flex justify-around lg:justify-between'>
//     {/* logo */}
//     <h2 className='m-2 font-bold'>FoodieFinds</h2>

//     {/* center nav */}
//     <div className='m-2'>
//         <ul className='font-normal flex invisible lg:visible'>
//             <li className='ml-2 mr-2 hover:text-red-600'><a href="">Explore</a></li>
//             <li className='ml-2 mr-2 hover:text-red-600'><a href="">Nearby Outlets</a></li>
//             <li className='ml-2 mr-2 hover:text-red-600'><a href="">Watch</a></li>
//         </ul>
//     </div>

//     {/* signin signup */}

//     <div className='flex'>
//         <button className='m-2 bg-yellow-400 text-white p-1 lg:pl-3 lg:pr-3 rounded-lg'>Signup</button>
//         <button className='m-2 bg-yellow-400 text-white p-1 lg:pl-3 lg:pr-3 rounded-lg'>Login</button>
//     </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  let Links = [
    { name: "Explore", link: "/" },
    { name: "Outlets", link: "/" },
    { name: "Watch", link: "/" },
   
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between mt-5 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-xl cursor-pointer flex items-center gap-1">
          <span className="font-bold">FoodieFind</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 text-sm md:my-0 my-7 font-normal">
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          <div className="flex">
        <button className="btn bg-yellow-400 text-white md:ml-8 text-sm px-2 py-1 rounded duration-500 md:static">
            Signup
          </button>
          <button className="btn bg-yellow-400 text-white md:ml-8 text-sm px-2 py-1 rounded duration-500 md:static">
            Login
          </button>
        </div>
        </ul>
        


        {/* button */}
       
      </div>
    </div>
  );
};

export default Navbar;
