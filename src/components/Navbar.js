import React from 'react'
import Logo from '../assets/devlogo.png'
import { Link} from 'react-router-dom'
import { toast } from 'react-hot-toast';
import "./Navbar.css"


function Navbar(props) {
    let isloggedin=props.isloggedin;
    let setIsLoggedIn=props.setIsLoggedIn;
 
  

  return (
    <div className='flex w-11/12 max-w-[1160px] mx-auto justify-between items-center py-4'>
        <Link to='/'>
        <img src={Logo} alt='icon' width={200} height={40} className='bg-opacity-0 bg-red-400'></img>
        </Link>
       
        <nav className='hidden md:block'>
             <ul className='text-white flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
       
        

    
        
    
        
        
        <div className='flex gap-x-4 items-center'>
        { !isloggedin &&
            <Link to='/login'>
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
            </Link>
        }
        {!isloggedin &&
            <Link to='/signup'>
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Signup</button>
            </Link>
        }
        {isloggedin &&
            <Link to='/login'>
            <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Logout</button>
            </Link>
        }
        { isloggedin &&
            <Link to='/dashboard'>
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
            </Link>
        }
           
        </div>
    </div>
  )
}

export default Navbar