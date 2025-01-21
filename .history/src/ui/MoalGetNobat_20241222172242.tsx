import { useState } from "react"
import { useDoctor } from "../hooks/useDoctor";



interface typeInput{
    isTodayAcsepting:Array<string>;
    time_slots:Array<{from:string, to:string}>;
}

export default function MoalGetNobat({isTodayAcsepting , time_slots }:typeInput) {
    
    const time = new Date().toLocaleTimeString();
    const {doctor}=useDoctor();
    
    
    const [cheacked , setCheacked] = useState(false);
    console.log(cheacked);
    
  return (
    <div className=" w-[26rem] top-0 h-lvh mb-[9.5rem] rounded-sm flex flex-col relative bg-[#fff]">
        <span className=" transition ease-in delay-100 custom_shadow10 text-center border-b-[1px] border-[#d9d9d9 ] pb-[.3rem] cursor-pointer"> نوبت های امروز {isTodayAcsepting} </span>
        
        <div className="z-0 mt-[1rem] flex gap-[1rem]">
         
          {time_slots?.map((res , index)=>
          <div key={index} className={` ${time < res.from ? "bg-[red]" : ""}  cursor-pointer rounded-sm border-[#f5f5f5] border-[1px] p-[.5rem] flex items-center gap-[.8rem] w-[10rem]`}>
              <label  htmlFor=""> از  {res.from} تا {res.to} </label>
              <input disabled={  && time > res.from} onChange={(x)=>setCheacked(x.target.checked)} className=" chelckBox" type="checkbox" />
          </div>
          )}

        </div>
    </div>
  )
}
