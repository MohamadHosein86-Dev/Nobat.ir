import React from 'react';
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom';


interface TypeChildren{
    children:React.ReactNode
}
export default function ProtectedRouted({children}:TypeChildren) {

  const  {authenticatd}=useUser();
  const navigate =useNavigate();

  if(!authenticatd) {
    navigate("/");
  }
  else{
    return (
        children
    )
  }
 
}
