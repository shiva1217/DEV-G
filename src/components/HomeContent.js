
import './HomeContent.css'
import {MdEngineering} from 'react-icons/md'
import adobe from '../assets/images/adobe.webp';
import amazon from '../assets/images/amazon.webp'
import apple from '../assets/images/apple.webp'
import flipkart from '../assets/images/flipkart.webp'
import google from '../assets/images/google.webp'
import linkedin from '../assets/images/linkedin.webp'
import meta from '../assets/images/meta.webp'
import microsoft from '../assets/images/microsoft.webp'
import netflix from '../assets/images/netflix.webp'
import ola from '../assets/images/ola.webp'
import f from '../assets/images/profile-pic (6).png'
import { Link } from "react-router-dom";
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



function HomeContent() {

  return (
  <div className='text-white w-11/12 max-width-[1160px] mx-auto flex flex-col justify-center items-center gap-0 md:gap-4  mb-4'>
    <div
     className='text-white w-11/12 max-width-[1160px] mx-auto mt-24 md:mt-4 flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-0 md:gap-4  mb-4'
    >
      {/* <!--CONTAINER CONTAINING WHOLE THINGS--> */}
      <div
        className="relative my-20 flex items-center justify-between overflow-hidden px-10 py-10"
      >
        {/* <!--OUTER CIRCLE--> */}
        <div
          className="relative h-60 w-60 place-content-center border rounded-full border-purple-100 transition-all outerdiv"
        >
          <img
            src={google}
            alt=""
            height="64px"
            width="64px"
            className="absolute left-20 -top-8 logo"
          />
          <img
            src={meta}
            alt=""
            height="64px"
            width="64px"
            className="absolute top-36 -left-5 logo"
          />
          <img
            src={microsoft}
            alt=""
            height="64px"
            width="64px"
            className="absolute top-8 -right-5 logo"
          />
          <img
            src={netflix}
            alt=""
            height="64px"
            width="64px"
            className="absolute bottom-7 -right-4 logo"
          />
          <img
            src={apple}
            alt=""
            height="64px"
            width="64px"
            className="absolute right-24 -bottom-8 logo"
          />
          <img
            src={amazon}
            alt=""
            height="64px"
            width="64px"
            className="absolute top-10 -left-6 logo"
          />
          {/* <!--MIDDLE CIRCLE--> */}
          <div
            className="relative top-10 left-10 h-40 w-40 grid place-content-center transition-all rounded-full bg-purple-100"
          >
            {/* <!--INNER CIRCLE--> */}
            <div
              className="h-20 w-20 rounded-full relative bg-violet-200 transition-all innerdiv"
            >
              <img
                src={ola}
                alt=""
                height="64px"
                width="64px"
                className="absolute left-2 -bottom-8 innerlogo"
              />
              <img
                src={flipkart}
                alt=""
                height="64px"
                width="64px"
                className="absolute -left-8 bottom-2 innerlogo"
              />
              <img
                src={linkedin}
                alt=""
                height="64px"
                width="64px"
                className="absolute left-12 bottom-2 innerlogo"
              />
              <img
                src={adobe}
                alt=""
                height="64px"
                width="64px"
                className="absolute right-2 bottom-12 innerlogo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col gap-2'>
        <div className='flex space-x-3  items-center'>
        <h1 className=' text-3xl font-medium font-serif'>Placements</h1>
        <MdEngineering fontSize={26} className='text-red-400'/>
        </div>
        <div className="bg-violet-400 h-[2px] w-1/4 mt-1 "></div>
        <div className='flex flex-col gap-2'>
            <p className='text-lg font-mono font-sembold'>
                Get Offers from Top Companies
            </p>
            <p className="text-base italic text-slate-300">
            Our finest get offers from top-notch companies.
            </p>
        </div>
      </div>
    </div>

    {/* Founder Profile */}
    <div className='flex flex-col justify-center items-center'>
   
        <h1 className='text-2xl text-white font-serif'>Meet The <span className='text-2xl text-blue-600 font-serif'>Founder</span></h1>
        <div className="bg-violet-400 h-[2px] w-1/2 text-center mt-1 "></div>
 
       

        <img src={f}
            alt="founder"
            width={210}
            height={210}
            loading="lazy"
            className='rounded-full object-cover mt-6'
        /> 
        <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-white text-lg font-serif text-center'>Shivangi Singh</h1>
        <h2>Founder @DEV-G | B.Tech 3rd Year</h2>
        </div>
       
    </div>
    <div className=" text-white flex md:hidden justify-evenly p-6 items-center border-2 border-orange-100 rounded-md
    px-6 py-4 mt-6 outline outline-offset-2 outline-1 gap-x-4">
     <div className="flex justify-between items-center gap-2 md:gap-4">
      
    
       <Link to="/about" className="text-lg text-gray-400 font-serif">About</Link>

        <Link to="/contact" className="text-lg text-gray-400 font-serif">Contact</Link>
  
       
       
       
       
     </div>
     {/* Social Links */}
     <div className="flex justify-evenly items-center gap-2 md:gap-4">
        <Link to='https://www.linkedin.com/in/shivangisingh1217/' target="_blank" className="text-gray-400">
         <FaLinkedin/>
        </Link>
        <Link to='https://x.com/' target="_blank" className="text-gray-400">
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

export default HomeContent