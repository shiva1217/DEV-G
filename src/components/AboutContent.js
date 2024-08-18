import React from 'react'
import {FaLaptopCode} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"
import {FcDisclaimer} from "react-icons/fc"
import {GiCommercialAirplane} from "react-icons/gi"
import { Link } from 'react-router-dom'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'


function AboutContent() {
  return (
    <div className='text-white w-11/12 max-width-[1160px] mx-auto mt-4 flex flex-col justify-center gap-4 mb-4'>
        <div>
        <h1 className='text-center text-3xl font-medium font-serif'>Welcome to DEV-G!</h1>
        <div className="bg-violet-400 h-[2px] w-1/6 mt-1 mx-auto"></div>
        </div>
     
        <div className='flex text-center md:justify-center md:items-center gap-x-4'>
            <h2 className=' text-lg font-mono '>
            Master the MERN Stack and Build Powerful Web Applications 
            </h2>
            <FaLaptopCode fontSize={28} className='text-white'/>
        </div>
    
      <div className='mt-4'>
        <p className='text-slate-400'>
        Are you passionate about web development and eager to explore the MERN (MongoDB, Express, React, Node.js) stack? Look no further! DEV-G is your ultimate guide to becoming a MERN stack ninja. We provide comprehensive resources, notes, project ideas, templates, and exciting features to help you level up your skills and create cutting-edge web applications.
        </p>
      </div>
      <div className='mt-2'>
        <h2 className='text-lg font-serif'>
        Why Choose DEV-G?
        </h2>
       
        <ol className='text-slate-400'>
            <li>
                <span className='text-medium font-serif text-slate-300'>1. Extensive Learning Materials: </span> Dive deep into the MERN stack with our meticulously crafted notes and tutorials.
            </li>
            <li>
                <span className='text-medium font-serif text-slate-300'>2. Project Ideas and Templates: </span>Need inspiration? We offer a plethora of project ideas across various domains. Whether you're interested in building an e-commerce platform, a social media app, or a real-time chat application, our project ideas will spark your creativity.
            </li>
            <li>
                <span className='text-medium font-serif text-slate-300'>3. Community Interaction: </span>Join our vibrant community of MERN enthusiasts, where you can connect with like-minded developers, share your projects, and collaborate on exciting initiatives. 
            </li>
           
        </ol>
        </div>
        <div className='flex justify-center items-center gap-x-8'>
            <SiMongodb fontSize={40}/>
            <SiExpress fontSize={40}/>
            <FaReact fontSize={40}/>
            <FaNodeJs fontSize={40}/>
        </div>
        <div className='border rounded-md border-yellow-500 px-6 py-2 outline outline-offset-2 outline-1 '>
        <p className='text-slate-300 text-medium'>Ready to embark on your MERN stack adventure? Join us at DEV-G and unlock the full potential of this powerful web development technology stack. Start coding, creating, and building remarkable web applications today!</p>
       <h2 className='text-slate-300'>
       <Link to="/signup" className='text-red-400 text-lg'>Sign up</Link> now to gain access to our premium content and take your MERN stack skills to new heights.</h2>
        </div>
      
     <div className='mt-2'>
        <span className='flex gap-x-2 justify-center items-center'>
        <p className='text-lg font-semibold'>Disclaimer</p><FcDisclaimer/>
        </span>
        <div>
            <p className='text-slate-300 '>
                DEV-G is a React project in progress. While I have described many features on the website, not all of them are currently present. I am still learning the backend part, and I will be adding new features as I learn. Please do not rely on any of the features that are not currently present. Thank you for your understanding. <span className='flex text-lg font-mono justify-center items-center gap-x-2'> Happy coding! <GiCommercialAirplane fontSize={22}/> </span>
            </p>
            
        </div>
     </div>
     {/* Footer Section */}
     <div className="text-white flex md:hidden justify-evenly p-6 items-center border-2 border-orange-100 rounded-md
    px-6 py-4 mt-6 outline outline-offset-2 outline-1 gap-x-4">
     <div className="flex justify-between items-center gap-2 md:gap-4">
      
        <Link to="/" className="text-lg text-gray-400 font-serif">Home</Link> 
    

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

export default AboutContent