import { useState } from "react"


export default function MoalGetNobat({isTodayAcsepting}) {
    console.log(isTodayAcsepting);
    
    const [show ,setShow]=useState(false);

  return (
    <div className=" w-[26rem] h-lvh mb-[9.5rem] rounded-sm flex flex-col">
        <span onClick={()=>setShow((res)=>!res)} className=" text-center border-b-[.2px] border-[gray] pb-[.3rem] cursor-pointer">نوبت های امروز </span>
        
            <div className={` ${show ? " hidden" : "block"} hover: p-[.4rem] custom_shadow9 h-[4rem] text-[rgba(0, 0, 0, 0.65)]  transition ease-in delay-150 `}  >
                    {isTodayAcsepting.map((res)=><p>{res}</p>)}
            </div>
        
        <div>
            <input type="checkbox" className=" w-[2rem] h-[2rem] bg-[black]" name="" id="" />
        </div>
    </div>
  )
}
