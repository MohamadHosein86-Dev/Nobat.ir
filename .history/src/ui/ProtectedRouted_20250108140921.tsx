import React from 'react'
import useUser from '../hooks/useUser'

export default function ProtectedRouted({children}) {

  const  {authenticatd}=useUser();
  return (
        children
  )
}
