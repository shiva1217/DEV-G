import React from 'react'
import gif from '../assets/images/gif.gif'
import { Link } from "react-router-dom";
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

function Dashboard() {
  return (
    <div className='flex flex-col justify-evenly md:justify-center items-center h-screen'>
        <h1 className='text-3xl  text-gray-400 font-serif'>Welcome to Dashboard!</h1>
        <img src={gif} alt='img' height={350} width={350} className='mt-8'></img>
         {/* Footer Section */}
        <div className="text-white flex md:hidden justify-evenly p-6 items-center border-2 border-orange-100 rounded-md
        px-6 py-4 mt-6 outline outline-offset-2 outline-1 gap-x-4">
        <div className="flex justify-between items-center gap-2 md:gap-4">
          
            <Link to="/" className="text-lg text-gray-400 font-serif">Home</Link> 
        
          <Link to="/about" className="text-lg text-gray-400 font-serif">About</Link>
          <Link to="/contact" className="text-lg text-gray-400 font-serif">Contact</Link>

          
        </div>
        {/* Social Links */}
        <div className="flex justify-evenly items-center gap-2 md:gap-4">
            <Link to='https://www.linkedin.com/in/shivangisingh1217/' target="_blank" className="text-gray-400">
            <FaLinkedin/>
            </Link>
            <Link to='#' target="_blank" className="text-gray-400">
              <FaTwitter/>
            </Link>
            <Link to='#' className="text-gray-400">
            <FaInstagram/>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Dashboard