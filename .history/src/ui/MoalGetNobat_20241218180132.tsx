import { useState } from "react"


export default function MoalGetNobat({isTodayAcsepting}) {
    console.log(isTodayAcsepting);
    
    const [show ,setShow]=useState(false);

  return (
    <div className=" w-[26rem] h-lvh mb-[9.5rem] rounded-sm flex flex-col">
        <span onClick={()=>setShow((res)=>!res)} className=" text-center border-b-[.2px] border-[gray] pb-[.3rem] cursor-pointer">نوبت های امروز </span>
        {show &&
            <div className=" text-[rgba(0, 0, 0, 0.65)]">
                    {isTodayAcsepting.map((res)=><span>{res}</span>)}
            </div>
        }
        <div>
            <input type="checkbox" className=" w-[2rem] h-[2rem] bg-[black]" name="" id="" />
        </div>
    </div>
  )
}
