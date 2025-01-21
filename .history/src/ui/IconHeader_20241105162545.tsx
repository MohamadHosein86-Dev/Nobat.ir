import React from 'react'

interface typeIconHeader{
    children:React.ReactNode  , onclick:()=>void
}
export default function IconHeader({children  , onclick}:typeIconHeader) {
  return (
    <div onClick={onclick} className=" md:flex w-[ful] hidden md:w-[2.5rem] h-[2.5rem]  items-center justify-center rounded-full bg-gray-100">
       {children}
    </div>
  )
}
