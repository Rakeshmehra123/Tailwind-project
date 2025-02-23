import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AiTwotoneHome } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";

const Footer = () => {
  return (
    <div className='mt-35 ml-50 text-amber-100 font medium bg-stone-600 mr-50 px-8 py-5 rounded-2xl'>

        <ul className='flex justify-between px-5 gap-4 font-semibold'>
                        <li className='hover:bg-cyan-200 p-3 hover:text-black rounded-lg text-white '><a href='/index.html'><AiTwotoneHome /></a></li>
                        <li className='hover:bg-cyan-200 p-3 hover:text-black  rounded-lg text-white'><a href='#'><GoProjectSymlink /></a></li>
                        
                        <li className='p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white'><a href='#'><BsLinkedin /></a> </li>
                        <li className='p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white'><a href='#'><SiGithub /></a></li>
                    </ul>
      
    </div>
  )
}

export default Footer