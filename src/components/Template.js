import React from 'react'
import Loginform from './Loginform'
import Signupform from './Signupform'
import frameImage from '../assets/frame.png'
import {FcGoogle} from "react-icons/fc"

function Template({title, desc1, desc2, image, formtype, setIsLoggedIn}) {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 md:gap-y-0 gap-y-12'>
        <div className='flex flex-col w-11/12 max-w-[450px] mx-auto md:mx-0'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='flex flex-col text-[1.145rem] leading[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {
                formtype==="login" ? (<Loginform setIsLoggedIn={setIsLoggedIn}/>):(<Signupform setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <span className='text-richblack-700 font-medium leading[1.375rem]'>OR</span>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
              <FcGoogle/>  Sign in with Google
            </button>
        </div>
        
        <div className='w-11/12 max-w-[450px] mx-auto md:mx-0 relative'>
            <img src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy"
                    className='rounded-md'
                
                    />

                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className='absolute -top-2 right-3 rounded-md'
                /> 
        </div>
    </div>
  )
}

export default Template