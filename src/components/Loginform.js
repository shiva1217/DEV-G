import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import './Loginform.css';

function Loginform({setIsLoggedIn}) {
    const navigate=useNavigate();
    const [formData, setFormData]=useState( {
        email:"", password:""
    })
    const [showPassword, setShowPassword]=useState(false)

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }

  return (

        <form 
        className='flex flex-col w-full gap-y-4 mt-6'
        onSubmit={submitHandler}>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email" 
                className='inputfield bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'  
            />
              
            </label>

            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input 
                required
                type={showPassword ? ("text"): ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='inputfield bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span onClick={()=>setShowPassword((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {
                    showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                }
            </span>
            <div className='relative w-full mt-1'>
                <Link to="#" className=' text-xs text-blue-100 right-0 absolute'>
                    Forgot password
                </Link>
            </div>
            
            </label>
         
           
            <button className='w-full bg-yellow-50 rounded-[8px] text-center font-medium text-richblack-900 px-[12px] py-[8px] mt-8'>Sign In</button>
        </form>
  
  )
}

export default Loginform