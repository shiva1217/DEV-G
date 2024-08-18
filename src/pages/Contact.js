import { useState } from "react";
import {FaTelegramPlane} from 'react-icons/fa'
import {MdOutlineMessage} from 'react-icons/md'
import {toast} from 'react-hot-toast'
import { Link } from "react-router-dom";
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'




function Contact() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
   comments:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();
    toast.success("Message sent!")
    console.log("Finally printing the value of Form Data:");
    console.log(formData);

  }

  return (
   <div className="w-full md:max-w-[50%] mx-auto my-auto p-8 shadow flex flex-col">
   <div className="text-white flex justify-evenly items-center pb-2">
    <p className="text-3xl font-mono">Send us a message</p>
    <MdOutlineMessage fontSize={28}/>
   </div>
    <form onSubmit={submitHandler} className="space-y-2 p-8 bg-slate-400 rounded-lg">

        <label htmlFor="firstName" className="text-sm font-medium leading-6 text-black">First name</label>
        <br/>
        <input
        required
        type="text"
        name="firstName"
        id="firstName"
        placeholder="first name"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br/>
        <label htmlFor="lastName" className="text-sm font-medium leading-6 text-black">Last name</label>
        <br/>
        <input
        required
        type="text"
        name="lastName"
        id="lastName"
        placeholder="last name"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br/>
        <label htmlFor="email" className="text-sm font-medium leading-6 text-black">Email Address</label>
        <br/>
        <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="abc@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline  mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br/>
        <label htmlFor="country" className="text-sm font-medium leading-6 text-black">Country</label>
        <br/>
        <select
        required
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        >

        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
        <option>Other</option>
        </select>

        <br/>
        <label htmlFor="msg" className="text-sm font-medium leading-6 text-black">Message</label>
        <textarea placeholder='Enter conmments...' required rows="3" name='comments' id="msg" value={formData.comments} onChange={changeHandler}
            className=" mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
      
        <br/>
        <div className="flex justify-between">
          <button
          className="bg-blue-500 text-white font-bold rounded py-2 px-4 flex justify-center items-center gap-1"
          >Submit<FaTelegramPlane/>
          </button>
          {/* Social Icons */}
          <div className="md:flex justify-evenly items-center gap-2 md:gap-4 hidden">
              <Link to='https://www.linkedin.com/in/shivangisingh1217/' target="_blank" className="text-blue-800">
              <FaLinkedin fontSize={22}/>
              </Link>
              <Link to='#' target="_blank" className="text-blue-800">
                <FaTwitter fontSize={22}/>
              </Link>
              <Link to='#' className="text-blue-800">
              <FaInstagram fontSize={22}/>
              </Link>
          </div>
        </div>
       
      </form>


    {/* Footer Section */}
    <div className="text-white flex md:hidden justify-evenly p-6 items-center border-2 border-orange-100 rounded-md
    px-6 py-4 mt-6 outline outline-offset-2 outline-1 gap-x-4">
     <div className="flex justify-between items-center gap-2 md:gap-4">
      
        <Link to="/" className="text-lg text-gray-400 font-serif">Home</Link> 
    
       <Link to="/about" className="text-lg text-gray-400 font-serif">About</Link>

  
       
       
       
       
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
  );
}

export default Contact;
