import "./App.css";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateArea from './components/PrivateArea'
import About from "./pages/About";
import Contact from "./pages/Contact"

function App() {
  const [isloggedin, setIsLoggedIn]=useState(false);
  return(
  <div className="flex flex-col  bg-richblack-900  w-screen min-h-screen">
    <Navbar isloggedin={isloggedin} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      {/* Aim: Not let anyone to see dashboard without login */}
      <Route path="/dashboard" element={
          <PrivateArea isloggedin={isloggedin}>
              <Dashboard/>   
          </PrivateArea>
            
      }/>
      
    </Routes>
  </div>
  );
}

export default App;
