import React from 'react'

export default function IconHeader({children  , onclick}) {
  return (
    <div onClick={()=>setshowInput((res)=>!res)} className=" w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
       {children}
    </div>
  )
}
