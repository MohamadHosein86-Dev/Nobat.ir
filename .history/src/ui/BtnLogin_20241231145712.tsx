import React from "react"
import { Link } from "react-router-dom"
import useUser from "../hooks/useUser"


interface typeBtnLogin{
    children :React.ReactNode ,
    onclick:()=>void,
    to:string
}

export default function BtnLogin( {children , onclick , to} :typeBtnLogin) {
  const {user, authenticatd} =useUser();
  if( !authenticatd ) return null;
  console.log(user );

  return (
    <Link to={to} onClick={onclick} className="custom_shadow mr-[2] font-light  w-[8rem] h-[2rem]   flex justify-center items-center rounded-[6px] bg-btnLogin-200">
        <span className=" text-stone-100 text-sm  pb-2  opacity-[.75] font-semibold"> {children}</span>
    </Link>
  )
}
