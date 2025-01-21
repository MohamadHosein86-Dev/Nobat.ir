import { useState } from "react"

interface Acordiontype{
    titel:string,
    contect:string[],
    contentTitle?:string[],
    listItems?:string[]
}
export default function Acordion({titel , contect ,contentTitle , listItems}:Acordiontype) {
 const [showContent,setShowContent]=useState(false);
    
  return (
    <div className=" mb-[1rem] w-[100%] border-b-[1px] border-b-[#ddd] border-solid pb-[1rem]">
        <div className=" flex w-[100$] justify-between">
            <h2 className=" font-bold">{titel}</h2>
            <button onClick={()=>setShowContent((res)=>!res)} className="pb-[.2rem] bg-[#efefef] flex items-center justify-center text-2xl w-[2.5rem] h-[2.5rem] rounded-full">+</button>
        </div>
        {showContent && 
            <div className=" flex flex-col gap-[1rem]">
            {contentTitle?.map((res)=> <p className="mb-[.8rem] text-[#878787]">{res}</p>)}
            {listItems && <ul className=" list-disc pr-[1rrem] " >
                {listItems?.map((res)=> <li className=" text-[#878787] mb-[.4rem]">{res}</li>)}
            </ul>}
            {contect.map((res)=> <p className=" text-[#878787] mb-[.8rem]">{res}</p>)}
            </div>
        }
    </div>
  )
}
