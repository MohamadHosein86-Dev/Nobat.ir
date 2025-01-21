import { useState } from "react"


export default function MoalGetNobat({isTodayAcsepting}) {
    console.log(isTodayAcsepting);
    
    const [show ,setShow]=useState(false);

  return (
    <div className=" w-[26rem] h-lvh mb-[9.5rem] rounded-sm flex flex-col relative">
        <span onClick={()=>setShow((res)=>!res)} className=" text-center border-b-[.2px] border-[gray] pb-[.3rem] cursor-pointer">نوبت های امروز </span>
        
            <ul className={` ${show ? " hidden" : "block"} absolute custom_shadow9 w-full z-[1050]  top-[2rem] h-[20rem] text-[rgba(0, 0, 0, 0.65)]  transition ease-in delay-150 `}  >
                    {isTodayAcsepting.map((res)=><li className=" hover:bg-[#e6f7ff] transition ease-in delay-100 cursor-pointer h-[rem]  pb-[.5rem] ">{res}</li>)}
            </ul>
        
        <div className="">
            <input type="checkbox" className=" w-[2rem] h-[2rem] bg-[black]" name="" id="" />
        </div>
    </div>
  )
}
