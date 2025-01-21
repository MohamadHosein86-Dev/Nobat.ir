import { useState } from "react"
import { useDoctor } from "../hooks/useDoctor";

interface typeInput{

}
export default function MoalGetNobat(isTodayAcsepting , time:typeInput) {
    const {doctor}=useDoctor();
    
    console.log(doctor?.working_hours?.find((res)=>res.day === isTodayAcsepting.map((res)=>res) ));
    
    const [show ,setShow]=useState(false);

  return (
    <div className=" w-[26rem] top-0 h-lvh mb-[9.5rem] rounded-sm flex flex-col relative">
        <span onClick={()=>setShow((res)=>!res)} className=" transition ease-in delay-100 custom_shadow10 text-center border-b-[1px] border-[#d9d9d9 ] pb-[.3rem] cursor-pointer">نوبت های امروز </span>
        
            <ul className={` ${show ? " hidden" : "block"} absolute custom_shadow9 bg-[#fff] w-full z-10  top-[2rem] h-[20rem] text-[rgba(0, 0, 0, 0.65)]  transition ease-in delay-150 `}  >
                    {isTodayAcsepting.map((res)=><li className=" pr-[.5rem] hover:bg-[#e6f7ff] transition ease-in delay-100 cursor-pointer h-[rem]  pb-[.5rem] ">{res}</li>)}
            </ul>
        
        <div className="z-0 mt-[1rem]">
            <input type="checkbox" className=" w-[2rem] h-[2rem] bg-[black]" name="" id="" />
        </div>
    </div>
  )
}
