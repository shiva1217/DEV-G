
import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateArea({isloggedin, children}) {
  if(isloggedin){
    return children;
  }
  else{
    return <Navigate to='/login'/>
  }
  
}

export default PrivateArea
