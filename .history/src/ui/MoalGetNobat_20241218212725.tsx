import { useState } from "react"
import { useDoctor } from "../hooks/useDoctor";



interface typeInput{
    isTodayAcsepting:Array<string>;
    time_slots:Array<{from:string, to:string}>;
}

export default function MoalGetNobat({isTodayAcsepting , time_slots }:typeInput) {
    
    
    const {doctor}=useDoctor();
    const [show ,setShow]=useState(false);
    const [showClick ,setShowClick ] = useState(false);


  return (
    <div className=" w-[26rem] top-0 h-lvh mb-[9.5rem] rounded-sm flex flex-col relative">
        <span onClick={()=>setShow((res)=>!res)} className=" transition ease-in delay-100 custom_shadow10 text-center border-b-[1px] border-[#d9d9d9 ] pb-[.3rem] cursor-pointer"> {isTodayAcsepting} نوبت های امروز </span>
        
            <ul className={` ${show ? " hidden" : "block"} absolute custom_shadow9 bg-[#fff] w-full z-10  top-[2rem] h-[20rem] text-[rgba(0, 0, 0, 0.65)]  transition ease-in delay-150 `}  >
                    {isTodayAcsepting.map((res)=>
                    <li className=" pr-[.5rem] hover:bg-[#e6f7ff] transition ease-in delay-100 cursor-pointer h-[rem]  pb-[.5rem] ">
                        {res} 
                    </li>)}
            </ul>
        
        <div className="z-0 mt-[1rem]">
          
          
          {time_slots?.map((res , index)=>
          <div key={index}>
              <label htmlFor=""> از  {res.from} تا {res.to} </label>
              <input type="checkbox" />
          </div>
        )}


        </div>
    </div>
  )
}
