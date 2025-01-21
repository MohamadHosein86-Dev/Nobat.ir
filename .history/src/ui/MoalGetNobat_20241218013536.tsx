import { useState } from "react"
import { useDoctor } from "../hooks/useDoctor";



interface typeInput{
    isTodayAcsepting:Array<string>;
    time_slots:Array<{from:string, to:string}>;
}

export default function MoalGetNobat({isTodayAcsepting , time_slots }:typeInput) {
    
    
    const {doctor}=useDoctor();
    const [show ,setShow]=useState(true);
    const [showClick ,setShowClick ] = useState(false);
    console.log(show);
    

  return (
    <div className=" w-[26rem] top-0 h-lvh mb-[9.5rem] rounded-sm flex flex-col relative bg-[#fff]">
        <span onClick={()=>setShow((res)=>!res)} className=" transition ease-in delay-100 custom_shadow10 text-center border-b-[1px] border-[#d9d9d9 ] pb-[.3rem] cursor-pointer"> نوبت های امروز {isTodayAcsepting} </span>
        
        <div className="z-0 mt-[1rem] flex gap-[1rem]">
          
          
          {time_slots?.map((res , index)=>
          <div key={index} className="  cursor-pointer rounded-sm border-[#f5f5f5] border-[1px] p-[.5rem] flex items-center gap-[.8rem] w-[10rem]">
              <label  htmlFor=""> از  {res.from} تا {res.to} </label>
              <input  className=" " type="checkbox" />
          </div>
        )}


        </div>
    </div>
  )
}
